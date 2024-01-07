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
  I____MODEL_ALL_CAMEL_CASE____Insert,
  I____MODEL_ALL_CAMEL_CASE____Row,
  I____MODEL_ALL_CAMEL_CASE____Update
} from "./models/____MODEL_ALL_CAMEL_CASE____TypesDefinitions";

import { ____MODEL_ALL_CAMEL_CASE____SupabaseCls } from "./models/____MODEL_ALL_CAMEL_CASE____SupabaseCls";
import { ____MODEL_ALL_CAMEL_CASE____MongoDBCls } from "./models/____MODEL_ALL_CAMEL_CASE____MongoDBCls";
import { ____MODEL_ALL_CAMEL_CASE____FirebaseCls } from "./models/____MODEL_ALL_CAMEL_CASE____FirebaseCls";
import { ____MODEL_ALL_CAMEL_CASE____MySQLDBCls } from "./models/____MODEL_ALL_CAMEL_CASE____MySQLDBCls";
import { ____MODEL_ALL_CAMEL_CASE____DTO } from "./models/____MODEL_ALL_CAMEL_CASE____DTO";

export const payloadSupports____MODEL_ALL_CAMEL_CASE____RowInterface: any = (
  payload: any
): payload is I____MODEL_ALL_CAMEL_CASE____Row => {
  return !!payload?.____MODEL_ALL_CAMEL_CASE____.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupports____MODEL_ALL_CAMEL_CASE____InsertInterface: any = (
  payload: any
): payload is I____MODEL_ALL_CAMEL_CASE____Insert => {
  return !!payload?.____MODEL_ALL_CAMEL_CASE____
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupports____MODEL_ALL_CAMEL_CASE____UpdateInterface: any = (
  payload: any
): payload is I____MODEL_ALL_CAMEL_CASE____Update => {
  return !!payload?.____MODEL_ALL_CAMEL_CASE____
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new ____MODEL_ALL_CAMEL_CASE____SupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: I____MODEL_ALL_CAMEL_CASE____Update) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new ____MODEL_ALL_CAMEL_CASE____MongoDBCls().insertARow(payload);
          new ____MODEL_ALL_CAMEL_CASE____FirebaseCls().insertARow(payload);
          new ____MODEL_ALL_CAMEL_CASE____MySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new ____MODEL_ALL_CAMEL_CASE____MongoDBCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
            
          );
          new ____MODEL_ALL_CAMEL_CASE____FirebaseCls().updateMatchingRows(
            payload,
            "____UUID_KEY____",
            payload.____UUID_KEY____
          );
          new ____MODEL_ALL_CAMEL_CASE____MySQLDBCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          break;
        }

        case "patch": {
          new ____MODEL_ALL_CAMEL_CASE____MongoDBCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          new ____MODEL_ALL_CAMEL_CASE____FirebaseCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          new ____MODEL_ALL_CAMEL_CASE____MySQLDBCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          break;
        }

        case "delete": {
          new ____MODEL_ALL_CAMEL_CASE____MongoDBCls().deleteMatchingRows(
            "____UUID_KEY____",
            payload.____UUID_KEY____
          );
          new ____MODEL_ALL_CAMEL_CASE____FirebaseCls().deleteMatchingRows(
            "____UUID_KEY____",
            payload.____UUID_KEY____
          );
          new ____MODEL_ALL_CAMEL_CASE____MySQLDBCls().deleteMatchingRows(
            "____UUID_KEY____",
            payload.____UUID_KEY____
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
const mongoDBDatabaseClass: any = new ____MODEL_ALL_CAMEL_CASE____MongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: I____MODEL_ALL_CAMEL_CASE____Update) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new ____MODEL_ALL_CAMEL_CASE____SupabaseCls().insertARow(payload);
          new ____MODEL_ALL_CAMEL_CASE____FirebaseCls().insertARow(payload);
          new ____MODEL_ALL_CAMEL_CASE____MySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new ____MODEL_ALL_CAMEL_CASE____SupabaseCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          new ____MODEL_ALL_CAMEL_CASE____FirebaseCls().updateMatchingRows(
            payload,
            "____UUID_KEY____",
            payload.____UUID_KEY____
          );
          new ____MODEL_ALL_CAMEL_CASE____MySQLDBCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          break;
        }

        case "patch": {
          new ____MODEL_ALL_CAMEL_CASE____SupabaseCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          new ____MODEL_ALL_CAMEL_CASE____FirebaseCls().updateMatchingRows(
            payload,
            "____UUID_KEY____",
            payload.____UUID_KEY____
          );
          new ____MODEL_ALL_CAMEL_CASE____MySQLDBCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          break;
        }

        case "delete": {
          new ____MODEL_ALL_CAMEL_CASE____SupabaseCls().deleteMatchingRows(
            "____UUID_KEY____",
            payload.____UUID_KEY____
          );
          new ____MODEL_ALL_CAMEL_CASE____FirebaseCls().deleteMatchingRows(
            "____UUID_KEY____",
            payload.____UUID_KEY____
          );
          new ____MODEL_ALL_CAMEL_CASE____MySQLDBCls().deleteMatchingRows(
            "____UUID_KEY____",
            payload.____UUID_KEY____
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
  new ____MODEL_ALL_CAMEL_CASE____SupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: I____MODEL_ALL_CAMEL_CASE____Update) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new ____MODEL_ALL_CAMEL_CASE____SupabaseCls().insertARow(payload);
          new ____MODEL_ALL_CAMEL_CASE____MongoDBCls().insertARow(payload);
          new ____MODEL_ALL_CAMEL_CASE____MySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new ____MODEL_ALL_CAMEL_CASE____SupabaseCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          new ____MODEL_ALL_CAMEL_CASE____MongoDBCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          new ____MODEL_ALL_CAMEL_CASE____MySQLDBCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          break;
        }

        case "patch": {
          new ____MODEL_ALL_CAMEL_CASE____SupabaseCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          new ____MODEL_ALL_CAMEL_CASE____MongoDBCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          new ____MODEL_ALL_CAMEL_CASE____MySQLDBCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          break;
        }

        case "delete": {
          new ____MODEL_ALL_CAMEL_CASE____SupabaseCls().deleteMatchingRows(
            "____UUID_KEY____",
            payload.____UUID_KEY____
          );
          new ____MODEL_ALL_CAMEL_CASE____MongoDBCls().deleteMatchingRows(
            "____UUID_KEY____",
            payload.____UUID_KEY____
          );
          new ____MODEL_ALL_CAMEL_CASE____MySQLDBCls().deleteMatchingRows(
            "____UUID_KEY____",
            payload.____UUID_KEY____
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
const mySQLDatabaseClass: any = new ____MODEL_ALL_CAMEL_CASE____SupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: I____MODEL_ALL_CAMEL_CASE____Update) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new ____MODEL_ALL_CAMEL_CASE____SupabaseCls().insertARow(payload);
          new ____MODEL_ALL_CAMEL_CASE____MongoDBCls().insertARow(payload);
          new ____MODEL_ALL_CAMEL_CASE____FirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new ____MODEL_ALL_CAMEL_CASE____SupabaseCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          new ____MODEL_ALL_CAMEL_CASE____MongoDBCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          new ____MODEL_ALL_CAMEL_CASE____FirebaseCls().updateMatchingRows(
            payload,
            "____UUID_KEY____",
            payload.____UUID_KEY____
          );
          break;
        }

        case "patch": {
          new ____MODEL_ALL_CAMEL_CASE____SupabaseCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          new ____MODEL_ALL_CAMEL_CASE____MongoDBCls().updateMatchingRows(
            payload,
            payload.____UUID_KEY____,
            "____UUID_KEY____"
          );
          new ____MODEL_ALL_CAMEL_CASE____FirebaseCls().updateMatchingRows(
            payload,
            "____UUID_KEY____",
            payload.____UUID_KEY____
          );
          break;
        }

        case "delete": {
          new ____MODEL_ALL_CAMEL_CASE____SupabaseCls().deleteMatchingRows(
            "____UUID_KEY____",
            payload.____UUID_KEY____
          );
          new ____MODEL_ALL_CAMEL_CASE____MongoDBCls().deleteMatchingRows(
            "____UUID_KEY____",
            payload.____UUID_KEY____
          );
          new ____MODEL_ALL_CAMEL_CASE____FirebaseCls().deleteMatchingRows(
            "____UUID_KEY____",
            payload.____UUID_KEY____
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
 * Gets, gets or edits a ____MODEL_ALL_CAMEL_CASE____ resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Gets interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const supabaseGet____MODEL_ALL_CAMEL_CASE____ = async (
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Row | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a ____MODEL_ALL_CAMEL_CASE____ resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Gets interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const mongoDBGet____MODEL_ALL_CAMEL_CASE____ = async (
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Row | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a ____MODEL_ALL_CAMEL_CASE____ resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Gets interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const firebaseGet____MODEL_ALL_CAMEL_CASE____ = async (
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Row | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a ____MODEL_ALL_CAMEL_CASE____ resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Gets interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const mysqlDBGet____MODEL_ALL_CAMEL_CASE____ = async (
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Row | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Gets interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const apiGET____MODEL_ALL_CAMEL_CASE____ = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Row | any | null> => {
  // Intitialize the ____MODEL_ALL_CAMEL_CASE____ResultObject variable
  let ____MODEL_ALL_CAMEL_CASE____ResultObject: I____MODEL_ALL_CAMEL_CASE____Row | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await supabaseGet____MODEL_ALL_CAMEL_CASE____(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mongoDBGet____MODEL_ALL_CAMEL_CASE____(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mongoDBGet____MODEL_ALL_CAMEL_CASE____(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await firebaseGet____MODEL_ALL_CAMEL_CASE____(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await firebaseGet____MODEL_ALL_CAMEL_CASE____(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mysqlDBGet____MODEL_ALL_CAMEL_CASE____(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mysqlDBGet____MODEL_ALL_CAMEL_CASE____(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await supabaseGet____MODEL_ALL_CAMEL_CASE____(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    ____MODEL_ALL_CAMEL_CASE____ResultObject =
      await supabaseGet____MODEL_ALL_CAMEL_CASE____(columnValue, columnName);
  }

  return ____MODEL_ALL_CAMEL_CASE____ResultObject;
};

/*
 * Gets an existing ____MODEL_ALL_CAMEL_CASE____ resource
 *
 * @param req : Request - ____MODEL_ALL_CAMEL_CASE____ request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const ____MODEL_CAMEL_CASE____Get = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['____MODEL_ALL_CAMEL_CASE____']
    #swagger.description = 'Endpoint to get a new ____MODEL_ALL_CAMEL_CASE____ resource.'
    #swagger.summary = 'Gets an existing ____MODEL_ALL_CAMEL_CASE____ resource.'

    #swagger.path = '/models/____MODEL_ALL_HYPHENATED_CASE____'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____UUID_KEY____'] = {
      in: 'path',
      description: '____MODEL_ALL_CAMEL_CASE____ ____UUID_KEY____ key identifier used to get the resource.',
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
    const { ____UUID_KEY____ } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the ____MODEL_ALL_CAMEL_CASE____ resource
      const uuid: string = ____UUID_KEY____;

      let ____MODEL_ALL_CAMEL_CASE____ResultObject:
        | I____MODEL_ALL_CAMEL_CASE____Row
        | Array<I____MODEL_ALL_CAMEL_CASE____Row>
        | any
        | null;

      if (____UUID_KEY____) {
        // Gets the ____MODEL_ALL_CAMEL_CASE____ resource from the database
        ____MODEL_ALL_CAMEL_CASE____ResultObject =
          apiGET____MODEL_ALL_CAMEL_CASE____(req, "____UUID_KEY____,", uuid);
      } else {
        // Gets all the models from the ____MODEL_ALL_CAMEL_CASE____ resource
        ____MODEL_ALL_CAMEL_CASE____ResultObject =
          apiGET____MODEL_ALL_CAMEL_CASE____(req);
      }

      if (!____MODEL_ALL_CAMEL_CASE____ResultObject) {
        /* #swagger.responses[404] = {
          description: '____MODEL_ALL_CAMEL_CASE____ resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: '____MODEL_ALL_CAMEL_CASE____',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "____MODEL_ALL_CAMEL_CASE____ resource was not found.",
          ____MODEL_ALL_CAMEL_CASE____ResultObject,
          "____MODEL_ALL_CAMEL_CASE____",
          "PUT"
        );
      }

      // Execute https request
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        apiPUT____MODEL_ALL_CAMEL_CASE____(
          req,
          ____MODEL_ALL_CAMEL_CASE____ResultObject,
          uuid,
          "____UUID_KEY____"
        );

      /* #swagger.responses[201] = {
        description: '____MODEL_ALL_CAMEL_CASE____ resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/____MODEL_ALL_CAMEL_CASE____'
          }
          model: '____MODEL_ALL_CAMEL_CASE____',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        ____MODEL_ALL_CAMEL_CASE____ResultObject,
        "____MODEL_ALL_CAMEL_CASE____",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/____MODEL_ALL_HYPHENATED_CASE____", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: '____MODEL_ALL_CAMEL_CASE____',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/____MODEL_ALL_HYPHENATED_CASE____", Missing or invalid parameters.',
        req.body,
        "____MODEL_ALL_CAMEL_CASE____",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: '____MODEL_ALL_CAMEL_CASE____',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
      error,
      "____MODEL_ALL_CAMEL_CASE____",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a ____MODEL_ALL_CAMEL_CASE____ resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Insert interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const supabasePost____MODEL_ALL_CAMEL_CASE____ = async (
  payload: any
): Promise<I____MODEL_ALL_CAMEL_CASE____Insert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a ____MODEL_ALL_CAMEL_CASE____ resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Insert interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const mongoDBPost____MODEL_ALL_CAMEL_CASE____ = async (
  payload: any
): Promise<I____MODEL_ALL_CAMEL_CASE____Row | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a ____MODEL_ALL_CAMEL_CASE____ resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Insert interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const firebasePost____MODEL_ALL_CAMEL_CASE____ = async (
  payload: any
): Promise<I____MODEL_ALL_CAMEL_CASE____Insert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a ____MODEL_ALL_CAMEL_CASE____ resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Insert interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const mysqlDBPost____MODEL_ALL_CAMEL_CASE____ = async (
  payload: any
): Promise<I____MODEL_ALL_CAMEL_CASE____Insert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a ____MODEL_ALL_CAMEL_CASE____ resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Insert interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const apiPOST____MODEL_ALL_CAMEL_CASE____ = async (
  req: any,
  payload: any
): Promise<I____MODEL_ALL_CAMEL_CASE____Insert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the ____MODEL_ALL_CAMEL_CASE____ resource into the database
  let ____MODEL_ALL_CAMEL_CASE____ResultObject:
    | I____MODEL_ALL_CAMEL_CASE____Row
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await supabasePost____MODEL_ALL_CAMEL_CASE____(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mongoDBPost____MODEL_ALL_CAMEL_CASE____(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mongoDBPost____MODEL_ALL_CAMEL_CASE____(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await firebasePost____MODEL_ALL_CAMEL_CASE____(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await firebasePost____MODEL_ALL_CAMEL_CASE____(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mysqlDBPost____MODEL_ALL_CAMEL_CASE____(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mysqlDBPost____MODEL_ALL_CAMEL_CASE____(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await supabasePost____MODEL_ALL_CAMEL_CASE____(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    ____MODEL_ALL_CAMEL_CASE____ResultObject =
      await supabasePost____MODEL_ALL_CAMEL_CASE____(payload);
  }

  return ____MODEL_ALL_CAMEL_CASE____ResultObject;
};

/*
 * Creates a new ____MODEL_ALL_CAMEL_CASE____ resource
 *
 * @param req : Request - ____MODEL_ALL_CAMEL_CASE____ request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const ____MODEL_CAMEL_CASE____Post = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['____MODEL_ALL_CAMEL_CASE____']
    #swagger.description = 'Endpoint to create a new ____MODEL_ALL_CAMEL_CASE____ resource.'
    #swagger.summary = 'Creates a new ____MODEL_ALL_CAMEL_CASE____ resource.'

    #swagger.path = '/models/____MODEL_ALL_HYPHENATED_CASE____'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the ____MODEL_ALL_CAMEL_CASE____ resource.',
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
      payloadSupports____MODEL_ALL_CAMEL_CASE____InsertInterface(payload)
    ) {
      // Compose the ____MODEL_ALL_CAMEL_CASE____ request object
      const ____MODEL_ALL_CAMEL_CASE____Data: I____MODEL_ALL_CAMEL_CASE____Insert | any =
      {//____INSERT_PARAMS_OJECT____
      };

      // Insert the ____MODEL_ALL_CAMEL_CASE____ resource into the database
      let ____MODEL_ALL_CAMEL_CASE____ResultObject:
        | I____MODEL_ALL_CAMEL_CASE____Row
        | any
        | null;

      // Execute https request
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        apiPOST____MODEL_ALL_CAMEL_CASE____(
          req,
          ____MODEL_ALL_CAMEL_CASE____Data
        );

      /* #swagger.responses[201] = {
        description: '____MODEL_ALL_CAMEL_CASE____ resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/____MODEL_ALL_CAMEL_CASE____'
          }
          model: '____MODEL_ALL_CAMEL_CASE____',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "____MODEL_ALL_CAMEL_CASE____ resource created successfully.",
        ____MODEL_ALL_CAMEL_CASE____ResultObject,
        "____MODEL_ALL_CAMEL_CASE____",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/____MODEL_ALL_HYPHENATED_CASE____". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: '____MODEL_ALL_CAMEL_CASE____',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/____MODEL_ALL_HYPHENATED_CASE____". Missing or invalid parameters.',
        req.body,
        "____MODEL_ALL_CAMEL_CASE____",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: '____MODEL_ALL_CAMEL_CASE____',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
      error,
      "____MODEL_ALL_CAMEL_CASE____",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a ____MODEL_ALL_CAMEL_CASE____ resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Update interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const supabasePut____MODEL_ALL_CAMEL_CASE____ = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Insert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a ____MODEL_ALL_CAMEL_CASE____ resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Update interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const mongoDBPut____MODEL_ALL_CAMEL_CASE____ = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Row | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a ____MODEL_ALL_CAMEL_CASE____ resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Update interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const firebasePut____MODEL_ALL_CAMEL_CASE____ = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Insert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a ____MODEL_ALL_CAMEL_CASE____ resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Update interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const mysqlDBPut____MODEL_ALL_CAMEL_CASE____ = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Insert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the I____MODEL_ALL_CAMEL_CASE____Update interface.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const apiPUT____MODEL_ALL_CAMEL_CASE____ = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Insert | any | null> => {
  // Intitialize the ____MODEL_ALL_CAMEL_CASE____ResultObject variable
  let ____MODEL_ALL_CAMEL_CASE____ResultObject: I____MODEL_ALL_CAMEL_CASE____Row | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await supabasePut____MODEL_ALL_CAMEL_CASE____(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mongoDBPut____MODEL_ALL_CAMEL_CASE____(
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
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mongoDBPut____MODEL_ALL_CAMEL_CASE____(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await firebasePut____MODEL_ALL_CAMEL_CASE____(
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
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await firebasePut____MODEL_ALL_CAMEL_CASE____(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mysqlDBPut____MODEL_ALL_CAMEL_CASE____(
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
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mysqlDBPut____MODEL_ALL_CAMEL_CASE____(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await supabasePut____MODEL_ALL_CAMEL_CASE____(
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
    ____MODEL_ALL_CAMEL_CASE____ResultObject =
      await supabasePut____MODEL_ALL_CAMEL_CASE____(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return ____MODEL_ALL_CAMEL_CASE____ResultObject;
};

/*
 * Updates an existing ____MODEL_ALL_CAMEL_CASE____ resource
 *
 * @param req : Request - ____MODEL_ALL_CAMEL_CASE____ request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const ____MODEL_CAMEL_CASE____Put = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['____MODEL_ALL_CAMEL_CASE____']
    #swagger.description = 'Endpoint to update a new ____MODEL_ALL_CAMEL_CASE____ resource.'
    #swagger.summary = 'Updates a new ____MODEL_ALL_CAMEL_CASE____ resource.'

    #swagger.path = '/models/____MODEL_ALL_HYPHENATED_CASE____'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____UUID_KEY____'] = {
      in: 'path',
      description: '____MODEL_ALL_CAMEL_CASE____ ____UUID_KEY____ key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the ____MODEL_ALL_CAMEL_CASE____ resource.',
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
    const { ____UUID_KEY____ } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      ____UUID_KEY____ &&
      payload &&
      payloadSupports____MODEL_ALL_CAMEL_CASE____UpdateInterface(payload)
    ) {
      // Get the uuid to identify the ____MODEL_ALL_CAMEL_CASE____ resource
      const uuid: string = ____UUID_KEY____;

      // Compose the ____MODEL_ALL_CAMEL_CASE____ request object
      const ____MODEL_ALL_CAMEL_CASE____Data: I____MODEL_ALL_CAMEL_CASE____Row | any = {};
      //____UPDATE_PARAMS_OJECT____

      // Gets the ____MODEL_ALL_CAMEL_CASE____ resource from the database
      let ____MODEL_ALL_CAMEL_CASE____ResultObject:
        | I____MODEL_ALL_CAMEL_CASE____Row
        | any
        | null = apiGET____MODEL_ALL_CAMEL_CASE____(
          req,
          "____UUID_KEY____",
          uuid
        );

      if (!____MODEL_ALL_CAMEL_CASE____ResultObject) {
        /* #swagger.responses[404] = {
          description: '____MODEL_ALL_CAMEL_CASE____ resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: '____MODEL_ALL_CAMEL_CASE____',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "____MODEL_ALL_CAMEL_CASE____",
          "PUT"
        );
      }

      // Execute https request
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        apiPUT____MODEL_ALL_CAMEL_CASE____(
          req,
          ____MODEL_ALL_CAMEL_CASE____Data,
          uuid,
          "____UUID_KEY____"
        );

      /* #swagger.responses[201] = {
        description: '____MODEL_ALL_CAMEL_CASE____ resource updated successfully.',
        schema: {
          $ref: '#/definitions/____MODEL_ALL_CAMEL_CASE____'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "____MODEL_ALL_CAMEL_CASE____ resource updated successfully.",
        ____MODEL_ALL_CAMEL_CASE____ResultObject,
        "____MODEL_ALL_CAMEL_CASE____",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/____MODEL_ALL_HYPHENATED_CASE____" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: '____MODEL_ALL_CAMEL_CASE____',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "____MODEL_ALL_CAMEL_CASE____",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: '____MODEL_ALL_CAMEL_CASE____',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
      error,
      "____MODEL_ALL_CAMEL_CASE____",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing ____MODEL_ALL_CAMEL_CASE____ resource partially
 *
 * @param req : Request - ____MODEL_ALL_CAMEL_CASE____ partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const ____MODEL_CAMEL_CASE____Patch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['____MODEL_ALL_CAMEL_CASE____']
    #swagger.description = 'Endpoint to update a new ____MODEL_ALL_CAMEL_CASE____ resource.'
    #swagger.summary = 'Updates a new ____MODEL_ALL_CAMEL_CASE____ resource.'

    #swagger.path = '/models/____MODEL_ALL_HYPHENATED_CASE____'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____UUID_KEY____'] = {
      in: 'path',
      description: '____MODEL_ALL_CAMEL_CASE____ ____UUID_KEY____ key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the ____MODEL_ALL_CAMEL_CASE____ resource.',
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
    const { ____UUID_KEY____ } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      ____UUID_KEY____ &&
      payload &&
      payloadSupports____MODEL_ALL_CAMEL_CASE____UpdateInterface(payload)
    ) {
      // Get the uuid to identify the ____MODEL_ALL_CAMEL_CASE____ resource
      const uuid: string = ____UUID_KEY____;

      // Compose the ____MODEL_ALL_CAMEL_CASE____ request object
      const ____MODEL_ALL_CAMEL_CASE____Data: I____MODEL_ALL_CAMEL_CASE____Row | any = {};
      //____UPDATE_PARAMS_OJECT____

      // Gets the ____MODEL_ALL_CAMEL_CASE____ resource from the database
      let ____MODEL_ALL_CAMEL_CASE____ResultObject:
        | I____MODEL_ALL_CAMEL_CASE____Row
        | any
        | null = apiGET____MODEL_ALL_CAMEL_CASE____(
          req,
          "____UUID_KEY____",
          uuid
        );

      if (!____MODEL_ALL_CAMEL_CASE____ResultObject) {
        /* #swagger.responses[404] = {
          description: '____MODEL_ALL_CAMEL_CASE____ resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: '____MODEL_ALL_CAMEL_CASE____',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "____MODEL_ALL_CAMEL_CASE____",
          "PATCH"
        );
      }

      // Execute https request
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        apiPUT____MODEL_ALL_CAMEL_CASE____(
          req,
          ____MODEL_ALL_CAMEL_CASE____Data,
          uuid,
          "____UUID_KEY____"
        );

      /* #swagger.responses[201] = {
        description: '____MODEL_ALL_CAMEL_CASE____ resource updated successfully.',
        schema: {
          $ref: '#/definitions/____MODEL_ALL_CAMEL_CASE____'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "____MODEL_ALL_CAMEL_CASE____ resource updated successfully.",
        ____MODEL_ALL_CAMEL_CASE____ResultObject,
        "____MODEL_ALL_CAMEL_CASE____",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/____MODEL_ALL_HYPHENATED_CASE____" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: '____MODEL_ALL_CAMEL_CASE____',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "____MODEL_ALL_CAMEL_CASE____",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: '____MODEL_ALL_CAMEL_CASE____',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
      error,
      "____MODEL_ALL_CAMEL_CASE____",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a ____MODEL_ALL_CAMEL_CASE____ resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const supabaseDelete____MODEL_ALL_CAMEL_CASE____ = async (
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Insert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a ____MODEL_ALL_CAMEL_CASE____ resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const mongoDBDelete____MODEL_ALL_CAMEL_CASE____ = async (
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Row | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a ____MODEL_ALL_CAMEL_CASE____ resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const firebaseDelete____MODEL_ALL_CAMEL_CASE____ = async (
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Insert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a ____MODEL_ALL_CAMEL_CASE____ resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const mysqlDBDelete____MODEL_ALL_CAMEL_CASE____ = async (
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Insert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns I____MODEL_ALL_CAMEL_CASE____Row data type object
 *
 */
const apiDELETE____MODEL_ALL_CAMEL_CASE____ = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<I____MODEL_ALL_CAMEL_CASE____Insert | any | null> => {
  // Intitialize the ____MODEL_ALL_CAMEL_CASE____ResultObject variable
  let ____MODEL_ALL_CAMEL_CASE____ResultObject: I____MODEL_ALL_CAMEL_CASE____Row | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await supabaseDelete____MODEL_ALL_CAMEL_CASE____(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mongoDBDelete____MODEL_ALL_CAMEL_CASE____(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mongoDBDelete____MODEL_ALL_CAMEL_CASE____(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await firebaseDelete____MODEL_ALL_CAMEL_CASE____(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await firebaseDelete____MODEL_ALL_CAMEL_CASE____(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mysqlDBDelete____MODEL_ALL_CAMEL_CASE____(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await mysqlDBDelete____MODEL_ALL_CAMEL_CASE____(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        await supabaseDelete____MODEL_ALL_CAMEL_CASE____(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    ____MODEL_ALL_CAMEL_CASE____ResultObject =
      await supabaseDelete____MODEL_ALL_CAMEL_CASE____(columnValue, columnName);
  }

  return ____MODEL_ALL_CAMEL_CASE____ResultObject;
};

/*
 * Deletes an existing ____MODEL_ALL_CAMEL_CASE____ resource
 *
 * @param req : Request - ____MODEL_ALL_CAMEL_CASE____ request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const ____MODEL_CAMEL_CASE____Delete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['____MODEL_ALL_CAMEL_CASE____']
    #swagger.description = 'Endpoint to delete a new ____MODEL_ALL_CAMEL_CASE____ resource.'
    #swagger.summary = 'Updates a new ____MODEL_ALL_CAMEL_CASE____ resource.'

    #swagger.path = '/models/____MODEL_ALL_HYPHENATED_CASE____'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['____UUID_KEY____'] = {
      in: 'path',
      description: '____MODEL_ALL_CAMEL_CASE____ ____UUID_KEY____ key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the ____MODEL_ALL_CAMEL_CASE____ resource.',
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
    const { ____UUID_KEY____ } = req.params;

    // If all the parameters are available, its a go
    if (____UUID_KEY____) {
      // Get the uuid to identify the ____MODEL_ALL_CAMEL_CASE____ resource
      const uuid: string = ____UUID_KEY____;

      // Gets the ____MODEL_ALL_CAMEL_CASE____ resource from the database
      let ____MODEL_ALL_CAMEL_CASE____ResultObject:
        | I____MODEL_ALL_CAMEL_CASE____Row
        | any
        | null = apiGET____MODEL_ALL_CAMEL_CASE____(
          req,
          "____UUID_KEY____",
          uuid
        );

      if (!____MODEL_ALL_CAMEL_CASE____ResultObject) {
        /* #swagger.responses[404] = {
          description: '____MODEL_ALL_CAMEL_CASE____ resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: '____MODEL_ALL_CAMEL_CASE____',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "____MODEL_ALL_CAMEL_CASE____",
          "PATCH"
        );
      }

      // Execute https request
      ____MODEL_ALL_CAMEL_CASE____ResultObject =
        apiDELETE____MODEL_ALL_CAMEL_CASE____(req, uuid, "____UUID_KEY____");

      /* #swagger.responses[201] = {
        description: '____MODEL_ALL_CAMEL_CASE____ resource deleted successfully.',
        schema: {
          '____UUID_KEY____': '____UUID_KEY____'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "____MODEL_ALL_CAMEL_CASE____ resource deleted successfully.",
        ____MODEL_ALL_CAMEL_CASE____ResultObject,
        "____MODEL_ALL_CAMEL_CASE____",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/____MODEL_ALL_HYPHENATED_CASE____" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: '____MODEL_ALL_CAMEL_CASE____',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "____MODEL_ALL_CAMEL_CASE____",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: '____MODEL_ALL_CAMEL_CASE____',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
      error,
      "____MODEL_ALL_CAMEL_CASE____",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of ____MODEL_ALL_CAMEL_CASE____ without the response body.
 *
 * @param req : Request - ____MODEL_ALL_CAMEL_CASE____ request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const ____MODEL_CAMEL_CASE____Head = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['____MODEL_ALL_CAMEL_CASE____']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of ____MODEL_ALL_CAMEL_CASE____ without the response body'
  
      #swagger.path = '/models/____MODEL_ALL_HYPHENATED_CASE____'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the ____MODEL_ALL_CAMEL_CASE____ resource.',
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
            description: 'Could not perform a HEAD request at the "/models/____MODEL_ALL_HYPHENATED_CASE____" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: '____MODEL_ALL_CAMEL_CASE____',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "____MODEL_ALL_CAMEL_CASE____",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: '____MODEL_ALL_CAMEL_CASE____',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
      error,
      "____MODEL_ALL_CAMEL_CASE____",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - ____MODEL_ALL_CAMEL_CASE____ request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const ____MODEL_CAMEL_CASE____Trace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['____MODEL_ALL_CAMEL_CASE____']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/____MODEL_ALL_HYPHENATED_CASE____'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the ____MODEL_ALL_CAMEL_CASE____ resource.',
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
        "____MODEL_ALL_CAMEL_CASE____",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/____MODEL_ALL_HYPHENATED_CASE____" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: '____MODEL_ALL_CAMEL_CASE____',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "____MODEL_ALL_CAMEL_CASE____",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: '____MODEL_ALL_CAMEL_CASE____',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
      error,
      "____MODEL_ALL_CAMEL_CASE____",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - ____MODEL_ALL_CAMEL_CASE____ request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const ____MODEL_CAMEL_CASE____Options = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['____MODEL_ALL_CAMEL_CASE____']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/____MODEL_ALL_HYPHENATED_CASE____'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the ____MODEL_ALL_CAMEL_CASE____ resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/____MODEL_ALL_HYPHENATED_CASE____" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: '____MODEL_ALL_CAMEL_CASE____',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "____MODEL_ALL_CAMEL_CASE____",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: '____MODEL_ALL_CAMEL_CASE____',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the ____MODEL_ALL_HYPHENATED_CASE____ resource.",
      error,
      "____MODEL_ALL_CAMEL_CASE____",
      "OPTIONS"
    );
  }

  // #swagger.end
};
