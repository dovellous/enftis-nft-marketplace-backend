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
  IUsersInsert,
  IUsersRow,
  IUsersUpdate
} from "./models/UsersTypesDefinitions";

import { UsersSupabaseCls } from "./models/UsersSupabaseCls";
import { UsersMongoDBCls } from "./models/UsersMongoDBCls";
import { UsersFirebaseCls } from "./models/UsersFirebaseCls";
import { UsersMySQLDBCls } from "./models/UsersMySQLDBCls";
import { UsersDTO } from "./models/UsersDTO";

export const payloadSupportsUsersRowInterface: any = (
  payload: any
): payload is IUsersRow => {
  return !!payload?.Users.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsUsersInsertInterface: any = (
  payload: any
): payload is IUsersInsert => {
  return !!payload?.Users
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsUsersUpdateInterface: any = (
  payload: any
): payload is IUsersUpdate => {
  return !!payload?.Users
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new UsersSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IUsersUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new UsersMongoDBCls().insertARow(payload);
          new UsersFirebaseCls().insertARow(payload);
          new UsersMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new UsersMongoDBCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
            
          );
          new UsersFirebaseCls().updateMatchingRows(
            payload,
            "user_uuid",
            payload.user_uuid
          );
          new UsersMySQLDBCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          break;
        }

        case "patch": {
          new UsersMongoDBCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          new UsersFirebaseCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          new UsersMySQLDBCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          break;
        }

        case "delete": {
          new UsersMongoDBCls().deleteMatchingRows(
            "user_uuid",
            payload.user_uuid
          );
          new UsersFirebaseCls().deleteMatchingRows(
            "user_uuid",
            payload.user_uuid
          );
          new UsersMySQLDBCls().deleteMatchingRows(
            "user_uuid",
            payload.user_uuid
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
const mongoDBDatabaseClass: any = new UsersMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IUsersUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new UsersSupabaseCls().insertARow(payload);
          new UsersFirebaseCls().insertARow(payload);
          new UsersMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new UsersSupabaseCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          new UsersFirebaseCls().updateMatchingRows(
            payload,
            "user_uuid",
            payload.user_uuid
          );
          new UsersMySQLDBCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          break;
        }

        case "patch": {
          new UsersSupabaseCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          new UsersFirebaseCls().updateMatchingRows(
            payload,
            "user_uuid",
            payload.user_uuid
          );
          new UsersMySQLDBCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          break;
        }

        case "delete": {
          new UsersSupabaseCls().deleteMatchingRows(
            "user_uuid",
            payload.user_uuid
          );
          new UsersFirebaseCls().deleteMatchingRows(
            "user_uuid",
            payload.user_uuid
          );
          new UsersMySQLDBCls().deleteMatchingRows(
            "user_uuid",
            payload.user_uuid
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
  new UsersSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IUsersUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new UsersSupabaseCls().insertARow(payload);
          new UsersMongoDBCls().insertARow(payload);
          new UsersMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new UsersSupabaseCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          new UsersMongoDBCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          new UsersMySQLDBCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          break;
        }

        case "patch": {
          new UsersSupabaseCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          new UsersMongoDBCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          new UsersMySQLDBCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          break;
        }

        case "delete": {
          new UsersSupabaseCls().deleteMatchingRows(
            "user_uuid",
            payload.user_uuid
          );
          new UsersMongoDBCls().deleteMatchingRows(
            "user_uuid",
            payload.user_uuid
          );
          new UsersMySQLDBCls().deleteMatchingRows(
            "user_uuid",
            payload.user_uuid
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
const mySQLDatabaseClass: any = new UsersSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IUsersUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new UsersSupabaseCls().insertARow(payload);
          new UsersMongoDBCls().insertARow(payload);
          new UsersFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new UsersSupabaseCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          new UsersMongoDBCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          new UsersFirebaseCls().updateMatchingRows(
            payload,
            "user_uuid",
            payload.user_uuid
          );
          break;
        }

        case "patch": {
          new UsersSupabaseCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          new UsersMongoDBCls().updateMatchingRows(
            payload,
            payload.user_uuid,
            "user_uuid"
          );
          new UsersFirebaseCls().updateMatchingRows(
            payload,
            "user_uuid",
            payload.user_uuid
          );
          break;
        }

        case "delete": {
          new UsersSupabaseCls().deleteMatchingRows(
            "user_uuid",
            payload.user_uuid
          );
          new UsersMongoDBCls().deleteMatchingRows(
            "user_uuid",
            payload.user_uuid
          );
          new UsersFirebaseCls().deleteMatchingRows(
            "user_uuid",
            payload.user_uuid
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
 * Gets, gets or edits a Users resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IUsersGets interface.
 * @returns IUsersRow data type object
 *
 */
const supabaseGetUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IUsersRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Users resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IUsersGets interface.
 * @returns IUsersRow data type object
 *
 */
const mongoDBGetUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IUsersRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Users resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IUsersGets interface.
 * @returns IUsersRow data type object
 *
 */
const firebaseGetUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IUsersRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Users resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IUsersGets interface.
 * @returns IUsersRow data type object
 *
 */
const mysqlDBGetUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IUsersRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IUsersGets interface.
 * @returns IUsersRow data type object
 *
 */
const apiGETUsers = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IUsersRow | any | null> => {
  // Intitialize the UsersResultObject variable
  let UsersResultObject: IUsersRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      UsersResultObject =
        await supabaseGetUsers(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      UsersResultObject =
        await mongoDBGetUsers(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      UsersResultObject =
        await mongoDBGetUsers(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      UsersResultObject =
        await firebaseGetUsers(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      UsersResultObject =
        await firebaseGetUsers(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      UsersResultObject =
        await mysqlDBGetUsers(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      UsersResultObject =
        await mysqlDBGetUsers(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      UsersResultObject =
        await supabaseGetUsers(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    UsersResultObject =
      await supabaseGetUsers(columnValue, columnName);
  }

  return UsersResultObject;
};

/*
 * Gets an existing Users resource
 *
 * @param req : Request - Users request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const usersGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Users']
    #swagger.description = 'Endpoint to get a new Users resource.'
    #swagger.summary = 'Gets an existing Users resource.'

    #swagger.path = '/models/users'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['user_uuid'] = {
      in: 'path',
      description: 'Users user_uuid key identifier used to get the resource.',
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
    const { user_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the Users resource
      const uuid: string = user_uuid;

      let UsersResultObject:
        | IUsersRow
        | Array<IUsersRow>
        | any
        | null;

      if (user_uuid) {
        // Gets the Users resource from the database
        UsersResultObject =
          apiGETUsers(req, "user_uuid,", uuid);
      } else {
        // Gets all the models from the Users resource
        UsersResultObject =
          apiGETUsers(req);
      }

      if (!UsersResultObject) {
        /* #swagger.responses[404] = {
          description: 'Users resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Users',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Users resource was not found.",
          UsersResultObject,
          "Users",
          "PUT"
        );
      }

      // Execute https request
      UsersResultObject =
        apiPUTUsers(
          req,
          UsersResultObject,
          uuid,
          "user_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Users resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Users'
          }
          model: 'Users',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        UsersResultObject,
        "Users",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/users", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'Users',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/users", Missing or invalid parameters.',
        req.body,
        "Users",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the users resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'Users',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the users resource.",
      error,
      "Users",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a Users resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUsersInsert interface.
 * @returns IUsersRow data type object
 *
 */
const supabasePostUsers = async (
  payload: any
): Promise<IUsersInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Users resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUsersInsert interface.
 * @returns IUsersRow data type object
 *
 */
const mongoDBPostUsers = async (
  payload: any
): Promise<IUsersRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Users resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUsersInsert interface.
 * @returns IUsersRow data type object
 *
 */
const firebasePostUsers = async (
  payload: any
): Promise<IUsersInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Users resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUsersInsert interface.
 * @returns IUsersRow data type object
 *
 */
const mysqlDBPostUsers = async (
  payload: any
): Promise<IUsersInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Users resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUsersInsert interface.
 * @returns IUsersRow data type object
 *
 */
const apiPOSTUsers = async (
  req: any,
  payload: any
): Promise<IUsersInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the Users resource into the database
  let UsersResultObject:
    | IUsersRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      UsersResultObject =
        await supabasePostUsers(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      UsersResultObject =
        await mongoDBPostUsers(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      UsersResultObject =
        await mongoDBPostUsers(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      UsersResultObject =
        await firebasePostUsers(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      UsersResultObject =
        await firebasePostUsers(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      UsersResultObject =
        await mysqlDBPostUsers(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      UsersResultObject =
        await mysqlDBPostUsers(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      UsersResultObject =
        await supabasePostUsers(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    UsersResultObject =
      await supabasePostUsers(payload);
  }

  return UsersResultObject;
};

/*
 * Creates a new Users resource
 *
 * @param req : Request - Users request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const usersPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Users']
    #swagger.description = 'Endpoint to create a new Users resource.'
    #swagger.summary = 'Creates a new Users resource.'

    #swagger.path = '/models/users'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the Users resource.',
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
      payloadSupportsUsersInsertInterface(payload)
    ) {
      // Compose the Users request object
      const UsersData: IUsersInsert =
      {
				email: payload.email,
				email_verified: payload.email_verified,
				fid: payload.fid,
				firebase_provider_data: payload.firebase_provider_data,
				first_name: payload.first_name,
				last_name: payload.last_name,
				organization_id: payload.organization_id,
				password: payload.password,
				phone_number: payload.phone_number,
				phone_number_verified: payload.phone_number_verified,
				photo_url: payload.photo_url,
				socket_id: payload.socket_id,
				supabase_provider: payload.supabase_provider,
				user_access_levels: payload.user_access_levels,
				user_country: payload.user_country,
				user_created_at: payload.user_created_at,
				user_default_role: payload.user_default_role,
				user_dob: payload.user_dob,
				user_gender: payload.user_gender,
				user_id: payload.user_id,
				user_is_active: payload.user_is_active,
				user_last_login: payload.user_last_login,
				user_last_seen: payload.user_last_seen,
				user_updated_at: payload.user_updated_at,
				user_uuid: payload.user_uuid,
				username: payload.username,
      };

      // Insert the Users resource into the database
      let UsersResultObject:
        | IUsersRow
        | any
        | null;

      // Execute https request
      UsersResultObject =
        apiPOSTUsers(
          req,
          UsersData
        );

      /* #swagger.responses[201] = {
        description: 'Users resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Users'
          }
          model: 'Users',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Users resource created successfully.",
        UsersResultObject,
        "Users",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/users". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'Users',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/users". Missing or invalid parameters.',
        req.body,
        "Users",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the users resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'Users',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the users resource.",
      error,
      "Users",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a Users resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUsersUpdate interface.
 * @returns IUsersRow data type object
 *
 */
const supabasePutUsers = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IUsersInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Users resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUsersUpdate interface.
 * @returns IUsersRow data type object
 *
 */
const mongoDBPutUsers = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IUsersRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Users resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUsersUpdate interface.
 * @returns IUsersRow data type object
 *
 */
const firebasePutUsers = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IUsersInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Users resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUsersUpdate interface.
 * @returns IUsersRow data type object
 *
 */
const mysqlDBPutUsers = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IUsersInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IUsersUpdate interface.
 * @returns IUsersRow data type object
 *
 */
const apiPUTUsers = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IUsersInsert | any | null> => {
  // Intitialize the UsersResultObject variable
  let UsersResultObject: IUsersRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      UsersResultObject =
        await supabasePutUsers(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      UsersResultObject =
        await mongoDBPutUsers(
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
      UsersResultObject =
        await mongoDBPutUsers(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      UsersResultObject =
        await firebasePutUsers(
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
      UsersResultObject =
        await firebasePutUsers(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      UsersResultObject =
        await mysqlDBPutUsers(
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
      UsersResultObject =
        await mysqlDBPutUsers(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      UsersResultObject =
        await supabasePutUsers(
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
    UsersResultObject =
      await supabasePutUsers(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return UsersResultObject;
};

/*
 * Updates an existing Users resource
 *
 * @param req : Request - Users request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const usersPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Users']
    #swagger.description = 'Endpoint to update a new Users resource.'
    #swagger.summary = 'Updates a new Users resource.'

    #swagger.path = '/models/users'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['user_uuid'] = {
      in: 'path',
      description: 'Users user_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Users resource.',
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
    const { user_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      user_uuid &&
      payload &&
      payloadSupportsUsersUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Users resource
      const uuid: string = user_uuid;

      // Compose the Users request object
      const UsersData: IUsersRow = {};
      
				if('email' in payload){ UsersData.email = payload.email; }
				if('email_verified' in payload){ UsersData.email_verified = payload.email_verified; }
				if('fid' in payload){ UsersData.fid = payload.fid; }
				if('firebase_provider_data' in payload){ UsersData.firebase_provider_data = payload.firebase_provider_data; }
				if('first_name' in payload){ UsersData.first_name = payload.first_name; }
				if('last_name' in payload){ UsersData.last_name = payload.last_name; }
				if('organization_id' in payload){ UsersData.organization_id = payload.organization_id; }
				if('password' in payload){ UsersData.password = payload.password; }
				if('phone_number' in payload){ UsersData.phone_number = payload.phone_number; }
				if('phone_number_verified' in payload){ UsersData.phone_number_verified = payload.phone_number_verified; }
				if('photo_url' in payload){ UsersData.photo_url = payload.photo_url; }
				if('socket_id' in payload){ UsersData.socket_id = payload.socket_id; }
				if('supabase_provider' in payload){ UsersData.supabase_provider = payload.supabase_provider; }
				if('user_access_levels' in payload){ UsersData.user_access_levels = payload.user_access_levels; }
				if('user_country' in payload){ UsersData.user_country = payload.user_country; }
				if('user_created_at' in payload){ UsersData.user_created_at = payload.user_created_at; }
				if('user_default_role' in payload){ UsersData.user_default_role = payload.user_default_role; }
				if('user_dob' in payload){ UsersData.user_dob = payload.user_dob; }
				if('user_gender' in payload){ UsersData.user_gender = payload.user_gender; }
				if('user_id' in payload){ UsersData.user_id = payload.user_id; }
				if('user_is_active' in payload){ UsersData.user_is_active = payload.user_is_active; }
				if('user_last_login' in payload){ UsersData.user_last_login = payload.user_last_login; }
				if('user_last_seen' in payload){ UsersData.user_last_seen = payload.user_last_seen; }
				if('user_updated_at' in payload){ UsersData.user_updated_at = payload.user_updated_at; }
				if('user_uuid' in payload){ UsersData.user_uuid = payload.user_uuid; }
				if('username' in payload){ UsersData.username = payload.username; }

      // Gets the Users resource from the database
      let UsersResultObject:
        | IUsersRow
        | any
        | null = apiGETUsers(
          req,
          "user_uuid",
          uuid
        );

      if (!UsersResultObject) {
        /* #swagger.responses[404] = {
          description: 'Users resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Users',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Users",
          "PUT"
        );
      }

      // Execute https request
      UsersResultObject =
        apiPUTUsers(
          req,
          UsersData,
          uuid,
          "user_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Users resource updated successfully.',
        schema: {
          $ref: '#/definitions/Users'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Users resource updated successfully.",
        UsersResultObject,
        "Users",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/users" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Users',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Users",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the users resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Users',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the users resource.",
      error,
      "Users",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing Users resource partially
 *
 * @param req : Request - Users partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const usersPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Users']
    #swagger.description = 'Endpoint to update a new Users resource.'
    #swagger.summary = 'Updates a new Users resource.'

    #swagger.path = '/models/users'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['user_uuid'] = {
      in: 'path',
      description: 'Users user_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Users resource.',
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
    const { user_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      user_uuid &&
      payload &&
      payloadSupportsUsersUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Users resource
      const uuid: string = user_uuid;

      // Compose the Users request object
      const UsersData: IUsersRow = {};
      
				if('email' in payload){ UsersData.email = payload.email; }
				if('email_verified' in payload){ UsersData.email_verified = payload.email_verified; }
				if('fid' in payload){ UsersData.fid = payload.fid; }
				if('firebase_provider_data' in payload){ UsersData.firebase_provider_data = payload.firebase_provider_data; }
				if('first_name' in payload){ UsersData.first_name = payload.first_name; }
				if('last_name' in payload){ UsersData.last_name = payload.last_name; }
				if('organization_id' in payload){ UsersData.organization_id = payload.organization_id; }
				if('password' in payload){ UsersData.password = payload.password; }
				if('phone_number' in payload){ UsersData.phone_number = payload.phone_number; }
				if('phone_number_verified' in payload){ UsersData.phone_number_verified = payload.phone_number_verified; }
				if('photo_url' in payload){ UsersData.photo_url = payload.photo_url; }
				if('socket_id' in payload){ UsersData.socket_id = payload.socket_id; }
				if('supabase_provider' in payload){ UsersData.supabase_provider = payload.supabase_provider; }
				if('user_access_levels' in payload){ UsersData.user_access_levels = payload.user_access_levels; }
				if('user_country' in payload){ UsersData.user_country = payload.user_country; }
				if('user_created_at' in payload){ UsersData.user_created_at = payload.user_created_at; }
				if('user_default_role' in payload){ UsersData.user_default_role = payload.user_default_role; }
				if('user_dob' in payload){ UsersData.user_dob = payload.user_dob; }
				if('user_gender' in payload){ UsersData.user_gender = payload.user_gender; }
				if('user_id' in payload){ UsersData.user_id = payload.user_id; }
				if('user_is_active' in payload){ UsersData.user_is_active = payload.user_is_active; }
				if('user_last_login' in payload){ UsersData.user_last_login = payload.user_last_login; }
				if('user_last_seen' in payload){ UsersData.user_last_seen = payload.user_last_seen; }
				if('user_updated_at' in payload){ UsersData.user_updated_at = payload.user_updated_at; }
				if('user_uuid' in payload){ UsersData.user_uuid = payload.user_uuid; }
				if('username' in payload){ UsersData.username = payload.username; }

      // Gets the Users resource from the database
      let UsersResultObject:
        | IUsersRow
        | any
        | null = apiGETUsers(
          req,
          "user_uuid",
          uuid
        );

      if (!UsersResultObject) {
        /* #swagger.responses[404] = {
          description: 'Users resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Users',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Users",
          "PATCH"
        );
      }

      // Execute https request
      UsersResultObject =
        apiPUTUsers(
          req,
          UsersData,
          uuid,
          "user_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Users resource updated successfully.',
        schema: {
          $ref: '#/definitions/Users'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Users resource updated successfully.",
        UsersResultObject,
        "Users",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/users" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Users',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Users",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the users resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Users',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the users resource.",
      error,
      "Users",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a Users resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IUsersRow data type object
 *
 */
const supabaseDeleteUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IUsersInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Users resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IUsersRow data type object
 *
 */
const mongoDBDeleteUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IUsersRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a Users resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IUsersRow data type object
 *
 */
const firebaseDeleteUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IUsersInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Users resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IUsersRow data type object
 *
 */
const mysqlDBDeleteUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IUsersInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IUsersRow data type object
 *
 */
const apiDELETEUsers = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IUsersInsert | any | null> => {
  // Intitialize the UsersResultObject variable
  let UsersResultObject: IUsersRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      UsersResultObject =
        await supabaseDeleteUsers(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      UsersResultObject =
        await mongoDBDeleteUsers(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      UsersResultObject =
        await mongoDBDeleteUsers(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      UsersResultObject =
        await firebaseDeleteUsers(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      UsersResultObject =
        await firebaseDeleteUsers(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      UsersResultObject =
        await mysqlDBDeleteUsers(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      UsersResultObject =
        await mysqlDBDeleteUsers(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      UsersResultObject =
        await supabaseDeleteUsers(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    UsersResultObject =
      await supabaseDeleteUsers(columnValue, columnName);
  }

  return UsersResultObject;
};

/*
 * Deletes an existing Users resource
 *
 * @param req : Request - Users request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const usersDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Users']
    #swagger.description = 'Endpoint to delete a new Users resource.'
    #swagger.summary = 'Updates a new Users resource.'

    #swagger.path = '/models/users'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['user_uuid'] = {
      in: 'path',
      description: 'Users user_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the Users resource.',
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
    const { user_uuid } = req.params;

    // If all the parameters are available, its a go
    if (user_uuid) {
      // Get the uuid to identify the Users resource
      const uuid: string = user_uuid;

      // Gets the Users resource from the database
      let UsersResultObject:
        | IUsersRow
        | any
        | null = apiGETUsers(
          req,
          "user_uuid",
          uuid
        );

      if (!UsersResultObject) {
        /* #swagger.responses[404] = {
          description: 'Users resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Users',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Users",
          "PATCH"
        );
      }

      // Execute https request
      UsersResultObject =
        apiDELETEUsers(req, uuid, "user_uuid");

      /* #swagger.responses[201] = {
        description: 'Users resource deleted successfully.',
        schema: {
          'user_uuid': 'user_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Users resource deleted successfully.",
        UsersResultObject,
        "Users",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/users" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Users',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Users",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the users resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Users',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the users resource.",
      error,
      "Users",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of Users without the response body.
 *
 * @param req : Request - Users request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const usersHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Users']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of Users without the response body'
  
      #swagger.path = '/models/users'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the Users resource.',
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
            description: 'Could not perform a HEAD request at the "/models/users" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Users',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Users",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the users resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Users',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the users resource.",
      error,
      "Users",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - Users request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const usersTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Users']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/users'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Users resource.',
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
        "Users",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/users" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Users',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Users",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the users resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Users',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the users resource.",
      error,
      "Users",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - Users request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const usersOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Users']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/users'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Users resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/users" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Users',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Users",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the users resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Users',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the users resource.",
      error,
      "Users",
      "OPTIONS"
    );
  }

  // #swagger.end
};
