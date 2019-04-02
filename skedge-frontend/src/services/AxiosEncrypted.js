import axios from 'axios';
import { publicEncrypt } from 'crypto-browserify';
import { Buffer } from 'buffer';

const axios_secure = axios.create();

axios_secure.interceptors.request.use(function (config) {
  console.log("INTERCEPTOR IS WORKING!!!")
    if (config.data != undefined) {
        let pubKey = window.sessionStorage.getItem('rsa_pubKey')
        config.data = {"encrypted_data" : publicEncrypt(pubKey, new Buffer(JSON.stringify(config.data))).toString("base64")};
    }
    console.log("SENDING:");
    console.log(config.data);
    return config;
  }, function (error) {
    console.log(error);
    return Promise.reject(error);
  });

export {axios_secure};