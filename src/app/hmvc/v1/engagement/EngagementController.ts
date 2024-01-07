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
  IEngagementInsert,
  IEngagementRow,
  IEngagementUpdate
} from "./models/EngagementTypesDefinitions";

import { EngagementSupabaseCls } from "./models/EngagementSupabaseCls";
import { EngagementMongoDBCls } from "./models/EngagementMongoDBCls";
import { EngagementFirebaseCls } from "./models/EngagementFirebaseCls";
import { EngagementMySQLDBCls } from "./models/EngagementMySQLDBCls";
import { EngagementDTO } from "./models/EngagementDTO";

export const payloadSupportsEngagementRowInterface: any = (
  payload: any
): payload is IEngagementRow => {
  return !!payload?.Engagement.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsEngagementInsertInterface: any = (
  payload: any
): payload is IEngagementInsert => {
  return !!payload?.Engagement
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsEngagementUpdateInterface: any = (
  payload: any
): payload is IEngagementUpdate => {
  return !!payload?.Engagement
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new EngagementSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IEngagementUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new EngagementMongoDBCls().insertARow(payload);
          new EngagementFirebaseCls().insertARow(payload);
          new EngagementMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new EngagementMongoDBCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
            
          );
          new EngagementFirebaseCls().updateMatchingRows(
            payload,
            "engagement_uuid",
            payload.engagement_uuid
          );
          new EngagementMySQLDBCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          break;
        }

        case "patch": {
          new EngagementMongoDBCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          new EngagementFirebaseCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          new EngagementMySQLDBCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          break;
        }

        case "delete": {
          new EngagementMongoDBCls().deleteMatchingRows(
            "engagement_uuid",
            payload.engagement_uuid
          );
          new EngagementFirebaseCls().deleteMatchingRows(
            "engagement_uuid",
            payload.engagement_uuid
          );
          new EngagementMySQLDBCls().deleteMatchingRows(
            "engagement_uuid",
            payload.engagement_uuid
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
const mongoDBDatabaseClass: any = new EngagementMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IEngagementUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new EngagementSupabaseCls().insertARow(payload);
          new EngagementFirebaseCls().insertARow(payload);
          new EngagementMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new EngagementSupabaseCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          new EngagementFirebaseCls().updateMatchingRows(
            payload,
            "engagement_uuid",
            payload.engagement_uuid
          );
          new EngagementMySQLDBCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          break;
        }

        case "patch": {
          new EngagementSupabaseCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          new EngagementFirebaseCls().updateMatchingRows(
            payload,
            "engagement_uuid",
            payload.engagement_uuid
          );
          new EngagementMySQLDBCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          break;
        }

        case "delete": {
          new EngagementSupabaseCls().deleteMatchingRows(
            "engagement_uuid",
            payload.engagement_uuid
          );
          new EngagementFirebaseCls().deleteMatchingRows(
            "engagement_uuid",
            payload.engagement_uuid
          );
          new EngagementMySQLDBCls().deleteMatchingRows(
            "engagement_uuid",
            payload.engagement_uuid
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
  new EngagementSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IEngagementUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new EngagementSupabaseCls().insertARow(payload);
          new EngagementMongoDBCls().insertARow(payload);
          new EngagementMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new EngagementSupabaseCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          new EngagementMongoDBCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          new EngagementMySQLDBCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          break;
        }

        case "patch": {
          new EngagementSupabaseCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          new EngagementMongoDBCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          new EngagementMySQLDBCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          break;
        }

        case "delete": {
          new EngagementSupabaseCls().deleteMatchingRows(
            "engagement_uuid",
            payload.engagement_uuid
          );
          new EngagementMongoDBCls().deleteMatchingRows(
            "engagement_uuid",
            payload.engagement_uuid
          );
          new EngagementMySQLDBCls().deleteMatchingRows(
            "engagement_uuid",
            payload.engagement_uuid
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
const mySQLDatabaseClass: any = new EngagementSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IEngagementUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new EngagementSupabaseCls().insertARow(payload);
          new EngagementMongoDBCls().insertARow(payload);
          new EngagementFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new EngagementSupabaseCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          new EngagementMongoDBCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          new EngagementFirebaseCls().updateMatchingRows(
            payload,
            "engagement_uuid",
            payload.engagement_uuid
          );
          break;
        }

        case "patch": {
          new EngagementSupabaseCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          new EngagementMongoDBCls().updateMatchingRows(
            payload,
            payload.engagement_uuid,
            "engagement_uuid"
          );
          new EngagementFirebaseCls().updateMatchingRows(
            payload,
            "engagement_uuid",
            payload.engagement_uuid
          );
          break;
        }

        case "delete": {
          new EngagementSupabaseCls().deleteMatchingRows(
            "engagement_uuid",
            payload.engagement_uuid
          );
          new EngagementMongoDBCls().deleteMatchingRows(
            "engagement_uuid",
            payload.engagement_uuid
          );
          new EngagementFirebaseCls().deleteMatchingRows(
            "engagement_uuid",
            payload.engagement_uuid
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
 * Gets, gets or edits a Engagement resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IEngagementGets interface.
 * @returns IEngagementRow data type object
 *
 */
const supabaseGetEngagement = async (
  columnValue: any,
  columnName?: string
): Promise<IEngagementRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Engagement resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IEngagementGets interface.
 * @returns IEngagementRow data type object
 *
 */
const mongoDBGetEngagement = async (
  columnValue: any,
  columnName?: string
): Promise<IEngagementRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Engagement resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IEngagementGets interface.
 * @returns IEngagementRow data type object
 *
 */
const firebaseGetEngagement = async (
  columnValue: any,
  columnName?: string
): Promise<IEngagementRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Engagement resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IEngagementGets interface.
 * @returns IEngagementRow data type object
 *
 */
const mysqlDBGetEngagement = async (
  columnValue: any,
  columnName?: string
): Promise<IEngagementRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IEngagementGets interface.
 * @returns IEngagementRow data type object
 *
 */
const apiGETEngagement = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IEngagementRow | any | null> => {
  // Intitialize the EngagementResultObject variable
  let EngagementResultObject: IEngagementRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      EngagementResultObject =
        await supabaseGetEngagement(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      EngagementResultObject =
        await mongoDBGetEngagement(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      EngagementResultObject =
        await mongoDBGetEngagement(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      EngagementResultObject =
        await firebaseGetEngagement(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      EngagementResultObject =
        await firebaseGetEngagement(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      EngagementResultObject =
        await mysqlDBGetEngagement(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      EngagementResultObject =
        await mysqlDBGetEngagement(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      EngagementResultObject =
        await supabaseGetEngagement(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    EngagementResultObject =
      await supabaseGetEngagement(columnValue, columnName);
  }

  return EngagementResultObject;
};

/*
 * Gets an existing Engagement resource
 *
 * @param req : Request - Engagement request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const engagementGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Engagement']
    #swagger.description = 'Endpoint to get a new Engagement resource.'
    #swagger.summary = 'Gets an existing Engagement resource.'

    #swagger.path = '/models/engagement'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['engagement_uuid'] = {
      in: 'path',
      description: 'Engagement engagement_uuid key identifier used to get the resource.',
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
    const { engagement_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the Engagement resource
      const uuid: string = engagement_uuid;

      let EngagementResultObject:
        | IEngagementRow
        | Array<IEngagementRow>
        | any
        | null;

      if (engagement_uuid) {
        // Gets the Engagement resource from the database
        EngagementResultObject =
          apiGETEngagement(req, "engagement_uuid,", uuid);
      } else {
        // Gets all the models from the Engagement resource
        EngagementResultObject =
          apiGETEngagement(req);
      }

      if (!EngagementResultObject) {
        /* #swagger.responses[404] = {
          description: 'Engagement resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Engagement',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Engagement resource was not found.",
          EngagementResultObject,
          "Engagement",
          "PUT"
        );
      }

      // Execute https request
      EngagementResultObject =
        apiPUTEngagement(
          req,
          EngagementResultObject,
          uuid,
          "engagement_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Engagement resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Engagement'
          }
          model: 'Engagement',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        EngagementResultObject,
        "Engagement",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/engagement", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'Engagement',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/engagement", Missing or invalid parameters.',
        req.body,
        "Engagement",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the engagement resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'Engagement',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the engagement resource.",
      error,
      "Engagement",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a Engagement resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IEngagementInsert interface.
 * @returns IEngagementRow data type object
 *
 */
const supabasePostEngagement = async (
  payload: any
): Promise<IEngagementInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Engagement resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IEngagementInsert interface.
 * @returns IEngagementRow data type object
 *
 */
const mongoDBPostEngagement = async (
  payload: any
): Promise<IEngagementRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Engagement resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IEngagementInsert interface.
 * @returns IEngagementRow data type object
 *
 */
const firebasePostEngagement = async (
  payload: any
): Promise<IEngagementInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Engagement resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IEngagementInsert interface.
 * @returns IEngagementRow data type object
 *
 */
const mysqlDBPostEngagement = async (
  payload: any
): Promise<IEngagementInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Engagement resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IEngagementInsert interface.
 * @returns IEngagementRow data type object
 *
 */
const apiPOSTEngagement = async (
  req: any,
  payload: any
): Promise<IEngagementInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the Engagement resource into the database
  let EngagementResultObject:
    | IEngagementRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      EngagementResultObject =
        await supabasePostEngagement(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      EngagementResultObject =
        await mongoDBPostEngagement(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      EngagementResultObject =
        await mongoDBPostEngagement(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      EngagementResultObject =
        await firebasePostEngagement(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      EngagementResultObject =
        await firebasePostEngagement(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      EngagementResultObject =
        await mysqlDBPostEngagement(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      EngagementResultObject =
        await mysqlDBPostEngagement(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      EngagementResultObject =
        await supabasePostEngagement(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    EngagementResultObject =
      await supabasePostEngagement(payload);
  }

  return EngagementResultObject;
};

/*
 * Creates a new Engagement resource
 *
 * @param req : Request - Engagement request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const engagementPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Engagement']
    #swagger.description = 'Endpoint to create a new Engagement resource.'
    #swagger.summary = 'Creates a new Engagement resource.'

    #swagger.path = '/models/engagement'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the Engagement resource.',
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
      payloadSupportsEngagementInsertInterface(payload)
    ) {
      // Compose the Engagement request object
      const EngagementData: IEngagementInsert =
      {
				engagement_claimed_off_days: payload.engagement_claimed_off_days,
				engagement_consecutive_days: payload.engagement_consecutive_days,
				engagement_created_at: payload.engagement_created_at,
				engagement_id: payload.engagement_id,
				engagement_off_days: payload.engagement_off_days,
				engagement_updated_at: payload.engagement_updated_at,
				engagement_uuid: payload.engagement_uuid,
				fid: payload.fid,
				user_id: payload.user_id,
      };

      // Insert the Engagement resource into the database
      let EngagementResultObject:
        | IEngagementRow
        | any
        | null;

      // Execute https request
      EngagementResultObject =
        apiPOSTEngagement(
          req,
          EngagementData
        );

      /* #swagger.responses[201] = {
        description: 'Engagement resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Engagement'
          }
          model: 'Engagement',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Engagement resource created successfully.",
        EngagementResultObject,
        "Engagement",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/engagement". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'Engagement',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/engagement". Missing or invalid parameters.',
        req.body,
        "Engagement",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the engagement resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'Engagement',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the engagement resource.",
      error,
      "Engagement",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a Engagement resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IEngagementUpdate interface.
 * @returns IEngagementRow data type object
 *
 */
const supabasePutEngagement = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IEngagementInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Engagement resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IEngagementUpdate interface.
 * @returns IEngagementRow data type object
 *
 */
const mongoDBPutEngagement = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IEngagementRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Engagement resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IEngagementUpdate interface.
 * @returns IEngagementRow data type object
 *
 */
const firebasePutEngagement = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IEngagementInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Engagement resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IEngagementUpdate interface.
 * @returns IEngagementRow data type object
 *
 */
const mysqlDBPutEngagement = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IEngagementInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IEngagementUpdate interface.
 * @returns IEngagementRow data type object
 *
 */
const apiPUTEngagement = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IEngagementInsert | any | null> => {
  // Intitialize the EngagementResultObject variable
  let EngagementResultObject: IEngagementRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      EngagementResultObject =
        await supabasePutEngagement(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      EngagementResultObject =
        await mongoDBPutEngagement(
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
      EngagementResultObject =
        await mongoDBPutEngagement(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      EngagementResultObject =
        await firebasePutEngagement(
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
      EngagementResultObject =
        await firebasePutEngagement(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      EngagementResultObject =
        await mysqlDBPutEngagement(
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
      EngagementResultObject =
        await mysqlDBPutEngagement(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      EngagementResultObject =
        await supabasePutEngagement(
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
    EngagementResultObject =
      await supabasePutEngagement(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return EngagementResultObject;
};

/*
 * Updates an existing Engagement resource
 *
 * @param req : Request - Engagement request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const engagementPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Engagement']
    #swagger.description = 'Endpoint to update a new Engagement resource.'
    #swagger.summary = 'Updates a new Engagement resource.'

    #swagger.path = '/models/engagement'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['engagement_uuid'] = {
      in: 'path',
      description: 'Engagement engagement_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Engagement resource.',
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
    const { engagement_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      engagement_uuid &&
      payload &&
      payloadSupportsEngagementUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Engagement resource
      const uuid: string = engagement_uuid;

      // Compose the Engagement request object
      const EngagementData: IEngagementRow = {};
      
				if('engagement_claimed_off_days' in payload){ EngagementData.engagement_claimed_off_days = payload.engagement_claimed_off_days; }
				if('engagement_consecutive_days' in payload){ EngagementData.engagement_consecutive_days = payload.engagement_consecutive_days; }
				if('engagement_created_at' in payload){ EngagementData.engagement_created_at = payload.engagement_created_at; }
				if('engagement_id' in payload){ EngagementData.engagement_id = payload.engagement_id; }
				if('engagement_off_days' in payload){ EngagementData.engagement_off_days = payload.engagement_off_days; }
				if('engagement_updated_at' in payload){ EngagementData.engagement_updated_at = payload.engagement_updated_at; }
				if('engagement_uuid' in payload){ EngagementData.engagement_uuid = payload.engagement_uuid; }
				if('fid' in payload){ EngagementData.fid = payload.fid; }
				if('user_id' in payload){ EngagementData.user_id = payload.user_id; }

      // Gets the Engagement resource from the database
      let EngagementResultObject:
        | IEngagementRow
        | any
        | null = apiGETEngagement(
          req,
          "engagement_uuid",
          uuid
        );

      if (!EngagementResultObject) {
        /* #swagger.responses[404] = {
          description: 'Engagement resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Engagement',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Engagement",
          "PUT"
        );
      }

      // Execute https request
      EngagementResultObject =
        apiPUTEngagement(
          req,
          EngagementData,
          uuid,
          "engagement_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Engagement resource updated successfully.',
        schema: {
          $ref: '#/definitions/Engagement'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Engagement resource updated successfully.",
        EngagementResultObject,
        "Engagement",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/engagement" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Engagement',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Engagement",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the engagement resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Engagement',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the engagement resource.",
      error,
      "Engagement",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing Engagement resource partially
 *
 * @param req : Request - Engagement partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const engagementPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Engagement']
    #swagger.description = 'Endpoint to update a new Engagement resource.'
    #swagger.summary = 'Updates a new Engagement resource.'

    #swagger.path = '/models/engagement'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['engagement_uuid'] = {
      in: 'path',
      description: 'Engagement engagement_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Engagement resource.',
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
    const { engagement_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      engagement_uuid &&
      payload &&
      payloadSupportsEngagementUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Engagement resource
      const uuid: string = engagement_uuid;

      // Compose the Engagement request object
      const EngagementData: IEngagementRow = {};
      
				if('engagement_claimed_off_days' in payload){ EngagementData.engagement_claimed_off_days = payload.engagement_claimed_off_days; }
				if('engagement_consecutive_days' in payload){ EngagementData.engagement_consecutive_days = payload.engagement_consecutive_days; }
				if('engagement_created_at' in payload){ EngagementData.engagement_created_at = payload.engagement_created_at; }
				if('engagement_id' in payload){ EngagementData.engagement_id = payload.engagement_id; }
				if('engagement_off_days' in payload){ EngagementData.engagement_off_days = payload.engagement_off_days; }
				if('engagement_updated_at' in payload){ EngagementData.engagement_updated_at = payload.engagement_updated_at; }
				if('engagement_uuid' in payload){ EngagementData.engagement_uuid = payload.engagement_uuid; }
				if('fid' in payload){ EngagementData.fid = payload.fid; }
				if('user_id' in payload){ EngagementData.user_id = payload.user_id; }

      // Gets the Engagement resource from the database
      let EngagementResultObject:
        | IEngagementRow
        | any
        | null = apiGETEngagement(
          req,
          "engagement_uuid",
          uuid
        );

      if (!EngagementResultObject) {
        /* #swagger.responses[404] = {
          description: 'Engagement resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Engagement',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Engagement",
          "PATCH"
        );
      }

      // Execute https request
      EngagementResultObject =
        apiPUTEngagement(
          req,
          EngagementData,
          uuid,
          "engagement_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Engagement resource updated successfully.',
        schema: {
          $ref: '#/definitions/Engagement'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Engagement resource updated successfully.",
        EngagementResultObject,
        "Engagement",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/engagement" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Engagement',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Engagement",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the engagement resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Engagement',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the engagement resource.",
      error,
      "Engagement",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a Engagement resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IEngagementRow data type object
 *
 */
const supabaseDeleteEngagement = async (
  columnValue: any,
  columnName?: string
): Promise<IEngagementInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Engagement resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IEngagementRow data type object
 *
 */
const mongoDBDeleteEngagement = async (
  columnValue: any,
  columnName?: string
): Promise<IEngagementRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a Engagement resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IEngagementRow data type object
 *
 */
const firebaseDeleteEngagement = async (
  columnValue: any,
  columnName?: string
): Promise<IEngagementInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Engagement resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IEngagementRow data type object
 *
 */
const mysqlDBDeleteEngagement = async (
  columnValue: any,
  columnName?: string
): Promise<IEngagementInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IEngagementRow data type object
 *
 */
const apiDELETEEngagement = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IEngagementInsert | any | null> => {
  // Intitialize the EngagementResultObject variable
  let EngagementResultObject: IEngagementRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      EngagementResultObject =
        await supabaseDeleteEngagement(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      EngagementResultObject =
        await mongoDBDeleteEngagement(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      EngagementResultObject =
        await mongoDBDeleteEngagement(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      EngagementResultObject =
        await firebaseDeleteEngagement(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      EngagementResultObject =
        await firebaseDeleteEngagement(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      EngagementResultObject =
        await mysqlDBDeleteEngagement(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      EngagementResultObject =
        await mysqlDBDeleteEngagement(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      EngagementResultObject =
        await supabaseDeleteEngagement(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    EngagementResultObject =
      await supabaseDeleteEngagement(columnValue, columnName);
  }

  return EngagementResultObject;
};

/*
 * Deletes an existing Engagement resource
 *
 * @param req : Request - Engagement request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const engagementDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Engagement']
    #swagger.description = 'Endpoint to delete a new Engagement resource.'
    #swagger.summary = 'Updates a new Engagement resource.'

    #swagger.path = '/models/engagement'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['engagement_uuid'] = {
      in: 'path',
      description: 'Engagement engagement_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the Engagement resource.',
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
    const { engagement_uuid } = req.params;

    // If all the parameters are available, its a go
    if (engagement_uuid) {
      // Get the uuid to identify the Engagement resource
      const uuid: string = engagement_uuid;

      // Gets the Engagement resource from the database
      let EngagementResultObject:
        | IEngagementRow
        | any
        | null = apiGETEngagement(
          req,
          "engagement_uuid",
          uuid
        );

      if (!EngagementResultObject) {
        /* #swagger.responses[404] = {
          description: 'Engagement resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Engagement',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Engagement",
          "PATCH"
        );
      }

      // Execute https request
      EngagementResultObject =
        apiDELETEEngagement(req, uuid, "engagement_uuid");

      /* #swagger.responses[201] = {
        description: 'Engagement resource deleted successfully.',
        schema: {
          'engagement_uuid': 'engagement_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Engagement resource deleted successfully.",
        EngagementResultObject,
        "Engagement",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/engagement" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Engagement',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Engagement",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the engagement resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Engagement',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the engagement resource.",
      error,
      "Engagement",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of Engagement without the response body.
 *
 * @param req : Request - Engagement request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const engagementHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Engagement']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of Engagement without the response body'
  
      #swagger.path = '/models/engagement'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the Engagement resource.',
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
            description: 'Could not perform a HEAD request at the "/models/engagement" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Engagement',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Engagement",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the engagement resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Engagement',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the engagement resource.",
      error,
      "Engagement",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - Engagement request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const engagementTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Engagement']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/engagement'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Engagement resource.',
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
        "Engagement",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/engagement" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Engagement',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Engagement",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the engagement resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Engagement',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the engagement resource.",
      error,
      "Engagement",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - Engagement request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const engagementOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Engagement']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/engagement'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Engagement resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/engagement" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Engagement',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Engagement",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the engagement resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Engagement',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the engagement resource.",
      error,
      "Engagement",
      "OPTIONS"
    );
  }

  // #swagger.end
};
