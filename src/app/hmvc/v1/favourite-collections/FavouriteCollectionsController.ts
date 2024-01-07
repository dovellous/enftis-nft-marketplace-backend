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
  IFavouriteCollectionsInsert,
  IFavouriteCollectionsRow,
  IFavouriteCollectionsUpdate
} from "./models/FavouriteCollectionsTypesDefinitions";

import { FavouriteCollectionsSupabaseCls } from "./models/FavouriteCollectionsSupabaseCls";
import { FavouriteCollectionsMongoDBCls } from "./models/FavouriteCollectionsMongoDBCls";
import { FavouriteCollectionsFirebaseCls } from "./models/FavouriteCollectionsFirebaseCls";
import { FavouriteCollectionsMySQLDBCls } from "./models/FavouriteCollectionsMySQLDBCls";
import { FavouriteCollectionsDTO } from "./models/FavouriteCollectionsDTO";

export const payloadSupportsFavouriteCollectionsRowInterface: any = (
  payload: any
): payload is IFavouriteCollectionsRow => {
  return !!payload?.FavouriteCollections.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsFavouriteCollectionsInsertInterface: any = (
  payload: any
): payload is IFavouriteCollectionsInsert => {
  return !!payload?.FavouriteCollections
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsFavouriteCollectionsUpdateInterface: any = (
  payload: any
): payload is IFavouriteCollectionsUpdate => {
  return !!payload?.FavouriteCollections
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new FavouriteCollectionsSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IFavouriteCollectionsUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new FavouriteCollectionsMongoDBCls().insertARow(payload);
          new FavouriteCollectionsFirebaseCls().insertARow(payload);
          new FavouriteCollectionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new FavouriteCollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
            
          );
          new FavouriteCollectionsFirebaseCls().updateMatchingRows(
            payload,
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
          );
          new FavouriteCollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          break;
        }

        case "patch": {
          new FavouriteCollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          new FavouriteCollectionsFirebaseCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          new FavouriteCollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          break;
        }

        case "delete": {
          new FavouriteCollectionsMongoDBCls().deleteMatchingRows(
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
          );
          new FavouriteCollectionsFirebaseCls().deleteMatchingRows(
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
          );
          new FavouriteCollectionsMySQLDBCls().deleteMatchingRows(
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
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
const mongoDBDatabaseClass: any = new FavouriteCollectionsMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IFavouriteCollectionsUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new FavouriteCollectionsSupabaseCls().insertARow(payload);
          new FavouriteCollectionsFirebaseCls().insertARow(payload);
          new FavouriteCollectionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new FavouriteCollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          new FavouriteCollectionsFirebaseCls().updateMatchingRows(
            payload,
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
          );
          new FavouriteCollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          break;
        }

        case "patch": {
          new FavouriteCollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          new FavouriteCollectionsFirebaseCls().updateMatchingRows(
            payload,
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
          );
          new FavouriteCollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          break;
        }

        case "delete": {
          new FavouriteCollectionsSupabaseCls().deleteMatchingRows(
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
          );
          new FavouriteCollectionsFirebaseCls().deleteMatchingRows(
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
          );
          new FavouriteCollectionsMySQLDBCls().deleteMatchingRows(
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
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
  new FavouriteCollectionsSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IFavouriteCollectionsUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new FavouriteCollectionsSupabaseCls().insertARow(payload);
          new FavouriteCollectionsMongoDBCls().insertARow(payload);
          new FavouriteCollectionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new FavouriteCollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          new FavouriteCollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          new FavouriteCollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          break;
        }

        case "patch": {
          new FavouriteCollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          new FavouriteCollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          new FavouriteCollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          break;
        }

        case "delete": {
          new FavouriteCollectionsSupabaseCls().deleteMatchingRows(
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
          );
          new FavouriteCollectionsMongoDBCls().deleteMatchingRows(
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
          );
          new FavouriteCollectionsMySQLDBCls().deleteMatchingRows(
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
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
const mySQLDatabaseClass: any = new FavouriteCollectionsSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IFavouriteCollectionsUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new FavouriteCollectionsSupabaseCls().insertARow(payload);
          new FavouriteCollectionsMongoDBCls().insertARow(payload);
          new FavouriteCollectionsFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new FavouriteCollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          new FavouriteCollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          new FavouriteCollectionsFirebaseCls().updateMatchingRows(
            payload,
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
          );
          break;
        }

        case "patch": {
          new FavouriteCollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          new FavouriteCollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.favourite_collection_uuid,
            "favourite_collection_uuid"
          );
          new FavouriteCollectionsFirebaseCls().updateMatchingRows(
            payload,
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
          );
          break;
        }

        case "delete": {
          new FavouriteCollectionsSupabaseCls().deleteMatchingRows(
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
          );
          new FavouriteCollectionsMongoDBCls().deleteMatchingRows(
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
          );
          new FavouriteCollectionsFirebaseCls().deleteMatchingRows(
            "favourite_collection_uuid",
            payload.favourite_collection_uuid
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
 * Gets, gets or edits a FavouriteCollections resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IFavouriteCollectionsGets interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const supabaseGetFavouriteCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a FavouriteCollections resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IFavouriteCollectionsGets interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const mongoDBGetFavouriteCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a FavouriteCollections resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IFavouriteCollectionsGets interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const firebaseGetFavouriteCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a FavouriteCollections resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IFavouriteCollectionsGets interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const mysqlDBGetFavouriteCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IFavouriteCollectionsGets interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const apiGETFavouriteCollections = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IFavouriteCollectionsRow | any | null> => {
  // Intitialize the FavouriteCollectionsResultObject variable
  let FavouriteCollectionsResultObject: IFavouriteCollectionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      FavouriteCollectionsResultObject =
        await supabaseGetFavouriteCollections(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      FavouriteCollectionsResultObject =
        await mongoDBGetFavouriteCollections(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      FavouriteCollectionsResultObject =
        await mongoDBGetFavouriteCollections(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      FavouriteCollectionsResultObject =
        await firebaseGetFavouriteCollections(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      FavouriteCollectionsResultObject =
        await firebaseGetFavouriteCollections(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      FavouriteCollectionsResultObject =
        await mysqlDBGetFavouriteCollections(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      FavouriteCollectionsResultObject =
        await mysqlDBGetFavouriteCollections(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      FavouriteCollectionsResultObject =
        await supabaseGetFavouriteCollections(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    FavouriteCollectionsResultObject =
      await supabaseGetFavouriteCollections(columnValue, columnName);
  }

  return FavouriteCollectionsResultObject;
};

/*
 * Gets an existing FavouriteCollections resource
 *
 * @param req : Request - FavouriteCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const favouriteCollectionsGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['FavouriteCollections']
    #swagger.description = 'Endpoint to get a new FavouriteCollections resource.'
    #swagger.summary = 'Gets an existing FavouriteCollections resource.'

    #swagger.path = '/models/favourite-collections'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['favourite_collection_uuid'] = {
      in: 'path',
      description: 'FavouriteCollections favourite_collection_uuid key identifier used to get the resource.',
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
    const { favourite_collection_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the FavouriteCollections resource
      const uuid: string = favourite_collection_uuid;

      let FavouriteCollectionsResultObject:
        | IFavouriteCollectionsRow
        | Array<IFavouriteCollectionsRow>
        | any
        | null;

      if (favourite_collection_uuid) {
        // Gets the FavouriteCollections resource from the database
        FavouriteCollectionsResultObject =
          apiGETFavouriteCollections(req, "favourite_collection_uuid,", uuid);
      } else {
        // Gets all the models from the FavouriteCollections resource
        FavouriteCollectionsResultObject =
          apiGETFavouriteCollections(req);
      }

      if (!FavouriteCollectionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'FavouriteCollections resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'FavouriteCollections',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "FavouriteCollections resource was not found.",
          FavouriteCollectionsResultObject,
          "FavouriteCollections",
          "PUT"
        );
      }

      // Execute https request
      FavouriteCollectionsResultObject =
        apiPUTFavouriteCollections(
          req,
          FavouriteCollectionsResultObject,
          uuid,
          "favourite_collection_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'FavouriteCollections resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/FavouriteCollections'
          }
          model: 'FavouriteCollections',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        FavouriteCollectionsResultObject,
        "FavouriteCollections",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/favourite-collections", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'FavouriteCollections',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/favourite-collections", Missing or invalid parameters.',
        req.body,
        "FavouriteCollections",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the favourite-collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'FavouriteCollections',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the favourite-collections resource.",
      error,
      "FavouriteCollections",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a FavouriteCollections resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IFavouriteCollectionsInsert interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const supabasePostFavouriteCollections = async (
  payload: any
): Promise<IFavouriteCollectionsInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a FavouriteCollections resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IFavouriteCollectionsInsert interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const mongoDBPostFavouriteCollections = async (
  payload: any
): Promise<IFavouriteCollectionsRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a FavouriteCollections resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IFavouriteCollectionsInsert interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const firebasePostFavouriteCollections = async (
  payload: any
): Promise<IFavouriteCollectionsInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a FavouriteCollections resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IFavouriteCollectionsInsert interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const mysqlDBPostFavouriteCollections = async (
  payload: any
): Promise<IFavouriteCollectionsInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a FavouriteCollections resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IFavouriteCollectionsInsert interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const apiPOSTFavouriteCollections = async (
  req: any,
  payload: any
): Promise<IFavouriteCollectionsInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the FavouriteCollections resource into the database
  let FavouriteCollectionsResultObject:
    | IFavouriteCollectionsRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      FavouriteCollectionsResultObject =
        await supabasePostFavouriteCollections(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      FavouriteCollectionsResultObject =
        await mongoDBPostFavouriteCollections(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      FavouriteCollectionsResultObject =
        await mongoDBPostFavouriteCollections(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      FavouriteCollectionsResultObject =
        await firebasePostFavouriteCollections(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      FavouriteCollectionsResultObject =
        await firebasePostFavouriteCollections(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      FavouriteCollectionsResultObject =
        await mysqlDBPostFavouriteCollections(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      FavouriteCollectionsResultObject =
        await mysqlDBPostFavouriteCollections(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      FavouriteCollectionsResultObject =
        await supabasePostFavouriteCollections(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    FavouriteCollectionsResultObject =
      await supabasePostFavouriteCollections(payload);
  }

  return FavouriteCollectionsResultObject;
};

/*
 * Creates a new FavouriteCollections resource
 *
 * @param req : Request - FavouriteCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const favouriteCollectionsPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['FavouriteCollections']
    #swagger.description = 'Endpoint to create a new FavouriteCollections resource.'
    #swagger.summary = 'Creates a new FavouriteCollections resource.'

    #swagger.path = '/models/favourite-collections'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the FavouriteCollections resource.',
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
      payloadSupportsFavouriteCollectionsInsertInterface(payload)
    ) {
      // Compose the FavouriteCollections request object
      const FavouriteCollectionsData: IFavouriteCollectionsInsert =
      {
				collection_id: payload.collection_id,
				favourite_collection_created_at: payload.favourite_collection_created_at,
				favourite_collection_id: payload.favourite_collection_id,
				favourite_collection_updated_at: payload.favourite_collection_updated_at,
				favourite_collection_uuid: payload.favourite_collection_uuid,
				fid: payload.fid,
				user_id: payload.user_id,
      };

      // Insert the FavouriteCollections resource into the database
      let FavouriteCollectionsResultObject:
        | IFavouriteCollectionsRow
        | any
        | null;

      // Execute https request
      FavouriteCollectionsResultObject =
        apiPOSTFavouriteCollections(
          req,
          FavouriteCollectionsData
        );

      /* #swagger.responses[201] = {
        description: 'FavouriteCollections resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/FavouriteCollections'
          }
          model: 'FavouriteCollections',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "FavouriteCollections resource created successfully.",
        FavouriteCollectionsResultObject,
        "FavouriteCollections",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/favourite-collections". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'FavouriteCollections',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/favourite-collections". Missing or invalid parameters.',
        req.body,
        "FavouriteCollections",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the favourite-collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'FavouriteCollections',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the favourite-collections resource.",
      error,
      "FavouriteCollections",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a FavouriteCollections resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IFavouriteCollectionsUpdate interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const supabasePutFavouriteCollections = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a FavouriteCollections resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IFavouriteCollectionsUpdate interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const mongoDBPutFavouriteCollections = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a FavouriteCollections resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IFavouriteCollectionsUpdate interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const firebasePutFavouriteCollections = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a FavouriteCollections resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IFavouriteCollectionsUpdate interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const mysqlDBPutFavouriteCollections = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IFavouriteCollectionsUpdate interface.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const apiPUTFavouriteCollections = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsInsert | any | null> => {
  // Intitialize the FavouriteCollectionsResultObject variable
  let FavouriteCollectionsResultObject: IFavouriteCollectionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      FavouriteCollectionsResultObject =
        await supabasePutFavouriteCollections(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      FavouriteCollectionsResultObject =
        await mongoDBPutFavouriteCollections(
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
      FavouriteCollectionsResultObject =
        await mongoDBPutFavouriteCollections(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      FavouriteCollectionsResultObject =
        await firebasePutFavouriteCollections(
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
      FavouriteCollectionsResultObject =
        await firebasePutFavouriteCollections(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      FavouriteCollectionsResultObject =
        await mysqlDBPutFavouriteCollections(
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
      FavouriteCollectionsResultObject =
        await mysqlDBPutFavouriteCollections(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      FavouriteCollectionsResultObject =
        await supabasePutFavouriteCollections(
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
    FavouriteCollectionsResultObject =
      await supabasePutFavouriteCollections(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return FavouriteCollectionsResultObject;
};

/*
 * Updates an existing FavouriteCollections resource
 *
 * @param req : Request - FavouriteCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const favouriteCollectionsPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['FavouriteCollections']
    #swagger.description = 'Endpoint to update a new FavouriteCollections resource.'
    #swagger.summary = 'Updates a new FavouriteCollections resource.'

    #swagger.path = '/models/favourite-collections'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['favourite_collection_uuid'] = {
      in: 'path',
      description: 'FavouriteCollections favourite_collection_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the FavouriteCollections resource.',
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
    const { favourite_collection_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      favourite_collection_uuid &&
      payload &&
      payloadSupportsFavouriteCollectionsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the FavouriteCollections resource
      const uuid: string = favourite_collection_uuid;

      // Compose the FavouriteCollections request object
      const FavouriteCollectionsData: IFavouriteCollectionsRow = {};
      
				if('collection_id' in payload){ FavouriteCollectionsData.collection_id = payload.collection_id; }
				if('favourite_collection_created_at' in payload){ FavouriteCollectionsData.favourite_collection_created_at = payload.favourite_collection_created_at; }
				if('favourite_collection_id' in payload){ FavouriteCollectionsData.favourite_collection_id = payload.favourite_collection_id; }
				if('favourite_collection_updated_at' in payload){ FavouriteCollectionsData.favourite_collection_updated_at = payload.favourite_collection_updated_at; }
				if('favourite_collection_uuid' in payload){ FavouriteCollectionsData.favourite_collection_uuid = payload.favourite_collection_uuid; }
				if('fid' in payload){ FavouriteCollectionsData.fid = payload.fid; }
				if('user_id' in payload){ FavouriteCollectionsData.user_id = payload.user_id; }

      // Gets the FavouriteCollections resource from the database
      let FavouriteCollectionsResultObject:
        | IFavouriteCollectionsRow
        | any
        | null = apiGETFavouriteCollections(
          req,
          "favourite_collection_uuid",
          uuid
        );

      if (!FavouriteCollectionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'FavouriteCollections resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'FavouriteCollections',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "FavouriteCollections",
          "PUT"
        );
      }

      // Execute https request
      FavouriteCollectionsResultObject =
        apiPUTFavouriteCollections(
          req,
          FavouriteCollectionsData,
          uuid,
          "favourite_collection_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'FavouriteCollections resource updated successfully.',
        schema: {
          $ref: '#/definitions/FavouriteCollections'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "FavouriteCollections resource updated successfully.",
        FavouriteCollectionsResultObject,
        "FavouriteCollections",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/favourite-collections" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'FavouriteCollections',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "FavouriteCollections",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the favourite-collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'FavouriteCollections',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the favourite-collections resource.",
      error,
      "FavouriteCollections",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing FavouriteCollections resource partially
 *
 * @param req : Request - FavouriteCollections partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const favouriteCollectionsPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['FavouriteCollections']
    #swagger.description = 'Endpoint to update a new FavouriteCollections resource.'
    #swagger.summary = 'Updates a new FavouriteCollections resource.'

    #swagger.path = '/models/favourite-collections'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['favourite_collection_uuid'] = {
      in: 'path',
      description: 'FavouriteCollections favourite_collection_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the FavouriteCollections resource.',
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
    const { favourite_collection_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      favourite_collection_uuid &&
      payload &&
      payloadSupportsFavouriteCollectionsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the FavouriteCollections resource
      const uuid: string = favourite_collection_uuid;

      // Compose the FavouriteCollections request object
      const FavouriteCollectionsData: IFavouriteCollectionsRow = {};
      
				if('collection_id' in payload){ FavouriteCollectionsData.collection_id = payload.collection_id; }
				if('favourite_collection_created_at' in payload){ FavouriteCollectionsData.favourite_collection_created_at = payload.favourite_collection_created_at; }
				if('favourite_collection_id' in payload){ FavouriteCollectionsData.favourite_collection_id = payload.favourite_collection_id; }
				if('favourite_collection_updated_at' in payload){ FavouriteCollectionsData.favourite_collection_updated_at = payload.favourite_collection_updated_at; }
				if('favourite_collection_uuid' in payload){ FavouriteCollectionsData.favourite_collection_uuid = payload.favourite_collection_uuid; }
				if('fid' in payload){ FavouriteCollectionsData.fid = payload.fid; }
				if('user_id' in payload){ FavouriteCollectionsData.user_id = payload.user_id; }

      // Gets the FavouriteCollections resource from the database
      let FavouriteCollectionsResultObject:
        | IFavouriteCollectionsRow
        | any
        | null = apiGETFavouriteCollections(
          req,
          "favourite_collection_uuid",
          uuid
        );

      if (!FavouriteCollectionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'FavouriteCollections resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'FavouriteCollections',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "FavouriteCollections",
          "PATCH"
        );
      }

      // Execute https request
      FavouriteCollectionsResultObject =
        apiPUTFavouriteCollections(
          req,
          FavouriteCollectionsData,
          uuid,
          "favourite_collection_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'FavouriteCollections resource updated successfully.',
        schema: {
          $ref: '#/definitions/FavouriteCollections'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "FavouriteCollections resource updated successfully.",
        FavouriteCollectionsResultObject,
        "FavouriteCollections",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/favourite-collections" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'FavouriteCollections',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "FavouriteCollections",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the favourite-collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'FavouriteCollections',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the favourite-collections resource.",
      error,
      "FavouriteCollections",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a FavouriteCollections resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const supabaseDeleteFavouriteCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a FavouriteCollections resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const mongoDBDeleteFavouriteCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a FavouriteCollections resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const firebaseDeleteFavouriteCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a FavouriteCollections resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const mysqlDBDeleteFavouriteCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IFavouriteCollectionsRow data type object
 *
 */
const apiDELETEFavouriteCollections = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IFavouriteCollectionsInsert | any | null> => {
  // Intitialize the FavouriteCollectionsResultObject variable
  let FavouriteCollectionsResultObject: IFavouriteCollectionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      FavouriteCollectionsResultObject =
        await supabaseDeleteFavouriteCollections(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      FavouriteCollectionsResultObject =
        await mongoDBDeleteFavouriteCollections(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      FavouriteCollectionsResultObject =
        await mongoDBDeleteFavouriteCollections(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      FavouriteCollectionsResultObject =
        await firebaseDeleteFavouriteCollections(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      FavouriteCollectionsResultObject =
        await firebaseDeleteFavouriteCollections(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      FavouriteCollectionsResultObject =
        await mysqlDBDeleteFavouriteCollections(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      FavouriteCollectionsResultObject =
        await mysqlDBDeleteFavouriteCollections(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      FavouriteCollectionsResultObject =
        await supabaseDeleteFavouriteCollections(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    FavouriteCollectionsResultObject =
      await supabaseDeleteFavouriteCollections(columnValue, columnName);
  }

  return FavouriteCollectionsResultObject;
};

/*
 * Deletes an existing FavouriteCollections resource
 *
 * @param req : Request - FavouriteCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const favouriteCollectionsDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['FavouriteCollections']
    #swagger.description = 'Endpoint to delete a new FavouriteCollections resource.'
    #swagger.summary = 'Updates a new FavouriteCollections resource.'

    #swagger.path = '/models/favourite-collections'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['favourite_collection_uuid'] = {
      in: 'path',
      description: 'FavouriteCollections favourite_collection_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the FavouriteCollections resource.',
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
    const { favourite_collection_uuid } = req.params;

    // If all the parameters are available, its a go
    if (favourite_collection_uuid) {
      // Get the uuid to identify the FavouriteCollections resource
      const uuid: string = favourite_collection_uuid;

      // Gets the FavouriteCollections resource from the database
      let FavouriteCollectionsResultObject:
        | IFavouriteCollectionsRow
        | any
        | null = apiGETFavouriteCollections(
          req,
          "favourite_collection_uuid",
          uuid
        );

      if (!FavouriteCollectionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'FavouriteCollections resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'FavouriteCollections',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "FavouriteCollections",
          "PATCH"
        );
      }

      // Execute https request
      FavouriteCollectionsResultObject =
        apiDELETEFavouriteCollections(req, uuid, "favourite_collection_uuid");

      /* #swagger.responses[201] = {
        description: 'FavouriteCollections resource deleted successfully.',
        schema: {
          'favourite_collection_uuid': 'favourite_collection_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "FavouriteCollections resource deleted successfully.",
        FavouriteCollectionsResultObject,
        "FavouriteCollections",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/favourite-collections" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'FavouriteCollections',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "FavouriteCollections",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the favourite-collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'FavouriteCollections',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the favourite-collections resource.",
      error,
      "FavouriteCollections",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of FavouriteCollections without the response body.
 *
 * @param req : Request - FavouriteCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const favouriteCollectionsHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['FavouriteCollections']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of FavouriteCollections without the response body'
  
      #swagger.path = '/models/favourite-collections'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the FavouriteCollections resource.',
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
            description: 'Could not perform a HEAD request at the "/models/favourite-collections" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'FavouriteCollections',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "FavouriteCollections",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the favourite-collections resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'FavouriteCollections',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the favourite-collections resource.",
      error,
      "FavouriteCollections",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - FavouriteCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const favouriteCollectionsTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['FavouriteCollections']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/favourite-collections'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the FavouriteCollections resource.',
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
        "FavouriteCollections",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/favourite-collections" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'FavouriteCollections',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "FavouriteCollections",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the favourite-collections resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'FavouriteCollections',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the favourite-collections resource.",
      error,
      "FavouriteCollections",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - FavouriteCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const favouriteCollectionsOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['FavouriteCollections']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/favourite-collections'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the FavouriteCollections resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/favourite-collections" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'FavouriteCollections',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "FavouriteCollections",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the favourite-collections resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'FavouriteCollections',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the favourite-collections resource.",
      error,
      "FavouriteCollections",
      "OPTIONS"
    );
  }

  // #swagger.end
};
