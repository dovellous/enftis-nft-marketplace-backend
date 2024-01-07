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
  IUserCollectionsInsert,
  IUserCollectionsRow,
  IUserCollectionsUpdate
} from "./models/UserCollectionsTypesDefinitions";

import { UserCollectionsSupabaseCls } from "./models/UserCollectionsSupabaseCls";
import { UserCollectionsMongoDBCls } from "./models/UserCollectionsMongoDBCls";
import { UserCollectionsFirebaseCls } from "./models/UserCollectionsFirebaseCls";
import { UserCollectionsMySQLDBCls } from "./models/UserCollectionsMySQLDBCls";
import { UserCollectionsDTO } from "./models/UserCollectionsDTO";

export const payloadSupportsUserCollectionsRowInterface: any = (
  payload: any
): payload is IUserCollectionsRow => {
  return !!payload?.UserCollections.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsUserCollectionsInsertInterface: any = (
  payload: any
): payload is IUserCollectionsInsert => {
  return !!payload?.UserCollections
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsUserCollectionsUpdateInterface: any = (
  payload: any
): payload is IUserCollectionsUpdate => {
  return !!payload?.UserCollections
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new UserCollectionsSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IUserCollectionsUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new UserCollectionsMongoDBCls().insertARow(payload);
          new UserCollectionsFirebaseCls().insertARow(payload);
          new UserCollectionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new UserCollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
            
          );
          new UserCollectionsFirebaseCls().updateMatchingRows(
            payload,
            "user_collection_uuid",
            payload.user_collection_uuid
          );
          new UserCollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          break;
        }

        case "patch": {
          new UserCollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          new UserCollectionsFirebaseCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          new UserCollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          break;
        }

        case "delete": {
          new UserCollectionsMongoDBCls().deleteMatchingRows(
            "user_collection_uuid",
            payload.user_collection_uuid
          );
          new UserCollectionsFirebaseCls().deleteMatchingRows(
            "user_collection_uuid",
            payload.user_collection_uuid
          );
          new UserCollectionsMySQLDBCls().deleteMatchingRows(
            "user_collection_uuid",
            payload.user_collection_uuid
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
const mongoDBDatabaseClass: any = new UserCollectionsMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IUserCollectionsUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new UserCollectionsSupabaseCls().insertARow(payload);
          new UserCollectionsFirebaseCls().insertARow(payload);
          new UserCollectionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new UserCollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          new UserCollectionsFirebaseCls().updateMatchingRows(
            payload,
            "user_collection_uuid",
            payload.user_collection_uuid
          );
          new UserCollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          break;
        }

        case "patch": {
          new UserCollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          new UserCollectionsFirebaseCls().updateMatchingRows(
            payload,
            "user_collection_uuid",
            payload.user_collection_uuid
          );
          new UserCollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          break;
        }

        case "delete": {
          new UserCollectionsSupabaseCls().deleteMatchingRows(
            "user_collection_uuid",
            payload.user_collection_uuid
          );
          new UserCollectionsFirebaseCls().deleteMatchingRows(
            "user_collection_uuid",
            payload.user_collection_uuid
          );
          new UserCollectionsMySQLDBCls().deleteMatchingRows(
            "user_collection_uuid",
            payload.user_collection_uuid
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
  new UserCollectionsSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IUserCollectionsUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new UserCollectionsSupabaseCls().insertARow(payload);
          new UserCollectionsMongoDBCls().insertARow(payload);
          new UserCollectionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new UserCollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          new UserCollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          new UserCollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          break;
        }

        case "patch": {
          new UserCollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          new UserCollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          new UserCollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          break;
        }

        case "delete": {
          new UserCollectionsSupabaseCls().deleteMatchingRows(
            "user_collection_uuid",
            payload.user_collection_uuid
          );
          new UserCollectionsMongoDBCls().deleteMatchingRows(
            "user_collection_uuid",
            payload.user_collection_uuid
          );
          new UserCollectionsMySQLDBCls().deleteMatchingRows(
            "user_collection_uuid",
            payload.user_collection_uuid
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
const mySQLDatabaseClass: any = new UserCollectionsSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IUserCollectionsUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new UserCollectionsSupabaseCls().insertARow(payload);
          new UserCollectionsMongoDBCls().insertARow(payload);
          new UserCollectionsFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new UserCollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          new UserCollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          new UserCollectionsFirebaseCls().updateMatchingRows(
            payload,
            "user_collection_uuid",
            payload.user_collection_uuid
          );
          break;
        }

        case "patch": {
          new UserCollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          new UserCollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.user_collection_uuid,
            "user_collection_uuid"
          );
          new UserCollectionsFirebaseCls().updateMatchingRows(
            payload,
            "user_collection_uuid",
            payload.user_collection_uuid
          );
          break;
        }

        case "delete": {
          new UserCollectionsSupabaseCls().deleteMatchingRows(
            "user_collection_uuid",
            payload.user_collection_uuid
          );
          new UserCollectionsMongoDBCls().deleteMatchingRows(
            "user_collection_uuid",
            payload.user_collection_uuid
          );
          new UserCollectionsFirebaseCls().deleteMatchingRows(
            "user_collection_uuid",
            payload.user_collection_uuid
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
 * Gets, gets or edits a UserCollections resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IUserCollectionsGets interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const supabaseGetUserCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a UserCollections resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IUserCollectionsGets interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const mongoDBGetUserCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a UserCollections resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IUserCollectionsGets interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const firebaseGetUserCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a UserCollections resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IUserCollectionsGets interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const mysqlDBGetUserCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IUserCollectionsGets interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const apiGETUserCollections = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IUserCollectionsRow | any | null> => {
  // Intitialize the UserCollectionsResultObject variable
  let UserCollectionsResultObject: IUserCollectionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      UserCollectionsResultObject =
        await supabaseGetUserCollections(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      UserCollectionsResultObject =
        await mongoDBGetUserCollections(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      UserCollectionsResultObject =
        await mongoDBGetUserCollections(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      UserCollectionsResultObject =
        await firebaseGetUserCollections(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      UserCollectionsResultObject =
        await firebaseGetUserCollections(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      UserCollectionsResultObject =
        await mysqlDBGetUserCollections(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      UserCollectionsResultObject =
        await mysqlDBGetUserCollections(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      UserCollectionsResultObject =
        await supabaseGetUserCollections(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    UserCollectionsResultObject =
      await supabaseGetUserCollections(columnValue, columnName);
  }

  return UserCollectionsResultObject;
};

/*
 * Gets an existing UserCollections resource
 *
 * @param req : Request - UserCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const userCollectionsGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['UserCollections']
    #swagger.description = 'Endpoint to get a new UserCollections resource.'
    #swagger.summary = 'Gets an existing UserCollections resource.'

    #swagger.path = '/models/user-collections'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['user_collection_uuid'] = {
      in: 'path',
      description: 'UserCollections user_collection_uuid key identifier used to get the resource.',
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
    const { user_collection_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the UserCollections resource
      const uuid: string = user_collection_uuid;

      let UserCollectionsResultObject:
        | IUserCollectionsRow
        | Array<IUserCollectionsRow>
        | any
        | null;

      if (user_collection_uuid) {
        // Gets the UserCollections resource from the database
        UserCollectionsResultObject =
          apiGETUserCollections(req, "user_collection_uuid,", uuid);
      } else {
        // Gets all the models from the UserCollections resource
        UserCollectionsResultObject =
          apiGETUserCollections(req);
      }

      if (!UserCollectionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'UserCollections resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'UserCollections',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "UserCollections resource was not found.",
          UserCollectionsResultObject,
          "UserCollections",
          "PUT"
        );
      }

      // Execute https request
      UserCollectionsResultObject =
        apiPUTUserCollections(
          req,
          UserCollectionsResultObject,
          uuid,
          "user_collection_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'UserCollections resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/UserCollections'
          }
          model: 'UserCollections',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        UserCollectionsResultObject,
        "UserCollections",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/user-collections", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'UserCollections',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/user-collections", Missing or invalid parameters.',
        req.body,
        "UserCollections",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the user-collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'UserCollections',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the user-collections resource.",
      error,
      "UserCollections",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a UserCollections resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUserCollectionsInsert interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const supabasePostUserCollections = async (
  payload: any
): Promise<IUserCollectionsInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a UserCollections resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUserCollectionsInsert interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const mongoDBPostUserCollections = async (
  payload: any
): Promise<IUserCollectionsRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a UserCollections resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUserCollectionsInsert interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const firebasePostUserCollections = async (
  payload: any
): Promise<IUserCollectionsInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a UserCollections resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUserCollectionsInsert interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const mysqlDBPostUserCollections = async (
  payload: any
): Promise<IUserCollectionsInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a UserCollections resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUserCollectionsInsert interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const apiPOSTUserCollections = async (
  req: any,
  payload: any
): Promise<IUserCollectionsInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the UserCollections resource into the database
  let UserCollectionsResultObject:
    | IUserCollectionsRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      UserCollectionsResultObject =
        await supabasePostUserCollections(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      UserCollectionsResultObject =
        await mongoDBPostUserCollections(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      UserCollectionsResultObject =
        await mongoDBPostUserCollections(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      UserCollectionsResultObject =
        await firebasePostUserCollections(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      UserCollectionsResultObject =
        await firebasePostUserCollections(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      UserCollectionsResultObject =
        await mysqlDBPostUserCollections(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      UserCollectionsResultObject =
        await mysqlDBPostUserCollections(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      UserCollectionsResultObject =
        await supabasePostUserCollections(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    UserCollectionsResultObject =
      await supabasePostUserCollections(payload);
  }

  return UserCollectionsResultObject;
};

/*
 * Creates a new UserCollections resource
 *
 * @param req : Request - UserCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const userCollectionsPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['UserCollections']
    #swagger.description = 'Endpoint to create a new UserCollections resource.'
    #swagger.summary = 'Creates a new UserCollections resource.'

    #swagger.path = '/models/user-collections'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the UserCollections resource.',
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
      payloadSupportsUserCollectionsInsertInterface(payload)
    ) {
      // Compose the UserCollections request object
      const UserCollectionsData: IUserCollectionsInsert =
      {
				collection_id: payload.collection_id,
				fid: payload.fid,
				user_collection_created_at: payload.user_collection_created_at,
				user_collection_id: payload.user_collection_id,
				user_collection_updated_at: payload.user_collection_updated_at,
				user_collection_uuid: payload.user_collection_uuid,
				user_id: payload.user_id,
      };

      // Insert the UserCollections resource into the database
      let UserCollectionsResultObject:
        | IUserCollectionsRow
        | any
        | null;

      // Execute https request
      UserCollectionsResultObject =
        apiPOSTUserCollections(
          req,
          UserCollectionsData
        );

      /* #swagger.responses[201] = {
        description: 'UserCollections resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/UserCollections'
          }
          model: 'UserCollections',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "UserCollections resource created successfully.",
        UserCollectionsResultObject,
        "UserCollections",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/user-collections". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'UserCollections',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/user-collections". Missing or invalid parameters.',
        req.body,
        "UserCollections",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the user-collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'UserCollections',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the user-collections resource.",
      error,
      "UserCollections",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a UserCollections resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUserCollectionsUpdate interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const supabasePutUserCollections = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a UserCollections resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUserCollectionsUpdate interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const mongoDBPutUserCollections = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a UserCollections resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUserCollectionsUpdate interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const firebasePutUserCollections = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a UserCollections resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUserCollectionsUpdate interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const mysqlDBPutUserCollections = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUserCollectionsUpdate interface.
 * @returns IUserCollectionsRow data type object
 *
 */
const apiPUTUserCollections = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsInsert | any | null> => {
  // Intitialize the UserCollectionsResultObject variable
  let UserCollectionsResultObject: IUserCollectionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      UserCollectionsResultObject =
        await supabasePutUserCollections(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      UserCollectionsResultObject =
        await mongoDBPutUserCollections(
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
      UserCollectionsResultObject =
        await mongoDBPutUserCollections(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      UserCollectionsResultObject =
        await firebasePutUserCollections(
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
      UserCollectionsResultObject =
        await firebasePutUserCollections(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      UserCollectionsResultObject =
        await mysqlDBPutUserCollections(
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
      UserCollectionsResultObject =
        await mysqlDBPutUserCollections(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      UserCollectionsResultObject =
        await supabasePutUserCollections(
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
    UserCollectionsResultObject =
      await supabasePutUserCollections(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return UserCollectionsResultObject;
};

/*
 * Updates an existing UserCollections resource
 *
 * @param req : Request - UserCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const userCollectionsPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['UserCollections']
    #swagger.description = 'Endpoint to update a new UserCollections resource.'
    #swagger.summary = 'Updates a new UserCollections resource.'

    #swagger.path = '/models/user-collections'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['user_collection_uuid'] = {
      in: 'path',
      description: 'UserCollections user_collection_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the UserCollections resource.',
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
    const { user_collection_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      user_collection_uuid &&
      payload &&
      payloadSupportsUserCollectionsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the UserCollections resource
      const uuid: string = user_collection_uuid;

      // Compose the UserCollections request object
      const UserCollectionsData: IUserCollectionsRow = {};
      
				if('collection_id' in payload){ UserCollectionsData.collection_id = payload.collection_id; }
				if('fid' in payload){ UserCollectionsData.fid = payload.fid; }
				if('user_collection_created_at' in payload){ UserCollectionsData.user_collection_created_at = payload.user_collection_created_at; }
				if('user_collection_id' in payload){ UserCollectionsData.user_collection_id = payload.user_collection_id; }
				if('user_collection_updated_at' in payload){ UserCollectionsData.user_collection_updated_at = payload.user_collection_updated_at; }
				if('user_collection_uuid' in payload){ UserCollectionsData.user_collection_uuid = payload.user_collection_uuid; }
				if('user_id' in payload){ UserCollectionsData.user_id = payload.user_id; }

      // Gets the UserCollections resource from the database
      let UserCollectionsResultObject:
        | IUserCollectionsRow
        | any
        | null = apiGETUserCollections(
          req,
          "user_collection_uuid",
          uuid
        );

      if (!UserCollectionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'UserCollections resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'UserCollections',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "UserCollections",
          "PUT"
        );
      }

      // Execute https request
      UserCollectionsResultObject =
        apiPUTUserCollections(
          req,
          UserCollectionsData,
          uuid,
          "user_collection_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'UserCollections resource updated successfully.',
        schema: {
          $ref: '#/definitions/UserCollections'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "UserCollections resource updated successfully.",
        UserCollectionsResultObject,
        "UserCollections",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/user-collections" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'UserCollections',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "UserCollections",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the user-collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'UserCollections',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the user-collections resource.",
      error,
      "UserCollections",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing UserCollections resource partially
 *
 * @param req : Request - UserCollections partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const userCollectionsPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['UserCollections']
    #swagger.description = 'Endpoint to update a new UserCollections resource.'
    #swagger.summary = 'Updates a new UserCollections resource.'

    #swagger.path = '/models/user-collections'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['user_collection_uuid'] = {
      in: 'path',
      description: 'UserCollections user_collection_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the UserCollections resource.',
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
    const { user_collection_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      user_collection_uuid &&
      payload &&
      payloadSupportsUserCollectionsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the UserCollections resource
      const uuid: string = user_collection_uuid;

      // Compose the UserCollections request object
      const UserCollectionsData: IUserCollectionsRow = {};
      
				if('collection_id' in payload){ UserCollectionsData.collection_id = payload.collection_id; }
				if('fid' in payload){ UserCollectionsData.fid = payload.fid; }
				if('user_collection_created_at' in payload){ UserCollectionsData.user_collection_created_at = payload.user_collection_created_at; }
				if('user_collection_id' in payload){ UserCollectionsData.user_collection_id = payload.user_collection_id; }
				if('user_collection_updated_at' in payload){ UserCollectionsData.user_collection_updated_at = payload.user_collection_updated_at; }
				if('user_collection_uuid' in payload){ UserCollectionsData.user_collection_uuid = payload.user_collection_uuid; }
				if('user_id' in payload){ UserCollectionsData.user_id = payload.user_id; }

      // Gets the UserCollections resource from the database
      let UserCollectionsResultObject:
        | IUserCollectionsRow
        | any
        | null = apiGETUserCollections(
          req,
          "user_collection_uuid",
          uuid
        );

      if (!UserCollectionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'UserCollections resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'UserCollections',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "UserCollections",
          "PATCH"
        );
      }

      // Execute https request
      UserCollectionsResultObject =
        apiPUTUserCollections(
          req,
          UserCollectionsData,
          uuid,
          "user_collection_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'UserCollections resource updated successfully.',
        schema: {
          $ref: '#/definitions/UserCollections'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "UserCollections resource updated successfully.",
        UserCollectionsResultObject,
        "UserCollections",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/user-collections" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'UserCollections',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "UserCollections",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the user-collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'UserCollections',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the user-collections resource.",
      error,
      "UserCollections",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a UserCollections resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IUserCollectionsRow data type object
 *
 */
const supabaseDeleteUserCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a UserCollections resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IUserCollectionsRow data type object
 *
 */
const mongoDBDeleteUserCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a UserCollections resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IUserCollectionsRow data type object
 *
 */
const firebaseDeleteUserCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a UserCollections resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IUserCollectionsRow data type object
 *
 */
const mysqlDBDeleteUserCollections = async (
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IUserCollectionsRow data type object
 *
 */
const apiDELETEUserCollections = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IUserCollectionsInsert | any | null> => {
  // Intitialize the UserCollectionsResultObject variable
  let UserCollectionsResultObject: IUserCollectionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      UserCollectionsResultObject =
        await supabaseDeleteUserCollections(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      UserCollectionsResultObject =
        await mongoDBDeleteUserCollections(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      UserCollectionsResultObject =
        await mongoDBDeleteUserCollections(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      UserCollectionsResultObject =
        await firebaseDeleteUserCollections(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      UserCollectionsResultObject =
        await firebaseDeleteUserCollections(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      UserCollectionsResultObject =
        await mysqlDBDeleteUserCollections(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      UserCollectionsResultObject =
        await mysqlDBDeleteUserCollections(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      UserCollectionsResultObject =
        await supabaseDeleteUserCollections(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    UserCollectionsResultObject =
      await supabaseDeleteUserCollections(columnValue, columnName);
  }

  return UserCollectionsResultObject;
};

/*
 * Deletes an existing UserCollections resource
 *
 * @param req : Request - UserCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const userCollectionsDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['UserCollections']
    #swagger.description = 'Endpoint to delete a new UserCollections resource.'
    #swagger.summary = 'Updates a new UserCollections resource.'

    #swagger.path = '/models/user-collections'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['user_collection_uuid'] = {
      in: 'path',
      description: 'UserCollections user_collection_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the UserCollections resource.',
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
    const { user_collection_uuid } = req.params;

    // If all the parameters are available, its a go
    if (user_collection_uuid) {
      // Get the uuid to identify the UserCollections resource
      const uuid: string = user_collection_uuid;

      // Gets the UserCollections resource from the database
      let UserCollectionsResultObject:
        | IUserCollectionsRow
        | any
        | null = apiGETUserCollections(
          req,
          "user_collection_uuid",
          uuid
        );

      if (!UserCollectionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'UserCollections resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'UserCollections',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "UserCollections",
          "PATCH"
        );
      }

      // Execute https request
      UserCollectionsResultObject =
        apiDELETEUserCollections(req, uuid, "user_collection_uuid");

      /* #swagger.responses[201] = {
        description: 'UserCollections resource deleted successfully.',
        schema: {
          'user_collection_uuid': 'user_collection_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "UserCollections resource deleted successfully.",
        UserCollectionsResultObject,
        "UserCollections",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/user-collections" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'UserCollections',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "UserCollections",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the user-collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'UserCollections',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the user-collections resource.",
      error,
      "UserCollections",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of UserCollections without the response body.
 *
 * @param req : Request - UserCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const userCollectionsHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['UserCollections']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of UserCollections without the response body'
  
      #swagger.path = '/models/user-collections'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the UserCollections resource.',
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
            description: 'Could not perform a HEAD request at the "/models/user-collections" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'UserCollections',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "UserCollections",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the user-collections resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'UserCollections',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the user-collections resource.",
      error,
      "UserCollections",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - UserCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const userCollectionsTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['UserCollections']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/user-collections'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the UserCollections resource.',
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
        "UserCollections",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/user-collections" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'UserCollections',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "UserCollections",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the user-collections resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'UserCollections',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the user-collections resource.",
      error,
      "UserCollections",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - UserCollections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const userCollectionsOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['UserCollections']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/user-collections'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the UserCollections resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/user-collections" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'UserCollections',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "UserCollections",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the user-collections resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'UserCollections',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the user-collections resource.",
      error,
      "UserCollections",
      "OPTIONS"
    );
  }

  // #swagger.end
};
