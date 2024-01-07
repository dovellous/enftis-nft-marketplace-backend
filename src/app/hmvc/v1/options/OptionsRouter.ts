import express, { Request, Response } from "express";
const optionsRouter = express.Router();

import {
    optionsDelete,
    optionsGet,
    optionsHead,
    optionsOptions,
    optionsPatch,
    optionsPost,
    optionsPut,
    optionsTrace
} from "./OptionsController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckOptionsInsertInterface, 
    requestCheckOptionsUpdateInterface, 
    requestGenerateOptionsModelOptions, 
    requestGenerateOptionsModelUUID 
} from "./OptionsMiddleware";

optionsRouter.get('/docs/options', async (req: Request, res: Response) => {

    res.send('Options APIs').end();

});

// - Begin Options CRUD Router

// Create Options Model
optionsRouter.post(
    '/options',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateOptionsModelUUID,
        requestCheckOptionsInsertInterface
    ],
    optionsPost
);

// Retrieve all Options Models
optionsRouter.get(
    '/options',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    optionsGet
);

// Retrieve a single Options Model
optionsRouter.get(
    '/options/:option_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    optionsGet
);

// Update Options Model
optionsRouter.put(
    '/options/:option_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckOptionsUpdateInterface
    ],
    optionsPut
);

// Patch Options Model
optionsRouter.patch(
    '/options/:option_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckOptionsUpdateInterface
    ],
    optionsPatch
);

// Delete Options Model
optionsRouter.delete(
    '/options/:option_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    optionsDelete
);

// Delete Options Model
optionsRouter.head(
    '/options',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    optionsHead
);

// Delete Options Model
optionsRouter.trace(
    '/options',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    optionsTrace
);

// Delete Options Model
optionsRouter.options(
    '/options',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateOptionsModelOptions
    ],
    optionsOptions
);

// - End Options CRUD Router

// If the request is not found show 404 Error
optionsRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default optionsRouter;