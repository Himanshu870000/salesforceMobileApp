global without sharing class BatchClassForSendingEmailToDeliveryQueue  implements database.batchable<Sobject> {

    global Database.QueryLocator start(Database.BatchableContext bc) {
        
        return Database.getQueryLocator([SELECT Id, Name,Account__c, Program_Start_Date_Time__c, Stage__c FROM Program__c WHERE Program_Start_Date_Time__c != null AND Program_Start_Date_Time__c = TODAY] );
    }

     global void execute(Database.BatchableContext bc, List<Program__c> progList) {
         String progNames ='' ;
      //  List<String> progNames = new List <String>();
        for(Program__c prgRec: progList){

               //  progNames.add(prgRec.Name);
                 // progNames +='\n'+ prgRec.Name  +'\n';
                    progNames +='\n'+ prgRec.Name ;
                 
        }

                     sendEmail(progNames);
     }    
    
    global void finish(Database.BatchableContext bc) {
        system.debug('Batch ran successfully');
    }

    public static void sendEmail(String progNames){
        
        List<Messaging.SingleEmailMessage> semList = new List<Messaging.SingleEmailMessage>();
      
        List<String> queueEmaiList = new List<String>();
         List<String> userIds = new List<String>();
        Group groupRec = [SELECT Id, Name, DeveloperName, Email, Type FROM Group where  DeveloperName ='Delivery_Queue' Limit 1];
        System.debug('groupRec--->'+groupRec);
        List<GroupMember> gmRec = [select Id, UserOrGroupId From GroupMember where GroupId =:groupRec.Id];

        for(GroupMember grpMemRec: gmRec){
            
         userIds.add(grpMemRec.UserOrGroupId);
    }
       

        List<User> userList = [select Id,LastName,FirstName,Email from User where Id IN :userIds];
        System.debug('userList--->'+userList);
          for(User userRec: userList){
        
              queueEmaiList.add(userRec.Email);
            
       
         }
            if(queueEmaiList !=null){
                Messaging.SingleEmailMessage mymail = new Messaging.SingleEmailMessage();
                mymail.setToAddresses(queueEmaiList);  //conEmaiList
                mymail.setSenderDisplayName('Excelr');
                mymail.setSubject('Update Delivery Team');
                mymail.setSaveAsActivity(false);
                mymail.setPlainTextBody('Hello  Delivery Queue Team,'+'' +'\n'+'\n' + 'I hope this message finds you well. We are excited to announce that the'+progNames + '    '+' is set to begin today.'+'\n'+' \n' + 'Thanks & Regards'+'\n' + 'Excelr Team');
                semList.add(mymail);
            }
         
        Messaging.sendEmail(semList);
    }
    
}