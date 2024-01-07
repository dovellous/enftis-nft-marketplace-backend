import express, { Request, Response } from "express";
const loginSessionsRouter = express.Router();

import {
    loginSessionsDelete,
    loginSessionsGet,
    loginSessionsHead,
    loginSessionsOptions,
    loginSessionsPatch,
    loginSessionsPost,
    loginSessionsPut,
    loginSessionsTrace
} from "./LoginSessionsController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckLoginSessionsInsertInterface, 
    requestCheckLoginSessionsUpdateInterface, 
    requestGenerateLoginSessionsModelOptions, 
    requestGenerateLoginSessionsModelUUID 
} from "./LoginSessionsMiddleware";

loginSessionsRouter.get('/docs/login-sessions', async (req: Request, res: Response) => {

    res.send('LoginSessions APIs').end();

});

// - Begin LoginSessions CRUD Router

// Create LoginSessions Model
loginSessionsRouter.post(
    '/login-sessions',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateLoginSessionsModelUUID,
        requestCheckLoginSessionsInsertInterface
    ],
    loginSessionsPost
);

// Retrieve all LoginSessions Models
loginSessionsRouter.get(
    '/login-sessions',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    loginSessionsGet
);

// Retrieve a single LoginSessions Model
loginSessionsRouter.get(
    '/login-sessions/:session_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    loginSessionsGet
);

// Update LoginSessions Model
loginSessionsRouter.put(
    '/login-sessions/:session_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckLoginSessionsUpdateInterface
    ],
    loginSessionsPut
);

// Patch LoginSessions Model
loginSessionsRouter.patch(
    '/login-sessions/:session_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckLoginSessionsUpdateInterface
    ],
    loginSessionsPatch
);

// Delete LoginSessions Model
loginSessionsRouter.delete(
    '/login-sessions/:session_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    loginSessionsDelete
);

// Delete LoginSessions Model
loginSessionsRouter.head(
    '/login-sessions',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    loginSessionsHead
);

// Delete LoginSessions Model
loginSessionsRouter.trace(
    '/login-sessions',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    loginSessionsTrace
);

// Delete LoginSessions Model
loginSessionsRouter.options(
    '/login-sessions',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateLoginSessionsModelOptions
    ],
    loginSessionsOptions
);

// - End LoginSessions CRUD Router

// If the request is not found show 404 Error
loginSessionsRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default loginSessionsRouter;