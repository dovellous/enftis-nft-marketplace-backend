import {handleResponse, handleError, errors} from "../../../../../utils/HttpHelper";
import {signBearerToken} from "../../../../../utils/JWTHelper";
import {UserModel, IUser} from "./UserMongoModel";

const bcrypt = require("bcryptjs");

const signUp = async (req:any, res:any, next: any) => {

	// Our login logic starts here
	try {
		
		console.log(req.headers)
		
		// Get user input
		const { username, email, password, first_name, last_name } = req.body;
		
		if (username && email && password) {
			
			//Encrypt user password
			const encryptedPassword = await bcrypt.hash(password, 10);
			
			const userData = {
				username: username,
				firstName: first_name,
				lastName: last_name,
				emailAddress: email.toLowerCase(), // sanitize: convert email to lowercase
				password: encryptedPassword,
			};
			
			// Create user in our database
			const user:IUser = await UserModel.create(userData);

			user.password = '';

			// user
			handleResponse(req, res, next, user, 201);
			
		} else {
			
			handleError(res, errors.BAD_REQUEST, "Missing . or invalid registration parameters", {});
			
		}
		
	} catch (error:any) {
		
		handleError(res, errors.INTERNAL_SERVER_ERROR, "Unknown registration error", error);
		
	}
	
};

const signIn = async(req:any, res:any, next: any) => {
	
	// #swagger.auto = false
	
	/* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in / login a specific user' */

	/*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'User informationx.',
            required: true,
            schema: { $ref: "#/definitions/User" }
    } */

	/* #swagger.security = [{
            "apiKeyAuth": []
    }] */
	
	/* #swagger.responses[200] = {
				  schema: { "$ref": "#/definitions/User" },
				  description: "User registered successfully." } */
	
	/* #swagger.responses[400] = {
				  schema: { "$ref": "#/definitions/User" },
				  description: "Plz use correct params." } */
	
	// Our login logic starts here
	try {
		// Get user input
		const { username, emailAddress, password } = req.body;
		
		const userLogin = username ? {username} : {emailAddress};
		
		// Validate if user exist in our database
		const user = await UserModel.findOne(userLogin).select('+password');

		if (user && (await bcrypt.compare(password, user.password))) {
			// Create token
			const accessToken = signBearerToken(req, user, 4 * 60 * 60);

			// user
			handleResponse(req, res, next, {accessToken}, 200);
			
		} else {
			
			handleError(res, errors.UNAUTHORIZED_ERROR, "Invalid username/password combination", {});
			
		}
		
	} catch (err) {
		
		handleError(res, errors.INTERNAL_SERVER_ERROR, "Unknown authentication error", err);
		
	}
	
};

const profileMe = async(req:any, res:any, next: any) => {

	// #swagger.tags = ['User']
	// #swagger.description = 'Endpoint to get a specific user.'

	try {

		const { decodedAccessToken } = req;

		const user:any = await UserModel.findOne({userId: decodedAccessToken.userId}).select('+password');

		if (user) {

			user.password = '';

			/* #swagger.responses[200] = {
			  schema: { "$ref": "#/definitions/User" },
			  description: "User registered successfully." } */

			// user
			handleResponse(req, res, next, user, 200);

		}

	} catch (error: any) {

		handleError(res, errors.INTERNAL_SERVER_ERROR, "Failed to retrieve profile data", error);

	}

};

const profileSave = async(req:any, res:any, next: any) => {

	try {

		const { decodedAccessToken } = req;

		const requestBody:any = req.body;

		const user = await UserModel.findOne({userId: decodedAccessToken.userId}).select('+password');

		if (user) {

			if(requestBody.hasOwnProperty('password')){

				requestBody.password = await bcrypt.hash(requestBody.password, 10);

			}

			if(requestBody.hasOwnProperty('userId')){

				delete requestBody.userId;

			}

			if(requestBody.hasOwnProperty('id')){

				delete requestBody.id;

			}

			if(requestBody.hasOwnProperty('_id')){

				delete requestBody._id;

			}

			console.log('userUpdated', requestBody);

			const userUpdated = await UserModel.findOneAndUpdate({userId: decodedAccessToken.userId}, requestBody);

			console.log('userUpdated', userUpdated);

			const user = await UserModel.findOne({userId: decodedAccessToken.userId});

			// user
			handleResponse(req, res, next, user, 200);

		}

	} catch (error: any) {

		handleError(res, errors.INTERNAL_SERVER_ERROR, "Failed to retrieve profile data", error);

	}

};

const resetPassword = () => {

};

const verifyEmailAddress = () => {

};

export {signIn, signUp, profileMe, profileSave, resetPassword, verifyEmailAddress, IUser, UserModel}