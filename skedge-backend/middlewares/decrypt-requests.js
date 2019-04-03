const decrypt = require("../web_api_utilities/rsa-encryption").decryptStringWithRsaPrivateKey

module.exports = function (req, res, next) {
    try {
        if(req.method == "POST" && req.body != undefined)
        {
            console.log("Received encrypted data:");
            console.log(req.body.encrypted_data);
            decryptedBodyString = decrypt(req.body.encrypted_data).toString();
            req.body = JSON.parse(decryptedBodyString);
            console.log("Above data decrypted:")
            console.log(req.body);

        }
    } 
    catch (error) {
        console.log(error);
    }
    
    next();
  }
