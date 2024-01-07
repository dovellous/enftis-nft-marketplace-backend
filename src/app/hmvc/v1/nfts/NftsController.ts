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
  INftsInsert,
  INftsRow,
  INftsUpdate
} from "./models/NftsTypesDefinitions";

import { NftsSupabaseCls } from "./models/NftsSupabaseCls";
import { NftsMongoDBCls } from "./models/NftsMongoDBCls";
import { NftsFirebaseCls } from "./models/NftsFirebaseCls";
import { NftsMySQLDBCls } from "./models/NftsMySQLDBCls";
import { NftsDTO } from "./models/NftsDTO";

export const payloadSupportsNftsRowInterface: any = (
  payload: any
): payload is INftsRow => {
  return !!payload?.Nfts.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsNftsInsertInterface: any = (
  payload: any
): payload is INftsInsert => {
  return !!payload?.Nfts
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsNftsUpdateInterface: any = (
  payload: any
): payload is INftsUpdate => {
  return !!payload?.Nfts
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new NftsSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: INftsUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new NftsMongoDBCls().insertARow(payload);
          new NftsFirebaseCls().insertARow(payload);
          new NftsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new NftsMongoDBCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
            
          );
          new NftsFirebaseCls().updateMatchingRows(
            payload,
            "nft_uuid",
            payload.nft_uuid
          );
          new NftsMySQLDBCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          break;
        }

        case "patch": {
          new NftsMongoDBCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          new NftsFirebaseCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          new NftsMySQLDBCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          break;
        }

        case "delete": {
          new NftsMongoDBCls().deleteMatchingRows(
            "nft_uuid",
            payload.nft_uuid
          );
          new NftsFirebaseCls().deleteMatchingRows(
            "nft_uuid",
            payload.nft_uuid
          );
          new NftsMySQLDBCls().deleteMatchingRows(
            "nft_uuid",
            payload.nft_uuid
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
const mongoDBDatabaseClass: any = new NftsMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: INftsUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new NftsSupabaseCls().insertARow(payload);
          new NftsFirebaseCls().insertARow(payload);
          new NftsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new NftsSupabaseCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          new NftsFirebaseCls().updateMatchingRows(
            payload,
            "nft_uuid",
            payload.nft_uuid
          );
          new NftsMySQLDBCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          break;
        }

        case "patch": {
          new NftsSupabaseCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          new NftsFirebaseCls().updateMatchingRows(
            payload,
            "nft_uuid",
            payload.nft_uuid
          );
          new NftsMySQLDBCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          break;
        }

        case "delete": {
          new NftsSupabaseCls().deleteMatchingRows(
            "nft_uuid",
            payload.nft_uuid
          );
          new NftsFirebaseCls().deleteMatchingRows(
            "nft_uuid",
            payload.nft_uuid
          );
          new NftsMySQLDBCls().deleteMatchingRows(
            "nft_uuid",
            payload.nft_uuid
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
  new NftsSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: INftsUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new NftsSupabaseCls().insertARow(payload);
          new NftsMongoDBCls().insertARow(payload);
          new NftsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new NftsSupabaseCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          new NftsMongoDBCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          new NftsMySQLDBCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          break;
        }

        case "patch": {
          new NftsSupabaseCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          new NftsMongoDBCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          new NftsMySQLDBCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          break;
        }

        case "delete": {
          new NftsSupabaseCls().deleteMatchingRows(
            "nft_uuid",
            payload.nft_uuid
          );
          new NftsMongoDBCls().deleteMatchingRows(
            "nft_uuid",
            payload.nft_uuid
          );
          new NftsMySQLDBCls().deleteMatchingRows(
            "nft_uuid",
            payload.nft_uuid
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
const mySQLDatabaseClass: any = new NftsSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: INftsUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new NftsSupabaseCls().insertARow(payload);
          new NftsMongoDBCls().insertARow(payload);
          new NftsFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new NftsSupabaseCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          new NftsMongoDBCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          new NftsFirebaseCls().updateMatchingRows(
            payload,
            "nft_uuid",
            payload.nft_uuid
          );
          break;
        }

        case "patch": {
          new NftsSupabaseCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          new NftsMongoDBCls().updateMatchingRows(
            payload,
            payload.nft_uuid,
            "nft_uuid"
          );
          new NftsFirebaseCls().updateMatchingRows(
            payload,
            "nft_uuid",
            payload.nft_uuid
          );
          break;
        }

        case "delete": {
          new NftsSupabaseCls().deleteMatchingRows(
            "nft_uuid",
            payload.nft_uuid
          );
          new NftsMongoDBCls().deleteMatchingRows(
            "nft_uuid",
            payload.nft_uuid
          );
          new NftsFirebaseCls().deleteMatchingRows(
            "nft_uuid",
            payload.nft_uuid
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
 * Gets, gets or edits a Nfts resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftsGets interface.
 * @returns INftsRow data type object
 *
 */
const supabaseGetNfts = async (
  columnValue: any,
  columnName?: string
): Promise<INftsRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Nfts resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftsGets interface.
 * @returns INftsRow data type object
 *
 */
const mongoDBGetNfts = async (
  columnValue: any,
  columnName?: string
): Promise<INftsRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Nfts resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftsGets interface.
 * @returns INftsRow data type object
 *
 */
const firebaseGetNfts = async (
  columnValue: any,
  columnName?: string
): Promise<INftsRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Nfts resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftsGets interface.
 * @returns INftsRow data type object
 *
 */
const mysqlDBGetNfts = async (
  columnValue: any,
  columnName?: string
): Promise<INftsRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the INftsGets interface.
 * @returns INftsRow data type object
 *
 */
const apiGETNfts = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<INftsRow | any | null> => {
  // Intitialize the NftsResultObject variable
  let NftsResultObject: INftsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      NftsResultObject =
        await supabaseGetNfts(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      NftsResultObject =
        await mongoDBGetNfts(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      NftsResultObject =
        await mongoDBGetNfts(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      NftsResultObject =
        await firebaseGetNfts(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      NftsResultObject =
        await firebaseGetNfts(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      NftsResultObject =
        await mysqlDBGetNfts(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      NftsResultObject =
        await mysqlDBGetNfts(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      NftsResultObject =
        await supabaseGetNfts(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    NftsResultObject =
      await supabaseGetNfts(columnValue, columnName);
  }

  return NftsResultObject;
};

/*
 * Gets an existing Nfts resource
 *
 * @param req : Request - Nfts request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftsGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Nfts']
    #swagger.description = 'Endpoint to get a new Nfts resource.'
    #swagger.summary = 'Gets an existing Nfts resource.'

    #swagger.path = '/models/nfts'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['nft_uuid'] = {
      in: 'path',
      description: 'Nfts nft_uuid key identifier used to get the resource.',
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
    const { nft_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the Nfts resource
      const uuid: string = nft_uuid;

      let NftsResultObject:
        | INftsRow
        | Array<INftsRow>
        | any
        | null;

      if (nft_uuid) {
        // Gets the Nfts resource from the database
        NftsResultObject =
          apiGETNfts(req, "nft_uuid,", uuid);
      } else {
        // Gets all the models from the Nfts resource
        NftsResultObject =
          apiGETNfts(req);
      }

      if (!NftsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Nfts resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Nfts',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Nfts resource was not found.",
          NftsResultObject,
          "Nfts",
          "PUT"
        );
      }

      // Execute https request
      NftsResultObject =
        apiPUTNfts(
          req,
          NftsResultObject,
          uuid,
          "nft_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Nfts resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Nfts'
          }
          model: 'Nfts',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        NftsResultObject,
        "Nfts",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/nfts", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'Nfts',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/nfts", Missing or invalid parameters.',
        req.body,
        "Nfts",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the nfts resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'Nfts',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the nfts resource.",
      error,
      "Nfts",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a Nfts resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftsInsert interface.
 * @returns INftsRow data type object
 *
 */
const supabasePostNfts = async (
  payload: any
): Promise<INftsInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Nfts resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftsInsert interface.
 * @returns INftsRow data type object
 *
 */
const mongoDBPostNfts = async (
  payload: any
): Promise<INftsRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Nfts resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftsInsert interface.
 * @returns INftsRow data type object
 *
 */
const firebasePostNfts = async (
  payload: any
): Promise<INftsInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Nfts resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftsInsert interface.
 * @returns INftsRow data type object
 *
 */
const mysqlDBPostNfts = async (
  payload: any
): Promise<INftsInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Nfts resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftsInsert interface.
 * @returns INftsRow data type object
 *
 */
const apiPOSTNfts = async (
  req: any,
  payload: any
): Promise<INftsInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the Nfts resource into the database
  let NftsResultObject:
    | INftsRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      NftsResultObject =
        await supabasePostNfts(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      NftsResultObject =
        await mongoDBPostNfts(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      NftsResultObject =
        await mongoDBPostNfts(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      NftsResultObject =
        await firebasePostNfts(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      NftsResultObject =
        await firebasePostNfts(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      NftsResultObject =
        await mysqlDBPostNfts(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      NftsResultObject =
        await mysqlDBPostNfts(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      NftsResultObject =
        await supabasePostNfts(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    NftsResultObject =
      await supabasePostNfts(payload);
  }

  return NftsResultObject;
};

/*
 * Creates a new Nfts resource
 *
 * @param req : Request - Nfts request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftsPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Nfts']
    #swagger.description = 'Endpoint to create a new Nfts resource.'
    #swagger.summary = 'Creates a new Nfts resource.'

    #swagger.path = '/models/nfts'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the Nfts resource.',
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
      payloadSupportsNftsInsertInterface(payload)
    ) {
      // Compose the Nfts request object
      const NftsData: INftsInsert =
      {
				category_id: payload.category_id,
				fid: payload.fid,
				nft_address: payload.nft_address,
				nft_auction_meta: payload.nft_auction_meta,
				nft_chains: payload.nft_chains,
				nft_collection_meta: payload.nft_collection_meta,
				nft_created_at: payload.nft_created_at,
				nft_description: payload.nft_description,
				nft_gallery: payload.nft_gallery,
				nft_hash: payload.nft_hash,
				nft_id: payload.nft_id,
				nft_interface_id: payload.nft_interface_id,
				nft_interface_type: payload.nft_interface_type,
				nft_ipfs_id: payload.nft_ipfs_id,
				nft_is_auction: payload.nft_is_auction,
				nft_link: payload.nft_link,
				nft_meta: payload.nft_meta,
				nft_minted: payload.nft_minted,
				nft_name: payload.nft_name,
				nft_preview: payload.nft_preview,
				nft_price: payload.nft_price,
				nft_pricing: payload.nft_pricing,
				nft_properties: payload.nft_properties,
				nft_royalty_amount: payload.nft_royalty_amount,
				nft_royalty_receiver: payload.nft_royalty_receiver,
				nft_sensitive_content: payload.nft_sensitive_content,
				nft_supply: payload.nft_supply,
				nft_support_royalties: payload.nft_support_royalties,
				nft_symbol: payload.nft_symbol,
				nft_unlockable: payload.nft_unlockable,
				nft_updated_at: payload.nft_updated_at,
				nft_uuid: payload.nft_uuid,
				token_creator: payload.token_creator,
				token_id: payload.token_id,
				token_minter: payload.token_minter,
				user_id: payload.user_id,
      };

      // Insert the Nfts resource into the database
      let NftsResultObject:
        | INftsRow
        | any
        | null;

      // Execute https request
      NftsResultObject =
        apiPOSTNfts(
          req,
          NftsData
        );

      /* #swagger.responses[201] = {
        description: 'Nfts resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Nfts'
          }
          model: 'Nfts',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Nfts resource created successfully.",
        NftsResultObject,
        "Nfts",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/nfts". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'Nfts',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/nfts". Missing or invalid parameters.',
        req.body,
        "Nfts",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the nfts resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'Nfts',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the nfts resource.",
      error,
      "Nfts",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a Nfts resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftsUpdate interface.
 * @returns INftsRow data type object
 *
 */
const supabasePutNfts = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftsInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Nfts resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftsUpdate interface.
 * @returns INftsRow data type object
 *
 */
const mongoDBPutNfts = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftsRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Nfts resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftsUpdate interface.
 * @returns INftsRow data type object
 *
 */
const firebasePutNfts = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftsInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Nfts resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftsUpdate interface.
 * @returns INftsRow data type object
 *
 */
const mysqlDBPutNfts = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftsInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the INftsUpdate interface.
 * @returns INftsRow data type object
 *
 */
const apiPUTNfts = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<INftsInsert | any | null> => {
  // Intitialize the NftsResultObject variable
  let NftsResultObject: INftsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      NftsResultObject =
        await supabasePutNfts(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      NftsResultObject =
        await mongoDBPutNfts(
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
      NftsResultObject =
        await mongoDBPutNfts(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      NftsResultObject =
        await firebasePutNfts(
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
      NftsResultObject =
        await firebasePutNfts(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      NftsResultObject =
        await mysqlDBPutNfts(
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
      NftsResultObject =
        await mysqlDBPutNfts(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      NftsResultObject =
        await supabasePutNfts(
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
    NftsResultObject =
      await supabasePutNfts(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return NftsResultObject;
};

/*
 * Updates an existing Nfts resource
 *
 * @param req : Request - Nfts request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftsPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Nfts']
    #swagger.description = 'Endpoint to update a new Nfts resource.'
    #swagger.summary = 'Updates a new Nfts resource.'

    #swagger.path = '/models/nfts'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['nft_uuid'] = {
      in: 'path',
      description: 'Nfts nft_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Nfts resource.',
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
    const { nft_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      nft_uuid &&
      payload &&
      payloadSupportsNftsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Nfts resource
      const uuid: string = nft_uuid;

      // Compose the Nfts request object
      const NftsData: INftsRow = {};
      
				if('category_id' in payload){ NftsData.category_id = payload.category_id; }
				if('fid' in payload){ NftsData.fid = payload.fid; }
				if('nft_address' in payload){ NftsData.nft_address = payload.nft_address; }
				if('nft_auction_meta' in payload){ NftsData.nft_auction_meta = payload.nft_auction_meta; }
				if('nft_chains' in payload){ NftsData.nft_chains = payload.nft_chains; }
				if('nft_collection_meta' in payload){ NftsData.nft_collection_meta = payload.nft_collection_meta; }
				if('nft_created_at' in payload){ NftsData.nft_created_at = payload.nft_created_at; }
				if('nft_description' in payload){ NftsData.nft_description = payload.nft_description; }
				if('nft_gallery' in payload){ NftsData.nft_gallery = payload.nft_gallery; }
				if('nft_hash' in payload){ NftsData.nft_hash = payload.nft_hash; }
				if('nft_id' in payload){ NftsData.nft_id = payload.nft_id; }
				if('nft_interface_id' in payload){ NftsData.nft_interface_id = payload.nft_interface_id; }
				if('nft_interface_type' in payload){ NftsData.nft_interface_type = payload.nft_interface_type; }
				if('nft_ipfs_id' in payload){ NftsData.nft_ipfs_id = payload.nft_ipfs_id; }
				if('nft_is_auction' in payload){ NftsData.nft_is_auction = payload.nft_is_auction; }
				if('nft_link' in payload){ NftsData.nft_link = payload.nft_link; }
				if('nft_meta' in payload){ NftsData.nft_meta = payload.nft_meta; }
				if('nft_minted' in payload){ NftsData.nft_minted = payload.nft_minted; }
				if('nft_name' in payload){ NftsData.nft_name = payload.nft_name; }
				if('nft_preview' in payload){ NftsData.nft_preview = payload.nft_preview; }
				if('nft_price' in payload){ NftsData.nft_price = payload.nft_price; }
				if('nft_pricing' in payload){ NftsData.nft_pricing = payload.nft_pricing; }
				if('nft_properties' in payload){ NftsData.nft_properties = payload.nft_properties; }
				if('nft_royalty_amount' in payload){ NftsData.nft_royalty_amount = payload.nft_royalty_amount; }
				if('nft_royalty_receiver' in payload){ NftsData.nft_royalty_receiver = payload.nft_royalty_receiver; }
				if('nft_sensitive_content' in payload){ NftsData.nft_sensitive_content = payload.nft_sensitive_content; }
				if('nft_supply' in payload){ NftsData.nft_supply = payload.nft_supply; }
				if('nft_support_royalties' in payload){ NftsData.nft_support_royalties = payload.nft_support_royalties; }
				if('nft_symbol' in payload){ NftsData.nft_symbol = payload.nft_symbol; }
				if('nft_unlockable' in payload){ NftsData.nft_unlockable = payload.nft_unlockable; }
				if('nft_updated_at' in payload){ NftsData.nft_updated_at = payload.nft_updated_at; }
				if('nft_uuid' in payload){ NftsData.nft_uuid = payload.nft_uuid; }
				if('token_creator' in payload){ NftsData.token_creator = payload.token_creator; }
				if('token_id' in payload){ NftsData.token_id = payload.token_id; }
				if('token_minter' in payload){ NftsData.token_minter = payload.token_minter; }
				if('user_id' in payload){ NftsData.user_id = payload.user_id; }

      // Gets the Nfts resource from the database
      let NftsResultObject:
        | INftsRow
        | any
        | null = apiGETNfts(
          req,
          "nft_uuid",
          uuid
        );

      if (!NftsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Nfts resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Nfts',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Nfts",
          "PUT"
        );
      }

      // Execute https request
      NftsResultObject =
        apiPUTNfts(
          req,
          NftsData,
          uuid,
          "nft_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Nfts resource updated successfully.',
        schema: {
          $ref: '#/definitions/Nfts'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Nfts resource updated successfully.",
        NftsResultObject,
        "Nfts",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/nfts" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Nfts',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Nfts",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the nfts resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Nfts',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the nfts resource.",
      error,
      "Nfts",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing Nfts resource partially
 *
 * @param req : Request - Nfts partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftsPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Nfts']
    #swagger.description = 'Endpoint to update a new Nfts resource.'
    #swagger.summary = 'Updates a new Nfts resource.'

    #swagger.path = '/models/nfts'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['nft_uuid'] = {
      in: 'path',
      description: 'Nfts nft_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Nfts resource.',
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
    const { nft_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      nft_uuid &&
      payload &&
      payloadSupportsNftsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Nfts resource
      const uuid: string = nft_uuid;

      // Compose the Nfts request object
      const NftsData: INftsRow = {};
      
				if('category_id' in payload){ NftsData.category_id = payload.category_id; }
				if('fid' in payload){ NftsData.fid = payload.fid; }
				if('nft_address' in payload){ NftsData.nft_address = payload.nft_address; }
				if('nft_auction_meta' in payload){ NftsData.nft_auction_meta = payload.nft_auction_meta; }
				if('nft_chains' in payload){ NftsData.nft_chains = payload.nft_chains; }
				if('nft_collection_meta' in payload){ NftsData.nft_collection_meta = payload.nft_collection_meta; }
				if('nft_created_at' in payload){ NftsData.nft_created_at = payload.nft_created_at; }
				if('nft_description' in payload){ NftsData.nft_description = payload.nft_description; }
				if('nft_gallery' in payload){ NftsData.nft_gallery = payload.nft_gallery; }
				if('nft_hash' in payload){ NftsData.nft_hash = payload.nft_hash; }
				if('nft_id' in payload){ NftsData.nft_id = payload.nft_id; }
				if('nft_interface_id' in payload){ NftsData.nft_interface_id = payload.nft_interface_id; }
				if('nft_interface_type' in payload){ NftsData.nft_interface_type = payload.nft_interface_type; }
				if('nft_ipfs_id' in payload){ NftsData.nft_ipfs_id = payload.nft_ipfs_id; }
				if('nft_is_auction' in payload){ NftsData.nft_is_auction = payload.nft_is_auction; }
				if('nft_link' in payload){ NftsData.nft_link = payload.nft_link; }
				if('nft_meta' in payload){ NftsData.nft_meta = payload.nft_meta; }
				if('nft_minted' in payload){ NftsData.nft_minted = payload.nft_minted; }
				if('nft_name' in payload){ NftsData.nft_name = payload.nft_name; }
				if('nft_preview' in payload){ NftsData.nft_preview = payload.nft_preview; }
				if('nft_price' in payload){ NftsData.nft_price = payload.nft_price; }
				if('nft_pricing' in payload){ NftsData.nft_pricing = payload.nft_pricing; }
				if('nft_properties' in payload){ NftsData.nft_properties = payload.nft_properties; }
				if('nft_royalty_amount' in payload){ NftsData.nft_royalty_amount = payload.nft_royalty_amount; }
				if('nft_royalty_receiver' in payload){ NftsData.nft_royalty_receiver = payload.nft_royalty_receiver; }
				if('nft_sensitive_content' in payload){ NftsData.nft_sensitive_content = payload.nft_sensitive_content; }
				if('nft_supply' in payload){ NftsData.nft_supply = payload.nft_supply; }
				if('nft_support_royalties' in payload){ NftsData.nft_support_royalties = payload.nft_support_royalties; }
				if('nft_symbol' in payload){ NftsData.nft_symbol = payload.nft_symbol; }
				if('nft_unlockable' in payload){ NftsData.nft_unlockable = payload.nft_unlockable; }
				if('nft_updated_at' in payload){ NftsData.nft_updated_at = payload.nft_updated_at; }
				if('nft_uuid' in payload){ NftsData.nft_uuid = payload.nft_uuid; }
				if('token_creator' in payload){ NftsData.token_creator = payload.token_creator; }
				if('token_id' in payload){ NftsData.token_id = payload.token_id; }
				if('token_minter' in payload){ NftsData.token_minter = payload.token_minter; }
				if('user_id' in payload){ NftsData.user_id = payload.user_id; }

      // Gets the Nfts resource from the database
      let NftsResultObject:
        | INftsRow
        | any
        | null = apiGETNfts(
          req,
          "nft_uuid",
          uuid
        );

      if (!NftsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Nfts resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Nfts',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Nfts",
          "PATCH"
        );
      }

      // Execute https request
      NftsResultObject =
        apiPUTNfts(
          req,
          NftsData,
          uuid,
          "nft_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Nfts resource updated successfully.',
        schema: {
          $ref: '#/definitions/Nfts'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Nfts resource updated successfully.",
        NftsResultObject,
        "Nfts",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/nfts" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Nfts',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Nfts",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the nfts resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Nfts',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the nfts resource.",
      error,
      "Nfts",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a Nfts resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftsRow data type object
 *
 */
const supabaseDeleteNfts = async (
  columnValue: any,
  columnName?: string
): Promise<INftsInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Nfts resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftsRow data type object
 *
 */
const mongoDBDeleteNfts = async (
  columnValue: any,
  columnName?: string
): Promise<INftsRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a Nfts resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftsRow data type object
 *
 */
const firebaseDeleteNfts = async (
  columnValue: any,
  columnName?: string
): Promise<INftsInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Nfts resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftsRow data type object
 *
 */
const mysqlDBDeleteNfts = async (
  columnValue: any,
  columnName?: string
): Promise<INftsInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns INftsRow data type object
 *
 */
const apiDELETENfts = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<INftsInsert | any | null> => {
  // Intitialize the NftsResultObject variable
  let NftsResultObject: INftsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      NftsResultObject =
        await supabaseDeleteNfts(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      NftsResultObject =
        await mongoDBDeleteNfts(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      NftsResultObject =
        await mongoDBDeleteNfts(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      NftsResultObject =
        await firebaseDeleteNfts(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      NftsResultObject =
        await firebaseDeleteNfts(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      NftsResultObject =
        await mysqlDBDeleteNfts(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      NftsResultObject =
        await mysqlDBDeleteNfts(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      NftsResultObject =
        await supabaseDeleteNfts(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    NftsResultObject =
      await supabaseDeleteNfts(columnValue, columnName);
  }

  return NftsResultObject;
};

/*
 * Deletes an existing Nfts resource
 *
 * @param req : Request - Nfts request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftsDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Nfts']
    #swagger.description = 'Endpoint to delete a new Nfts resource.'
    #swagger.summary = 'Updates a new Nfts resource.'

    #swagger.path = '/models/nfts'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['nft_uuid'] = {
      in: 'path',
      description: 'Nfts nft_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the Nfts resource.',
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
    const { nft_uuid } = req.params;

    // If all the parameters are available, its a go
    if (nft_uuid) {
      // Get the uuid to identify the Nfts resource
      const uuid: string = nft_uuid;

      // Gets the Nfts resource from the database
      let NftsResultObject:
        | INftsRow
        | any
        | null = apiGETNfts(
          req,
          "nft_uuid",
          uuid
        );

      if (!NftsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Nfts resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Nfts',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Nfts",
          "PATCH"
        );
      }

      // Execute https request
      NftsResultObject =
        apiDELETENfts(req, uuid, "nft_uuid");

      /* #swagger.responses[201] = {
        description: 'Nfts resource deleted successfully.',
        schema: {
          'nft_uuid': 'nft_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Nfts resource deleted successfully.",
        NftsResultObject,
        "Nfts",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/nfts" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Nfts',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Nfts",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the nfts resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Nfts',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the nfts resource.",
      error,
      "Nfts",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of Nfts without the response body.
 *
 * @param req : Request - Nfts request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftsHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Nfts']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of Nfts without the response body'
  
      #swagger.path = '/models/nfts'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the Nfts resource.',
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
            description: 'Could not perform a HEAD request at the "/models/nfts" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Nfts',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Nfts",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the nfts resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Nfts',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the nfts resource.",
      error,
      "Nfts",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - Nfts request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftsTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Nfts']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/nfts'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Nfts resource.',
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
        "Nfts",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/nfts" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Nfts',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Nfts",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the nfts resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Nfts',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the nfts resource.",
      error,
      "Nfts",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - Nfts request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const nftsOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Nfts']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/nfts'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Nfts resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/nfts" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Nfts',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Nfts",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the nfts resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Nfts',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the nfts resource.",
      error,
      "Nfts",
      "OPTIONS"
    );
  }

  // #swagger.end
};
