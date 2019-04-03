const jwt = require('jsonwebtoken');
const rsa_encryption = require('../web_api_utilities/rsa-encryption');

module.exports = (req, res, next) =>{
    try {
        //const token = req.headers.authorization.split(" ")[1];
        const token = req.body.authToken;
        req.body.authToken = jwt.verify(token, rsa_encryption.getRsaPrivateKey()); // Using private key as the HMAC key cuz why not
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Authorization failed for secureEndpoint!"
        });
    }
};