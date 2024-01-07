import express, { Request, Response } from "express";
const bidsRouter = express.Router();

import {
    bidsDelete,
    bidsGet,
    bidsHead,
    bidsOptions,
    bidsPatch,
    bidsPost,
    bidsPut,
    bidsTrace
} from "./BidsController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckBidsInsertInterface, 
    requestCheckBidsUpdateInterface, 
    requestGenerateBidsModelOptions, 
    requestGenerateBidsModelUUID 
} from "./BidsMiddleware";

bidsRouter.get('/docs/bids', async (req: Request, res: Response) => {

    res.send('Bids APIs').end();

});

// - Begin Bids CRUD Router

// Create Bids Model
bidsRouter.post(
    '/bids',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateBidsModelUUID,
        requestCheckBidsInsertInterface
    ],
    bidsPost
);

// Retrieve all Bids Models
bidsRouter.get(
    '/bids',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    bidsGet
);

// Retrieve a single Bids Model
bidsRouter.get(
    '/bids/:bid_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    bidsGet
);

// Update Bids Model
bidsRouter.put(
    '/bids/:bid_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckBidsUpdateInterface
    ],
    bidsPut
);

// Patch Bids Model
bidsRouter.patch(
    '/bids/:bid_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckBidsUpdateInterface
    ],
    bidsPatch
);

// Delete Bids Model
bidsRouter.delete(
    '/bids/:bid_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    bidsDelete
);

// Delete Bids Model
bidsRouter.head(
    '/bids',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    bidsHead
);

// Delete Bids Model
bidsRouter.trace(
    '/bids',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    bidsTrace
);

// Delete Bids Model
bidsRouter.options(
    '/bids',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateBidsModelOptions
    ],
    bidsOptions
);

// - End Bids CRUD Router

// If the request is not found show 404 Error
bidsRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default bidsRouter;