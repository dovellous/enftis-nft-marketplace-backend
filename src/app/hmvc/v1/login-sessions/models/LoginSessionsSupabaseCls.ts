import { DbResult, DbResultErr, SupabaseTableCls } from "../../../../../modules/base";

export class LoginSessionsSupabaseCls extends SupabaseTableCls {

  // Table name  for this model : ____TBL_NAME____
  private databaseTable: string = 'tbl_login_sessions';

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Initialize the the table name for this class
    this.tableName = this.databaseTable;

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

// End Class: LoginSessionsSupabaseCls