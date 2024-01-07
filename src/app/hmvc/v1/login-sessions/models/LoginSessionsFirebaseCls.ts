import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class LoginSessionsObjCls {

	client_id: number;
	fid: string;
	session_created_at: string;
	session_ended_at: string;
	session_id: number;
	session_updated_at: string;
	session_uuid: string;
	socket_io: string;
	user_id: number;
 
  constructor(
	_client_id: number, 
	_fid: string, 
	_session_created_at: string, 
	_session_ended_at: string, 
	_session_id: number, 
	_session_updated_at: string, 
	_session_uuid: string, 
	_socket_io: string, 
	_user_id: number
  ) {
	this.client_id = _client_id;
	this.fid = _fid;
	this.session_created_at = _session_created_at;
	this.session_ended_at = _session_ended_at;
	this.session_id = _session_id;
	this.session_updated_at = _session_updated_at;
	this.session_uuid = _session_uuid;
	this.socket_io = _socket_io;
	this.user_id = _user_id;
  }
  
  toString() {
    return `
		client_id='${this.client_id}'; 
		fid='${this.fid}'; 
		session_created_at='${this.session_created_at}'; 
		session_ended_at='${this.session_ended_at}'; 
		session_id='${this.session_id}'; 
		session_updated_at='${this.session_updated_at}'; 
		session_uuid='${this.session_uuid}'; 
		socket_io='${this.socket_io}'; 
		user_id='${this.user_id}'; `;
  }
}

// Firestore data converter
const loginSessionsConverter = {
  toFirestore: (loginSessionsData: LoginSessionsObjCls): DocumentData => {
    return {
		client_id: loginSessionsData.client_id,
		fid: loginSessionsData.fid,
		session_created_at: loginSessionsData.session_created_at,
		session_ended_at: loginSessionsData.session_ended_at,
		session_id: loginSessionsData.session_id,
		session_updated_at: loginSessionsData.session_updated_at,
		session_uuid: loginSessionsData.session_uuid,
		socket_io: loginSessionsData.socket_io,
		user_id: loginSessionsData.user_id,
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new LoginSessionsObjCls(
		data.client_id, 
		data.fid, 
		data.session_created_at, 
		data.session_ended_at, 
		data.session_id, 
		data.session_updated_at, 
		data.session_uuid, 
		data.socket_io, 
		data.user_id
    );
  }
};

// Begin Class: LoginSessionsFirebaseCls

export class LoginSessionsFirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : LoginSessions
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = 'LoginSessions';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, loginSessionsConverter);

  }

  
		// Begin column ClientId

		/*
		 * Retrieves the value of the column client_id from the database
		 *
		 @Column:   client_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the client_id column values
		 *
		 */

		async getClientId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['client_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column client_id from the database base on the filters specified
		 *
		 @Column:   client_id
		 @Required: false
		 @Type:     number
		 @Return:   number client_id column values, depending on the filters
		 *
		 */

		async getClientIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['client_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column client_id in the database
		 *
		 @Column:   client_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateClientId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ client_id: value }, uuid, 'session_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column ClientId
		
		// Begin column Fid

		/*
		 * Retrieves the value of the column fid from the database
		 *
		 @Column:   fid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the fid column values
		 *
		 */

		async getFid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['fid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column fid from the database base on the filters specified
		 *
		 @Column:   fid
		 @Required: false
		 @Type:     string
		 @Return:   string fid column values, depending on the filters
		 *
		 */

		async getFidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['fid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column fid in the database
		 *
		 @Column:   fid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateFid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'session_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		
		// Begin column SessionCreatedAt

		/*
		 * Retrieves the value of the column session_created_at from the database
		 *
		 @Column:   session_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the session_created_at column values
		 *
		 */

		async getSessionCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['session_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column session_created_at from the database base on the filters specified
		 *
		 @Column:   session_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string session_created_at column values, depending on the filters
		 *
		 */

		async getSessionCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['session_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column session_created_at in the database
		 *
		 @Column:   session_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateSessionCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ session_created_at: value }, uuid, 'session_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column SessionCreatedAt
		
		// Begin column SessionEndedAt

		/*
		 * Retrieves the value of the column session_ended_at from the database
		 *
		 @Column:   session_ended_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the session_ended_at column values
		 *
		 */

		async getSessionEndedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['session_ended_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column session_ended_at from the database base on the filters specified
		 *
		 @Column:   session_ended_at
		 @Required: false
		 @Type:     string
		 @Return:   string session_ended_at column values, depending on the filters
		 *
		 */

		async getSessionEndedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['session_ended_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column session_ended_at in the database
		 *
		 @Column:   session_ended_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateSessionEndedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ session_ended_at: value }, uuid, 'session_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column SessionEndedAt
		
		// Begin column SessionId

		/*
		 * Retrieves the value of the column session_id from the database
		 *
		 @Column:   session_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the session_id column values
		 *
		 */

		async getSessionId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['session_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column session_id from the database base on the filters specified
		 *
		 @Column:   session_id
		 @Required: false
		 @Type:     number
		 @Return:   number session_id column values, depending on the filters
		 *
		 */

		async getSessionIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['session_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column session_id in the database
		 *
		 @Column:   session_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateSessionId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ session_id: value }, uuid, 'session_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column SessionId
		
		// Begin column SessionUpdatedAt

		/*
		 * Retrieves the value of the column session_updated_at from the database
		 *
		 @Column:   session_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the session_updated_at column values
		 *
		 */

		async getSessionUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['session_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column session_updated_at from the database base on the filters specified
		 *
		 @Column:   session_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string session_updated_at column values, depending on the filters
		 *
		 */

		async getSessionUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['session_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column session_updated_at in the database
		 *
		 @Column:   session_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateSessionUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ session_updated_at: value }, uuid, 'session_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column SessionUpdatedAt
		
		// Begin column SessionUuid

		/*
		 * Retrieves the value of the column session_uuid from the database
		 *
		 @Column:   session_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the session_uuid column values
		 *
		 */

		async getSessionUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['session_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column session_uuid from the database base on the filters specified
		 *
		 @Column:   session_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string session_uuid column values, depending on the filters
		 *
		 */

		async getSessionUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['session_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column session_uuid in the database
		 *
		 @Column:   session_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateSessionUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ session_uuid: value }, uuid, 'session_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column SessionUuid
		
		// Begin column SocketIo

		/*
		 * Retrieves the value of the column socket_io from the database
		 *
		 @Column:   socket_io
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the socket_io column values
		 *
		 */

		async getSocketIo(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['socket_io']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column socket_io from the database base on the filters specified
		 *
		 @Column:   socket_io
		 @Required: false
		 @Type:     string
		 @Return:   string socket_io column values, depending on the filters
		 *
		 */

		async getSocketIoWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['socket_io'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column socket_io in the database
		 *
		 @Column:   socket_io
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateSocketIo(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ socket_io: value }, uuid, 'session_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column SocketIo
		
		// Begin column UserId

		/*
		 * Retrieves the value of the column user_id from the database
		 *
		 @Column:   user_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the user_id column values
		 *
		 */

		async getUserId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_id from the database base on the filters specified
		 *
		 @Column:   user_id
		 @Required: false
		 @Type:     number
		 @Return:   number user_id column values, depending on the filters
		 *
		 */

		async getUserIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_id in the database
		 *
		 @Column:   user_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateUserId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'session_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		

}

// End Class: LoginSessionsFirebaseCls