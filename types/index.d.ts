import {Schema, Types} from "mongoose";

export interface IClient {
    _id?: Types.ObjectId
    clientDeviceId: String;
    clientDeviceName: String;
    clientDevicePubKey?: String;
    serverDevicePubKey?: String;
    clientDeviceUserAgent: String;
    clientId: String;
    clientSecret: String;
}


export interface IUser {
    _id?: Schema.Types.ObjectId,
    firstName: String;
    lastName: String;
    username: String;
    emailAddress: String;
    password?: String;
    phoneNumber?: String;
    photoURL?: String;
    age?: Number;
    accessLevels?: Schema.Types.Mixed;
    organization?: Types.ObjectId;
    firebaseUserData?: Schema.Types.Mixed;
}

export interface IFirebaseUser {
    uid: String;
    email: String;
    displayName: String;
    photoURL?: String;
    phoneNumber?: String;
}

export interface IAccessLevels {
    defaultRole: String;
    roles: Types.Array<any>;
    permissions: Types.Array<any>;
}

