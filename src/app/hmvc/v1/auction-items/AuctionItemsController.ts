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
  IAuctionItemsInsert,
  IAuctionItemsRow,
  IAuctionItemsUpdate
} from "./models/AuctionItemsTypesDefinitions";

import { AuctionItemsSupabaseCls } from "./models/AuctionItemsSupabaseCls";
import { AuctionItemsMongoDBCls } from "./models/AuctionItemsMongoDBCls";
import { AuctionItemsFirebaseCls } from "./models/AuctionItemsFirebaseCls";
import { AuctionItemsMySQLDBCls } from "./models/AuctionItemsMySQLDBCls";
import { AuctionItemsDTO } from "./models/AuctionItemsDTO";

export const payloadSupportsAuctionItemsRowInterface: any = (
  payload: any
): payload is IAuctionItemsRow => {
  return !!payload?.AuctionItems.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsAuctionItemsInsertInterface: any = (
  payload: any
): payload is IAuctionItemsInsert => {
  return !!payload?.AuctionItems
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsAuctionItemsUpdateInterface: any = (
  payload: any
): payload is IAuctionItemsUpdate => {
  return !!payload?.AuctionItems
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new AuctionItemsSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IAuctionItemsUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new AuctionItemsMongoDBCls().insertARow(payload);
          new AuctionItemsFirebaseCls().insertARow(payload);
          new AuctionItemsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new AuctionItemsMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
            
          );
          new AuctionItemsFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionItemsMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "patch": {
          new AuctionItemsMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionItemsFirebaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionItemsMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "delete": {
          new AuctionItemsMongoDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionItemsFirebaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionItemsMySQLDBCls().deleteMatchingRows(
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
const mongoDBDatabaseClass: any = new AuctionItemsMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IAuctionItemsUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new AuctionItemsSupabaseCls().insertARow(payload);
          new AuctionItemsFirebaseCls().insertARow(payload);
          new AuctionItemsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new AuctionItemsSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionItemsFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionItemsMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "patch": {
          new AuctionItemsSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionItemsFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionItemsMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "delete": {
          new AuctionItemsSupabaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionItemsFirebaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionItemsMySQLDBCls().deleteMatchingRows(
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
  new AuctionItemsSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IAuctionItemsUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new AuctionItemsSupabaseCls().insertARow(payload);
          new AuctionItemsMongoDBCls().insertARow(payload);
          new AuctionItemsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new AuctionItemsSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionItemsMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionItemsMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "patch": {
          new AuctionItemsSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionItemsMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionItemsMySQLDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          break;
        }

        case "delete": {
          new AuctionItemsSupabaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionItemsMongoDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionItemsMySQLDBCls().deleteMatchingRows(
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
const mySQLDatabaseClass: any = new AuctionItemsSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IAuctionItemsUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new AuctionItemsSupabaseCls().insertARow(payload);
          new AuctionItemsMongoDBCls().insertARow(payload);
          new AuctionItemsFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new AuctionItemsSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionItemsMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionItemsFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          break;
        }

        case "patch": {
          new AuctionItemsSupabaseCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionItemsMongoDBCls().updateMatchingRows(
            payload,
            payload.____uuiKey____,
            "____uuiKey____"
          );
          new AuctionItemsFirebaseCls().updateMatchingRows(
            payload,
            "____uuiKey____",
            payload.____uuiKey____
          );
          break;
        }

        case "delete": {
          new AuctionItemsSupabaseCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionItemsMongoDBCls().deleteMatchingRows(
            "____uuiKey____",
            payload.____uuiKey____
          );
          new AuctionItemsFirebaseCls().deleteMatchingRows(
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
 * Gets, gets or edits a AuctionItems resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuctionItemsGets interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const supabaseGetAuctionItems = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a AuctionItems resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuctionItemsGets interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const mongoDBGetAuctionItems = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a AuctionItems resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuctionItemsGets interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const firebaseGetAuctionItems = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a AuctionItems resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuctionItemsGets interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const mysqlDBGetAuctionItems = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuctionItemsGets interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const apiGETAuctionItems = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IAuctionItemsRow | any | null> => {
  // Intitialize the AuctionItemsResultObject variable
  let AuctionItemsResultObject: IAuctionItemsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      AuctionItemsResultObject =
        await supabaseGetAuctionItems(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      AuctionItemsResultObject =
        await mongoDBGetAuctionItems(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      AuctionItemsResultObject =
        await mongoDBGetAuctionItems(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      AuctionItemsResultObject =
        await firebaseGetAuctionItems(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      AuctionItemsResultObject =
        await firebaseGetAuctionItems(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      AuctionItemsResultObject =
        await mysqlDBGetAuctionItems(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      AuctionItemsResultObject =
        await mysqlDBGetAuctionItems(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      AuctionItemsResultObject =
        await supabaseGetAuctionItems(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    AuctionItemsResultObject =
      await supabaseGetAuctionItems(columnValue, columnName);
  }

  return AuctionItemsResultObject;
};

/*
 * Gets an existing AuctionItems resource
 *
 * @param req : Request - AuctionItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionItemsGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionItems']
    #swagger.description = 'Endpoint to get a new AuctionItems resource.'
    #swagger.summary = 'Gets an existing AuctionItems resource.'

    #swagger.path = '/models/auction-items'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'AuctionItems ____uuiKey____ key identifier used to get the resource.',
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
      // Get the uuid to identify the AuctionItems resource
      const uuid: string = ____uuiKey____;

      let AuctionItemsResultObject:
        | IAuctionItemsRow
        | Array<IAuctionItemsRow>
        | any
        | null;

      if (____uuiKey____) {
        // Gets the AuctionItems resource from the database
        AuctionItemsResultObject =
          apiGETAuctionItems(req, "____uuiKey____,", uuid);
      } else {
        // Gets all the models from the AuctionItems resource
        AuctionItemsResultObject =
          apiGETAuctionItems(req);
      }

      if (!AuctionItemsResultObject) {
        /* #swagger.responses[404] = {
          description: 'AuctionItems resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'AuctionItems',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "AuctionItems resource was not found.",
          AuctionItemsResultObject,
          "AuctionItems",
          "PUT"
        );
      }

      // Execute https request
      AuctionItemsResultObject =
        apiPUTAuctionItems(
          req,
          AuctionItemsResultObject,
          uuid,
          "____uuiKey____"
        );

      /* #swagger.responses[201] = {
        description: 'AuctionItems resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/AuctionItems'
          }
          model: 'AuctionItems',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        AuctionItemsResultObject,
        "AuctionItems",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/auction-items", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'AuctionItems',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/auction-items", Missing or invalid parameters.',
        req.body,
        "AuctionItems",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the auction-items resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'AuctionItems',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the auction-items resource.",
      error,
      "AuctionItems",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a AuctionItems resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionItemsInsert interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const supabasePostAuctionItems = async (
  payload: any
): Promise<IAuctionItemsInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a AuctionItems resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionItemsInsert interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const mongoDBPostAuctionItems = async (
  payload: any
): Promise<IAuctionItemsRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a AuctionItems resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionItemsInsert interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const firebasePostAuctionItems = async (
  payload: any
): Promise<IAuctionItemsInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a AuctionItems resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionItemsInsert interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const mysqlDBPostAuctionItems = async (
  payload: any
): Promise<IAuctionItemsInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a AuctionItems resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionItemsInsert interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const apiPOSTAuctionItems = async (
  req: any,
  payload: any
): Promise<IAuctionItemsInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the AuctionItems resource into the database
  let AuctionItemsResultObject:
    | IAuctionItemsRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      AuctionItemsResultObject =
        await supabasePostAuctionItems(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      AuctionItemsResultObject =
        await mongoDBPostAuctionItems(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      AuctionItemsResultObject =
        await mongoDBPostAuctionItems(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      AuctionItemsResultObject =
        await firebasePostAuctionItems(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      AuctionItemsResultObject =
        await firebasePostAuctionItems(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      AuctionItemsResultObject =
        await mysqlDBPostAuctionItems(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      AuctionItemsResultObject =
        await mysqlDBPostAuctionItems(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      AuctionItemsResultObject =
        await supabasePostAuctionItems(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    AuctionItemsResultObject =
      await supabasePostAuctionItems(payload);
  }

  return AuctionItemsResultObject;
};

/*
 * Creates a new AuctionItems resource
 *
 * @param req : Request - AuctionItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionItemsPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionItems']
    #swagger.description = 'Endpoint to create a new AuctionItems resource.'
    #swagger.summary = 'Creates a new AuctionItems resource.'

    #swagger.path = '/models/auction-items'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the AuctionItems resource.',
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
      payloadSupportsAuctionItemsInsertInterface(payload)
    ) {
      // Compose the AuctionItems request object
      const AuctionItemsData: IAuctionItemsInsert =
      {
				auction_item_created_at: payload.auction_item_created_at,
				auction_item_expires: payload.auction_item_expires,
				auction_item_highest_amount: payload.auction_item_highest_amount,
				auction_item_id: payload.auction_item_id,
				auction_item_ighest_bidder: payload.auction_item_ighest_bidder,
				auction_item_lowest_amount: payload.auction_item_lowest_amount,
				auction_item_updated_at: payload.auction_item_updated_at,
				auction_type_id: payload.auction_type_id,
				fid: payload.fid,
				market_item_id: payload.market_item_id,
      };

      // Insert the AuctionItems resource into the database
      let AuctionItemsResultObject:
        | IAuctionItemsRow
        | any
        | null;

      // Execute https request
      AuctionItemsResultObject =
        apiPOSTAuctionItems(
          req,
          AuctionItemsData
        );

      /* #swagger.responses[201] = {
        description: 'AuctionItems resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/AuctionItems'
          }
          model: 'AuctionItems',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "AuctionItems resource created successfully.",
        AuctionItemsResultObject,
        "AuctionItems",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/auction-items". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'AuctionItems',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/auction-items". Missing or invalid parameters.',
        req.body,
        "AuctionItems",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the auction-items resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'AuctionItems',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the auction-items resource.",
      error,
      "AuctionItems",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a AuctionItems resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionItemsUpdate interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const supabasePutAuctionItems = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a AuctionItems resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionItemsUpdate interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const mongoDBPutAuctionItems = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a AuctionItems resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionItemsUpdate interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const firebasePutAuctionItems = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a AuctionItems resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionItemsUpdate interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const mysqlDBPutAuctionItems = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuctionItemsUpdate interface.
 * @returns IAuctionItemsRow data type object
 *
 */
const apiPUTAuctionItems = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsInsert | any | null> => {
  // Intitialize the AuctionItemsResultObject variable
  let AuctionItemsResultObject: IAuctionItemsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      AuctionItemsResultObject =
        await supabasePutAuctionItems(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      AuctionItemsResultObject =
        await mongoDBPutAuctionItems(
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
      AuctionItemsResultObject =
        await mongoDBPutAuctionItems(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      AuctionItemsResultObject =
        await firebasePutAuctionItems(
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
      AuctionItemsResultObject =
        await firebasePutAuctionItems(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      AuctionItemsResultObject =
        await mysqlDBPutAuctionItems(
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
      AuctionItemsResultObject =
        await mysqlDBPutAuctionItems(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      AuctionItemsResultObject =
        await supabasePutAuctionItems(
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
    AuctionItemsResultObject =
      await supabasePutAuctionItems(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return AuctionItemsResultObject;
};

/*
 * Updates an existing AuctionItems resource
 *
 * @param req : Request - AuctionItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionItemsPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionItems']
    #swagger.description = 'Endpoint to update a new AuctionItems resource.'
    #swagger.summary = 'Updates a new AuctionItems resource.'

    #swagger.path = '/models/auction-items'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'AuctionItems ____uuiKey____ key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the AuctionItems resource.',
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
      payloadSupportsAuctionItemsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the AuctionItems resource
      const uuid: string = ____uuiKey____;

      // Compose the AuctionItems request object
      const AuctionItemsData: IAuctionItemsRow = {};
      
				if('auction_item_created_at' in payload){ AuctionItemsData.auction_item_created_at = payload.auction_item_created_at; }
				if('auction_item_expires' in payload){ AuctionItemsData.auction_item_expires = payload.auction_item_expires; }
				if('auction_item_highest_amount' in payload){ AuctionItemsData.auction_item_highest_amount = payload.auction_item_highest_amount; }
				if('auction_item_id' in payload){ AuctionItemsData.auction_item_id = payload.auction_item_id; }
				if('auction_item_ighest_bidder' in payload){ AuctionItemsData.auction_item_ighest_bidder = payload.auction_item_ighest_bidder; }
				if('auction_item_lowest_amount' in payload){ AuctionItemsData.auction_item_lowest_amount = payload.auction_item_lowest_amount; }
				if('auction_item_updated_at' in payload){ AuctionItemsData.auction_item_updated_at = payload.auction_item_updated_at; }
				if('auction_type_id' in payload){ AuctionItemsData.auction_type_id = payload.auction_type_id; }
				if('fid' in payload){ AuctionItemsData.fid = payload.fid; }
				if('market_item_id' in payload){ AuctionItemsData.market_item_id = payload.market_item_id; }

      // Gets the AuctionItems resource from the database
      let AuctionItemsResultObject:
        | IAuctionItemsRow
        | any
        | null = apiGETAuctionItems(
          req,
          "____uuiKey____",
          uuid
        );

      if (!AuctionItemsResultObject) {
        /* #swagger.responses[404] = {
          description: 'AuctionItems resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'AuctionItems',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "AuctionItems",
          "PUT"
        );
      }

      // Execute https request
      AuctionItemsResultObject =
        apiPUTAuctionItems(
          req,
          AuctionItemsData,
          uuid,
          "____uuiKey____"
        );

      /* #swagger.responses[201] = {
        description: 'AuctionItems resource updated successfully.',
        schema: {
          $ref: '#/definitions/AuctionItems'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "AuctionItems resource updated successfully.",
        AuctionItemsResultObject,
        "AuctionItems",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/auction-items" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'AuctionItems',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "AuctionItems",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the auction-items resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'AuctionItems',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the auction-items resource.",
      error,
      "AuctionItems",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing AuctionItems resource partially
 *
 * @param req : Request - AuctionItems partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionItemsPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionItems']
    #swagger.description = 'Endpoint to update a new AuctionItems resource.'
    #swagger.summary = 'Updates a new AuctionItems resource.'

    #swagger.path = '/models/auction-items'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'AuctionItems ____uuiKey____ key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the AuctionItems resource.',
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
      payloadSupportsAuctionItemsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the AuctionItems resource
      const uuid: string = ____uuiKey____;

      // Compose the AuctionItems request object
      const AuctionItemsData: IAuctionItemsRow = {};
      
				if('auction_item_created_at' in payload){ AuctionItemsData.auction_item_created_at = payload.auction_item_created_at; }
				if('auction_item_expires' in payload){ AuctionItemsData.auction_item_expires = payload.auction_item_expires; }
				if('auction_item_highest_amount' in payload){ AuctionItemsData.auction_item_highest_amount = payload.auction_item_highest_amount; }
				if('auction_item_id' in payload){ AuctionItemsData.auction_item_id = payload.auction_item_id; }
				if('auction_item_ighest_bidder' in payload){ AuctionItemsData.auction_item_ighest_bidder = payload.auction_item_ighest_bidder; }
				if('auction_item_lowest_amount' in payload){ AuctionItemsData.auction_item_lowest_amount = payload.auction_item_lowest_amount; }
				if('auction_item_updated_at' in payload){ AuctionItemsData.auction_item_updated_at = payload.auction_item_updated_at; }
				if('auction_type_id' in payload){ AuctionItemsData.auction_type_id = payload.auction_type_id; }
				if('fid' in payload){ AuctionItemsData.fid = payload.fid; }
				if('market_item_id' in payload){ AuctionItemsData.market_item_id = payload.market_item_id; }

      // Gets the AuctionItems resource from the database
      let AuctionItemsResultObject:
        | IAuctionItemsRow
        | any
        | null = apiGETAuctionItems(
          req,
          "____uuiKey____",
          uuid
        );

      if (!AuctionItemsResultObject) {
        /* #swagger.responses[404] = {
          description: 'AuctionItems resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'AuctionItems',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "AuctionItems",
          "PATCH"
        );
      }

      // Execute https request
      AuctionItemsResultObject =
        apiPUTAuctionItems(
          req,
          AuctionItemsData,
          uuid,
          "____uuiKey____"
        );

      /* #swagger.responses[201] = {
        description: 'AuctionItems resource updated successfully.',
        schema: {
          $ref: '#/definitions/AuctionItems'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "AuctionItems resource updated successfully.",
        AuctionItemsResultObject,
        "AuctionItems",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/auction-items" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'AuctionItems',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "AuctionItems",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the auction-items resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'AuctionItems',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the auction-items resource.",
      error,
      "AuctionItems",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a AuctionItems resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuctionItemsRow data type object
 *
 */
const supabaseDeleteAuctionItems = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a AuctionItems resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuctionItemsRow data type object
 *
 */
const mongoDBDeleteAuctionItems = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a AuctionItems resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuctionItemsRow data type object
 *
 */
const firebaseDeleteAuctionItems = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a AuctionItems resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuctionItemsRow data type object
 *
 */
const mysqlDBDeleteAuctionItems = async (
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuctionItemsRow data type object
 *
 */
const apiDELETEAuctionItems = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IAuctionItemsInsert | any | null> => {
  // Intitialize the AuctionItemsResultObject variable
  let AuctionItemsResultObject: IAuctionItemsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      AuctionItemsResultObject =
        await supabaseDeleteAuctionItems(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      AuctionItemsResultObject =
        await mongoDBDeleteAuctionItems(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      AuctionItemsResultObject =
        await mongoDBDeleteAuctionItems(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      AuctionItemsResultObject =
        await firebaseDeleteAuctionItems(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      AuctionItemsResultObject =
        await firebaseDeleteAuctionItems(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      AuctionItemsResultObject =
        await mysqlDBDeleteAuctionItems(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      AuctionItemsResultObject =
        await mysqlDBDeleteAuctionItems(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      AuctionItemsResultObject =
        await supabaseDeleteAuctionItems(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    AuctionItemsResultObject =
      await supabaseDeleteAuctionItems(columnValue, columnName);
  }

  return AuctionItemsResultObject;
};

/*
 * Deletes an existing AuctionItems resource
 *
 * @param req : Request - AuctionItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionItemsDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionItems']
    #swagger.description = 'Endpoint to delete a new AuctionItems resource.'
    #swagger.summary = 'Updates a new AuctionItems resource.'

    #swagger.path = '/models/auction-items'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____uuiKey____'] = {
      in: 'path',
      description: 'AuctionItems ____uuiKey____ key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the AuctionItems resource.',
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
      // Get the uuid to identify the AuctionItems resource
      const uuid: string = ____uuiKey____;

      // Gets the AuctionItems resource from the database
      let AuctionItemsResultObject:
        | IAuctionItemsRow
        | any
        | null = apiGETAuctionItems(
          req,
          "____uuiKey____",
          uuid
        );

      if (!AuctionItemsResultObject) {
        /* #swagger.responses[404] = {
          description: 'AuctionItems resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'AuctionItems',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "AuctionItems",
          "PATCH"
        );
      }

      // Execute https request
      AuctionItemsResultObject =
        apiDELETEAuctionItems(req, uuid, "____uuiKey____");

      /* #swagger.responses[201] = {
        description: 'AuctionItems resource deleted successfully.',
        schema: {
          '____uuiKey____': '____uuiKey____'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "AuctionItems resource deleted successfully.",
        AuctionItemsResultObject,
        "AuctionItems",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/auction-items" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'AuctionItems',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "AuctionItems",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the auction-items resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'AuctionItems',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the auction-items resource.",
      error,
      "AuctionItems",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of AuctionItems without the response body.
 *
 * @param req : Request - AuctionItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionItemsHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionItems']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of AuctionItems without the response body'
  
      #swagger.path = '/models/auction-items'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the AuctionItems resource.',
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
            description: 'Could not perform a HEAD request at the "/models/auction-items" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'AuctionItems',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "AuctionItems",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the auction-items resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'AuctionItems',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the auction-items resource.",
      error,
      "AuctionItems",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - AuctionItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionItemsTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionItems']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/auction-items'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the AuctionItems resource.',
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
        "AuctionItems",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/auction-items" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'AuctionItems',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "AuctionItems",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the auction-items resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'AuctionItems',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the auction-items resource.",
      error,
      "AuctionItems",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - AuctionItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const auctionItemsOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['AuctionItems']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/auction-items'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the AuctionItems resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/auction-items" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'AuctionItems',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "AuctionItems",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the auction-items resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'AuctionItems',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the auction-items resource.",
      error,
      "AuctionItems",
      "OPTIONS"
    );
  }

  // #swagger.end
};
