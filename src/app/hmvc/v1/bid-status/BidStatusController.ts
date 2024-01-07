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
  IBidStatusInsert,
  IBidStatusRow,
  IBidStatusUpdate
} from "./models/BidStatusTypesDefinitions";

import { BidStatusSupabaseCls } from "./models/BidStatusSupabaseCls";
import { BidStatusMongoDBCls } from "./models/BidStatusMongoDBCls";
import { BidStatusFirebaseCls } from "./models/BidStatusFirebaseCls";
import { BidStatusMySQLDBCls } from "./models/BidStatusMySQLDBCls";
import { BidStatusDTO } from "./models/BidStatusDTO";

export const payloadSupportsBidStatusRowInterface: any = (
  payload: any
): payload is IBidStatusRow => {
  return !!payload?.BidStatus.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsBidStatusInsertInterface: any = (
  payload: any
): payload is IBidStatusInsert => {
  return !!payload?.BidStatus
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsBidStatusUpdateInterface: any = (
  payload: any
): payload is IBidStatusUpdate => {
  return !!payload?.BidStatus
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new BidStatusSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IBidStatusUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new BidStatusMongoDBCls().insertARow(payload);
          new BidStatusFirebaseCls().insertARow(payload);
          new BidStatusMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new BidStatusMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
            
          );
          new BidStatusFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidStatusMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "patch": {
          new BidStatusMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidStatusFirebaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidStatusMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "delete": {
          new BidStatusMongoDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidStatusFirebaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidStatusMySQLDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
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
const mongoDBDatabaseClass: any = new BidStatusMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IBidStatusUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new BidStatusSupabaseCls().insertARow(payload);
          new BidStatusFirebaseCls().insertARow(payload);
          new BidStatusMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new BidStatusSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidStatusFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidStatusMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "patch": {
          new BidStatusSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidStatusFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidStatusMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "delete": {
          new BidStatusSupabaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidStatusFirebaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidStatusMySQLDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
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
  new BidStatusSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IBidStatusUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new BidStatusSupabaseCls().insertARow(payload);
          new BidStatusMongoDBCls().insertARow(payload);
          new BidStatusMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new BidStatusSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidStatusMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidStatusMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "patch": {
          new BidStatusSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidStatusMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidStatusMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "delete": {
          new BidStatusSupabaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidStatusMongoDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidStatusMySQLDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
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
const mySQLDatabaseClass: any = new BidStatusSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IBidStatusUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new BidStatusSupabaseCls().insertARow(payload);
          new BidStatusMongoDBCls().insertARow(payload);
          new BidStatusFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new BidStatusSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidStatusMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidStatusFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          break;
        }

        case "patch": {
          new BidStatusSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidStatusMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidStatusFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          break;
        }

        case "delete": {
          new BidStatusSupabaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidStatusMongoDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidStatusFirebaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
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
 * Gets, gets or edits a BidStatus resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidStatusGets interface.
 * @returns IBidStatusRow data type object
 *
 */
const supabaseGetBidStatus = async (
  columnValue: any,
  columnName?: string
): Promise<IBidStatusRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a BidStatus resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidStatusGets interface.
 * @returns IBidStatusRow data type object
 *
 */
const mongoDBGetBidStatus = async (
  columnValue: any,
  columnName?: string
): Promise<IBidStatusRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a BidStatus resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidStatusGets interface.
 * @returns IBidStatusRow data type object
 *
 */
const firebaseGetBidStatus = async (
  columnValue: any,
  columnName?: string
): Promise<IBidStatusRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a BidStatus resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidStatusGets interface.
 * @returns IBidStatusRow data type object
 *
 */
const mysqlDBGetBidStatus = async (
  columnValue: any,
  columnName?: string
): Promise<IBidStatusRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidStatusGets interface.
 * @returns IBidStatusRow data type object
 *
 */
const apiGETBidStatus = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IBidStatusRow | any | null> => {
  // Intitialize the BidStatusResultObject variable
  let BidStatusResultObject: IBidStatusRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BidStatusResultObject =
        await supabaseGetBidStatus(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BidStatusResultObject =
        await mongoDBGetBidStatus(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      BidStatusResultObject =
        await mongoDBGetBidStatus(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BidStatusResultObject =
        await firebaseGetBidStatus(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      BidStatusResultObject =
        await firebaseGetBidStatus(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BidStatusResultObject =
        await mysqlDBGetBidStatus(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      BidStatusResultObject =
        await mysqlDBGetBidStatus(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BidStatusResultObject =
        await supabaseGetBidStatus(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    BidStatusResultObject =
      await supabaseGetBidStatus(columnValue, columnName);
  }

  return BidStatusResultObject;
};

/*
 * Gets an existing BidStatus resource
 *
 * @param req : Request - BidStatus request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidStatusGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidStatus']
    #swagger.description = 'Endpoint to get a new BidStatus resource.'
    #swagger.summary = 'Gets an existing BidStatus resource.'

    #swagger.path = '/models/bid-status'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'BidStatus ____uuiKey____ key identifier used to get the resource.',
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
    const { ____uuiKey____ } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the BidStatus resource
      const uuid: string = ____uuiKey____;

      let BidStatusResultObject:
        | IBidStatusRow
        | Array<IBidStatusRow>
        | any
        | null;

      if (____uuiKey____) {
        // Gets the BidStatus resource from the database
        BidStatusResultObject =
          apiGETBidStatus(req, "____uuiKey____,", uuid);
      } else {
        // Gets all the models from the BidStatus resource
        BidStatusResultObject =
          apiGETBidStatus(req);
      }

      if (!BidStatusResultObject) {
        /* #swagger.responses[404] = {
          description: 'BidStatus resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'BidStatus',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "BidStatus resource was not found.",
          BidStatusResultObject,
          "BidStatus",
          "PUT"
        );
      }

      // Execute https request
      BidStatusResultObject =
        apiPUTBidStatus(
          req,
          BidStatusResultObject,
          uuid,
          "____uuiKey____"
        );

      /* #swagger.responses[201] = {
        description: 'BidStatus resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/BidStatus'
          }
          model: 'BidStatus',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        BidStatusResultObject,
        "BidStatus",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/bid-status", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'BidStatus',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/bid-status", Missing or invalid parameters.',
        req.body,
        "BidStatus",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the bid-status resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'BidStatus',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bid-status resource.",
      error,
      "BidStatus",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a BidStatus resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidStatusInsert interface.
 * @returns IBidStatusRow data type object
 *
 */
const supabasePostBidStatus = async (
  payload: any
): Promise<IBidStatusInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a BidStatus resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidStatusInsert interface.
 * @returns IBidStatusRow data type object
 *
 */
const mongoDBPostBidStatus = async (
  payload: any
): Promise<IBidStatusRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a BidStatus resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidStatusInsert interface.
 * @returns IBidStatusRow data type object
 *
 */
const firebasePostBidStatus = async (
  payload: any
): Promise<IBidStatusInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a BidStatus resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidStatusInsert interface.
 * @returns IBidStatusRow data type object
 *
 */
const mysqlDBPostBidStatus = async (
  payload: any
): Promise<IBidStatusInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a BidStatus resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidStatusInsert interface.
 * @returns IBidStatusRow data type object
 *
 */
const apiPOSTBidStatus = async (
  req: any,
  payload: any
): Promise<IBidStatusInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the BidStatus resource into the database
  let BidStatusResultObject:
    | IBidStatusRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BidStatusResultObject =
        await supabasePostBidStatus(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BidStatusResultObject =
        await mongoDBPostBidStatus(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      BidStatusResultObject =
        await mongoDBPostBidStatus(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BidStatusResultObject =
        await firebasePostBidStatus(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      BidStatusResultObject =
        await firebasePostBidStatus(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BidStatusResultObject =
        await mysqlDBPostBidStatus(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      BidStatusResultObject =
        await mysqlDBPostBidStatus(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BidStatusResultObject =
        await supabasePostBidStatus(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    BidStatusResultObject =
      await supabasePostBidStatus(payload);
  }

  return BidStatusResultObject;
};

/*
 * Creates a new BidStatus resource
 *
 * @param req : Request - BidStatus request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidStatusPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidStatus']
    #swagger.description = 'Endpoint to create a new BidStatus resource.'
    #swagger.summary = 'Creates a new BidStatus resource.'

    #swagger.path = '/models/bid-status'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the BidStatus resource.',
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
      payloadSupportsBidStatusInsertInterface(payload)
    ) {
      // Compose the BidStatus request object
      const BidStatusData: IBidStatusInsert =
      {
				bid_status_id: payload.bid_status_id,
				bid_status_name: payload.bid_status_name,
				fid: payload.fid,
      };

      // Insert the BidStatus resource into the database
      let BidStatusResultObject:
        | IBidStatusRow
        | any
        | null;

      // Execute https request
      BidStatusResultObject =
        apiPOSTBidStatus(
          req,
          BidStatusData
        );

      /* #swagger.responses[201] = {
        description: 'BidStatus resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/BidStatus'
          }
          model: 'BidStatus',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "BidStatus resource created successfully.",
        BidStatusResultObject,
        "BidStatus",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/bid-status". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'BidStatus',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/bid-status". Missing or invalid parameters.',
        req.body,
        "BidStatus",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the bid-status resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'BidStatus',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the bid-status resource.",
      error,
      "BidStatus",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a BidStatus resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidStatusUpdate interface.
 * @returns IBidStatusRow data type object
 *
 */
const supabasePutBidStatus = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidStatusInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a BidStatus resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidStatusUpdate interface.
 * @returns IBidStatusRow data type object
 *
 */
const mongoDBPutBidStatus = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidStatusRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a BidStatus resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidStatusUpdate interface.
 * @returns IBidStatusRow data type object
 *
 */
const firebasePutBidStatus = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidStatusInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a BidStatus resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidStatusUpdate interface.
 * @returns IBidStatusRow data type object
 *
 */
const mysqlDBPutBidStatus = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidStatusInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidStatusUpdate interface.
 * @returns IBidStatusRow data type object
 *
 */
const apiPUTBidStatus = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidStatusInsert | any | null> => {
  // Intitialize the BidStatusResultObject variable
  let BidStatusResultObject: IBidStatusRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BidStatusResultObject =
        await supabasePutBidStatus(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BidStatusResultObject =
        await mongoDBPutBidStatus(
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
      BidStatusResultObject =
        await mongoDBPutBidStatus(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BidStatusResultObject =
        await firebasePutBidStatus(
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
      BidStatusResultObject =
        await firebasePutBidStatus(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BidStatusResultObject =
        await mysqlDBPutBidStatus(
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
      BidStatusResultObject =
        await mysqlDBPutBidStatus(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BidStatusResultObject =
        await supabasePutBidStatus(
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
    BidStatusResultObject =
      await supabasePutBidStatus(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return BidStatusResultObject;
};

/*
 * Updates an existing BidStatus resource
 *
 * @param req : Request - BidStatus request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidStatusPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidStatus']
    #swagger.description = 'Endpoint to update a new BidStatus resource.'
    #swagger.summary = 'Updates a new BidStatus resource.'

    #swagger.path = '/models/bid-status'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'BidStatus ____uuiKey____ key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the BidStatus resource.',
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
    const { ____uuiKey____ } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      ____uuiKey____ &&
      payload &&
      payloadSupportsBidStatusUpdateInterface(payload)
    ) {
      // Get the uuid to identify the BidStatus resource
      const uuid: string = ____uuiKey____;

      // Compose the BidStatus request object
      const BidStatusData: IBidStatusRow = {};
      
				if('bid_status_id' in payload){ BidStatusData.bid_status_id = payload.bid_status_id; }
				if('bid_status_name' in payload){ BidStatusData.bid_status_name = payload.bid_status_name; }
				if('fid' in payload){ BidStatusData.fid = payload.fid; }

      // Gets the BidStatus resource from the database
      let BidStatusResultObject:
        | IBidStatusRow
        | any
        | null = apiGETBidStatus(
          req,
          "____uuiKey____",
          uuid
        );

      if (!BidStatusResultObject) {
        /* #swagger.responses[404] = {
          description: 'BidStatus resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'BidStatus',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "BidStatus",
          "PUT"
        );
      }

      // Execute https request
      BidStatusResultObject =
        apiPUTBidStatus(
          req,
          BidStatusData,
          uuid,
          "____uuiKey____"
        );

      /* #swagger.responses[201] = {
        description: 'BidStatus resource updated successfully.',
        schema: {
          $ref: '#/definitions/BidStatus'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "BidStatus resource updated successfully.",
        BidStatusResultObject,
        "BidStatus",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/bid-status" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'BidStatus',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "BidStatus",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the bid-status resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'BidStatus',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bid-status resource.",
      error,
      "BidStatus",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing BidStatus resource partially
 *
 * @param req : Request - BidStatus partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidStatusPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidStatus']
    #swagger.description = 'Endpoint to update a new BidStatus resource.'
    #swagger.summary = 'Updates a new BidStatus resource.'

    #swagger.path = '/models/bid-status'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'BidStatus ____uuiKey____ key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the BidStatus resource.',
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
    const { ____uuiKey____ } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      ____uuiKey____ &&
      payload &&
      payloadSupportsBidStatusUpdateInterface(payload)
    ) {
      // Get the uuid to identify the BidStatus resource
      const uuid: string = ____uuiKey____;

      // Compose the BidStatus request object
      const BidStatusData: IBidStatusRow = {};
      
				if('bid_status_id' in payload){ BidStatusData.bid_status_id = payload.bid_status_id; }
				if('bid_status_name' in payload){ BidStatusData.bid_status_name = payload.bid_status_name; }
				if('fid' in payload){ BidStatusData.fid = payload.fid; }

      // Gets the BidStatus resource from the database
      let BidStatusResultObject:
        | IBidStatusRow
        | any
        | null = apiGETBidStatus(
          req,
          "____uuiKey____",
          uuid
        );

      if (!BidStatusResultObject) {
        /* #swagger.responses[404] = {
          description: 'BidStatus resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'BidStatus',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "BidStatus",
          "PATCH"
        );
      }

      // Execute https request
      BidStatusResultObject =
        apiPUTBidStatus(
          req,
          BidStatusData,
          uuid,
          "____uuiKey____"
        );

      /* #swagger.responses[201] = {
        description: 'BidStatus resource updated successfully.',
        schema: {
          $ref: '#/definitions/BidStatus'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "BidStatus resource updated successfully.",
        BidStatusResultObject,
        "BidStatus",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/bid-status" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'BidStatus',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "BidStatus",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the bid-status resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'BidStatus',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bid-status resource.",
      error,
      "BidStatus",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a BidStatus resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidStatusRow data type object
 *
 */
const supabaseDeleteBidStatus = async (
  columnValue: any,
  columnName?: string
): Promise<IBidStatusInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a BidStatus resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidStatusRow data type object
 *
 */
const mongoDBDeleteBidStatus = async (
  columnValue: any,
  columnName?: string
): Promise<IBidStatusRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a BidStatus resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidStatusRow data type object
 *
 */
const firebaseDeleteBidStatus = async (
  columnValue: any,
  columnName?: string
): Promise<IBidStatusInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a BidStatus resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidStatusRow data type object
 *
 */
const mysqlDBDeleteBidStatus = async (
  columnValue: any,
  columnName?: string
): Promise<IBidStatusInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidStatusRow data type object
 *
 */
const apiDELETEBidStatus = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IBidStatusInsert | any | null> => {
  // Intitialize the BidStatusResultObject variable
  let BidStatusResultObject: IBidStatusRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BidStatusResultObject =
        await supabaseDeleteBidStatus(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BidStatusResultObject =
        await mongoDBDeleteBidStatus(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      BidStatusResultObject =
        await mongoDBDeleteBidStatus(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BidStatusResultObject =
        await firebaseDeleteBidStatus(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      BidStatusResultObject =
        await firebaseDeleteBidStatus(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BidStatusResultObject =
        await mysqlDBDeleteBidStatus(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      BidStatusResultObject =
        await mysqlDBDeleteBidStatus(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BidStatusResultObject =
        await supabaseDeleteBidStatus(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    BidStatusResultObject =
      await supabaseDeleteBidStatus(columnValue, columnName);
  }

  return BidStatusResultObject;
};

/*
 * Deletes an existing BidStatus resource
 *
 * @param req : Request - BidStatus request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidStatusDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidStatus']
    #swagger.description = 'Endpoint to delete a new BidStatus resource.'
    #swagger.summary = 'Updates a new BidStatus resource.'

    #swagger.path = '/models/bid-status'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'BidStatus ____uuiKey____ key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the BidStatus resource.',
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
    const { ____uuiKey____ } = req.params;

    // If all the parameters are available, its a go
    if (____uuiKey____) {
      // Get the uuid to identify the BidStatus resource
      const uuid: string = ____uuiKey____;

      // Gets the BidStatus resource from the database
      let BidStatusResultObject:
        | IBidStatusRow
        | any
        | null = apiGETBidStatus(
          req,
          "____uuiKey____",
          uuid
        );

      if (!BidStatusResultObject) {
        /* #swagger.responses[404] = {
          description: 'BidStatus resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'BidStatus',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "BidStatus",
          "PATCH"
        );
      }

      // Execute https request
      BidStatusResultObject =
        apiDELETEBidStatus(req, uuid, "____uuiKey____");

      /* #swagger.responses[201] = {
        description: 'BidStatus resource deleted successfully.',
        schema: {
          '____uuiKey____': '____uuiKey____'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "BidStatus resource deleted successfully.",
        BidStatusResultObject,
        "BidStatus",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/bid-status" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'BidStatus',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "BidStatus",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the bid-status resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'BidStatus',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bid-status resource.",
      error,
      "BidStatus",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of BidStatus without the response body.
 *
 * @param req : Request - BidStatus request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidStatusHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidStatus']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of BidStatus without the response body'
  
      #swagger.path = '/models/bid-status'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the BidStatus resource.',
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
            description: 'Could not perform a HEAD request at the "/models/bid-status" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'BidStatus',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "BidStatus",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the bid-status resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'BidStatus',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the bid-status resource.",
      error,
      "BidStatus",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - BidStatus request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidStatusTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidStatus']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/bid-status'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the BidStatus resource.',
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
        "BidStatus",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/bid-status" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'BidStatus',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "BidStatus",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the bid-status resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'BidStatus',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the bid-status resource.",
      error,
      "BidStatus",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - BidStatus request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidStatusOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidStatus']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/bid-status'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the BidStatus resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/bid-status" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'BidStatus',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "BidStatus",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the bid-status resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'BidStatus',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the bid-status resource.",
      error,
      "BidStatus",
      "OPTIONS"
    );
  }

  // #swagger.end
};
