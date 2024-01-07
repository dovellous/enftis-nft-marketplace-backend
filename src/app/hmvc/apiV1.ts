import {Request, Response} from "express";
import authenticationRouter from './v1/authentication/AuthenticationRouter';

//
import ____MODEL_CAMEL_CASE____Router from './v1/template/____MODEL_ALL_CAMEL_CASE____Router';
//

const express = require('express');

const router = express.Router?.()

if ("use" in router) {
    
    router.use('/auth', authenticationRouter);

}

// Injected module
if ("use" in router) {
    
    router.use('/____MODEL_HYPHENATED_CASE____Router', ____MODEL_CAMEL_CASE____Router);

}
// End injected modules

if ("get" in router) {
    
    router.get('/', welcome);

}

const apiDocs = process.env.BACKEND_ROUTE_APIDOC ?? "/api-docs/"+(process.env.BACKEND_SWAGGER_VER ?? "v1")+"";

function welcome(req: Request, res: Response) {
    return res
        .status(200)
        .send("<html><head><style>body{font-family: 'arial';}</style></head><body><h1>Welcome to ENFTIS version 1.0.0</h1><p><strong><a href='"+apiDocs+"'>View API Documentation</a></strong></p></body></html>");
}

module.exports = router;