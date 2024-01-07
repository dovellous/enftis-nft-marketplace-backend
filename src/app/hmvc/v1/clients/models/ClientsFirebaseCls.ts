import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class ClientsObjCls {

	client_device_created_at: string;
	client_device_id: string;
	client_device_meta: any;
	client_device_name: string;
	client_device_pub_key: string;
	client_device_secret: string;
	client_device_updated_at: string;
	client_device_uuid: string;
	client_id: number;
	fid: string;
	service_device_pub_key: string;
 
  constructor(
	_client_device_created_at: string, 
	_client_device_id: string, 
	_client_device_meta: any, 
	_client_device_name: string, 
	_client_device_pub_key: string, 
	_client_device_secret: string, 
	_client_device_updated_at: string, 
	_client_device_uuid: string, 
	_client_id: number, 
	_fid: string, 
	_service_device_pub_key: string
  ) {
	this.client_device_created_at = _client_device_created_at;
	this.client_device_id = _client_device_id;
	this.client_device_meta = _client_device_meta;
	this.client_device_name = _client_device_name;
	this.client_device_pub_key = _client_device_pub_key;
	this.client_device_secret = _client_device_secret;
	this.client_device_updated_at = _client_device_updated_at;
	this.client_device_uuid = _client_device_uuid;
	this.client_id = _client_id;
	this.fid = _fid;
	this.service_device_pub_key = _service_device_pub_key;
  }
  
  toString() {
    return `
		client_device_created_at='${this.client_device_created_at}'; 
		client_device_id='${this.client_device_id}'; 
		client_device_meta='${this.client_device_meta}'; 
		client_device_name='${this.client_device_name}'; 
		client_device_pub_key='${this.client_device_pub_key}'; 
		client_device_secret='${this.client_device_secret}'; 
		client_device_updated_at='${this.client_device_updated_at}'; 
		client_device_uuid='${this.client_device_uuid}'; 
		client_id='${this.client_id}'; 
		fid='${this.fid}'; 
		service_device_pub_key='${this.service_device_pub_key}'; `;
  }
}

// Firestore data converter
const clientsConverter = {
  toFirestore: (clientsData: ClientsObjCls): DocumentData => {
    return {
		client_device_created_at: clientsData.client_device_created_at,
		client_device_id: clientsData.client_device_id,
		client_device_meta: clientsData.client_device_meta,
		client_device_name: clientsData.client_device_name,
		client_device_pub_key: clientsData.client_device_pub_key,
		client_device_secret: clientsData.client_device_secret,
		client_device_updated_at: clientsData.client_device_updated_at,
		client_device_uuid: clientsData.client_device_uuid,
		client_id: clientsData.client_id,
		fid: clientsData.fid,
		service_device_pub_key: clientsData.service_device_pub_key,
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new ClientsObjCls(
		data.client_device_created_at, 
		data.client_device_id, 
		data.client_device_meta, 
		data.client_device_name, 
		data.client_device_pub_key, 
		data.client_device_secret, 
		data.client_device_updated_at, 
		data.client_device_uuid, 
		data.client_id, 
		data.fid, 
		data.service_device_pub_key
    );
  }
};

// Begin Class: ClientsFirebaseCls

export class ClientsFirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : Clients
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = 'Clients';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, clientsConverter);

  }

  
		// Begin column ClientDeviceCreatedAt

		/*
		 * Retrieves the value of the column client_device_created_at from the database
		 *
		 @Column:   client_device_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the client_device_created_at column values
		 *
		 */

		async getClientDeviceCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['client_device_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column client_device_created_at from the database base on the filters specified
		 *
		 @Column:   client_device_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string client_device_created_at column values, depending on the filters
		 *
		 */

		async getClientDeviceCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['client_device_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column client_device_created_at in the database
		 *
		 @Column:   client_device_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateClientDeviceCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ client_device_created_at: value }, uuid, 'client_device_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column ClientDeviceCreatedAt
		
		// Begin column ClientDeviceId

		/*
		 * Retrieves the value of the column client_device_id from the database
		 *
		 @Column:   client_device_id
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the client_device_id column values
		 *
		 */

		async getClientDeviceId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['client_device_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column client_device_id from the database base on the filters specified
		 *
		 @Column:   client_device_id
		 @Required: false
		 @Type:     string
		 @Return:   string client_device_id column values, depending on the filters
		 *
		 */

		async getClientDeviceIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['client_device_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column client_device_id in the database
		 *
		 @Column:   client_device_id
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateClientDeviceId(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ client_device_id: value }, uuid, 'client_device_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column ClientDeviceId
		
		// Begin column ClientDeviceMeta

		/*
		 * Retrieves the value of the column client_device_meta from the database
		 *
		 @Column:   client_device_meta
		 @Required: false
		 @Type:     any
		 @Return:   any value, probably all records with only the client_device_meta column values
		 *
		 */

		async getClientDeviceMeta(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['client_device_meta']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column client_device_meta from the database base on the filters specified
		 *
		 @Column:   client_device_meta
		 @Required: false
		 @Type:     any
		 @Return:   any client_device_meta column values, depending on the filters
		 *
		 */

		async getClientDeviceMetaWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['client_device_meta'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column client_device_meta in the database
		 *
		 @Column:   client_device_meta
		 @Required: false
		 @Type:     any
		 @Return:   Updated data
		 *
		 */

		async updateClientDeviceMeta(value:any, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ client_device_meta: value }, uuid, 'client_device_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column ClientDeviceMeta
		
		// Begin column ClientDeviceName

		/*
		 * Retrieves the value of the column client_device_name from the database
		 *
		 @Column:   client_device_name
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the client_device_name column values
		 *
		 */

		async getClientDeviceName(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['client_device_name']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column client_device_name from the database base on the filters specified
		 *
		 @Column:   client_device_name
		 @Required: false
		 @Type:     string
		 @Return:   string client_device_name column values, depending on the filters
		 *
		 */

		async getClientDeviceNameWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['client_device_name'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column client_device_name in the database
		 *
		 @Column:   client_device_name
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateClientDeviceName(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ client_device_name: value }, uuid, 'client_device_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column ClientDeviceName
		
		// Begin column ClientDevicePubKey

		/*
		 * Retrieves the value of the column client_device_pub_key from the database
		 *
		 @Column:   client_device_pub_key
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the client_device_pub_key column values
		 *
		 */

		async getClientDevicePubKey(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['client_device_pub_key']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column client_device_pub_key from the database base on the filters specified
		 *
		 @Column:   client_device_pub_key
		 @Required: false
		 @Type:     string
		 @Return:   string client_device_pub_key column values, depending on the filters
		 *
		 */

		async getClientDevicePubKeyWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['client_device_pub_key'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column client_device_pub_key in the database
		 *
		 @Column:   client_device_pub_key
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateClientDevicePubKey(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ client_device_pub_key: value }, uuid, 'client_device_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column ClientDevicePubKey
		
		// Begin column ClientDeviceSecret

		/*
		 * Retrieves the value of the column client_device_secret from the database
		 *
		 @Column:   client_device_secret
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the client_device_secret column values
		 *
		 */

		async getClientDeviceSecret(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['client_device_secret']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column client_device_secret from the database base on the filters specified
		 *
		 @Column:   client_device_secret
		 @Required: false
		 @Type:     string
		 @Return:   string client_device_secret column values, depending on the filters
		 *
		 */

		async getClientDeviceSecretWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['client_device_secret'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column client_device_secret in the database
		 *
		 @Column:   client_device_secret
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateClientDeviceSecret(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ client_device_secret: value }, uuid, 'client_device_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column ClientDeviceSecret
		
		// Begin column ClientDeviceUpdatedAt

		/*
		 * Retrieves the value of the column client_device_updated_at from the database
		 *
		 @Column:   client_device_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the client_device_updated_at column values
		 *
		 */

		async getClientDeviceUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['client_device_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column client_device_updated_at from the database base on the filters specified
		 *
		 @Column:   client_device_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string client_device_updated_at column values, depending on the filters
		 *
		 */

		async getClientDeviceUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['client_device_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column client_device_updated_at in the database
		 *
		 @Column:   client_device_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateClientDeviceUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ client_device_updated_at: value }, uuid, 'client_device_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column ClientDeviceUpdatedAt
		
		// Begin column ClientDeviceUuid

		/*
		 * Retrieves the value of the column client_device_uuid from the database
		 *
		 @Column:   client_device_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the client_device_uuid column values
		 *
		 */

		async getClientDeviceUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['client_device_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column client_device_uuid from the database base on the filters specified
		 *
		 @Column:   client_device_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string client_device_uuid column values, depending on the filters
		 *
		 */

		async getClientDeviceUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['client_device_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column client_device_uuid in the database
		 *
		 @Column:   client_device_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateClientDeviceUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ client_device_uuid: value }, uuid, 'client_device_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column ClientDeviceUuid
		
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

		        const result: any = this.updateMatchingRows({ client_id: value }, uuid, 'client_device_uuid');

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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'client_device_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		
		// Begin column ServiceDevicePubKey

		/*
		 * Retrieves the value of the column service_device_pub_key from the database
		 *
		 @Column:   service_device_pub_key
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the service_device_pub_key column values
		 *
		 */

		async getServiceDevicePubKey(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['service_device_pub_key']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column service_device_pub_key from the database base on the filters specified
		 *
		 @Column:   service_device_pub_key
		 @Required: false
		 @Type:     string
		 @Return:   string service_device_pub_key column values, depending on the filters
		 *
		 */

		async getServiceDevicePubKeyWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['service_device_pub_key'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column service_device_pub_key in the database
		 *
		 @Column:   service_device_pub_key
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateServiceDevicePubKey(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ service_device_pub_key: value }, uuid, 'client_device_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column ServiceDevicePubKey
		

}

// End Class: ClientsFirebaseCls