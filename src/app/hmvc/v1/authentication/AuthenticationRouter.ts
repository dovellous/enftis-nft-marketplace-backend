import express, {Request, Response} from "express";
const router = express.Router();

import {clientGet, clientGetAll, clientPost, clientPut, clientPatch, clientDelete, clientMiddleware, IClient, ClientModel} from "./client/ClientController";
import {signIn, signUp, profileMe, profileSave, resetPassword, verifyEmailAddress} from "./user/UserController";

const {
    checkDuplicateUsername,
    checkDuplicateEmailAddress,
    checkParameters,
    checkToken
} = require("./AuthenticationMiddleware");

router.get('/', async (req: Request, res: Response) => {
    
    res.send('Authentication APIs').end();

});

// - Begin Client CRUD Router

// Create Client Model
router.post(
    '/client',
    [],
    clientPost
);

// Retrieve a single Client Model
router.get(
    '/client/:device_id',
    [],
    clientGet
);

// Retrieve all Client Models
router.get(
    '/client',
    [],
    clientGetAll
);

// Update Client Model
router.put(
    '/client/:device_id',
    [],
    clientPut
);

// Patch Client Model
router.patch(
    '/client/:device_id',
    [],
    clientPatch
);

// Delete Client Model
router.delete(
    '/client/:device_id',
    [],
    clientDelete
);

// - End Client CRUD Router

/*

router.get(
    '/client/:id',
    [
        checkClient
    ],
    clientDetails
);

router.put(
    '/client',
    [
        checkClient
    ],
    clientUpdate
);

router.delete(
    '/client/:id',
    [
        checkClient
    ],
    clientDelete
);

router.post(
    '/sign-up',
    [
        checkClient,
        checkDuplicateUsername,
        checkDuplicateEmailAddress
    ],
    signUp
);

router.post(
    '/sign-in',
    [
        checkClient,
        checkParameters
    ],
    signIn
);

router.get(
    '/profile/me',
    [
        checkToken
    ],
    profileMe
);

router.post(
    '/profile/me',
    [
        checkToken
    ],
    profileSave
);

*/

router.get('*', async (req: Request, res: Response) => {

    res.sendStatus(404);

})

export default router;