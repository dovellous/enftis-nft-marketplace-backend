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
  IAuctionTypesInsert,
  IAuctionTypesRow,
  IAuctionTypesUpdate
} from "./models/AuctionTypesTypesDefinitions";

import { AuctionTypesSupabaseCls } from "./models/AuctionTypesSupabaseCls";
import { AuctionTypesMongoDBCls } from "./models/AuctionTypesMongoDBCls";
import { AuctionTypesFirebaseCls } from "./models/AuctionTypesFirebaseCls";
import { AuctionTypesMySQLDBCls } from "./models/AuctionTypesMySQLDBCls";
import { AuctionTypesDTO } from "./models/AuctionTypesDTO";

export const payloadSupportsAuctionTypesRowInterface: any = (
  payload: any
): payload is IAuctionTypesRow => {
  return !!payload?.AuctionTypes.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsAuctionTypesInsertInterface: any = (
  payload: any
): payload is IAuctionTypesInsert => {
  return !!payload?.AuctionTypes
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsAuctionTypesUpdateInterface: any = (
  payload: any
): payload is IAuctionTypesUpdate => {
  return !!payload?.AuctionTypes
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new AuctionTypesSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IAuctionTypesUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new AuctionTypesMongoDBCls().insertARow(payload);
          new AuctionTypesFirebaseCls().insertARow(payload);
          new AuctionTypesMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new AuctionTypesMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
            
          );
          new AuctionTypesFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionTypesMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "patch": {
          new AuctionTypesMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionTypesFirebaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionTypesMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "delete": {
          new AuctionTypesMongoDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionTypesFirebaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionTypesMySQLDBCls().deleteMatchingRows(
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
const mongoDBDatabaseClass: any = new AuctionTypesMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IAuctionTypesUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new AuctionTypesSupabaseCls().insertARow(payload);
          new AuctionTypesFirebaseCls().insertARow(payload);
          new AuctionTypesMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new AuctionTypesSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionTypesFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionTypesMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "patch": {
          new AuctionTypesSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionTypesFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionTypesMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "delete": {
          new AuctionTypesSupabaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionTypesFirebaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionTypesMySQLDBCls().deleteMatchingRows(
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
  new AuctionTypesSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IAuctionTypesUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new AuctionTypesSupabaseCls().insertARow(payload);
          new AuctionTypesMongoDBCls().insertARow(payload);
          new AuctionTypesMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new AuctionTypesSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionTypesMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionTypesMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "patch": {
          new AuctionTypesSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionTypesMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionTypesMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "delete": {
          new AuctionTypesSupabaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionTypesMongoDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionTypesMySQLDBCls().deleteMatchingRows(
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
const mySQLDatabaseClass: any = new AuctionTypesSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IAuctionTypesUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new AuctionTypesSupabaseCls().insertARow(payload);
          new AuctionTypesMongoDBCls().insertARow(payload);
          new AuctionTypesFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new AuctionTypesSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionTypesMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionTypesFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          break;
        }

        case "patch": {
          new AuctionTypesSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionTypesMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionTypesFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          break;
        }

        case "delete": {
          new AuctionTypesSupabaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionTypesMongoDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionTypesFirebaseCls().deleteMatchingRows(
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
 * Gets, gets or edits a AuctionTypes resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuctionTypesGets interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const supabaseGetAuctionTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a AuctionTypes resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuctionTypesGets interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const mongoDBGetAuctionTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a AuctionTypes resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuctionTypesGets interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const firebaseGetAuctionTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a AuctionTypes resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuctionTypesGets interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const mysqlDBGetAuctionTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuctionTypesGets interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const apiGETAuctionTypes = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IAuctionTypesRow | any | null> => {
  // Intitialize the AuctionTypesResultObject variable
  let AuctionTypesResultObject: IAuctionTypesRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      AuctionTypesResultObject =
        await supabaseGetAuctionTypes(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      AuctionTypesResultObject =
        await mongoDBGetAuctionTypes(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      AuctionTypesResultObject =
        await mongoDBGetAuctionTypes(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      AuctionTypesResultObject =
        await firebaseGetAuctionTypes(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      AuctionTypesResultObject =
        await firebaseGetAuctionTypes(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      AuctionTypesResultObject =
        await mysqlDBGetAuctionTypes(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      AuctionTypesResultObject =
        await mysqlDBGetAuctionTypes(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      AuctionTypesResultObject =
        await supabaseGetAuctionTypes(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    AuctionTypesResultObject =
      await supabaseGetAuctionTypes(columnValue, columnName);
  }

  return AuctionTypesResultObject;
};

/*
 * Gets an existing AuctionTypes resource
 *
 * @param req : Request - AuctionTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionTypesGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionTypes']
    #swagger.description = 'Endpoint to get a new AuctionTypes resource.'
    #swagger.summary = 'Gets an existing AuctionTypes resource.'

    #swagger.path = '/models/auction-types'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'AuctionTypes ____uuiKey____ key identifier used to get the resource.',
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
      // Get the uuid to identify the AuctionTypes resource
      const uuid: string = ____uuiKey____;

      let AuctionTypesResultObject:
        | IAuctionTypesRow
        | Array<IAuctionTypesRow>
        | any
        | null;

      if (____uuiKey____) {
        // Gets the AuctionTypes resource from the database
        AuctionTypesResultObject =
          apiGETAuctionTypes(req, "____uuiKey____,", uuid);
      } else {
        // Gets all the models from the AuctionTypes resource
        AuctionTypesResultObject =
          apiGETAuctionTypes(req);
      }

      if (!AuctionTypesResultObject) {
        /* #swagger.responses[404] = {
          description: 'AuctionTypes resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'AuctionTypes',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "AuctionTypes resource was not found.",
          AuctionTypesResultObject,
          "AuctionTypes",
          "PUT"
        );
      }

      // Execute https request
      AuctionTypesResultObject =
        apiPUTAuctionTypes(
          req,
          AuctionTypesResultObject,
          uuid,
          "____uuiKey____"
        );

      /* #swagger.responses[201] = {
        description: 'AuctionTypes resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/AuctionTypes'
          }
          model: 'AuctionTypes',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        AuctionTypesResultObject,
        "AuctionTypes",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/auction-types", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'AuctionTypes',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/auction-types", Missing or invalid parameters.',
        req.body,
        "AuctionTypes",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the auction-types resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'AuctionTypes',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the auction-types resource.",
      error,
      "AuctionTypes",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a AuctionTypes resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionTypesInsert interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const supabasePostAuctionTypes = async (
  payload: any
): Promise<IAuctionTypesInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a AuctionTypes resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionTypesInsert interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const mongoDBPostAuctionTypes = async (
  payload: any
): Promise<IAuctionTypesRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a AuctionTypes resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionTypesInsert interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const firebasePostAuctionTypes = async (
  payload: any
): Promise<IAuctionTypesInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a AuctionTypes resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionTypesInsert interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const mysqlDBPostAuctionTypes = async (
  payload: any
): Promise<IAuctionTypesInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a AuctionTypes resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionTypesInsert interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const apiPOSTAuctionTypes = async (
  req: any,
  payload: any
): Promise<IAuctionTypesInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the AuctionTypes resource into the database
  let AuctionTypesResultObject:
    | IAuctionTypesRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      AuctionTypesResultObject =
        await supabasePostAuctionTypes(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      AuctionTypesResultObject =
        await mongoDBPostAuctionTypes(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      AuctionTypesResultObject =
        await mongoDBPostAuctionTypes(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      AuctionTypesResultObject =
        await firebasePostAuctionTypes(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      AuctionTypesResultObject =
        await firebasePostAuctionTypes(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      AuctionTypesResultObject =
        await mysqlDBPostAuctionTypes(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      AuctionTypesResultObject =
        await mysqlDBPostAuctionTypes(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      AuctionTypesResultObject =
        await supabasePostAuctionTypes(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    AuctionTypesResultObject =
      await supabasePostAuctionTypes(payload);
  }

  return AuctionTypesResultObject;
};

/*
 * Creates a new AuctionTypes resource
 *
 * @param req : Request - AuctionTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionTypesPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionTypes']
    #swagger.description = 'Endpoint to create a new AuctionTypes resource.'
    #swagger.summary = 'Creates a new AuctionTypes resource.'

    #swagger.path = '/models/auction-types'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the AuctionTypes resource.',
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
      payloadSupportsAuctionTypesInsertInterface(payload)
    ) {
      // Compose the AuctionTypes request object
      const AuctionTypesData: IAuctionTypesInsert =
      {
				auction_type: payload.auction_type,
				auction_type_description: payload.auction_type_description,
				auction_type_id: payload.auction_type_id,
				fid: payload.fid,
      };

      // Insert the AuctionTypes resource into the database
      let AuctionTypesResultObject:
        | IAuctionTypesRow
        | any
        | null;

      // Execute https request
      AuctionTypesResultObject =
        apiPOSTAuctionTypes(
          req,
          AuctionTypesData
        );

      /* #swagger.responses[201] = {
        description: 'AuctionTypes resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/AuctionTypes'
          }
          model: 'AuctionTypes',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "AuctionTypes resource created successfully.",
        AuctionTypesResultObject,
        "AuctionTypes",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/auction-types". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'AuctionTypes',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/auction-types". Missing or invalid parameters.',
        req.body,
        "AuctionTypes",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the auction-types resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'AuctionTypes',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the auction-types resource.",
      error,
      "AuctionTypes",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a AuctionTypes resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionTypesUpdate interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const supabasePutAuctionTypes = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a AuctionTypes resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionTypesUpdate interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const mongoDBPutAuctionTypes = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a AuctionTypes resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionTypesUpdate interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const firebasePutAuctionTypes = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a AuctionTypes resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionTypesUpdate interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const mysqlDBPutAuctionTypes = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionTypesUpdate interface.
 * @returns IAuctionTypesRow data type object
 *
 */
const apiPUTAuctionTypes = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesInsert | any | null> => {
  // Intitialize the AuctionTypesResultObject variable
  let AuctionTypesResultObject: IAuctionTypesRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      AuctionTypesResultObject =
        await supabasePutAuctionTypes(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      AuctionTypesResultObject =
        await mongoDBPutAuctionTypes(
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
      AuctionTypesResultObject =
        await mongoDBPutAuctionTypes(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      AuctionTypesResultObject =
        await firebasePutAuctionTypes(
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
      AuctionTypesResultObject =
        await firebasePutAuctionTypes(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      AuctionTypesResultObject =
        await mysqlDBPutAuctionTypes(
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
      AuctionTypesResultObject =
        await mysqlDBPutAuctionTypes(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      AuctionTypesResultObject =
        await supabasePutAuctionTypes(
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
    AuctionTypesResultObject =
      await supabasePutAuctionTypes(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return AuctionTypesResultObject;
};

/*
 * Updates an existing AuctionTypes resource
 *
 * @param req : Request - AuctionTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionTypesPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionTypes']
    #swagger.description = 'Endpoint to update a new AuctionTypes resource.'
    #swagger.summary = 'Updates a new AuctionTypes resource.'

    #swagger.path = '/models/auction-types'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'AuctionTypes ____uuiKey____ key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the AuctionTypes resource.',
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
      payloadSupportsAuctionTypesUpdateInterface(payload)
    ) {
      // Get the uuid to identify the AuctionTypes resource
      const uuid: string = ____uuiKey____;

      // Compose the AuctionTypes request object
      const AuctionTypesData: IAuctionTypesRow = {};
      
				if('auction_type' in payload){ AuctionTypesData.auction_type = payload.auction_type; }
				if('auction_type_description' in payload){ AuctionTypesData.auction_type_description = payload.auction_type_description; }
				if('auction_type_id' in payload){ AuctionTypesData.auction_type_id = payload.auction_type_id; }
				if('fid' in payload){ AuctionTypesData.fid = payload.fid; }

      // Gets the AuctionTypes resource from the database
      let AuctionTypesResultObject:
        | IAuctionTypesRow
        | any
        | null = apiGETAuctionTypes(
          req,
          "____uuiKey____",
          uuid
        );

      if (!AuctionTypesResultObject) {
        /* #swagger.responses[404] = {
          description: 'AuctionTypes resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'AuctionTypes',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "AuctionTypes",
          "PUT"
        );
      }

      // Execute https request
      AuctionTypesResultObject =
        apiPUTAuctionTypes(
          req,
          AuctionTypesData,
          uuid,
          "____uuiKey____"
        );

      /* #swagger.responses[201] = {
        description: 'AuctionTypes resource updated successfully.',
        schema: {
          $ref: '#/definitions/AuctionTypes'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "AuctionTypes resource updated successfully.",
        AuctionTypesResultObject,
        "AuctionTypes",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/auction-types" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'AuctionTypes',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "AuctionTypes",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the auction-types resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'AuctionTypes',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the auction-types resource.",
      error,
      "AuctionTypes",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing AuctionTypes resource partially
 *
 * @param req : Request - AuctionTypes partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionTypesPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionTypes']
    #swagger.description = 'Endpoint to update a new AuctionTypes resource.'
    #swagger.summary = 'Updates a new AuctionTypes resource.'

    #swagger.path = '/models/auction-types'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'AuctionTypes ____uuiKey____ key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the AuctionTypes resource.',
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
      payloadSupportsAuctionTypesUpdateInterface(payload)
    ) {
      // Get the uuid to identify the AuctionTypes resource
      const uuid: string = ____uuiKey____;

      // Compose the AuctionTypes request object
      const AuctionTypesData: IAuctionTypesRow = {};
      
				if('auction_type' in payload){ AuctionTypesData.auction_type = payload.auction_type; }
				if('auction_type_description' in payload){ AuctionTypesData.auction_type_description = payload.auction_type_description; }
				if('auction_type_id' in payload){ AuctionTypesData.auction_type_id = payload.auction_type_id; }
				if('fid' in payload){ AuctionTypesData.fid = payload.fid; }

      // Gets the AuctionTypes resource from the database
      let AuctionTypesResultObject:
        | IAuctionTypesRow
        | any
        | null = apiGETAuctionTypes(
          req,
          "____uuiKey____",
          uuid
        );

      if (!AuctionTypesResultObject) {
        /* #swagger.responses[404] = {
          description: 'AuctionTypes resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'AuctionTypes',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "AuctionTypes",
          "PATCH"
        );
      }

      // Execute https request
      AuctionTypesResultObject =
        apiPUTAuctionTypes(
          req,
          AuctionTypesData,
          uuid,
          "____uuiKey____"
        );

      /* #swagger.responses[201] = {
        description: 'AuctionTypes resource updated successfully.',
        schema: {
          $ref: '#/definitions/AuctionTypes'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "AuctionTypes resource updated successfully.",
        AuctionTypesResultObject,
        "AuctionTypes",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/auction-types" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'AuctionTypes',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "AuctionTypes",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the auction-types resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'AuctionTypes',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the auction-types resource.",
      error,
      "AuctionTypes",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a AuctionTypes resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuctionTypesRow data type object
 *
 */
const supabaseDeleteAuctionTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a AuctionTypes resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuctionTypesRow data type object
 *
 */
const mongoDBDeleteAuctionTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a AuctionTypes resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuctionTypesRow data type object
 *
 */
const firebaseDeleteAuctionTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a AuctionTypes resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuctionTypesRow data type object
 *
 */
const mysqlDBDeleteAuctionTypes = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuctionTypesRow data type object
 *
 */
const apiDELETEAuctionTypes = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IAuctionTypesInsert | any | null> => {
  // Intitialize the AuctionTypesResultObject variable
  let AuctionTypesResultObject: IAuctionTypesRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      AuctionTypesResultObject =
        await supabaseDeleteAuctionTypes(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      AuctionTypesResultObject =
        await mongoDBDeleteAuctionTypes(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      AuctionTypesResultObject =
        await mongoDBDeleteAuctionTypes(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      AuctionTypesResultObject =
        await firebaseDeleteAuctionTypes(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      AuctionTypesResultObject =
        await firebaseDeleteAuctionTypes(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      AuctionTypesResultObject =
        await mysqlDBDeleteAuctionTypes(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      AuctionTypesResultObject =
        await mysqlDBDeleteAuctionTypes(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      AuctionTypesResultObject =
        await supabaseDeleteAuctionTypes(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    AuctionTypesResultObject =
      await supabaseDeleteAuctionTypes(columnValue, columnName);
  }

  return AuctionTypesResultObject;
};

/*
 * Deletes an existing AuctionTypes resource
 *
 * @param req : Request - AuctionTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionTypesDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionTypes']
    #swagger.description = 'Endpoint to delete a new AuctionTypes resource.'
    #swagger.summary = 'Updates a new AuctionTypes resource.'

    #swagger.path = '/models/auction-types'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'AuctionTypes ____uuiKey____ key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the AuctionTypes resource.',
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
      // Get the uuid to identify the AuctionTypes resource
      const uuid: string = ____uuiKey____;

      // Gets the AuctionTypes resource from the database
      let AuctionTypesResultObject:
        | IAuctionTypesRow
        | any
        | null = apiGETAuctionTypes(
          req,
          "____uuiKey____",
          uuid
        );

      if (!AuctionTypesResultObject) {
        /* #swagger.responses[404] = {
          description: 'AuctionTypes resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'AuctionTypes',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "AuctionTypes",
          "PATCH"
        );
      }

      // Execute https request
      AuctionTypesResultObject =
        apiDELETEAuctionTypes(req, uuid, "____uuiKey____");

      /* #swagger.responses[201] = {
        description: 'AuctionTypes resource deleted successfully.',
        schema: {
          '____uuiKey____': '____uuiKey____'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "AuctionTypes resource deleted successfully.",
        AuctionTypesResultObject,
        "AuctionTypes",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/auction-types" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'AuctionTypes',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "AuctionTypes",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the auction-types resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'AuctionTypes',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the auction-types resource.",
      error,
      "AuctionTypes",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of AuctionTypes without the response body.
 *
 * @param req : Request - AuctionTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionTypesHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionTypes']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of AuctionTypes without the response body'
  
      #swagger.path = '/models/auction-types'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the AuctionTypes resource.',
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
            description: 'Could not perform a HEAD request at the "/models/auction-types" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'AuctionTypes',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "AuctionTypes",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the auction-types resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'AuctionTypes',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the auction-types resource.",
      error,
      "AuctionTypes",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - AuctionTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionTypesTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionTypes']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/auction-types'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the AuctionTypes resource.',
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
        "AuctionTypes",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/auction-types" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'AuctionTypes',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "AuctionTypes",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the auction-types resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'AuctionTypes',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the auction-types resource.",
      error,
      "AuctionTypes",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - AuctionTypes request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionTypesOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionTypes']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/auction-types'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the AuctionTypes resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/auction-types" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'AuctionTypes',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "AuctionTypes",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the auction-types resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'AuctionTypes',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the auction-types resource.",
      error,
      "AuctionTypes",
      "OPTIONS"
    );
  }

  // #swagger.end
};
