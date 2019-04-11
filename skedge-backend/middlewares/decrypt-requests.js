const decrypt = require("../web_api_utilities/rsa-encryption").decryptStringWithRsaPrivateKey

module.exports = function (req, res, next) {
    try {
        let verbose_logging = false;
        if(req.method == "POST" && req.body != undefined)
        {
            if(verbose_logging) {
                console.log("+---------------------------------------------------------+");
                console.log("| Received request @ "+req.originalUrl);
            }

            decryptedBodyString = decrypt(req.body.encrypted_data).toString();
            req.body = JSON.parse(decryptedBodyString);

            if(verbose_logging) {
                console.log("+---------------------------------------------------------+");
                console.log("  Request body:\n");
                console.log(req.body);
                console.log("\n");
            }
        }
    } 
    catch (error) {
        console.log(error);
        console.log("---------------------------------------------------------\nReceived encrypted data @ "+req.originalUrl+" :");
        console.log(req.body.encrypted_data);
        console.log("---------------------------------------------------------\nDecrypted above data:");
        console.log(req.body);
    }
    
    next();
  }
