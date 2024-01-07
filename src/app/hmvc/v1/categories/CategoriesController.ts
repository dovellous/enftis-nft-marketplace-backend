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
  ICategoriesInsert,
  ICategoriesRow,
  ICategoriesUpdate
} from "./models/CategoriesTypesDefinitions";

import { CategoriesSupabaseCls } from "./models/CategoriesSupabaseCls";
import { CategoriesMongoDBCls } from "./models/CategoriesMongoDBCls";
import { CategoriesFirebaseCls } from "./models/CategoriesFirebaseCls";
import { CategoriesMySQLDBCls } from "./models/CategoriesMySQLDBCls";
import { CategoriesDTO } from "./models/CategoriesDTO";

export const payloadSupportsCategoriesRowInterface: any = (
  payload: any
): payload is ICategoriesRow => {
  return !!payload?.Categories.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsCategoriesInsertInterface: any = (
  payload: any
): payload is ICategoriesInsert => {
  return !!payload?.Categories
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsCategoriesUpdateInterface: any = (
  payload: any
): payload is ICategoriesUpdate => {
  return !!payload?.Categories
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new CategoriesSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: ICategoriesUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new CategoriesMongoDBCls().insertARow(payload);
          new CategoriesFirebaseCls().insertARow(payload);
          new CategoriesMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new CategoriesMongoDBCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
            
          );
          new CategoriesFirebaseCls().updateMatchingRows(
            payload,
            "category_uuid",
            payload.category_uuid
          );
          new CategoriesMySQLDBCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          break;
        }

        case "patch": {
          new CategoriesMongoDBCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          new CategoriesFirebaseCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          new CategoriesMySQLDBCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          break;
        }

        case "delete": {
          new CategoriesMongoDBCls().deleteMatchingRows(
            "category_uuid",
            payload.category_uuid
          );
          new CategoriesFirebaseCls().deleteMatchingRows(
            "category_uuid",
            payload.category_uuid
          );
          new CategoriesMySQLDBCls().deleteMatchingRows(
            "category_uuid",
            payload.category_uuid
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
const mongoDBDatabaseClass: any = new CategoriesMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: ICategoriesUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new CategoriesSupabaseCls().insertARow(payload);
          new CategoriesFirebaseCls().insertARow(payload);
          new CategoriesMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new CategoriesSupabaseCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          new CategoriesFirebaseCls().updateMatchingRows(
            payload,
            "category_uuid",
            payload.category_uuid
          );
          new CategoriesMySQLDBCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          break;
        }

        case "patch": {
          new CategoriesSupabaseCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          new CategoriesFirebaseCls().updateMatchingRows(
            payload,
            "category_uuid",
            payload.category_uuid
          );
          new CategoriesMySQLDBCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          break;
        }

        case "delete": {
          new CategoriesSupabaseCls().deleteMatchingRows(
            "category_uuid",
            payload.category_uuid
          );
          new CategoriesFirebaseCls().deleteMatchingRows(
            "category_uuid",
            payload.category_uuid
          );
          new CategoriesMySQLDBCls().deleteMatchingRows(
            "category_uuid",
            payload.category_uuid
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
  new CategoriesSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: ICategoriesUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new CategoriesSupabaseCls().insertARow(payload);
          new CategoriesMongoDBCls().insertARow(payload);
          new CategoriesMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new CategoriesSupabaseCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          new CategoriesMongoDBCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          new CategoriesMySQLDBCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          break;
        }

        case "patch": {
          new CategoriesSupabaseCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          new CategoriesMongoDBCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          new CategoriesMySQLDBCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          break;
        }

        case "delete": {
          new CategoriesSupabaseCls().deleteMatchingRows(
            "category_uuid",
            payload.category_uuid
          );
          new CategoriesMongoDBCls().deleteMatchingRows(
            "category_uuid",
            payload.category_uuid
          );
          new CategoriesMySQLDBCls().deleteMatchingRows(
            "category_uuid",
            payload.category_uuid
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
const mySQLDatabaseClass: any = new CategoriesSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: ICategoriesUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new CategoriesSupabaseCls().insertARow(payload);
          new CategoriesMongoDBCls().insertARow(payload);
          new CategoriesFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new CategoriesSupabaseCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          new CategoriesMongoDBCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          new CategoriesFirebaseCls().updateMatchingRows(
            payload,
            "category_uuid",
            payload.category_uuid
          );
          break;
        }

        case "patch": {
          new CategoriesSupabaseCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          new CategoriesMongoDBCls().updateMatchingRows(
            payload,
            payload.category_uuid,
            "category_uuid"
          );
          new CategoriesFirebaseCls().updateMatchingRows(
            payload,
            "category_uuid",
            payload.category_uuid
          );
          break;
        }

        case "delete": {
          new CategoriesSupabaseCls().deleteMatchingRows(
            "category_uuid",
            payload.category_uuid
          );
          new CategoriesMongoDBCls().deleteMatchingRows(
            "category_uuid",
            payload.category_uuid
          );
          new CategoriesFirebaseCls().deleteMatchingRows(
            "category_uuid",
            payload.category_uuid
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
 * Gets, gets or edits a Categories resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ICategoriesGets interface.
 * @returns ICategoriesRow data type object
 *
 */
const supabaseGetCategories = async (
  columnValue: any,
  columnName?: string
): Promise<ICategoriesRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Categories resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ICategoriesGets interface.
 * @returns ICategoriesRow data type object
 *
 */
const mongoDBGetCategories = async (
  columnValue: any,
  columnName?: string
): Promise<ICategoriesRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Categories resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ICategoriesGets interface.
 * @returns ICategoriesRow data type object
 *
 */
const firebaseGetCategories = async (
  columnValue: any,
  columnName?: string
): Promise<ICategoriesRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Categories resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ICategoriesGets interface.
 * @returns ICategoriesRow data type object
 *
 */
const mysqlDBGetCategories = async (
  columnValue: any,
  columnName?: string
): Promise<ICategoriesRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ICategoriesGets interface.
 * @returns ICategoriesRow data type object
 *
 */
const apiGETCategories = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<ICategoriesRow | any | null> => {
  // Intitialize the CategoriesResultObject variable
  let CategoriesResultObject: ICategoriesRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      CategoriesResultObject =
        await supabaseGetCategories(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      CategoriesResultObject =
        await mongoDBGetCategories(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      CategoriesResultObject =
        await mongoDBGetCategories(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      CategoriesResultObject =
        await firebaseGetCategories(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      CategoriesResultObject =
        await firebaseGetCategories(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      CategoriesResultObject =
        await mysqlDBGetCategories(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      CategoriesResultObject =
        await mysqlDBGetCategories(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      CategoriesResultObject =
        await supabaseGetCategories(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    CategoriesResultObject =
      await supabaseGetCategories(columnValue, columnName);
  }

  return CategoriesResultObject;
};

/*
 * Gets an existing Categories resource
 *
 * @param req : Request - Categories request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const categoriesGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Categories']
    #swagger.description = 'Endpoint to get a new Categories resource.'
    #swagger.summary = 'Gets an existing Categories resource.'

    #swagger.path = '/models/categories'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['category_uuid'] = {
      in: 'path',
      description: 'Categories category_uuid key identifier used to get the resource.',
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
    const { category_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the Categories resource
      const uuid: string = category_uuid;

      let CategoriesResultObject:
        | ICategoriesRow
        | Array<ICategoriesRow>
        | any
        | null;

      if (category_uuid) {
        // Gets the Categories resource from the database
        CategoriesResultObject =
          apiGETCategories(req, "category_uuid,", uuid);
      } else {
        // Gets all the models from the Categories resource
        CategoriesResultObject =
          apiGETCategories(req);
      }

      if (!CategoriesResultObject) {
        /* #swagger.responses[404] = {
          description: 'Categories resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Categories',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Categories resource was not found.",
          CategoriesResultObject,
          "Categories",
          "PUT"
        );
      }

      // Execute https request
      CategoriesResultObject =
        apiPUTCategories(
          req,
          CategoriesResultObject,
          uuid,
          "category_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Categories resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Categories'
          }
          model: 'Categories',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        CategoriesResultObject,
        "Categories",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/categories", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'Categories',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/categories", Missing or invalid parameters.',
        req.body,
        "Categories",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the categories resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'Categories',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the categories resource.",
      error,
      "Categories",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a Categories resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICategoriesInsert interface.
 * @returns ICategoriesRow data type object
 *
 */
const supabasePostCategories = async (
  payload: any
): Promise<ICategoriesInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Categories resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICategoriesInsert interface.
 * @returns ICategoriesRow data type object
 *
 */
const mongoDBPostCategories = async (
  payload: any
): Promise<ICategoriesRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Categories resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICategoriesInsert interface.
 * @returns ICategoriesRow data type object
 *
 */
const firebasePostCategories = async (
  payload: any
): Promise<ICategoriesInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Categories resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICategoriesInsert interface.
 * @returns ICategoriesRow data type object
 *
 */
const mysqlDBPostCategories = async (
  payload: any
): Promise<ICategoriesInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Categories resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICategoriesInsert interface.
 * @returns ICategoriesRow data type object
 *
 */
const apiPOSTCategories = async (
  req: any,
  payload: any
): Promise<ICategoriesInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the Categories resource into the database
  let CategoriesResultObject:
    | ICategoriesRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      CategoriesResultObject =
        await supabasePostCategories(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      CategoriesResultObject =
        await mongoDBPostCategories(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      CategoriesResultObject =
        await mongoDBPostCategories(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      CategoriesResultObject =
        await firebasePostCategories(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      CategoriesResultObject =
        await firebasePostCategories(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      CategoriesResultObject =
        await mysqlDBPostCategories(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      CategoriesResultObject =
        await mysqlDBPostCategories(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      CategoriesResultObject =
        await supabasePostCategories(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    CategoriesResultObject =
      await supabasePostCategories(payload);
  }

  return CategoriesResultObject;
};

/*
 * Creates a new Categories resource
 *
 * @param req : Request - Categories request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const categoriesPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Categories']
    #swagger.description = 'Endpoint to create a new Categories resource.'
    #swagger.summary = 'Creates a new Categories resource.'

    #swagger.path = '/models/categories'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the Categories resource.',
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
      payloadSupportsCategoriesInsertInterface(payload)
    ) {
      // Compose the Categories request object
      const CategoriesData: ICategoriesInsert =
      {
				category_created_at: payload.category_created_at,
				category_icon: payload.category_icon,
				category_id: payload.category_id,
				category_is_active: payload.category_is_active,
				category_name: payload.category_name,
				category_parent_id: payload.category_parent_id,
				category_slug: payload.category_slug,
				category_updated_at: payload.category_updated_at,
				category_uuid: payload.category_uuid,
				fid: payload.fid,
      };

      // Insert the Categories resource into the database
      let CategoriesResultObject:
        | ICategoriesRow
        | any
        | null;

      // Execute https request
      CategoriesResultObject =
        apiPOSTCategories(
          req,
          CategoriesData
        );

      /* #swagger.responses[201] = {
        description: 'Categories resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Categories'
          }
          model: 'Categories',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Categories resource created successfully.",
        CategoriesResultObject,
        "Categories",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/categories". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'Categories',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/categories". Missing or invalid parameters.',
        req.body,
        "Categories",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the categories resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'Categories',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the categories resource.",
      error,
      "Categories",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a Categories resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICategoriesUpdate interface.
 * @returns ICategoriesRow data type object
 *
 */
const supabasePutCategories = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ICategoriesInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Categories resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICategoriesUpdate interface.
 * @returns ICategoriesRow data type object
 *
 */
const mongoDBPutCategories = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ICategoriesRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Categories resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICategoriesUpdate interface.
 * @returns ICategoriesRow data type object
 *
 */
const firebasePutCategories = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ICategoriesInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Categories resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICategoriesUpdate interface.
 * @returns ICategoriesRow data type object
 *
 */
const mysqlDBPutCategories = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ICategoriesInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ICategoriesUpdate interface.
 * @returns ICategoriesRow data type object
 *
 */
const apiPUTCategories = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ICategoriesInsert | any | null> => {
  // Intitialize the CategoriesResultObject variable
  let CategoriesResultObject: ICategoriesRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      CategoriesResultObject =
        await supabasePutCategories(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      CategoriesResultObject =
        await mongoDBPutCategories(
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
      CategoriesResultObject =
        await mongoDBPutCategories(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      CategoriesResultObject =
        await firebasePutCategories(
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
      CategoriesResultObject =
        await firebasePutCategories(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      CategoriesResultObject =
        await mysqlDBPutCategories(
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
      CategoriesResultObject =
        await mysqlDBPutCategories(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      CategoriesResultObject =
        await supabasePutCategories(
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
    CategoriesResultObject =
      await supabasePutCategories(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return CategoriesResultObject;
};

/*
 * Updates an existing Categories resource
 *
 * @param req : Request - Categories request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const categoriesPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Categories']
    #swagger.description = 'Endpoint to update a new Categories resource.'
    #swagger.summary = 'Updates a new Categories resource.'

    #swagger.path = '/models/categories'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['category_uuid'] = {
      in: 'path',
      description: 'Categories category_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Categories resource.',
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
    const { category_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      category_uuid &&
      payload &&
      payloadSupportsCategoriesUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Categories resource
      const uuid: string = category_uuid;

      // Compose the Categories request object
      const CategoriesData: ICategoriesRow = {};
      
				if('category_created_at' in payload){ CategoriesData.category_created_at = payload.category_created_at; }
				if('category_icon' in payload){ CategoriesData.category_icon = payload.category_icon; }
				if('category_id' in payload){ CategoriesData.category_id = payload.category_id; }
				if('category_is_active' in payload){ CategoriesData.category_is_active = payload.category_is_active; }
				if('category_name' in payload){ CategoriesData.category_name = payload.category_name; }
				if('category_parent_id' in payload){ CategoriesData.category_parent_id = payload.category_parent_id; }
				if('category_slug' in payload){ CategoriesData.category_slug = payload.category_slug; }
				if('category_updated_at' in payload){ CategoriesData.category_updated_at = payload.category_updated_at; }
				if('category_uuid' in payload){ CategoriesData.category_uuid = payload.category_uuid; }
				if('fid' in payload){ CategoriesData.fid = payload.fid; }

      // Gets the Categories resource from the database
      let CategoriesResultObject:
        | ICategoriesRow
        | any
        | null = apiGETCategories(
          req,
          "category_uuid",
          uuid
        );

      if (!CategoriesResultObject) {
        /* #swagger.responses[404] = {
          description: 'Categories resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Categories',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Categories",
          "PUT"
        );
      }

      // Execute https request
      CategoriesResultObject =
        apiPUTCategories(
          req,
          CategoriesData,
          uuid,
          "category_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Categories resource updated successfully.',
        schema: {
          $ref: '#/definitions/Categories'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Categories resource updated successfully.",
        CategoriesResultObject,
        "Categories",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/categories" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Categories',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Categories",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the categories resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Categories',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the categories resource.",
      error,
      "Categories",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing Categories resource partially
 *
 * @param req : Request - Categories partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const categoriesPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Categories']
    #swagger.description = 'Endpoint to update a new Categories resource.'
    #swagger.summary = 'Updates a new Categories resource.'

    #swagger.path = '/models/categories'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['category_uuid'] = {
      in: 'path',
      description: 'Categories category_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Categories resource.',
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
    const { category_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      category_uuid &&
      payload &&
      payloadSupportsCategoriesUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Categories resource
      const uuid: string = category_uuid;

      // Compose the Categories request object
      const CategoriesData: ICategoriesRow = {};
      
				if('category_created_at' in payload){ CategoriesData.category_created_at = payload.category_created_at; }
				if('category_icon' in payload){ CategoriesData.category_icon = payload.category_icon; }
				if('category_id' in payload){ CategoriesData.category_id = payload.category_id; }
				if('category_is_active' in payload){ CategoriesData.category_is_active = payload.category_is_active; }
				if('category_name' in payload){ CategoriesData.category_name = payload.category_name; }
				if('category_parent_id' in payload){ CategoriesData.category_parent_id = payload.category_parent_id; }
				if('category_slug' in payload){ CategoriesData.category_slug = payload.category_slug; }
				if('category_updated_at' in payload){ CategoriesData.category_updated_at = payload.category_updated_at; }
				if('category_uuid' in payload){ CategoriesData.category_uuid = payload.category_uuid; }
				if('fid' in payload){ CategoriesData.fid = payload.fid; }

      // Gets the Categories resource from the database
      let CategoriesResultObject:
        | ICategoriesRow
        | any
        | null = apiGETCategories(
          req,
          "category_uuid",
          uuid
        );

      if (!CategoriesResultObject) {
        /* #swagger.responses[404] = {
          description: 'Categories resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Categories',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Categories",
          "PATCH"
        );
      }

      // Execute https request
      CategoriesResultObject =
        apiPUTCategories(
          req,
          CategoriesData,
          uuid,
          "category_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Categories resource updated successfully.',
        schema: {
          $ref: '#/definitions/Categories'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Categories resource updated successfully.",
        CategoriesResultObject,
        "Categories",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/categories" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Categories',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Categories",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the categories resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Categories',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the categories resource.",
      error,
      "Categories",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a Categories resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns ICategoriesRow data type object
 *
 */
const supabaseDeleteCategories = async (
  columnValue: any,
  columnName?: string
): Promise<ICategoriesInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Categories resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns ICategoriesRow data type object
 *
 */
const mongoDBDeleteCategories = async (
  columnValue: any,
  columnName?: string
): Promise<ICategoriesRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a Categories resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns ICategoriesRow data type object
 *
 */
const firebaseDeleteCategories = async (
  columnValue: any,
  columnName?: string
): Promise<ICategoriesInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Categories resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns ICategoriesRow data type object
 *
 */
const mysqlDBDeleteCategories = async (
  columnValue: any,
  columnName?: string
): Promise<ICategoriesInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns ICategoriesRow data type object
 *
 */
const apiDELETECategories = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<ICategoriesInsert | any | null> => {
  // Intitialize the CategoriesResultObject variable
  let CategoriesResultObject: ICategoriesRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      CategoriesResultObject =
        await supabaseDeleteCategories(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      CategoriesResultObject =
        await mongoDBDeleteCategories(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      CategoriesResultObject =
        await mongoDBDeleteCategories(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      CategoriesResultObject =
        await firebaseDeleteCategories(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      CategoriesResultObject =
        await firebaseDeleteCategories(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      CategoriesResultObject =
        await mysqlDBDeleteCategories(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      CategoriesResultObject =
        await mysqlDBDeleteCategories(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      CategoriesResultObject =
        await supabaseDeleteCategories(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    CategoriesResultObject =
      await supabaseDeleteCategories(columnValue, columnName);
  }

  return CategoriesResultObject;
};

/*
 * Deletes an existing Categories resource
 *
 * @param req : Request - Categories request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const categoriesDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Categories']
    #swagger.description = 'Endpoint to delete a new Categories resource.'
    #swagger.summary = 'Updates a new Categories resource.'

    #swagger.path = '/models/categories'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['category_uuid'] = {
      in: 'path',
      description: 'Categories category_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the Categories resource.',
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
    const { category_uuid } = req.params;

    // If all the parameters are available, its a go
    if (category_uuid) {
      // Get the uuid to identify the Categories resource
      const uuid: string = category_uuid;

      // Gets the Categories resource from the database
      let CategoriesResultObject:
        | ICategoriesRow
        | any
        | null = apiGETCategories(
          req,
          "category_uuid",
          uuid
        );

      if (!CategoriesResultObject) {
        /* #swagger.responses[404] = {
          description: 'Categories resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Categories',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Categories",
          "PATCH"
        );
      }

      // Execute https request
      CategoriesResultObject =
        apiDELETECategories(req, uuid, "category_uuid");

      /* #swagger.responses[201] = {
        description: 'Categories resource deleted successfully.',
        schema: {
          'category_uuid': 'category_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Categories resource deleted successfully.",
        CategoriesResultObject,
        "Categories",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/categories" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Categories',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Categories",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the categories resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Categories',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the categories resource.",
      error,
      "Categories",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of Categories without the response body.
 *
 * @param req : Request - Categories request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const categoriesHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Categories']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of Categories without the response body'
  
      #swagger.path = '/models/categories'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the Categories resource.',
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
            description: 'Could not perform a HEAD request at the "/models/categories" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Categories',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Categories",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the categories resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Categories',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the categories resource.",
      error,
      "Categories",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - Categories request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const categoriesTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Categories']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/categories'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Categories resource.',
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
        "Categories",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/categories" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Categories',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Categories",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the categories resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Categories',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the categories resource.",
      error,
      "Categories",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - Categories request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const categoriesOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Categories']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/categories'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Categories resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/categories" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Categories',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Categories",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the categories resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Categories',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the categories resource.",
      error,
      "Categories",
      "OPTIONS"
    );
  }

  // #swagger.end
};
