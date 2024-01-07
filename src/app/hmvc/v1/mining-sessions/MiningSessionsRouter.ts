import express, { Request, Response } from "express";
const miningSessionsRouter = express.Router();

import {
    miningSessionsDelete,
    miningSessionsGet,
    miningSessionsHead,
    miningSessionsOptions,
    miningSessionsPatch,
    miningSessionsPost,
    miningSessionsPut,
    miningSessionsTrace
} from "./MiningSessionsController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckMiningSessionsInsertInterface, 
    requestCheckMiningSessionsUpdateInterface, 
    requestGenerateMiningSessionsModelOptions, 
    requestGenerateMiningSessionsModelUUID 
} from "./MiningSessionsMiddleware";

miningSessionsRouter.get('/docs/mining-sessions', async (req: Request, res: Response) => {

    res.send('MiningSessions APIs').end();

});

// - Begin MiningSessions CRUD Router

// Create MiningSessions Model
miningSessionsRouter.post(
    '/mining-sessions',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateMiningSessionsModelUUID,
        requestCheckMiningSessionsInsertInterface
    ],
    miningSessionsPost
);

// Retrieve all MiningSessions Models
miningSessionsRouter.get(
    '/mining-sessions',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    miningSessionsGet
);

// Retrieve a single MiningSessions Model
miningSessionsRouter.get(
    '/mining-sessions/:mining_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    miningSessionsGet
);

// Update MiningSessions Model
miningSessionsRouter.put(
    '/mining-sessions/:mining_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckMiningSessionsUpdateInterface
    ],
    miningSessionsPut
);

// Patch MiningSessions Model
miningSessionsRouter.patch(
    '/mining-sessions/:mining_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckMiningSessionsUpdateInterface
    ],
    miningSessionsPatch
);

// Delete MiningSessions Model
miningSessionsRouter.delete(
    '/mining-sessions/:mining_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    miningSessionsDelete
);

// Delete MiningSessions Model
miningSessionsRouter.head(
    '/mining-sessions',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    miningSessionsHead
);

// Delete MiningSessions Model
miningSessionsRouter.trace(
    '/mining-sessions',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    miningSessionsTrace
);

// Delete MiningSessions Model
miningSessionsRouter.options(
    '/mining-sessions',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateMiningSessionsModelOptions
    ],
    miningSessionsOptions
);

// - End MiningSessions CRUD Router

// If the request is not found show 404 Error
miningSessionsRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default miningSessionsRouter;