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
  IBidsInsert,
  IBidsRow,
  IBidsUpdate
} from "./models/BidsTypesDefinitions";

import { BidsSupabaseCls } from "./models/BidsSupabaseCls";
import { BidsMongoDBCls } from "./models/BidsMongoDBCls";
import { BidsFirebaseCls } from "./models/BidsFirebaseCls";
import { BidsMySQLDBCls } from "./models/BidsMySQLDBCls";
import { BidsDTO } from "./models/BidsDTO";

export const payloadSupportsBidsRowInterface: any = (
  payload: any
): payload is IBidsRow => {
  return !!payload?.Bids.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsBidsInsertInterface: any = (
  payload: any
): payload is IBidsInsert => {
  return !!payload?.Bids
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsBidsUpdateInterface: any = (
  payload: any
): payload is IBidsUpdate => {
  return !!payload?.Bids
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new BidsSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IBidsUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new BidsMongoDBCls().insertARow(payload);
          new BidsFirebaseCls().insertARow(payload);
          new BidsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new BidsMongoDBCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
            
          );
          new BidsFirebaseCls().updateMatchingRows(
            payload,
            "bid_uuid",
            payload.bid_uuid
          );
          new BidsMySQLDBCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          break;
        }

        case "patch": {
          new BidsMongoDBCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          new BidsFirebaseCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          new BidsMySQLDBCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          break;
        }

        case "delete": {
          new BidsMongoDBCls().deleteMatchingRows(
            "bid_uuid",
            payload.bid_uuid
          );
          new BidsFirebaseCls().deleteMatchingRows(
            "bid_uuid",
            payload.bid_uuid
          );
          new BidsMySQLDBCls().deleteMatchingRows(
            "bid_uuid",
            payload.bid_uuid
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
const mongoDBDatabaseClass: any = new BidsMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IBidsUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new BidsSupabaseCls().insertARow(payload);
          new BidsFirebaseCls().insertARow(payload);
          new BidsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new BidsSupabaseCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          new BidsFirebaseCls().updateMatchingRows(
            payload,
            "bid_uuid",
            payload.bid_uuid
          );
          new BidsMySQLDBCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          break;
        }

        case "patch": {
          new BidsSupabaseCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          new BidsFirebaseCls().updateMatchingRows(
            payload,
            "bid_uuid",
            payload.bid_uuid
          );
          new BidsMySQLDBCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          break;
        }

        case "delete": {
          new BidsSupabaseCls().deleteMatchingRows(
            "bid_uuid",
            payload.bid_uuid
          );
          new BidsFirebaseCls().deleteMatchingRows(
            "bid_uuid",
            payload.bid_uuid
          );
          new BidsMySQLDBCls().deleteMatchingRows(
            "bid_uuid",
            payload.bid_uuid
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
  new BidsSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IBidsUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new BidsSupabaseCls().insertARow(payload);
          new BidsMongoDBCls().insertARow(payload);
          new BidsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new BidsSupabaseCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          new BidsMongoDBCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          new BidsMySQLDBCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          break;
        }

        case "patch": {
          new BidsSupabaseCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          new BidsMongoDBCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          new BidsMySQLDBCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          break;
        }

        case "delete": {
          new BidsSupabaseCls().deleteMatchingRows(
            "bid_uuid",
            payload.bid_uuid
          );
          new BidsMongoDBCls().deleteMatchingRows(
            "bid_uuid",
            payload.bid_uuid
          );
          new BidsMySQLDBCls().deleteMatchingRows(
            "bid_uuid",
            payload.bid_uuid
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
const mySQLDatabaseClass: any = new BidsSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IBidsUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new BidsSupabaseCls().insertARow(payload);
          new BidsMongoDBCls().insertARow(payload);
          new BidsFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new BidsSupabaseCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          new BidsMongoDBCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          new BidsFirebaseCls().updateMatchingRows(
            payload,
            "bid_uuid",
            payload.bid_uuid
          );
          break;
        }

        case "patch": {
          new BidsSupabaseCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          new BidsMongoDBCls().updateMatchingRows(
            payload,
            payload.bid_uuid,
            "bid_uuid"
          );
          new BidsFirebaseCls().updateMatchingRows(
            payload,
            "bid_uuid",
            payload.bid_uuid
          );
          break;
        }

        case "delete": {
          new BidsSupabaseCls().deleteMatchingRows(
            "bid_uuid",
            payload.bid_uuid
          );
          new BidsMongoDBCls().deleteMatchingRows(
            "bid_uuid",
            payload.bid_uuid
          );
          new BidsFirebaseCls().deleteMatchingRows(
            "bid_uuid",
            payload.bid_uuid
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
 * Gets, gets or edits a Bids resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidsGets interface.
 * @returns IBidsRow data type object
 *
 */
const supabaseGetBids = async (
  columnValue: any,
  columnName?: string
): Promise<IBidsRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Bids resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidsGets interface.
 * @returns IBidsRow data type object
 *
 */
const mongoDBGetBids = async (
  columnValue: any,
  columnName?: string
): Promise<IBidsRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Bids resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidsGets interface.
 * @returns IBidsRow data type object
 *
 */
const firebaseGetBids = async (
  columnValue: any,
  columnName?: string
): Promise<IBidsRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Bids resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidsGets interface.
 * @returns IBidsRow data type object
 *
 */
const mysqlDBGetBids = async (
  columnValue: any,
  columnName?: string
): Promise<IBidsRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBidsGets interface.
 * @returns IBidsRow data type object
 *
 */
const apiGETBids = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IBidsRow | any | null> => {
  // Intitialize the BidsResultObject variable
  let BidsResultObject: IBidsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BidsResultObject =
        await supabaseGetBids(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BidsResultObject =
        await mongoDBGetBids(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      BidsResultObject =
        await mongoDBGetBids(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BidsResultObject =
        await firebaseGetBids(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      BidsResultObject =
        await firebaseGetBids(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BidsResultObject =
        await mysqlDBGetBids(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      BidsResultObject =
        await mysqlDBGetBids(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BidsResultObject =
        await supabaseGetBids(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    BidsResultObject =
      await supabaseGetBids(columnValue, columnName);
  }

  return BidsResultObject;
};

/*
 * Gets an existing Bids resource
 *
 * @param req : Request - Bids request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidsGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bids']
    #swagger.description = 'Endpoint to get a new Bids resource.'
    #swagger.summary = 'Gets an existing Bids resource.'

    #swagger.path = '/models/bids'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['bid_uuid'] = {
      in: 'path',
      description: 'Bids bid_uuid key identifier used to get the resource.',
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
    const { bid_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the Bids resource
      const uuid: string = bid_uuid;

      let BidsResultObject:
        | IBidsRow
        | Array<IBidsRow>
        | any
        | null;

      if (bid_uuid) {
        // Gets the Bids resource from the database
        BidsResultObject =
          apiGETBids(req, "bid_uuid,", uuid);
      } else {
        // Gets all the models from the Bids resource
        BidsResultObject =
          apiGETBids(req);
      }

      if (!BidsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Bids resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Bids',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Bids resource was not found.",
          BidsResultObject,
          "Bids",
          "PUT"
        );
      }

      // Execute https request
      BidsResultObject =
        apiPUTBids(
          req,
          BidsResultObject,
          uuid,
          "bid_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Bids resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Bids'
          }
          model: 'Bids',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        BidsResultObject,
        "Bids",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/bids", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'Bids',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/bids", Missing or invalid parameters.',
        req.body,
        "Bids",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the bids resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'Bids',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bids resource.",
      error,
      "Bids",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a Bids resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidsInsert interface.
 * @returns IBidsRow data type object
 *
 */
const supabasePostBids = async (
  payload: any
): Promise<IBidsInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Bids resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidsInsert interface.
 * @returns IBidsRow data type object
 *
 */
const mongoDBPostBids = async (
  payload: any
): Promise<IBidsRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Bids resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidsInsert interface.
 * @returns IBidsRow data type object
 *
 */
const firebasePostBids = async (
  payload: any
): Promise<IBidsInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Bids resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidsInsert interface.
 * @returns IBidsRow data type object
 *
 */
const mysqlDBPostBids = async (
  payload: any
): Promise<IBidsInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Bids resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidsInsert interface.
 * @returns IBidsRow data type object
 *
 */
const apiPOSTBids = async (
  req: any,
  payload: any
): Promise<IBidsInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the Bids resource into the database
  let BidsResultObject:
    | IBidsRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BidsResultObject =
        await supabasePostBids(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BidsResultObject =
        await mongoDBPostBids(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      BidsResultObject =
        await mongoDBPostBids(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BidsResultObject =
        await firebasePostBids(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      BidsResultObject =
        await firebasePostBids(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BidsResultObject =
        await mysqlDBPostBids(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      BidsResultObject =
        await mysqlDBPostBids(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BidsResultObject =
        await supabasePostBids(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    BidsResultObject =
      await supabasePostBids(payload);
  }

  return BidsResultObject;
};

/*
 * Creates a new Bids resource
 *
 * @param req : Request - Bids request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidsPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bids']
    #swagger.description = 'Endpoint to create a new Bids resource.'
    #swagger.summary = 'Creates a new Bids resource.'

    #swagger.path = '/models/bids'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the Bids resource.',
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
      payloadSupportsBidsInsertInterface(payload)
    ) {
      // Compose the Bids request object
      const BidsData: IBidsInsert =
      {
				auction_item_id: payload.auction_item_id,
				bid_amount: payload.bid_amount,
				bid_created_at: payload.bid_created_at,
				bid_id: payload.bid_id,
				bid_status: payload.bid_status,
				bid_type: payload.bid_type,
				bid_updated_at: payload.bid_updated_at,
				bid_uuid: payload.bid_uuid,
				fid: payload.fid,
				user_id: payload.user_id,
      };

      // Insert the Bids resource into the database
      let BidsResultObject:
        | IBidsRow
        | any
        | null;

      // Execute https request
      BidsResultObject =
        apiPOSTBids(
          req,
          BidsData
        );

      /* #swagger.responses[201] = {
        description: 'Bids resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Bids'
          }
          model: 'Bids',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Bids resource created successfully.",
        BidsResultObject,
        "Bids",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/bids". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'Bids',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/bids". Missing or invalid parameters.',
        req.body,
        "Bids",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the bids resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'Bids',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the bids resource.",
      error,
      "Bids",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a Bids resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidsUpdate interface.
 * @returns IBidsRow data type object
 *
 */
const supabasePutBids = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidsInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Bids resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidsUpdate interface.
 * @returns IBidsRow data type object
 *
 */
const mongoDBPutBids = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidsRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Bids resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidsUpdate interface.
 * @returns IBidsRow data type object
 *
 */
const firebasePutBids = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidsInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Bids resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidsUpdate interface.
 * @returns IBidsRow data type object
 *
 */
const mysqlDBPutBids = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidsInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBidsUpdate interface.
 * @returns IBidsRow data type object
 *
 */
const apiPUTBids = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBidsInsert | any | null> => {
  // Intitialize the BidsResultObject variable
  let BidsResultObject: IBidsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BidsResultObject =
        await supabasePutBids(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BidsResultObject =
        await mongoDBPutBids(
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
      BidsResultObject =
        await mongoDBPutBids(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BidsResultObject =
        await firebasePutBids(
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
      BidsResultObject =
        await firebasePutBids(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BidsResultObject =
        await mysqlDBPutBids(
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
      BidsResultObject =
        await mysqlDBPutBids(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BidsResultObject =
        await supabasePutBids(
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
    BidsResultObject =
      await supabasePutBids(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return BidsResultObject;
};

/*
 * Updates an existing Bids resource
 *
 * @param req : Request - Bids request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidsPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bids']
    #swagger.description = 'Endpoint to update a new Bids resource.'
    #swagger.summary = 'Updates a new Bids resource.'

    #swagger.path = '/models/bids'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['bid_uuid'] = {
      in: 'path',
      description: 'Bids bid_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Bids resource.',
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
    const { bid_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      bid_uuid &&
      payload &&
      payloadSupportsBidsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Bids resource
      const uuid: string = bid_uuid;

      // Compose the Bids request object
      const BidsData: IBidsRow = {};
      
				if('auction_item_id' in payload){ BidsData.auction_item_id = payload.auction_item_id; }
				if('bid_amount' in payload){ BidsData.bid_amount = payload.bid_amount; }
				if('bid_created_at' in payload){ BidsData.bid_created_at = payload.bid_created_at; }
				if('bid_id' in payload){ BidsData.bid_id = payload.bid_id; }
				if('bid_status' in payload){ BidsData.bid_status = payload.bid_status; }
				if('bid_type' in payload){ BidsData.bid_type = payload.bid_type; }
				if('bid_updated_at' in payload){ BidsData.bid_updated_at = payload.bid_updated_at; }
				if('bid_uuid' in payload){ BidsData.bid_uuid = payload.bid_uuid; }
				if('fid' in payload){ BidsData.fid = payload.fid; }
				if('user_id' in payload){ BidsData.user_id = payload.user_id; }

      // Gets the Bids resource from the database
      let BidsResultObject:
        | IBidsRow
        | any
        | null = apiGETBids(
          req,
          "bid_uuid",
          uuid
        );

      if (!BidsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Bids resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Bids',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Bids",
          "PUT"
        );
      }

      // Execute https request
      BidsResultObject =
        apiPUTBids(
          req,
          BidsData,
          uuid,
          "bid_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Bids resource updated successfully.',
        schema: {
          $ref: '#/definitions/Bids'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Bids resource updated successfully.",
        BidsResultObject,
        "Bids",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/bids" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Bids',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Bids",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the bids resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Bids',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bids resource.",
      error,
      "Bids",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing Bids resource partially
 *
 * @param req : Request - Bids partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidsPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bids']
    #swagger.description = 'Endpoint to update a new Bids resource.'
    #swagger.summary = 'Updates a new Bids resource.'

    #swagger.path = '/models/bids'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['bid_uuid'] = {
      in: 'path',
      description: 'Bids bid_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Bids resource.',
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
    const { bid_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      bid_uuid &&
      payload &&
      payloadSupportsBidsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Bids resource
      const uuid: string = bid_uuid;

      // Compose the Bids request object
      const BidsData: IBidsRow = {};
      
				if('auction_item_id' in payload){ BidsData.auction_item_id = payload.auction_item_id; }
				if('bid_amount' in payload){ BidsData.bid_amount = payload.bid_amount; }
				if('bid_created_at' in payload){ BidsData.bid_created_at = payload.bid_created_at; }
				if('bid_id' in payload){ BidsData.bid_id = payload.bid_id; }
				if('bid_status' in payload){ BidsData.bid_status = payload.bid_status; }
				if('bid_type' in payload){ BidsData.bid_type = payload.bid_type; }
				if('bid_updated_at' in payload){ BidsData.bid_updated_at = payload.bid_updated_at; }
				if('bid_uuid' in payload){ BidsData.bid_uuid = payload.bid_uuid; }
				if('fid' in payload){ BidsData.fid = payload.fid; }
				if('user_id' in payload){ BidsData.user_id = payload.user_id; }

      // Gets the Bids resource from the database
      let BidsResultObject:
        | IBidsRow
        | any
        | null = apiGETBids(
          req,
          "bid_uuid",
          uuid
        );

      if (!BidsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Bids resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Bids',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Bids",
          "PATCH"
        );
      }

      // Execute https request
      BidsResultObject =
        apiPUTBids(
          req,
          BidsData,
          uuid,
          "bid_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Bids resource updated successfully.',
        schema: {
          $ref: '#/definitions/Bids'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Bids resource updated successfully.",
        BidsResultObject,
        "Bids",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/bids" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Bids',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Bids",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the bids resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Bids',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bids resource.",
      error,
      "Bids",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a Bids resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidsRow data type object
 *
 */
const supabaseDeleteBids = async (
  columnValue: any,
  columnName?: string
): Promise<IBidsInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Bids resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidsRow data type object
 *
 */
const mongoDBDeleteBids = async (
  columnValue: any,
  columnName?: string
): Promise<IBidsRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a Bids resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidsRow data type object
 *
 */
const firebaseDeleteBids = async (
  columnValue: any,
  columnName?: string
): Promise<IBidsInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Bids resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidsRow data type object
 *
 */
const mysqlDBDeleteBids = async (
  columnValue: any,
  columnName?: string
): Promise<IBidsInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBidsRow data type object
 *
 */
const apiDELETEBids = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IBidsInsert | any | null> => {
  // Intitialize the BidsResultObject variable
  let BidsResultObject: IBidsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BidsResultObject =
        await supabaseDeleteBids(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BidsResultObject =
        await mongoDBDeleteBids(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      BidsResultObject =
        await mongoDBDeleteBids(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BidsResultObject =
        await firebaseDeleteBids(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      BidsResultObject =
        await firebaseDeleteBids(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BidsResultObject =
        await mysqlDBDeleteBids(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      BidsResultObject =
        await mysqlDBDeleteBids(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BidsResultObject =
        await supabaseDeleteBids(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    BidsResultObject =
      await supabaseDeleteBids(columnValue, columnName);
  }

  return BidsResultObject;
};

/*
 * Deletes an existing Bids resource
 *
 * @param req : Request - Bids request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidsDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bids']
    #swagger.description = 'Endpoint to delete a new Bids resource.'
    #swagger.summary = 'Updates a new Bids resource.'

    #swagger.path = '/models/bids'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['bid_uuid'] = {
      in: 'path',
      description: 'Bids bid_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the Bids resource.',
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
    const { bid_uuid } = req.params;

    // If all the parameters are available, its a go
    if (bid_uuid) {
      // Get the uuid to identify the Bids resource
      const uuid: string = bid_uuid;

      // Gets the Bids resource from the database
      let BidsResultObject:
        | IBidsRow
        | any
        | null = apiGETBids(
          req,
          "bid_uuid",
          uuid
        );

      if (!BidsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Bids resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Bids',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Bids",
          "PATCH"
        );
      }

      // Execute https request
      BidsResultObject =
        apiDELETEBids(req, uuid, "bid_uuid");

      /* #swagger.responses[201] = {
        description: 'Bids resource deleted successfully.',
        schema: {
          'bid_uuid': 'bid_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Bids resource deleted successfully.",
        BidsResultObject,
        "Bids",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/bids" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Bids',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Bids",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the bids resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Bids',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bids resource.",
      error,
      "Bids",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of Bids without the response body.
 *
 * @param req : Request - Bids request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidsHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bids']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of Bids without the response body'
  
      #swagger.path = '/models/bids'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the Bids resource.',
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
            description: 'Could not perform a HEAD request at the "/models/bids" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Bids',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Bids",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the bids resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Bids',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the bids resource.",
      error,
      "Bids",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - Bids request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidsTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bids']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/bids'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Bids resource.',
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
        "Bids",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/bids" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Bids',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Bids",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the bids resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Bids',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the bids resource.",
      error,
      "Bids",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - Bids request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bidsOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bids']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/bids'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Bids resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/bids" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Bids',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Bids",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the bids resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Bids',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the bids resource.",
      error,
      "Bids",
      "OPTIONS"
    );
  }

  // #swagger.end
};
