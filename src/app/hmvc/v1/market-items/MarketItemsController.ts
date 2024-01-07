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
  IMarketItemsInsert,
  IMarketItemsRow,
  IMarketItemsUpdate
} from "./models/MarketItemsTypesDefinitions";

import { MarketItemsSupabaseCls } from "./models/MarketItemsSupabaseCls";
import { MarketItemsMongoDBCls } from "./models/MarketItemsMongoDBCls";
import { MarketItemsFirebaseCls } from "./models/MarketItemsFirebaseCls";
import { MarketItemsMySQLDBCls } from "./models/MarketItemsMySQLDBCls";
import { MarketItemsDTO } from "./models/MarketItemsDTO";

export const payloadSupportsMarketItemsRowInterface: any = (
  payload: any
): payload is IMarketItemsRow => {
  return !!payload?.MarketItems.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsMarketItemsInsertInterface: any = (
  payload: any
): payload is IMarketItemsInsert => {
  return !!payload?.MarketItems
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsMarketItemsUpdateInterface: any = (
  payload: any
): payload is IMarketItemsUpdate => {
  return !!payload?.MarketItems
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new MarketItemsSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IMarketItemsUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new MarketItemsMongoDBCls().insertARow(payload);
          new MarketItemsFirebaseCls().insertARow(payload);
          new MarketItemsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new MarketItemsMongoDBCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
            
          );
          new MarketItemsFirebaseCls().updateMatchingRows(
            payload,
            "market_item_uuid",
            payload.market_item_uuid
          );
          new MarketItemsMySQLDBCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          break;
        }

        case "patch": {
          new MarketItemsMongoDBCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          new MarketItemsFirebaseCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          new MarketItemsMySQLDBCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          break;
        }

        case "delete": {
          new MarketItemsMongoDBCls().deleteMatchingRows(
            "market_item_uuid",
            payload.market_item_uuid
          );
          new MarketItemsFirebaseCls().deleteMatchingRows(
            "market_item_uuid",
            payload.market_item_uuid
          );
          new MarketItemsMySQLDBCls().deleteMatchingRows(
            "market_item_uuid",
            payload.market_item_uuid
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
const mongoDBDatabaseClass: any = new MarketItemsMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IMarketItemsUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new MarketItemsSupabaseCls().insertARow(payload);
          new MarketItemsFirebaseCls().insertARow(payload);
          new MarketItemsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new MarketItemsSupabaseCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          new MarketItemsFirebaseCls().updateMatchingRows(
            payload,
            "market_item_uuid",
            payload.market_item_uuid
          );
          new MarketItemsMySQLDBCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          break;
        }

        case "patch": {
          new MarketItemsSupabaseCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          new MarketItemsFirebaseCls().updateMatchingRows(
            payload,
            "market_item_uuid",
            payload.market_item_uuid
          );
          new MarketItemsMySQLDBCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          break;
        }

        case "delete": {
          new MarketItemsSupabaseCls().deleteMatchingRows(
            "market_item_uuid",
            payload.market_item_uuid
          );
          new MarketItemsFirebaseCls().deleteMatchingRows(
            "market_item_uuid",
            payload.market_item_uuid
          );
          new MarketItemsMySQLDBCls().deleteMatchingRows(
            "market_item_uuid",
            payload.market_item_uuid
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
  new MarketItemsSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IMarketItemsUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new MarketItemsSupabaseCls().insertARow(payload);
          new MarketItemsMongoDBCls().insertARow(payload);
          new MarketItemsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new MarketItemsSupabaseCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          new MarketItemsMongoDBCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          new MarketItemsMySQLDBCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          break;
        }

        case "patch": {
          new MarketItemsSupabaseCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          new MarketItemsMongoDBCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          new MarketItemsMySQLDBCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          break;
        }

        case "delete": {
          new MarketItemsSupabaseCls().deleteMatchingRows(
            "market_item_uuid",
            payload.market_item_uuid
          );
          new MarketItemsMongoDBCls().deleteMatchingRows(
            "market_item_uuid",
            payload.market_item_uuid
          );
          new MarketItemsMySQLDBCls().deleteMatchingRows(
            "market_item_uuid",
            payload.market_item_uuid
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
const mySQLDatabaseClass: any = new MarketItemsSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IMarketItemsUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new MarketItemsSupabaseCls().insertARow(payload);
          new MarketItemsMongoDBCls().insertARow(payload);
          new MarketItemsFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new MarketItemsSupabaseCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          new MarketItemsMongoDBCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          new MarketItemsFirebaseCls().updateMatchingRows(
            payload,
            "market_item_uuid",
            payload.market_item_uuid
          );
          break;
        }

        case "patch": {
          new MarketItemsSupabaseCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          new MarketItemsMongoDBCls().updateMatchingRows(
            payload,
            payload.market_item_uuid,
            "market_item_uuid"
          );
          new MarketItemsFirebaseCls().updateMatchingRows(
            payload,
            "market_item_uuid",
            payload.market_item_uuid
          );
          break;
        }

        case "delete": {
          new MarketItemsSupabaseCls().deleteMatchingRows(
            "market_item_uuid",
            payload.market_item_uuid
          );
          new MarketItemsMongoDBCls().deleteMatchingRows(
            "market_item_uuid",
            payload.market_item_uuid
          );
          new MarketItemsFirebaseCls().deleteMatchingRows(
            "market_item_uuid",
            payload.market_item_uuid
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
 * Gets, gets or edits a MarketItems resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IMarketItemsGets interface.
 * @returns IMarketItemsRow data type object
 *
 */
const supabaseGetMarketItems = async (
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a MarketItems resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IMarketItemsGets interface.
 * @returns IMarketItemsRow data type object
 *
 */
const mongoDBGetMarketItems = async (
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a MarketItems resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IMarketItemsGets interface.
 * @returns IMarketItemsRow data type object
 *
 */
const firebaseGetMarketItems = async (
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a MarketItems resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IMarketItemsGets interface.
 * @returns IMarketItemsRow data type object
 *
 */
const mysqlDBGetMarketItems = async (
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IMarketItemsGets interface.
 * @returns IMarketItemsRow data type object
 *
 */
const apiGETMarketItems = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IMarketItemsRow | any | null> => {
  // Intitialize the MarketItemsResultObject variable
  let MarketItemsResultObject: IMarketItemsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      MarketItemsResultObject =
        await supabaseGetMarketItems(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      MarketItemsResultObject =
        await mongoDBGetMarketItems(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      MarketItemsResultObject =
        await mongoDBGetMarketItems(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      MarketItemsResultObject =
        await firebaseGetMarketItems(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      MarketItemsResultObject =
        await firebaseGetMarketItems(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      MarketItemsResultObject =
        await mysqlDBGetMarketItems(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      MarketItemsResultObject =
        await mysqlDBGetMarketItems(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      MarketItemsResultObject =
        await supabaseGetMarketItems(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    MarketItemsResultObject =
      await supabaseGetMarketItems(columnValue, columnName);
  }

  return MarketItemsResultObject;
};

/*
 * Gets an existing MarketItems resource
 *
 * @param req : Request - MarketItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const marketItemsGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MarketItems']
    #swagger.description = 'Endpoint to get a new MarketItems resource.'
    #swagger.summary = 'Gets an existing MarketItems resource.'

    #swagger.path = '/models/market-items'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['market_item_uuid'] = {
      in: 'path',
      description: 'MarketItems market_item_uuid key identifier used to get the resource.',
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
    const { market_item_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the MarketItems resource
      const uuid: string = market_item_uuid;

      let MarketItemsResultObject:
        | IMarketItemsRow
        | Array<IMarketItemsRow>
        | any
        | null;

      if (market_item_uuid) {
        // Gets the MarketItems resource from the database
        MarketItemsResultObject =
          apiGETMarketItems(req, "market_item_uuid,", uuid);
      } else {
        // Gets all the models from the MarketItems resource
        MarketItemsResultObject =
          apiGETMarketItems(req);
      }

      if (!MarketItemsResultObject) {
        /* #swagger.responses[404] = {
          description: 'MarketItems resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'MarketItems',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "MarketItems resource was not found.",
          MarketItemsResultObject,
          "MarketItems",
          "PUT"
        );
      }

      // Execute https request
      MarketItemsResultObject =
        apiPUTMarketItems(
          req,
          MarketItemsResultObject,
          uuid,
          "market_item_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'MarketItems resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/MarketItems'
          }
          model: 'MarketItems',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        MarketItemsResultObject,
        "MarketItems",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/market-items", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'MarketItems',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/market-items", Missing or invalid parameters.',
        req.body,
        "MarketItems",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the market-items resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'MarketItems',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the market-items resource.",
      error,
      "MarketItems",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a MarketItems resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMarketItemsInsert interface.
 * @returns IMarketItemsRow data type object
 *
 */
const supabasePostMarketItems = async (
  payload: any
): Promise<IMarketItemsInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a MarketItems resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMarketItemsInsert interface.
 * @returns IMarketItemsRow data type object
 *
 */
const mongoDBPostMarketItems = async (
  payload: any
): Promise<IMarketItemsRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a MarketItems resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMarketItemsInsert interface.
 * @returns IMarketItemsRow data type object
 *
 */
const firebasePostMarketItems = async (
  payload: any
): Promise<IMarketItemsInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a MarketItems resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMarketItemsInsert interface.
 * @returns IMarketItemsRow data type object
 *
 */
const mysqlDBPostMarketItems = async (
  payload: any
): Promise<IMarketItemsInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a MarketItems resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMarketItemsInsert interface.
 * @returns IMarketItemsRow data type object
 *
 */
const apiPOSTMarketItems = async (
  req: any,
  payload: any
): Promise<IMarketItemsInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the MarketItems resource into the database
  let MarketItemsResultObject:
    | IMarketItemsRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      MarketItemsResultObject =
        await supabasePostMarketItems(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      MarketItemsResultObject =
        await mongoDBPostMarketItems(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      MarketItemsResultObject =
        await mongoDBPostMarketItems(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      MarketItemsResultObject =
        await firebasePostMarketItems(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      MarketItemsResultObject =
        await firebasePostMarketItems(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      MarketItemsResultObject =
        await mysqlDBPostMarketItems(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      MarketItemsResultObject =
        await mysqlDBPostMarketItems(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      MarketItemsResultObject =
        await supabasePostMarketItems(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    MarketItemsResultObject =
      await supabasePostMarketItems(payload);
  }

  return MarketItemsResultObject;
};

/*
 * Creates a new MarketItems resource
 *
 * @param req : Request - MarketItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const marketItemsPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MarketItems']
    #swagger.description = 'Endpoint to create a new MarketItems resource.'
    #swagger.summary = 'Creates a new MarketItems resource.'

    #swagger.path = '/models/market-items'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the MarketItems resource.',
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
      payloadSupportsMarketItemsInsertInterface(payload)
    ) {
      // Compose the MarketItems request object
      const MarketItemsData: IMarketItemsInsert =
      {
				auction_item_id: payload.auction_item_id,
				category_id: payload.category_id,
				chain_id: payload.chain_id,
				fid: payload.fid,
				is_archived: payload.is_archived,
				is_auction: payload.is_auction,
				is_listed: payload.is_listed,
				is_sold: payload.is_sold,
				likes_count: payload.likes_count,
				market_item_created_at: payload.market_item_created_at,
				market_item_featured: payload.market_item_featured,
				market_item_id: payload.market_item_id,
				market_item_tags: payload.market_item_tags,
				market_item_updated_at: payload.market_item_updated_at,
				market_item_uuid: payload.market_item_uuid,
				market_item_verified: payload.market_item_verified,
				on_chain: payload.on_chain,
				platform_fee_paid: payload.platform_fee_paid,
				supports_royalties: payload.supports_royalties,
				token_contract_address: payload.token_contract_address,
				token_creator: payload.token_creator,
				token_currency: payload.token_currency,
				token_id: payload.token_id,
				token_index_id: payload.token_index_id,
				token_interface_id: payload.token_interface_id,
				token_owner: payload.token_owner,
				token_price: payload.token_price,
				token_seller: payload.token_seller,
				user_id: payload.user_id,
				views_count: payload.views_count,
      };

      // Insert the MarketItems resource into the database
      let MarketItemsResultObject:
        | IMarketItemsRow
        | any
        | null;

      // Execute https request
      MarketItemsResultObject =
        apiPOSTMarketItems(
          req,
          MarketItemsData
        );

      /* #swagger.responses[201] = {
        description: 'MarketItems resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/MarketItems'
          }
          model: 'MarketItems',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "MarketItems resource created successfully.",
        MarketItemsResultObject,
        "MarketItems",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/market-items". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'MarketItems',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/market-items". Missing or invalid parameters.',
        req.body,
        "MarketItems",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the market-items resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'MarketItems',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the market-items resource.",
      error,
      "MarketItems",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a MarketItems resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMarketItemsUpdate interface.
 * @returns IMarketItemsRow data type object
 *
 */
const supabasePutMarketItems = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a MarketItems resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMarketItemsUpdate interface.
 * @returns IMarketItemsRow data type object
 *
 */
const mongoDBPutMarketItems = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a MarketItems resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMarketItemsUpdate interface.
 * @returns IMarketItemsRow data type object
 *
 */
const firebasePutMarketItems = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a MarketItems resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMarketItemsUpdate interface.
 * @returns IMarketItemsRow data type object
 *
 */
const mysqlDBPutMarketItems = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IMarketItemsUpdate interface.
 * @returns IMarketItemsRow data type object
 *
 */
const apiPUTMarketItems = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsInsert | any | null> => {
  // Intitialize the MarketItemsResultObject variable
  let MarketItemsResultObject: IMarketItemsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      MarketItemsResultObject =
        await supabasePutMarketItems(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      MarketItemsResultObject =
        await mongoDBPutMarketItems(
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
      MarketItemsResultObject =
        await mongoDBPutMarketItems(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      MarketItemsResultObject =
        await firebasePutMarketItems(
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
      MarketItemsResultObject =
        await firebasePutMarketItems(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      MarketItemsResultObject =
        await mysqlDBPutMarketItems(
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
      MarketItemsResultObject =
        await mysqlDBPutMarketItems(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      MarketItemsResultObject =
        await supabasePutMarketItems(
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
    MarketItemsResultObject =
      await supabasePutMarketItems(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return MarketItemsResultObject;
};

/*
 * Updates an existing MarketItems resource
 *
 * @param req : Request - MarketItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const marketItemsPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MarketItems']
    #swagger.description = 'Endpoint to update a new MarketItems resource.'
    #swagger.summary = 'Updates a new MarketItems resource.'

    #swagger.path = '/models/market-items'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['market_item_uuid'] = {
      in: 'path',
      description: 'MarketItems market_item_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the MarketItems resource.',
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
    const { market_item_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      market_item_uuid &&
      payload &&
      payloadSupportsMarketItemsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the MarketItems resource
      const uuid: string = market_item_uuid;

      // Compose the MarketItems request object
      const MarketItemsData: IMarketItemsRow = {};
      
				if('auction_item_id' in payload){ MarketItemsData.auction_item_id = payload.auction_item_id; }
				if('category_id' in payload){ MarketItemsData.category_id = payload.category_id; }
				if('chain_id' in payload){ MarketItemsData.chain_id = payload.chain_id; }
				if('fid' in payload){ MarketItemsData.fid = payload.fid; }
				if('is_archived' in payload){ MarketItemsData.is_archived = payload.is_archived; }
				if('is_auction' in payload){ MarketItemsData.is_auction = payload.is_auction; }
				if('is_listed' in payload){ MarketItemsData.is_listed = payload.is_listed; }
				if('is_sold' in payload){ MarketItemsData.is_sold = payload.is_sold; }
				if('likes_count' in payload){ MarketItemsData.likes_count = payload.likes_count; }
				if('market_item_created_at' in payload){ MarketItemsData.market_item_created_at = payload.market_item_created_at; }
				if('market_item_featured' in payload){ MarketItemsData.market_item_featured = payload.market_item_featured; }
				if('market_item_id' in payload){ MarketItemsData.market_item_id = payload.market_item_id; }
				if('market_item_tags' in payload){ MarketItemsData.market_item_tags = payload.market_item_tags; }
				if('market_item_updated_at' in payload){ MarketItemsData.market_item_updated_at = payload.market_item_updated_at; }
				if('market_item_uuid' in payload){ MarketItemsData.market_item_uuid = payload.market_item_uuid; }
				if('market_item_verified' in payload){ MarketItemsData.market_item_verified = payload.market_item_verified; }
				if('on_chain' in payload){ MarketItemsData.on_chain = payload.on_chain; }
				if('platform_fee_paid' in payload){ MarketItemsData.platform_fee_paid = payload.platform_fee_paid; }
				if('supports_royalties' in payload){ MarketItemsData.supports_royalties = payload.supports_royalties; }
				if('token_contract_address' in payload){ MarketItemsData.token_contract_address = payload.token_contract_address; }
				if('token_creator' in payload){ MarketItemsData.token_creator = payload.token_creator; }
				if('token_currency' in payload){ MarketItemsData.token_currency = payload.token_currency; }
				if('token_id' in payload){ MarketItemsData.token_id = payload.token_id; }
				if('token_index_id' in payload){ MarketItemsData.token_index_id = payload.token_index_id; }
				if('token_interface_id' in payload){ MarketItemsData.token_interface_id = payload.token_interface_id; }
				if('token_owner' in payload){ MarketItemsData.token_owner = payload.token_owner; }
				if('token_price' in payload){ MarketItemsData.token_price = payload.token_price; }
				if('token_seller' in payload){ MarketItemsData.token_seller = payload.token_seller; }
				if('user_id' in payload){ MarketItemsData.user_id = payload.user_id; }
				if('views_count' in payload){ MarketItemsData.views_count = payload.views_count; }

      // Gets the MarketItems resource from the database
      let MarketItemsResultObject:
        | IMarketItemsRow
        | any
        | null = apiGETMarketItems(
          req,
          "market_item_uuid",
          uuid
        );

      if (!MarketItemsResultObject) {
        /* #swagger.responses[404] = {
          description: 'MarketItems resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'MarketItems',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "MarketItems",
          "PUT"
        );
      }

      // Execute https request
      MarketItemsResultObject =
        apiPUTMarketItems(
          req,
          MarketItemsData,
          uuid,
          "market_item_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'MarketItems resource updated successfully.',
        schema: {
          $ref: '#/definitions/MarketItems'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "MarketItems resource updated successfully.",
        MarketItemsResultObject,
        "MarketItems",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/market-items" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'MarketItems',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "MarketItems",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the market-items resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'MarketItems',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the market-items resource.",
      error,
      "MarketItems",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing MarketItems resource partially
 *
 * @param req : Request - MarketItems partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const marketItemsPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MarketItems']
    #swagger.description = 'Endpoint to update a new MarketItems resource.'
    #swagger.summary = 'Updates a new MarketItems resource.'

    #swagger.path = '/models/market-items'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['market_item_uuid'] = {
      in: 'path',
      description: 'MarketItems market_item_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the MarketItems resource.',
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
    const { market_item_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      market_item_uuid &&
      payload &&
      payloadSupportsMarketItemsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the MarketItems resource
      const uuid: string = market_item_uuid;

      // Compose the MarketItems request object
      const MarketItemsData: IMarketItemsRow = {};
      
				if('auction_item_id' in payload){ MarketItemsData.auction_item_id = payload.auction_item_id; }
				if('category_id' in payload){ MarketItemsData.category_id = payload.category_id; }
				if('chain_id' in payload){ MarketItemsData.chain_id = payload.chain_id; }
				if('fid' in payload){ MarketItemsData.fid = payload.fid; }
				if('is_archived' in payload){ MarketItemsData.is_archived = payload.is_archived; }
				if('is_auction' in payload){ MarketItemsData.is_auction = payload.is_auction; }
				if('is_listed' in payload){ MarketItemsData.is_listed = payload.is_listed; }
				if('is_sold' in payload){ MarketItemsData.is_sold = payload.is_sold; }
				if('likes_count' in payload){ MarketItemsData.likes_count = payload.likes_count; }
				if('market_item_created_at' in payload){ MarketItemsData.market_item_created_at = payload.market_item_created_at; }
				if('market_item_featured' in payload){ MarketItemsData.market_item_featured = payload.market_item_featured; }
				if('market_item_id' in payload){ MarketItemsData.market_item_id = payload.market_item_id; }
				if('market_item_tags' in payload){ MarketItemsData.market_item_tags = payload.market_item_tags; }
				if('market_item_updated_at' in payload){ MarketItemsData.market_item_updated_at = payload.market_item_updated_at; }
				if('market_item_uuid' in payload){ MarketItemsData.market_item_uuid = payload.market_item_uuid; }
				if('market_item_verified' in payload){ MarketItemsData.market_item_verified = payload.market_item_verified; }
				if('on_chain' in payload){ MarketItemsData.on_chain = payload.on_chain; }
				if('platform_fee_paid' in payload){ MarketItemsData.platform_fee_paid = payload.platform_fee_paid; }
				if('supports_royalties' in payload){ MarketItemsData.supports_royalties = payload.supports_royalties; }
				if('token_contract_address' in payload){ MarketItemsData.token_contract_address = payload.token_contract_address; }
				if('token_creator' in payload){ MarketItemsData.token_creator = payload.token_creator; }
				if('token_currency' in payload){ MarketItemsData.token_currency = payload.token_currency; }
				if('token_id' in payload){ MarketItemsData.token_id = payload.token_id; }
				if('token_index_id' in payload){ MarketItemsData.token_index_id = payload.token_index_id; }
				if('token_interface_id' in payload){ MarketItemsData.token_interface_id = payload.token_interface_id; }
				if('token_owner' in payload){ MarketItemsData.token_owner = payload.token_owner; }
				if('token_price' in payload){ MarketItemsData.token_price = payload.token_price; }
				if('token_seller' in payload){ MarketItemsData.token_seller = payload.token_seller; }
				if('user_id' in payload){ MarketItemsData.user_id = payload.user_id; }
				if('views_count' in payload){ MarketItemsData.views_count = payload.views_count; }

      // Gets the MarketItems resource from the database
      let MarketItemsResultObject:
        | IMarketItemsRow
        | any
        | null = apiGETMarketItems(
          req,
          "market_item_uuid",
          uuid
        );

      if (!MarketItemsResultObject) {
        /* #swagger.responses[404] = {
          description: 'MarketItems resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'MarketItems',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "MarketItems",
          "PATCH"
        );
      }

      // Execute https request
      MarketItemsResultObject =
        apiPUTMarketItems(
          req,
          MarketItemsData,
          uuid,
          "market_item_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'MarketItems resource updated successfully.',
        schema: {
          $ref: '#/definitions/MarketItems'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "MarketItems resource updated successfully.",
        MarketItemsResultObject,
        "MarketItems",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/market-items" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'MarketItems',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "MarketItems",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the market-items resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'MarketItems',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the market-items resource.",
      error,
      "MarketItems",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a MarketItems resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IMarketItemsRow data type object
 *
 */
const supabaseDeleteMarketItems = async (
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a MarketItems resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IMarketItemsRow data type object
 *
 */
const mongoDBDeleteMarketItems = async (
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a MarketItems resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IMarketItemsRow data type object
 *
 */
const firebaseDeleteMarketItems = async (
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a MarketItems resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IMarketItemsRow data type object
 *
 */
const mysqlDBDeleteMarketItems = async (
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IMarketItemsRow data type object
 *
 */
const apiDELETEMarketItems = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IMarketItemsInsert | any | null> => {
  // Intitialize the MarketItemsResultObject variable
  let MarketItemsResultObject: IMarketItemsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      MarketItemsResultObject =
        await supabaseDeleteMarketItems(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      MarketItemsResultObject =
        await mongoDBDeleteMarketItems(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      MarketItemsResultObject =
        await mongoDBDeleteMarketItems(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      MarketItemsResultObject =
        await firebaseDeleteMarketItems(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      MarketItemsResultObject =
        await firebaseDeleteMarketItems(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      MarketItemsResultObject =
        await mysqlDBDeleteMarketItems(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      MarketItemsResultObject =
        await mysqlDBDeleteMarketItems(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      MarketItemsResultObject =
        await supabaseDeleteMarketItems(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    MarketItemsResultObject =
      await supabaseDeleteMarketItems(columnValue, columnName);
  }

  return MarketItemsResultObject;
};

/*
 * Deletes an existing MarketItems resource
 *
 * @param req : Request - MarketItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const marketItemsDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MarketItems']
    #swagger.description = 'Endpoint to delete a new MarketItems resource.'
    #swagger.summary = 'Updates a new MarketItems resource.'

    #swagger.path = '/models/market-items'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['market_item_uuid'] = {
      in: 'path',
      description: 'MarketItems market_item_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the MarketItems resource.',
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
    const { market_item_uuid } = req.params;

    // If all the parameters are available, its a go
    if (market_item_uuid) {
      // Get the uuid to identify the MarketItems resource
      const uuid: string = market_item_uuid;

      // Gets the MarketItems resource from the database
      let MarketItemsResultObject:
        | IMarketItemsRow
        | any
        | null = apiGETMarketItems(
          req,
          "market_item_uuid",
          uuid
        );

      if (!MarketItemsResultObject) {
        /* #swagger.responses[404] = {
          description: 'MarketItems resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'MarketItems',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "MarketItems",
          "PATCH"
        );
      }

      // Execute https request
      MarketItemsResultObject =
        apiDELETEMarketItems(req, uuid, "market_item_uuid");

      /* #swagger.responses[201] = {
        description: 'MarketItems resource deleted successfully.',
        schema: {
          'market_item_uuid': 'market_item_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "MarketItems resource deleted successfully.",
        MarketItemsResultObject,
        "MarketItems",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/market-items" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'MarketItems',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "MarketItems",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the market-items resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'MarketItems',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the market-items resource.",
      error,
      "MarketItems",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of MarketItems without the response body.
 *
 * @param req : Request - MarketItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const marketItemsHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MarketItems']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of MarketItems without the response body'
  
      #swagger.path = '/models/market-items'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the MarketItems resource.',
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
            description: 'Could not perform a HEAD request at the "/models/market-items" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'MarketItems',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "MarketItems",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the market-items resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'MarketItems',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the market-items resource.",
      error,
      "MarketItems",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - MarketItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const marketItemsTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MarketItems']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/market-items'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the MarketItems resource.',
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
        "MarketItems",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/market-items" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'MarketItems',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "MarketItems",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the market-items resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'MarketItems',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the market-items resource.",
      error,
      "MarketItems",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - MarketItems request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const marketItemsOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['MarketItems']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/market-items'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the MarketItems resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/market-items" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'MarketItems',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "MarketItems",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the market-items resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'MarketItems',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the market-items resource.",
      error,
      "MarketItems",
      "OPTIONS"
    );
  }

  // #swagger.end
};
