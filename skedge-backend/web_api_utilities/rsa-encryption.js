var crypto = require("crypto");
var path = require("path");
var fs = require("fs");

var getRsaPrivateKey = function() {
    let absolutePath;
    if (process.cwd().slice(-9) == "cantaloop")
    {
        absolutePath = path.resolve("./skedge-backend/skegde-test-key-pair");
    } else {
        absolutePath = path.resolve("skegde-test-key-pair");
    }
    return fs.readFileSync(absolutePath, "utf8");
}
var getRsaPublicKey = function() {
    // public key is also hosted at https://pastebin.com/raw/Dz7ng2pk
    let absolutePath;
    if (process.cwd().slice(-9) == "cantaloop")
    {
        absolutePath = path.resolve("./skedge-backend/skegde-test-key-pair.pub");
    } else {
        absolutePath = path.resolve("skegde-test-key-pair.pub");
    }
    return fs.readFileSync(absolutePath, "utf8");
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