import axios from 'axios';
import { publicEncrypt } from 'crypto-browserify';
import { Buffer } from 'buffer';

const axios_secure = axios.create();

axios.interceptors.request.use(function (config) {
    if (config.data != undefined) {
        let pubKey = window.sessionStorage.getItem('rsa_pubKey')
        config.data = {"encrypted_data" : publicEncrypt(pubKey, new Buffer(JSON.stringify(config.data))).toString("base64")};
    }
    return config;
  }, function (error) {
    console.log(error);
    return Promise.reject(error);
  });

export {axios_secure};