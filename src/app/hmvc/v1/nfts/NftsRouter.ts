import express, { Request, Response } from "express";
const nftsRouter = express.Router();

import {
    nftsDelete,
    nftsGet,
    nftsHead,
    nftsOptions,
    nftsPatch,
    nftsPost,
    nftsPut,
    nftsTrace
} from "./NftsController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckNftsInsertInterface, 
    requestCheckNftsUpdateInterface, 
    requestGenerateNftsModelOptions, 
    requestGenerateNftsModelUUID 
} from "./NftsMiddleware";

nftsRouter.get('/docs/nfts', async (req: Request, res: Response) => {

    res.send('Nfts APIs').end();

});

// - Begin Nfts CRUD Router

// Create Nfts Model
nftsRouter.post(
    '/nfts',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateNftsModelUUID,
        requestCheckNftsInsertInterface
    ],
    nftsPost
);

// Retrieve all Nfts Models
nftsRouter.get(
    '/nfts',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    nftsGet
);

// Retrieve a single Nfts Model
nftsRouter.get(
    '/nfts/:nft_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    nftsGet
);

// Update Nfts Model
nftsRouter.put(
    '/nfts/:nft_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckNftsUpdateInterface
    ],
    nftsPut
);

// Patch Nfts Model
nftsRouter.patch(
    '/nfts/:nft_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckNftsUpdateInterface
    ],
    nftsPatch
);

// Delete Nfts Model
nftsRouter.delete(
    '/nfts/:nft_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    nftsDelete
);

// Delete Nfts Model
nftsRouter.head(
    '/nfts',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    nftsHead
);

// Delete Nfts Model
nftsRouter.trace(
    '/nfts',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    nftsTrace
);

// Delete Nfts Model
nftsRouter.options(
    '/nfts',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateNftsModelOptions
    ],
    nftsOptions
);

// - End Nfts CRUD Router

// If the request is not found show 404 Error
nftsRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default nftsRouter;