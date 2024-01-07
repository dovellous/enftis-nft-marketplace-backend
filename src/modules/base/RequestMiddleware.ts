import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { verifyBearerToken, parseAuthorizationToken } from "../../utils/JWTHelper";
import { handleHttpStatus } from "../../utils/HttpHelper";
import { UserModel } from "../../app/hmvc/v1/authentication/user/UserMongoModel";

require('dotenv').config();

const bcrypt = require("bcryptjs");

const doVerifyBearerToken: any = (req: Request | any, res: Response, next: any, authorizationHeader: any) => {

    verifyBearerToken(authorizationHeader, (decoded: any) => {

        if (decoded) {

            req.decodedAccessToken = decoded;

            if (decoded.iat * 1000 > new Date().getTime()) {

                return handleHttpStatus(
                    res,
                    403,
                    "This should never happen, the token want us to assume it\'s yet to be created, huh?",
                    { created: new Date(decoded.iat * 1000), requested: new Date() },
                    "ALL",
                    "REQUEST_VERIFY_BEARER_TOKEN"
                );

            }

            if (decoded.exp * 1000 < new Date().getTime()) {

                return handleHttpStatus(
                    res,
                    403,
                    "Token has expired",
                    { created: new Date(decoded.iat * 1000), expired: new Date(decoded.exp * 1000) },
                    "ALL",
                    "REQUEST_TOKEN_EXPIRED"
                );
            }

            if (!decoded.hasOwnProperty('userId')) {

                return handleHttpStatus(
                    res,
                    403,
                    "The token is missing the user identity",
                    decoded,
                    "ALL",
                    "REQUEST_TOKEN_INVALID_USER_IDENTITIES`"
                );

            }

            if (!decoded.hasOwnProperty('username')) {

                return handleHttpStatus(
                    res,
                    403,
                    "The token is missing the username",
                    decoded,
                    "ALL",
                    "REQUEST_TOKEN_INVALID_USERNAME"
                );

            }

            next();

        } else {

            return handleHttpStatus(
                res,
                500,
                "Invalid token, failed to decode",
                decoded,
                "ALL",
                "REQUEST_TOKEN_DECODE_ERROR"
            );

        }

    });

}

export const requestCheckDuplicateEmailAddress = async (req: Request, res: Response, next: any) => {

    const { email } = req.body;

    if (email) {

        const emailExists = await UserModel.findOne({ emailAddress: email }).exec();

        if (emailExists != null) {

            return handleHttpStatus(
                res,
                400,
                "Email address already exists",
                { emailAddress: email },
                "ALL",
                "REQUEST_CHECK_DUPLICATE_EMAIL"
            );

        } else {

            next();

        }

    } else {

        return handleHttpStatus(
            res,
            400,
            "Missing email/username",
            req.body,
            "ALL",
            "REQUEST_CHECK_DUPLICATE_EMAIL"
        );

    }

};

export const requestCheckDuplicateUsername = async (req: Request, res: Response, next: any) => {

    const { username } = req.body;

    if (username) {

        const usernameExists = await UserModel.findOne({ username: username }).exec();

        if (usernameExists != null) {

            return handleHttpStatus(
                res,
                400,
                "Username already exists",
                { username: username },
                "ALL",
                "REQUEST_CHECK_DUPLICATE_USERNAME"
            );

        } else {

            next();

        }

    } else {

        return handleHttpStatus(
            res,
            400,
            "Missing username",
            req.body,
            "ALL",
            "REQUEST_CHECK_DUPLICATE_USERNAME"
        );

    }

};

export const requestCheckClient = async (
    req: any,
    res: any,
    next: any
) => {

}

export const requestCheckClient1 = async (req: any, res: any, next: any) => {

    const authorizationHeader = req.headers["authorization"];

    if (!authorizationHeader) {

        return handleHttpStatus(
            res,
            400,
            "Missing authorization header",
            req.headers,
            "ALL",
            "REQUEST_MISSING_AUTH_HEADER"
        );

    }

    try {

        doVerifyBearerToken(req, res, next, authorizationHeader);

    } catch (error: any) {

        return handleHttpStatus(
            res,
            500,
            "Invalid authorization header",
            authorizationHeader,
            "ALL",
            "REQUEST_INVALID_AUTH_HEADER"
        );

    }

};

export const requestCheckToken = (req: any, res: any, next: any) => {

    const authorizationHeader = req.headers["authorization"];

    if (!authorizationHeader) {

        return handleHttpStatus(
            res,
            400,
            "Missing authorization header",
            req.headers,
            "ALL",
            "REQUEST_CHECK_TOKEN"
        );
    }

    try {

        doVerifyBearerToken(req, res, next, authorizationHeader);

    } catch (error: any) {

        return handleHttpStatus(
            res,
            500,
            "Invalid authorization header",
            authorizationHeader,
            "ALL",
            "REQUEST_INVALID_AUTH_HEADER"
        );

    }

};

export const requestCheckParameters = (req: any, res: any, next: any) => {

    const { emailAddress, username, password } = req.body;

    const userId = emailAddress || username;

    if (userId && password) {

        next();

    } else {

        return handleHttpStatus(
            res,
            400,
            "Missing input parameters",
            req.body,
            "ALL",
            "REQUEST_MISSING_PARAMS"
        );

    }

};
export const requestSanitizeURL = (req: any, res: any, next: any) => {

    const { emailAddress, username, password } = req.body;

    const userId = emailAddress || username;

    if (userId && password) {

        next();

    } else {

        return handleHttpStatus(
            res,
            400,
            "Missing input parameters",
            req.body,
            "ALL",
            "REQUEST_MISSING_PARAMS"
        );

    }

};
