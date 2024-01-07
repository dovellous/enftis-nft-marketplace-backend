import express, { Request, Response } from "express";

const ____MODEL_CAMEL_CASE____Router = express.Router();

import {
    ____MODEL_CAMEL_CASE____Delete,
    ____MODEL_CAMEL_CASE____Get,
    ____MODEL_CAMEL_CASE____Head,
    ____MODEL_CAMEL_CASE____Options,
    ____MODEL_CAMEL_CASE____Patch,
    ____MODEL_CAMEL_CASE____Post,
    ____MODEL_CAMEL_CASE____Put,
    ____MODEL_CAMEL_CASE____Trace
} from "./____MODEL_ALL_CAMEL_CASE____Controller";

import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules/base/RequestMiddleware";

import { 
    requestCheck____MODEL_ALL_CAMEL_CASE____InsertInterface, 
    requestCheck____MODEL_ALL_CAMEL_CASE____UpdateInterface, 
    requestGenerate____MODEL_ALL_CAMEL_CASE____ModelOptions, 
    requestGenerate____MODEL_ALL_CAMEL_CASE____ModelUUID 
} from "./____MODEL_ALL_CAMEL_CASE____Middleware";

____MODEL_CAMEL_CASE____Router.get('/docs/____MODEL_ALL_HYPHENATED_CASE____', async (req: Request, res: Response) => {

    res.send('____MODEL_ALL_CAMEL_CASE____ APIs').end();

});

// - Begin ____MODEL_ALL_CAMEL_CASE____ CRUD Router

// Create ____MODEL_ALL_CAMEL_CASE____ Model
____MODEL_CAMEL_CASE____Router.post(
    '/____MODEL_ALL_HYPHENATED_CASE____', 
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerate____MODEL_ALL_CAMEL_CASE____ModelUUID,
        requestCheck____MODEL_ALL_CAMEL_CASE____InsertInterface
    ],
    ____MODEL_CAMEL_CASE____Post
);

// Retrieve all ____MODEL_ALL_CAMEL_CASE____ Models
____MODEL_CAMEL_CASE____Router.get(
    '/____MODEL_ALL_HYPHENATED_CASE____',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    ____MODEL_CAMEL_CASE____Get
);

// Retrieve a single ____MODEL_ALL_CAMEL_CASE____ Model
____MODEL_CAMEL_CASE____Router.get(
    '/____MODEL_ALL_HYPHENATED_CASE____/:____UUID_KEY____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    ____MODEL_CAMEL_CASE____Get
);

// Update ____MODEL_ALL_CAMEL_CASE____ Model
____MODEL_CAMEL_CASE____Router.put(
    '/____MODEL_ALL_HYPHENATED_CASE____/:____UUID_KEY____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheck____MODEL_ALL_CAMEL_CASE____UpdateInterface
    ],
    ____MODEL_CAMEL_CASE____Put
);

// Patch ____MODEL_ALL_CAMEL_CASE____ Model
____MODEL_CAMEL_CASE____Router.patch(
    '/____MODEL_ALL_HYPHENATED_CASE____/:____UUID_KEY____',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheck____MODEL_ALL_CAMEL_CASE____UpdateInterface
    ],
    ____MODEL_CAMEL_CASE____Patch
);

// Delete ____MODEL_ALL_CAMEL_CASE____ Model
____MODEL_CAMEL_CASE____Router.delete(
    '/____MODEL_ALL_HYPHENATED_CASE____/:____UUID_KEY____',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    ____MODEL_CAMEL_CASE____Delete
);

// Delete ____MODEL_ALL_CAMEL_CASE____ Model
____MODEL_CAMEL_CASE____Router.head(
    '/____MODEL_ALL_HYPHENATED_CASE____',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    ____MODEL_CAMEL_CASE____Head
);

// Delete ____MODEL_ALL_CAMEL_CASE____ Model
____MODEL_CAMEL_CASE____Router.trace(
    '/____MODEL_ALL_HYPHENATED_CASE____',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    ____MODEL_CAMEL_CASE____Trace
);

// Delete ____MODEL_ALL_CAMEL_CASE____ Model
____MODEL_CAMEL_CASE____Router.options(
    '/____MODEL_ALL_HYPHENATED_CASE____',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerate____MODEL_ALL_CAMEL_CASE____ModelOptions
    ],
    ____MODEL_CAMEL_CASE____Options
);

// - End ____MODEL_ALL_CAMEL_CASE____ CRUD Router

// If the request is not found show 404 Error
____MODEL_CAMEL_CASE____Router.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default ____MODEL_CAMEL_CASE____Router;