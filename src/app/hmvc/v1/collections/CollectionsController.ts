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
  ICollectionsInsert,
  ICollectionsRow,
  ICollectionsUpdate
} from "./models/CollectionsTypesDefinitions";

import { CollectionsSupabaseCls } from "./models/CollectionsSupabaseCls";
import { CollectionsMongoDBCls } from "./models/CollectionsMongoDBCls";
import { CollectionsFirebaseCls } from "./models/CollectionsFirebaseCls";
import { CollectionsMySQLDBCls } from "./models/CollectionsMySQLDBCls";
import { CollectionsDTO } from "./models/CollectionsDTO";

export const payloadSupportsCollectionsRowInterface: any = (
  payload: any
): payload is ICollectionsRow => {
  return !!payload?.Collections.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsCollectionsInsertInterface: any = (
  payload: any
): payload is ICollectionsInsert => {
  return !!payload?.Collections
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsCollectionsUpdateInterface: any = (
  payload: any
): payload is ICollectionsUpdate => {
  return !!payload?.Collections
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new CollectionsSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: ICollectionsUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new CollectionsMongoDBCls().insertARow(payload);
          new CollectionsFirebaseCls().insertARow(payload);
          new CollectionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new CollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
            
          );
          new CollectionsFirebaseCls().updateMatchingRows(
            payload,
            "collection_uuid",
            payload.collection_uuid
          );
          new CollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          break;
        }

        case "patch": {
          new CollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          new CollectionsFirebaseCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          new CollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          break;
        }

        case "delete": {
          new CollectionsMongoDBCls().deleteMatchingRows(
            "collection_uuid",
            payload.collection_uuid
          );
          new CollectionsFirebaseCls().deleteMatchingRows(
            "collection_uuid",
            payload.collection_uuid
          );
          new CollectionsMySQLDBCls().deleteMatchingRows(
            "collection_uuid",
            payload.collection_uuid
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
const mongoDBDatabaseClass: any = new CollectionsMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: ICollectionsUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new CollectionsSupabaseCls().insertARow(payload);
          new CollectionsFirebaseCls().insertARow(payload);
          new CollectionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new CollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          new CollectionsFirebaseCls().updateMatchingRows(
            payload,
            "collection_uuid",
            payload.collection_uuid
          );
          new CollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          break;
        }

        case "patch": {
          new CollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          new CollectionsFirebaseCls().updateMatchingRows(
            payload,
            "collection_uuid",
            payload.collection_uuid
          );
          new CollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          break;
        }

        case "delete": {
          new CollectionsSupabaseCls().deleteMatchingRows(
            "collection_uuid",
            payload.collection_uuid
          );
          new CollectionsFirebaseCls().deleteMatchingRows(
            "collection_uuid",
            payload.collection_uuid
          );
          new CollectionsMySQLDBCls().deleteMatchingRows(
            "collection_uuid",
            payload.collection_uuid
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
  new CollectionsSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: ICollectionsUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new CollectionsSupabaseCls().insertARow(payload);
          new CollectionsMongoDBCls().insertARow(payload);
          new CollectionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new CollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          new CollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          new CollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          break;
        }

        case "patch": {
          new CollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          new CollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          new CollectionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          break;
        }

        case "delete": {
          new CollectionsSupabaseCls().deleteMatchingRows(
            "collection_uuid",
            payload.collection_uuid
          );
          new CollectionsMongoDBCls().deleteMatchingRows(
            "collection_uuid",
            payload.collection_uuid
          );
          new CollectionsMySQLDBCls().deleteMatchingRows(
            "collection_uuid",
            payload.collection_uuid
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
const mySQLDatabaseClass: any = new CollectionsSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: ICollectionsUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new CollectionsSupabaseCls().insertARow(payload);
          new CollectionsMongoDBCls().insertARow(payload);
          new CollectionsFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new CollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          new CollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          new CollectionsFirebaseCls().updateMatchingRows(
            payload,
            "collection_uuid",
            payload.collection_uuid
          );
          break;
        }

        case "patch": {
          new CollectionsSupabaseCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          new CollectionsMongoDBCls().updateMatchingRows(
            payload,
            payload.collection_uuid,
            "collection_uuid"
          );
          new CollectionsFirebaseCls().updateMatchingRows(
            payload,
            "collection_uuid",
            payload.collection_uuid
          );
          break;
        }

        case "delete": {
          new CollectionsSupabaseCls().deleteMatchingRows(
            "collection_uuid",
            payload.collection_uuid
          );
          new CollectionsMongoDBCls().deleteMatchingRows(
            "collection_uuid",
            payload.collection_uuid
          );
          new CollectionsFirebaseCls().deleteMatchingRows(
            "collection_uuid",
            payload.collection_uuid
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
 * Gets, gets or edits a Collections resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ICollectionsGets interface.
 * @returns ICollectionsRow data type object
 *
 */
const supabaseGetCollections = async (
  columnValue: any,
  columnName?: string
): Promise<ICollectionsRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Collections resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ICollectionsGets interface.
 * @returns ICollectionsRow data type object
 *
 */
const mongoDBGetCollections = async (
  columnValue: any,
  columnName?: string
): Promise<ICollectionsRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Collections resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ICollectionsGets interface.
 * @returns ICollectionsRow data type object
 *
 */
const firebaseGetCollections = async (
  columnValue: any,
  columnName?: string
): Promise<ICollectionsRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Collections resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ICollectionsGets interface.
 * @returns ICollectionsRow data type object
 *
 */
const mysqlDBGetCollections = async (
  columnValue: any,
  columnName?: string
): Promise<ICollectionsRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ICollectionsGets interface.
 * @returns ICollectionsRow data type object
 *
 */
const apiGETCollections = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<ICollectionsRow | any | null> => {
  // Intitialize the CollectionsResultObject variable
  let CollectionsResultObject: ICollectionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      CollectionsResultObject =
        await supabaseGetCollections(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      CollectionsResultObject =
        await mongoDBGetCollections(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      CollectionsResultObject =
        await mongoDBGetCollections(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      CollectionsResultObject =
        await firebaseGetCollections(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      CollectionsResultObject =
        await firebaseGetCollections(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      CollectionsResultObject =
        await mysqlDBGetCollections(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      CollectionsResultObject =
        await mysqlDBGetCollections(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      CollectionsResultObject =
        await supabaseGetCollections(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    CollectionsResultObject =
      await supabaseGetCollections(columnValue, columnName);
  }

  return CollectionsResultObject;
};

/*
 * Gets an existing Collections resource
 *
 * @param req : Request - Collections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const collectionsGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Collections']
    #swagger.description = 'Endpoint to get a new Collections resource.'
    #swagger.summary = 'Gets an existing Collections resource.'

    #swagger.path = '/models/collections'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['collection_uuid'] = {
      in: 'path',
      description: 'Collections collection_uuid key identifier used to get the resource.',
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
    const { collection_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the Collections resource
      const uuid: string = collection_uuid;

      let CollectionsResultObject:
        | ICollectionsRow
        | Array<ICollectionsRow>
        | any
        | null;

      if (collection_uuid) {
        // Gets the Collections resource from the database
        CollectionsResultObject =
          apiGETCollections(req, "collection_uuid,", uuid);
      } else {
        // Gets all the models from the Collections resource
        CollectionsResultObject =
          apiGETCollections(req);
      }

      if (!CollectionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Collections resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Collections',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Collections resource was not found.",
          CollectionsResultObject,
          "Collections",
          "PUT"
        );
      }

      // Execute https request
      CollectionsResultObject =
        apiPUTCollections(
          req,
          CollectionsResultObject,
          uuid,
          "collection_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Collections resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Collections'
          }
          model: 'Collections',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        CollectionsResultObject,
        "Collections",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/collections", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'Collections',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/collections", Missing or invalid parameters.',
        req.body,
        "Collections",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'Collections',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the collections resource.",
      error,
      "Collections",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a Collections resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICollectionsInsert interface.
 * @returns ICollectionsRow data type object
 *
 */
const supabasePostCollections = async (
  payload: any
): Promise<ICollectionsInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Collections resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICollectionsInsert interface.
 * @returns ICollectionsRow data type object
 *
 */
const mongoDBPostCollections = async (
  payload: any
): Promise<ICollectionsRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Collections resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICollectionsInsert interface.
 * @returns ICollectionsRow data type object
 *
 */
const firebasePostCollections = async (
  payload: any
): Promise<ICollectionsInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Collections resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICollectionsInsert interface.
 * @returns ICollectionsRow data type object
 *
 */
const mysqlDBPostCollections = async (
  payload: any
): Promise<ICollectionsInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Collections resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICollectionsInsert interface.
 * @returns ICollectionsRow data type object
 *
 */
const apiPOSTCollections = async (
  req: any,
  payload: any
): Promise<ICollectionsInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the Collections resource into the database
  let CollectionsResultObject:
    | ICollectionsRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      CollectionsResultObject =
        await supabasePostCollections(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      CollectionsResultObject =
        await mongoDBPostCollections(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      CollectionsResultObject =
        await mongoDBPostCollections(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      CollectionsResultObject =
        await firebasePostCollections(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      CollectionsResultObject =
        await firebasePostCollections(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      CollectionsResultObject =
        await mysqlDBPostCollections(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      CollectionsResultObject =
        await mysqlDBPostCollections(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      CollectionsResultObject =
        await supabasePostCollections(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    CollectionsResultObject =
      await supabasePostCollections(payload);
  }

  return CollectionsResultObject;
};

/*
 * Creates a new Collections resource
 *
 * @param req : Request - Collections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const collectionsPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Collections']
    #swagger.description = 'Endpoint to create a new Collections resource.'
    #swagger.summary = 'Creates a new Collections resource.'

    #swagger.path = '/models/collections'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the Collections resource.',
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
      payloadSupportsCollectionsInsertInterface(payload)
    ) {
      // Compose the Collections request object
      const CollectionsData: ICollectionsInsert =
      {
				category_id: payload.category_id,
				collection_banner: payload.collection_banner,
				collection_created_at: payload.collection_created_at,
				collection_description: payload.collection_description,
				collection_id: payload.collection_id,
				collection_name: payload.collection_name,
				collection_thumbnail: payload.collection_thumbnail,
				collection_updated_at: payload.collection_updated_at,
				collection_uuid: payload.collection_uuid,
				fid: payload.fid,
				user_id: payload.user_id,
      };

      // Insert the Collections resource into the database
      let CollectionsResultObject:
        | ICollectionsRow
        | any
        | null;

      // Execute https request
      CollectionsResultObject =
        apiPOSTCollections(
          req,
          CollectionsData
        );

      /* #swagger.responses[201] = {
        description: 'Collections resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Collections'
          }
          model: 'Collections',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Collections resource created successfully.",
        CollectionsResultObject,
        "Collections",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/collections". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'Collections',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/collections". Missing or invalid parameters.',
        req.body,
        "Collections",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'Collections',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the collections resource.",
      error,
      "Collections",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a Collections resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICollectionsUpdate interface.
 * @returns ICollectionsRow data type object
 *
 */
const supabasePutCollections = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ICollectionsInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Collections resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICollectionsUpdate interface.
 * @returns ICollectionsRow data type object
 *
 */
const mongoDBPutCollections = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ICollectionsRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Collections resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICollectionsUpdate interface.
 * @returns ICollectionsRow data type object
 *
 */
const firebasePutCollections = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ICollectionsInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Collections resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICollectionsUpdate interface.
 * @returns ICollectionsRow data type object
 *
 */
const mysqlDBPutCollections = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ICollectionsInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICollectionsUpdate interface.
 * @returns ICollectionsRow data type object
 *
 */
const apiPUTCollections = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ICollectionsInsert | any | null> => {
  // Intitialize the CollectionsResultObject variable
  let CollectionsResultObject: ICollectionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      CollectionsResultObject =
        await supabasePutCollections(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      CollectionsResultObject =
        await mongoDBPutCollections(
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
      CollectionsResultObject =
        await mongoDBPutCollections(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      CollectionsResultObject =
        await firebasePutCollections(
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
      CollectionsResultObject =
        await firebasePutCollections(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      CollectionsResultObject =
        await mysqlDBPutCollections(
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
      CollectionsResultObject =
        await mysqlDBPutCollections(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      CollectionsResultObject =
        await supabasePutCollections(
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
    CollectionsResultObject =
      await supabasePutCollections(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return CollectionsResultObject;
};

/*
 * Updates an existing Collections resource
 *
 * @param req : Request - Collections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const collectionsPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Collections']
    #swagger.description = 'Endpoint to update a new Collections resource.'
    #swagger.summary = 'Updates a new Collections resource.'

    #swagger.path = '/models/collections'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['collection_uuid'] = {
      in: 'path',
      description: 'Collections collection_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Collections resource.',
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
    const { collection_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      collection_uuid &&
      payload &&
      payloadSupportsCollectionsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Collections resource
      const uuid: string = collection_uuid;

      // Compose the Collections request object
      const CollectionsData: ICollectionsRow = {};
      
				if('category_id' in payload){ CollectionsData.category_id = payload.category_id; }
				if('collection_banner' in payload){ CollectionsData.collection_banner = payload.collection_banner; }
				if('collection_created_at' in payload){ CollectionsData.collection_created_at = payload.collection_created_at; }
				if('collection_description' in payload){ CollectionsData.collection_description = payload.collection_description; }
				if('collection_id' in payload){ CollectionsData.collection_id = payload.collection_id; }
				if('collection_name' in payload){ CollectionsData.collection_name = payload.collection_name; }
				if('collection_thumbnail' in payload){ CollectionsData.collection_thumbnail = payload.collection_thumbnail; }
				if('collection_updated_at' in payload){ CollectionsData.collection_updated_at = payload.collection_updated_at; }
				if('collection_uuid' in payload){ CollectionsData.collection_uuid = payload.collection_uuid; }
				if('fid' in payload){ CollectionsData.fid = payload.fid; }
				if('user_id' in payload){ CollectionsData.user_id = payload.user_id; }

      // Gets the Collections resource from the database
      let CollectionsResultObject:
        | ICollectionsRow
        | any
        | null = apiGETCollections(
          req,
          "collection_uuid",
          uuid
        );

      if (!CollectionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Collections resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Collections',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Collections",
          "PUT"
        );
      }

      // Execute https request
      CollectionsResultObject =
        apiPUTCollections(
          req,
          CollectionsData,
          uuid,
          "collection_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Collections resource updated successfully.',
        schema: {
          $ref: '#/definitions/Collections'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Collections resource updated successfully.",
        CollectionsResultObject,
        "Collections",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/collections" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Collections',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Collections",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Collections',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the collections resource.",
      error,
      "Collections",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing Collections resource partially
 *
 * @param req : Request - Collections partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const collectionsPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Collections']
    #swagger.description = 'Endpoint to update a new Collections resource.'
    #swagger.summary = 'Updates a new Collections resource.'

    #swagger.path = '/models/collections'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['collection_uuid'] = {
      in: 'path',
      description: 'Collections collection_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Collections resource.',
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
    const { collection_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      collection_uuid &&
      payload &&
      payloadSupportsCollectionsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Collections resource
      const uuid: string = collection_uuid;

      // Compose the Collections request object
      const CollectionsData: ICollectionsRow = {};
      
				if('category_id' in payload){ CollectionsData.category_id = payload.category_id; }
				if('collection_banner' in payload){ CollectionsData.collection_banner = payload.collection_banner; }
				if('collection_created_at' in payload){ CollectionsData.collection_created_at = payload.collection_created_at; }
				if('collection_description' in payload){ CollectionsData.collection_description = payload.collection_description; }
				if('collection_id' in payload){ CollectionsData.collection_id = payload.collection_id; }
				if('collection_name' in payload){ CollectionsData.collection_name = payload.collection_name; }
				if('collection_thumbnail' in payload){ CollectionsData.collection_thumbnail = payload.collection_thumbnail; }
				if('collection_updated_at' in payload){ CollectionsData.collection_updated_at = payload.collection_updated_at; }
				if('collection_uuid' in payload){ CollectionsData.collection_uuid = payload.collection_uuid; }
				if('fid' in payload){ CollectionsData.fid = payload.fid; }
				if('user_id' in payload){ CollectionsData.user_id = payload.user_id; }

      // Gets the Collections resource from the database
      let CollectionsResultObject:
        | ICollectionsRow
        | any
        | null = apiGETCollections(
          req,
          "collection_uuid",
          uuid
        );

      if (!CollectionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Collections resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Collections',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Collections",
          "PATCH"
        );
      }

      // Execute https request
      CollectionsResultObject =
        apiPUTCollections(
          req,
          CollectionsData,
          uuid,
          "collection_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Collections resource updated successfully.',
        schema: {
          $ref: '#/definitions/Collections'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Collections resource updated successfully.",
        CollectionsResultObject,
        "Collections",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/collections" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Collections',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Collections",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Collections',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the collections resource.",
      error,
      "Collections",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a Collections resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns ICollectionsRow data type object
 *
 */
const supabaseDeleteCollections = async (
  columnValue: any,
  columnName?: string
): Promise<ICollectionsInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Collections resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns ICollectionsRow data type object
 *
 */
const mongoDBDeleteCollections = async (
  columnValue: any,
  columnName?: string
): Promise<ICollectionsRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a Collections resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns ICollectionsRow data type object
 *
 */
const firebaseDeleteCollections = async (
  columnValue: any,
  columnName?: string
): Promise<ICollectionsInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Collections resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns ICollectionsRow data type object
 *
 */
const mysqlDBDeleteCollections = async (
  columnValue: any,
  columnName?: string
): Promise<ICollectionsInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns ICollectionsRow data type object
 *
 */
const apiDELETECollections = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<ICollectionsInsert | any | null> => {
  // Intitialize the CollectionsResultObject variable
  let CollectionsResultObject: ICollectionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      CollectionsResultObject =
        await supabaseDeleteCollections(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      CollectionsResultObject =
        await mongoDBDeleteCollections(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      CollectionsResultObject =
        await mongoDBDeleteCollections(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      CollectionsResultObject =
        await firebaseDeleteCollections(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      CollectionsResultObject =
        await firebaseDeleteCollections(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      CollectionsResultObject =
        await mysqlDBDeleteCollections(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      CollectionsResultObject =
        await mysqlDBDeleteCollections(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      CollectionsResultObject =
        await supabaseDeleteCollections(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    CollectionsResultObject =
      await supabaseDeleteCollections(columnValue, columnName);
  }

  return CollectionsResultObject;
};

/*
 * Deletes an existing Collections resource
 *
 * @param req : Request - Collections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const collectionsDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Collections']
    #swagger.description = 'Endpoint to delete a new Collections resource.'
    #swagger.summary = 'Updates a new Collections resource.'

    #swagger.path = '/models/collections'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['collection_uuid'] = {
      in: 'path',
      description: 'Collections collection_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the Collections resource.',
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
    const { collection_uuid } = req.params;

    // If all the parameters are available, its a go
    if (collection_uuid) {
      // Get the uuid to identify the Collections resource
      const uuid: string = collection_uuid;

      // Gets the Collections resource from the database
      let CollectionsResultObject:
        | ICollectionsRow
        | any
        | null = apiGETCollections(
          req,
          "collection_uuid",
          uuid
        );

      if (!CollectionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Collections resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Collections',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Collections",
          "PATCH"
        );
      }

      // Execute https request
      CollectionsResultObject =
        apiDELETECollections(req, uuid, "collection_uuid");

      /* #swagger.responses[201] = {
        description: 'Collections resource deleted successfully.',
        schema: {
          'collection_uuid': 'collection_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Collections resource deleted successfully.",
        CollectionsResultObject,
        "Collections",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/collections" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Collections',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Collections",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the collections resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Collections',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the collections resource.",
      error,
      "Collections",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of Collections without the response body.
 *
 * @param req : Request - Collections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const collectionsHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Collections']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of Collections without the response body'
  
      #swagger.path = '/models/collections'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the Collections resource.',
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
            description: 'Could not perform a HEAD request at the "/models/collections" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Collections',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Collections",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the collections resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Collections',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the collections resource.",
      error,
      "Collections",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - Collections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const collectionsTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Collections']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/collections'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Collections resource.',
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
        "Collections",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/collections" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Collections',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Collections",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the collections resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Collections',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the collections resource.",
      error,
      "Collections",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - Collections request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const collectionsOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Collections']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/collections'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Collections resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/collections" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Collections',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Collections",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the collections resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Collections',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the collections resource.",
      error,
      "Collections",
      "OPTIONS"
    );
  }

  // #swagger.end
};
