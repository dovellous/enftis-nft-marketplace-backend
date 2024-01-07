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
  IInviteLinksInsert,
  IInviteLinksRow,
  IInviteLinksUpdate
} from "./models/InviteLinksTypesDefinitions";

import { InviteLinksSupabaseCls } from "./models/InviteLinksSupabaseCls";
import { InviteLinksMongoDBCls } from "./models/InviteLinksMongoDBCls";
import { InviteLinksFirebaseCls } from "./models/InviteLinksFirebaseCls";
import { InviteLinksMySQLDBCls } from "./models/InviteLinksMySQLDBCls";
import { InviteLinksDTO } from "./models/InviteLinksDTO";

export const payloadSupportsInviteLinksRowInterface: any = (
  payload: any
): payload is IInviteLinksRow => {
  return !!payload?.InviteLinks.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsInviteLinksInsertInterface: any = (
  payload: any
): payload is IInviteLinksInsert => {
  return !!payload?.InviteLinks
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsInviteLinksUpdateInterface: any = (
  payload: any
): payload is IInviteLinksUpdate => {
  return !!payload?.InviteLinks
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new InviteLinksSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IInviteLinksUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new InviteLinksMongoDBCls().insertARow(payload);
          new InviteLinksFirebaseCls().insertARow(payload);
          new InviteLinksMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new InviteLinksMongoDBCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
            
          );
          new InviteLinksFirebaseCls().updateMatchingRows(
            payload,
            "link_uuid",
            payload.link_uuid
          );
          new InviteLinksMySQLDBCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          break;
        }

        case "patch": {
          new InviteLinksMongoDBCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          new InviteLinksFirebaseCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          new InviteLinksMySQLDBCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          break;
        }

        case "delete": {
          new InviteLinksMongoDBCls().deleteMatchingRows(
            "link_uuid",
            payload.link_uuid
          );
          new InviteLinksFirebaseCls().deleteMatchingRows(
            "link_uuid",
            payload.link_uuid
          );
          new InviteLinksMySQLDBCls().deleteMatchingRows(
            "link_uuid",
            payload.link_uuid
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
const mongoDBDatabaseClass: any = new InviteLinksMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IInviteLinksUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new InviteLinksSupabaseCls().insertARow(payload);
          new InviteLinksFirebaseCls().insertARow(payload);
          new InviteLinksMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new InviteLinksSupabaseCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          new InviteLinksFirebaseCls().updateMatchingRows(
            payload,
            "link_uuid",
            payload.link_uuid
          );
          new InviteLinksMySQLDBCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          break;
        }

        case "patch": {
          new InviteLinksSupabaseCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          new InviteLinksFirebaseCls().updateMatchingRows(
            payload,
            "link_uuid",
            payload.link_uuid
          );
          new InviteLinksMySQLDBCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          break;
        }

        case "delete": {
          new InviteLinksSupabaseCls().deleteMatchingRows(
            "link_uuid",
            payload.link_uuid
          );
          new InviteLinksFirebaseCls().deleteMatchingRows(
            "link_uuid",
            payload.link_uuid
          );
          new InviteLinksMySQLDBCls().deleteMatchingRows(
            "link_uuid",
            payload.link_uuid
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
  new InviteLinksSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IInviteLinksUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new InviteLinksSupabaseCls().insertARow(payload);
          new InviteLinksMongoDBCls().insertARow(payload);
          new InviteLinksMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new InviteLinksSupabaseCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          new InviteLinksMongoDBCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          new InviteLinksMySQLDBCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          break;
        }

        case "patch": {
          new InviteLinksSupabaseCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          new InviteLinksMongoDBCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          new InviteLinksMySQLDBCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          break;
        }

        case "delete": {
          new InviteLinksSupabaseCls().deleteMatchingRows(
            "link_uuid",
            payload.link_uuid
          );
          new InviteLinksMongoDBCls().deleteMatchingRows(
            "link_uuid",
            payload.link_uuid
          );
          new InviteLinksMySQLDBCls().deleteMatchingRows(
            "link_uuid",
            payload.link_uuid
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
const mySQLDatabaseClass: any = new InviteLinksSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IInviteLinksUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new InviteLinksSupabaseCls().insertARow(payload);
          new InviteLinksMongoDBCls().insertARow(payload);
          new InviteLinksFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new InviteLinksSupabaseCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          new InviteLinksMongoDBCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          new InviteLinksFirebaseCls().updateMatchingRows(
            payload,
            "link_uuid",
            payload.link_uuid
          );
          break;
        }

        case "patch": {
          new InviteLinksSupabaseCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          new InviteLinksMongoDBCls().updateMatchingRows(
            payload,
            payload.link_uuid,
            "link_uuid"
          );
          new InviteLinksFirebaseCls().updateMatchingRows(
            payload,
            "link_uuid",
            payload.link_uuid
          );
          break;
        }

        case "delete": {
          new InviteLinksSupabaseCls().deleteMatchingRows(
            "link_uuid",
            payload.link_uuid
          );
          new InviteLinksMongoDBCls().deleteMatchingRows(
            "link_uuid",
            payload.link_uuid
          );
          new InviteLinksFirebaseCls().deleteMatchingRows(
            "link_uuid",
            payload.link_uuid
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
 * Gets, gets or edits a InviteLinks resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IInviteLinksGets interface.
 * @returns IInviteLinksRow data type object
 *
 */
const supabaseGetInviteLinks = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a InviteLinks resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IInviteLinksGets interface.
 * @returns IInviteLinksRow data type object
 *
 */
const mongoDBGetInviteLinks = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a InviteLinks resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IInviteLinksGets interface.
 * @returns IInviteLinksRow data type object
 *
 */
const firebaseGetInviteLinks = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a InviteLinks resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IInviteLinksGets interface.
 * @returns IInviteLinksRow data type object
 *
 */
const mysqlDBGetInviteLinks = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IInviteLinksGets interface.
 * @returns IInviteLinksRow data type object
 *
 */
const apiGETInviteLinks = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IInviteLinksRow | any | null> => {
  // Intitialize the InviteLinksResultObject variable
  let InviteLinksResultObject: IInviteLinksRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      InviteLinksResultObject =
        await supabaseGetInviteLinks(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      InviteLinksResultObject =
        await mongoDBGetInviteLinks(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      InviteLinksResultObject =
        await mongoDBGetInviteLinks(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      InviteLinksResultObject =
        await firebaseGetInviteLinks(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      InviteLinksResultObject =
        await firebaseGetInviteLinks(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      InviteLinksResultObject =
        await mysqlDBGetInviteLinks(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      InviteLinksResultObject =
        await mysqlDBGetInviteLinks(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      InviteLinksResultObject =
        await supabaseGetInviteLinks(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    InviteLinksResultObject =
      await supabaseGetInviteLinks(columnValue, columnName);
  }

  return InviteLinksResultObject;
};

/*
 * Gets an existing InviteLinks resource
 *
 * @param req : Request - InviteLinks request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteLinksGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteLinks']
    #swagger.description = 'Endpoint to get a new InviteLinks resource.'
    #swagger.summary = 'Gets an existing InviteLinks resource.'

    #swagger.path = '/models/invite-links'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['link_uuid'] = {
      in: 'path',
      description: 'InviteLinks link_uuid key identifier used to get the resource.',
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
    const { link_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the InviteLinks resource
      const uuid: string = link_uuid;

      let InviteLinksResultObject:
        | IInviteLinksRow
        | Array<IInviteLinksRow>
        | any
        | null;

      if (link_uuid) {
        // Gets the InviteLinks resource from the database
        InviteLinksResultObject =
          apiGETInviteLinks(req, "link_uuid,", uuid);
      } else {
        // Gets all the models from the InviteLinks resource
        InviteLinksResultObject =
          apiGETInviteLinks(req);
      }

      if (!InviteLinksResultObject) {
        /* #swagger.responses[404] = {
          description: 'InviteLinks resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'InviteLinks',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "InviteLinks resource was not found.",
          InviteLinksResultObject,
          "InviteLinks",
          "PUT"
        );
      }

      // Execute https request
      InviteLinksResultObject =
        apiPUTInviteLinks(
          req,
          InviteLinksResultObject,
          uuid,
          "link_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'InviteLinks resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/InviteLinks'
          }
          model: 'InviteLinks',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        InviteLinksResultObject,
        "InviteLinks",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/invite-links", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'InviteLinks',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/invite-links", Missing or invalid parameters.',
        req.body,
        "InviteLinks",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the invite-links resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'InviteLinks',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the invite-links resource.",
      error,
      "InviteLinks",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a InviteLinks resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteLinksInsert interface.
 * @returns IInviteLinksRow data type object
 *
 */
const supabasePostInviteLinks = async (
  payload: any
): Promise<IInviteLinksInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a InviteLinks resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteLinksInsert interface.
 * @returns IInviteLinksRow data type object
 *
 */
const mongoDBPostInviteLinks = async (
  payload: any
): Promise<IInviteLinksRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a InviteLinks resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteLinksInsert interface.
 * @returns IInviteLinksRow data type object
 *
 */
const firebasePostInviteLinks = async (
  payload: any
): Promise<IInviteLinksInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a InviteLinks resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteLinksInsert interface.
 * @returns IInviteLinksRow data type object
 *
 */
const mysqlDBPostInviteLinks = async (
  payload: any
): Promise<IInviteLinksInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a InviteLinks resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteLinksInsert interface.
 * @returns IInviteLinksRow data type object
 *
 */
const apiPOSTInviteLinks = async (
  req: any,
  payload: any
): Promise<IInviteLinksInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the InviteLinks resource into the database
  let InviteLinksResultObject:
    | IInviteLinksRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      InviteLinksResultObject =
        await supabasePostInviteLinks(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      InviteLinksResultObject =
        await mongoDBPostInviteLinks(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      InviteLinksResultObject =
        await mongoDBPostInviteLinks(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      InviteLinksResultObject =
        await firebasePostInviteLinks(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      InviteLinksResultObject =
        await firebasePostInviteLinks(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      InviteLinksResultObject =
        await mysqlDBPostInviteLinks(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      InviteLinksResultObject =
        await mysqlDBPostInviteLinks(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      InviteLinksResultObject =
        await supabasePostInviteLinks(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    InviteLinksResultObject =
      await supabasePostInviteLinks(payload);
  }

  return InviteLinksResultObject;
};

/*
 * Creates a new InviteLinks resource
 *
 * @param req : Request - InviteLinks request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteLinksPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteLinks']
    #swagger.description = 'Endpoint to create a new InviteLinks resource.'
    #swagger.summary = 'Creates a new InviteLinks resource.'

    #swagger.path = '/models/invite-links'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the InviteLinks resource.',
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
      payloadSupportsInviteLinksInsertInterface(payload)
    ) {
      // Compose the InviteLinks request object
      const InviteLinksData: IInviteLinksInsert =
      {
				fid: payload.fid,
				link: payload.link,
				link_created_at: payload.link_created_at,
				link_expires: payload.link_expires,
				link_id: payload.link_id,
				link_updated_at: payload.link_updated_at,
				link_uuid: payload.link_uuid,
				user_id: payload.user_id,
      };

      // Insert the InviteLinks resource into the database
      let InviteLinksResultObject:
        | IInviteLinksRow
        | any
        | null;

      // Execute https request
      InviteLinksResultObject =
        apiPOSTInviteLinks(
          req,
          InviteLinksData
        );

      /* #swagger.responses[201] = {
        description: 'InviteLinks resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/InviteLinks'
          }
          model: 'InviteLinks',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "InviteLinks resource created successfully.",
        InviteLinksResultObject,
        "InviteLinks",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/invite-links". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'InviteLinks',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/invite-links". Missing or invalid parameters.',
        req.body,
        "InviteLinks",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the invite-links resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'InviteLinks',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the invite-links resource.",
      error,
      "InviteLinks",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a InviteLinks resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteLinksUpdate interface.
 * @returns IInviteLinksRow data type object
 *
 */
const supabasePutInviteLinks = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a InviteLinks resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteLinksUpdate interface.
 * @returns IInviteLinksRow data type object
 *
 */
const mongoDBPutInviteLinks = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a InviteLinks resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteLinksUpdate interface.
 * @returns IInviteLinksRow data type object
 *
 */
const firebasePutInviteLinks = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a InviteLinks resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteLinksUpdate interface.
 * @returns IInviteLinksRow data type object
 *
 */
const mysqlDBPutInviteLinks = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IInviteLinksUpdate interface.
 * @returns IInviteLinksRow data type object
 *
 */
const apiPUTInviteLinks = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksInsert | any | null> => {
  // Intitialize the InviteLinksResultObject variable
  let InviteLinksResultObject: IInviteLinksRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      InviteLinksResultObject =
        await supabasePutInviteLinks(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      InviteLinksResultObject =
        await mongoDBPutInviteLinks(
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
      InviteLinksResultObject =
        await mongoDBPutInviteLinks(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      InviteLinksResultObject =
        await firebasePutInviteLinks(
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
      InviteLinksResultObject =
        await firebasePutInviteLinks(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      InviteLinksResultObject =
        await mysqlDBPutInviteLinks(
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
      InviteLinksResultObject =
        await mysqlDBPutInviteLinks(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      InviteLinksResultObject =
        await supabasePutInviteLinks(
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
    InviteLinksResultObject =
      await supabasePutInviteLinks(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return InviteLinksResultObject;
};

/*
 * Updates an existing InviteLinks resource
 *
 * @param req : Request - InviteLinks request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteLinksPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteLinks']
    #swagger.description = 'Endpoint to update a new InviteLinks resource.'
    #swagger.summary = 'Updates a new InviteLinks resource.'

    #swagger.path = '/models/invite-links'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['link_uuid'] = {
      in: 'path',
      description: 'InviteLinks link_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the InviteLinks resource.',
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
    const { link_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      link_uuid &&
      payload &&
      payloadSupportsInviteLinksUpdateInterface(payload)
    ) {
      // Get the uuid to identify the InviteLinks resource
      const uuid: string = link_uuid;

      // Compose the InviteLinks request object
      const InviteLinksData: IInviteLinksRow = {};
      
				if('fid' in payload){ InviteLinksData.fid = payload.fid; }
				if('link' in payload){ InviteLinksData.link = payload.link; }
				if('link_created_at' in payload){ InviteLinksData.link_created_at = payload.link_created_at; }
				if('link_expires' in payload){ InviteLinksData.link_expires = payload.link_expires; }
				if('link_id' in payload){ InviteLinksData.link_id = payload.link_id; }
				if('link_updated_at' in payload){ InviteLinksData.link_updated_at = payload.link_updated_at; }
				if('link_uuid' in payload){ InviteLinksData.link_uuid = payload.link_uuid; }
				if('user_id' in payload){ InviteLinksData.user_id = payload.user_id; }

      // Gets the InviteLinks resource from the database
      let InviteLinksResultObject:
        | IInviteLinksRow
        | any
        | null = apiGETInviteLinks(
          req,
          "link_uuid",
          uuid
        );

      if (!InviteLinksResultObject) {
        /* #swagger.responses[404] = {
          description: 'InviteLinks resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'InviteLinks',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "InviteLinks",
          "PUT"
        );
      }

      // Execute https request
      InviteLinksResultObject =
        apiPUTInviteLinks(
          req,
          InviteLinksData,
          uuid,
          "link_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'InviteLinks resource updated successfully.',
        schema: {
          $ref: '#/definitions/InviteLinks'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "InviteLinks resource updated successfully.",
        InviteLinksResultObject,
        "InviteLinks",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/invite-links" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'InviteLinks',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "InviteLinks",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the invite-links resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'InviteLinks',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the invite-links resource.",
      error,
      "InviteLinks",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing InviteLinks resource partially
 *
 * @param req : Request - InviteLinks partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteLinksPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteLinks']
    #swagger.description = 'Endpoint to update a new InviteLinks resource.'
    #swagger.summary = 'Updates a new InviteLinks resource.'

    #swagger.path = '/models/invite-links'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['link_uuid'] = {
      in: 'path',
      description: 'InviteLinks link_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the InviteLinks resource.',
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
    const { link_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      link_uuid &&
      payload &&
      payloadSupportsInviteLinksUpdateInterface(payload)
    ) {
      // Get the uuid to identify the InviteLinks resource
      const uuid: string = link_uuid;

      // Compose the InviteLinks request object
      const InviteLinksData: IInviteLinksRow = {};
      
				if('fid' in payload){ InviteLinksData.fid = payload.fid; }
				if('link' in payload){ InviteLinksData.link = payload.link; }
				if('link_created_at' in payload){ InviteLinksData.link_created_at = payload.link_created_at; }
				if('link_expires' in payload){ InviteLinksData.link_expires = payload.link_expires; }
				if('link_id' in payload){ InviteLinksData.link_id = payload.link_id; }
				if('link_updated_at' in payload){ InviteLinksData.link_updated_at = payload.link_updated_at; }
				if('link_uuid' in payload){ InviteLinksData.link_uuid = payload.link_uuid; }
				if('user_id' in payload){ InviteLinksData.user_id = payload.user_id; }

      // Gets the InviteLinks resource from the database
      let InviteLinksResultObject:
        | IInviteLinksRow
        | any
        | null = apiGETInviteLinks(
          req,
          "link_uuid",
          uuid
        );

      if (!InviteLinksResultObject) {
        /* #swagger.responses[404] = {
          description: 'InviteLinks resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'InviteLinks',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "InviteLinks",
          "PATCH"
        );
      }

      // Execute https request
      InviteLinksResultObject =
        apiPUTInviteLinks(
          req,
          InviteLinksData,
          uuid,
          "link_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'InviteLinks resource updated successfully.',
        schema: {
          $ref: '#/definitions/InviteLinks'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "InviteLinks resource updated successfully.",
        InviteLinksResultObject,
        "InviteLinks",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/invite-links" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'InviteLinks',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "InviteLinks",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the invite-links resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'InviteLinks',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the invite-links resource.",
      error,
      "InviteLinks",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a InviteLinks resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IInviteLinksRow data type object
 *
 */
const supabaseDeleteInviteLinks = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a InviteLinks resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IInviteLinksRow data type object
 *
 */
const mongoDBDeleteInviteLinks = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a InviteLinks resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IInviteLinksRow data type object
 *
 */
const firebaseDeleteInviteLinks = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a InviteLinks resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IInviteLinksRow data type object
 *
 */
const mysqlDBDeleteInviteLinks = async (
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IInviteLinksRow data type object
 *
 */
const apiDELETEInviteLinks = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IInviteLinksInsert | any | null> => {
  // Intitialize the InviteLinksResultObject variable
  let InviteLinksResultObject: IInviteLinksRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      InviteLinksResultObject =
        await supabaseDeleteInviteLinks(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      InviteLinksResultObject =
        await mongoDBDeleteInviteLinks(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      InviteLinksResultObject =
        await mongoDBDeleteInviteLinks(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      InviteLinksResultObject =
        await firebaseDeleteInviteLinks(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      InviteLinksResultObject =
        await firebaseDeleteInviteLinks(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      InviteLinksResultObject =
        await mysqlDBDeleteInviteLinks(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      InviteLinksResultObject =
        await mysqlDBDeleteInviteLinks(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      InviteLinksResultObject =
        await supabaseDeleteInviteLinks(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    InviteLinksResultObject =
      await supabaseDeleteInviteLinks(columnValue, columnName);
  }

  return InviteLinksResultObject;
};

/*
 * Deletes an existing InviteLinks resource
 *
 * @param req : Request - InviteLinks request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteLinksDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteLinks']
    #swagger.description = 'Endpoint to delete a new InviteLinks resource.'
    #swagger.summary = 'Updates a new InviteLinks resource.'

    #swagger.path = '/models/invite-links'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['link_uuid'] = {
      in: 'path',
      description: 'InviteLinks link_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the InviteLinks resource.',
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
    const { link_uuid } = req.params;

    // If all the parameters are available, its a go
    if (link_uuid) {
      // Get the uuid to identify the InviteLinks resource
      const uuid: string = link_uuid;

      // Gets the InviteLinks resource from the database
      let InviteLinksResultObject:
        | IInviteLinksRow
        | any
        | null = apiGETInviteLinks(
          req,
          "link_uuid",
          uuid
        );

      if (!InviteLinksResultObject) {
        /* #swagger.responses[404] = {
          description: 'InviteLinks resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'InviteLinks',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "InviteLinks",
          "PATCH"
        );
      }

      // Execute https request
      InviteLinksResultObject =
        apiDELETEInviteLinks(req, uuid, "link_uuid");

      /* #swagger.responses[201] = {
        description: 'InviteLinks resource deleted successfully.',
        schema: {
          'link_uuid': 'link_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "InviteLinks resource deleted successfully.",
        InviteLinksResultObject,
        "InviteLinks",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/invite-links" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'InviteLinks',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "InviteLinks",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the invite-links resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'InviteLinks',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the invite-links resource.",
      error,
      "InviteLinks",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of InviteLinks without the response body.
 *
 * @param req : Request - InviteLinks request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteLinksHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteLinks']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of InviteLinks without the response body'
  
      #swagger.path = '/models/invite-links'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the InviteLinks resource.',
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
            description: 'Could not perform a HEAD request at the "/models/invite-links" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'InviteLinks',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "InviteLinks",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the invite-links resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'InviteLinks',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the invite-links resource.",
      error,
      "InviteLinks",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - InviteLinks request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteLinksTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteLinks']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/invite-links'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the InviteLinks resource.',
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
        "InviteLinks",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/invite-links" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'InviteLinks',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "InviteLinks",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the invite-links resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'InviteLinks',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the invite-links resource.",
      error,
      "InviteLinks",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - InviteLinks request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const inviteLinksOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['InviteLinks']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/invite-links'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the InviteLinks resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/invite-links" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'InviteLinks',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "InviteLinks",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the invite-links resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'InviteLinks',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the invite-links resource.",
      error,
      "InviteLinks",
      "OPTIONS"
    );
  }

  // #swagger.end
};
