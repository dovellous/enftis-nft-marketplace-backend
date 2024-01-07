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
  IBidTypesInsert,
  IBidTypesRow,
  IBidTypesUpdate
} from "./models/BidTypesTypesDefinitions";

import { BidTypesSupabaseCls } from "./models/BidTypesSupabaseCls";
import { BidTypesMongoDBCls } from "./models/BidTypesMongoDBCls";
import { BidTypesFirebaseCls } from "./models/BidTypesFirebaseCls";
import { BidTypesMySQLDBCls } from "./models/BidTypesMySQLDBCls";
import { BidTypesDTO } from "./models/BidTypesDTO";

export const payloadSupportsBidTypesRowInterface: any = (
  payload: any
): payload is IBidTypesRow => {
  return !!payload?.BidTypes.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsBidTypesInsertInterface: any = (
  payload: any
): payload is IBidTypesInsert => {
  return !!payload?.BidTypes
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsBidTypesUpdateInterface: any = (
  payload: any
): payload is IBidTypesUpdate => {
  return !!payload?.BidTypes
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new BidTypesSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IBidTypesUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new BidTypesMongoDBCls().insertARow(payload);
          new BidTypesFirebaseCls().insertARow(payload);
          new BidTypesMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new BidTypesMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
            
          );
          new BidTypesFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidTypesMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "patch": {
          new BidTypesMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidTypesFirebaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidTypesMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "delete": {
          new BidTypesMongoDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidTypesFirebaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidTypesMySQLDBCls().deleteMatchingRows(
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
const mongoDBDatabaseClass: any = new BidTypesMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IBidTypesUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new BidTypesSupabaseCls().insertARow(payload);
          new BidTypesFirebaseCls().insertARow(payload);
          new BidTypesMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new BidTypesSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidTypesFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidTypesMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "patch": {
          new BidTypesSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidTypesFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidTypesMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "delete": {
          new BidTypesSupabaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidTypesFirebaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidTypesMySQLDBCls().deleteMatchingRows(
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
  new BidTypesSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IBidTypesUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new BidTypesSupabaseCls().insertARow(payload);
          new BidTypesMongoDBCls().insertARow(payload);
          new BidTypesMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new BidTypesSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidTypesMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidTypesMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "patch": {
          new BidTypesSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidTypesMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidTypesMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "delete": {
          new BidTypesSupabaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidTypesMongoDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidTypesMySQLDBCls().deleteMatchingRows(
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
const mySQLDatabaseClass: any = new BidTypesSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IBidTypesUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new BidTypesSupabaseCls().insertARow(payload);
          new BidTypesMongoDBCls().insertARow(payload);
          new BidTypesFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new BidTypesSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidTypesMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidTypesFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          break;
        }

        case "patch": {
          new BidTypesSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidTypesMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new BidTypesFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          break;
        }

        case "delete": {
          new BidTypesSupabaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidTypesMongoDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new BidTypesFirebaseCls().deleteMatchingRows(
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
 * Gets, gets or edits a BidTypes resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidTypesGets interface.
 * @returns IBidTypesRow data type object
 *
 */
const supabaseGetBidTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IBidTypesRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a BidTypes resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidTypesGets interface.
 * @returns IBidTypesRow data type object
 *
 */
const mongoDBGetBidTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IBidTypesRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a BidTypes resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidTypesGets interface.
 * @returns IBidTypesRow data type object
 *
 */
const firebaseGetBidTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IBidTypesRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a BidTypes resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidTypesGets interface.
 * @returns IBidTypesRow data type object
 *
 */
const mysqlDBGetBidTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IBidTypesRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidTypesGets interface.
 * @returns IBidTypesRow data type object
 *
 */
const apiGETBidTypes = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IBidTypesRow | any | null> => {
  // Intitialize the BidTypesResultObject variable
  let BidTypesResultObject: IBidTypesRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BidTypesResultObject =
        await supabaseGetBidTypes(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BidTypesResultObject =
        await mongoDBGetBidTypes(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      BidTypesResultObject =
        await mongoDBGetBidTypes(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BidTypesResultObject =
        await firebaseGetBidTypes(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      BidTypesResultObject =
        await firebaseGetBidTypes(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BidTypesResultObject =
        await mysqlDBGetBidTypes(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      BidTypesResultObject =
        await mysqlDBGetBidTypes(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BidTypesResultObject =
        await supabaseGetBidTypes(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    BidTypesResultObject =
      await supabaseGetBidTypes(columnValue, columnName);
  }

  return BidTypesResultObject;
};

/*
 * Gets an existing BidTypes resource
 *
 * @param req : Request - BidTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidTypesGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidTypes']
    #swagger.description = 'Endpoint to get a new BidTypes resource.'
    #swagger.summary = 'Gets an existing BidTypes resource.'

    #swagger.path = '/models/bid-types'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'BidTypes ____uuiKey____ key identifier used to get the resource.',
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
      // Get the uuid to identify the BidTypes resource
      const uuid: string = ____uuiKey____;

      let BidTypesResultObject:
        | IBidTypesRow
        | Array<IBidTypesRow>
        | any
        | null;

      if (____uuiKey____) {
        // Gets the BidTypes resource from the database
        BidTypesResultObject =
          apiGETBidTypes(req, "____uuiKey____,", uuid);
      } else {
        // Gets all the models from the BidTypes resource
        BidTypesResultObject =
          apiGETBidTypes(req);
      }

      if (!BidTypesResultObject) {
        /* #swagger.responses[404] = {
          description: 'BidTypes resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'BidTypes',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "BidTypes resource was not found.",
          BidTypesResultObject,
          "BidTypes",
          "PUT"
        );
      }

      // Execute https request
      BidTypesResultObject =
        apiPUTBidTypes(
          req,
          BidTypesResultObject,
          uuid,
          "____uuiKey____"
        );

      /* #swagger.responses[201] = {
        description: 'BidTypes resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/BidTypes'
          }
          model: 'BidTypes',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        BidTypesResultObject,
        "BidTypes",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/bid-types", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'BidTypes',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/bid-types", Missing or invalid parameters.',
        req.body,
        "BidTypes",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the bid-types resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'BidTypes',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bid-types resource.",
      error,
      "BidTypes",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a BidTypes resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidTypesInsert interface.
 * @returns IBidTypesRow data type object
 *
 */
const supabasePostBidTypes = async (
  payload: any
): Promise<IBidTypesInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a BidTypes resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidTypesInsert interface.
 * @returns IBidTypesRow data type object
 *
 */
const mongoDBPostBidTypes = async (
  payload: any
): Promise<IBidTypesRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a BidTypes resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidTypesInsert interface.
 * @returns IBidTypesRow data type object
 *
 */
const firebasePostBidTypes = async (
  payload: any
): Promise<IBidTypesInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a BidTypes resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidTypesInsert interface.
 * @returns IBidTypesRow data type object
 *
 */
const mysqlDBPostBidTypes = async (
  payload: any
): Promise<IBidTypesInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a BidTypes resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidTypesInsert interface.
 * @returns IBidTypesRow data type object
 *
 */
const apiPOSTBidTypes = async (
  req: any,
  payload: any
): Promise<IBidTypesInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the BidTypes resource into the database
  let BidTypesResultObject:
    | IBidTypesRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BidTypesResultObject =
        await supabasePostBidTypes(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BidTypesResultObject =
        await mongoDBPostBidTypes(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      BidTypesResultObject =
        await mongoDBPostBidTypes(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BidTypesResultObject =
        await firebasePostBidTypes(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      BidTypesResultObject =
        await firebasePostBidTypes(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BidTypesResultObject =
        await mysqlDBPostBidTypes(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      BidTypesResultObject =
        await mysqlDBPostBidTypes(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BidTypesResultObject =
        await supabasePostBidTypes(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    BidTypesResultObject =
      await supabasePostBidTypes(payload);
  }

  return BidTypesResultObject;
};

/*
 * Creates a new BidTypes resource
 *
 * @param req : Request - BidTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidTypesPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidTypes']
    #swagger.description = 'Endpoint to create a new BidTypes resource.'
    #swagger.summary = 'Creates a new BidTypes resource.'

    #swagger.path = '/models/bid-types'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the BidTypes resource.',
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
      payloadSupportsBidTypesInsertInterface(payload)
    ) {
      // Compose the BidTypes request object
      const BidTypesData: IBidTypesInsert =
      {
				bid_type: payload.bid_type,
				bid_type_description: payload.bid_type_description,
				bid_type_id: payload.bid_type_id,
				fid: payload.fid,
      };

      // Insert the BidTypes resource into the database
      let BidTypesResultObject:
        | IBidTypesRow
        | any
        | null;

      // Execute https request
      BidTypesResultObject =
        apiPOSTBidTypes(
          req,
          BidTypesData
        );

      /* #swagger.responses[201] = {
        description: 'BidTypes resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/BidTypes'
          }
          model: 'BidTypes',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "BidTypes resource created successfully.",
        BidTypesResultObject,
        "BidTypes",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/bid-types". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'BidTypes',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/bid-types". Missing or invalid parameters.',
        req.body,
        "BidTypes",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the bid-types resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'BidTypes',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the bid-types resource.",
      error,
      "BidTypes",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a BidTypes resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidTypesUpdate interface.
 * @returns IBidTypesRow data type object
 *
 */
const supabasePutBidTypes = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidTypesInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a BidTypes resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidTypesUpdate interface.
 * @returns IBidTypesRow data type object
 *
 */
const mongoDBPutBidTypes = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidTypesRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a BidTypes resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidTypesUpdate interface.
 * @returns IBidTypesRow data type object
 *
 */
const firebasePutBidTypes = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidTypesInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a BidTypes resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidTypesUpdate interface.
 * @returns IBidTypesRow data type object
 *
 */
const mysqlDBPutBidTypes = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidTypesInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidTypesUpdate interface.
 * @returns IBidTypesRow data type object
 *
 */
const apiPUTBidTypes = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidTypesInsert | any | null> => {
  // Intitialize the BidTypesResultObject variable
  let BidTypesResultObject: IBidTypesRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BidTypesResultObject =
        await supabasePutBidTypes(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BidTypesResultObject =
        await mongoDBPutBidTypes(
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
      BidTypesResultObject =
        await mongoDBPutBidTypes(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BidTypesResultObject =
        await firebasePutBidTypes(
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
      BidTypesResultObject =
        await firebasePutBidTypes(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BidTypesResultObject =
        await mysqlDBPutBidTypes(
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
      BidTypesResultObject =
        await mysqlDBPutBidTypes(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BidTypesResultObject =
        await supabasePutBidTypes(
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
    BidTypesResultObject =
      await supabasePutBidTypes(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return BidTypesResultObject;
};

/*
 * Updates an existing BidTypes resource
 *
 * @param req : Request - BidTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidTypesPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidTypes']
    #swagger.description = 'Endpoint to update a new BidTypes resource.'
    #swagger.summary = 'Updates a new BidTypes resource.'

    #swagger.path = '/models/bid-types'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'BidTypes ____uuiKey____ key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the BidTypes resource.',
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
      payloadSupportsBidTypesUpdateInterface(payload)
    ) {
      // Get the uuid to identify the BidTypes resource
      const uuid: string = ____uuiKey____;

      // Compose the BidTypes request object
      const BidTypesData: IBidTypesRow = {};
      
				if('bid_type' in payload){ BidTypesData.bid_type = payload.bid_type; }
				if('bid_type_description' in payload){ BidTypesData.bid_type_description = payload.bid_type_description; }
				if('bid_type_id' in payload){ BidTypesData.bid_type_id = payload.bid_type_id; }
				if('fid' in payload){ BidTypesData.fid = payload.fid; }

      // Gets the BidTypes resource from the database
      let BidTypesResultObject:
        | IBidTypesRow
        | any
        | null = apiGETBidTypes(
          req,
          "____uuiKey____",
          uuid
        );

      if (!BidTypesResultObject) {
        /* #swagger.responses[404] = {
          description: 'BidTypes resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'BidTypes',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "BidTypes",
          "PUT"
        );
      }

      // Execute https request
      BidTypesResultObject =
        apiPUTBidTypes(
          req,
          BidTypesData,
          uuid,
          "____uuiKey____"
        );

      /* #swagger.responses[201] = {
        description: 'BidTypes resource updated successfully.',
        schema: {
          $ref: '#/definitions/BidTypes'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "BidTypes resource updated successfully.",
        BidTypesResultObject,
        "BidTypes",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/bid-types" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'BidTypes',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "BidTypes",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the bid-types resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'BidTypes',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bid-types resource.",
      error,
      "BidTypes",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing BidTypes resource partially
 *
 * @param req : Request - BidTypes partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidTypesPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidTypes']
    #swagger.description = 'Endpoint to update a new BidTypes resource.'
    #swagger.summary = 'Updates a new BidTypes resource.'

    #swagger.path = '/models/bid-types'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'BidTypes ____uuiKey____ key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the BidTypes resource.',
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
      payloadSupportsBidTypesUpdateInterface(payload)
    ) {
      // Get the uuid to identify the BidTypes resource
      const uuid: string = ____uuiKey____;

      // Compose the BidTypes request object
      const BidTypesData: IBidTypesRow = {};
      
				if('bid_type' in payload){ BidTypesData.bid_type = payload.bid_type; }
				if('bid_type_description' in payload){ BidTypesData.bid_type_description = payload.bid_type_description; }
				if('bid_type_id' in payload){ BidTypesData.bid_type_id = payload.bid_type_id; }
				if('fid' in payload){ BidTypesData.fid = payload.fid; }

      // Gets the BidTypes resource from the database
      let BidTypesResultObject:
        | IBidTypesRow
        | any
        | null = apiGETBidTypes(
          req,
          "____uuiKey____",
          uuid
        );

      if (!BidTypesResultObject) {
        /* #swagger.responses[404] = {
          description: 'BidTypes resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'BidTypes',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "BidTypes",
          "PATCH"
        );
      }

      // Execute https request
      BidTypesResultObject =
        apiPUTBidTypes(
          req,
          BidTypesData,
          uuid,
          "____uuiKey____"
        );

      /* #swagger.responses[201] = {
        description: 'BidTypes resource updated successfully.',
        schema: {
          $ref: '#/definitions/BidTypes'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "BidTypes resource updated successfully.",
        BidTypesResultObject,
        "BidTypes",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/bid-types" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'BidTypes',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "BidTypes",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the bid-types resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'BidTypes',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bid-types resource.",
      error,
      "BidTypes",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a BidTypes resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidTypesRow data type object
 *
 */
const supabaseDeleteBidTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IBidTypesInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a BidTypes resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidTypesRow data type object
 *
 */
const mongoDBDeleteBidTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IBidTypesRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a BidTypes resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidTypesRow data type object
 *
 */
const firebaseDeleteBidTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IBidTypesInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a BidTypes resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidTypesRow data type object
 *
 */
const mysqlDBDeleteBidTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IBidTypesInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidTypesRow data type object
 *
 */
const apiDELETEBidTypes = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IBidTypesInsert | any | null> => {
  // Intitialize the BidTypesResultObject variable
  let BidTypesResultObject: IBidTypesRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BidTypesResultObject =
        await supabaseDeleteBidTypes(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BidTypesResultObject =
        await mongoDBDeleteBidTypes(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      BidTypesResultObject =
        await mongoDBDeleteBidTypes(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BidTypesResultObject =
        await firebaseDeleteBidTypes(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      BidTypesResultObject =
        await firebaseDeleteBidTypes(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BidTypesResultObject =
        await mysqlDBDeleteBidTypes(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      BidTypesResultObject =
        await mysqlDBDeleteBidTypes(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BidTypesResultObject =
        await supabaseDeleteBidTypes(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    BidTypesResultObject =
      await supabaseDeleteBidTypes(columnValue, columnName);
  }

  return BidTypesResultObject;
};

/*
 * Deletes an existing BidTypes resource
 *
 * @param req : Request - BidTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidTypesDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidTypes']
    #swagger.description = 'Endpoint to delete a new BidTypes resource.'
    #swagger.summary = 'Updates a new BidTypes resource.'

    #swagger.path = '/models/bid-types'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'BidTypes ____uuiKey____ key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the BidTypes resource.',
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
      // Get the uuid to identify the BidTypes resource
      const uuid: string = ____uuiKey____;

      // Gets the BidTypes resource from the database
      let BidTypesResultObject:
        | IBidTypesRow
        | any
        | null = apiGETBidTypes(
          req,
          "____uuiKey____",
          uuid
        );

      if (!BidTypesResultObject) {
        /* #swagger.responses[404] = {
          description: 'BidTypes resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'BidTypes',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "BidTypes",
          "PATCH"
        );
      }

      // Execute https request
      BidTypesResultObject =
        apiDELETEBidTypes(req, uuid, "____uuiKey____");

      /* #swagger.responses[201] = {
        description: 'BidTypes resource deleted successfully.',
        schema: {
          '____uuiKey____': '____uuiKey____'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "BidTypes resource deleted successfully.",
        BidTypesResultObject,
        "BidTypes",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/bid-types" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'BidTypes',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "BidTypes",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the bid-types resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'BidTypes',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bid-types resource.",
      error,
      "BidTypes",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of BidTypes without the response body.
 *
 * @param req : Request - BidTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidTypesHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidTypes']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of BidTypes without the response body'
  
      #swagger.path = '/models/bid-types'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the BidTypes resource.',
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
            description: 'Could not perform a HEAD request at the "/models/bid-types" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'BidTypes',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "BidTypes",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the bid-types resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'BidTypes',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the bid-types resource.",
      error,
      "BidTypes",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - BidTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidTypesTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidTypes']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/bid-types'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the BidTypes resource.',
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
        "BidTypes",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/bid-types" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'BidTypes',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "BidTypes",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the bid-types resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'BidTypes',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the bid-types resource.",
      error,
      "BidTypes",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - BidTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidTypesOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['BidTypes']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/bid-types'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the BidTypes resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/bid-types" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'BidTypes',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "BidTypes",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the bid-types resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'BidTypes',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the bid-types resource.",
      error,
      "BidTypes",
      "OPTIONS"
    );
  }

  // #swagger.end
};
