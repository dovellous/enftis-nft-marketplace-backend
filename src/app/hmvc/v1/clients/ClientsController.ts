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
  IClientsInsert,
  IClientsRow,
  IClientsUpdate
} from "./models/ClientsTypesDefinitions";

import { ClientsSupabaseCls } from "./models/ClientsSupabaseCls";
import { ClientsMongoDBCls } from "./models/ClientsMongoDBCls";
import { ClientsFirebaseCls } from "./models/ClientsFirebaseCls";
import { ClientsMySQLDBCls } from "./models/ClientsMySQLDBCls";
import { ClientsDTO } from "./models/ClientsDTO";

export const payloadSupportsClientsRowInterface: any = (
  payload: any
): payload is IClientsRow => {
  return !!payload?.Clients.____SUPPORTS_INTERFACE_ROW___;
};

export const payloadSupportsClientsInsertInterface: any = (
  payload: any
): payload is IClientsInsert => {
  return !!payload?.Clients
    .____SUPPORTS_INTERFACE_INSERT___;
};

export const payloadSupportsClientsUpdateInterface: any = (
  payload: any
): payload is IClientsUpdate => {
  return !!payload?.Clients
    .____SUPPORTS_INTERFACE_UPDATE___;
};

// Initialise Supabase Database
const supabaseDatabaseClass: any = new ClientsSupabaseCls();

supabaseDatabaseClass.subscribeToAllEvents(
  (payload: IClientsUpdate) => {
    if (payload.updateSource === SUPABASE) {
      switch (payload.operationType) {
        case "insert": {
          new ClientsMongoDBCls().insertARow(payload);
          new ClientsFirebaseCls().insertARow(payload);
          new ClientsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new ClientsMongoDBCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
            
          );
          new ClientsFirebaseCls().updateMatchingRows(
            payload,
            "client_device_uuid",
            payload.client_device_uuid
          );
          new ClientsMySQLDBCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          break;
        }

        case "patch": {
          new ClientsMongoDBCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          new ClientsFirebaseCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          new ClientsMySQLDBCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          break;
        }

        case "delete": {
          new ClientsMongoDBCls().deleteMatchingRows(
            "client_device_uuid",
            payload.client_device_uuid
          );
          new ClientsFirebaseCls().deleteMatchingRows(
            "client_device_uuid",
            payload.client_device_uuid
          );
          new ClientsMySQLDBCls().deleteMatchingRows(
            "client_device_uuid",
            payload.client_device_uuid
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
const mongoDBDatabaseClass: any = new ClientsMongoDBCls();

mongoDBDatabaseClass.subscribeToAllEvents(
  (payload: IClientsUpdate) => {
    if (payload.updateSource === MONGO_DB) {
      switch (payload.operationType) {
        case "insert": {
          new ClientsSupabaseCls().insertARow(payload);
          new ClientsFirebaseCls().insertARow(payload);
          new ClientsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new ClientsSupabaseCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          new ClientsFirebaseCls().updateMatchingRows(
            payload,
            "client_device_uuid",
            payload.client_device_uuid
          );
          new ClientsMySQLDBCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          break;
        }

        case "patch": {
          new ClientsSupabaseCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          new ClientsFirebaseCls().updateMatchingRows(
            payload,
            "client_device_uuid",
            payload.client_device_uuid
          );
          new ClientsMySQLDBCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          break;
        }

        case "delete": {
          new ClientsSupabaseCls().deleteMatchingRows(
            "client_device_uuid",
            payload.client_device_uuid
          );
          new ClientsFirebaseCls().deleteMatchingRows(
            "client_device_uuid",
            payload.client_device_uuid
          );
          new ClientsMySQLDBCls().deleteMatchingRows(
            "client_device_uuid",
            payload.client_device_uuid
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
  new ClientsSupabaseCls();

firebaseDatabaseClass.subscribeToAllEvents(
  (payload: IClientsUpdate) => {
    if (payload.updateSource === FIREBASE) {
      switch (payload.operationType) {
        case "insert": {
          new ClientsSupabaseCls().insertARow(payload);
          new ClientsMongoDBCls().insertARow(payload);
          new ClientsMySQLDBCls().insertARow(payload);
          break;
        }

        case "update": {
          new ClientsSupabaseCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          new ClientsMongoDBCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          new ClientsMySQLDBCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          break;
        }

        case "patch": {
          new ClientsSupabaseCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          new ClientsMongoDBCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          new ClientsMySQLDBCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          break;
        }

        case "delete": {
          new ClientsSupabaseCls().deleteMatchingRows(
            "client_device_uuid",
            payload.client_device_uuid
          );
          new ClientsMongoDBCls().deleteMatchingRows(
            "client_device_uuid",
            payload.client_device_uuid
          );
          new ClientsMySQLDBCls().deleteMatchingRows(
            "client_device_uuid",
            payload.client_device_uuid
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
const mySQLDatabaseClass: any = new ClientsSupabaseCls();

mySQLDatabaseClass.subscribeToAllEvents(
  (payload: IClientsUpdate) => {
    if (payload.updateSource === MYSQL_DB) {
      switch (payload.operationType) {
        case "insert": {
          new ClientsSupabaseCls().insertARow(payload);
          new ClientsMongoDBCls().insertARow(payload);
          new ClientsFirebaseCls().insertARow(payload);
          break;
        }

        case "update": {
          new ClientsSupabaseCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          new ClientsMongoDBCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          new ClientsFirebaseCls().updateMatchingRows(
            payload,
            "client_device_uuid",
            payload.client_device_uuid
          );
          break;
        }

        case "patch": {
          new ClientsSupabaseCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          new ClientsMongoDBCls().updateMatchingRows(
            payload,
            payload.client_device_uuid,
            "client_device_uuid"
          );
          new ClientsFirebaseCls().updateMatchingRows(
            payload,
            "client_device_uuid",
            payload.client_device_uuid
          );
          break;
        }

        case "delete": {
          new ClientsSupabaseCls().deleteMatchingRows(
            "client_device_uuid",
            payload.client_device_uuid
          );
          new ClientsMongoDBCls().deleteMatchingRows(
            "client_device_uuid",
            payload.client_device_uuid
          );
          new ClientsFirebaseCls().deleteMatchingRows(
            "client_device_uuid",
            payload.client_device_uuid
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
 * Gets, gets or edits a Clients resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IClientsGets interface.
 * @returns IClientsRow data type object
 *
 */
const supabaseGetClients = async (
  columnValue: any,
  columnName?: string
): Promise<IClientsRow | any | null> => {
  return await supabaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Clients resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IClientsGets interface.
 * @returns IClientsRow data type object
 *
 */
const mongoDBGetClients = async (
  columnValue: any,
  columnName?: string
): Promise<IClientsRow | any | null> => {
  return await mongoDBDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Clients resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IClientsGets interface.
 * @returns IClientsRow data type object
 *
 */
const firebaseGetClients = async (
  columnValue: any,
  columnName?: string
): Promise<IClientsRow | any | null> => {
  return await firebaseDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Gets, gets or edits a Clients resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IClientsGets interface.
 * @returns IClientsRow data type object
 *
 */
const mysqlDBGetClients = async (
  columnValue: any,
  columnName?: string
): Promise<IClientsRow | any | null> => {
  return await mySQLDatabaseClass.getMatchingRows(columnValue, columnName);
};

/*
 * Execute Http GET request based on the current live database
 *
 * @param payload : The data object to save as a resource from the database. This resource should implement the IClientsGets interface.
 * @returns IClientsRow data type object
 *
 */
const apiGETClients = async (
  req: any,
  columnValue?: any,
  columnName?: string
): Promise<IClientsRow | any | null> => {
  // Intitialize the ClientsResultObject variable
  let ClientsResultObject: IClientsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      ClientsResultObject =
        await supabaseGetClients(columnValue, columnName);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      ClientsResultObject =
        await mongoDBGetClients(columnValue, columnName);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      ClientsResultObject =
        await mongoDBGetClients(columnValue, columnName);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      ClientsResultObject =
        await firebaseGetClients(columnValue, columnName);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      ClientsResultObject =
        await firebaseGetClients(columnValue, columnName);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      ClientsResultObject =
        await mysqlDBGetClients(columnValue, columnName);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      ClientsResultObject =
        await mysqlDBGetClients(columnValue, columnName);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      ClientsResultObject =
        await supabaseGetClients(columnValue, columnName);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    ClientsResultObject =
      await supabaseGetClients(columnValue, columnName);
  }

  return ClientsResultObject;
};

/*
 * Gets an existing Clients resource
 *
 * @param req : Request - Clients request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const clientsGet = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Clients']
    #swagger.description = 'Endpoint to get a new Clients resource.'
    #swagger.summary = 'Gets an existing Clients resource.'

    #swagger.path = '/models/clients'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['client_device_uuid'] = {
      in: 'path',
      description: 'Clients client_device_uuid key identifier used to get the resource.',
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
    const { client_device_uuid } = req.params;

    // If all the parameters are available, its a go
    if (true) {
      // Get the uuid to identify the Clients resource
      const uuid: string = client_device_uuid;

      let ClientsResultObject:
        | IClientsRow
        | Array<IClientsRow>
        | any
        | null;

      if (client_device_uuid) {
        // Gets the Clients resource from the database
        ClientsResultObject =
          apiGETClients(req, "client_device_uuid,", uuid);
      } else {
        // Gets all the models from the Clients resource
        ClientsResultObject =
          apiGETClients(req);
      }

      if (!ClientsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Clients resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Clients',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Clients resource was not found.",
          ClientsResultObject,
          "Clients",
          "PUT"
        );
      }

      // Execute https request
      ClientsResultObject =
        apiPUTClients(
          req,
          ClientsResultObject,
          uuid,
          "client_device_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Clients resource was updated successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Clients'
          }
          model: 'Clients',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "success",
        ClientsResultObject,
        "Clients",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not get the resource at "/models/clients", Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'payloadObject',
          model: 'Clients',
          operation: 'GET'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not get the resource at "/models/clients", Missing or invalid parameters.',
        req.body,
        "Clients",
        "GET"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the clients resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'payloadObject',
        model: 'Clients',
        operation: 'GET'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the clients resource.",
      error,
      "Clients",
      "GET"
    );
  }

  // #swagger.end
};

// API POST: submits an entity to the specified resource, often causing a change in state or side effects on the server.

/*
 * Posts, creates or adds a Clients resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IClientsInsert interface.
 * @returns IClientsRow data type object
 *
 */
const supabasePostClients = async (
  payload: any
): Promise<IClientsInsert | any | null> => {
  return await supabaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Clients resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IClientsInsert interface.
 * @returns IClientsRow data type object
 *
 */
const mongoDBPostClients = async (
  payload: any
): Promise<IClientsRow | any | null> => {
  return await mongoDBDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Clients resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IClientsInsert interface.
 * @returns IClientsRow data type object
 *
 */
const firebasePostClients = async (
  payload: any
): Promise<IClientsInsert | any | null> => {
  return await firebaseDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Clients resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IClientsInsert interface.
 * @returns IClientsRow data type object
 *
 */
const mysqlDBPostClients = async (
  payload: any
): Promise<IClientsInsert | any | null> => {
  return await mySQLDatabaseClass.insertARow(payload);
};

/*
 * Posts, creates or adds a Clients resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IClientsInsert interface.
 * @returns IClientsRow data type object
 *
 */
const apiPOSTClients = async (
  req: any,
  payload: any
): Promise<IClientsInsert | any | null> => {
  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Insert the Clients resource into the database
  let ClientsResultObject:
    | IClientsRow
    | any
    | null;

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      ClientsResultObject =
        await supabasePostClients(payload);
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      ClientsResultObject =
        await mongoDBPostClients(payload);
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      ClientsResultObject =
        await mongoDBPostClients(payload);
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      ClientsResultObject =
        await firebasePostClients(payload);
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      ClientsResultObject =
        await firebasePostClients(payload);
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      ClientsResultObject =
        await mysqlDBPostClients(payload);
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      ClientsResultObject =
        await mysqlDBPostClients(payload);
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      ClientsResultObject =
        await supabasePostClients(payload);
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    ClientsResultObject =
      await supabasePostClients(payload);
  }

  return ClientsResultObject;
};

/*
 * Creates a new Clients resource
 *
 * @param req : Request - Clients request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const clientsPost = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Clients']
    #swagger.description = 'Endpoint to create a new Clients resource.'
    #swagger.summary = 'Creates a new Clients resource.'

    #swagger.path = '/models/clients'
    #swagger.method = 'post'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for creating the Clients resource.',
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
      payloadSupportsClientsInsertInterface(payload)
    ) {
      // Compose the Clients request object
      const ClientsData: IClientsInsert =
      {
				client_device_created_at: payload.client_device_created_at,
				client_device_id: payload.client_device_id,
				client_device_meta: payload.client_device_meta,
				client_device_name: payload.client_device_name,
				client_device_pub_key: payload.client_device_pub_key,
				client_device_secret: payload.client_device_secret,
				client_device_updated_at: payload.client_device_updated_at,
				client_device_uuid: payload.client_device_uuid,
				client_id: payload.client_id,
				fid: payload.fid,
				service_device_pub_key: payload.service_device_pub_key,
      };

      // Insert the Clients resource into the database
      let ClientsResultObject:
        | IClientsRow
        | any
        | null;

      // Execute https request
      ClientsResultObject =
        apiPOSTClients(
          req,
          ClientsData
        );

      /* #swagger.responses[201] = {
        description: 'Clients resource created successfully.',
        schema: {
          status: 'success',
          error: '',
          message: '',
          data: {
            $ref: '#/definitions/Clients'
          }
          model: 'Clients',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Clients resource created successfully.",
        ClientsResultObject,
        "Clients",
        "POST"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not create the resource at "/models/clients". Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          data: 'errorObject,'
          model: 'Clients',
          operation: 'POST'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        'Could not create the resource at "/models/clients". Missing or invalid parameters.',
        req.body,
        "Clients",
        "POST"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while creating the clients resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        data: 'errorObject,'
        model: 'Clients',
        operation: 'POST'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while creating the clients resource.",
      error,
      "Clients",
      "POST"
    );
  }

  // #swagger.end
};

// API PUT: replaces all current representations of the target resource with the request payload.

/*
 * Puts, updates or edits a Clients resource to the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IClientsUpdate interface.
 * @returns IClientsRow data type object
 *
 */
const supabasePutClients = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IClientsInsert | any | null> => {
  return await supabaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Clients resource to the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IClientsUpdate interface.
 * @returns IClientsRow data type object
 *
 */
const mongoDBPutClients = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IClientsRow | any | null> => {
  return await mongoDBDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Clients resource to the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IClientsUpdate interface.
 * @returns IClientsRow data type object
 *
 */
const firebasePutClients = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IClientsInsert | any | null> => {
  return await firebaseDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Puts, updates or edits a Clients resource to the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IClientsUpdate interface.
 * @returns IClientsRow data type object
 *
 */
const mysqlDBPutClients = async (
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IClientsInsert | any | null> => {
  return await mySQLDatabaseClass.updateMatchingRows(
    updatePayload,
    columnValue,
    columnName
  );
};

/*
 * Execute Http PUT request based on the current live database
 *
 * @param payload : The data object to save as a resource into the database. This resource should implement the IClientsUpdate interface.
 * @returns IClientsRow data type object
 *
 */
const apiPUTClients = async (
  req: any,
  updatePayload: any,
  columnValue: any,
  columnName?: string
): Promise<IClientsInsert | any | null> => {
  // Intitialize the ClientsResultObject variable
  let ClientsResultObject: IClientsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      ClientsResultObject =
        await supabasePutClients(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      ClientsResultObject =
        await mongoDBPutClients(
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
      ClientsResultObject =
        await mongoDBPutClients(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      ClientsResultObject =
        await firebasePutClients(
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
      ClientsResultObject =
        await firebasePutClients(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      ClientsResultObject =
        await mysqlDBPutClients(
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
      ClientsResultObject =
        await mysqlDBPutClients(
          updatePayload,
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      ClientsResultObject =
        await supabasePutClients(
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
    ClientsResultObject =
      await supabasePutClients(
        updatePayload,
        columnValue,
        columnName
      );
  }

  return ClientsResultObject;
};

/*
 * Updates an existing Clients resource
 *
 * @param req : Request - Clients request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const clientsPut = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Clients']
    #swagger.description = 'Endpoint to update a new Clients resource.'
    #swagger.summary = 'Updates a new Clients resource.'

    #swagger.path = '/models/clients'
    #swagger.method = 'put'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['client_device_uuid'] = {
      in: 'path',
      description: 'Clients client_device_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Clients resource.',
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
    const { client_device_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      client_device_uuid &&
      payload &&
      payloadSupportsClientsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Clients resource
      const uuid: string = client_device_uuid;

      // Compose the Clients request object
      const ClientsData: IClientsRow = {};
      
				if('client_device_created_at' in payload){ ClientsData.client_device_created_at = payload.client_device_created_at; }
				if('client_device_id' in payload){ ClientsData.client_device_id = payload.client_device_id; }
				if('client_device_meta' in payload){ ClientsData.client_device_meta = payload.client_device_meta; }
				if('client_device_name' in payload){ ClientsData.client_device_name = payload.client_device_name; }
				if('client_device_pub_key' in payload){ ClientsData.client_device_pub_key = payload.client_device_pub_key; }
				if('client_device_secret' in payload){ ClientsData.client_device_secret = payload.client_device_secret; }
				if('client_device_updated_at' in payload){ ClientsData.client_device_updated_at = payload.client_device_updated_at; }
				if('client_device_uuid' in payload){ ClientsData.client_device_uuid = payload.client_device_uuid; }
				if('client_id' in payload){ ClientsData.client_id = payload.client_id; }
				if('fid' in payload){ ClientsData.fid = payload.fid; }
				if('service_device_pub_key' in payload){ ClientsData.service_device_pub_key = payload.service_device_pub_key; }

      // Gets the Clients resource from the database
      let ClientsResultObject:
        | IClientsRow
        | any
        | null = apiGETClients(
          req,
          "client_device_uuid",
          uuid
        );

      if (!ClientsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Clients resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Clients',
            operation: 'GET'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Clients",
          "PUT"
        );
      }

      // Execute https request
      ClientsResultObject =
        apiPUTClients(
          req,
          ClientsData,
          uuid,
          "client_device_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Clients resource updated successfully.',
        schema: {
          $ref: '#/definitions/Clients'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Clients resource updated successfully.",
        ClientsResultObject,
        "Clients",
        "PUT"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/clients" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Clients',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Clients",
        "PUT"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the clients resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Clients',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the clients resource.",
      error,
      "Clients",
      "PUT"
    );
  }

  // #swagger.end
};

// API PATCH: applies partial modifications to a resource.

/*
 * Updates an existing Clients resource partially
 *
 * @param req : Request - Clients partial request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const clientsPatch = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Clients']
    #swagger.description = 'Endpoint to update a new Clients resource.'
    #swagger.summary = 'Updates a new Clients resource.'

    #swagger.path = '/models/clients'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['client_device_uuid'] = {
      in: 'path',
      description: 'Clients client_device_uuid key identifier used to update the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for updating the Clients resource.',
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
    const { client_device_uuid } = req.params;

    // Get input payload
    const { payload } = req.body;

    // If all the parameters are available, its a go
    if (
      client_device_uuid &&
      payload &&
      payloadSupportsClientsUpdateInterface(payload)
    ) {
      // Get the uuid to identify the Clients resource
      const uuid: string = client_device_uuid;

      // Compose the Clients request object
      const ClientsData: IClientsRow = {};
      
				if('client_device_created_at' in payload){ ClientsData.client_device_created_at = payload.client_device_created_at; }
				if('client_device_id' in payload){ ClientsData.client_device_id = payload.client_device_id; }
				if('client_device_meta' in payload){ ClientsData.client_device_meta = payload.client_device_meta; }
				if('client_device_name' in payload){ ClientsData.client_device_name = payload.client_device_name; }
				if('client_device_pub_key' in payload){ ClientsData.client_device_pub_key = payload.client_device_pub_key; }
				if('client_device_secret' in payload){ ClientsData.client_device_secret = payload.client_device_secret; }
				if('client_device_updated_at' in payload){ ClientsData.client_device_updated_at = payload.client_device_updated_at; }
				if('client_device_uuid' in payload){ ClientsData.client_device_uuid = payload.client_device_uuid; }
				if('client_id' in payload){ ClientsData.client_id = payload.client_id; }
				if('fid' in payload){ ClientsData.fid = payload.fid; }
				if('service_device_pub_key' in payload){ ClientsData.service_device_pub_key = payload.service_device_pub_key; }

      // Gets the Clients resource from the database
      let ClientsResultObject:
        | IClientsRow
        | any
        | null = apiGETClients(
          req,
          "client_device_uuid",
          uuid
        );

      if (!ClientsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Clients resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Clients',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Clients",
          "PATCH"
        );
      }

      // Execute https request
      ClientsResultObject =
        apiPUTClients(
          req,
          ClientsData,
          uuid,
          "client_device_uuid"
        );

      /* #swagger.responses[201] = {
        description: 'Clients resource updated successfully.',
        schema: {
          $ref: '#/definitions/Clients'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Clients resource updated successfully.",
        ClientsResultObject,
        "Clients",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not update the resource at "/models/clients" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Clients',
          operation: 'PUT'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Clients",
        "PATCH"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while updating the clients resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Clients',
        operation: 'PUT'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the clients resource.",
      error,
      "Clients",
      "PATCH"
    );
  }

  // #swagger.end
};

// API DELETE: deletes the specified resource.

/*
 * Deletes, deletes or purge a Clients resource from the database primarily via Supabase, and replicates to Firebase, MongoDB and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IClientsRow data type object
 *
 */
const supabaseDeleteClients = async (
  columnValue: any,
  columnName?: string
): Promise<IClientsInsert | any | null> => {
  return await supabaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Clients resource from the database primarily via MongoDB, and replicates to Supabase, Firebase and MySQL
 *
 * @param uuid : The data object to delete from the database.
 * @returns IClientsRow data type object
 *
 */
const mongoDBDeleteClients = async (
  columnValue: any,
  columnName?: string
): Promise<IClientsRow | any | null> => {
  return await mongoDBDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Deletes, deletes or purge a Clients resource from the database primarily via Firebase, and replicates to Supabase, MongoDB and MySQLDB
 *
 * @param uuid : The data object to delete from the database.
 * @returns IClientsRow data type object
 *
 */
const firebaseDeleteClients = async (
  columnValue: any,
  columnName?: string
): Promise<IClientsInsert | any | null> => {
  return await firebaseDatabaseClass.deleteMatchingRows(
    columnValue,
    columnName
  );
};

/*
 * Deletes, deletes or purge a Clients resource from the database primarily via MySQL, and replicates to Supabase, MongoDB and Firebase
 *
 * @param uuid : The data object to delete from the database.
 * @returns IClientsRow data type object
 *
 */
const mysqlDBDeleteClients = async (
  columnValue: any,
  columnName?: string
): Promise<IClientsInsert | any | null> => {
  return await mySQLDatabaseClass.deleteMatchingRows(columnValue, columnName);
};

/*
 * Execute Http DELETE request based on the current live database
 *
 * @param uuid : The data object to delete from the database.
 * @returns IClientsRow data type object
 *
 */
const apiDELETEClients = async (
  req: any,
  columnValue: any,
  columnName?: string
): Promise<IClientsInsert | any | null> => {
  // Intitialize the ClientsResultObject variable
  let ClientsResultObject: IClientsRow | null;

  // Get the already instantiated db class, get the current primary db
  const highAvailabilityDB: any = req.app.get(HIGH_AVAILABILITY_DATABASE);

  // Check if the Supabase Database is set as primary
  if (highAvailabilityDB.getPrimaryDB() === SUPABASE) {
    // Check if the Supabase DB is online, otherwise switch to Mongo DB
    if (highAvailabilityDB.isDBOnline(SUPABASE)) {
      ClientsResultObject =
        await supabaseDeleteClients(
          columnValue,
          columnName
        );
    } else {
      // Switch to Mongo DB
      highAvailabilityDB.setPrimaryDB(MONGO_DB);
      ClientsResultObject =
        await mongoDBDeleteClients(
          columnValue,
          columnName
        );
    }
  }
  // If Supabase is unavailable, try MongoDB, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MONGO_DB) {
    // Check if the Mongo DB is online, otherwise switch to Firebase DB
    if (highAvailabilityDB.isDBOnline(MONGO_DB)) {
      ClientsResultObject =
        await mongoDBDeleteClients(
          columnValue,
          columnName
        );
    } else {
      // Switch to Firebase DB
      highAvailabilityDB.setPrimaryDB(FIREBASE);
      ClientsResultObject =
        await firebaseDeleteClients(
          columnValue,
          columnName
        );
    }
  }
  // If MongoDB is unavailable, try Firebase, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === FIREBASE) {
    // Check if the Firebase DB is online, otherwise switch to MySQL DB
    if (highAvailabilityDB.isDBOnline(FIREBASE)) {
      ClientsResultObject =
        await firebaseDeleteClients(
          columnValue,
          columnName
        );
    } else {
      // Switch to MySQL DB
      highAvailabilityDB.setPrimaryDB(MYSQL_DB);
      ClientsResultObject =
        await mysqlDBDeleteClients(
          columnValue,
          columnName
        );
    }
  }
  // If Firebase is unavailable, try MySQL, use it as the default
  else if (highAvailabilityDB.getPrimaryDB() === MYSQL_DB) {
    // Check if the MySQL DB is online, otherwise switch back to Supabase DB
    if (highAvailabilityDB.isDBOnline(MYSQL_DB)) {
      ClientsResultObject =
        await mysqlDBDeleteClients(
          columnValue,
          columnName
        );
    } else {
      // Switch to Supabase DB
      highAvailabilityDB.setPrimaryDB(SUPABASE);
      ClientsResultObject =
        await supabaseDeleteClients(
          columnValue,
          columnName
        );
    }
  }
  // Revert to factory defaults
  else {
    // Switch to Supabase DB
    highAvailabilityDB.setPrimaryDB(SUPABASE);
    ClientsResultObject =
      await supabaseDeleteClients(columnValue, columnName);
  }

  return ClientsResultObject;
};

/*
 * Deletes an existing Clients resource
 *
 * @param req : Request - Clients request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const clientsDelete = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Clients']
    #swagger.description = 'Endpoint to delete a new Clients resource.'
    #swagger.summary = 'Updates a new Clients resource.'

    #swagger.path = '/models/clients'
    #swagger.method = 'patch'
    #swagger.produces = ['application/json']
    #swagger.consumes = ['application/json']

    #swagger.parameters['client_device_uuid'] = {
      in: 'path',
      description: 'Clients client_device_uuid key identifier used to delete the resource.',
      required: true,
      type: 'string'
    }
  	
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Request object for deleting the Clients resource.',
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
    const { client_device_uuid } = req.params;

    // If all the parameters are available, its a go
    if (client_device_uuid) {
      // Get the uuid to identify the Clients resource
      const uuid: string = client_device_uuid;

      // Gets the Clients resource from the database
      let ClientsResultObject:
        | IClientsRow
        | any
        | null = apiGETClients(
          req,
          "client_device_uuid",
          uuid
        );

      if (!ClientsResultObject) {
        /* #swagger.responses[404] = {
          description: 'Clients resource was not found.',
          schema: {
            status: 'error',
            error: 'NOT_FOUND',
            message: 'MODEL_NOT_FOUND',
            data: 'payloadObject',
            model: 'Clients',
            operation: 'PATCH'
          }
        } */

        // Dump the HTTP 400 response
        handleHttpStatus(
          res,
          404,
          "Missing or invalid parameters",
          req.body,
          "Clients",
          "PATCH"
        );
      }

      // Execute https request
      ClientsResultObject =
        apiDELETEClients(req, uuid, "client_device_uuid");

      /* #swagger.responses[201] = {
        description: 'Clients resource deleted successfully.',
        schema: {
          'client_device_uuid': 'client_device_uuid'
        }
      } */

      // Dump the HTTP 201 response
      handleHttpStatus(
        res,
        201,
        "Clients resource deleted successfully.",
        ClientsResultObject,
        "Clients",
        "PATCH"
      );
    } else {
      /* #swagger.responses[400] = {
        description: 'Could not delete the resource at "/models/clients" Missing or invalid parameters.',
        schema: {
          status: 'error',
          error: 'BAD_REQUEST',
          message: 'INVALID_PARAMETERS',
          model: 'Clients',
          operation: 'DELETE'
        }
      } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Clients",
        "DELETE"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
      description: "Server error while deleting the clients resource.",
      schema: {
        status: 'error',
        error: 'SERVER_ERROR',
        message: 'INTERNAL_SERVER_ERROR',
        model: 'Clients',
        operation: 'DELETE'
      }
    } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while updating the clients resource.",
      error,
      "Clients",
      "DELETE"
    );
  }

  // #swagger.end
};

//API HEAD: asks for a response identical to a GET request, but without the response body.

/*
 * Return a GET representation of Clients without the response body.
 *
 * @param req : Request - Clients request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const clientsHead = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Clients']
      #swagger.description = 'Endpoint to asks for a response identical to a GET request, but without the response body.'
      #swagger.summary = 'Returns a GET representation of Clients without the response body'
  
      #swagger.path = '/models/clients'
      #swagger.method = 'head'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for deleting the Clients resource.',
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
            description: 'Could not perform a HEAD request at the "/models/clients" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Clients',
              operation: 'HEAD'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Clients",
        "HEAD"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a HEAD request on the clients resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Clients',
          operation: 'HEAD'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a HEAD request the clients resource.",
      error,
      "Clients",
      "HEAD"
    );
  }

  // #swagger.end
};

//API TRACE: performs a message loop-back test along the path to the target resource.

/*
 * Returns a dump of the request mainly for debugging purposes.
 *
 * @param req : Request - Clients request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const clientsTrace = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Clients']
      #swagger.description = 'Endpoint to perform a message loop-back test along the path to the target resource.'
      #swagger.summary = 'Returns a dump of the request mainly for debugging purposes.'
  
      #swagger.path = '/models/clients'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Clients resource.',
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
        "Clients",
        "TRACE"
      );

    } else {
      /* #swagger.responses[400] = {
            description: 'Could not perform a TRACE request at the "/models/clients" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Clients',
              operation: 'TRACE'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Clients",
        "TRACE"
      );

    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a TRACE request on the clients resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Clients',
          operation: 'TRACE'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a TRACE request the clients resource.",
      error,
      "Clients",
      "TRACE"
    );
  }

  // #swagger.end
};

//API OPTIONS: describes the communication options for the target resource.

/*
 * Returns a list of allowed methods on the resource.
 *
 * @param req : Request - Clients request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
export const clientsOptions = async (
  req: any,
  res: any,
  next: any
) => {
  // #swagger.start

  /* 	#swagger.tags = ['Clients']
      #swagger.description = 'Endpoint to describe the communication options for the target resource.'
      #swagger.summary = 'Returns a list of allowed methods on the resource.'
  
      #swagger.path = '/models/clients'
      #swagger.method = 'trace'
      #swagger.produces = ['application/json']
      #swagger.consumes = ['application/json']
  
      #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Request object for tracing on the Clients resource.',
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
            description: 'Could not perform a OPTIONS request at the "/models/clients" resource Missing or invalid parameters.',
            schema: {
              status: 'error',
              error: 'BAD_REQUEST',
              message: 'INVALID_PARAMETERS',
              model: 'Clients',
              operation: 'OPTIONS'
            }
          } */

      // Dump the HTTP 400 response
      handleHttpStatus(
        res,
        400,
        "Missing or invalid parameters",
        req.body,
        "Clients",
        "OPTIONS"
      );
    }
  } catch (error: any) {
    /* #swagger.responses[500] = {
        description: "Server error while performing a OPTIONS request on the clients resource.",
        schema: {
          status: 'error',
          error: 'SERVER_ERROR',
          message: 'INTERNAL_SERVER_ERROR',
          model: 'Clients',
          operation: 'OPTIONS'
        }
      } */

    // Dump the HTTP 500 response
    handleHttpStatus(
      res,
      500,
      "Server error while performing a OPTIONS request the clients resource.",
      error,
      "Clients",
      "OPTIONS"
    );
  }

  // #swagger.end
};
