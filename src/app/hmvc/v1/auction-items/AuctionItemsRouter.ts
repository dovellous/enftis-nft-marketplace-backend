import express, { Request, Response } from "express";
const auctionItemsRouter = express.Router();

import {
    auctionItemsDelete,
    auctionItemsGet,
    auctionItemsHead,
    auctionItemsOptions,
    auctionItemsPatch,
    auctionItemsPost,
    auctionItemsPut,
    auctionItemsTrace
} from "./AuctionItemsController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckAuctionItemsInsertInterface, 
    requestCheckAuctionItemsUpdateInterface, 
    requestGenerateAuctionItemsModelOptions, 
    requestGenerateAuctionItemsModelUUID 
} from "./AuctionItemsMiddleware";

auctionItemsRouter.get('/docs/auction-items', async (req: Request, res: Response) => {

    res.send('AuctionItems APIs').end();

});

// - Begin AuctionItems CRUD Router

// Create AuctionItems Model
auctionItemsRouter.post(
    '/auction-items',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateAuctionItemsModelUUID,
        requestCheckAuctionItemsInsertInterface
    ],
    auctionItemsPost
);

// Retrieve all AuctionItems Models
auctionItemsRouter.get(
    '/auction-items',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    auctionItemsGet
);

// Retrieve a single AuctionItems Model
auctionItemsRouter.get(
    '/auction-items/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    auctionItemsGet
);

// Update AuctionItems Model
auctionItemsRouter.put(
    '/auction-items/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckAuctionItemsUpdateInterface
    ],
    auctionItemsPut
);

// Patch AuctionItems Model
auctionItemsRouter.patch(
    '/auction-items/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckAuctionItemsUpdateInterface
    ],
    auctionItemsPatch
);

// Delete AuctionItems Model
auctionItemsRouter.delete(
    '/auction-items/:____uuiKey____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    auctionItemsDelete
);

// Delete AuctionItems Model
auctionItemsRouter.head(
    '/auction-items',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    auctionItemsHead
);

// Delete AuctionItems Model
auctionItemsRouter.trace(
    '/auction-items',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    auctionItemsTrace
);

// Delete AuctionItems Model
auctionItemsRouter.options(
    '/auction-items',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateAuctionItemsModelOptions
    ],
    auctionItemsOptions
);

// - End AuctionItems CRUD Router

// If the request is not found show 404 Error
auctionItemsRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default auctionItemsRouter;