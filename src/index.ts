/* Import Modules */
import express from "express";
import { HighAvailabilityDBCls } from "./modules";
import { HIGH_AVAILABILITY_DATABASE } from "./utils";

export * from './utils';
export * from './modules';

/* Environment Variables */
require('dotenv').config();
const port = process.env.BACKEND_SERVICE_PORT ?? 8000;
const prefix = process.env.BACKEND_ROUTE_PREFIX ?? "/api";
const apiDocs = process.env.BACKEND_ROUTE_APIDOC ?? "/api-docs/" + (process.env.BACKEND_SWAGGER_VER ?? "v1") + "";
const swagger = process.env.BACKEND_SWAGGER_FILE ?? "./app/docs/output/swagger-" + (process.env.BACKEND_SWAGGER_VER ?? "v1") + ".json";

/* Import Swagger */
const swaggerFile = require(swagger);

/* Import App Middlewares */
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

/* Initialize the App */
const app = express();
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );
/* Routes */
const Router = require("./app/router/app-router");
app.use('/api', Router);

/* Initialize Swagger UI */
const swaggerUi = require('swagger-ui-express');

/* Serve the API Documentation UI */
app.use(apiDocs, swaggerUi.serve, swaggerUi.setup(swaggerFile));

/* Start the Server */
const { startServer } = require("./app/services/Server");

const db: any = new HighAvailabilityDBCls();

db.connect();

app.set(HIGH_AVAILABILITY_DATABASE, db);

startServer(app, port);
