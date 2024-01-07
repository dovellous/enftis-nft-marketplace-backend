import express, { Request, Response } from "express";
const bidStatusRouter = express.Router();

import {
    bidStatusDelete,
    bidStatusGet,
    bidStatusHead,
    bidStatusOptions,
    bidStatusPatch,
    bidStatusPost,
    bidStatusPut,
    bidStatusTrace
} from "./BidStatusController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckBidStatusInsertInterface, 
    requestCheckBidStatusUpdateInterface, 
    requestGenerateBidStatusModelOptions, 
    requestGenerateBidStatusModelUUID 
} from "./BidStatusMiddleware";

bidStatusRouter.get('/docs/bid-status', async (req: Request, res: Response) => {

    res.send('BidStatus APIs').end();

});

// - Begin BidStatus CRUD Router

// Create BidStatus Model
bidStatusRouter.post(
    '/bid-status',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateBidStatusModelUUID,
        requestCheckBidStatusInsertInterface
    ],
    bidStatusPost
);

// Retrieve all BidStatus Models
bidStatusRouter.get(
    '/bid-status',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    bidStatusGet
);

// Retrieve a single BidStatus Model
bidStatusRouter.get(
    '/bid-status/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    bidStatusGet
);

// Update BidStatus Model
bidStatusRouter.put(
    '/bid-status/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckBidStatusUpdateInterface
    ],
    bidStatusPut
);

// Patch BidStatus Model
bidStatusRouter.patch(
    '/bid-status/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckBidStatusUpdateInterface
    ],
    bidStatusPatch
);

// Delete BidStatus Model
bidStatusRouter.delete(
    '/bid-status/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    bidStatusDelete
);

// Delete BidStatus Model
bidStatusRouter.head(
    '/bid-status',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    bidStatusHead
);

// Delete BidStatus Model
bidStatusRouter.trace(
    '/bid-status',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    bidStatusTrace
);

// Delete BidStatus Model
bidStatusRouter.options(
    '/bid-status',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateBidStatusModelOptions
    ],
    bidStatusOptions
);

// - End BidStatus CRUD Router

// If the request is not found show 404 Error
bidStatusRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default bidStatusRouter;