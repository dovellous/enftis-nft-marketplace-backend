import express, { Request, Response } from "express";
const auctionTypesRouter = express.Router();

import {
    auctionTypesDelete,
    auctionTypesGet,
    auctionTypesHead,
    auctionTypesOptions,
    auctionTypesPatch,
    auctionTypesPost,
    auctionTypesPut,
    auctionTypesTrace
} from "./AuctionTypesController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckAuctionTypesInsertInterface, 
    requestCheckAuctionTypesUpdateInterface, 
    requestGenerateAuctionTypesModelOptions, 
    requestGenerateAuctionTypesModelUUID 
} from "./AuctionTypesMiddleware";

auctionTypesRouter.get('/docs/auction-types', async (req: Request, res: Response) => {

    res.send('AuctionTypes APIs').end();

});

// - Begin AuctionTypes CRUD Router

// Create AuctionTypes Model
auctionTypesRouter.post(
    '/auction-types',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateAuctionTypesModelUUID,
        requestCheckAuctionTypesInsertInterface
    ],
    auctionTypesPost
);

// Retrieve all AuctionTypes Models
auctionTypesRouter.get(
    '/auction-types',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    auctionTypesGet
);

// Retrieve a single AuctionTypes Model
auctionTypesRouter.get(
    '/auction-types/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    auctionTypesGet
);

// Update AuctionTypes Model
auctionTypesRouter.put(
    '/auction-types/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckAuctionTypesUpdateInterface
    ],
    auctionTypesPut
);

// Patch AuctionTypes Model
auctionTypesRouter.patch(
    '/auction-types/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckAuctionTypesUpdateInterface
    ],
    auctionTypesPatch
);

// Delete AuctionTypes Model
auctionTypesRouter.delete(
    '/auction-types/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    auctionTypesDelete
);

// Delete AuctionTypes Model
auctionTypesRouter.head(
    '/auction-types',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    auctionTypesHead
);

// Delete AuctionTypes Model
auctionTypesRouter.trace(
    '/auction-types',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    auctionTypesTrace
);

// Delete AuctionTypes Model
auctionTypesRouter.options(
    '/auction-types',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateAuctionTypesModelOptions
    ],
    auctionTypesOptions
);

// - End AuctionTypes CRUD Router

// If the request is not found show 404 Error
auctionTypesRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default auctionTypesRouter;