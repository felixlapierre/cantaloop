const decrypt = require("../web_api_utilities/rsa-encryption").decryptStringWithRsaPrivateKey

module.exports = function (req, res, next) {
    try {
        if(req.method == "POST")
        {
            console.log(req.body);
            req.body = JSON.parse(decrypt(req.body.encrypted_data).toString());
            console.log(req.body);
            
        }
    } 
    catch (error) {
        console.log(error);
    }
    
    next();
  }
