import express, { Request, Response } from "express";
const bonusesRouter = express.Router();

import {
    bonusesDelete,
    bonusesGet,
    bonusesHead,
    bonusesOptions,
    bonusesPatch,
    bonusesPost,
    bonusesPut,
    bonusesTrace
} from "./BonusesController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckBonusesInsertInterface, 
    requestCheckBonusesUpdateInterface, 
    requestGenerateBonusesModelOptions, 
    requestGenerateBonusesModelUUID 
} from "./BonusesMiddleware";

bonusesRouter.get('/docs/bonuses', async (req: Request, res: Response) => {

    res.send('Bonuses APIs').end();

});

// - Begin Bonuses CRUD Router

// Create Bonuses Model
bonusesRouter.post(
    '/bonuses',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateBonusesModelUUID,
        requestCheckBonusesInsertInterface
    ],
    bonusesPost
);

// Retrieve all Bonuses Models
bonusesRouter.get(
    '/bonuses',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    bonusesGet
);

// Retrieve a single Bonuses Model
bonusesRouter.get(
    '/bonuses/:bonus_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    bonusesGet
);

// Update Bonuses Model
bonusesRouter.put(
    '/bonuses/:bonus_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckBonusesUpdateInterface
    ],
    bonusesPut
);

// Patch Bonuses Model
bonusesRouter.patch(
    '/bonuses/:bonus_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckBonusesUpdateInterface
    ],
    bonusesPatch
);

// Delete Bonuses Model
bonusesRouter.delete(
    '/bonuses/:bonus_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    bonusesDelete
);

// Delete Bonuses Model
bonusesRouter.head(
    '/bonuses',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    bonusesHead
);

// Delete Bonuses Model
bonusesRouter.trace(
    '/bonuses',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    bonusesTrace
);

// Delete Bonuses Model
bonusesRouter.options(
    '/bonuses',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateBonusesModelOptions
    ],
    bonusesOptions
);

// - End Bonuses CRUD Router

// If the request is not found show 404 Error
bonusesRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default bonusesRouter;