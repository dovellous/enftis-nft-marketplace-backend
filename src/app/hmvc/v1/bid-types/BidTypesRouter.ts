import express, { Request, Response } from "express";
const bidTypesRouter = express.Router();

import {
    bidTypesDelete,
    bidTypesGet,
    bidTypesHead,
    bidTypesOptions,
    bidTypesPatch,
    bidTypesPost,
    bidTypesPut,
    bidTypesTrace
} from "./BidTypesController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckBidTypesInsertInterface, 
    requestCheckBidTypesUpdateInterface, 
    requestGenerateBidTypesModelOptions, 
    requestGenerateBidTypesModelUUID 
} from "./BidTypesMiddleware";

bidTypesRouter.get('/docs/bid-types', async (req: Request, res: Response) => {

    res.send('BidTypes APIs').end();

});

// - Begin BidTypes CRUD Router

// Create BidTypes Model
bidTypesRouter.post(
    '/bid-types',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateBidTypesModelUUID,
        requestCheckBidTypesInsertInterface
    ],
    bidTypesPost
);

// Retrieve all BidTypes Models
bidTypesRouter.get(
    '/bid-types',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    bidTypesGet
);

// Retrieve a single BidTypes Model
bidTypesRouter.get(
    '/bid-types/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    bidTypesGet
);

// Update BidTypes Model
bidTypesRouter.put(
    '/bid-types/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckBidTypesUpdateInterface
    ],
    bidTypesPut
);

// Patch BidTypes Model
bidTypesRouter.patch(
    '/bid-types/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckBidTypesUpdateInterface
    ],
    bidTypesPatch
);

// Delete BidTypes Model
bidTypesRouter.delete(
    '/bid-types/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    bidTypesDelete
);

// Delete BidTypes Model
bidTypesRouter.head(
    '/bid-types',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    bidTypesHead
);

// Delete BidTypes Model
bidTypesRouter.trace(
    '/bid-types',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    bidTypesTrace
);

// Delete BidTypes Model
bidTypesRouter.options(
    '/bid-types',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateBidTypesModelOptions
    ],
    bidTypesOptions
);

// - End BidTypes CRUD Router

// If the request is not found show 404 Error
bidTypesRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default bidTypesRouter;