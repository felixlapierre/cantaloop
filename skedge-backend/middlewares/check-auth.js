const jwt = require('jsonwebtoken');
const rsa_encryption = require('../web_api_utilities/rsa-encryption');

module.exports = (req, res, next) =>{
    try {
        const token = req.body.authToken;
        req.body.authToken = jwt.verify(token, rsa_encryption.getRsaPrivateKey()); // Arbitrarily using private key as the HMAC key
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Authorization failed for secureEndpoint!"
        });
    }
};