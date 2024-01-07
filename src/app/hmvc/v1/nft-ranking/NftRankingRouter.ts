import express, { Request, Response } from "express";
const nftRankingRouter = express.Router();

import {
    nftRankingDelete,
    nftRankingGet,
    nftRankingHead,
    nftRankingOptions,
    nftRankingPatch,
    nftRankingPost,
    nftRankingPut,
    nftRankingTrace
} from "./NftRankingController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckNftRankingInsertInterface, 
    requestCheckNftRankingUpdateInterface, 
    requestGenerateNftRankingModelOptions, 
    requestGenerateNftRankingModelUUID 
} from "./NftRankingMiddleware";

nftRankingRouter.get('/docs/nft-ranking', async (req: Request, res: Response) => {

    res.send('NftRanking APIs').end();

});

// - Begin NftRanking CRUD Router

// Create NftRanking Model
nftRankingRouter.post(
    '/nft-ranking',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateNftRankingModelUUID,
        requestCheckNftRankingInsertInterface
    ],
    nftRankingPost
);

// Retrieve all NftRanking Models
nftRankingRouter.get(
    '/nft-ranking',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    nftRankingGet
);

// Retrieve a single NftRanking Model
nftRankingRouter.get(
    '/nft-ranking/:nft_ranking_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    nftRankingGet
);

// Update NftRanking Model
nftRankingRouter.put(
    '/nft-ranking/:nft_ranking_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckNftRankingUpdateInterface
    ],
    nftRankingPut
);

// Patch NftRanking Model
nftRankingRouter.patch(
    '/nft-ranking/:nft_ranking_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckNftRankingUpdateInterface
    ],
    nftRankingPatch
);

// Delete NftRanking Model
nftRankingRouter.delete(
    '/nft-ranking/:nft_ranking_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    nftRankingDelete
);

// Delete NftRanking Model
nftRankingRouter.head(
    '/nft-ranking',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    nftRankingHead
);

// Delete NftRanking Model
nftRankingRouter.trace(
    '/nft-ranking',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    nftRankingTrace
);

// Delete NftRanking Model
nftRankingRouter.options(
    '/nft-ranking',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateNftRankingModelOptions
    ],
    nftRankingOptions
);

// - End NftRanking CRUD Router

// If the request is not found show 404 Error
nftRankingRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default nftRankingRouter;