import { Base64 } from 'js-base64';
import {HmacMD5, HmacSHA1, HmacSHA256, HmacSHA512, MD5, AES, DES} from 'crypto-js';
import ErrnoException = NodeJS.ErrnoException;

const Crypto = require("crypto");

const FileSystem = require('fs');

const certificatesPath:string = process.env.BACKEND_CERTIFICATE_PATH ?? "./cert";

const certificateName:string = process.env.BACKEND_CERTIFICATE_NAME ?? "dvs.mern.services.certificate";

const certificateHash:string = process.env.BACKEND_CERTIFICATE_OAEP ?? "sha256";

const certificateType:any = process.env.BACKEND_CERTIFICATE_TYPE ?? "rsa";

const base64Encode:any = (text: string) : string => {

    return Base64.encode(text);

}

const base64Decode:any = (text: string) : string => {

    return Base64.decode(text);

}

const generateCertificates: any = (save: boolean = true) : Array<string> => {

    const { publicKey, privateKey }:any = Crypto.generateKeyPairSync(certificateType, {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: "pkcs1",
            format: "pem",
        },
        privateKeyEncoding: {
            type: "pkcs1",
            format: "pem",
        },
    });

    if(save){

        saveCertificates(publicKey, privateKey);

    }

    return [publicKey, privateKey];

}

const saveCertificates = (publicKey: string, privateKey: string) => {
    if(!FileSystem.existsSync(certificatesPath)){
        FileSystem.mkdir(certificatesPath, function (error: ErrnoException) {
            if (!error) {
                writeCertificateToFile(publicKey, privateKey);
            }
        });
    }else{
        writeCertificateToFile(publicKey, privateKey);
    }
}

const writeCertificateToFile = (publicKey: string, privateKey: string) => {
    if(!FileSystem.existsSync(certificatesPath + "/" + certificateName + ".private.pem")){
        FileSystem.writeFileSync(certificatesPath + "/" + certificateName +".private.pem", privateKey);
        FileSystem.writeFileSync(certificatesPath + "/" + certificateName +".public.pem", publicKey);
    }
}

const encryptText = (plainText: string, encryptionKey: string) => {
    if(!encryptionKey){
        encryptionKey = getServerPublicKey();
    }
    return Crypto.publicEncrypt({
            key: encryptionKey,
            padding: Crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: certificateHash
        },
        // We convert the data string to a buffer
        Buffer.from(plainText)
    )
}

const decryptText = (encryptedText: NodeJS.ArrayBufferView) => {
    return Crypto.privateDecrypt(
        {
            key: getServerPrivateKey(),
            // In order to decrypt the data, we need to specify the
            // same hashing function and padding scheme that we used to
            // encrypt the data in the previous step
            padding: Crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: certificateHash
        },
        encryptedText
    )
}

const getServerPublicKey = () => {

    return FileSystem.readFileSync(certificatesPath + "/" + certificateName +".public.pem", 'utf8');

}

const getServerPrivateKey = () => {

    return FileSystem.readFileSync(certificatesPath + "/" + certificateName +".private.pem", 'utf8');

}

const hash = (data: any, algorithm:string=certificateHash) => {
    
    const hash = Crypto.createHash(algorithm);
    
    hash.update(data);
    
    return hash.digest('hex');
    
}

export {hash, HmacMD5, HmacSHA1, HmacSHA256, HmacSHA512, MD5, AES, DES, base64Encode, base64Decode, generateCertificates, encryptText, decryptText, getServerPublicKey}