import express, { Request, Response } from "express";
const userCollectionsRouter = express.Router();

import {
    userCollectionsDelete,
    userCollectionsGet,
    userCollectionsHead,
    userCollectionsOptions,
    userCollectionsPatch,
    userCollectionsPost,
    userCollectionsPut,
    userCollectionsTrace
} from "./UserCollectionsController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckUserCollectionsInsertInterface, 
    requestCheckUserCollectionsUpdateInterface, 
    requestGenerateUserCollectionsModelOptions, 
    requestGenerateUserCollectionsModelUUID 
} from "./UserCollectionsMiddleware";

userCollectionsRouter.get('/docs/user-collections', async (req: Request, res: Response) => {

    res.send('UserCollections APIs').end();

});

// - Begin UserCollections CRUD Router

// Create UserCollections Model
userCollectionsRouter.post(
    '/user-collections',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateUserCollectionsModelUUID,
        requestCheckUserCollectionsInsertInterface
    ],
    userCollectionsPost
);

// Retrieve all UserCollections Models
userCollectionsRouter.get(
    '/user-collections',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    userCollectionsGet
);

// Retrieve a single UserCollections Model
userCollectionsRouter.get(
    '/user-collections/:user_collection_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    userCollectionsGet
);

// Update UserCollections Model
userCollectionsRouter.put(
    '/user-collections/:user_collection_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckUserCollectionsUpdateInterface
    ],
    userCollectionsPut
);

// Patch UserCollections Model
userCollectionsRouter.patch(
    '/user-collections/:user_collection_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckUserCollectionsUpdateInterface
    ],
    userCollectionsPatch
);

// Delete UserCollections Model
userCollectionsRouter.delete(
    '/user-collections/:user_collection_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    userCollectionsDelete
);

// Delete UserCollections Model
userCollectionsRouter.head(
    '/user-collections',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    userCollectionsHead
);

// Delete UserCollections Model
userCollectionsRouter.trace(
    '/user-collections',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    userCollectionsTrace
);

// Delete UserCollections Model
userCollectionsRouter.options(
    '/user-collections',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateUserCollectionsModelOptions
    ],
    userCollectionsOptions
);

// - End UserCollections CRUD Router

// If the request is not found show 404 Error
userCollectionsRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default userCollectionsRouter;