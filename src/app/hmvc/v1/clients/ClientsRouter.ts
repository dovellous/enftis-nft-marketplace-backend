import express, { Request, Response } from "express";
const clientsRouter = express.Router();

import {
    clientsDelete,
    clientsGet,
    clientsHead,
    clientsOptions,
    clientsPatch,
    clientsPost,
    clientsPut,
    clientsTrace
} from "./ClientsController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckClientsInsertInterface, 
    requestCheckClientsUpdateInterface, 
    requestGenerateClientsModelOptions, 
    requestGenerateClientsModelUUID 
} from "./ClientsMiddleware";

clientsRouter.get('/docs/clients', async (req: Request, res: Response) => {

    res.send('Clients APIs').end();

});

// - Begin Clients CRUD Router

// Create Clients Model
clientsRouter.post(
    '/clients',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateClientsModelUUID,
        requestCheckClientsInsertInterface
    ],
    clientsPost
);

// Retrieve all Clients Models
clientsRouter.get(
    '/clients',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    clientsGet
);

// Retrieve a single Clients Model
clientsRouter.get(
    '/clients/:client_device_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    clientsGet
);

// Update Clients Model
clientsRouter.put(
    '/clients/:client_device_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckClientsUpdateInterface
    ],
    clientsPut
);

// Patch Clients Model
clientsRouter.patch(
    '/clients/:client_device_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckClientsUpdateInterface
    ],
    clientsPatch
);

// Delete Clients Model
clientsRouter.delete(
    '/clients/:client_device_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    clientsDelete
);

// Delete Clients Model
clientsRouter.head(
    '/clients',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    clientsHead
);

// Delete Clients Model
clientsRouter.trace(
    '/clients',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    clientsTrace
);

// Delete Clients Model
clientsRouter.options(
    '/clients',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateClientsModelOptions
    ],
    clientsOptions
);

// - End Clients CRUD Router

// If the request is not found show 404 Error
clientsRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default clientsRouter;