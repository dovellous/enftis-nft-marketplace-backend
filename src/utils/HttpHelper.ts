import {Logger} from "./LoggerHelper";

const httpStatus = {
	TRACE: 'OK',
	OK: 'OK',
	CREATED: 'CREATED',
	UPDATED: 'UPDATED',
	DELETED: 'DELETED',
	BAD_REQUEST: 'BAD_REQUEST',
	VALIDATION_ERROR: 'VALIDATION_ERROR',
	UNAUTHORIZED_ERROR: 'UNAUTHORIZED',
	FORBIDDEN_ERROR: 'FORBIDDEN',
	INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
}

const handleResponse = (res: any, code: number, payload: any) => {

	Logger.log(['HTTP Response', code]);

	res.setHeader('Content-Type', 'application/json');

	res.status(code).json(payload).end();

}

const handleHttpStatus = ( res: any, status: any, message: any, payload: any, model?:string, operation?:string ) => {
	
	Logger.error(['HTTP Error', status, message]);
	
	res.setHeader('Content-Type', 'application/json');
	
	switch( status ) {

		case httpStatus.TRACE: {
			handleResponse(res, 200, {
				status: httpStatus.TRACE,
				message: message || 'success',
				data: payload,
				model: model,
				operation: operation
			});
			break;
		}

		case httpStatus.OK: {
			handleResponse(res, 200, {
				status: httpStatus.OK,
				message: message || 'success',
				data: payload,
				model: model,
				operation: operation
			});
			break;
		}

		case  httpStatus.CREATED : {
			handleResponse(res, 201, {
				status: httpStatus.CREATED,
				message: message || 'Item created',
				data: payload,
				model: model,
				operation: operation
			});
			break;
		}

		case  httpStatus.UPDATED : {
			handleResponse(res, 200, {
				status: httpStatus.UPDATED,
				message: message || 'Item updated',
				data: payload,
				model: model,
				operation: operation
			});
			break;
		}

		case  httpStatus.DELETED : {
			handleResponse(res, 200, {
				status: httpStatus.DELETED,
				message: message || 'Item deleted',
				uuid: payload
			});
			break;
		}

		case  httpStatus.BAD_REQUEST : {
			handleResponse(res, 400, {
				status: httpStatus.BAD_REQUEST,
				message: message || 'Invalid or missing parameters',
				error: payload,
				model: model,
				operation: operation
			});
			break;
		}

		case  httpStatus.VALIDATION_ERROR : {
			handleResponse(res, 400, {
				status: httpStatus.VALIDATION_ERROR,
				message: message || 'Validation error',
				error: payload,
				model: model,
				operation: operation
			});
			break;
		}

		case  httpStatus.UNAUTHORIZED_ERROR : {
			handleResponse(res, 401, {
				status: httpStatus.UNAUTHORIZED_ERROR,
				message: message || 'The user is not authorized',
				error: payload,
				model: model,
				operation: operation
			});
			break;
		}

		case  httpStatus.FORBIDDEN_ERROR : {
			handleResponse(res, 403, {
				status: httpStatus.FORBIDDEN_ERROR,
				message: message || 'The action is forbidden',
				error: payload,
				model: model,
				operation: operation
			});
			break;
		}

		case  httpStatus.INTERNAL_SERVER_ERROR : {
			handleResponse(res, 500, {
				status: httpStatus.INTERNAL_SERVER_ERROR,
				message: message || 'Internal server error',
				error: payload,
				model: model,
				operation: operation
			});
			break;
		}

		default : {
			res.sendStatus(500);
			break;
		}

	}
	
}

export {httpStatus, handleHttpStatus, handleResponse}