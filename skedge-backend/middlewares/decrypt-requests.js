const decrypt = require("../web_api_utilities/rsa-encryption").decryptStringWithRsaPrivateKey

module.exports = function (req, res, next) {
    try {
        let verbose_logging = true;
        if(req.method == "POST" && req.body != undefined)
        {
            if(verbose_logging) {
                console.log("+---------------------------------------------------------+");
                console.log("| POST request @ "+req.originalUrl);
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
        if(verbose_logging && req.method == "GET") 
        {
            if(verbose_logging) {
                console.log("+---------------------------------------------------------+");
                console.log("| GET request @ "+req.originalUrl);
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
