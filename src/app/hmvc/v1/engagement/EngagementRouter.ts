import express, { Request, Response } from "express";
const engagementRouter = express.Router();

import {
    engagementDelete,
    engagementGet,
    engagementHead,
    engagementOptions,
    engagementPatch,
    engagementPost,
    engagementPut,
    engagementTrace
} from "./EngagementController";
import { 
    requestCheckClient, 
    requestCheckParameters, 
    requestCheckToken, 
    requestSanitizeURL 
} from "../../../../modules";

import { 
    requestCheckEngagementInsertInterface, 
    requestCheckEngagementUpdateInterface, 
    requestGenerateEngagementModelOptions, 
    requestGenerateEngagementModelUUID 
} from "./EngagementMiddleware";

engagementRouter.get('/docs/engagement', async (req: Request, res: Response) => {

    res.send('Engagement APIs').end();

});

// - Begin Engagement CRUD Router

// Create Engagement Model
engagementRouter.post(
    '/engagement',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestGenerateEngagementModelUUID,
        requestCheckEngagementInsertInterface
    ],
    engagementPost
);

// Retrieve all Engagement Models
engagementRouter.get(
    '/engagement',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    engagementGet
);

// Retrieve a single Engagement Model
engagementRouter.get(
    '/engagement/:engagement_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    engagementGet
);

// Update Engagement Model
engagementRouter.put(
    '/engagement/:engagement_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL,
        requestCheckEngagementUpdateInterface
    ],
    engagementPut
);

// Patch Engagement Model
engagementRouter.patch(
    '/engagement/:engagement_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestCheckParameters,
        requestSanitizeURL,
        requestCheckEngagementUpdateInterface
    ],
    engagementPatch
);

// Delete Engagement Model
engagementRouter.delete(
    '/engagement/:engagement_uuid',
    [
        requestCheckClient,
        requestCheckToken,
        requestSanitizeURL
    ],
    engagementDelete
);

// Delete Engagement Model
engagementRouter.head(
    '/engagement',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    engagementHead
);

// Delete Engagement Model
engagementRouter.trace(
    '/engagement',
    [
        requestCheckClient,
        requestCheckToken,
    ],
    engagementTrace
);

// Delete Engagement Model
engagementRouter.options(
    '/engagement',
    [
        requestCheckClient,
        requestCheckToken,
        requestGenerateEngagementModelOptions
    ],
    engagementOptions
);

// - End Engagement CRUD Router

// If the request is not found show 404 Error
engagementRouter.get('*', async (req:Request, res: Response) => {

    res.sendStatus(404);

})

export default engagementRouter;