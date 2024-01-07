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
  IMiningSessionsInsert,
  IMiningSessionsRow,
  IMiningSessionsUpdate
} from "./models/MiningSessionsTypesDefinitions";

import { MiningSessionsSupabaseCls } from "./models/MiningSessionsSupabaseCls";
import { MiningSessionsMongoDBCls } from "./models/MiningSessionsMongoDBCls";
import { MiningSessionsFirebaseCls } from "./models/MiningSessionsFirebaseCls";
import { MiningSessionsMySQLDBCls } from "./models/MiningSessionsMySQLDBCls";
import { MiningSessionsDTO } from "./models/MiningSessionsDTO";

export const payloadSupportsMiningSessionsRowInterface: any = (
  payload: any
): payload is IMiningSessionsRow => {
  return !!payload?.MiningSessions.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsMiningSessionsInsertInterface: any = (
  payload: any
): payload is IMiningSessionsInsert => {
  return !!payload?.MiningSessions
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsMiningSessionsUpdateInterface: any = (
  payload: any
): payload is IMiningSessionsUpdate => {
  return !!payload?.MiningSessions
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new MiningSessionsSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IMiningSessionsUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new MiningSessionsMongoDBCls().insertARow(payload);
          new MiningSessionsFirebaseCls().insertARow(payload);
          new MiningSessionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new MiningSessionsMongoDBCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
            
          );
          new MiningSessionsFirebaseCls().updateMatchingRows(
            payload,
            "mining_uuid",
            payload.mining_uuid
          );
          new MiningSessionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          break;
        }

        case "patch": {
          new MiningSessionsMongoDBCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          new MiningSessionsFirebaseCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          new MiningSessionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          break;
        }

        case "delete": {
          new MiningSessionsMongoDBCls().deleteMatchingRows(
            "mining_uuid",
            payload.mining_uuid
          );
          new MiningSessionsFirebaseCls().deleteMatchingRows(
            "mining_uuid",
            payload.mining_uuid
          );
          new MiningSessionsMySQLDBCls().deleteMatchingRows(
            "mining_uuid",
            payload.mining_uuid
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
const mongoDBDatabaseClass: any = new MiningSessionsMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IMiningSessionsUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new MiningSessionsSupabaseCls().insertARow(payload);
          new MiningSessionsFirebaseCls().insertARow(payload);
          new MiningSessionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new MiningSessionsSupabaseCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          new MiningSessionsFirebaseCls().updateMatchingRows(
            payload,
            "mining_uuid",
            payload.mining_uuid
          );
          new MiningSessionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          break;
        }

        case "patch": {
          new MiningSessionsSupabaseCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          new MiningSessionsFirebaseCls().updateMatchingRows(
            payload,
            "mining_uuid",
            payload.mining_uuid
          );
          new MiningSessionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          break;
        }

        case "delete": {
          new MiningSessionsSupabaseCls().deleteMatchingRows(
            "mining_uuid",
            payload.mining_uuid
          );
          new MiningSessionsFirebaseCls().deleteMatchingRows(
            "mining_uuid",
            payload.mining_uuid
          );
          new MiningSessionsMySQLDBCls().deleteMatchingRows(
            "mining_uuid",
            payload.mining_uuid
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
  new MiningSessionsSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IMiningSessionsUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new MiningSessionsSupabaseCls().insertARow(payload);
          new MiningSessionsMongoDBCls().insertARow(payload);
          new MiningSessionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new MiningSessionsSupabaseCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          new MiningSessionsMongoDBCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          new MiningSessionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          break;
        }

        case "patch": {
          new MiningSessionsSupabaseCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          new MiningSessionsMongoDBCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          new MiningSessionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          break;
        }

        case "delete": {
          new MiningSessionsSupabaseCls().deleteMatchingRows(
            "mining_uuid",
            payload.mining_uuid
          );
          new MiningSessionsMongoDBCls().deleteMatchingRows(
            "mining_uuid",
            payload.mining_uuid
          );
          new MiningSessionsMySQLDBCls().deleteMatchingRows(
            "mining_uuid",
            payload.mining_uuid
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
const mySQLDatabaseClass: any = new MiningSessionsSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IMiningSessionsUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new MiningSessionsSupabaseCls().insertARow(payload);
          new MiningSessionsMongoDBCls().insertARow(payload);
          new MiningSessionsFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new MiningSessionsSupabaseCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          new MiningSessionsMongoDBCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          new MiningSessionsFirebaseCls().updateMatchingRows(
            payload,
            "mining_uuid",
            payload.mining_uuid
          );
          break;
        }

        case "patch": {
          new MiningSessionsSupabaseCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          new MiningSessionsMongoDBCls().updateMatchingRows(
            payload,
            payload.mining_uuid,
            "mining_uuid"
          );
          new MiningSessionsFirebaseCls().updateMatchingRows(
            payload,
            "mining_uuid",
            payload.mining_uuid
          );
          break;
        }

        case "delete": {
          new MiningSessionsSupabaseCls().deleteMatchingRows(
            "mining_uuid",
            payload.mining_uuid
          );
          new MiningSessionsMongoDBCls().deleteMatchingRows(
            "mining_uuid",
            payload.mining_uuid
          );
          new MiningSessionsFirebaseCls().deleteMatchingRows(
            "mining_uuid",
            payload.mining_uuid
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
 * Gets, gets or edits a MiningSessions resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IMiningSessionsGets interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const supabaseGetMiningSessions = async (
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a MiningSessions resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IMiningSessionsGets interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const mongoDBGetMiningSessions = async (
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a MiningSessions resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IMiningSessionsGets interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const firebaseGetMiningSessions = async (
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a MiningSessions resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IMiningSessionsGets interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const mysqlDBGetMiningSessions = async (
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IMiningSessionsGets interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const apiGETMiningSessions = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IMiningSessionsRow | any | null> => {
  // Intitialize the MiningSessionsResultObject variable
  let MiningSessionsResultObject: IMiningSessionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      MiningSessionsResultObject =
        await supabaseGetMiningSessions(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      MiningSessionsResultObject =
        await mongoDBGetMiningSessions(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      MiningSessionsResultObject =
        await mongoDBGetMiningSessions(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      MiningSessionsResultObject =
        await firebaseGetMiningSessions(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      MiningSessionsResultObject =
        await firebaseGetMiningSessions(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      MiningSessionsResultObject =
        await mysqlDBGetMiningSessions(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      MiningSessionsResultObject =
        await mysqlDBGetMiningSessions(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      MiningSessionsResultObject =
        await supabaseGetMiningSessions(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    MiningSessionsResultObject =
      await supabaseGetMiningSessions(columnValue, columnName);
  }

  return MiningSessionsResultObject;
};

/*
 * Gets an existing MiningSessions resource
 *
 * @param req : Request - MiningSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const miningSessionsGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MiningSessions']
    #swagger.description = 'Endpoint to get a new MiningSessions resource.'
    #swagger.summary = 'Gets an existing MiningSessions resource.'

    #swagger.path = '/models/mining-sessions'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['mining_uuid'] = {
      in: 'path',
      description: 'MiningSessions mining_uuid key identifier used to get the resource.',
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
    const { mining_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the MiningSessions resource
      const uuid: string = mining_uuid;

      let MiningSessionsResultObject:
        | IMiningSessionsRow
        | Array<IMiningSessionsRow>
        | any
        | null;

      if (mining_uuid) {
        // Gets the MiningSessions resource from the database
        MiningSessionsResultObject =
          apiGETMiningSessions(req, "mining_uuid,", uuid);
      } else {
        // Gets all the models from the MiningSessions resource
        MiningSessionsResultObject =
          apiGETMiningSessions(req);
      }

      if (!MiningSessionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'MiningSessions resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'MiningSessions',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "MiningSessions resource was not found.",
          MiningSessionsResultObject,
          "MiningSessions",
          "PUT"
        );
      }

      // Execute https request
      MiningSessionsResultObject =
        apiPUTMiningSessions(
          req,
          MiningSessionsResultObject,
          uuid,
          "mining_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'MiningSessions resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/MiningSessions'
          }
          model: 'MiningSessions',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        MiningSessionsResultObject,
        "MiningSessions",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/mining-sessions", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'MiningSessions',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/mining-sessions", Missing or invalid parameters.',
        req.body,
        "MiningSessions",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the mining-sessions resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'MiningSessions',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the mining-sessions resource.",
      error,
      "MiningSessions",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a MiningSessions resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMiningSessionsInsert interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const supabasePostMiningSessions = async (
  payload: any
): Promise<IMiningSessionsInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a MiningSessions resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMiningSessionsInsert interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const mongoDBPostMiningSessions = async (
  payload: any
): Promise<IMiningSessionsRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a MiningSessions resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMiningSessionsInsert interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const firebasePostMiningSessions = async (
  payload: any
): Promise<IMiningSessionsInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a MiningSessions resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMiningSessionsInsert interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const mysqlDBPostMiningSessions = async (
  payload: any
): Promise<IMiningSessionsInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a MiningSessions resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMiningSessionsInsert interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const apiPOSTMiningSessions = async (
  req: any,
  payload: any
): Promise<IMiningSessionsInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the MiningSessions resource into the database
  let MiningSessionsResultObject:
    | IMiningSessionsRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      MiningSessionsResultObject =
        await supabasePostMiningSessions(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      MiningSessionsResultObject =
        await mongoDBPostMiningSessions(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      MiningSessionsResultObject =
        await mongoDBPostMiningSessions(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      MiningSessionsResultObject =
        await firebasePostMiningSessions(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      MiningSessionsResultObject =
        await firebasePostMiningSessions(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      MiningSessionsResultObject =
        await mysqlDBPostMiningSessions(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      MiningSessionsResultObject =
        await mysqlDBPostMiningSessions(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      MiningSessionsResultObject =
        await supabasePostMiningSessions(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    MiningSessionsResultObject =
      await supabasePostMiningSessions(payload);
  }

  return MiningSessionsResultObject;
};

/*
 * Creates a new MiningSessions resource
 *
 * @param req : Request - MiningSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const miningSessionsPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MiningSessions']
    #swagger.description = 'Endpoint to create a new MiningSessions resource.'
    #swagger.summary = 'Creates a new MiningSessions resource.'

    #swagger.path = '/models/mining-sessions'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the MiningSessions resource.',
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
      payloadSupportsMiningSessionsInsertInterface(payload)
    ) {
      // Compose the MiningSessions request object
      const MiningSessionsData: IMiningSessionsInsert =
      {
				client_id: payload.client_id,
				fid: payload.fid,
				mining_base_rate: payload.mining_base_rate,
				mining_booster: payload.mining_booster,
				mining_chain_id: payload.mining_chain_id,
				mining_claim_hash: payload.mining_claim_hash,
				mining_claimed: payload.mining_claimed,
				mining_ended_at: payload.mining_ended_at,
				mining_id: payload.mining_id,
				mining_rate: payload.mining_rate,
				mining_started_at: payload.mining_started_at,
				mining_uuid: payload.mining_uuid,
				mining_wallet_address: payload.mining_wallet_address,
				session_id: payload.session_id,
				user_id: payload.user_id,
      };

      // Insert the MiningSessions resource into the database
      let MiningSessionsResultObject:
        | IMiningSessionsRow
        | any
        | null;

      // Execute https request
      MiningSessionsResultObject =
        apiPOSTMiningSessions(
          req,
          MiningSessionsData
        );

      /* #swagger.responses[201] = {
        description: 'MiningSessions resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/MiningSessions'
          }
          model: 'MiningSessions',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "MiningSessions resource created successfully.",
        MiningSessionsResultObject,
        "MiningSessions",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/mining-sessions". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'MiningSessions',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/mining-sessions". Missing or invalid parameters.',
        req.body,
        "MiningSessions",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the mining-sessions resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'MiningSessions',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the mining-sessions resource.",
      error,
      "MiningSessions",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a MiningSessions resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMiningSessionsUpdate interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const supabasePutMiningSessions = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a MiningSessions resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMiningSessionsUpdate interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const mongoDBPutMiningSessions = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a MiningSessions resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMiningSessionsUpdate interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const firebasePutMiningSessions = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a MiningSessions resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMiningSessionsUpdate interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const mysqlDBPutMiningSessions = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMiningSessionsUpdate interface.
 * @returns IMiningSessionsRow data type object
 *
 */
const apiPUTMiningSessions = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsInsert | any | null> => {
  // Intitialize the MiningSessionsResultObject variable
  let MiningSessionsResultObject: IMiningSessionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      MiningSessionsResultObject =
        await supabasePutMiningSessions(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      MiningSessionsResultObject =
        await mongoDBPutMiningSessions(
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
      MiningSessionsResultObject =
        await mongoDBPutMiningSessions(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      MiningSessionsResultObject =
        await firebasePutMiningSessions(
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
      MiningSessionsResultObject =
        await firebasePutMiningSessions(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      MiningSessionsResultObject =
        await mysqlDBPutMiningSessions(
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
      MiningSessionsResultObject =
        await mysqlDBPutMiningSessions(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      MiningSessionsResultObject =
        await supabasePutMiningSessions(
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
    MiningSessionsResultObject =
      await supabasePutMiningSessions(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return MiningSessionsResultObject;
};

/*
 * Updates an existing MiningSessions resource
 *
 * @param req : Request - MiningSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const miningSessionsPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MiningSessions']
    #swagger.description = 'Endpoint to update a new MiningSessions resource.'
    #swagger.summary = 'Updates a new MiningSessions resource.'

    #swagger.path = '/models/mining-sessions'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['mining_uuid'] = {
      in: 'path',
      description: 'MiningSessions mining_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the MiningSessions resource.',
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
    const { mining_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      mining_uuid &&
      payload &&
      payloadSupportsMiningSessionsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the MiningSessions resource
      const uuid: string = mining_uuid;

      // Compose the MiningSessions request object
      const MiningSessionsData: IMiningSessionsRow = {};
      
				if('client_id' in payload){ MiningSessionsData.client_id = payload.client_id; }
				if('fid' in payload){ MiningSessionsData.fid = payload.fid; }
				if('mining_base_rate' in payload){ MiningSessionsData.mining_base_rate = payload.mining_base_rate; }
				if('mining_booster' in payload){ MiningSessionsData.mining_booster = payload.mining_booster; }
				if('mining_chain_id' in payload){ MiningSessionsData.mining_chain_id = payload.mining_chain_id; }
				if('mining_claim_hash' in payload){ MiningSessionsData.mining_claim_hash = payload.mining_claim_hash; }
				if('mining_claimed' in payload){ MiningSessionsData.mining_claimed = payload.mining_claimed; }
				if('mining_ended_at' in payload){ MiningSessionsData.mining_ended_at = payload.mining_ended_at; }
				if('mining_id' in payload){ MiningSessionsData.mining_id = payload.mining_id; }
				if('mining_rate' in payload){ MiningSessionsData.mining_rate = payload.mining_rate; }
				if('mining_started_at' in payload){ MiningSessionsData.mining_started_at = payload.mining_started_at; }
				if('mining_uuid' in payload){ MiningSessionsData.mining_uuid = payload.mining_uuid; }
				if('mining_wallet_address' in payload){ MiningSessionsData.mining_wallet_address = payload.mining_wallet_address; }
				if('session_id' in payload){ MiningSessionsData.session_id = payload.session_id; }
				if('user_id' in payload){ MiningSessionsData.user_id = payload.user_id; }

      // Gets the MiningSessions resource from the database
      let MiningSessionsResultObject:
        | IMiningSessionsRow
        | any
        | null = apiGETMiningSessions(
          req,
          "mining_uuid",
          uuid
        );

      if (!MiningSessionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'MiningSessions resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'MiningSessions',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "MiningSessions",
          "PUT"
        );
      }

      // Execute https request
      MiningSessionsResultObject =
        apiPUTMiningSessions(
          req,
          MiningSessionsData,
          uuid,
          "mining_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'MiningSessions resource updated successfully.',
        schema: {
          $ref: '#/definitions/MiningSessions'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "MiningSessions resource updated successfully.",
        MiningSessionsResultObject,
        "MiningSessions",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/mining-sessions" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'MiningSessions',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "MiningSessions",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the mining-sessions resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'MiningSessions',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the mining-sessions resource.",
      error,
      "MiningSessions",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing MiningSessions resource partially
 *
 * @param req : Request - MiningSessions partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const miningSessionsPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MiningSessions']
    #swagger.description = 'Endpoint to update a new MiningSessions resource.'
    #swagger.summary = 'Updates a new MiningSessions resource.'

    #swagger.path = '/models/mining-sessions'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['mining_uuid'] = {
      in: 'path',
      description: 'MiningSessions mining_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the MiningSessions resource.',
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
    const { mining_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      mining_uuid &&
      payload &&
      payloadSupportsMiningSessionsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the MiningSessions resource
      const uuid: string = mining_uuid;

      // Compose the MiningSessions request object
      const MiningSessionsData: IMiningSessionsRow = {};
      
				if('client_id' in payload){ MiningSessionsData.client_id = payload.client_id; }
				if('fid' in payload){ MiningSessionsData.fid = payload.fid; }
				if('mining_base_rate' in payload){ MiningSessionsData.mining_base_rate = payload.mining_base_rate; }
				if('mining_booster' in payload){ MiningSessionsData.mining_booster = payload.mining_booster; }
				if('mining_chain_id' in payload){ MiningSessionsData.mining_chain_id = payload.mining_chain_id; }
				if('mining_claim_hash' in payload){ MiningSessionsData.mining_claim_hash = payload.mining_claim_hash; }
				if('mining_claimed' in payload){ MiningSessionsData.mining_claimed = payload.mining_claimed; }
				if('mining_ended_at' in payload){ MiningSessionsData.mining_ended_at = payload.mining_ended_at; }
				if('mining_id' in payload){ MiningSessionsData.mining_id = payload.mining_id; }
				if('mining_rate' in payload){ MiningSessionsData.mining_rate = payload.mining_rate; }
				if('mining_started_at' in payload){ MiningSessionsData.mining_started_at = payload.mining_started_at; }
				if('mining_uuid' in payload){ MiningSessionsData.mining_uuid = payload.mining_uuid; }
				if('mining_wallet_address' in payload){ MiningSessionsData.mining_wallet_address = payload.mining_wallet_address; }
				if('session_id' in payload){ MiningSessionsData.session_id = payload.session_id; }
				if('user_id' in payload){ MiningSessionsData.user_id = payload.user_id; }

      // Gets the MiningSessions resource from the database
      let MiningSessionsResultObject:
        | IMiningSessionsRow
        | any
        | null = apiGETMiningSessions(
          req,
          "mining_uuid",
          uuid
        );

      if (!MiningSessionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'MiningSessions resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'MiningSessions',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "MiningSessions",
          "PATCH"
        );
      }

      // Execute https request
      MiningSessionsResultObject =
        apiPUTMiningSessions(
          req,
          MiningSessionsData,
          uuid,
          "mining_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'MiningSessions resource updated successfully.',
        schema: {
          $ref: '#/definitions/MiningSessions'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "MiningSessions resource updated successfully.",
        MiningSessionsResultObject,
        "MiningSessions",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/mining-sessions" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'MiningSessions',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "MiningSessions",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the mining-sessions resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'MiningSessions',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the mining-sessions resource.",
      error,
      "MiningSessions",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a MiningSessions resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IMiningSessionsRow data type object
 *
 */
const supabaseDeleteMiningSessions = async (
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a MiningSessions resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IMiningSessionsRow data type object
 *
 */
const mongoDBDeleteMiningSessions = async (
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a MiningSessions resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IMiningSessionsRow data type object
 *
 */
const firebaseDeleteMiningSessions = async (
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a MiningSessions resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IMiningSessionsRow data type object
 *
 */
const mysqlDBDeleteMiningSessions = async (
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IMiningSessionsRow data type object
 *
 */
const apiDELETEMiningSessions = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IMiningSessionsInsert | any | null> => {
  // Intitialize the MiningSessionsResultObject variable
  let MiningSessionsResultObject: IMiningSessionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      MiningSessionsResultObject =
        await supabaseDeleteMiningSessions(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      MiningSessionsResultObject =
        await mongoDBDeleteMiningSessions(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      MiningSessionsResultObject =
        await mongoDBDeleteMiningSessions(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      MiningSessionsResultObject =
        await firebaseDeleteMiningSessions(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      MiningSessionsResultObject =
        await firebaseDeleteMiningSessions(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      MiningSessionsResultObject =
        await mysqlDBDeleteMiningSessions(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      MiningSessionsResultObject =
        await mysqlDBDeleteMiningSessions(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      MiningSessionsResultObject =
        await supabaseDeleteMiningSessions(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    MiningSessionsResultObject =
      await supabaseDeleteMiningSessions(columnValue, columnName);
  }

  return MiningSessionsResultObject;
};

/*
 * Deletes an existing MiningSessions resource
 *
 * @param req : Request - MiningSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const miningSessionsDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MiningSessions']
    #swagger.description = 'Endpoint to delete a new MiningSessions resource.'
    #swagger.summary = 'Updates a new MiningSessions resource.'

    #swagger.path = '/models/mining-sessions'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['mining_uuid'] = {
      in: 'path',
      description: 'MiningSessions mining_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the MiningSessions resource.',
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
    const { mining_uuid } = req.params;

    // If all the parameters are available, its a go
    if (mining_uuid) {
      // Get the uuid to identify the MiningSessions resource
      const uuid: string = mining_uuid;

      // Gets the MiningSessions resource from the database
      let MiningSessionsResultObject:
        | IMiningSessionsRow
        | any
        | null = apiGETMiningSessions(
          req,
          "mining_uuid",
          uuid
        );

      if (!MiningSessionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'MiningSessions resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'MiningSessions',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "MiningSessions",
          "PATCH"
        );
      }

      // Execute https request
      MiningSessionsResultObject =
        apiDELETEMiningSessions(req, uuid, "mining_uuid");

      /* #swagger.responses[201] = {
        description: 'MiningSessions resource deleted successfully.',
        schema: {
          'mining_uuid': 'mining_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "MiningSessions resource deleted successfully.",
        MiningSessionsResultObject,
        "MiningSessions",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/mining-sessions" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'MiningSessions',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "MiningSessions",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the mining-sessions resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'MiningSessions',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the mining-sessions resource.",
      error,
      "MiningSessions",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of MiningSessions without the response body.
 *
 * @param req : Request - MiningSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const miningSessionsHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MiningSessions']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of MiningSessions without the response body'
  
      #swagger.path = '/models/mining-sessions'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the MiningSessions resource.',
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
            description: 'Could not perform a HEAD request at the "/models/mining-sessions" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'MiningSessions',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "MiningSessions",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the mining-sessions resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'MiningSessions',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the mining-sessions resource.",
      error,
      "MiningSessions",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - MiningSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const miningSessionsTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MiningSessions']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/mining-sessions'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the MiningSessions resource.',
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
        "MiningSessions",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/mining-sessions" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'MiningSessions',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "MiningSessions",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the mining-sessions resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'MiningSessions',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the mining-sessions resource.",
      error,
      "MiningSessions",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - MiningSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const miningSessionsOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MiningSessions']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/mining-sessions'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the MiningSessions resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/mining-sessions" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'MiningSessions',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "MiningSessions",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the mining-sessions resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'MiningSessions',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the mining-sessions resource.",
      error,
      "MiningSessions",
      "OPTIONS"
    );
  }

  // #swagger.end
};
