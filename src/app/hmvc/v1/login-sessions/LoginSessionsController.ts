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
  ILoginSessionsInsert,
  ILoginSessionsRow,
  ILoginSessionsUpdate
} from "./models/LoginSessionsTypesDefinitions";

import { LoginSessionsSupabaseCls } from "./models/LoginSessionsSupabaseCls";
import { LoginSessionsMongoDBCls } from "./models/LoginSessionsMongoDBCls";
import { LoginSessionsFirebaseCls } from "./models/LoginSessionsFirebaseCls";
import { LoginSessionsMySQLDBCls } from "./models/LoginSessionsMySQLDBCls";
import { LoginSessionsDTO } from "./models/LoginSessionsDTO";

export const payloadSupportsLoginSessionsRowInterface: any = (
  payload: any
): payload is ILoginSessionsRow => {
  return !!payload?.LoginSessions.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsLoginSessionsInsertInterface: any = (
  payload: any
): payload is ILoginSessionsInsert => {
  return !!payload?.LoginSessions
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsLoginSessionsUpdateInterface: any = (
  payload: any
): payload is ILoginSessionsUpdate => {
  return !!payload?.LoginSessions
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new LoginSessionsSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: ILoginSessionsUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new LoginSessionsMongoDBCls().insertARow(payload);
          new LoginSessionsFirebaseCls().insertARow(payload);
          new LoginSessionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new LoginSessionsMongoDBCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
            
          );
          new LoginSessionsFirebaseCls().updateMatchingRows(
            payload,
            "session_uuid",
            payload.session_uuid
          );
          new LoginSessionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          break;
        }

        case "patch": {
          new LoginSessionsMongoDBCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          new LoginSessionsFirebaseCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          new LoginSessionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          break;
        }

        case "delete": {
          new LoginSessionsMongoDBCls().deleteMatchingRows(
            "session_uuid",
            payload.session_uuid
          );
          new LoginSessionsFirebaseCls().deleteMatchingRows(
            "session_uuid",
            payload.session_uuid
          );
          new LoginSessionsMySQLDBCls().deleteMatchingRows(
            "session_uuid",
            payload.session_uuid
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
const mongoDBDatabaseClass: any = new LoginSessionsMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: ILoginSessionsUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new LoginSessionsSupabaseCls().insertARow(payload);
          new LoginSessionsFirebaseCls().insertARow(payload);
          new LoginSessionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new LoginSessionsSupabaseCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          new LoginSessionsFirebaseCls().updateMatchingRows(
            payload,
            "session_uuid",
            payload.session_uuid
          );
          new LoginSessionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          break;
        }

        case "patch": {
          new LoginSessionsSupabaseCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          new LoginSessionsFirebaseCls().updateMatchingRows(
            payload,
            "session_uuid",
            payload.session_uuid
          );
          new LoginSessionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          break;
        }

        case "delete": {
          new LoginSessionsSupabaseCls().deleteMatchingRows(
            "session_uuid",
            payload.session_uuid
          );
          new LoginSessionsFirebaseCls().deleteMatchingRows(
            "session_uuid",
            payload.session_uuid
          );
          new LoginSessionsMySQLDBCls().deleteMatchingRows(
            "session_uuid",
            payload.session_uuid
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
  new LoginSessionsSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: ILoginSessionsUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new LoginSessionsSupabaseCls().insertARow(payload);
          new LoginSessionsMongoDBCls().insertARow(payload);
          new LoginSessionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new LoginSessionsSupabaseCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          new LoginSessionsMongoDBCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          new LoginSessionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          break;
        }

        case "patch": {
          new LoginSessionsSupabaseCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          new LoginSessionsMongoDBCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          new LoginSessionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          break;
        }

        case "delete": {
          new LoginSessionsSupabaseCls().deleteMatchingRows(
            "session_uuid",
            payload.session_uuid
          );
          new LoginSessionsMongoDBCls().deleteMatchingRows(
            "session_uuid",
            payload.session_uuid
          );
          new LoginSessionsMySQLDBCls().deleteMatchingRows(
            "session_uuid",
            payload.session_uuid
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
const mySQLDatabaseClass: any = new LoginSessionsSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: ILoginSessionsUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new LoginSessionsSupabaseCls().insertARow(payload);
          new LoginSessionsMongoDBCls().insertARow(payload);
          new LoginSessionsFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new LoginSessionsSupabaseCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          new LoginSessionsMongoDBCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          new LoginSessionsFirebaseCls().updateMatchingRows(
            payload,
            "session_uuid",
            payload.session_uuid
          );
          break;
        }

        case "patch": {
          new LoginSessionsSupabaseCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          new LoginSessionsMongoDBCls().updateMatchingRows(
            payload,
            payload.session_uuid,
            "session_uuid"
          );
          new LoginSessionsFirebaseCls().updateMatchingRows(
            payload,
            "session_uuid",
            payload.session_uuid
          );
          break;
        }

        case "delete": {
          new LoginSessionsSupabaseCls().deleteMatchingRows(
            "session_uuid",
            payload.session_uuid
          );
          new LoginSessionsMongoDBCls().deleteMatchingRows(
            "session_uuid",
            payload.session_uuid
          );
          new LoginSessionsFirebaseCls().deleteMatchingRows(
            "session_uuid",
            payload.session_uuid
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
 * Gets, gets or edits a LoginSessions resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ILoginSessionsGets interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const supabaseGetLoginSessions = async (
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a LoginSessions resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ILoginSessionsGets interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const mongoDBGetLoginSessions = async (
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a LoginSessions resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ILoginSessionsGets interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const firebaseGetLoginSessions = async (
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a LoginSessions resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ILoginSessionsGets interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const mysqlDBGetLoginSessions = async (
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the ILoginSessionsGets interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const apiGETLoginSessions = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<ILoginSessionsRow | any | null> => {
  // Intitialize the LoginSessionsResultObject variable
  let LoginSessionsResultObject: ILoginSessionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      LoginSessionsResultObject =
        await supabaseGetLoginSessions(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      LoginSessionsResultObject =
        await mongoDBGetLoginSessions(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      LoginSessionsResultObject =
        await mongoDBGetLoginSessions(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      LoginSessionsResultObject =
        await firebaseGetLoginSessions(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      LoginSessionsResultObject =
        await firebaseGetLoginSessions(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      LoginSessionsResultObject =
        await mysqlDBGetLoginSessions(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      LoginSessionsResultObject =
        await mysqlDBGetLoginSessions(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      LoginSessionsResultObject =
        await supabaseGetLoginSessions(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    LoginSessionsResultObject =
      await supabaseGetLoginSessions(columnValue, columnName);
  }

  return LoginSessionsResultObject;
};

/*
 * Gets an existing LoginSessions resource
 *
 * @param req : Request - LoginSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const loginSessionsGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['LoginSessions']
    #swagger.description = 'Endpoint to get a new LoginSessions resource.'
    #swagger.summary = 'Gets an existing LoginSessions resource.'

    #swagger.path = '/models/login-sessions'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['session_uuid'] = {
      in: 'path',
      description: 'LoginSessions session_uuid key identifier used to get the resource.',
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
    const { session_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the LoginSessions resource
      const uuid: string = session_uuid;

      let LoginSessionsResultObject:
        | ILoginSessionsRow
        | Array<ILoginSessionsRow>
        | any
        | null;

      if (session_uuid) {
        // Gets the LoginSessions resource from the database
        LoginSessionsResultObject =
          apiGETLoginSessions(req, "session_uuid,", uuid);
      } else {
        // Gets all the models from the LoginSessions resource
        LoginSessionsResultObject =
          apiGETLoginSessions(req);
      }

      if (!LoginSessionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'LoginSessions resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'LoginSessions',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "LoginSessions resource was not found.",
          LoginSessionsResultObject,
          "LoginSessions",
          "PUT"
        );
      }

      // Execute https request
      LoginSessionsResultObject =
        apiPUTLoginSessions(
          req,
          LoginSessionsResultObject,
          uuid,
          "session_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'LoginSessions resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/LoginSessions'
          }
          model: 'LoginSessions',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        LoginSessionsResultObject,
        "LoginSessions",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/login-sessions", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'LoginSessions',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/login-sessions", Missing or invalid parameters.',
        req.body,
        "LoginSessions",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the login-sessions resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'LoginSessions',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the login-sessions resource.",
      error,
      "LoginSessions",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a LoginSessions resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ILoginSessionsInsert interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const supabasePostLoginSessions = async (
  payload: any
): Promise<ILoginSessionsInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a LoginSessions resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ILoginSessionsInsert interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const mongoDBPostLoginSessions = async (
  payload: any
): Promise<ILoginSessionsRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a LoginSessions resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ILoginSessionsInsert interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const firebasePostLoginSessions = async (
  payload: any
): Promise<ILoginSessionsInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a LoginSessions resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ILoginSessionsInsert interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const mysqlDBPostLoginSessions = async (
  payload: any
): Promise<ILoginSessionsInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a LoginSessions resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ILoginSessionsInsert interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const apiPOSTLoginSessions = async (
  req: any,
  payload: any
): Promise<ILoginSessionsInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the LoginSessions resource into the database
  let LoginSessionsResultObject:
    | ILoginSessionsRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      LoginSessionsResultObject =
        await supabasePostLoginSessions(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      LoginSessionsResultObject =
        await mongoDBPostLoginSessions(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      LoginSessionsResultObject =
        await mongoDBPostLoginSessions(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      LoginSessionsResultObject =
        await firebasePostLoginSessions(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      LoginSessionsResultObject =
        await firebasePostLoginSessions(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      LoginSessionsResultObject =
        await mysqlDBPostLoginSessions(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      LoginSessionsResultObject =
        await mysqlDBPostLoginSessions(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      LoginSessionsResultObject =
        await supabasePostLoginSessions(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    LoginSessionsResultObject =
      await supabasePostLoginSessions(payload);
  }

  return LoginSessionsResultObject;
};

/*
 * Creates a new LoginSessions resource
 *
 * @param req : Request - LoginSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const loginSessionsPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['LoginSessions']
    #swagger.description = 'Endpoint to create a new LoginSessions resource.'
    #swagger.summary = 'Creates a new LoginSessions resource.'

    #swagger.path = '/models/login-sessions'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the LoginSessions resource.',
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
      payloadSupportsLoginSessionsInsertInterface(payload)
    ) {
      // Compose the LoginSessions request object
      const LoginSessionsData: ILoginSessionsInsert =
      {
				client_id: payload.client_id,
				fid: payload.fid,
				session_created_at: payload.session_created_at,
				session_ended_at: payload.session_ended_at,
				session_id: payload.session_id,
				session_updated_at: payload.session_updated_at,
				session_uuid: payload.session_uuid,
				socket_io: payload.socket_io,
				user_id: payload.user_id,
      };

      // Insert the LoginSessions resource into the database
      let LoginSessionsResultObject:
        | ILoginSessionsRow
        | any
        | null;

      // Execute https request
      LoginSessionsResultObject =
        apiPOSTLoginSessions(
          req,
          LoginSessionsData
        );

      /* #swagger.responses[201] = {
        description: 'LoginSessions resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/LoginSessions'
          }
          model: 'LoginSessions',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "LoginSessions resource created successfully.",
        LoginSessionsResultObject,
        "LoginSessions",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/login-sessions". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'LoginSessions',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/login-sessions". Missing or invalid parameters.',
        req.body,
        "LoginSessions",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the login-sessions resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'LoginSessions',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the login-sessions resource.",
      error,
      "LoginSessions",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a LoginSessions resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ILoginSessionsUpdate interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const supabasePutLoginSessions = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a LoginSessions resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ILoginSessionsUpdate interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const mongoDBPutLoginSessions = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a LoginSessions resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ILoginSessionsUpdate interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const firebasePutLoginSessions = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a LoginSessions resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ILoginSessionsUpdate interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const mysqlDBPutLoginSessions = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the ILoginSessionsUpdate interface.
 * @returns ILoginSessionsRow data type object
 *
 */
const apiPUTLoginSessions = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsInsert | any | null> => {
  // Intitialize the LoginSessionsResultObject variable
  let LoginSessionsResultObject: ILoginSessionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      LoginSessionsResultObject =
        await supabasePutLoginSessions(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      LoginSessionsResultObject =
        await mongoDBPutLoginSessions(
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
      LoginSessionsResultObject =
        await mongoDBPutLoginSessions(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      LoginSessionsResultObject =
        await firebasePutLoginSessions(
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
      LoginSessionsResultObject =
        await firebasePutLoginSessions(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      LoginSessionsResultObject =
        await mysqlDBPutLoginSessions(
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
      LoginSessionsResultObject =
        await mysqlDBPutLoginSessions(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      LoginSessionsResultObject =
        await supabasePutLoginSessions(
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
    LoginSessionsResultObject =
      await supabasePutLoginSessions(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return LoginSessionsResultObject;
};

/*
 * Updates an existing LoginSessions resource
 *
 * @param req : Request - LoginSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const loginSessionsPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['LoginSessions']
    #swagger.description = 'Endpoint to update a new LoginSessions resource.'
    #swagger.summary = 'Updates a new LoginSessions resource.'

    #swagger.path = '/models/login-sessions'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['session_uuid'] = {
      in: 'path',
      description: 'LoginSessions session_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the LoginSessions resource.',
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
    const { session_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      session_uuid &&
      payload &&
      payloadSupportsLoginSessionsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the LoginSessions resource
      const uuid: string = session_uuid;

      // Compose the LoginSessions request object
      const LoginSessionsData: ILoginSessionsRow = {};
      
				if('client_id' in payload){ LoginSessionsData.client_id = payload.client_id; }
				if('fid' in payload){ LoginSessionsData.fid = payload.fid; }
				if('session_created_at' in payload){ LoginSessionsData.session_created_at = payload.session_created_at; }
				if('session_ended_at' in payload){ LoginSessionsData.session_ended_at = payload.session_ended_at; }
				if('session_id' in payload){ LoginSessionsData.session_id = payload.session_id; }
				if('session_updated_at' in payload){ LoginSessionsData.session_updated_at = payload.session_updated_at; }
				if('session_uuid' in payload){ LoginSessionsData.session_uuid = payload.session_uuid; }
				if('socket_io' in payload){ LoginSessionsData.socket_io = payload.socket_io; }
				if('user_id' in payload){ LoginSessionsData.user_id = payload.user_id; }

      // Gets the LoginSessions resource from the database
      let LoginSessionsResultObject:
        | ILoginSessionsRow
        | any
        | null = apiGETLoginSessions(
          req,
          "session_uuid",
          uuid
        );

      if (!LoginSessionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'LoginSessions resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'LoginSessions',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "LoginSessions",
          "PUT"
        );
      }

      // Execute https request
      LoginSessionsResultObject =
        apiPUTLoginSessions(
          req,
          LoginSessionsData,
          uuid,
          "session_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'LoginSessions resource updated successfully.',
        schema: {
          $ref: '#/definitions/LoginSessions'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "LoginSessions resource updated successfully.",
        LoginSessionsResultObject,
        "LoginSessions",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/login-sessions" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'LoginSessions',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "LoginSessions",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the login-sessions resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'LoginSessions',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the login-sessions resource.",
      error,
      "LoginSessions",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing LoginSessions resource partially
 *
 * @param req : Request - LoginSessions partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const loginSessionsPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['LoginSessions']
    #swagger.description = 'Endpoint to update a new LoginSessions resource.'
    #swagger.summary = 'Updates a new LoginSessions resource.'

    #swagger.path = '/models/login-sessions'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['session_uuid'] = {
      in: 'path',
      description: 'LoginSessions session_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the LoginSessions resource.',
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
    const { session_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      session_uuid &&
      payload &&
      payloadSupportsLoginSessionsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the LoginSessions resource
      const uuid: string = session_uuid;

      // Compose the LoginSessions request object
      const LoginSessionsData: ILoginSessionsRow = {};
      
				if('client_id' in payload){ LoginSessionsData.client_id = payload.client_id; }
				if('fid' in payload){ LoginSessionsData.fid = payload.fid; }
				if('session_created_at' in payload){ LoginSessionsData.session_created_at = payload.session_created_at; }
				if('session_ended_at' in payload){ LoginSessionsData.session_ended_at = payload.session_ended_at; }
				if('session_id' in payload){ LoginSessionsData.session_id = payload.session_id; }
				if('session_updated_at' in payload){ LoginSessionsData.session_updated_at = payload.session_updated_at; }
				if('session_uuid' in payload){ LoginSessionsData.session_uuid = payload.session_uuid; }
				if('socket_io' in payload){ LoginSessionsData.socket_io = payload.socket_io; }
				if('user_id' in payload){ LoginSessionsData.user_id = payload.user_id; }

      // Gets the LoginSessions resource from the database
      let LoginSessionsResultObject:
        | ILoginSessionsRow
        | any
        | null = apiGETLoginSessions(
          req,
          "session_uuid",
          uuid
        );

      if (!LoginSessionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'LoginSessions resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'LoginSessions',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "LoginSessions",
          "PATCH"
        );
      }

      // Execute https request
      LoginSessionsResultObject =
        apiPUTLoginSessions(
          req,
          LoginSessionsData,
          uuid,
          "session_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'LoginSessions resource updated successfully.',
        schema: {
          $ref: '#/definitions/LoginSessions'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "LoginSessions resource updated successfully.",
        LoginSessionsResultObject,
        "LoginSessions",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/login-sessions" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'LoginSessions',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "LoginSessions",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the login-sessions resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'LoginSessions',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the login-sessions resource.",
      error,
      "LoginSessions",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a LoginSessions resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns ILoginSessionsRow data type object
 *
 */
const supabaseDeleteLoginSessions = async (
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a LoginSessions resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns ILoginSessionsRow data type object
 *
 */
const mongoDBDeleteLoginSessions = async (
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a LoginSessions resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns ILoginSessionsRow data type object
 *
 */
const firebaseDeleteLoginSessions = async (
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a LoginSessions resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns ILoginSessionsRow data type object
 *
 */
const mysqlDBDeleteLoginSessions = async (
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns ILoginSessionsRow data type object
 *
 */
const apiDELETELoginSessions = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<ILoginSessionsInsert | any | null> => {
  // Intitialize the LoginSessionsResultObject variable
  let LoginSessionsResultObject: ILoginSessionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      LoginSessionsResultObject =
        await supabaseDeleteLoginSessions(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      LoginSessionsResultObject =
        await mongoDBDeleteLoginSessions(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      LoginSessionsResultObject =
        await mongoDBDeleteLoginSessions(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      LoginSessionsResultObject =
        await firebaseDeleteLoginSessions(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      LoginSessionsResultObject =
        await firebaseDeleteLoginSessions(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      LoginSessionsResultObject =
        await mysqlDBDeleteLoginSessions(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      LoginSessionsResultObject =
        await mysqlDBDeleteLoginSessions(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      LoginSessionsResultObject =
        await supabaseDeleteLoginSessions(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    LoginSessionsResultObject =
      await supabaseDeleteLoginSessions(columnValue, columnName);
  }

  return LoginSessionsResultObject;
};

/*
 * Deletes an existing LoginSessions resource
 *
 * @param req : Request - LoginSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const loginSessionsDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['LoginSessions']
    #swagger.description = 'Endpoint to delete a new LoginSessions resource.'
    #swagger.summary = 'Updates a new LoginSessions resource.'

    #swagger.path = '/models/login-sessions'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['session_uuid'] = {
      in: 'path',
      description: 'LoginSessions session_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the LoginSessions resource.',
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
    const { session_uuid } = req.params;

    // If all the parameters are available, its a go
    if (session_uuid) {
      // Get the uuid to identify the LoginSessions resource
      const uuid: string = session_uuid;

      // Gets the LoginSessions resource from the database
      let LoginSessionsResultObject:
        | ILoginSessionsRow
        | any
        | null = apiGETLoginSessions(
          req,
          "session_uuid",
          uuid
        );

      if (!LoginSessionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'LoginSessions resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'LoginSessions',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "LoginSessions",
          "PATCH"
        );
      }

      // Execute https request
      LoginSessionsResultObject =
        apiDELETELoginSessions(req, uuid, "session_uuid");

      /* #swagger.responses[201] = {
        description: 'LoginSessions resource deleted successfully.',
        schema: {
          'session_uuid': 'session_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "LoginSessions resource deleted successfully.",
        LoginSessionsResultObject,
        "LoginSessions",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/login-sessions" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'LoginSessions',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "LoginSessions",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the login-sessions resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'LoginSessions',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the login-sessions resource.",
      error,
      "LoginSessions",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of LoginSessions without the response body.
 *
 * @param req : Request - LoginSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const loginSessionsHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['LoginSessions']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of LoginSessions without the response body'
  
      #swagger.path = '/models/login-sessions'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the LoginSessions resource.',
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
            description: 'Could not perform a HEAD request at the "/models/login-sessions" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'LoginSessions',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "LoginSessions",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the login-sessions resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'LoginSessions',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the login-sessions resource.",
      error,
      "LoginSessions",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - LoginSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const loginSessionsTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['LoginSessions']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/login-sessions'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the LoginSessions resource.',
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
        "LoginSessions",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/login-sessions" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'LoginSessions',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "LoginSessions",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the login-sessions resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'LoginSessions',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the login-sessions resource.",
      error,
      "LoginSessions",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - LoginSessions request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const loginSessionsOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['LoginSessions']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/login-sessions'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the LoginSessions resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/login-sessions" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'LoginSessions',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "LoginSessions",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the login-sessions resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'LoginSessions',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the login-sessions resource.",
      error,
      "LoginSessions",
      "OPTIONS"
    );
  }

  // #swagger.end
};
