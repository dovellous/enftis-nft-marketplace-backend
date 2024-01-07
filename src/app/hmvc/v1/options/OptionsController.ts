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
  IOptionsInsert,
  IOptionsRow,
  IOptionsUpdate
} from "./models/OptionsTypesDefinitions";

import { OptionsSupabaseCls } from "./models/OptionsSupabaseCls";
import { OptionsMongoDBCls } from "./models/OptionsMongoDBCls";
import { OptionsFirebaseCls } from "./models/OptionsFirebaseCls";
import { OptionsMySQLDBCls } from "./models/OptionsMySQLDBCls";
import { OptionsDTO } from "./models/OptionsDTO";

export const payloadSupportsOptionsRowInterface: any = (
  payload: any
): payload is IOptionsRow => {
  return !!payload?.Options.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsOptionsInsertInterface: any = (
  payload: any
): payload is IOptionsInsert => {
  return !!payload?.Options
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsOptionsUpdateInterface: any = (
  payload: any
): payload is IOptionsUpdate => {
  return !!payload?.Options
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new OptionsSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IOptionsUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new OptionsMongoDBCls().insertARow(payload);
          new OptionsFirebaseCls().insertARow(payload);
          new OptionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new OptionsMongoDBCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
            
          );
          new OptionsFirebaseCls().updateMatchingRows(
            payload,
            "option_uuid",
            payload.option_uuid
          );
          new OptionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          break;
        }

        case "patch": {
          new OptionsMongoDBCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          new OptionsFirebaseCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          new OptionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          break;
        }

        case "delete": {
          new OptionsMongoDBCls().deleteMatchingRows(
            "option_uuid",
            payload.option_uuid
          );
          new OptionsFirebaseCls().deleteMatchingRows(
            "option_uuid",
            payload.option_uuid
          );
          new OptionsMySQLDBCls().deleteMatchingRows(
            "option_uuid",
            payload.option_uuid
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
const mongoDBDatabaseClass: any = new OptionsMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IOptionsUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new OptionsSupabaseCls().insertARow(payload);
          new OptionsFirebaseCls().insertARow(payload);
          new OptionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new OptionsSupabaseCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          new OptionsFirebaseCls().updateMatchingRows(
            payload,
            "option_uuid",
            payload.option_uuid
          );
          new OptionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          break;
        }

        case "patch": {
          new OptionsSupabaseCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          new OptionsFirebaseCls().updateMatchingRows(
            payload,
            "option_uuid",
            payload.option_uuid
          );
          new OptionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          break;
        }

        case "delete": {
          new OptionsSupabaseCls().deleteMatchingRows(
            "option_uuid",
            payload.option_uuid
          );
          new OptionsFirebaseCls().deleteMatchingRows(
            "option_uuid",
            payload.option_uuid
          );
          new OptionsMySQLDBCls().deleteMatchingRows(
            "option_uuid",
            payload.option_uuid
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
  new OptionsSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IOptionsUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new OptionsSupabaseCls().insertARow(payload);
          new OptionsMongoDBCls().insertARow(payload);
          new OptionsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new OptionsSupabaseCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          new OptionsMongoDBCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          new OptionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          break;
        }

        case "patch": {
          new OptionsSupabaseCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          new OptionsMongoDBCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          new OptionsMySQLDBCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          break;
        }

        case "delete": {
          new OptionsSupabaseCls().deleteMatchingRows(
            "option_uuid",
            payload.option_uuid
          );
          new OptionsMongoDBCls().deleteMatchingRows(
            "option_uuid",
            payload.option_uuid
          );
          new OptionsMySQLDBCls().deleteMatchingRows(
            "option_uuid",
            payload.option_uuid
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
const mySQLDatabaseClass: any = new OptionsSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IOptionsUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new OptionsSupabaseCls().insertARow(payload);
          new OptionsMongoDBCls().insertARow(payload);
          new OptionsFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new OptionsSupabaseCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          new OptionsMongoDBCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          new OptionsFirebaseCls().updateMatchingRows(
            payload,
            "option_uuid",
            payload.option_uuid
          );
          break;
        }

        case "patch": {
          new OptionsSupabaseCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          new OptionsMongoDBCls().updateMatchingRows(
            payload,
            payload.option_uuid,
            "option_uuid"
          );
          new OptionsFirebaseCls().updateMatchingRows(
            payload,
            "option_uuid",
            payload.option_uuid
          );
          break;
        }

        case "delete": {
          new OptionsSupabaseCls().deleteMatchingRows(
            "option_uuid",
            payload.option_uuid
          );
          new OptionsMongoDBCls().deleteMatchingRows(
            "option_uuid",
            payload.option_uuid
          );
          new OptionsFirebaseCls().deleteMatchingRows(
            "option_uuid",
            payload.option_uuid
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
 * Gets, gets or edits a Options resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IOptionsGets interface.
 * @returns IOptionsRow data type object
 *
 */
const supabaseGetOptions = async (
  columnValue: any,
  columnName?: string
): Promise<IOptionsRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Options resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IOptionsGets interface.
 * @returns IOptionsRow data type object
 *
 */
const mongoDBGetOptions = async (
  columnValue: any,
  columnName?: string
): Promise<IOptionsRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Options resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IOptionsGets interface.
 * @returns IOptionsRow data type object
 *
 */
const firebaseGetOptions = async (
  columnValue: any,
  columnName?: string
): Promise<IOptionsRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Options resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IOptionsGets interface.
 * @returns IOptionsRow data type object
 *
 */
const mysqlDBGetOptions = async (
  columnValue: any,
  columnName?: string
): Promise<IOptionsRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IOptionsGets interface.
 * @returns IOptionsRow data type object
 *
 */
const apiGETOptions = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IOptionsRow | any | null> => {
  // Intitialize the OptionsResultObject variable
  let OptionsResultObject: IOptionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      OptionsResultObject =
        await supabaseGetOptions(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      OptionsResultObject =
        await mongoDBGetOptions(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      OptionsResultObject =
        await mongoDBGetOptions(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      OptionsResultObject =
        await firebaseGetOptions(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      OptionsResultObject =
        await firebaseGetOptions(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      OptionsResultObject =
        await mysqlDBGetOptions(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      OptionsResultObject =
        await mysqlDBGetOptions(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      OptionsResultObject =
        await supabaseGetOptions(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    OptionsResultObject =
      await supabaseGetOptions(columnValue, columnName);
  }

  return OptionsResultObject;
};

/*
 * Gets an existing Options resource
 *
 * @param req : Request - Options request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const optionsGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Options']
    #swagger.description = 'Endpoint to get a new Options resource.'
    #swagger.summary = 'Gets an existing Options resource.'

    #swagger.path = '/models/options'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['option_uuid'] = {
      in: 'path',
      description: 'Options option_uuid key identifier used to get the resource.',
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
    const { option_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the Options resource
      const uuid: string = option_uuid;

      let OptionsResultObject:
        | IOptionsRow
        | Array<IOptionsRow>
        | any
        | null;

      if (option_uuid) {
        // Gets the Options resource from the database
        OptionsResultObject =
          apiGETOptions(req, "option_uuid,", uuid);
      } else {
        // Gets all the models from the Options resource
        OptionsResultObject =
          apiGETOptions(req);
      }

      if (!OptionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Options resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Options',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Options resource was not found.",
          OptionsResultObject,
          "Options",
          "PUT"
        );
      }

      // Execute https request
      OptionsResultObject =
        apiPUTOptions(
          req,
          OptionsResultObject,
          uuid,
          "option_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Options resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Options'
          }
          model: 'Options',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        OptionsResultObject,
        "Options",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/options", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'Options',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/options", Missing or invalid parameters.',
        req.body,
        "Options",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the options resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'Options',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the options resource.",
      error,
      "Options",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a Options resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IOptionsInsert interface.
 * @returns IOptionsRow data type object
 *
 */
const supabasePostOptions = async (
  payload: any
): Promise<IOptionsInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Options resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IOptionsInsert interface.
 * @returns IOptionsRow data type object
 *
 */
const mongoDBPostOptions = async (
  payload: any
): Promise<IOptionsRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Options resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IOptionsInsert interface.
 * @returns IOptionsRow data type object
 *
 */
const firebasePostOptions = async (
  payload: any
): Promise<IOptionsInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Options resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IOptionsInsert interface.
 * @returns IOptionsRow data type object
 *
 */
const mysqlDBPostOptions = async (
  payload: any
): Promise<IOptionsInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Options resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IOptionsInsert interface.
 * @returns IOptionsRow data type object
 *
 */
const apiPOSTOptions = async (
  req: any,
  payload: any
): Promise<IOptionsInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the Options resource into the database
  let OptionsResultObject:
    | IOptionsRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      OptionsResultObject =
        await supabasePostOptions(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      OptionsResultObject =
        await mongoDBPostOptions(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      OptionsResultObject =
        await mongoDBPostOptions(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      OptionsResultObject =
        await firebasePostOptions(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      OptionsResultObject =
        await firebasePostOptions(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      OptionsResultObject =
        await mysqlDBPostOptions(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      OptionsResultObject =
        await mysqlDBPostOptions(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      OptionsResultObject =
        await supabasePostOptions(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    OptionsResultObject =
      await supabasePostOptions(payload);
  }

  return OptionsResultObject;
};

/*
 * Creates a new Options resource
 *
 * @param req : Request - Options request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const optionsPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Options']
    #swagger.description = 'Endpoint to create a new Options resource.'
    #swagger.summary = 'Creates a new Options resource.'

    #swagger.path = '/models/options'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the Options resource.',
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
      payloadSupportsOptionsInsertInterface(payload)
    ) {
      // Compose the Options request object
      const OptionsData: IOptionsInsert =
      {
				fid: payload.fid,
				option_created_at: payload.option_created_at,
				option_datatype: payload.option_datatype,
				option_id: payload.option_id,
				option_slug: payload.option_slug,
				option_updated_at: payload.option_updated_at,
				option_uuid: payload.option_uuid,
				option_value: payload.option_value,
      };

      // Insert the Options resource into the database
      let OptionsResultObject:
        | IOptionsRow
        | any
        | null;

      // Execute https request
      OptionsResultObject =
        apiPOSTOptions(
          req,
          OptionsData
        );

      /* #swagger.responses[201] = {
        description: 'Options resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Options'
          }
          model: 'Options',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Options resource created successfully.",
        OptionsResultObject,
        "Options",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/options". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'Options',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/options". Missing or invalid parameters.',
        req.body,
        "Options",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the options resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'Options',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the options resource.",
      error,
      "Options",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a Options resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IOptionsUpdate interface.
 * @returns IOptionsRow data type object
 *
 */
const supabasePutOptions = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IOptionsInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Options resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IOptionsUpdate interface.
 * @returns IOptionsRow data type object
 *
 */
const mongoDBPutOptions = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IOptionsRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Options resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IOptionsUpdate interface.
 * @returns IOptionsRow data type object
 *
 */
const firebasePutOptions = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IOptionsInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Options resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IOptionsUpdate interface.
 * @returns IOptionsRow data type object
 *
 */
const mysqlDBPutOptions = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IOptionsInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IOptionsUpdate interface.
 * @returns IOptionsRow data type object
 *
 */
const apiPUTOptions = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IOptionsInsert | any | null> => {
  // Intitialize the OptionsResultObject variable
  let OptionsResultObject: IOptionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      OptionsResultObject =
        await supabasePutOptions(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      OptionsResultObject =
        await mongoDBPutOptions(
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
      OptionsResultObject =
        await mongoDBPutOptions(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      OptionsResultObject =
        await firebasePutOptions(
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
      OptionsResultObject =
        await firebasePutOptions(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      OptionsResultObject =
        await mysqlDBPutOptions(
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
      OptionsResultObject =
        await mysqlDBPutOptions(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      OptionsResultObject =
        await supabasePutOptions(
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
    OptionsResultObject =
      await supabasePutOptions(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return OptionsResultObject;
};

/*
 * Updates an existing Options resource
 *
 * @param req : Request - Options request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const optionsPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Options']
    #swagger.description = 'Endpoint to update a new Options resource.'
    #swagger.summary = 'Updates a new Options resource.'

    #swagger.path = '/models/options'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['option_uuid'] = {
      in: 'path',
      description: 'Options option_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Options resource.',
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
    const { option_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      option_uuid &&
      payload &&
      payloadSupportsOptionsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Options resource
      const uuid: string = option_uuid;

      // Compose the Options request object
      const OptionsData: IOptionsRow = {};
      
				if('fid' in payload){ OptionsData.fid = payload.fid; }
				if('option_created_at' in payload){ OptionsData.option_created_at = payload.option_created_at; }
				if('option_datatype' in payload){ OptionsData.option_datatype = payload.option_datatype; }
				if('option_id' in payload){ OptionsData.option_id = payload.option_id; }
				if('option_slug' in payload){ OptionsData.option_slug = payload.option_slug; }
				if('option_updated_at' in payload){ OptionsData.option_updated_at = payload.option_updated_at; }
				if('option_uuid' in payload){ OptionsData.option_uuid = payload.option_uuid; }
				if('option_value' in payload){ OptionsData.option_value = payload.option_value; }

      // Gets the Options resource from the database
      let OptionsResultObject:
        | IOptionsRow
        | any
        | null = apiGETOptions(
          req,
          "option_uuid",
          uuid
        );

      if (!OptionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Options resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Options',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Options",
          "PUT"
        );
      }

      // Execute https request
      OptionsResultObject =
        apiPUTOptions(
          req,
          OptionsData,
          uuid,
          "option_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Options resource updated successfully.',
        schema: {
          $ref: '#/definitions/Options'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Options resource updated successfully.",
        OptionsResultObject,
        "Options",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/options" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Options',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Options",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the options resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Options',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the options resource.",
      error,
      "Options",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing Options resource partially
 *
 * @param req : Request - Options partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const optionsPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Options']
    #swagger.description = 'Endpoint to update a new Options resource.'
    #swagger.summary = 'Updates a new Options resource.'

    #swagger.path = '/models/options'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['option_uuid'] = {
      in: 'path',
      description: 'Options option_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Options resource.',
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
    const { option_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      option_uuid &&
      payload &&
      payloadSupportsOptionsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Options resource
      const uuid: string = option_uuid;

      // Compose the Options request object
      const OptionsData: IOptionsRow = {};
      
				if('fid' in payload){ OptionsData.fid = payload.fid; }
				if('option_created_at' in payload){ OptionsData.option_created_at = payload.option_created_at; }
				if('option_datatype' in payload){ OptionsData.option_datatype = payload.option_datatype; }
				if('option_id' in payload){ OptionsData.option_id = payload.option_id; }
				if('option_slug' in payload){ OptionsData.option_slug = payload.option_slug; }
				if('option_updated_at' in payload){ OptionsData.option_updated_at = payload.option_updated_at; }
				if('option_uuid' in payload){ OptionsData.option_uuid = payload.option_uuid; }
				if('option_value' in payload){ OptionsData.option_value = payload.option_value; }

      // Gets the Options resource from the database
      let OptionsResultObject:
        | IOptionsRow
        | any
        | null = apiGETOptions(
          req,
          "option_uuid",
          uuid
        );

      if (!OptionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Options resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Options',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Options",
          "PATCH"
        );
      }

      // Execute https request
      OptionsResultObject =
        apiPUTOptions(
          req,
          OptionsData,
          uuid,
          "option_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Options resource updated successfully.',
        schema: {
          $ref: '#/definitions/Options'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Options resource updated successfully.",
        OptionsResultObject,
        "Options",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/options" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Options',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Options",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the options resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Options',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the options resource.",
      error,
      "Options",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a Options resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IOptionsRow data type object
 *
 */
const supabaseDeleteOptions = async (
  columnValue: any,
  columnName?: string
): Promise<IOptionsInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Options resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IOptionsRow data type object
 *
 */
const mongoDBDeleteOptions = async (
  columnValue: any,
  columnName?: string
): Promise<IOptionsRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a Options resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IOptionsRow data type object
 *
 */
const firebaseDeleteOptions = async (
  columnValue: any,
  columnName?: string
): Promise<IOptionsInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Options resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IOptionsRow data type object
 *
 */
const mysqlDBDeleteOptions = async (
  columnValue: any,
  columnName?: string
): Promise<IOptionsInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IOptionsRow data type object
 *
 */
const apiDELETEOptions = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IOptionsInsert | any | null> => {
  // Intitialize the OptionsResultObject variable
  let OptionsResultObject: IOptionsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      OptionsResultObject =
        await supabaseDeleteOptions(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      OptionsResultObject =
        await mongoDBDeleteOptions(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      OptionsResultObject =
        await mongoDBDeleteOptions(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      OptionsResultObject =
        await firebaseDeleteOptions(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      OptionsResultObject =
        await firebaseDeleteOptions(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      OptionsResultObject =
        await mysqlDBDeleteOptions(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      OptionsResultObject =
        await mysqlDBDeleteOptions(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      OptionsResultObject =
        await supabaseDeleteOptions(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    OptionsResultObject =
      await supabaseDeleteOptions(columnValue, columnName);
  }

  return OptionsResultObject;
};

/*
 * Deletes an existing Options resource
 *
 * @param req : Request - Options request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const optionsDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Options']
    #swagger.description = 'Endpoint to delete a new Options resource.'
    #swagger.summary = 'Updates a new Options resource.'

    #swagger.path = '/models/options'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['option_uuid'] = {
      in: 'path',
      description: 'Options option_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the Options resource.',
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
    const { option_uuid } = req.params;

    // If all the parameters are available, its a go
    if (option_uuid) {
      // Get the uuid to identify the Options resource
      const uuid: string = option_uuid;

      // Gets the Options resource from the database
      let OptionsResultObject:
        | IOptionsRow
        | any
        | null = apiGETOptions(
          req,
          "option_uuid",
          uuid
        );

      if (!OptionsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Options resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Options',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Options",
          "PATCH"
        );
      }

      // Execute https request
      OptionsResultObject =
        apiDELETEOptions(req, uuid, "option_uuid");

      /* #swagger.responses[201] = {
        description: 'Options resource deleted successfully.',
        schema: {
          'option_uuid': 'option_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Options resource deleted successfully.",
        OptionsResultObject,
        "Options",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/options" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Options',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Options",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the options resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Options',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the options resource.",
      error,
      "Options",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of Options without the response body.
 *
 * @param req : Request - Options request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const optionsHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Options']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of Options without the response body'
  
      #swagger.path = '/models/options'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the Options resource.',
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
            description: 'Could not perform a HEAD request at the "/models/options" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Options',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Options",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the options resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Options',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the options resource.",
      error,
      "Options",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - Options request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const optionsTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Options']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/options'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Options resource.',
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
        "Options",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/options" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Options',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Options",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the options resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Options',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the options resource.",
      error,
      "Options",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - Options request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const optionsOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Options']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/options'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Options resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/options" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Options',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Options",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the options resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Options',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the options resource.",
      error,
      "Options",
      "OPTIONS"
    );
  }

  // #swagger.end
};
