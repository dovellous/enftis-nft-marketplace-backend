export const MongoDBHelper: any = {

    logEvent: (modelName: string, eventType: string, callback: Function, args: any) => {

        console.log("EVENT", modelName, eventType, args);

        callback();

    },

    logChange: (modelName: string, eventType: string, callback: Function, args: any) => {

        console.log("CHANGE", modelName, eventType, args);

        callback();

    },

}

export interface MongoDBChange {
    operationType: string;
    fullDocument: any;
    ns: {
        db: string;
        coll: string;
    };
    documentKey: {
        _id: any;
    };
    updateDescription?: {
        updatedFields: any;
        removedFields: string[];
    };
    clusterTime: any;
    resumeToken: any;
}