const decrypt = require("../web_api_utilities/rsa-encryption").decryptStringWithRsaPrivateKey

module.exports = function (req, res, next) {
    try {
        if(req.method == "POST" && req.body != undefined)
        {
            console.log("+---------------------------------------------------------+");
            console.log("| Received request @ "+req.originalUrl);
            decryptedBodyString = decrypt(req.body.encrypted_data).toString();
            req.body = JSON.parse(decryptedBodyString);
            console.log("+---------------------------------------------------------+");
            console.log("  Request body:\n");
            console.log(req.body);
            console.log("\n");
        }
    } 
    catch (error) {
        console.log(error);
    }
    
    next();
  }
