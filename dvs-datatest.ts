import express from "express";
import { BidStatusFirebaseCls } from "./src/app/hmvc/v1/bid-status/models/BidStatusFirebaseCls";
import { BidStatusMongoDBCls } from "./src/app/hmvc/v1/bid-status/models/BidStatusMongoDBCls";
import { BidStatusMySQLDBCls } from "./src/app/hmvc/v1/bid-status/models/BidStatusMySQLDBCls";
import { BidStatusSupabaseCls } from "./src/app/hmvc/v1/bid-status/models/BidStatusSupabaseCls";
import { HighAvailabilityDBCls } from "./src/modules/base/HighAvailabilityDBCls";
import mongoose from "mongoose";
import knex from "knex";

async function mainSupabase() {

    const _BidStatusSupabaseCls: any = new BidStatusSupabaseCls();

    _BidStatusSupabaseCls.subscribeToUpdates((data: any) => {

        console.log("SUBS::::::::::", data);

    })

    const init: any = async (): Promise<any> => {

        console.log("START DATABASE::::::::::");

        await _BidStatusSupabaseCls.insertARow([{
            bid_status_name: new Date().getTime()
        }]);

        const rows = await _BidStatusSupabaseCls.readAllRows();

        return rows;

    }

    console.log(await init());

}

async function mainFirebase() {

    const _BidStatusFirebaseCls: any = new BidStatusFirebaseCls();

    _BidStatusFirebaseCls.subscribeToUpdates((data: any) => {

        console.log("SUBS::::::::::", data);

    })

    const init: any = async (): Promise<any> => {

        console.log("START DATABASE::::::::::");

        await _BidStatusFirebaseCls.insertARow({
            bid_status_name: new Date().getTime()
        });

        const rows = await _BidStatusFirebaseCls.readAllRows();

        return rows;

    }

    console.log(await init());

}

async function mainMongoDB() {

    const cxnString = process.env.DATABASE_URL || "mongodb://127.0.0.1/dovellous";

    const cxnOptions = {
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4, // Use IPv4, skip trying IPv6,
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
    
    mongoose.connect(cxnString, cxnOptions);

    const _BidStatusMongoDBCls: any = new BidStatusMongoDBCls();

    _BidStatusMongoDBCls.subscribeToUpdates((data: any) => {

        console.log("SUBS::::::::::", data);

    })

    const init: any = async (): Promise<any> => {

        console.log("START DATABASE::::::::::");

        await _BidStatusMongoDBCls.insertARow({
            bid_status_name: new Date().getTime()
        });

        const rows = await _BidStatusMongoDBCls.readAllRows();

        return rows;

    }

    console.log(await init());

}


async function mainMySQL() {

    

    const _BidStatusMySQLDBCls: any = new BidStatusMySQLDBCls();

    _BidStatusMySQLDBCls.subscribeToUpdates((data: any) => {

        console.log("SUBS::::::::::", data);

    })

    const init: any = async (): Promise<any> => {

        console.log("START DATABASE::::::::::");

        await _BidStatusMySQLDBCls.insertARow({
            bid_status_name: new Date().getTime()
        });

        const rows = await _BidStatusMySQLDBCls.readAllRows();

        return rows;

    }

    console.log(await init());

}

mainMySQL();


