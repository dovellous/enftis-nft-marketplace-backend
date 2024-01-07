import axiosClient from 'axios';

require('dotenv').config();

const apiBaseURL = process.env.BACKEND_API_BASE_URL ?? 'https://127.0.0.1:8080';

const getAccessToken = () => {

	// read var
	
	return '';
	
}

const requestGetData = (endpoint: string) => {
	
	const config = {
		method: 'get',
		url: apiBaseURL + '/' + endpoint,
		headers: {
			'Authorization': 'Bearer ' + getAccessToken(),
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	};
	
	// @ts-ignore
	return axiosClient(config);
	
}

const requestPostData = (endpoint:string, payload:any) => {
	
	const config = {
		method: 'post',
		url: apiBaseURL + '/' + endpoint,
		headers: {
			'Authorization': 'Bearer ' + getAccessToken(),
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: payload
	};
	
	// @ts-ignore
	return axiosClient(config);
	
}

const requestPutData = (endpoint: string, payload: any) => {

	const config = {
		method: 'put',
		url: apiBaseURL + '/' + endpoint,
		headers: {
			'Authorization': 'Bearer ' + getAccessToken(),
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: payload
	};

	// @ts-ignore
	return axiosClient(config);

}

const requestPatchData = (endpoint: string, payload: any) => {

	const config = {
		method: 'patch',
		url: apiBaseURL + '/' + endpoint,
		headers: {
			'Authorization': 'Bearer ' + getAccessToken(),
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: payload
	};

	// @ts-ignore
	return axiosClient(config);

}

const requestDeleteData = (endpoint: string, payload: any) => {

	const config = {
		method: 'delete',
		url: apiBaseURL + '/' + endpoint,
		headers: {
			'Authorization': 'Bearer ' + getAccessToken(),
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: payload
	};

	// @ts-ignore
	return axiosClient(config);

}

const requestTraceData = (endpoint: string, payload: any) => {

	const config = {
		method: 'trace',
		url: apiBaseURL + '/' + endpoint,
		headers: {
			'Authorization': 'Bearer ' + getAccessToken(),
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: payload
	};

	// @ts-ignore
	return axiosClient(config);

}

const postData = (url:string, payload:any, callbackSuccess:any, callbackError:any) => {
	
	const config = {
		method: 'post',
		url: url,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		data: payload
	};
	
	axiosClient(config)
		.then((res:any) => {
			callbackSuccess(res);
		})
		.catch((error: any) => {
			callbackError(error);
		});
	
}

const getData = (url:string, callbackSuccess:any, callbackError:any) => {
	
	const config = {
		method: 'get',
		url: url,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	};
	
	axiosClient(config)
		.then((res:any) => {
			callbackSuccess(res);
		})
		.catch((error: any) => {
			callbackError(error);
		});
	
}

export { requestGetData, requestPostData, requestPutData, requestPatchData, requestDeleteData, requestTraceData, getData, postData}