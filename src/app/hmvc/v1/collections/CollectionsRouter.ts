import express, { Request, Response } from "express";
const collectionsRouter = express.Router();

import {
    collectionsDelete,
    collectionsGet,
    collectionsHead,
    collectionsOptions,
    collectionsPatch,
    collectionsPost,
    collectionsPut,
    collectionsTrace
} from "./CollectionsController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckCollectionsInsertInterface, 
    requestCheckCollectionsUpdateInterface, 
    requestGenerateCollectionsModelOptions, 
    requestGenerateCollectionsModelUUID 
} from "./CollectionsMiddleware";

collectionsRouter.get('/docs/collections', async (req: Request, res: Response) => {

    res.send('Collections APIs').end();

});

// - Begin Collections CRUD Router

// Create Collections Model
collectionsRouter.post(
    '/collections',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateCollectionsModelUUID,
        requestCheckCollectionsInsertInterface
    ],
    collectionsPost
);

// Retrieve all Collections Models
collectionsRouter.get(
    '/collections',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    collectionsGet
);

// Retrieve a single Collections Model
collectionsRouter.get(
    '/collections/:collection_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    collectionsGet
);

// Update Collections Model
collectionsRouter.put(
    '/collections/:collection_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckCollectionsUpdateInterface
    ],
    collectionsPut
);

// Patch Collections Model
collectionsRouter.patch(
    '/collections/:collection_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckCollectionsUpdateInterface
    ],
    collectionsPatch
);

// Delete Collections Model
collectionsRouter.delete(
    '/collections/:collection_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    collectionsDelete
);

// Delete Collections Model
collectionsRouter.head(
    '/collections',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    collectionsHead
);

// Delete Collections Model
collectionsRouter.trace(
    '/collections',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    collectionsTrace
);

// Delete Collections Model
collectionsRouter.options(
    '/collections',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateCollectionsModelOptions
    ],
    collectionsOptions
);

// - End Collections CRUD Router

// If the request is not found show 404 Error
collectionsRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default collectionsRouter;