public without sharing class ECAP_StudentsFormController {
    
    public string getCampaignId {get;set;}
    public string campaignId = System.currentPageReference().getParameters().get('cid');
    
    public ECAP_StudentsFormController() {
        try{
            if(!String.isBlank(campaignId)){
                System.debug('campaignId === > '+campaignId);
                getCampaignId = campaignId;
            }
        }
        catch(Exception e){
            system.debug('load error -- ' + e.getMessage());
        }
    }
    
    @RemoteAction
    public static string saveFormDetails(Contact con, string description, string campaignId){
        string result = '';
        try{
            system.debug('description -- ' + description);
            system.debug('con -- ' + con);
            system.debug('campaignId -- ' + campaignId);
            
            Campaign cmp = [SELECT Id, Name, Account__r.Name,Lead__c,Lead__r.Company, Description FROM Campaign WHERE Id =: campaignId];
            cmp.Description = description;
            update cmp;
            
            List<Contact> existingContactList = [SELECT Id FROM Contact WHERE Email =: con.Email];
            if(existingContactList.size() == 0){
                Id studentRecordTypeId = Schema.SObjectType.Contact.getRecordTypeInfosByName().get('Student').getRecordTypeId();
                Contact conRec = new Contact();
                conRec.FirstName = con.FirstName;
                conRec.LastName = con.LastName;
                conRec.Email = con.Email;
                conRec.Phone = con.Phone != null ? con.Phone : '';
                conRec.MailingCity = con.MailingCity != null ? con.MailingCity : '';
                conRec.MailingCountry = con.MailingCountry != null ? con.MailingCountry : '';
                conRec.MailingState = con.MailingState != null ? con.MailingState : '';
                conRec.MailingStreet = con.MailingStreet != null ? con.MailingStreet : '';
                conRec.MailingPostalCode = con.MailingPostalCode != null ? con.MailingPostalCode : '';
                conRec.RecordTypeId = studentRecordTypeId;
                existingContactList.add(con);
                result = 'success';                
            }
            else{
                existingContactList[0].FirstName = con.FirstName;
                existingContactList[0].LastName = con.LastName;
                existingContactList[0].Phone = con.Phone != null ? con.Phone : '';
                existingContactList[0].MailingCity = con.MailingCity != null ? con.MailingCity : '';
                existingContactList[0].MailingCountry = con.MailingCountry != null ? con.MailingCountry : '';
                existingContactList[0].MailingState = con.MailingState != null ? con.MailingState : '';
                existingContactList[0].MailingStreet = con.MailingStreet != null ? con.MailingStreet : '';
                existingContactList[0].MailingPostalCode = con.MailingPostalCode != null ? con.MailingPostalCode : '';
                result = 'existing';
            }
            upsert existingContactList;
                        
            if(cmp != null && existingContactList.size()>0){
                List<CampaignMember> cmpMemberRec = [SELECT Id, ContactId FROM CampaignMember WHERE ContactId =: existingContactList[0].Id];
                if(cmpMemberRec.size() == 0){
                    CampaignMember cMember = new CampaignMember();
                    cMember.ContactId = existingContactList[0].Id;
                    cMember.CampaignId = campaignId;
                    insert cMember;
                }
            }   
            
            if(result == 'success'){
                Utility.sendRegistrationEmail1(existingContactList[0].Id, cmp.Name, cmp.Lead__r.Company);
            }
        }
        catch(Exception e){
            system.debug('ERROR Campaign Form -- >> ' + e.getMessage() + ' At Line No -- >> ' + e.getLineNumber());
            return e.getMessage();
        }
        return result;
    } 
    
}