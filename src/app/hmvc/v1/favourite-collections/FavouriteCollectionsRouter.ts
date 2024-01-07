import express, { Request, Response } from "express";
const favouriteCollectionsRouter = express.Router();

import {
    favouriteCollectionsDelete,
    favouriteCollectionsGet,
    favouriteCollectionsHead,
    favouriteCollectionsOptions,
    favouriteCollectionsPatch,
    favouriteCollectionsPost,
    favouriteCollectionsPut,
    favouriteCollectionsTrace
} from "./FavouriteCollectionsController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckFavouriteCollectionsInsertInterface, 
    requestCheckFavouriteCollectionsUpdateInterface, 
    requestGenerateFavouriteCollectionsModelOptions, 
    requestGenerateFavouriteCollectionsModelUUID 
} from "./FavouriteCollectionsMiddleware";

favouriteCollectionsRouter.get('/docs/favourite-collections', async (req: Request, res: Response) => {

    res.send('FavouriteCollections APIs').end();

});

// - Begin FavouriteCollections CRUD Router

// Create FavouriteCollections Model
favouriteCollectionsRouter.post(
    '/favourite-collections',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateFavouriteCollectionsModelUUID,
        requestCheckFavouriteCollectionsInsertInterface
    ],
    favouriteCollectionsPost
);

// Retrieve all FavouriteCollections Models
favouriteCollectionsRouter.get(
    '/favourite-collections',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    favouriteCollectionsGet
);

// Retrieve a single FavouriteCollections Model
favouriteCollectionsRouter.get(
    '/favourite-collections/:favourite_collection_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    favouriteCollectionsGet
);

// Update FavouriteCollections Model
favouriteCollectionsRouter.put(
    '/favourite-collections/:favourite_collection_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckFavouriteCollectionsUpdateInterface
    ],
    favouriteCollectionsPut
);

// Patch FavouriteCollections Model
favouriteCollectionsRouter.patch(
    '/favourite-collections/:favourite_collection_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckFavouriteCollectionsUpdateInterface
    ],
    favouriteCollectionsPatch
);

// Delete FavouriteCollections Model
favouriteCollectionsRouter.delete(
    '/favourite-collections/:favourite_collection_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    favouriteCollectionsDelete
);

// Delete FavouriteCollections Model
favouriteCollectionsRouter.head(
    '/favourite-collections',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    favouriteCollectionsHead
);

// Delete FavouriteCollections Model
favouriteCollectionsRouter.trace(
    '/favourite-collections',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    favouriteCollectionsTrace
);

// Delete FavouriteCollections Model
favouriteCollectionsRouter.options(
    '/favourite-collections',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateFavouriteCollectionsModelOptions
    ],
    favouriteCollectionsOptions
);

// - End FavouriteCollections CRUD Router

// If the request is not found show 404 Error
favouriteCollectionsRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default favouriteCollectionsRouter;