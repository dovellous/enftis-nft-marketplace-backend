import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class UserCollectionsObjCls {

	collection_id: number;
	fid: string;
	user_collection_created_at: string;
	user_collection_id: number;
	user_collection_updated_at: string;
	user_collection_uuid: string;
	user_id: number;
 
  constructor(
	_collection_id: number, 
	_fid: string, 
	_user_collection_created_at: string, 
	_user_collection_id: number, 
	_user_collection_updated_at: string, 
	_user_collection_uuid: string, 
	_user_id: number
  ) {
	this.collection_id = _collection_id;
	this.fid = _fid;
	this.user_collection_created_at = _user_collection_created_at;
	this.user_collection_id = _user_collection_id;
	this.user_collection_updated_at = _user_collection_updated_at;
	this.user_collection_uuid = _user_collection_uuid;
	this.user_id = _user_id;
  }
  
  toString() {
    return `
		collection_id='${this.collection_id}'; 
		fid='${this.fid}'; 
		user_collection_created_at='${this.user_collection_created_at}'; 
		user_collection_id='${this.user_collection_id}'; 
		user_collection_updated_at='${this.user_collection_updated_at}'; 
		user_collection_uuid='${this.user_collection_uuid}'; 
		user_id='${this.user_id}'; `;
  }
}

// Firestore data converter
const userCollectionsConverter = {
  toFirestore: (userCollectionsData: UserCollectionsObjCls): DocumentData => {
    return {
		collection_id: userCollectionsData.collection_id,
		fid: userCollectionsData.fid,
		user_collection_created_at: userCollectionsData.user_collection_created_at,
		user_collection_id: userCollectionsData.user_collection_id,
		user_collection_updated_at: userCollectionsData.user_collection_updated_at,
		user_collection_uuid: userCollectionsData.user_collection_uuid,
		user_id: userCollectionsData.user_id,
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new UserCollectionsObjCls(
		data.collection_id, 
		data.fid, 
		data.user_collection_created_at, 
		data.user_collection_id, 
		data.user_collection_updated_at, 
		data.user_collection_uuid, 
		data.user_id
    );
  }
};

// Begin Class: UserCollectionsFirebaseCls

export class UserCollectionsFirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : UserCollections
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = 'UserCollections';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, userCollectionsConverter);

  }

  
		// Begin column CollectionId

		/*
		 * Retrieves the value of the column collection_id from the database
		 *
		 @Column:   collection_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the collection_id column values
		 *
		 */

		async getCollectionId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['collection_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column collection_id from the database base on the filters specified
		 *
		 @Column:   collection_id
		 @Required: false
		 @Type:     number
		 @Return:   number collection_id column values, depending on the filters
		 *
		 */

		async getCollectionIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['collection_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column collection_id in the database
		 *
		 @Column:   collection_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateCollectionId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ collection_id: value }, uuid, 'user_collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CollectionId
		
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'user_collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		
		// Begin column UserCollectionCreatedAt

		/*
		 * Retrieves the value of the column user_collection_created_at from the database
		 *
		 @Column:   user_collection_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the user_collection_created_at column values
		 *
		 */

		async getUserCollectionCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_collection_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_collection_created_at from the database base on the filters specified
		 *
		 @Column:   user_collection_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string user_collection_created_at column values, depending on the filters
		 *
		 */

		async getUserCollectionCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_collection_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_collection_created_at in the database
		 *
		 @Column:   user_collection_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateUserCollectionCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_collection_created_at: value }, uuid, 'user_collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserCollectionCreatedAt
		
		// Begin column UserCollectionId

		/*
		 * Retrieves the value of the column user_collection_id from the database
		 *
		 @Column:   user_collection_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the user_collection_id column values
		 *
		 */

		async getUserCollectionId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_collection_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_collection_id from the database base on the filters specified
		 *
		 @Column:   user_collection_id
		 @Required: false
		 @Type:     number
		 @Return:   number user_collection_id column values, depending on the filters
		 *
		 */

		async getUserCollectionIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_collection_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_collection_id in the database
		 *
		 @Column:   user_collection_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateUserCollectionId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_collection_id: value }, uuid, 'user_collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserCollectionId
		
		// Begin column UserCollectionUpdatedAt

		/*
		 * Retrieves the value of the column user_collection_updated_at from the database
		 *
		 @Column:   user_collection_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the user_collection_updated_at column values
		 *
		 */

		async getUserCollectionUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_collection_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_collection_updated_at from the database base on the filters specified
		 *
		 @Column:   user_collection_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string user_collection_updated_at column values, depending on the filters
		 *
		 */

		async getUserCollectionUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_collection_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_collection_updated_at in the database
		 *
		 @Column:   user_collection_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateUserCollectionUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_collection_updated_at: value }, uuid, 'user_collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserCollectionUpdatedAt
		
		// Begin column UserCollectionUuid

		/*
		 * Retrieves the value of the column user_collection_uuid from the database
		 *
		 @Column:   user_collection_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the user_collection_uuid column values
		 *
		 */

		async getUserCollectionUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_collection_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_collection_uuid from the database base on the filters specified
		 *
		 @Column:   user_collection_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string user_collection_uuid column values, depending on the filters
		 *
		 */

		async getUserCollectionUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_collection_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_collection_uuid in the database
		 *
		 @Column:   user_collection_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateUserCollectionUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_collection_uuid: value }, uuid, 'user_collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserCollectionUuid
		
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

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'user_collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		

}

// End Class: UserCollectionsFirebaseCls