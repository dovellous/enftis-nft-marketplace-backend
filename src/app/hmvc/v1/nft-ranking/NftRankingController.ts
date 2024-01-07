import { RequestHandler } from "express";
import { ObjectId } from "mongodb";
import {
  handleHttpStatus,
  SUPABASE,
  MONGO_DB,
  FIREBASE,
  HIGH_AVAILABILITY_DATABASE,
  MYSQL_DB,
} from "../../../../utils";

import {
  INftRankingInsert,
  INftRankingRow,
  INftRankingUpdate
} from "./models/NftRankingTypesDefinitions";

import { NftRankingSupabaseCls } from "./models/NftRankingSupabaseCls";
import { NftRankingMongoDBCls } from "./models/NftRankingMongoDBCls";
import { NftRankingFirebaseCls } from "./models/NftRankingFirebaseCls";
import { NftRankingMySQLDBCls } from "./models/NftRankingMySQLDBCls";
import { NftRankingDTO } from "./models/NftRankingDTO";

export const payloadSupportsNftRankingRowInterface: any = (
  payload: any
): payload is INftRankingRow => {
  return !!payload?.NftRanking.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsNftRankingInsertInterface: any = (
  payload: any
): payload is INftRankingInsert => {
  return !!payload?.NftRanking
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsNftRankingUpdateInterface: any = (
  payload: any
): payload is INftRankingUpdate => {
  return !!payload?.NftRanking
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new NftRankingSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: INftRankingUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new NftRankingMongoDBCls().insertARow(payload);
          new NftRankingFirebaseCls().insertARow(payload);
          new NftRankingMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new NftRankingMongoDBCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
            
          );
          new NftRankingFirebaseCls().updateMatchingRows(
            payload,
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          new NftRankingMySQLDBCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          break;
        }

        case "patch": {
          new NftRankingMongoDBCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          new NftRankingFirebaseCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          new NftRankingMySQLDBCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          break;
        }

        case "delete": {
          new NftRankingMongoDBCls().deleteMatchingRows(
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          new NftRankingFirebaseCls().deleteMatchingRows(
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          new NftRankingMySQLDBCls().deleteMatchingRows(
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          break;
        }

        default: {
          break;
        }
      }
    }
  }
);

// Initialise MongoDB Database
const mongoDBDatabaseClass: any = new NftRankingMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: INftRankingUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new NftRankingSupabaseCls().insertARow(payload);
          new NftRankingFirebaseCls().insertARow(payload);
          new NftRankingMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new NftRankingSupabaseCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          new NftRankingFirebaseCls().updateMatchingRows(
            payload,
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          new NftRankingMySQLDBCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          break;
        }

        case "patch": {
          new NftRankingSupabaseCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          new NftRankingFirebaseCls().updateMatchingRows(
            payload,
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          new NftRankingMySQLDBCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          break;
        }

        case "delete": {
          new NftRankingSupabaseCls().deleteMatchingRows(
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          new NftRankingFirebaseCls().deleteMatchingRows(
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          new NftRankingMySQLDBCls().deleteMatchingRows(
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          break;
        }

        default: {
          break;
        }
      }
    }
  }
);

// Initialise Firebase Database
const firebaseDatabaseClass: any =
  new NftRankingSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: INftRankingUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new NftRankingSupabaseCls().insertARow(payload);
          new NftRankingMongoDBCls().insertARow(payload);
          new NftRankingMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new NftRankingSupabaseCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          new NftRankingMongoDBCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          new NftRankingMySQLDBCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          break;
        }

        case "patch": {
          new NftRankingSupabaseCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          new NftRankingMongoDBCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          new NftRankingMySQLDBCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          break;
        }

        case "delete": {
          new NftRankingSupabaseCls().deleteMatchingRows(
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          new NftRankingMongoDBCls().deleteMatchingRows(
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          new NftRankingMySQLDBCls().deleteMatchingRows(
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          break;
        }

        default: {
          break;
        }
      }
    }
  }
);

// Initialise MySQL Database
const mySQLDatabaseClass: any = new NftRankingSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: INftRankingUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new NftRankingSupabaseCls().insertARow(payload);
          new NftRankingMongoDBCls().insertARow(payload);
          new NftRankingFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new NftRankingSupabaseCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          new NftRankingMongoDBCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          new NftRankingFirebaseCls().updateMatchingRows(
            payload,
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          break;
        }

        case "patch": {
          new NftRankingSupabaseCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          new NftRankingMongoDBCls().updateMatchingRows(
            payload,
            payload.nft_ranking_uuid,
            "nft_ranking_uuid"
          );
          new NftRankingFirebaseCls().updateMatchingRows(
            payload,
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          break;
        }

        case "delete": {
          new NftRankingSupabaseCls().deleteMatchingRows(
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          new NftRankingMongoDBCls().deleteMatchingRows(
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          new NftRankingFirebaseCls().deleteMatchingRows(
            "nft_ranking_uuid",
            payload.nft_ranking_uuid
          );
          break;
        }

        default: {
          break;
        }
      }
    }
  }
);

// API GET: retrieves a representation of the specified resource.

/*
 * Gets, gets or edits a NftRanking resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftRankingGets interface.
 * @returns INftRankingRow data type object
 *
 */
const supabaseGetNftRanking = async (
  columnValue: any,
  columnName?: string
): Promise<INftRankingRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a NftRanking resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftRankingGets interface.
 * @returns INftRankingRow data type object
 *
 */
const mongoDBGetNftRanking = async (
  columnValue: any,
  columnName?: string
): Promise<INftRankingRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a NftRanking resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftRankingGets interface.
 * @returns INftRankingRow data type object
 *
 */
const firebaseGetNftRanking = async (
  columnValue: any,
  columnName?: string
): Promise<INftRankingRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a NftRanking resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftRankingGets interface.
 * @returns INftRankingRow data type object
 *
 */
const mysqlDBGetNftRanking = async (
  columnValue: any,
  columnName?: string
): Promise<INftRankingRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftRankingGets interface.
 * @returns INftRankingRow data type object
 *
 */
const apiGETNftRanking = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<INftRankingRow | any | null> => {
  // Intitialize the NftRankingResultObject variable
  let NftRankingResultObject: INftRankingRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      NftRankingResultObject =
        await supabaseGetNftRanking(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      NftRankingResultObject =
        await mongoDBGetNftRanking(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      NftRankingResultObject =
        await mongoDBGetNftRanking(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      NftRankingResultObject =
        await firebaseGetNftRanking(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      NftRankingResultObject =
        await firebaseGetNftRanking(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      NftRankingResultObject =
        await mysqlDBGetNftRanking(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      NftRankingResultObject =
        await mysqlDBGetNftRanking(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      NftRankingResultObject =
        await supabaseGetNftRanking(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    NftRankingResultObject =
      await supabaseGetNftRanking(columnValue, columnName);
  }

  return NftRankingResultObject;
};

/*
 * Gets an existing NftRanking resource
 *
 * @param req : Request - NftRanking request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftRankingGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftRanking']
    #swagger.description = 'Endpoint to get a new NftRanking resource.'
    #swagger.summary = 'Gets an existing NftRanking resource.'

    #swagger.path = '/models/nft-ranking'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['nft_ranking_uuid'] = {
      in: 'path',
      description: 'NftRanking nft_ranking_uuid key identifier used to get the resource.',
      required: true,
      type: 'string'
    }

  */

  /* #swagger.security = [{
      "bearerAuth": []
  }] */

  // Try to get the resource
  try {
    // Get the deviceId
    const { nft_ranking_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the NftRanking resource
      const uuid: string = nft_ranking_uuid;

      let NftRankingResultObject:
        | INftRankingRow
        | Array<INftRankingRow>
        | any
        | null;

      if (nft_ranking_uuid) {
        // Gets the NftRanking resource from the database
        NftRankingResultObject =
          apiGETNftRanking(req, "nft_ranking_uuid,", uuid);
      } else {
        // Gets all the models from the NftRanking resource
        NftRankingResultObject =
          apiGETNftRanking(req);
      }

      if (!NftRankingResultObject) {
        /* #swagger.responses[404] = {
          description: 'NftRanking resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'NftRanking',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "NftRanking resource was not found.",
          NftRankingResultObject,
          "NftRanking",
          "PUT"
        );
      }

      // Execute https request
      NftRankingResultObject =
        apiPUTNftRanking(
          req,
          NftRankingResultObject,
          uuid,
          "nft_ranking_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'NftRanking resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/NftRanking'
          }
          model: 'NftRanking',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        NftRankingResultObject,
        "NftRanking",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/nft-ranking", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'NftRanking',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/nft-ranking", Missing or invalid parameters.',
        req.body,
        "NftRanking",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the nft-ranking resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'NftRanking',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the nft-ranking resource.",
      error,
      "NftRanking",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a NftRanking resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftRankingInsert interface.
 * @returns INftRankingRow data type object
 *
 */
const supabasePostNftRanking = async (
  payload: any
): Promise<INftRankingInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a NftRanking resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftRankingInsert interface.
 * @returns INftRankingRow data type object
 *
 */
const mongoDBPostNftRanking = async (
  payload: any
): Promise<INftRankingRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a NftRanking resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftRankingInsert interface.
 * @returns INftRankingRow data type object
 *
 */
const firebasePostNftRanking = async (
  payload: any
): Promise<INftRankingInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a NftRanking resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftRankingInsert interface.
 * @returns INftRankingRow data type object
 *
 */
const mysqlDBPostNftRanking = async (
  payload: any
): Promise<INftRankingInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a NftRanking resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftRankingInsert interface.
 * @returns INftRankingRow data type object
 *
 */
const apiPOSTNftRanking = async (
  req: any,
  payload: any
): Promise<INftRankingInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the NftRanking resource into the database
  let NftRankingResultObject:
    | INftRankingRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      NftRankingResultObject =
        await supabasePostNftRanking(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      NftRankingResultObject =
        await mongoDBPostNftRanking(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      NftRankingResultObject =
        await mongoDBPostNftRanking(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      NftRankingResultObject =
        await firebasePostNftRanking(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      NftRankingResultObject =
        await firebasePostNftRanking(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      NftRankingResultObject =
        await mysqlDBPostNftRanking(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      NftRankingResultObject =
        await mysqlDBPostNftRanking(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      NftRankingResultObject =
        await supabasePostNftRanking(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    NftRankingResultObject =
      await supabasePostNftRanking(payload);
  }

  return NftRankingResultObject;
};

/*
 * Creates a new NftRanking resource
 *
 * @param req : Request - NftRanking request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftRankingPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftRanking']
    #swagger.description = 'Endpoint to create a new NftRanking resource.'
    #swagger.summary = 'Creates a new NftRanking resource.'

    #swagger.path = '/models/nft-ranking'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the NftRanking resource.',
      required: true,
      schema: {
        ____REQUIRED_PARAMS_LIST_OJECT____
      }
    }
  */

  /* #swagger.security = [{
      "bearerAuth": []
  }] */

  // Try to create the resource
  try {
    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      payload &&
      payloadSupportsNftRankingInsertInterface(payload)
    ) {
      // Compose the NftRanking request object
      const NftRankingData: INftRankingInsert =
      {
				author_id: payload.author_id,
				collection_id: payload.collection_id,
				fid: payload.fid,
				nft_id: payload.nft_id,
				nft_rank: payload.nft_rank,
				nft_ranking_created_at: payload.nft_ranking_created_at,
				nft_ranking_d14d: payload.nft_ranking_d14d,
				nft_ranking_d21d: payload.nft_ranking_d21d,
				nft_ranking_d24hr: payload.nft_ranking_d24hr,
				nft_ranking_d28: payload.nft_ranking_d28,
				nft_ranking_d7d: payload.nft_ranking_d7d,
				nft_ranking_floor_price: payload.nft_ranking_floor_price,
				nft_ranking_id: payload.nft_ranking_id,
				nft_ranking_items: payload.nft_ranking_items,
				nft_ranking_owners: payload.nft_ranking_owners,
				nft_ranking_updated_at: payload.nft_ranking_updated_at,
				nft_ranking_uuid: payload.nft_ranking_uuid,
				nft_ranking_volume: payload.nft_ranking_volume,
      };

      // Insert the NftRanking resource into the database
      let NftRankingResultObject:
        | INftRankingRow
        | any
        | null;

      // Execute https request
      NftRankingResultObject =
        apiPOSTNftRanking(
          req,
          NftRankingData
        );

      /* #swagger.responses[201] = {
        description: 'NftRanking resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/NftRanking'
          }
          model: 'NftRanking',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "NftRanking resource created successfully.",
        NftRankingResultObject,
        "NftRanking",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/nft-ranking". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'NftRanking',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/nft-ranking". Missing or invalid parameters.',
        req.body,
        "NftRanking",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the nft-ranking resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'NftRanking',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the nft-ranking resource.",
      error,
      "NftRanking",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a NftRanking resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftRankingUpdate interface.
 * @returns INftRankingRow data type object
 *
 */
const supabasePutNftRanking = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftRankingInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a NftRanking resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftRankingUpdate interface.
 * @returns INftRankingRow data type object
 *
 */
const mongoDBPutNftRanking = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftRankingRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a NftRanking resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftRankingUpdate interface.
 * @returns INftRankingRow data type object
 *
 */
const firebasePutNftRanking = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftRankingInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a NftRanking resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftRankingUpdate interface.
 * @returns INftRankingRow data type object
 *
 */
const mysqlDBPutNftRanking = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftRankingInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftRankingUpdate interface.
 * @returns INftRankingRow data type object
 *
 */
const apiPUTNftRanking = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftRankingInsert | any | null> => {
  // Intitialize the NftRankingResultObject variable
  let NftRankingResultObject: INftRankingRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      NftRankingResultObject =
        await supabasePutNftRanking(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      NftRankingResultObject =
        await mongoDBPutNftRanking(
          updatePayload,
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      NftRankingResultObject =
        await mongoDBPutNftRanking(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      NftRankingResultObject =
        await firebasePutNftRanking(
          updatePayload,
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      NftRankingResultObject =
        await firebasePutNftRanking(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      NftRankingResultObject =
        await mysqlDBPutNftRanking(
          updatePayload,
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      NftRankingResultObject =
        await mysqlDBPutNftRanking(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      NftRankingResultObject =
        await supabasePutNftRanking(
          updatePayload,
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    NftRankingResultObject =
      await supabasePutNftRanking(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return NftRankingResultObject;
};

/*
 * Updates an existing NftRanking resource
 *
 * @param req : Request - NftRanking request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftRankingPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftRanking']
    #swagger.description = 'Endpoint to update a new NftRanking resource.'
    #swagger.summary = 'Updates a new NftRanking resource.'

    #swagger.path = '/models/nft-ranking'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['nft_ranking_uuid'] = {
      in: 'path',
      description: 'NftRanking nft_ranking_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the NftRanking resource.',
      required: true,
      schema: {
        ____REQUIRED_PARAMS_LIST_OJECT____
      }
    }

  */

  /* #swagger.security = [{
      "bearerAuth": []
  }] */

  // Try to update the resource
  try {
    // Get the deviceId
    const { nft_ranking_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      nft_ranking_uuid &&
      payload &&
      payloadSupportsNftRankingUpdateInterface(payload)
    ) {
      // Get the uuid to identify the NftRanking resource
      const uuid: string = nft_ranking_uuid;

      // Compose the NftRanking request object
      const NftRankingData: INftRankingRow = {};
      
				if('author_id' in payload){ NftRankingData.author_id = payload.author_id; }
				if('collection_id' in payload){ NftRankingData.collection_id = payload.collection_id; }
				if('fid' in payload){ NftRankingData.fid = payload.fid; }
				if('nft_id' in payload){ NftRankingData.nft_id = payload.nft_id; }
				if('nft_rank' in payload){ NftRankingData.nft_rank = payload.nft_rank; }
				if('nft_ranking_created_at' in payload){ NftRankingData.nft_ranking_created_at = payload.nft_ranking_created_at; }
				if('nft_ranking_d14d' in payload){ NftRankingData.nft_ranking_d14d = payload.nft_ranking_d14d; }
				if('nft_ranking_d21d' in payload){ NftRankingData.nft_ranking_d21d = payload.nft_ranking_d21d; }
				if('nft_ranking_d24hr' in payload){ NftRankingData.nft_ranking_d24hr = payload.nft_ranking_d24hr; }
				if('nft_ranking_d28' in payload){ NftRankingData.nft_ranking_d28 = payload.nft_ranking_d28; }
				if('nft_ranking_d7d' in payload){ NftRankingData.nft_ranking_d7d = payload.nft_ranking_d7d; }
				if('nft_ranking_floor_price' in payload){ NftRankingData.nft_ranking_floor_price = payload.nft_ranking_floor_price; }
				if('nft_ranking_id' in payload){ NftRankingData.nft_ranking_id = payload.nft_ranking_id; }
				if('nft_ranking_items' in payload){ NftRankingData.nft_ranking_items = payload.nft_ranking_items; }
				if('nft_ranking_owners' in payload){ NftRankingData.nft_ranking_owners = payload.nft_ranking_owners; }
				if('nft_ranking_updated_at' in payload){ NftRankingData.nft_ranking_updated_at = payload.nft_ranking_updated_at; }
				if('nft_ranking_uuid' in payload){ NftRankingData.nft_ranking_uuid = payload.nft_ranking_uuid; }
				if('nft_ranking_volume' in payload){ NftRankingData.nft_ranking_volume = payload.nft_ranking_volume; }

      // Gets the NftRanking resource from the database
      let NftRankingResultObject:
        | INftRankingRow
        | any
        | null = apiGETNftRanking(
          req,
          "nft_ranking_uuid",
          uuid
        );

      if (!NftRankingResultObject) {
        /* #swagger.responses[404] = {
          description: 'NftRanking resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'NftRanking',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "NftRanking",
          "PUT"
        );
      }

      // Execute https request
      NftRankingResultObject =
        apiPUTNftRanking(
          req,
          NftRankingData,
          uuid,
          "nft_ranking_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'NftRanking resource updated successfully.',
        schema: {
          $ref: '#/definitions/NftRanking'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "NftRanking resource updated successfully.",
        NftRankingResultObject,
        "NftRanking",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/nft-ranking" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'NftRanking',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "NftRanking",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the nft-ranking resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'NftRanking',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the nft-ranking resource.",
      error,
      "NftRanking",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing NftRanking resource partially
 *
 * @param req : Request - NftRanking partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftRankingPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftRanking']
    #swagger.description = 'Endpoint to update a new NftRanking resource.'
    #swagger.summary = 'Updates a new NftRanking resource.'

    #swagger.path = '/models/nft-ranking'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['nft_ranking_uuid'] = {
      in: 'path',
      description: 'NftRanking nft_ranking_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the NftRanking resource.',
      required: true,
      schema: {
        ____REQUIRED_PARAMS_LIST_OJECT____
      }
    }

  */

  /* #swagger.security = [{
      "bearerAuth": []
  }] */

  // Try to update the resource
  try {
    // Get the deviceId
    const { nft_ranking_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      nft_ranking_uuid &&
      payload &&
      payloadSupportsNftRankingUpdateInterface(payload)
    ) {
      // Get the uuid to identify the NftRanking resource
      const uuid: string = nft_ranking_uuid;

      // Compose the NftRanking request object
      const NftRankingData: INftRankingRow = {};
      
				if('author_id' in payload){ NftRankingData.author_id = payload.author_id; }
				if('collection_id' in payload){ NftRankingData.collection_id = payload.collection_id; }
				if('fid' in payload){ NftRankingData.fid = payload.fid; }
				if('nft_id' in payload){ NftRankingData.nft_id = payload.nft_id; }
				if('nft_rank' in payload){ NftRankingData.nft_rank = payload.nft_rank; }
				if('nft_ranking_created_at' in payload){ NftRankingData.nft_ranking_created_at = payload.nft_ranking_created_at; }
				if('nft_ranking_d14d' in payload){ NftRankingData.nft_ranking_d14d = payload.nft_ranking_d14d; }
				if('nft_ranking_d21d' in payload){ NftRankingData.nft_ranking_d21d = payload.nft_ranking_d21d; }
				if('nft_ranking_d24hr' in payload){ NftRankingData.nft_ranking_d24hr = payload.nft_ranking_d24hr; }
				if('nft_ranking_d28' in payload){ NftRankingData.nft_ranking_d28 = payload.nft_ranking_d28; }
				if('nft_ranking_d7d' in payload){ NftRankingData.nft_ranking_d7d = payload.nft_ranking_d7d; }
				if('nft_ranking_floor_price' in payload){ NftRankingData.nft_ranking_floor_price = payload.nft_ranking_floor_price; }
				if('nft_ranking_id' in payload){ NftRankingData.nft_ranking_id = payload.nft_ranking_id; }
				if('nft_ranking_items' in payload){ NftRankingData.nft_ranking_items = payload.nft_ranking_items; }
				if('nft_ranking_owners' in payload){ NftRankingData.nft_ranking_owners = payload.nft_ranking_owners; }
				if('nft_ranking_updated_at' in payload){ NftRankingData.nft_ranking_updated_at = payload.nft_ranking_updated_at; }
				if('nft_ranking_uuid' in payload){ NftRankingData.nft_ranking_uuid = payload.nft_ranking_uuid; }
				if('nft_ranking_volume' in payload){ NftRankingData.nft_ranking_volume = payload.nft_ranking_volume; }

      // Gets the NftRanking resource from the database
      let NftRankingResultObject:
        | INftRankingRow
        | any
        | null = apiGETNftRanking(
          req,
          "nft_ranking_uuid",
          uuid
        );

      if (!NftRankingResultObject) {
        /* #swagger.responses[404] = {
          description: 'NftRanking resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'NftRanking',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "NftRanking",
          "PATCH"
        );
      }

      // Execute https request
      NftRankingResultObject =
        apiPUTNftRanking(
          req,
          NftRankingData,
          uuid,
          "nft_ranking_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'NftRanking resource updated successfully.',
        schema: {
          $ref: '#/definitions/NftRanking'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "NftRanking resource updated successfully.",
        NftRankingResultObject,
        "NftRanking",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/nft-ranking" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'NftRanking',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "NftRanking",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the nft-ranking resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'NftRanking',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the nft-ranking resource.",
      error,
      "NftRanking",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a NftRanking resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftRankingRow data type object
 *
 */
const supabaseDeleteNftRanking = async (
  columnValue: any,
  columnName?: string
): Promise<INftRankingInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a NftRanking resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftRankingRow data type object
 *
 */
const mongoDBDeleteNftRanking = async (
  columnValue: any,
  columnName?: string
): Promise<INftRankingRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a NftRanking resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftRankingRow data type object
 *
 */
const firebaseDeleteNftRanking = async (
  columnValue: any,
  columnName?: string
): Promise<INftRankingInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a NftRanking resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftRankingRow data type object
 *
 */
const mysqlDBDeleteNftRanking = async (
  columnValue: any,
  columnName?: string
): Promise<INftRankingInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftRankingRow data type object
 *
 */
const apiDELETENftRanking = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<INftRankingInsert | any | null> => {
  // Intitialize the NftRankingResultObject variable
  let NftRankingResultObject: INftRankingRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      NftRankingResultObject =
        await supabaseDeleteNftRanking(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      NftRankingResultObject =
        await mongoDBDeleteNftRanking(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      NftRankingResultObject =
        await mongoDBDeleteNftRanking(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      NftRankingResultObject =
        await firebaseDeleteNftRanking(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      NftRankingResultObject =
        await firebaseDeleteNftRanking(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      NftRankingResultObject =
        await mysqlDBDeleteNftRanking(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      NftRankingResultObject =
        await mysqlDBDeleteNftRanking(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      NftRankingResultObject =
        await supabaseDeleteNftRanking(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    NftRankingResultObject =
      await supabaseDeleteNftRanking(columnValue, columnName);
  }

  return NftRankingResultObject;
};

/*
 * Deletes an existing NftRanking resource
 *
 * @param req : Request - NftRanking request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftRankingDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftRanking']
    #swagger.description = 'Endpoint to delete a new NftRanking resource.'
    #swagger.summary = 'Updates a new NftRanking resource.'

    #swagger.path = '/models/nft-ranking'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['nft_ranking_uuid'] = {
      in: 'path',
      description: 'NftRanking nft_ranking_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the NftRanking resource.',
      required: true,
      schema: {
        ____REQUIRED_PARAMS_LIST_OJECT____
      }
    }

  */

  /* #swagger.security = [{
      "bearerAuth": []
  }] */

  // Try to delete the resource
  try {
    // Get the deviceId
    const { nft_ranking_uuid } = req.params;

    // If all the parameters are available, its a go
    if (nft_ranking_uuid) {
      // Get the uuid to identify the NftRanking resource
      const uuid: string = nft_ranking_uuid;

      // Gets the NftRanking resource from the database
      let NftRankingResultObject:
        | INftRankingRow
        | any
        | null = apiGETNftRanking(
          req,
          "nft_ranking_uuid",
          uuid
        );

      if (!NftRankingResultObject) {
        /* #swagger.responses[404] = {
          description: 'NftRanking resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'NftRanking',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "NftRanking",
          "PATCH"
        );
      }

      // Execute https request
      NftRankingResultObject =
        apiDELETENftRanking(req, uuid, "nft_ranking_uuid");

      /* #swagger.responses[201] = {
        description: 'NftRanking resource deleted successfully.',
        schema: {
          'nft_ranking_uuid': 'nft_ranking_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "NftRanking resource deleted successfully.",
        NftRankingResultObject,
        "NftRanking",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/nft-ranking" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'NftRanking',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "NftRanking",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the nft-ranking resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'NftRanking',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the nft-ranking resource.",
      error,
      "NftRanking",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of NftRanking without the response body.
 *
 * @param req : Request - NftRanking request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftRankingHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftRanking']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of NftRanking without the response body'
  
      #swagger.path = '/models/nft-ranking'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the NftRanking resource.',
        required: true,
        schema: {}
      }
  
    */

  /* #swagger.security = [{
        "bearerAuth": []
    }] */

  // Send the request head
  try {


    // Is a valid request
    if (req) {

      // Dump the HTTP 200 response
      res.status(200).end();

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a HEAD request at the "/models/nft-ranking" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'NftRanking',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "NftRanking",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the nft-ranking resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'NftRanking',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the nft-ranking resource.",
      error,
      "NftRanking",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - NftRanking request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftRankingTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftRanking']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/nft-ranking'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the NftRanking resource.',
        required: true,
        schema: {}
      }
  
    */

  /* #swagger.security = [{
        "bearerAuth": []
    }] */

  // Try to trace the resource
  try {


    // Is a valid request
    if (req) {

      // Dump the HTTP 200 response
      handleHttpStatus(
        res,
        200,
        "Trace request result",
        req.body,
        "NftRanking",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/nft-ranking" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'NftRanking',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "NftRanking",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the nft-ranking resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'NftRanking',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the nft-ranking resource.",
      error,
      "NftRanking",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - NftRanking request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftRankingOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftRanking']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/nft-ranking'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the NftRanking resource.',
        required: true,
        schema: {}
      }
  
    */

  /* #swagger.security = [{
        "bearerAuth": []
    }] */

  // Send allowed methods
  try {


    // Is a valid request
    if (req) {

      // Dump the HTTP 200 response
      res.set('Allow', 'GET, POST, PUT, PATCH, TRACE, DELETE');
      res.status(200).end();

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a OPTIONS request at the "/models/nft-ranking" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'NftRanking',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "NftRanking",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the nft-ranking resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'NftRanking',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the nft-ranking resource.",
      error,
      "NftRanking",
      "OPTIONS"
    );
  }

  // #swagger.end
};
