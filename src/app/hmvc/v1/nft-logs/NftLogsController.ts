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
  INftLogsInsert,
  INftLogsRow,
  INftLogsUpdate
} from "./models/NftLogsTypesDefinitions";

import { NftLogsSupabaseCls } from "./models/NftLogsSupabaseCls";
import { NftLogsMongoDBCls } from "./models/NftLogsMongoDBCls";
import { NftLogsFirebaseCls } from "./models/NftLogsFirebaseCls";
import { NftLogsMySQLDBCls } from "./models/NftLogsMySQLDBCls";
import { NftLogsDTO } from "./models/NftLogsDTO";

export const payloadSupportsNftLogsRowInterface: any = (
  payload: any
): payload is INftLogsRow => {
  return !!payload?.NftLogs.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsNftLogsInsertInterface: any = (
  payload: any
): payload is INftLogsInsert => {
  return !!payload?.NftLogs
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsNftLogsUpdateInterface: any = (
  payload: any
): payload is INftLogsUpdate => {
  return !!payload?.NftLogs
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new NftLogsSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: INftLogsUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new NftLogsMongoDBCls().insertARow(payload);
          new NftLogsFirebaseCls().insertARow(payload);
          new NftLogsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new NftLogsMongoDBCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
            
          );
          new NftLogsFirebaseCls().updateMatchingRows(
            payload,
            "log_uuid",
            payload.log_uuid
          );
          new NftLogsMySQLDBCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          break;
        }

        case "patch": {
          new NftLogsMongoDBCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          new NftLogsFirebaseCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          new NftLogsMySQLDBCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          break;
        }

        case "delete": {
          new NftLogsMongoDBCls().deleteMatchingRows(
            "log_uuid",
            payload.log_uuid
          );
          new NftLogsFirebaseCls().deleteMatchingRows(
            "log_uuid",
            payload.log_uuid
          );
          new NftLogsMySQLDBCls().deleteMatchingRows(
            "log_uuid",
            payload.log_uuid
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
const mongoDBDatabaseClass: any = new NftLogsMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: INftLogsUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new NftLogsSupabaseCls().insertARow(payload);
          new NftLogsFirebaseCls().insertARow(payload);
          new NftLogsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new NftLogsSupabaseCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          new NftLogsFirebaseCls().updateMatchingRows(
            payload,
            "log_uuid",
            payload.log_uuid
          );
          new NftLogsMySQLDBCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          break;
        }

        case "patch": {
          new NftLogsSupabaseCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          new NftLogsFirebaseCls().updateMatchingRows(
            payload,
            "log_uuid",
            payload.log_uuid
          );
          new NftLogsMySQLDBCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          break;
        }

        case "delete": {
          new NftLogsSupabaseCls().deleteMatchingRows(
            "log_uuid",
            payload.log_uuid
          );
          new NftLogsFirebaseCls().deleteMatchingRows(
            "log_uuid",
            payload.log_uuid
          );
          new NftLogsMySQLDBCls().deleteMatchingRows(
            "log_uuid",
            payload.log_uuid
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
  new NftLogsSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: INftLogsUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new NftLogsSupabaseCls().insertARow(payload);
          new NftLogsMongoDBCls().insertARow(payload);
          new NftLogsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new NftLogsSupabaseCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          new NftLogsMongoDBCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          new NftLogsMySQLDBCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          break;
        }

        case "patch": {
          new NftLogsSupabaseCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          new NftLogsMongoDBCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          new NftLogsMySQLDBCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          break;
        }

        case "delete": {
          new NftLogsSupabaseCls().deleteMatchingRows(
            "log_uuid",
            payload.log_uuid
          );
          new NftLogsMongoDBCls().deleteMatchingRows(
            "log_uuid",
            payload.log_uuid
          );
          new NftLogsMySQLDBCls().deleteMatchingRows(
            "log_uuid",
            payload.log_uuid
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
const mySQLDatabaseClass: any = new NftLogsSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: INftLogsUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new NftLogsSupabaseCls().insertARow(payload);
          new NftLogsMongoDBCls().insertARow(payload);
          new NftLogsFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new NftLogsSupabaseCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          new NftLogsMongoDBCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          new NftLogsFirebaseCls().updateMatchingRows(
            payload,
            "log_uuid",
            payload.log_uuid
          );
          break;
        }

        case "patch": {
          new NftLogsSupabaseCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          new NftLogsMongoDBCls().updateMatchingRows(
            payload,
            payload.log_uuid,
            "log_uuid"
          );
          new NftLogsFirebaseCls().updateMatchingRows(
            payload,
            "log_uuid",
            payload.log_uuid
          );
          break;
        }

        case "delete": {
          new NftLogsSupabaseCls().deleteMatchingRows(
            "log_uuid",
            payload.log_uuid
          );
          new NftLogsMongoDBCls().deleteMatchingRows(
            "log_uuid",
            payload.log_uuid
          );
          new NftLogsFirebaseCls().deleteMatchingRows(
            "log_uuid",
            payload.log_uuid
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
 * Gets, gets or edits a NftLogs resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftLogsGets interface.
 * @returns INftLogsRow data type object
 *
 */
const supabaseGetNftLogs = async (
  columnValue: any,
  columnName?: string
): Promise<INftLogsRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a NftLogs resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftLogsGets interface.
 * @returns INftLogsRow data type object
 *
 */
const mongoDBGetNftLogs = async (
  columnValue: any,
  columnName?: string
): Promise<INftLogsRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a NftLogs resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftLogsGets interface.
 * @returns INftLogsRow data type object
 *
 */
const firebaseGetNftLogs = async (
  columnValue: any,
  columnName?: string
): Promise<INftLogsRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a NftLogs resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftLogsGets interface.
 * @returns INftLogsRow data type object
 *
 */
const mysqlDBGetNftLogs = async (
  columnValue: any,
  columnName?: string
): Promise<INftLogsRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftLogsGets interface.
 * @returns INftLogsRow data type object
 *
 */
const apiGETNftLogs = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<INftLogsRow | any | null> => {
  // Intitialize the NftLogsResultObject variable
  let NftLogsResultObject: INftLogsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      NftLogsResultObject =
        await supabaseGetNftLogs(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      NftLogsResultObject =
        await mongoDBGetNftLogs(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      NftLogsResultObject =
        await mongoDBGetNftLogs(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      NftLogsResultObject =
        await firebaseGetNftLogs(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      NftLogsResultObject =
        await firebaseGetNftLogs(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      NftLogsResultObject =
        await mysqlDBGetNftLogs(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      NftLogsResultObject =
        await mysqlDBGetNftLogs(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      NftLogsResultObject =
        await supabaseGetNftLogs(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    NftLogsResultObject =
      await supabaseGetNftLogs(columnValue, columnName);
  }

  return NftLogsResultObject;
};

/*
 * Gets an existing NftLogs resource
 *
 * @param req : Request - NftLogs request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftLogsGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftLogs']
    #swagger.description = 'Endpoint to get a new NftLogs resource.'
    #swagger.summary = 'Gets an existing NftLogs resource.'

    #swagger.path = '/models/nft-logs'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['log_uuid'] = {
      in: 'path',
      description: 'NftLogs log_uuid key identifier used to get the resource.',
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
    const { log_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the NftLogs resource
      const uuid: string = log_uuid;

      let NftLogsResultObject:
        | INftLogsRow
        | Array<INftLogsRow>
        | any
        | null;

      if (log_uuid) {
        // Gets the NftLogs resource from the database
        NftLogsResultObject =
          apiGETNftLogs(req, "log_uuid,", uuid);
      } else {
        // Gets all the models from the NftLogs resource
        NftLogsResultObject =
          apiGETNftLogs(req);
      }

      if (!NftLogsResultObject) {
        /* #swagger.responses[404] = {
          description: 'NftLogs resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'NftLogs',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "NftLogs resource was not found.",
          NftLogsResultObject,
          "NftLogs",
          "PUT"
        );
      }

      // Execute https request
      NftLogsResultObject =
        apiPUTNftLogs(
          req,
          NftLogsResultObject,
          uuid,
          "log_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'NftLogs resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/NftLogs'
          }
          model: 'NftLogs',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        NftLogsResultObject,
        "NftLogs",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/nft-logs", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'NftLogs',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/nft-logs", Missing or invalid parameters.',
        req.body,
        "NftLogs",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the nft-logs resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'NftLogs',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the nft-logs resource.",
      error,
      "NftLogs",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a NftLogs resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftLogsInsert interface.
 * @returns INftLogsRow data type object
 *
 */
const supabasePostNftLogs = async (
  payload: any
): Promise<INftLogsInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a NftLogs resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftLogsInsert interface.
 * @returns INftLogsRow data type object
 *
 */
const mongoDBPostNftLogs = async (
  payload: any
): Promise<INftLogsRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a NftLogs resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftLogsInsert interface.
 * @returns INftLogsRow data type object
 *
 */
const firebasePostNftLogs = async (
  payload: any
): Promise<INftLogsInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a NftLogs resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftLogsInsert interface.
 * @returns INftLogsRow data type object
 *
 */
const mysqlDBPostNftLogs = async (
  payload: any
): Promise<INftLogsInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a NftLogs resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftLogsInsert interface.
 * @returns INftLogsRow data type object
 *
 */
const apiPOSTNftLogs = async (
  req: any,
  payload: any
): Promise<INftLogsInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the NftLogs resource into the database
  let NftLogsResultObject:
    | INftLogsRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      NftLogsResultObject =
        await supabasePostNftLogs(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      NftLogsResultObject =
        await mongoDBPostNftLogs(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      NftLogsResultObject =
        await mongoDBPostNftLogs(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      NftLogsResultObject =
        await firebasePostNftLogs(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      NftLogsResultObject =
        await firebasePostNftLogs(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      NftLogsResultObject =
        await mysqlDBPostNftLogs(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      NftLogsResultObject =
        await mysqlDBPostNftLogs(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      NftLogsResultObject =
        await supabasePostNftLogs(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    NftLogsResultObject =
      await supabasePostNftLogs(payload);
  }

  return NftLogsResultObject;
};

/*
 * Creates a new NftLogs resource
 *
 * @param req : Request - NftLogs request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftLogsPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftLogs']
    #swagger.description = 'Endpoint to create a new NftLogs resource.'
    #swagger.summary = 'Creates a new NftLogs resource.'

    #swagger.path = '/models/nft-logs'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the NftLogs resource.',
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
      payloadSupportsNftLogsInsertInterface(payload)
    ) {
      // Compose the NftLogs request object
      const NftLogsData: INftLogsInsert =
      {
				fid: payload.fid,
				log_amount: payload.log_amount,
				log_chain_id: payload.log_chain_id,
				log_data: payload.log_data,
				log_from: payload.log_from,
				log_id: payload.log_id,
				log_nft_created_at: payload.log_nft_created_at,
				log_to: payload.log_to,
				log_txn_hash: payload.log_txn_hash,
				log_type: payload.log_type,
				log_uuid: payload.log_uuid,
				nft_id: payload.nft_id,
				user_id: payload.user_id,
      };

      // Insert the NftLogs resource into the database
      let NftLogsResultObject:
        | INftLogsRow
        | any
        | null;

      // Execute https request
      NftLogsResultObject =
        apiPOSTNftLogs(
          req,
          NftLogsData
        );

      /* #swagger.responses[201] = {
        description: 'NftLogs resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/NftLogs'
          }
          model: 'NftLogs',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "NftLogs resource created successfully.",
        NftLogsResultObject,
        "NftLogs",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/nft-logs". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'NftLogs',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/nft-logs". Missing or invalid parameters.',
        req.body,
        "NftLogs",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the nft-logs resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'NftLogs',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the nft-logs resource.",
      error,
      "NftLogs",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a NftLogs resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftLogsUpdate interface.
 * @returns INftLogsRow data type object
 *
 */
const supabasePutNftLogs = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftLogsInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a NftLogs resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftLogsUpdate interface.
 * @returns INftLogsRow data type object
 *
 */
const mongoDBPutNftLogs = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftLogsRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a NftLogs resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftLogsUpdate interface.
 * @returns INftLogsRow data type object
 *
 */
const firebasePutNftLogs = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftLogsInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a NftLogs resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftLogsUpdate interface.
 * @returns INftLogsRow data type object
 *
 */
const mysqlDBPutNftLogs = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftLogsInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftLogsUpdate interface.
 * @returns INftLogsRow data type object
 *
 */
const apiPUTNftLogs = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftLogsInsert | any | null> => {
  // Intitialize the NftLogsResultObject variable
  let NftLogsResultObject: INftLogsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      NftLogsResultObject =
        await supabasePutNftLogs(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      NftLogsResultObject =
        await mongoDBPutNftLogs(
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
      NftLogsResultObject =
        await mongoDBPutNftLogs(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      NftLogsResultObject =
        await firebasePutNftLogs(
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
      NftLogsResultObject =
        await firebasePutNftLogs(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      NftLogsResultObject =
        await mysqlDBPutNftLogs(
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
      NftLogsResultObject =
        await mysqlDBPutNftLogs(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      NftLogsResultObject =
        await supabasePutNftLogs(
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
    NftLogsResultObject =
      await supabasePutNftLogs(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return NftLogsResultObject;
};

/*
 * Updates an existing NftLogs resource
 *
 * @param req : Request - NftLogs request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftLogsPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftLogs']
    #swagger.description = 'Endpoint to update a new NftLogs resource.'
    #swagger.summary = 'Updates a new NftLogs resource.'

    #swagger.path = '/models/nft-logs'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['log_uuid'] = {
      in: 'path',
      description: 'NftLogs log_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the NftLogs resource.',
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
    const { log_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      log_uuid &&
      payload &&
      payloadSupportsNftLogsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the NftLogs resource
      const uuid: string = log_uuid;

      // Compose the NftLogs request object
      const NftLogsData: INftLogsRow = {};
      
				if('fid' in payload){ NftLogsData.fid = payload.fid; }
				if('log_amount' in payload){ NftLogsData.log_amount = payload.log_amount; }
				if('log_chain_id' in payload){ NftLogsData.log_chain_id = payload.log_chain_id; }
				if('log_data' in payload){ NftLogsData.log_data = payload.log_data; }
				if('log_from' in payload){ NftLogsData.log_from = payload.log_from; }
				if('log_id' in payload){ NftLogsData.log_id = payload.log_id; }
				if('log_nft_created_at' in payload){ NftLogsData.log_nft_created_at = payload.log_nft_created_at; }
				if('log_to' in payload){ NftLogsData.log_to = payload.log_to; }
				if('log_txn_hash' in payload){ NftLogsData.log_txn_hash = payload.log_txn_hash; }
				if('log_type' in payload){ NftLogsData.log_type = payload.log_type; }
				if('log_uuid' in payload){ NftLogsData.log_uuid = payload.log_uuid; }
				if('nft_id' in payload){ NftLogsData.nft_id = payload.nft_id; }
				if('user_id' in payload){ NftLogsData.user_id = payload.user_id; }

      // Gets the NftLogs resource from the database
      let NftLogsResultObject:
        | INftLogsRow
        | any
        | null = apiGETNftLogs(
          req,
          "log_uuid",
          uuid
        );

      if (!NftLogsResultObject) {
        /* #swagger.responses[404] = {
          description: 'NftLogs resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'NftLogs',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "NftLogs",
          "PUT"
        );
      }

      // Execute https request
      NftLogsResultObject =
        apiPUTNftLogs(
          req,
          NftLogsData,
          uuid,
          "log_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'NftLogs resource updated successfully.',
        schema: {
          $ref: '#/definitions/NftLogs'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "NftLogs resource updated successfully.",
        NftLogsResultObject,
        "NftLogs",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/nft-logs" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'NftLogs',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "NftLogs",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the nft-logs resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'NftLogs',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the nft-logs resource.",
      error,
      "NftLogs",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing NftLogs resource partially
 *
 * @param req : Request - NftLogs partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftLogsPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftLogs']
    #swagger.description = 'Endpoint to update a new NftLogs resource.'
    #swagger.summary = 'Updates a new NftLogs resource.'

    #swagger.path = '/models/nft-logs'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['log_uuid'] = {
      in: 'path',
      description: 'NftLogs log_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the NftLogs resource.',
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
    const { log_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      log_uuid &&
      payload &&
      payloadSupportsNftLogsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the NftLogs resource
      const uuid: string = log_uuid;

      // Compose the NftLogs request object
      const NftLogsData: INftLogsRow = {};
      
				if('fid' in payload){ NftLogsData.fid = payload.fid; }
				if('log_amount' in payload){ NftLogsData.log_amount = payload.log_amount; }
				if('log_chain_id' in payload){ NftLogsData.log_chain_id = payload.log_chain_id; }
				if('log_data' in payload){ NftLogsData.log_data = payload.log_data; }
				if('log_from' in payload){ NftLogsData.log_from = payload.log_from; }
				if('log_id' in payload){ NftLogsData.log_id = payload.log_id; }
				if('log_nft_created_at' in payload){ NftLogsData.log_nft_created_at = payload.log_nft_created_at; }
				if('log_to' in payload){ NftLogsData.log_to = payload.log_to; }
				if('log_txn_hash' in payload){ NftLogsData.log_txn_hash = payload.log_txn_hash; }
				if('log_type' in payload){ NftLogsData.log_type = payload.log_type; }
				if('log_uuid' in payload){ NftLogsData.log_uuid = payload.log_uuid; }
				if('nft_id' in payload){ NftLogsData.nft_id = payload.nft_id; }
				if('user_id' in payload){ NftLogsData.user_id = payload.user_id; }

      // Gets the NftLogs resource from the database
      let NftLogsResultObject:
        | INftLogsRow
        | any
        | null = apiGETNftLogs(
          req,
          "log_uuid",
          uuid
        );

      if (!NftLogsResultObject) {
        /* #swagger.responses[404] = {
          description: 'NftLogs resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'NftLogs',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "NftLogs",
          "PATCH"
        );
      }

      // Execute https request
      NftLogsResultObject =
        apiPUTNftLogs(
          req,
          NftLogsData,
          uuid,
          "log_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'NftLogs resource updated successfully.',
        schema: {
          $ref: '#/definitions/NftLogs'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "NftLogs resource updated successfully.",
        NftLogsResultObject,
        "NftLogs",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/nft-logs" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'NftLogs',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "NftLogs",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the nft-logs resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'NftLogs',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the nft-logs resource.",
      error,
      "NftLogs",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a NftLogs resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftLogsRow data type object
 *
 */
const supabaseDeleteNftLogs = async (
  columnValue: any,
  columnName?: string
): Promise<INftLogsInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a NftLogs resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftLogsRow data type object
 *
 */
const mongoDBDeleteNftLogs = async (
  columnValue: any,
  columnName?: string
): Promise<INftLogsRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a NftLogs resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftLogsRow data type object
 *
 */
const firebaseDeleteNftLogs = async (
  columnValue: any,
  columnName?: string
): Promise<INftLogsInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a NftLogs resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftLogsRow data type object
 *
 */
const mysqlDBDeleteNftLogs = async (
  columnValue: any,
  columnName?: string
): Promise<INftLogsInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftLogsRow data type object
 *
 */
const apiDELETENftLogs = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<INftLogsInsert | any | null> => {
  // Intitialize the NftLogsResultObject variable
  let NftLogsResultObject: INftLogsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      NftLogsResultObject =
        await supabaseDeleteNftLogs(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      NftLogsResultObject =
        await mongoDBDeleteNftLogs(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      NftLogsResultObject =
        await mongoDBDeleteNftLogs(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      NftLogsResultObject =
        await firebaseDeleteNftLogs(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      NftLogsResultObject =
        await firebaseDeleteNftLogs(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      NftLogsResultObject =
        await mysqlDBDeleteNftLogs(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      NftLogsResultObject =
        await mysqlDBDeleteNftLogs(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      NftLogsResultObject =
        await supabaseDeleteNftLogs(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    NftLogsResultObject =
      await supabaseDeleteNftLogs(columnValue, columnName);
  }

  return NftLogsResultObject;
};

/*
 * Deletes an existing NftLogs resource
 *
 * @param req : Request - NftLogs request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftLogsDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftLogs']
    #swagger.description = 'Endpoint to delete a new NftLogs resource.'
    #swagger.summary = 'Updates a new NftLogs resource.'

    #swagger.path = '/models/nft-logs'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['log_uuid'] = {
      in: 'path',
      description: 'NftLogs log_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the NftLogs resource.',
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
    const { log_uuid } = req.params;

    // If all the parameters are available, its a go
    if (log_uuid) {
      // Get the uuid to identify the NftLogs resource
      const uuid: string = log_uuid;

      // Gets the NftLogs resource from the database
      let NftLogsResultObject:
        | INftLogsRow
        | any
        | null = apiGETNftLogs(
          req,
          "log_uuid",
          uuid
        );

      if (!NftLogsResultObject) {
        /* #swagger.responses[404] = {
          description: 'NftLogs resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'NftLogs',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "NftLogs",
          "PATCH"
        );
      }

      // Execute https request
      NftLogsResultObject =
        apiDELETENftLogs(req, uuid, "log_uuid");

      /* #swagger.responses[201] = {
        description: 'NftLogs resource deleted successfully.',
        schema: {
          'log_uuid': 'log_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "NftLogs resource deleted successfully.",
        NftLogsResultObject,
        "NftLogs",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/nft-logs" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'NftLogs',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "NftLogs",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the nft-logs resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'NftLogs',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the nft-logs resource.",
      error,
      "NftLogs",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of NftLogs without the response body.
 *
 * @param req : Request - NftLogs request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftLogsHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftLogs']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of NftLogs without the response body'
  
      #swagger.path = '/models/nft-logs'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the NftLogs resource.',
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
            description: 'Could not perform a HEAD request at the "/models/nft-logs" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'NftLogs',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "NftLogs",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the nft-logs resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'NftLogs',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the nft-logs resource.",
      error,
      "NftLogs",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - NftLogs request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftLogsTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftLogs']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/nft-logs'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the NftLogs resource.',
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
        "NftLogs",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/nft-logs" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'NftLogs',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "NftLogs",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the nft-logs resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'NftLogs',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the nft-logs resource.",
      error,
      "NftLogs",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - NftLogs request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftLogsOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['NftLogs']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/nft-logs'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the NftLogs resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/nft-logs" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'NftLogs',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "NftLogs",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the nft-logs resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'NftLogs',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the nft-logs resource.",
      error,
      "NftLogs",
      "OPTIONS"
    );
  }

  // #swagger.end
};
