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
  IInviteUsersInsert,
  IInviteUsersRow,
  IInviteUsersUpdate
} from "./models/InviteUsersTypesDefinitions";

import { InviteUsersSupabaseCls } from "./models/InviteUsersSupabaseCls";
import { InviteUsersMongoDBCls } from "./models/InviteUsersMongoDBCls";
import { InviteUsersFirebaseCls } from "./models/InviteUsersFirebaseCls";
import { InviteUsersMySQLDBCls } from "./models/InviteUsersMySQLDBCls";
import { InviteUsersDTO } from "./models/InviteUsersDTO";

export const payloadSupportsInviteUsersRowInterface: any = (
  payload: any
): payload is IInviteUsersRow => {
  return !!payload?.InviteUsers.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsInviteUsersInsertInterface: any = (
  payload: any
): payload is IInviteUsersInsert => {
  return !!payload?.InviteUsers
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsInviteUsersUpdateInterface: any = (
  payload: any
): payload is IInviteUsersUpdate => {
  return !!payload?.InviteUsers
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new InviteUsersSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IInviteUsersUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new InviteUsersMongoDBCls().insertARow(payload);
          new InviteUsersFirebaseCls().insertARow(payload);
          new InviteUsersMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new InviteUsersMongoDBCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
            
          );
          new InviteUsersFirebaseCls().updateMatchingRows(
            payload,
            "invite_uuid",
            payload.invite_uuid
          );
          new InviteUsersMySQLDBCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          break;
        }

        case "patch": {
          new InviteUsersMongoDBCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          new InviteUsersFirebaseCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          new InviteUsersMySQLDBCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          break;
        }

        case "delete": {
          new InviteUsersMongoDBCls().deleteMatchingRows(
            "invite_uuid",
            payload.invite_uuid
          );
          new InviteUsersFirebaseCls().deleteMatchingRows(
            "invite_uuid",
            payload.invite_uuid
          );
          new InviteUsersMySQLDBCls().deleteMatchingRows(
            "invite_uuid",
            payload.invite_uuid
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
const mongoDBDatabaseClass: any = new InviteUsersMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IInviteUsersUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new InviteUsersSupabaseCls().insertARow(payload);
          new InviteUsersFirebaseCls().insertARow(payload);
          new InviteUsersMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new InviteUsersSupabaseCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          new InviteUsersFirebaseCls().updateMatchingRows(
            payload,
            "invite_uuid",
            payload.invite_uuid
          );
          new InviteUsersMySQLDBCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          break;
        }

        case "patch": {
          new InviteUsersSupabaseCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          new InviteUsersFirebaseCls().updateMatchingRows(
            payload,
            "invite_uuid",
            payload.invite_uuid
          );
          new InviteUsersMySQLDBCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          break;
        }

        case "delete": {
          new InviteUsersSupabaseCls().deleteMatchingRows(
            "invite_uuid",
            payload.invite_uuid
          );
          new InviteUsersFirebaseCls().deleteMatchingRows(
            "invite_uuid",
            payload.invite_uuid
          );
          new InviteUsersMySQLDBCls().deleteMatchingRows(
            "invite_uuid",
            payload.invite_uuid
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
  new InviteUsersSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IInviteUsersUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new InviteUsersSupabaseCls().insertARow(payload);
          new InviteUsersMongoDBCls().insertARow(payload);
          new InviteUsersMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new InviteUsersSupabaseCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          new InviteUsersMongoDBCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          new InviteUsersMySQLDBCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          break;
        }

        case "patch": {
          new InviteUsersSupabaseCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          new InviteUsersMongoDBCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          new InviteUsersMySQLDBCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          break;
        }

        case "delete": {
          new InviteUsersSupabaseCls().deleteMatchingRows(
            "invite_uuid",
            payload.invite_uuid
          );
          new InviteUsersMongoDBCls().deleteMatchingRows(
            "invite_uuid",
            payload.invite_uuid
          );
          new InviteUsersMySQLDBCls().deleteMatchingRows(
            "invite_uuid",
            payload.invite_uuid
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
const mySQLDatabaseClass: any = new InviteUsersSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IInviteUsersUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new InviteUsersSupabaseCls().insertARow(payload);
          new InviteUsersMongoDBCls().insertARow(payload);
          new InviteUsersFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new InviteUsersSupabaseCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          new InviteUsersMongoDBCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          new InviteUsersFirebaseCls().updateMatchingRows(
            payload,
            "invite_uuid",
            payload.invite_uuid
          );
          break;
        }

        case "patch": {
          new InviteUsersSupabaseCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          new InviteUsersMongoDBCls().updateMatchingRows(
            payload,
            payload.invite_uuid,
            "invite_uuid"
          );
          new InviteUsersFirebaseCls().updateMatchingRows(
            payload,
            "invite_uuid",
            payload.invite_uuid
          );
          break;
        }

        case "delete": {
          new InviteUsersSupabaseCls().deleteMatchingRows(
            "invite_uuid",
            payload.invite_uuid
          );
          new InviteUsersMongoDBCls().deleteMatchingRows(
            "invite_uuid",
            payload.invite_uuid
          );
          new InviteUsersFirebaseCls().deleteMatchingRows(
            "invite_uuid",
            payload.invite_uuid
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
 * Gets, gets or edits a InviteUsers resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IInviteUsersGets interface.
 * @returns IInviteUsersRow data type object
 *
 */
const supabaseGetInviteUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a InviteUsers resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IInviteUsersGets interface.
 * @returns IInviteUsersRow data type object
 *
 */
const mongoDBGetInviteUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a InviteUsers resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IInviteUsersGets interface.
 * @returns IInviteUsersRow data type object
 *
 */
const firebaseGetInviteUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a InviteUsers resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IInviteUsersGets interface.
 * @returns IInviteUsersRow data type object
 *
 */
const mysqlDBGetInviteUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IInviteUsersGets interface.
 * @returns IInviteUsersRow data type object
 *
 */
const apiGETInviteUsers = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IInviteUsersRow | any | null> => {
  // Intitialize the InviteUsersResultObject variable
  let InviteUsersResultObject: IInviteUsersRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      InviteUsersResultObject =
        await supabaseGetInviteUsers(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      InviteUsersResultObject =
        await mongoDBGetInviteUsers(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      InviteUsersResultObject =
        await mongoDBGetInviteUsers(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      InviteUsersResultObject =
        await firebaseGetInviteUsers(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      InviteUsersResultObject =
        await firebaseGetInviteUsers(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      InviteUsersResultObject =
        await mysqlDBGetInviteUsers(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      InviteUsersResultObject =
        await mysqlDBGetInviteUsers(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      InviteUsersResultObject =
        await supabaseGetInviteUsers(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    InviteUsersResultObject =
      await supabaseGetInviteUsers(columnValue, columnName);
  }

  return InviteUsersResultObject;
};

/*
 * Gets an existing InviteUsers resource
 *
 * @param req : Request - InviteUsers request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteUsersGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteUsers']
    #swagger.description = 'Endpoint to get a new InviteUsers resource.'
    #swagger.summary = 'Gets an existing InviteUsers resource.'

    #swagger.path = '/models/invite-users'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['invite_uuid'] = {
      in: 'path',
      description: 'InviteUsers invite_uuid key identifier used to get the resource.',
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
    const { invite_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the InviteUsers resource
      const uuid: string = invite_uuid;

      let InviteUsersResultObject:
        | IInviteUsersRow
        | Array<IInviteUsersRow>
        | any
        | null;

      if (invite_uuid) {
        // Gets the InviteUsers resource from the database
        InviteUsersResultObject =
          apiGETInviteUsers(req, "invite_uuid,", uuid);
      } else {
        // Gets all the models from the InviteUsers resource
        InviteUsersResultObject =
          apiGETInviteUsers(req);
      }

      if (!InviteUsersResultObject) {
        /* #swagger.responses[404] = {
          description: 'InviteUsers resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'InviteUsers',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "InviteUsers resource was not found.",
          InviteUsersResultObject,
          "InviteUsers",
          "PUT"
        );
      }

      // Execute https request
      InviteUsersResultObject =
        apiPUTInviteUsers(
          req,
          InviteUsersResultObject,
          uuid,
          "invite_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'InviteUsers resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/InviteUsers'
          }
          model: 'InviteUsers',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        InviteUsersResultObject,
        "InviteUsers",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/invite-users", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'InviteUsers',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/invite-users", Missing or invalid parameters.',
        req.body,
        "InviteUsers",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the invite-users resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'InviteUsers',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the invite-users resource.",
      error,
      "InviteUsers",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a InviteUsers resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteUsersInsert interface.
 * @returns IInviteUsersRow data type object
 *
 */
const supabasePostInviteUsers = async (
  payload: any
): Promise<IInviteUsersInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a InviteUsers resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteUsersInsert interface.
 * @returns IInviteUsersRow data type object
 *
 */
const mongoDBPostInviteUsers = async (
  payload: any
): Promise<IInviteUsersRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a InviteUsers resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteUsersInsert interface.
 * @returns IInviteUsersRow data type object
 *
 */
const firebasePostInviteUsers = async (
  payload: any
): Promise<IInviteUsersInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a InviteUsers resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteUsersInsert interface.
 * @returns IInviteUsersRow data type object
 *
 */
const mysqlDBPostInviteUsers = async (
  payload: any
): Promise<IInviteUsersInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a InviteUsers resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteUsersInsert interface.
 * @returns IInviteUsersRow data type object
 *
 */
const apiPOSTInviteUsers = async (
  req: any,
  payload: any
): Promise<IInviteUsersInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the InviteUsers resource into the database
  let InviteUsersResultObject:
    | IInviteUsersRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      InviteUsersResultObject =
        await supabasePostInviteUsers(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      InviteUsersResultObject =
        await mongoDBPostInviteUsers(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      InviteUsersResultObject =
        await mongoDBPostInviteUsers(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      InviteUsersResultObject =
        await firebasePostInviteUsers(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      InviteUsersResultObject =
        await firebasePostInviteUsers(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      InviteUsersResultObject =
        await mysqlDBPostInviteUsers(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      InviteUsersResultObject =
        await mysqlDBPostInviteUsers(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      InviteUsersResultObject =
        await supabasePostInviteUsers(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    InviteUsersResultObject =
      await supabasePostInviteUsers(payload);
  }

  return InviteUsersResultObject;
};

/*
 * Creates a new InviteUsers resource
 *
 * @param req : Request - InviteUsers request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteUsersPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteUsers']
    #swagger.description = 'Endpoint to create a new InviteUsers resource.'
    #swagger.summary = 'Creates a new InviteUsers resource.'

    #swagger.path = '/models/invite-users'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the InviteUsers resource.',
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
      payloadSupportsInviteUsersInsertInterface(payload)
    ) {
      // Compose the InviteUsers request object
      const InviteUsersData: IInviteUsersInsert =
      {
				fid: payload.fid,
				invite_created_at: payload.invite_created_at,
				invite_from: payload.invite_from,
				invite_id: payload.invite_id,
				invite_reward: payload.invite_reward,
				invite_to: payload.invite_to,
				invite_updated_at: payload.invite_updated_at,
				invite_uuid: payload.invite_uuid,
				link_id: payload.link_id,
      };

      // Insert the InviteUsers resource into the database
      let InviteUsersResultObject:
        | IInviteUsersRow
        | any
        | null;

      // Execute https request
      InviteUsersResultObject =
        apiPOSTInviteUsers(
          req,
          InviteUsersData
        );

      /* #swagger.responses[201] = {
        description: 'InviteUsers resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/InviteUsers'
          }
          model: 'InviteUsers',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "InviteUsers resource created successfully.",
        InviteUsersResultObject,
        "InviteUsers",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/invite-users". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'InviteUsers',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/invite-users". Missing or invalid parameters.',
        req.body,
        "InviteUsers",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the invite-users resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'InviteUsers',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the invite-users resource.",
      error,
      "InviteUsers",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a InviteUsers resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteUsersUpdate interface.
 * @returns IInviteUsersRow data type object
 *
 */
const supabasePutInviteUsers = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a InviteUsers resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteUsersUpdate interface.
 * @returns IInviteUsersRow data type object
 *
 */
const mongoDBPutInviteUsers = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a InviteUsers resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteUsersUpdate interface.
 * @returns IInviteUsersRow data type object
 *
 */
const firebasePutInviteUsers = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a InviteUsers resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteUsersUpdate interface.
 * @returns IInviteUsersRow data type object
 *
 */
const mysqlDBPutInviteUsers = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteUsersUpdate interface.
 * @returns IInviteUsersRow data type object
 *
 */
const apiPUTInviteUsers = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersInsert | any | null> => {
  // Intitialize the InviteUsersResultObject variable
  let InviteUsersResultObject: IInviteUsersRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      InviteUsersResultObject =
        await supabasePutInviteUsers(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      InviteUsersResultObject =
        await mongoDBPutInviteUsers(
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
      InviteUsersResultObject =
        await mongoDBPutInviteUsers(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      InviteUsersResultObject =
        await firebasePutInviteUsers(
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
      InviteUsersResultObject =
        await firebasePutInviteUsers(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      InviteUsersResultObject =
        await mysqlDBPutInviteUsers(
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
      InviteUsersResultObject =
        await mysqlDBPutInviteUsers(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      InviteUsersResultObject =
        await supabasePutInviteUsers(
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
    InviteUsersResultObject =
      await supabasePutInviteUsers(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return InviteUsersResultObject;
};

/*
 * Updates an existing InviteUsers resource
 *
 * @param req : Request - InviteUsers request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteUsersPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteUsers']
    #swagger.description = 'Endpoint to update a new InviteUsers resource.'
    #swagger.summary = 'Updates a new InviteUsers resource.'

    #swagger.path = '/models/invite-users'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['invite_uuid'] = {
      in: 'path',
      description: 'InviteUsers invite_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the InviteUsers resource.',
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
    const { invite_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      invite_uuid &&
      payload &&
      payloadSupportsInviteUsersUpdateInterface(payload)
    ) {
      // Get the uuid to identify the InviteUsers resource
      const uuid: string = invite_uuid;

      // Compose the InviteUsers request object
      const InviteUsersData: IInviteUsersRow = {};
      
				if('fid' in payload){ InviteUsersData.fid = payload.fid; }
				if('invite_created_at' in payload){ InviteUsersData.invite_created_at = payload.invite_created_at; }
				if('invite_from' in payload){ InviteUsersData.invite_from = payload.invite_from; }
				if('invite_id' in payload){ InviteUsersData.invite_id = payload.invite_id; }
				if('invite_reward' in payload){ InviteUsersData.invite_reward = payload.invite_reward; }
				if('invite_to' in payload){ InviteUsersData.invite_to = payload.invite_to; }
				if('invite_updated_at' in payload){ InviteUsersData.invite_updated_at = payload.invite_updated_at; }
				if('invite_uuid' in payload){ InviteUsersData.invite_uuid = payload.invite_uuid; }
				if('link_id' in payload){ InviteUsersData.link_id = payload.link_id; }

      // Gets the InviteUsers resource from the database
      let InviteUsersResultObject:
        | IInviteUsersRow
        | any
        | null = apiGETInviteUsers(
          req,
          "invite_uuid",
          uuid
        );

      if (!InviteUsersResultObject) {
        /* #swagger.responses[404] = {
          description: 'InviteUsers resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'InviteUsers',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "InviteUsers",
          "PUT"
        );
      }

      // Execute https request
      InviteUsersResultObject =
        apiPUTInviteUsers(
          req,
          InviteUsersData,
          uuid,
          "invite_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'InviteUsers resource updated successfully.',
        schema: {
          $ref: '#/definitions/InviteUsers'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "InviteUsers resource updated successfully.",
        InviteUsersResultObject,
        "InviteUsers",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/invite-users" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'InviteUsers',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "InviteUsers",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the invite-users resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'InviteUsers',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the invite-users resource.",
      error,
      "InviteUsers",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing InviteUsers resource partially
 *
 * @param req : Request - InviteUsers partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteUsersPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteUsers']
    #swagger.description = 'Endpoint to update a new InviteUsers resource.'
    #swagger.summary = 'Updates a new InviteUsers resource.'

    #swagger.path = '/models/invite-users'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['invite_uuid'] = {
      in: 'path',
      description: 'InviteUsers invite_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the InviteUsers resource.',
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
    const { invite_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      invite_uuid &&
      payload &&
      payloadSupportsInviteUsersUpdateInterface(payload)
    ) {
      // Get the uuid to identify the InviteUsers resource
      const uuid: string = invite_uuid;

      // Compose the InviteUsers request object
      const InviteUsersData: IInviteUsersRow = {};
      
				if('fid' in payload){ InviteUsersData.fid = payload.fid; }
				if('invite_created_at' in payload){ InviteUsersData.invite_created_at = payload.invite_created_at; }
				if('invite_from' in payload){ InviteUsersData.invite_from = payload.invite_from; }
				if('invite_id' in payload){ InviteUsersData.invite_id = payload.invite_id; }
				if('invite_reward' in payload){ InviteUsersData.invite_reward = payload.invite_reward; }
				if('invite_to' in payload){ InviteUsersData.invite_to = payload.invite_to; }
				if('invite_updated_at' in payload){ InviteUsersData.invite_updated_at = payload.invite_updated_at; }
				if('invite_uuid' in payload){ InviteUsersData.invite_uuid = payload.invite_uuid; }
				if('link_id' in payload){ InviteUsersData.link_id = payload.link_id; }

      // Gets the InviteUsers resource from the database
      let InviteUsersResultObject:
        | IInviteUsersRow
        | any
        | null = apiGETInviteUsers(
          req,
          "invite_uuid",
          uuid
        );

      if (!InviteUsersResultObject) {
        /* #swagger.responses[404] = {
          description: 'InviteUsers resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'InviteUsers',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "InviteUsers",
          "PATCH"
        );
      }

      // Execute https request
      InviteUsersResultObject =
        apiPUTInviteUsers(
          req,
          InviteUsersData,
          uuid,
          "invite_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'InviteUsers resource updated successfully.',
        schema: {
          $ref: '#/definitions/InviteUsers'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "InviteUsers resource updated successfully.",
        InviteUsersResultObject,
        "InviteUsers",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/invite-users" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'InviteUsers',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "InviteUsers",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the invite-users resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'InviteUsers',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the invite-users resource.",
      error,
      "InviteUsers",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a InviteUsers resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IInviteUsersRow data type object
 *
 */
const supabaseDeleteInviteUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a InviteUsers resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IInviteUsersRow data type object
 *
 */
const mongoDBDeleteInviteUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a InviteUsers resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IInviteUsersRow data type object
 *
 */
const firebaseDeleteInviteUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a InviteUsers resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IInviteUsersRow data type object
 *
 */
const mysqlDBDeleteInviteUsers = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IInviteUsersRow data type object
 *
 */
const apiDELETEInviteUsers = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IInviteUsersInsert | any | null> => {
  // Intitialize the InviteUsersResultObject variable
  let InviteUsersResultObject: IInviteUsersRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      InviteUsersResultObject =
        await supabaseDeleteInviteUsers(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      InviteUsersResultObject =
        await mongoDBDeleteInviteUsers(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      InviteUsersResultObject =
        await mongoDBDeleteInviteUsers(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      InviteUsersResultObject =
        await firebaseDeleteInviteUsers(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      InviteUsersResultObject =
        await firebaseDeleteInviteUsers(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      InviteUsersResultObject =
        await mysqlDBDeleteInviteUsers(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      InviteUsersResultObject =
        await mysqlDBDeleteInviteUsers(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      InviteUsersResultObject =
        await supabaseDeleteInviteUsers(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    InviteUsersResultObject =
      await supabaseDeleteInviteUsers(columnValue, columnName);
  }

  return InviteUsersResultObject;
};

/*
 * Deletes an existing InviteUsers resource
 *
 * @param req : Request - InviteUsers request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteUsersDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteUsers']
    #swagger.description = 'Endpoint to delete a new InviteUsers resource.'
    #swagger.summary = 'Updates a new InviteUsers resource.'

    #swagger.path = '/models/invite-users'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['invite_uuid'] = {
      in: 'path',
      description: 'InviteUsers invite_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the InviteUsers resource.',
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
    const { invite_uuid } = req.params;

    // If all the parameters are available, its a go
    if (invite_uuid) {
      // Get the uuid to identify the InviteUsers resource
      const uuid: string = invite_uuid;

      // Gets the InviteUsers resource from the database
      let InviteUsersResultObject:
        | IInviteUsersRow
        | any
        | null = apiGETInviteUsers(
          req,
          "invite_uuid",
          uuid
        );

      if (!InviteUsersResultObject) {
        /* #swagger.responses[404] = {
          description: 'InviteUsers resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'InviteUsers',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "InviteUsers",
          "PATCH"
        );
      }

      // Execute https request
      InviteUsersResultObject =
        apiDELETEInviteUsers(req, uuid, "invite_uuid");

      /* #swagger.responses[201] = {
        description: 'InviteUsers resource deleted successfully.',
        schema: {
          'invite_uuid': 'invite_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "InviteUsers resource deleted successfully.",
        InviteUsersResultObject,
        "InviteUsers",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/invite-users" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'InviteUsers',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "InviteUsers",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the invite-users resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'InviteUsers',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the invite-users resource.",
      error,
      "InviteUsers",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of InviteUsers without the response body.
 *
 * @param req : Request - InviteUsers request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteUsersHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteUsers']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of InviteUsers without the response body'
  
      #swagger.path = '/models/invite-users'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the InviteUsers resource.',
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
            description: 'Could not perform a HEAD request at the "/models/invite-users" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'InviteUsers',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "InviteUsers",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the invite-users resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'InviteUsers',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the invite-users resource.",
      error,
      "InviteUsers",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - InviteUsers request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteUsersTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteUsers']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/invite-users'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the InviteUsers resource.',
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
        "InviteUsers",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/invite-users" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'InviteUsers',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "InviteUsers",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the invite-users resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'InviteUsers',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the invite-users resource.",
      error,
      "InviteUsers",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - InviteUsers request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteUsersOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteUsers']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/invite-users'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the InviteUsers resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/invite-users" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'InviteUsers',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "InviteUsers",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the invite-users resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'InviteUsers',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the invite-users resource.",
      error,
      "InviteUsers",
      "OPTIONS"
    );
  }

  // #swagger.end
};
