import express, { Request, Response } from "express";
const categoriesRouter = express.Router();

import {
    categoriesDelete,
    categoriesGet,
    categoriesHead,
    categoriesOptions,
    categoriesPatch,
    categoriesPost,
    categoriesPut,
    categoriesTrace
} from "./CategoriesController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckCategoriesInsertInterface, 
    requestCheckCategoriesUpdateInterface, 
    requestGenerateCategoriesModelOptions, 
    requestGenerateCategoriesModelUUID 
} from "./CategoriesMiddleware";

categoriesRouter.get('/docs/categories', async (req: Request, res: Response) => {

    res.send('Categories APIs').end();

});

// - Begin Categories CRUD Router

// Create Categories Model
categoriesRouter.post(
    '/categories',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateCategoriesModelUUID,
        requestCheckCategoriesInsertInterface
    ],
    categoriesPost
);

// Retrieve all Categories Models
categoriesRouter.get(
    '/categories',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    categoriesGet
);

// Retrieve a single Categories Model
categoriesRouter.get(
    '/categories/:category_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    categoriesGet
);

// Update Categories Model
categoriesRouter.put(
    '/categories/:category_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckCategoriesUpdateInterface
    ],
    categoriesPut
);

// Patch Categories Model
categoriesRouter.patch(
    '/categories/:category_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckCategoriesUpdateInterface
    ],
    categoriesPatch
);

// Delete Categories Model
categoriesRouter.delete(
    '/categories/:category_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    categoriesDelete
);

// Delete Categories Model
categoriesRouter.head(
    '/categories',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    categoriesHead
);

// Delete Categories Model
categoriesRouter.trace(
    '/categories',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    categoriesTrace
);

// Delete Categories Model
categoriesRouter.options(
    '/categories',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateCategoriesModelOptions
    ],
    categoriesOptions
);

// - End Categories CRUD Router

// If the request is not found show 404 Error
categoriesRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default categoriesRouter;