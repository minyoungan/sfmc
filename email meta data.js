
    Platform.Load("Core","1.1");
    
    var batch;
    var email, emailList, emailRecord, emailObj, emailName, emailID, emailBU, emailCustomerKey, emailSubject, emailHTMLPaste, emailFolder, emailCreatedDate, emailModifiedDate;
    var debug = false;

    // Clear all data from email-Meta-Data Data Extensions
    emailDe = DataExtension.Init("Email");
    //emailDe.Rows.Remove(["emailSelectAll"], [1]);

    if (debug) { Write('<hr>Emails<hr>'); }
    try {
      for (batch = 0; batch < 250; batch++) {
        emailList = Email.Retrieve({Property:"ID",SimpleOperator:"between",Value:[(batch*1000),(batch*1000+999)]});
        //emailList = Email.Retrieve({Property:"CustomerKey",SimpleOperator:"notEquals",Value:"xxxxx"});
        if (debug) {
            Write('====================<br>');
            Write('emailID range = ' + (batch*1000) + ' to ' + (batch*1000+999) + '<br>');
            Write('email count = ' + emailList.length + '<br>');
            Write('====================<br>');
        }  
        if (emailList.length > 0) {
          for (email = 0; email < emailList.length; email++) {
          //for (email = 0; email < 100; email++) {
            emailRecord = emailList[email];
            emailName = emailRecord.Name;
            emailID = emailRecord.ID;
            emailBU = emailRecord.Client.ID;
            emailCustomerKey = emailRecord.CustomerKey;
            emailSubject = emailRecord.Subject;
            emailHTMLPaste = emailRecord.IsHTMLPaste;
            emailFolder = emailRecord.Folder;
            emailCreatedDate = emailRecord.CreatedDate;
            emailModifiedDate = emailRecord.ModifiedDate;
            emailDe.Rows.Add({emailName:emailName,emailID:emailID,emailBU:emailBU,emailCustomerKey:emailCustomerKey,emailSubject:emailSubject, \
                              emailFolder:emailFolder,emailHTMLPaste:emailHTMLPaste,emailCreatedDate:emailCreatedDate,emailModifiedDate:emailModifiedDate});
            if (debug) {
              Write('emailName = ' + emailName + '<br>');
              Write('object = ' + Stringify(emailRecord) + '<br>');
              Write('emailID = ' + emailID + '<br>');
              Write('emailBU = ' + emailBU + '<br>');
              Write('emailCustomerKey = ' + emailCustomerKey + '<br>');
              Write('emailSubject = ' + emailSubject + '<br>');
              Write('emailHTMLPaste = ' + emailHTMLPaste + '<br>');
              Write('emailFolder = ' + emailFolder + '<br>');
              Write('<br>====================<br>');
            }
          }  
        }
      }  
    }
    catch(e) {
    }
    Write('====================<br>');
    Write('emailMetaData All Done<br>');
    Write('====================<br>');
