require('dotenv').config();

import {JwtPayload, VerifyErrors} from "jsonwebtoken";

const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_TOKEN_EXPIRATION } = process.env;

const parseAuthorizationToken = (authorizationHeader: string) => {
    const [_, token] = authorizationHeader.trim().split(" ");
    return token;
};

const verifyBearerToken = (authorizationHeader:string, callBackFunction:any) => {
    
    const accessToken = parseAuthorizationToken(authorizationHeader);
    
    if (!accessToken) {
        
        callBackFunction(false);
        
    }
    
    try {
    
        jwt.verify(accessToken, JWT_SECRET, (error: VerifyErrors, decoded: any) => {
    
            if (error || decoded === null) {
    
                callBackFunction(false);
                
            }else{
    
                callBackFunction(decoded);
    
            }
        
        });
    
    } catch (error: any) {
    
        callBackFunction(false);
    
    }

}

type AvatarType = "S3 | BK | FB"

type UserStatusType = "ACTIVE|BANNED|NOT_ACTIVE|SUSPENDED|DELETED|ARCHIVED"

interface IAvatar {
    photoURL: String;
    s3Key: String;
    bucketId: Number;
    default: AvatarType;
}

interface IUserIdentities {
    uid: String;
    _id: String;
    sid: Number;
    mid: Number;
    uuid: String;
}

interface IJsonWebAccessToken {
    identities: IUserIdentities;
    avatar: IAvatar;
    username: String;
    email: String;
    clientId: String;
    userStatus: UserStatusType;
    roles: String | Array<String> | undefined;
}

const signBearerToken = (req: any, payload:any, time:number) => {

    const accessTokenPayload:IJsonWebAccessToken = {
        identities: payload.id,
        username: payload.username,
        email: payload.email,
        avatar: payload.avatar,
        userStatus: payload.userStatus,
        clientId: req.clientId,
        roles: payload.roles,
    };

    return jwt.sign(
        accessTokenPayload,
        JWT_SECRET,
        {
            expiresIn: time || JWT_TOKEN_EXPIRATION
        });

}

export {verifyBearerToken, signBearerToken, parseAuthorizationToken}
