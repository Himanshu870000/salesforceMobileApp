const jsforce = require("jsforce");
require("dotenv").config();
//SF configuration
var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl: process.env.SFDC_URL || "https://utilitarianlab5-dev-ed.develop.my.salesforce.com",
});

module.exports = {

    initiateSFConnection : function (callback) {
        conn.login(
            process.env.SF_USER_NAME,
            process.env.SF_USER_PASSWORD,
            function (err, userInfo) {
                if (err) {
                    console.log("Errorr::" + err);
                    return console.error(err);
                }
                // Save them to establish connection next time.
                console.log(conn.accessToken);
                console.log(conn.instanceUrl);
                // logged in user property
                console.log("User ID: " + userInfo.id);
                console.log("Org ID: " + userInfo.organizationId);
                return callback(err);
            }
        );
    },

    getConnection: function () {
        return conn;
    },
};