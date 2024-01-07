import express, { Request, Response } from "express";
const inviteLinksRouter = express.Router();

import {
    inviteLinksDelete,
    inviteLinksGet,
    inviteLinksHead,
    inviteLinksOptions,
    inviteLinksPatch,
    inviteLinksPost,
    inviteLinksPut,
    inviteLinksTrace
} from "./InviteLinksController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckInviteLinksInsertInterface, 
    requestCheckInviteLinksUpdateInterface, 
    requestGenerateInviteLinksModelOptions, 
    requestGenerateInviteLinksModelUUID 
} from "./InviteLinksMiddleware";

inviteLinksRouter.get('/docs/invite-links', async (req: Request, res: Response) => {

    res.send('InviteLinks APIs').end();

});

// - Begin InviteLinks CRUD Router

// Create InviteLinks Model
inviteLinksRouter.post(
    '/invite-links',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateInviteLinksModelUUID,
        requestCheckInviteLinksInsertInterface
    ],
    inviteLinksPost
);

// Retrieve all InviteLinks Models
inviteLinksRouter.get(
    '/invite-links',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    inviteLinksGet
);

// Retrieve a single InviteLinks Model
inviteLinksRouter.get(
    '/invite-links/:link_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    inviteLinksGet
);

// Update InviteLinks Model
inviteLinksRouter.put(
    '/invite-links/:link_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckInviteLinksUpdateInterface
    ],
    inviteLinksPut
);

// Patch InviteLinks Model
inviteLinksRouter.patch(
    '/invite-links/:link_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckInviteLinksUpdateInterface
    ],
    inviteLinksPatch
);

// Delete InviteLinks Model
inviteLinksRouter.delete(
    '/invite-links/:link_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    inviteLinksDelete
);

// Delete InviteLinks Model
inviteLinksRouter.head(
    '/invite-links',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    inviteLinksHead
);

// Delete InviteLinks Model
inviteLinksRouter.trace(
    '/invite-links',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    inviteLinksTrace
);

// Delete InviteLinks Model
inviteLinksRouter.options(
    '/invite-links',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateInviteLinksModelOptions
    ],
    inviteLinksOptions
);

// - End InviteLinks CRUD Router

// If the request is not found show 404 Error
inviteLinksRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default inviteLinksRouter;