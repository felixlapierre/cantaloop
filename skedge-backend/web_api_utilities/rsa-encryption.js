var crypto = require("crypto");
var path = require("path");
var fs = require("fs");

var encryptStringWithRsaPublicKey = function(toEncrypt) {
    // public key is also hosted at https://pastebin.com/raw/Dz7ng2pk
    var absolutePath = path.resolve("../skegde-test-key-pair.pub");
    var publicKey = fs.readFileSync(absolutePath, "utf8");
    var buffer = Buffer.from(toEncrypt);
    var encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString("base64");
};

var decryptStringWithRsaPrivateKey = function(toDecrypt) {
    let absolutePath;
    if (process.cwd().slice(-9) == "cantaloop")
    {
        absolutePath = path.resolve("./skedge-backend/skegde-test-key-pair");
    } else {
        absolutePath = path.resolve("skegde-test-key-pair");
    }
    var privateKey = fs.readFileSync(absolutePath, "utf8");
    var buffer = Buffer.from(toDecrypt, "base64");
    var decrypted = crypto.privateDecrypt(privateKey, buffer);
    return decrypted.toString("utf8");
};

module.exports = {
    encryptStringWithRsaPublicKey: encryptStringWithRsaPublicKey,
    decryptStringWithRsaPrivateKey: decryptStringWithRsaPrivateKey
}