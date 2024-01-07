import express, { Request, Response } from "express";
const marketItemsRouter = express.Router();

import {
    marketItemsDelete,
    marketItemsGet,
    marketItemsHead,
    marketItemsOptions,
    marketItemsPatch,
    marketItemsPost,
    marketItemsPut,
    marketItemsTrace
} from "./MarketItemsController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckMarketItemsInsertInterface, 
    requestCheckMarketItemsUpdateInterface, 
    requestGenerateMarketItemsModelOptions, 
    requestGenerateMarketItemsModelUUID 
} from "./MarketItemsMiddleware";

marketItemsRouter.get('/docs/market-items', async (req: Request, res: Response) => {

    res.send('MarketItems APIs').end();

});

// - Begin MarketItems CRUD Router

// Create MarketItems Model
marketItemsRouter.post(
    '/market-items',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateMarketItemsModelUUID,
        requestCheckMarketItemsInsertInterface
    ],
    marketItemsPost
);

// Retrieve all MarketItems Models
marketItemsRouter.get(
    '/market-items',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    marketItemsGet
);

// Retrieve a single MarketItems Model
marketItemsRouter.get(
    '/market-items/:market_item_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    marketItemsGet
);

// Update MarketItems Model
marketItemsRouter.put(
    '/market-items/:market_item_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckMarketItemsUpdateInterface
    ],
    marketItemsPut
);

// Patch MarketItems Model
marketItemsRouter.patch(
    '/market-items/:market_item_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckMarketItemsUpdateInterface
    ],
    marketItemsPatch
);

// Delete MarketItems Model
marketItemsRouter.delete(
    '/market-items/:market_item_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    marketItemsDelete
);

// Delete MarketItems Model
marketItemsRouter.head(
    '/market-items',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    marketItemsHead
);

// Delete MarketItems Model
marketItemsRouter.trace(
    '/market-items',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    marketItemsTrace
);

// Delete MarketItems Model
marketItemsRouter.options(
    '/market-items',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateMarketItemsModelOptions
    ],
    marketItemsOptions
);

// - End MarketItems CRUD Router

// If the request is not found show 404 Error
marketItemsRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default marketItemsRouter;