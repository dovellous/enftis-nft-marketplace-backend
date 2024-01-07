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
  IBonusesInsert,
  IBonusesRow,
  IBonusesUpdate
} from "./models/BonusesTypesDefinitions";

import { BonusesSupabaseCls } from "./models/BonusesSupabaseCls";
import { BonusesMongoDBCls } from "./models/BonusesMongoDBCls";
import { BonusesFirebaseCls } from "./models/BonusesFirebaseCls";
import { BonusesMySQLDBCls } from "./models/BonusesMySQLDBCls";
import { BonusesDTO } from "./models/BonusesDTO";

export const payloadSupportsBonusesRowInterface: any = (
  payload: any
): payload is IBonusesRow => {
  return !!payload?.Bonuses.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsBonusesInsertInterface: any = (
  payload: any
): payload is IBonusesInsert => {
  return !!payload?.Bonuses
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsBonusesUpdateInterface: any = (
  payload: any
): payload is IBonusesUpdate => {
  return !!payload?.Bonuses
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new BonusesSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IBonusesUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new BonusesMongoDBCls().insertARow(payload);
          new BonusesFirebaseCls().insertARow(payload);
          new BonusesMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new BonusesMongoDBCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
            
          );
          new BonusesFirebaseCls().updateMatchingRows(
            payload,
            "bonus_uuid",
            payload.bonus_uuid
          );
          new BonusesMySQLDBCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          break;
        }

        case "patch": {
          new BonusesMongoDBCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          new BonusesFirebaseCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          new BonusesMySQLDBCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          break;
        }

        case "delete": {
          new BonusesMongoDBCls().deleteMatchingRows(
            "bonus_uuid",
            payload.bonus_uuid
          );
          new BonusesFirebaseCls().deleteMatchingRows(
            "bonus_uuid",
            payload.bonus_uuid
          );
          new BonusesMySQLDBCls().deleteMatchingRows(
            "bonus_uuid",
            payload.bonus_uuid
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
const mongoDBDatabaseClass: any = new BonusesMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IBonusesUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new BonusesSupabaseCls().insertARow(payload);
          new BonusesFirebaseCls().insertARow(payload);
          new BonusesMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new BonusesSupabaseCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          new BonusesFirebaseCls().updateMatchingRows(
            payload,
            "bonus_uuid",
            payload.bonus_uuid
          );
          new BonusesMySQLDBCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          break;
        }

        case "patch": {
          new BonusesSupabaseCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          new BonusesFirebaseCls().updateMatchingRows(
            payload,
            "bonus_uuid",
            payload.bonus_uuid
          );
          new BonusesMySQLDBCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          break;
        }

        case "delete": {
          new BonusesSupabaseCls().deleteMatchingRows(
            "bonus_uuid",
            payload.bonus_uuid
          );
          new BonusesFirebaseCls().deleteMatchingRows(
            "bonus_uuid",
            payload.bonus_uuid
          );
          new BonusesMySQLDBCls().deleteMatchingRows(
            "bonus_uuid",
            payload.bonus_uuid
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
  new BonusesSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IBonusesUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new BonusesSupabaseCls().insertARow(payload);
          new BonusesMongoDBCls().insertARow(payload);
          new BonusesMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new BonusesSupabaseCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          new BonusesMongoDBCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          new BonusesMySQLDBCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          break;
        }

        case "patch": {
          new BonusesSupabaseCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          new BonusesMongoDBCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          new BonusesMySQLDBCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          break;
        }

        case "delete": {
          new BonusesSupabaseCls().deleteMatchingRows(
            "bonus_uuid",
            payload.bonus_uuid
          );
          new BonusesMongoDBCls().deleteMatchingRows(
            "bonus_uuid",
            payload.bonus_uuid
          );
          new BonusesMySQLDBCls().deleteMatchingRows(
            "bonus_uuid",
            payload.bonus_uuid
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
const mySQLDatabaseClass: any = new BonusesSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IBonusesUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new BonusesSupabaseCls().insertARow(payload);
          new BonusesMongoDBCls().insertARow(payload);
          new BonusesFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new BonusesSupabaseCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          new BonusesMongoDBCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          new BonusesFirebaseCls().updateMatchingRows(
            payload,
            "bonus_uuid",
            payload.bonus_uuid
          );
          break;
        }

        case "patch": {
          new BonusesSupabaseCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          new BonusesMongoDBCls().updateMatchingRows(
            payload,
            payload.bonus_uuid,
            "bonus_uuid"
          );
          new BonusesFirebaseCls().updateMatchingRows(
            payload,
            "bonus_uuid",
            payload.bonus_uuid
          );
          break;
        }

        case "delete": {
          new BonusesSupabaseCls().deleteMatchingRows(
            "bonus_uuid",
            payload.bonus_uuid
          );
          new BonusesMongoDBCls().deleteMatchingRows(
            "bonus_uuid",
            payload.bonus_uuid
          );
          new BonusesFirebaseCls().deleteMatchingRows(
            "bonus_uuid",
            payload.bonus_uuid
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
 * Gets, gets or edits a Bonuses resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBonusesGets interface.
 * @returns IBonusesRow data type object
 *
 */
const supabaseGetBonuses = async (
  columnValue: any,
  columnName?: string
): Promise<IBonusesRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Bonuses resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBonusesGets interface.
 * @returns IBonusesRow data type object
 *
 */
const mongoDBGetBonuses = async (
  columnValue: any,
  columnName?: string
): Promise<IBonusesRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Bonuses resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBonusesGets interface.
 * @returns IBonusesRow data type object
 *
 */
const firebaseGetBonuses = async (
  columnValue: any,
  columnName?: string
): Promise<IBonusesRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Bonuses resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBonusesGets interface.
 * @returns IBonusesRow data type object
 *
 */
const mysqlDBGetBonuses = async (
  columnValue: any,
  columnName?: string
): Promise<IBonusesRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IBonusesGets interface.
 * @returns IBonusesRow data type object
 *
 */
const apiGETBonuses = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IBonusesRow | any | null> => {
  // Intitialize the BonusesResultObject variable
  let BonusesResultObject: IBonusesRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BonusesResultObject =
        await supabaseGetBonuses(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BonusesResultObject =
        await mongoDBGetBonuses(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      BonusesResultObject =
        await mongoDBGetBonuses(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BonusesResultObject =
        await firebaseGetBonuses(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      BonusesResultObject =
        await firebaseGetBonuses(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BonusesResultObject =
        await mysqlDBGetBonuses(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      BonusesResultObject =
        await mysqlDBGetBonuses(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BonusesResultObject =
        await supabaseGetBonuses(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    BonusesResultObject =
      await supabaseGetBonuses(columnValue, columnName);
  }

  return BonusesResultObject;
};

/*
 * Gets an existing Bonuses resource
 *
 * @param req : Request - Bonuses request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bonusesGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bonuses']
    #swagger.description = 'Endpoint to get a new Bonuses resource.'
    #swagger.summary = 'Gets an existing Bonuses resource.'

    #swagger.path = '/models/bonuses'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['bonus_uuid'] = {
      in: 'path',
      description: 'Bonuses bonus_uuid key identifier used to get the resource.',
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
    const { bonus_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the Bonuses resource
      const uuid: string = bonus_uuid;

      let BonusesResultObject:
        | IBonusesRow
        | Array<IBonusesRow>
        | any
        | null;

      if (bonus_uuid) {
        // Gets the Bonuses resource from the database
        BonusesResultObject =
          apiGETBonuses(req, "bonus_uuid,", uuid);
      } else {
        // Gets all the models from the Bonuses resource
        BonusesResultObject =
          apiGETBonuses(req);
      }

      if (!BonusesResultObject) {
        /* #swagger.responses[404] = {
          description: 'Bonuses resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Bonuses',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Bonuses resource was not found.",
          BonusesResultObject,
          "Bonuses",
          "PUT"
        );
      }

      // Execute https request
      BonusesResultObject =
        apiPUTBonuses(
          req,
          BonusesResultObject,
          uuid,
          "bonus_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Bonuses resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Bonuses'
          }
          model: 'Bonuses',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        BonusesResultObject,
        "Bonuses",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/bonuses", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'Bonuses',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/bonuses", Missing or invalid parameters.',
        req.body,
        "Bonuses",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the bonuses resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'Bonuses',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bonuses resource.",
      error,
      "Bonuses",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a Bonuses resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBonusesInsert interface.
 * @returns IBonusesRow data type object
 *
 */
const supabasePostBonuses = async (
  payload: any
): Promise<IBonusesInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Bonuses resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBonusesInsert interface.
 * @returns IBonusesRow data type object
 *
 */
const mongoDBPostBonuses = async (
  payload: any
): Promise<IBonusesRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Bonuses resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBonusesInsert interface.
 * @returns IBonusesRow data type object
 *
 */
const firebasePostBonuses = async (
  payload: any
): Promise<IBonusesInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Bonuses resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBonusesInsert interface.
 * @returns IBonusesRow data type object
 *
 */
const mysqlDBPostBonuses = async (
  payload: any
): Promise<IBonusesInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Bonuses resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBonusesInsert interface.
 * @returns IBonusesRow data type object
 *
 */
const apiPOSTBonuses = async (
  req: any,
  payload: any
): Promise<IBonusesInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the Bonuses resource into the database
  let BonusesResultObject:
    | IBonusesRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BonusesResultObject =
        await supabasePostBonuses(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BonusesResultObject =
        await mongoDBPostBonuses(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      BonusesResultObject =
        await mongoDBPostBonuses(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BonusesResultObject =
        await firebasePostBonuses(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      BonusesResultObject =
        await firebasePostBonuses(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BonusesResultObject =
        await mysqlDBPostBonuses(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      BonusesResultObject =
        await mysqlDBPostBonuses(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BonusesResultObject =
        await supabasePostBonuses(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    BonusesResultObject =
      await supabasePostBonuses(payload);
  }

  return BonusesResultObject;
};

/*
 * Creates a new Bonuses resource
 *
 * @param req : Request - Bonuses request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bonusesPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bonuses']
    #swagger.description = 'Endpoint to create a new Bonuses resource.'
    #swagger.summary = 'Creates a new Bonuses resource.'

    #swagger.path = '/models/bonuses'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the Bonuses resource.',
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
      payloadSupportsBonusesInsertInterface(payload)
    ) {
      // Compose the Bonuses request object
      const BonusesData: IBonusesInsert =
      {
				bonus_created_at: payload.bonus_created_at,
				bonus_fb: payload.bonus_fb,
				bonus_id: payload.bonus_id,
				bonus_ig: payload.bonus_ig,
				bonus_in: payload.bonus_in,
				bonus_md: payload.bonus_md,
				bonus_tg: payload.bonus_tg,
				bonus_tt: payload.bonus_tt,
				bonus_updated_at: payload.bonus_updated_at,
				bonus_uuid: payload.bonus_uuid,
				bonus_wa: payload.bonus_wa,
				bonus_x: payload.bonus_x,
				bonus_yt: payload.bonus_yt,
				fid: payload.fid,
				user_id: payload.user_id,
				verify_email: payload.verify_email,
				verify_id: payload.verify_id,
				verify_phone: payload.verify_phone,
				verify_residence: payload.verify_residence,
      };

      // Insert the Bonuses resource into the database
      let BonusesResultObject:
        | IBonusesRow
        | any
        | null;

      // Execute https request
      BonusesResultObject =
        apiPOSTBonuses(
          req,
          BonusesData
        );

      /* #swagger.responses[201] = {
        description: 'Bonuses resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Bonuses'
          }
          model: 'Bonuses',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Bonuses resource created successfully.",
        BonusesResultObject,
        "Bonuses",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/bonuses". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'Bonuses',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/bonuses". Missing or invalid parameters.',
        req.body,
        "Bonuses",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the bonuses resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'Bonuses',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the bonuses resource.",
      error,
      "Bonuses",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a Bonuses resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBonusesUpdate interface.
 * @returns IBonusesRow data type object
 *
 */
const supabasePutBonuses = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBonusesInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Bonuses resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBonusesUpdate interface.
 * @returns IBonusesRow data type object
 *
 */
const mongoDBPutBonuses = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBonusesRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Bonuses resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBonusesUpdate interface.
 * @returns IBonusesRow data type object
 *
 */
const firebasePutBonuses = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBonusesInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Bonuses resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBonusesUpdate interface.
 * @returns IBonusesRow data type object
 *
 */
const mysqlDBPutBonuses = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBonusesInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IBonusesUpdate interface.
 * @returns IBonusesRow data type object
 *
 */
const apiPUTBonuses = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IBonusesInsert | any | null> => {
  // Intitialize the BonusesResultObject variable
  let BonusesResultObject: IBonusesRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BonusesResultObject =
        await supabasePutBonuses(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BonusesResultObject =
        await mongoDBPutBonuses(
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
      BonusesResultObject =
        await mongoDBPutBonuses(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BonusesResultObject =
        await firebasePutBonuses(
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
      BonusesResultObject =
        await firebasePutBonuses(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BonusesResultObject =
        await mysqlDBPutBonuses(
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
      BonusesResultObject =
        await mysqlDBPutBonuses(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BonusesResultObject =
        await supabasePutBonuses(
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
    BonusesResultObject =
      await supabasePutBonuses(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return BonusesResultObject;
};

/*
 * Updates an existing Bonuses resource
 *
 * @param req : Request - Bonuses request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bonusesPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bonuses']
    #swagger.description = 'Endpoint to update a new Bonuses resource.'
    #swagger.summary = 'Updates a new Bonuses resource.'

    #swagger.path = '/models/bonuses'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['bonus_uuid'] = {
      in: 'path',
      description: 'Bonuses bonus_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Bonuses resource.',
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
    const { bonus_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      bonus_uuid &&
      payload &&
      payloadSupportsBonusesUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Bonuses resource
      const uuid: string = bonus_uuid;

      // Compose the Bonuses request object
      const BonusesData: IBonusesRow = {};
      
				if('bonus_created_at' in payload){ BonusesData.bonus_created_at = payload.bonus_created_at; }
				if('bonus_fb' in payload){ BonusesData.bonus_fb = payload.bonus_fb; }
				if('bonus_id' in payload){ BonusesData.bonus_id = payload.bonus_id; }
				if('bonus_ig' in payload){ BonusesData.bonus_ig = payload.bonus_ig; }
				if('bonus_in' in payload){ BonusesData.bonus_in = payload.bonus_in; }
				if('bonus_md' in payload){ BonusesData.bonus_md = payload.bonus_md; }
				if('bonus_tg' in payload){ BonusesData.bonus_tg = payload.bonus_tg; }
				if('bonus_tt' in payload){ BonusesData.bonus_tt = payload.bonus_tt; }
				if('bonus_updated_at' in payload){ BonusesData.bonus_updated_at = payload.bonus_updated_at; }
				if('bonus_uuid' in payload){ BonusesData.bonus_uuid = payload.bonus_uuid; }
				if('bonus_wa' in payload){ BonusesData.bonus_wa = payload.bonus_wa; }
				if('bonus_x' in payload){ BonusesData.bonus_x = payload.bonus_x; }
				if('bonus_yt' in payload){ BonusesData.bonus_yt = payload.bonus_yt; }
				if('fid' in payload){ BonusesData.fid = payload.fid; }
				if('user_id' in payload){ BonusesData.user_id = payload.user_id; }
				if('verify_email' in payload){ BonusesData.verify_email = payload.verify_email; }
				if('verify_id' in payload){ BonusesData.verify_id = payload.verify_id; }
				if('verify_phone' in payload){ BonusesData.verify_phone = payload.verify_phone; }
				if('verify_residence' in payload){ BonusesData.verify_residence = payload.verify_residence; }

      // Gets the Bonuses resource from the database
      let BonusesResultObject:
        | IBonusesRow
        | any
        | null = apiGETBonuses(
          req,
          "bonus_uuid",
          uuid
        );

      if (!BonusesResultObject) {
        /* #swagger.responses[404] = {
          description: 'Bonuses resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Bonuses',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Bonuses",
          "PUT"
        );
      }

      // Execute https request
      BonusesResultObject =
        apiPUTBonuses(
          req,
          BonusesData,
          uuid,
          "bonus_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Bonuses resource updated successfully.',
        schema: {
          $ref: '#/definitions/Bonuses'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Bonuses resource updated successfully.",
        BonusesResultObject,
        "Bonuses",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/bonuses" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Bonuses',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Bonuses",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the bonuses resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Bonuses',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bonuses resource.",
      error,
      "Bonuses",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing Bonuses resource partially
 *
 * @param req : Request - Bonuses partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bonusesPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bonuses']
    #swagger.description = 'Endpoint to update a new Bonuses resource.'
    #swagger.summary = 'Updates a new Bonuses resource.'

    #swagger.path = '/models/bonuses'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['bonus_uuid'] = {
      in: 'path',
      description: 'Bonuses bonus_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Bonuses resource.',
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
    const { bonus_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      bonus_uuid &&
      payload &&
      payloadSupportsBonusesUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Bonuses resource
      const uuid: string = bonus_uuid;

      // Compose the Bonuses request object
      const BonusesData: IBonusesRow = {};
      
				if('bonus_created_at' in payload){ BonusesData.bonus_created_at = payload.bonus_created_at; }
				if('bonus_fb' in payload){ BonusesData.bonus_fb = payload.bonus_fb; }
				if('bonus_id' in payload){ BonusesData.bonus_id = payload.bonus_id; }
				if('bonus_ig' in payload){ BonusesData.bonus_ig = payload.bonus_ig; }
				if('bonus_in' in payload){ BonusesData.bonus_in = payload.bonus_in; }
				if('bonus_md' in payload){ BonusesData.bonus_md = payload.bonus_md; }
				if('bonus_tg' in payload){ BonusesData.bonus_tg = payload.bonus_tg; }
				if('bonus_tt' in payload){ BonusesData.bonus_tt = payload.bonus_tt; }
				if('bonus_updated_at' in payload){ BonusesData.bonus_updated_at = payload.bonus_updated_at; }
				if('bonus_uuid' in payload){ BonusesData.bonus_uuid = payload.bonus_uuid; }
				if('bonus_wa' in payload){ BonusesData.bonus_wa = payload.bonus_wa; }
				if('bonus_x' in payload){ BonusesData.bonus_x = payload.bonus_x; }
				if('bonus_yt' in payload){ BonusesData.bonus_yt = payload.bonus_yt; }
				if('fid' in payload){ BonusesData.fid = payload.fid; }
				if('user_id' in payload){ BonusesData.user_id = payload.user_id; }
				if('verify_email' in payload){ BonusesData.verify_email = payload.verify_email; }
				if('verify_id' in payload){ BonusesData.verify_id = payload.verify_id; }
				if('verify_phone' in payload){ BonusesData.verify_phone = payload.verify_phone; }
				if('verify_residence' in payload){ BonusesData.verify_residence = payload.verify_residence; }

      // Gets the Bonuses resource from the database
      let BonusesResultObject:
        | IBonusesRow
        | any
        | null = apiGETBonuses(
          req,
          "bonus_uuid",
          uuid
        );

      if (!BonusesResultObject) {
        /* #swagger.responses[404] = {
          description: 'Bonuses resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Bonuses',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Bonuses",
          "PATCH"
        );
      }

      // Execute https request
      BonusesResultObject =
        apiPUTBonuses(
          req,
          BonusesData,
          uuid,
          "bonus_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Bonuses resource updated successfully.',
        schema: {
          $ref: '#/definitions/Bonuses'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Bonuses resource updated successfully.",
        BonusesResultObject,
        "Bonuses",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/bonuses" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Bonuses',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Bonuses",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the bonuses resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Bonuses',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bonuses resource.",
      error,
      "Bonuses",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a Bonuses resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBonusesRow data type object
 *
 */
const supabaseDeleteBonuses = async (
  columnValue: any,
  columnName?: string
): Promise<IBonusesInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Bonuses resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBonusesRow data type object
 *
 */
const mongoDBDeleteBonuses = async (
  columnValue: any,
  columnName?: string
): Promise<IBonusesRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a Bonuses resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBonusesRow data type object
 *
 */
const firebaseDeleteBonuses = async (
  columnValue: any,
  columnName?: string
): Promise<IBonusesInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Bonuses resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBonusesRow data type object
 *
 */
const mysqlDBDeleteBonuses = async (
  columnValue: any,
  columnName?: string
): Promise<IBonusesInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IBonusesRow data type object
 *
 */
const apiDELETEBonuses = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IBonusesInsert | any | null> => {
  // Intitialize the BonusesResultObject variable
  let BonusesResultObject: IBonusesRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      BonusesResultObject =
        await supabaseDeleteBonuses(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      BonusesResultObject =
        await mongoDBDeleteBonuses(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      BonusesResultObject =
        await mongoDBDeleteBonuses(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      BonusesResultObject =
        await firebaseDeleteBonuses(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      BonusesResultObject =
        await firebaseDeleteBonuses(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      BonusesResultObject =
        await mysqlDBDeleteBonuses(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      BonusesResultObject =
        await mysqlDBDeleteBonuses(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      BonusesResultObject =
        await supabaseDeleteBonuses(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    BonusesResultObject =
      await supabaseDeleteBonuses(columnValue, columnName);
  }

  return BonusesResultObject;
};

/*
 * Deletes an existing Bonuses resource
 *
 * @param req : Request - Bonuses request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bonusesDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bonuses']
    #swagger.description = 'Endpoint to delete a new Bonuses resource.'
    #swagger.summary = 'Updates a new Bonuses resource.'

    #swagger.path = '/models/bonuses'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['bonus_uuid'] = {
      in: 'path',
      description: 'Bonuses bonus_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the Bonuses resource.',
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
    const { bonus_uuid } = req.params;

    // If all the parameters are available, its a go
    if (bonus_uuid) {
      // Get the uuid to identify the Bonuses resource
      const uuid: string = bonus_uuid;

      // Gets the Bonuses resource from the database
      let BonusesResultObject:
        | IBonusesRow
        | any
        | null = apiGETBonuses(
          req,
          "bonus_uuid",
          uuid
        );

      if (!BonusesResultObject) {
        /* #swagger.responses[404] = {
          description: 'Bonuses resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Bonuses',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Bonuses",
          "PATCH"
        );
      }

      // Execute https request
      BonusesResultObject =
        apiDELETEBonuses(req, uuid, "bonus_uuid");

      /* #swagger.responses[201] = {
        description: 'Bonuses resource deleted successfully.',
        schema: {
          'bonus_uuid': 'bonus_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Bonuses resource deleted successfully.",
        BonusesResultObject,
        "Bonuses",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/bonuses" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Bonuses',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Bonuses",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the bonuses resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Bonuses',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the bonuses resource.",
      error,
      "Bonuses",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of Bonuses without the response body.
 *
 * @param req : Request - Bonuses request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bonusesHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bonuses']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of Bonuses without the response body'
  
      #swagger.path = '/models/bonuses'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the Bonuses resource.',
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
            description: 'Could not perform a HEAD request at the "/models/bonuses" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Bonuses',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Bonuses",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the bonuses resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Bonuses',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the bonuses resource.",
      error,
      "Bonuses",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - Bonuses request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bonusesTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bonuses']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/bonuses'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Bonuses resource.',
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
        "Bonuses",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/bonuses" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Bonuses',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Bonuses",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the bonuses resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Bonuses',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the bonuses resource.",
      error,
      "Bonuses",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - Bonuses request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const bonusesOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Bonuses']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/bonuses'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Bonuses resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/bonuses" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Bonuses',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Bonuses",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the bonuses resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Bonuses',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the bonuses resource.",
      error,
      "Bonuses",
      "OPTIONS"
    );
  }

  // #swagger.end
};
