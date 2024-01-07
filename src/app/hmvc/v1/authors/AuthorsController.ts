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
  IAuthorsInsert,
  IAuthorsRow,
  IAuthorsUpdate
} from "./models/AuthorsTypesDefinitions";

import { AuthorsSupabaseCls } from "./models/AuthorsSupabaseCls";
import { AuthorsMongoDBCls } from "./models/AuthorsMongoDBCls";
import { AuthorsFirebaseCls } from "./models/AuthorsFirebaseCls";
import { AuthorsMySQLDBCls } from "./models/AuthorsMySQLDBCls";
import { AuthorsDTO } from "./models/AuthorsDTO";

export const payloadSupportsAuthorsRowInterface: any = (
  payload: any
): payload is IAuthorsRow => {
  return !!payload?.Authors.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsAuthorsInsertInterface: any = (
  payload: any
): payload is IAuthorsInsert => {
  return !!payload?.Authors
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsAuthorsUpdateInterface: any = (
  payload: any
): payload is IAuthorsUpdate => {
  return !!payload?.Authors
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new AuthorsSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IAuthorsUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new AuthorsMongoDBCls().insertARow(payload);
          new AuthorsFirebaseCls().insertARow(payload);
          new AuthorsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new AuthorsMongoDBCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
            
          );
          new AuthorsFirebaseCls().updateMatchingRows(
            payload,
            "author_uuid",
            payload.author_uuid
          );
          new AuthorsMySQLDBCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          break;
        }

        case "patch": {
          new AuthorsMongoDBCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          new AuthorsFirebaseCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          new AuthorsMySQLDBCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          break;
        }

        case "delete": {
          new AuthorsMongoDBCls().deleteMatchingRows(
            "author_uuid",
            payload.author_uuid
          );
          new AuthorsFirebaseCls().deleteMatchingRows(
            "author_uuid",
            payload.author_uuid
          );
          new AuthorsMySQLDBCls().deleteMatchingRows(
            "author_uuid",
            payload.author_uuid
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
const mongoDBDatabaseClass: any = new AuthorsMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IAuthorsUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new AuthorsSupabaseCls().insertARow(payload);
          new AuthorsFirebaseCls().insertARow(payload);
          new AuthorsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new AuthorsSupabaseCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          new AuthorsFirebaseCls().updateMatchingRows(
            payload,
            "author_uuid",
            payload.author_uuid
          );
          new AuthorsMySQLDBCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          break;
        }

        case "patch": {
          new AuthorsSupabaseCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          new AuthorsFirebaseCls().updateMatchingRows(
            payload,
            "author_uuid",
            payload.author_uuid
          );
          new AuthorsMySQLDBCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          break;
        }

        case "delete": {
          new AuthorsSupabaseCls().deleteMatchingRows(
            "author_uuid",
            payload.author_uuid
          );
          new AuthorsFirebaseCls().deleteMatchingRows(
            "author_uuid",
            payload.author_uuid
          );
          new AuthorsMySQLDBCls().deleteMatchingRows(
            "author_uuid",
            payload.author_uuid
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
  new AuthorsSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IAuthorsUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new AuthorsSupabaseCls().insertARow(payload);
          new AuthorsMongoDBCls().insertARow(payload);
          new AuthorsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new AuthorsSupabaseCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          new AuthorsMongoDBCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          new AuthorsMySQLDBCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          break;
        }

        case "patch": {
          new AuthorsSupabaseCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          new AuthorsMongoDBCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          new AuthorsMySQLDBCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          break;
        }

        case "delete": {
          new AuthorsSupabaseCls().deleteMatchingRows(
            "author_uuid",
            payload.author_uuid
          );
          new AuthorsMongoDBCls().deleteMatchingRows(
            "author_uuid",
            payload.author_uuid
          );
          new AuthorsMySQLDBCls().deleteMatchingRows(
            "author_uuid",
            payload.author_uuid
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
const mySQLDatabaseClass: any = new AuthorsSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IAuthorsUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new AuthorsSupabaseCls().insertARow(payload);
          new AuthorsMongoDBCls().insertARow(payload);
          new AuthorsFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new AuthorsSupabaseCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          new AuthorsMongoDBCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          new AuthorsFirebaseCls().updateMatchingRows(
            payload,
            "author_uuid",
            payload.author_uuid
          );
          break;
        }

        case "patch": {
          new AuthorsSupabaseCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          new AuthorsMongoDBCls().updateMatchingRows(
            payload,
            payload.author_uuid,
            "author_uuid"
          );
          new AuthorsFirebaseCls().updateMatchingRows(
            payload,
            "author_uuid",
            payload.author_uuid
          );
          break;
        }

        case "delete": {
          new AuthorsSupabaseCls().deleteMatchingRows(
            "author_uuid",
            payload.author_uuid
          );
          new AuthorsMongoDBCls().deleteMatchingRows(
            "author_uuid",
            payload.author_uuid
          );
          new AuthorsFirebaseCls().deleteMatchingRows(
            "author_uuid",
            payload.author_uuid
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
 * Gets, gets or edits a Authors resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuthorsGets interface.
 * @returns IAuthorsRow data type object
 *
 */
const supabaseGetAuthors = async (
  columnValue: any,
  columnName?: string
): Promise<IAuthorsRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Authors resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuthorsGets interface.
 * @returns IAuthorsRow data type object
 *
 */
const mongoDBGetAuthors = async (
  columnValue: any,
  columnName?: string
): Promise<IAuthorsRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Authors resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuthorsGets interface.
 * @returns IAuthorsRow data type object
 *
 */
const firebaseGetAuthors = async (
  columnValue: any,
  columnName?: string
): Promise<IAuthorsRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Authors resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuthorsGets interface.
 * @returns IAuthorsRow data type object
 *
 */
const mysqlDBGetAuthors = async (
  columnValue: any,
  columnName?: string
): Promise<IAuthorsRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IAuthorsGets interface.
 * @returns IAuthorsRow data type object
 *
 */
const apiGETAuthors = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IAuthorsRow | any | null> => {
  // Intitialize the AuthorsResultObject variable
  let AuthorsResultObject: IAuthorsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      AuthorsResultObject =
        await supabaseGetAuthors(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      AuthorsResultObject =
        await mongoDBGetAuthors(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      AuthorsResultObject =
        await mongoDBGetAuthors(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      AuthorsResultObject =
        await firebaseGetAuthors(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      AuthorsResultObject =
        await firebaseGetAuthors(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      AuthorsResultObject =
        await mysqlDBGetAuthors(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      AuthorsResultObject =
        await mysqlDBGetAuthors(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      AuthorsResultObject =
        await supabaseGetAuthors(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    AuthorsResultObject =
      await supabaseGetAuthors(columnValue, columnName);
  }

  return AuthorsResultObject;
};

/*
 * Gets an existing Authors resource
 *
 * @param req : Request - Authors request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const authorsGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Authors']
    #swagger.description = 'Endpoint to get a new Authors resource.'
    #swagger.summary = 'Gets an existing Authors resource.'

    #swagger.path = '/models/authors'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['author_uuid'] = {
      in: 'path',
      description: 'Authors author_uuid key identifier used to get the resource.',
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
    const { author_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the Authors resource
      const uuid: string = author_uuid;

      let AuthorsResultObject:
        | IAuthorsRow
        | Array<IAuthorsRow>
        | any
        | null;

      if (author_uuid) {
        // Gets the Authors resource from the database
        AuthorsResultObject =
          apiGETAuthors(req, "author_uuid,", uuid);
      } else {
        // Gets all the models from the Authors resource
        AuthorsResultObject =
          apiGETAuthors(req);
      }

      if (!AuthorsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Authors resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Authors',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Authors resource was not found.",
          AuthorsResultObject,
          "Authors",
          "PUT"
        );
      }

      // Execute https request
      AuthorsResultObject =
        apiPUTAuthors(
          req,
          AuthorsResultObject,
          uuid,
          "author_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Authors resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Authors'
          }
          model: 'Authors',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        AuthorsResultObject,
        "Authors",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/authors", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'Authors',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/authors", Missing or invalid parameters.',
        req.body,
        "Authors",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the authors resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'Authors',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the authors resource.",
      error,
      "Authors",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a Authors resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuthorsInsert interface.
 * @returns IAuthorsRow data type object
 *
 */
const supabasePostAuthors = async (
  payload: any
): Promise<IAuthorsInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Authors resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuthorsInsert interface.
 * @returns IAuthorsRow data type object
 *
 */
const mongoDBPostAuthors = async (
  payload: any
): Promise<IAuthorsRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Authors resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuthorsInsert interface.
 * @returns IAuthorsRow data type object
 *
 */
const firebasePostAuthors = async (
  payload: any
): Promise<IAuthorsInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Authors resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuthorsInsert interface.
 * @returns IAuthorsRow data type object
 *
 */
const mysqlDBPostAuthors = async (
  payload: any
): Promise<IAuthorsInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Authors resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuthorsInsert interface.
 * @returns IAuthorsRow data type object
 *
 */
const apiPOSTAuthors = async (
  req: any,
  payload: any
): Promise<IAuthorsInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the Authors resource into the database
  let AuthorsResultObject:
    | IAuthorsRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      AuthorsResultObject =
        await supabasePostAuthors(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      AuthorsResultObject =
        await mongoDBPostAuthors(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      AuthorsResultObject =
        await mongoDBPostAuthors(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      AuthorsResultObject =
        await firebasePostAuthors(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      AuthorsResultObject =
        await firebasePostAuthors(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      AuthorsResultObject =
        await mysqlDBPostAuthors(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      AuthorsResultObject =
        await mysqlDBPostAuthors(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      AuthorsResultObject =
        await supabasePostAuthors(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    AuthorsResultObject =
      await supabasePostAuthors(payload);
  }

  return AuthorsResultObject;
};

/*
 * Creates a new Authors resource
 *
 * @param req : Request - Authors request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const authorsPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Authors']
    #swagger.description = 'Endpoint to create a new Authors resource.'
    #swagger.summary = 'Creates a new Authors resource.'

    #swagger.path = '/models/authors'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the Authors resource.',
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
      payloadSupportsAuthorsInsertInterface(payload)
    ) {
      // Compose the Authors request object
      const AuthorsData: IAuthorsInsert =
      {
				author_created_at: payload.author_created_at,
				author_id: payload.author_id,
				author_is_active: payload.author_is_active,
				author_is_verified: payload.author_is_verified,
				author_rating: payload.author_rating,
				author_sold_items: payload.author_sold_items,
				author_sold_value: payload.author_sold_value,
				author_updated_at: payload.author_updated_at,
				author_uuid: payload.author_uuid,
				category_id: payload.category_id,
				fid: payload.fid,
				user_id: payload.user_id,
      };

      // Insert the Authors resource into the database
      let AuthorsResultObject:
        | IAuthorsRow
        | any
        | null;

      // Execute https request
      AuthorsResultObject =
        apiPOSTAuthors(
          req,
          AuthorsData
        );

      /* #swagger.responses[201] = {
        description: 'Authors resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Authors'
          }
          model: 'Authors',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Authors resource created successfully.",
        AuthorsResultObject,
        "Authors",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/authors". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'Authors',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/authors". Missing or invalid parameters.',
        req.body,
        "Authors",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the authors resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'Authors',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the authors resource.",
      error,
      "Authors",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a Authors resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuthorsUpdate interface.
 * @returns IAuthorsRow data type object
 *
 */
const supabasePutAuthors = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuthorsInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Authors resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuthorsUpdate interface.
 * @returns IAuthorsRow data type object
 *
 */
const mongoDBPutAuthors = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuthorsRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Authors resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuthorsUpdate interface.
 * @returns IAuthorsRow data type object
 *
 */
const firebasePutAuthors = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuthorsInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Authors resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuthorsUpdate interface.
 * @returns IAuthorsRow data type object
 *
 */
const mysqlDBPutAuthors = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuthorsInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IAuthorsUpdate interface.
 * @returns IAuthorsRow data type object
 *
 */
const apiPUTAuthors = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IAuthorsInsert | any | null> => {
  // Intitialize the AuthorsResultObject variable
  let AuthorsResultObject: IAuthorsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      AuthorsResultObject =
        await supabasePutAuthors(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      AuthorsResultObject =
        await mongoDBPutAuthors(
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
      AuthorsResultObject =
        await mongoDBPutAuthors(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      AuthorsResultObject =
        await firebasePutAuthors(
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
      AuthorsResultObject =
        await firebasePutAuthors(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      AuthorsResultObject =
        await mysqlDBPutAuthors(
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
      AuthorsResultObject =
        await mysqlDBPutAuthors(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      AuthorsResultObject =
        await supabasePutAuthors(
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
    AuthorsResultObject =
      await supabasePutAuthors(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return AuthorsResultObject;
};

/*
 * Updates an existing Authors resource
 *
 * @param req : Request - Authors request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const authorsPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Authors']
    #swagger.description = 'Endpoint to update a new Authors resource.'
    #swagger.summary = 'Updates a new Authors resource.'

    #swagger.path = '/models/authors'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['author_uuid'] = {
      in: 'path',
      description: 'Authors author_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Authors resource.',
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
    const { author_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      author_uuid &&
      payload &&
      payloadSupportsAuthorsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Authors resource
      const uuid: string = author_uuid;

      // Compose the Authors request object
      const AuthorsData: IAuthorsRow = {};
      
				if('author_created_at' in payload){ AuthorsData.author_created_at = payload.author_created_at; }
				if('author_id' in payload){ AuthorsData.author_id = payload.author_id; }
				if('author_is_active' in payload){ AuthorsData.author_is_active = payload.author_is_active; }
				if('author_is_verified' in payload){ AuthorsData.author_is_verified = payload.author_is_verified; }
				if('author_rating' in payload){ AuthorsData.author_rating = payload.author_rating; }
				if('author_sold_items' in payload){ AuthorsData.author_sold_items = payload.author_sold_items; }
				if('author_sold_value' in payload){ AuthorsData.author_sold_value = payload.author_sold_value; }
				if('author_updated_at' in payload){ AuthorsData.author_updated_at = payload.author_updated_at; }
				if('author_uuid' in payload){ AuthorsData.author_uuid = payload.author_uuid; }
				if('category_id' in payload){ AuthorsData.category_id = payload.category_id; }
				if('fid' in payload){ AuthorsData.fid = payload.fid; }
				if('user_id' in payload){ AuthorsData.user_id = payload.user_id; }

      // Gets the Authors resource from the database
      let AuthorsResultObject:
        | IAuthorsRow
        | any
        | null = apiGETAuthors(
          req,
          "author_uuid",
          uuid
        );

      if (!AuthorsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Authors resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Authors',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Authors",
          "PUT"
        );
      }

      // Execute https request
      AuthorsResultObject =
        apiPUTAuthors(
          req,
          AuthorsData,
          uuid,
          "author_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Authors resource updated successfully.',
        schema: {
          $ref: '#/definitions/Authors'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Authors resource updated successfully.",
        AuthorsResultObject,
        "Authors",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/authors" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Authors',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Authors",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the authors resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Authors',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the authors resource.",
      error,
      "Authors",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing Authors resource partially
 *
 * @param req : Request - Authors partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const authorsPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Authors']
    #swagger.description = 'Endpoint to update a new Authors resource.'
    #swagger.summary = 'Updates a new Authors resource.'

    #swagger.path = '/models/authors'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['author_uuid'] = {
      in: 'path',
      description: 'Authors author_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Authors resource.',
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
    const { author_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      author_uuid &&
      payload &&
      payloadSupportsAuthorsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Authors resource
      const uuid: string = author_uuid;

      // Compose the Authors request object
      const AuthorsData: IAuthorsRow = {};
      
				if('author_created_at' in payload){ AuthorsData.author_created_at = payload.author_created_at; }
				if('author_id' in payload){ AuthorsData.author_id = payload.author_id; }
				if('author_is_active' in payload){ AuthorsData.author_is_active = payload.author_is_active; }
				if('author_is_verified' in payload){ AuthorsData.author_is_verified = payload.author_is_verified; }
				if('author_rating' in payload){ AuthorsData.author_rating = payload.author_rating; }
				if('author_sold_items' in payload){ AuthorsData.author_sold_items = payload.author_sold_items; }
				if('author_sold_value' in payload){ AuthorsData.author_sold_value = payload.author_sold_value; }
				if('author_updated_at' in payload){ AuthorsData.author_updated_at = payload.author_updated_at; }
				if('author_uuid' in payload){ AuthorsData.author_uuid = payload.author_uuid; }
				if('category_id' in payload){ AuthorsData.category_id = payload.category_id; }
				if('fid' in payload){ AuthorsData.fid = payload.fid; }
				if('user_id' in payload){ AuthorsData.user_id = payload.user_id; }

      // Gets the Authors resource from the database
      let AuthorsResultObject:
        | IAuthorsRow
        | any
        | null = apiGETAuthors(
          req,
          "author_uuid",
          uuid
        );

      if (!AuthorsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Authors resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Authors',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Authors",
          "PATCH"
        );
      }

      // Execute https request
      AuthorsResultObject =
        apiPUTAuthors(
          req,
          AuthorsData,
          uuid,
          "author_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Authors resource updated successfully.',
        schema: {
          $ref: '#/definitions/Authors'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Authors resource updated successfully.",
        AuthorsResultObject,
        "Authors",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/authors" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Authors',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Authors",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the authors resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Authors',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the authors resource.",
      error,
      "Authors",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a Authors resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuthorsRow data type object
 *
 */
const supabaseDeleteAuthors = async (
  columnValue: any,
  columnName?: string
): Promise<IAuthorsInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Authors resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuthorsRow data type object
 *
 */
const mongoDBDeleteAuthors = async (
  columnValue: any,
  columnName?: string
): Promise<IAuthorsRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a Authors resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuthorsRow data type object
 *
 */
const firebaseDeleteAuthors = async (
  columnValue: any,
  columnName?: string
): Promise<IAuthorsInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Authors resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuthorsRow data type object
 *
 */
const mysqlDBDeleteAuthors = async (
  columnValue: any,
  columnName?: string
): Promise<IAuthorsInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IAuthorsRow data type object
 *
 */
const apiDELETEAuthors = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IAuthorsInsert | any | null> => {
  // Intitialize the AuthorsResultObject variable
  let AuthorsResultObject: IAuthorsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      AuthorsResultObject =
        await supabaseDeleteAuthors(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      AuthorsResultObject =
        await mongoDBDeleteAuthors(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      AuthorsResultObject =
        await mongoDBDeleteAuthors(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      AuthorsResultObject =
        await firebaseDeleteAuthors(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      AuthorsResultObject =
        await firebaseDeleteAuthors(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      AuthorsResultObject =
        await mysqlDBDeleteAuthors(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      AuthorsResultObject =
        await mysqlDBDeleteAuthors(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      AuthorsResultObject =
        await supabaseDeleteAuthors(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    AuthorsResultObject =
      await supabaseDeleteAuthors(columnValue, columnName);
  }

  return AuthorsResultObject;
};

/*
 * Deletes an existing Authors resource
 *
 * @param req : Request - Authors request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const authorsDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Authors']
    #swagger.description = 'Endpoint to delete a new Authors resource.'
    #swagger.summary = 'Updates a new Authors resource.'

    #swagger.path = '/models/authors'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['author_uuid'] = {
      in: 'path',
      description: 'Authors author_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the Authors resource.',
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
    const { author_uuid } = req.params;

    // If all the parameters are available, its a go
    if (author_uuid) {
      // Get the uuid to identify the Authors resource
      const uuid: string = author_uuid;

      // Gets the Authors resource from the database
      let AuthorsResultObject:
        | IAuthorsRow
        | any
        | null = apiGETAuthors(
          req,
          "author_uuid",
          uuid
        );

      if (!AuthorsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Authors resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Authors',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Authors",
          "PATCH"
        );
      }

      // Execute https request
      AuthorsResultObject =
        apiDELETEAuthors(req, uuid, "author_uuid");

      /* #swagger.responses[201] = {
        description: 'Authors resource deleted successfully.',
        schema: {
          'author_uuid': 'author_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Authors resource deleted successfully.",
        AuthorsResultObject,
        "Authors",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/authors" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Authors',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Authors",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the authors resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Authors',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the authors resource.",
      error,
      "Authors",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of Authors without the response body.
 *
 * @param req : Request - Authors request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const authorsHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Authors']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of Authors without the response body'
  
      #swagger.path = '/models/authors'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the Authors resource.',
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
            description: 'Could not perform a HEAD request at the "/models/authors" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Authors',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Authors",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the authors resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Authors',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the authors resource.",
      error,
      "Authors",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - Authors request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const authorsTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Authors']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/authors'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Authors resource.',
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
        "Authors",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/authors" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Authors',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Authors",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the authors resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Authors',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the authors resource.",
      error,
      "Authors",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - Authors request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const authorsOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Authors']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/authors'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Authors resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/authors" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Authors',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Authors",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the authors resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Authors',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the authors resource.",
      error,
      "Authors",
      "OPTIONS"
    );
  }

  // #swagger.end
};
