import express, { Request, Response } from "express";
const usersRouter = express.Router();

import {
    usersDelete,
    usersGet,
    usersHead,
    usersOptions,
    usersPatch,
    usersPost,
    usersPut,
    usersTrace
} from "./UsersController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckUsersInsertInterface, 
    requestCheckUsersUpdateInterface, 
    requestGenerateUsersModelOptions, 
    requestGenerateUsersModelUUID 
} from "./UsersMiddleware";

usersRouter.get('/docs/users', async (req: Request, res: Response) => {

    res.send('Users APIs').end();

});

// - Begin Users CRUD Router

// Create Users Model
usersRouter.post(
    '/users',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateUsersModelUUID,
        requestCheckUsersInsertInterface
    ],
    usersPost
);

// Retrieve all Users Models
usersRouter.get(
    '/users',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    usersGet
);

// Retrieve a single Users Model
usersRouter.get(
    '/users/:user_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    usersGet
);

// Update Users Model
usersRouter.put(
    '/users/:user_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckUsersUpdateInterface
    ],
    usersPut
);

// Patch Users Model
usersRouter.patch(
    '/users/:user_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckUsersUpdateInterface
    ],
    usersPatch
);

// Delete Users Model
usersRouter.delete(
    '/users/:user_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    usersDelete
);

// Delete Users Model
usersRouter.head(
    '/users',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    usersHead
);

// Delete Users Model
usersRouter.trace(
    '/users',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    usersTrace
);

// Delete Users Model
usersRouter.options(
    '/users',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateUsersModelOptions
    ],
    usersOptions
);

// - End Users CRUD Router

// If the request is not found show 404 Error
usersRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default usersRouter;