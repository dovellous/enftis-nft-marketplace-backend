import express, { Request, Response } from "express";
const nftLogsRouter = express.Router();

import {
    nftLogsDelete,
    nftLogsGet,
    nftLogsHead,
    nftLogsOptions,
    nftLogsPatch,
    nftLogsPost,
    nftLogsPut,
    nftLogsTrace
} from "./NftLogsController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckNftLogsInsertInterface, 
    requestCheckNftLogsUpdateInterface, 
    requestGenerateNftLogsModelOptions, 
    requestGenerateNftLogsModelUUID 
} from "./NftLogsMiddleware";

nftLogsRouter.get('/docs/nft-logs', async (req: Request, res: Response) => {

    res.send('NftLogs APIs').end();

});

// - Begin NftLogs CRUD Router

// Create NftLogs Model
nftLogsRouter.post(
    '/nft-logs',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateNftLogsModelUUID,
        requestCheckNftLogsInsertInterface
    ],
    nftLogsPost
);

// Retrieve all NftLogs Models
nftLogsRouter.get(
    '/nft-logs',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    nftLogsGet
);

// Retrieve a single NftLogs Model
nftLogsRouter.get(
    '/nft-logs/:log_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    nftLogsGet
);

// Update NftLogs Model
nftLogsRouter.put(
    '/nft-logs/:log_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckNftLogsUpdateInterface
    ],
    nftLogsPut
);

// Patch NftLogs Model
nftLogsRouter.patch(
    '/nft-logs/:log_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckNftLogsUpdateInterface
    ],
    nftLogsPatch
);

// Delete NftLogs Model
nftLogsRouter.delete(
    '/nft-logs/:log_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    nftLogsDelete
);

// Delete NftLogs Model
nftLogsRouter.head(
    '/nft-logs',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    nftLogsHead
);

// Delete NftLogs Model
nftLogsRouter.trace(
    '/nft-logs',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    nftLogsTrace
);

// Delete NftLogs Model
nftLogsRouter.options(
    '/nft-logs',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateNftLogsModelOptions
    ],
    nftLogsOptions
);

// - End NftLogs CRUD Router

// If the request is not found show 404 Error
nftLogsRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default nftLogsRouter;