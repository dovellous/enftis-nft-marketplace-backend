import express, { Request, Response } from "express";
const inviteUsersRouter = express.Router();

import {
    inviteUsersDelete,
    inviteUsersGet,
    inviteUsersHead,
    inviteUsersOptions,
    inviteUsersPatch,
    inviteUsersPost,
    inviteUsersPut,
    inviteUsersTrace
} from "./InviteUsersController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckInviteUsersInsertInterface, 
    requestCheckInviteUsersUpdateInterface, 
    requestGenerateInviteUsersModelOptions, 
    requestGenerateInviteUsersModelUUID 
} from "./InviteUsersMiddleware";

inviteUsersRouter.get('/docs/invite-users', async (req: Request, res: Response) => {

    res.send('InviteUsers APIs').end();

});

// - Begin InviteUsers CRUD Router

// Create InviteUsers Model
inviteUsersRouter.post(
    '/invite-users',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateInviteUsersModelUUID,
        requestCheckInviteUsersInsertInterface
    ],
    inviteUsersPost
);

// Retrieve all InviteUsers Models
inviteUsersRouter.get(
    '/invite-users',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    inviteUsersGet
);

// Retrieve a single InviteUsers Model
inviteUsersRouter.get(
    '/invite-users/:invite_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    inviteUsersGet
);

// Update InviteUsers Model
inviteUsersRouter.put(
    '/invite-users/:invite_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckInviteUsersUpdateInterface
    ],
    inviteUsersPut
);

// Patch InviteUsers Model
inviteUsersRouter.patch(
    '/invite-users/:invite_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckInviteUsersUpdateInterface
    ],
    inviteUsersPatch
);

// Delete InviteUsers Model
inviteUsersRouter.delete(
    '/invite-users/:invite_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    inviteUsersDelete
);

// Delete InviteUsers Model
inviteUsersRouter.head(
    '/invite-users',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    inviteUsersHead
);

// Delete InviteUsers Model
inviteUsersRouter.trace(
    '/invite-users',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    inviteUsersTrace
);

// Delete InviteUsers Model
inviteUsersRouter.options(
    '/invite-users',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateInviteUsersModelOptions
    ],
    inviteUsersOptions
);

// - End InviteUsers CRUD Router

// If the request is not found show 404 Error
inviteUsersRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default inviteUsersRouter;