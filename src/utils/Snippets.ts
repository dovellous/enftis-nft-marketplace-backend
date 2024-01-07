import { verifyBearerToken, signBearerToken, parseAuthorizationToken } from './JWTHelper';
import { store, setItem, getItem } from './StorageHelper';
import { errors, handleError, handleResponse} from './HttpHelper';
import { requestGetData, requestPostData, requestPutData, requestDeleteData, getData, postData } from './HttpRequest';
import DatabaseManager from './DatabaseManager';
import {Logger} from './LoggerHelper';

export const Snippets:any = {

	JsonWebToken: { verifyBearerToken, signBearerToken, parseAuthorizationToken },

	databaseHelper: DatabaseManager,
	
	storageHelper: { store, setItem, getItem },

	httpHelper: {errors, handleError, handleResponse},
	
	httpRequest: {requestGetData, requestPostData, requestPutData, requestDeleteData, getData, postData},
	
	logger: Logger,

	strings: {

	},
	arrays: {
	
	},
	objects: {
		convertToArray: (obj: any) => {
			const arr = Object.keys(obj).map((key) => [key, obj[key]]);
			return arr;
		},
		getWhereClause: (col: string, value: any) => {
			
			const _whereClause: any = {};

			_whereClause[col] = value;

			return _whereClause;

		}
		
	},
	numbers: {

		formatCurrency: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',

			// These options are needed to round to whole numbers if that's what you want.
			//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
			//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
		}),
		
		getRandomValues: () => {
			const  _time = new Date().getTime();
			return _time;
		}
	
	},
	utils: {
	
	},
	session: {
	
	},
	cookies: {
	
	},
	storage: {
	
	}

}