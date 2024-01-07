import { RequestHandler } from "express";
import { ObjectId } from "mongodb";
import { firebaseGet, firebaseGetError, firebasePost, firebasePostError, firebasePut, firebasePutError, firebaseDelete, firebaseDeleteError, } from "../../../../../utils/FirebaseLib";
import { supabaseGet, supabaseGetError, supabasePost, supabasePostError, supabasePut, supabasePutError, supabaseDelete, supabaseDeleteError, } from "../../../../../utils/SupabaseLib";
import { handleResponse, handleError, errors } from "../../../../../utils/HttpHelper";
import { hash, base64Encode, getServerPublicKey } from "../../../../../utils/Cryptography";
import { parseAuthorizationToken } from "../../../../../utils/JWTHelper";
import Snippets from "../../../../../utils/Snippets";

// Import the model and the model interface
import { ClientModel, IClient } from "./ClientModel";

// Import bcrypt for encrypting the password
const bcrypt = require("bcryptjs");

// Get the client model by its deviceId
const modelGetClientByDeviceId = async (deviceId: string): Promise<IClient | any | null> => {

	const client: IClient | any | null = await ClientModel.findOne({ deviceId: deviceId });

	return client;

}

// Get the client model by its deviceId
const modelGetAllClients = async (): Promise<Array<IClient | any | null>> => {

	const clients: Array<IClient | any | null> = await ClientModel.find({});

	return clients;

}

// Get the client model by its Id
const modelGetClientById = async (id: string): Promise<IClient | any | null> => {

	const client: IClient | any | null = await ClientModel.findOne({ id: id });

	return client;

}

// Get the client model by its Id
const modelGetClientBySerialNumber = async (id: string): Promise<IClient | any | null> => {

	const client: IClient | any | null = await ClientModel.findOne({ clientDeviceId: id });

	return client;

}

// Get the client model by its clientId
const modelGetClientByClientId = async (clientId: string): Promise<IClient | any | null> => {

	const client: IClient | any | null = await ClientModel.findOne({ clientId: clientId });

	return client;

}

// Get the client model by its deviceId
const modelUpdateClient = async (deviceId: string, payload: any): Promise<IClient | any | null> => {

	const client: IClient | any | null = await ClientModel.updateOne({ deviceId: deviceId }, payload);

	return client;

}

/*
 * Creates a new Client
 *
 * @param req : Request - Client request object
 * @param res : Response - Server response object
 * @params next: - Middleware
 * @returns void
 *
 */
const clientPost = async (req: any, res: any, next: any) => {

	// #swagger.start

	/* 	#swagger.tags = ['Client']
		#swagger.description = 'Endpoint to create a new client model'
		#swagger.summary = 'Creates a new Client'
	    
		#swagger.path = '/auth/client'
		#swagger.method = 'post'
		#swagger.produces = ['application/json']
		#swagger.consumes = ['application/json']

		#swagger.parameters['obj'] = {
			in: 'body',
			description: 'Device information for the connected client.',
			required: true,
			schema: {
				$device_uid: 'ABC1234567890XYZ',
				$device_name: 'Device ABC v1',
				$device_pub_key: 'LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJDZ0...',
				$device_agent: 'Mozilla v 1.0.0'
			}
		}
	*/

	/* #swagger.security = [{
			"bearerAuth": []
	}] */

	// Try to create a model
	try {

		// Get input parameters
		const { device_uid, device_name, device_agent, device_pub_key } = req.body;

		// If all the parameters are available, its a go
		if (device_uid && device_name && device_agent) {

			// Generate a the clientId based on the user input parameters
			// The device_uid maybe the serial number
			// The device_name is user defined
			// The device_agent is the client user agent
			// The device_pub_key is a public key generated by the client
			// The public key is sent to the server so that the server will encrypt data before is sent back to the client
			// All the above parameters ensures that the concatenation is always unique , which is useful in generating the clientID
			// This avoids collisions in the clientIds.
			const clientId: string = hash(`${device_uid}:${device_name}:${device_agent}:${device_pub_key}:${Snippets.numbers.getRandomValues()}`, 'sha1');

			// Generate the clientSecret from the clientId and the publicKey
			const clientSecret: string = hash(`${clientId}:${device_pub_key}`, 'sha256');

			//Encrypt client password
			const encryptedClientSecret = await bcrypt.hash(clientSecret, 10);

			// Compose the client request object
			const clientData: IClient = {
				clientDeviceId: device_uid,
				clientDeviceName: device_name,
				clientDevicePubKey: device_pub_key,
				clientDeviceUserAgent: device_agent,
				clientId: clientId,
				clientSecret: encryptedClientSecret,
			};

			// Create client in our database
			// @ts-ignore
			const client: IClient | any | null = await ClientModel.create(clientData);

			// Return the clientSecret as unencrypted
			client.clientSecret = clientSecret;

			// No need to return back the device public key
			client.clientDevicePubKey = '';

			// Instead return the server public key so that data to the server is always encrypted
			client.serverDevicePubKey = base64Encode(getServerPublicKey());

			/* #swagger.responses[201] = {
				description: 'Client registration successful.',
				schema: {
					$ref: '#/definitions/Client'
				}
			} */

			// Dump the HTTP 201 response
			handleResponse(req, res, next, client, 201);

		} else {

			/* #swagger.responses[400] = {
				description: 'Missing or invalid registration parameters.',
				schema: {
					status: 'error',
					error: 'BAD_REQUEST',
					message: 'INVALID_PARAMETERS_CLIENT_MODEL_POST',
				}
			} */

			// Dump the HTTP 400 response
			handleError(res, errors.BAD_REQUEST, 'Missing or invalid registration parameters', { device_uid, device_name, device_agent, device_pub_key });

		}

	} catch (error: any) {

		/* #swagger.responses[500] = {
			description: "Server error during client registration.",
			schema: {
				status: 'error',
				error: 'SERVER_ERROR',
				message: 'INTERNAL_SERVER_ERROR_CLIENT_MODEL_POST',
			}
		} */

		// Dump the HTTP 500 response
		handleError(res, errors.INTERNAL_SERVER_ERROR, 'Internal Server error during client registration', error);

	}

	// #swagger.end

};

/*
 * Gets an existing Client
 *
 * @param req : Request - Client request object
 * @param res : Response - Server response object
 * @params next : - Middleware
 * @returns void
 *
 */
const clientGet = async (req: any, res: any, next: any) => {

	// #swagger.start

	/* 	#swagger.tags = ['Client']
		#swagger.description = 'Endpoint to get an already existing client model'
		#swagger.summary = 'Gets an existing Client'
	    
		#swagger.path = '/auth/client/{id}'
		#swagger.method = 'get'
		#swagger.produces = ['application/json']
		#swagger.consumes = ['application/json']

		#swagger.parameters['device_id'] = {
			in: 'path',
			description: 'Client device ID to retrieve.',
			required: true,
			type: 'integer'
		}
		
	*/

	/* #swagger.security = [{
			"bearerAuth": []
	}] */

	// Try to update a model
	try {

		// Get the deviceId
		const { device_id } = req.params;

		// If all the parameters are available, its a go
		if (device_id) {

			// Get the deviceId to identify the client
			const deviceId: string = device_id

			// Get the client from the database
			let client: IClient | any | null = await modelGetClientByDeviceId(deviceId);

			if (client) {

				// Return the clientSecret as unencrypted
				client.clientSecret = '';

				// No need to return back the device public key
				client.clientDevicePubKey = '';

				// Instead return the server public key so that data to the server is always encrypted
				client.serverDevicePubKey = base64Encode(getServerPublicKey());

				/* #swagger.responses[201] = {
					description: 'Client updated successfully.',
					schema: {
						$ref: '#/definitions/Client'
					}
				} */

				// Dump the HTTP 201 response
				handleResponse(req, res, next, client, 201);

			} else {

				/* #swagger.responses[404] = {
					description: 'Client device not found.',
					schema: {
						status: 'error',
						error: 'NOT_FOUND',
						message: 'CLIENT_MODEL_NOT_FOUND_GET',
					}
				} */

				// Dump the HTTP 404 response
				handleResponse(req, res, next, {}, 404);

			}


		} else {

			/* #swagger.responses[400] = {
				description: 'Missing or invalid client parameters.',
				schema: {
					status: 'error',
					error: 'BAD_REQUEST',
					message: 'INVALID_PARAMETERS_CLIENT_MODEL_GET',
				}
			} */

			// Dump the HTTP 400 response
			handleError(res, errors.BAD_REQUEST, 'Missing or invalid client parameters', {});

		}

	} catch (error: any) {

		/* #swagger.responses[500] = {
			description: "Server error while retrieving client.",
			schema: {
				status: 'error',
				error: 'SERVER_ERROR',
				message: 'INTERNAL_SERVER_ERROR_CLIENT_MODEL_GET',
			}
		} */

		// Dump the HTTP 500 response
		handleError(res, errors.INTERNAL_SERVER_ERROR, 'Internal Server error during client registration', error);

	}

	// #swagger.end

};

/*
 * Gets an existing Client
 *
 * @param req : Request - Client request object
 * @param res : Response - Server response object
 * @params next : - Middleware
 * @returns void
 *
 */
const clientGetAll = async (req: any, res: any, next: any) => {

	// #swagger.start

	/* 	#swagger.tags = ['Client']
		#swagger.description = 'Endpoint to get an already existing client model'
		#swagger.summary = 'Gets an existing Client'
	    
		#swagger.path = '/auth/client'
		#swagger.method = 'get'
		#swagger.produces = ['application/json']
		#swagger.consumes = ['application/json']

	*/

	/* #swagger.security = [{
			"bearerAuth": []
	}] */

	// Try to update a model
	try {

		// Get the client from the database
		const clients: IClient | any | null = await modelGetAllClients();

		const clientsArray: Array<IClient | any | null> = [];

		// If all the parameters are available, its a go
		if (clients.length > 0) {

			clients.map((client: IClient | any | null) => {

				// Return the clientSecret as unencrypted
				client.clientSecret = '';

				// No need to return back the device public key
				client.clientDevicePubKey = '';

				// Instead return the server public key so that data to the server is always encrypted
				client.serverDevicePubKey = base64Encode(getServerPublicKey());

				// Push the client to the array
				clientsArray.push(client);

			});

			/* #swagger.responses[201] = {
				description: 'Client updated successfully.',
				schema: {
					$ref: '#/definitions/Client'
				}
			} */

			// Dump the HTTP 201 response
			handleResponse(req, res, next, clientsArray, 201);

		} else {

			/* #swagger.responses[404] = {
						description: 'Client device not found.',
						schema: {
							status: 'error',
							error: 'NOT_FOUND',
							message: 'CLIENT_MODEL_NOT_FOUND_GET',
						}
					} */

			// Dump the HTTP 404 response
			handleResponse(req, res, next, {}, 404);

		}

	} catch (error: any) {

		/* #swagger.responses[500] = {
			description: "Server error while retrieving client.",
			schema: {
				status: 'error',
				error: 'SERVER_ERROR',
				message: 'INTERNAL_SERVER_ERROR_CLIENT_MODEL_GET',
			}
		} */

		// Dump the HTTP 500 response
		handleError(res, errors.INTERNAL_SERVER_ERROR, 'Internal Server error during client registration', error);

	}

	// #swagger.end

};

/*
 * Updates an existing Client
 *
 * @param req : Request - Client request object
 * @param res : Response - Server response object
 * @params next : - Middleware
 * @returns void
 *
 */
const clientPut = async (req: any, res: any, next: any) => {

	// #swagger.start

	/* 	#swagger.tags = ['Client']
		#swagger.description = 'Endpoint to updates an already existing client model'
		#swagger.summary = 'Updates an existing Client'
	    
		#swagger.path = '/auth/client/{id}'
		#swagger.method = 'put'
		#swagger.produces = ['application/json']
		#swagger.consumes = ['application/json']

		#swagger.parameters['device_id'] = {
			in: 'path',
			description: 'Client device ID to update.',
			required: true,
			type: 'integer'
		}
		
		#swagger.parameters['obj'] = {
			in: 'body',
			description: 'Device information for the connected client.',
			required: true,
			schema: {
				$device_pub_key: 'LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJDZ0...',
			}
		}
	*/

	/* #swagger.security = [{
			"bearerAuth": []
	}] */

	// Try to update a model
	try {

		// Get the deviceId
		const { device_id } = req.params;

		// Get input parameters
		// Since client data is immutable, we are only interested in the public key that may change overtime
		const { device_pub_key } = req.body;

		// If all the parameters are available, its a go
		if (device_id && device_pub_key) {

			// Get the deviceId to identify the client
			const deviceId: string = device_id

			// Compose the client request object
			const clientData = {
				clientDevicePubKey: device_pub_key,
			};

			// Get the client from the database
			const clientExists: IClient | any | null = await modelGetClientByDeviceId(deviceId);

			if (clientExists) {

				// Update the client
				await modelUpdateClient(device_id, clientData);

				// Get the new client from the database
				const client: IClient | any | null = await modelGetClientByDeviceId(deviceId);

				// Return the clientSecret as unencrypted
				client.clientSecret = '';

				// No need to return back the device public key
				client.clientDevicePubKey = '';

				// Instead return the server public key so that data to the server is always encrypted
				client.serverDevicePubKey = base64Encode(getServerPublicKey());

				/* #swagger.responses[201] = {
					description: 'Client updated successfully.',
					schema: {
						$ref: '#/definitions/Client'
					}
				} */

				// Dump the HTTP 201 response
				handleResponse(req, res, next, client, 201);

			} else {

				/* #swagger.responses[404] = {
					description: 'Client device not found.',
					schema: {
						status: 'error',
						error: 'NOT_FOUND',
						message: 'CLIENT_MODEL_NOT_FOUND_PUT',
					}
				} */

				// Dump the HTTP 404 response
				handleResponse(req, res, next, {}, 404);

			}

		} else {

			/* #swagger.responses[400] = {
				description: 'Missing or invalid client update parameters.',
				schema: {
					status: 'error',
					error: 'BAD_REQUEST',
					message: 'INVALID_PARAMETERS_CLIENT_MODEL_PUT',
				}
			} */

			// Dump the HTTP 400 response
			handleError(res, errors.BAD_REQUEST, 'Missing or invalid client update parameters', { device_pub_key });

		}

	} catch (error: any) {

		/* #swagger.responses[500] = {
			description: "Server error during client update.",
			schema: {
				status: 'error',
				error: 'SERVER_ERROR',
				message: 'INTERNAL_SERVER_ERROR_CLIENT_MODEL_PUT',
			}
		} */

		// Dump the HTTP 500 response
		handleError(res, errors.INTERNAL_SERVER_ERROR, 'Internal Server error during client update', error);

	}

	// #swagger.end

};

const clientPatch = async (req: any, res: any, next: any) => {
	return clientPut(req, res, next);
}

/*
 * Deletes an existing Client
 *
 * @param req : Request - Client request object
 * @param res : Response - Server response object
 * @params next : - Middleware
 * @returns void
 *
 */
const clientDelete = async (req: any, res: any, next: any) => {

	// #swagger.start

	/* 	#swagger.tags = ['Client']
		#swagger.description = 'Endpoint to delete an already existing client model'
		#swagger.summary = 'Deletes an existing Client'
	    
		#swagger.path = '/auth/client/{id}'
		#swagger.method = 'delete'
		#swagger.produces = ['application/json']
		#swagger.consumes = ['application/json']

		#swagger.parameters['device_id'] = {
			in: 'path',
			description: 'Client device ID to delete.',
			required: true,
			type: 'integer'
		}
		
	*/

	/* #swagger.security = [{
			"bearerAuth": []
	}] */

	// Try to update a model
	try {

		// Get the deviceId
		const { device_id } = req.params;

		// If all the parameters are available, its a go
		if (device_id) {

			// Get the deviceId to identify the client
			const deviceId: string = device_id

			// Get the client from the database
			const clientExists: IClient | any | null = await modelGetClientByDeviceId(deviceId);

			if (clientExists) {

				// Delete the client from the database
				const clientDeleted: IClient | any | null = await modelGetClientByDeviceId(deviceId);

				/* #swagger.responses[201] = {
					description: 'Client deleted successfully.',
					schema: {
						$ref: '#/definitions/Client'
					}
				} */

				// Dump the HTTP 201 response
				handleResponse(req, res, next, clientDeleted, 201);

			} else {

				/* #swagger.responses[404] = {
					description: 'Client device not found.',
					schema: {
						status: 'error',
						error: 'NOT_FOUND',
						message: 'CLIENT_MODEL_NOT_FOUND_DELETE',
					}
				} */

				// Dump the HTTP 404 response
				handleResponse(req, res, next, {}, 404);

			}

		} else {

			/* #swagger.responses[400] = {
				description: 'Missing or invalid delete parameters.',
				schema: {
					status: 'error',
					error: 'BAD_REQUEST',
					message: 'INVALID_PARAMETERS_CLIENT_MODEL_DELETE',
				}
			} */

			// Dump the HTTP 400 response
			handleError(res, errors.BAD_REQUEST, 'Missing or invalid client parameters', {});

		}

	} catch (error: any) {

		/* #swagger.responses[500] = {
			description: "Server error while deleting client.",
			schema: {
				status: 'error',
				error: 'SERVER_ERROR',
				message: 'INTERNAL_SERVER_ERROR_CLIENT_MODEL_DELETE',
			}
		} */

		// Dump the HTTP 500 response
		handleError(res, errors.INTERNAL_SERVER_ERROR, 'Internal Server error during client deletion', error);

	}

	// #swagger.end

};

const checkClient: RequestHandler = async (req: any, res: any, next: any) => {

	const authorizationHeader: string = req.headers["authorization"];

	if (!authorizationHeader) {

		return handleError(res, errors.BAD_REQUEST, 'Invalid client. Missing authorization header', req.headers);

	}

	const usernamePassword: string = parseAuthorizationToken(authorizationHeader);

	if (usernamePassword) {

		let [clientId, clientSecret]: Array<string> = atob(usernamePassword).split(":");

		console.log(clientId, clientSecret);

		const client: IClient | any | null = await ClientModel.findOne({ clientId: clientId }).select('+clientSecret');

		if (client && (await bcrypt.compare(clientSecret, client.clientSecret))) {

			req.clientId = clientId;

			next();

		} else {

			return handleError(res, errors.FORBIDDEN_ERROR, 'Invalid client', { clientId });

		}

	}

};

const clientMiddleware: any = { checkClient }

export { clientGet, clientGetAll, clientPost, clientPut, clientPatch, clientDelete, clientMiddleware, IClient, ClientModel }