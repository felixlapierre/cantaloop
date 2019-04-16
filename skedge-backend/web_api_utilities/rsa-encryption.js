var crypto = require("crypto");

const config =  require('../config');

var getRsaPrivateKey = function() {
    return config.privateRSAKey;
}
var getRsaPublicKey = function() {
    return config.publicRSAKey;
}

var encryptStringWithRsaPublicKey = function(toEncrypt) {
    var publicKey = getRsaPublicKey();
    var buffer = Buffer.from(toEncrypt);
    var encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString("base64");
};

var decryptStringWithRsaPrivateKey = function(toDecrypt) {
    var privateKey = getRsaPrivateKey();
    var buffer = Buffer.from(toDecrypt, "base64");
    var decrypted = crypto.privateDecrypt(privateKey, buffer);
    return decrypted.toString("utf8");
};

module.exports = {
    encryptStringWithRsaPublicKey: encryptStringWithRsaPublicKey,
    decryptStringWithRsaPrivateKey: decryptStringWithRsaPrivateKey,
    getRsaPrivateKey: getRsaPrivateKey,
    getRsaPublicKey: getRsaPublicKey
}