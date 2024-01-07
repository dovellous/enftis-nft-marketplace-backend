import express, { Request, Response } from "express";
const authorsRouter = express.Router();

import {
    authorsDelete,
    authorsGet,
    authorsHead,
    authorsOptions,
    authorsPatch,
    authorsPost,
    authorsPut,
    authorsTrace
} from "./AuthorsController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckAuthorsInsertInterface, 
    requestCheckAuthorsUpdateInterface, 
    requestGenerateAuthorsModelOptions, 
    requestGenerateAuthorsModelUUID 
} from "./AuthorsMiddleware";

authorsRouter.get('/docs/authors', async (req: Request, res: Response) => {

    res.send('Authors APIs').end();

});

// - Begin Authors CRUD Router

// Create Authors Model
authorsRouter.post(
    '/authors',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateAuthorsModelUUID,
        requestCheckAuthorsInsertInterface
    ],
    authorsPost
);

// Retrieve all Authors Models
authorsRouter.get(
    '/authors',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    authorsGet
);

// Retrieve a single Authors Model
authorsRouter.get(
    '/authors/:author_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    authorsGet
);

// Update Authors Model
authorsRouter.put(
    '/authors/:author_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckAuthorsUpdateInterface
    ],
    authorsPut
);

// Patch Authors Model
authorsRouter.patch(
    '/authors/:author_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckAuthorsUpdateInterface
    ],
    authorsPatch
);

// Delete Authors Model
authorsRouter.delete(
    '/authors/:author_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    authorsDelete
);

// Delete Authors Model
authorsRouter.head(
    '/authors',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    authorsHead
);

// Delete Authors Model
authorsRouter.trace(
    '/authors',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    authorsTrace
);

// Delete Authors Model
authorsRouter.options(
    '/authors',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateAuthorsModelOptions
    ],
    authorsOptions
);

// - End Authors CRUD Router

// If the request is not found show 404 Error
authorsRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default authorsRouter;