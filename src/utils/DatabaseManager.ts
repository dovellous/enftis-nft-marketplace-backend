'use strict';
import { I____MODEL_ALL_CAMEL_CASE____Update, SupabaseTableCls } from "../modules";
import {Logger} from "./LoggerHelper";
const mongoose = require("mongoose");
export const DatabaseManager = class DatabaseManagerClass {
    /* Private Instance Fields */

    cxnString:string;

    cxnOptions:any;
    
    cxnDBInstance:any;
    
    _callbackOnFailure:any;

    /* Constructor */

    constructor() {

        this.cxnString = process.env.DATABASE_URL || "mongodb://127.0.0.1/dovellous";

        Logger.log('Initialising Mongoose ...' + this.cxnString);

        this.cxnOptions = {
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4, // Use IPv4, skip trying IPv6,
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
    
        this.cxnDBInstance = mongoose.connection;
    
        this.cxnDBInstance.on("error", this.onConnectionError);
    
        this.cxnDBInstance.once("open", this.onConnectionOpen);
        
    }

    /* Public Instance Methods */

    connect(callbackOnFailure: Function){
        
        this._callbackOnFailure = callbackOnFailure;

        return mongoose.connect(this.cxnString, this.cxnOptions);

    }

    onConnectionOpen(){

        Logger.success('Connection opened!');
        
    }
    
    onConnectionError(){

        Logger.error('Connection error!');
    
        this._callbackOnFailure();
    
    }
    
}

const replicateUpdateSupabaseDB: any = (collectionName: string, uuid: String, payload: I____MODEL_ALL_CAMEL_CASE____Update) => {
    
    const db: any = new SupabaseTableCls();
    
    db.updateMatchingRows();
    
}

export const replicateData: any = (primaryDatabase: string, collectionName: string, uuid:String, payload:I____MODEL_ALL_CAMEL_CASE____Update) => {
    
    switch (primaryDatabase) {
        
        case SUPABASE: {
            if (payload.updateSource === SUPABASE) {
                // replicateUpdateSupabaseDB(collectionName, uuid, payload);
                // replicateUpdateMongoDB(collectionName, uuid, payload);
                // replicateUpdateFirebaseDB(collectionName, uuid, payload);
                // replicateUpdateMySQLDB(collectionName, uuid, payload);
            }
            break;
        }
            
    }
}

export const FIREBASE: string = "FIREBASE";
export const SUPABASE: string = "SUPABASE";
export const MONGO_DB: string = "MONGO_DB";
export const MYSQL_DB: string = "MYSQL_DB";
export const HIGH_AVAILABILITY_DATABASE: string = "HIGH_AVAILABILITY_DATABASE";

export function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
  }
  
export function emptyOrRows(rows) {
    if (!rows) {
      return [];
    }
    return rows;
  }