import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class CollectionsObjCls {

	category_id: number;
	collection_banner: string;
	collection_created_at: string;
	collection_description: string;
	collection_id: number;
	collection_name: string;
	collection_thumbnail: string;
	collection_updated_at: string;
	collection_uuid: string;
	fid: string;
	user_id: number;
 
  constructor(
	_category_id: number, 
	_collection_banner: string, 
	_collection_created_at: string, 
	_collection_description: string, 
	_collection_id: number, 
	_collection_name: string, 
	_collection_thumbnail: string, 
	_collection_updated_at: string, 
	_collection_uuid: string, 
	_fid: string, 
	_user_id: number
  ) {
	this.category_id = _category_id;
	this.collection_banner = _collection_banner;
	this.collection_created_at = _collection_created_at;
	this.collection_description = _collection_description;
	this.collection_id = _collection_id;
	this.collection_name = _collection_name;
	this.collection_thumbnail = _collection_thumbnail;
	this.collection_updated_at = _collection_updated_at;
	this.collection_uuid = _collection_uuid;
	this.fid = _fid;
	this.user_id = _user_id;
  }
  
  toString() {
    return `
		category_id='${this.category_id}'; 
		collection_banner='${this.collection_banner}'; 
		collection_created_at='${this.collection_created_at}'; 
		collection_description='${this.collection_description}'; 
		collection_id='${this.collection_id}'; 
		collection_name='${this.collection_name}'; 
		collection_thumbnail='${this.collection_thumbnail}'; 
		collection_updated_at='${this.collection_updated_at}'; 
		collection_uuid='${this.collection_uuid}'; 
		fid='${this.fid}'; 
		user_id='${this.user_id}'; `;
  }
}

// Firestore data converter
const collectionsConverter = {
  toFirestore: (collectionsData: CollectionsObjCls): DocumentData => {
    return {
		category_id: collectionsData.category_id,
		collection_banner: collectionsData.collection_banner,
		collection_created_at: collectionsData.collection_created_at,
		collection_description: collectionsData.collection_description,
		collection_id: collectionsData.collection_id,
		collection_name: collectionsData.collection_name,
		collection_thumbnail: collectionsData.collection_thumbnail,
		collection_updated_at: collectionsData.collection_updated_at,
		collection_uuid: collectionsData.collection_uuid,
		fid: collectionsData.fid,
		user_id: collectionsData.user_id,
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new CollectionsObjCls(
		data.category_id, 
		data.collection_banner, 
		data.collection_created_at, 
		data.collection_description, 
		data.collection_id, 
		data.collection_name, 
		data.collection_thumbnail, 
		data.collection_updated_at, 
		data.collection_uuid, 
		data.fid, 
		data.user_id
    );
  }
};

// Begin Class: CollectionsFirebaseCls

export class CollectionsFirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : Collections
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = 'Collections';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, collectionsConverter);

  }

  
		// Begin column CategoryId

		/*
		 * Retrieves the value of the column category_id from the database
		 *
		 @Column:   category_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the category_id column values
		 *
		 */

		async getCategoryId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['category_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column category_id from the database base on the filters specified
		 *
		 @Column:   category_id
		 @Required: false
		 @Type:     number
		 @Return:   number category_id column values, depending on the filters
		 *
		 */

		async getCategoryIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['category_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column category_id in the database
		 *
		 @Column:   category_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateCategoryId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ category_id: value }, uuid, 'collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CategoryId
		
		// Begin column CollectionBanner

		/*
		 * Retrieves the value of the column collection_banner from the database
		 *
		 @Column:   collection_banner
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the collection_banner column values
		 *
		 */

		async getCollectionBanner(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['collection_banner']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column collection_banner from the database base on the filters specified
		 *
		 @Column:   collection_banner
		 @Required: false
		 @Type:     string
		 @Return:   string collection_banner column values, depending on the filters
		 *
		 */

		async getCollectionBannerWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['collection_banner'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column collection_banner in the database
		 *
		 @Column:   collection_banner
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateCollectionBanner(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ collection_banner: value }, uuid, 'collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CollectionBanner
		
		// Begin column CollectionCreatedAt

		/*
		 * Retrieves the value of the column collection_created_at from the database
		 *
		 @Column:   collection_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the collection_created_at column values
		 *
		 */

		async getCollectionCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['collection_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column collection_created_at from the database base on the filters specified
		 *
		 @Column:   collection_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string collection_created_at column values, depending on the filters
		 *
		 */

		async getCollectionCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['collection_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column collection_created_at in the database
		 *
		 @Column:   collection_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateCollectionCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ collection_created_at: value }, uuid, 'collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CollectionCreatedAt
		
		// Begin column CollectionDescription

		/*
		 * Retrieves the value of the column collection_description from the database
		 *
		 @Column:   collection_description
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the collection_description column values
		 *
		 */

		async getCollectionDescription(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['collection_description']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column collection_description from the database base on the filters specified
		 *
		 @Column:   collection_description
		 @Required: false
		 @Type:     string
		 @Return:   string collection_description column values, depending on the filters
		 *
		 */

		async getCollectionDescriptionWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['collection_description'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column collection_description in the database
		 *
		 @Column:   collection_description
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateCollectionDescription(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ collection_description: value }, uuid, 'collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CollectionDescription
		
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

		        const result: any = this.updateMatchingRows({ collection_id: value }, uuid, 'collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CollectionId
		
		// Begin column CollectionName

		/*
		 * Retrieves the value of the column collection_name from the database
		 *
		 @Column:   collection_name
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the collection_name column values
		 *
		 */

		async getCollectionName(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['collection_name']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column collection_name from the database base on the filters specified
		 *
		 @Column:   collection_name
		 @Required: false
		 @Type:     string
		 @Return:   string collection_name column values, depending on the filters
		 *
		 */

		async getCollectionNameWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['collection_name'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column collection_name in the database
		 *
		 @Column:   collection_name
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateCollectionName(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ collection_name: value }, uuid, 'collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CollectionName
		
		// Begin column CollectionThumbnail

		/*
		 * Retrieves the value of the column collection_thumbnail from the database
		 *
		 @Column:   collection_thumbnail
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the collection_thumbnail column values
		 *
		 */

		async getCollectionThumbnail(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['collection_thumbnail']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column collection_thumbnail from the database base on the filters specified
		 *
		 @Column:   collection_thumbnail
		 @Required: false
		 @Type:     string
		 @Return:   string collection_thumbnail column values, depending on the filters
		 *
		 */

		async getCollectionThumbnailWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['collection_thumbnail'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column collection_thumbnail in the database
		 *
		 @Column:   collection_thumbnail
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateCollectionThumbnail(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ collection_thumbnail: value }, uuid, 'collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CollectionThumbnail
		
		// Begin column CollectionUpdatedAt

		/*
		 * Retrieves the value of the column collection_updated_at from the database
		 *
		 @Column:   collection_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the collection_updated_at column values
		 *
		 */

		async getCollectionUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['collection_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column collection_updated_at from the database base on the filters specified
		 *
		 @Column:   collection_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string collection_updated_at column values, depending on the filters
		 *
		 */

		async getCollectionUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['collection_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column collection_updated_at in the database
		 *
		 @Column:   collection_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateCollectionUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ collection_updated_at: value }, uuid, 'collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CollectionUpdatedAt
		
		// Begin column CollectionUuid

		/*
		 * Retrieves the value of the column collection_uuid from the database
		 *
		 @Column:   collection_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the collection_uuid column values
		 *
		 */

		async getCollectionUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['collection_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column collection_uuid from the database base on the filters specified
		 *
		 @Column:   collection_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string collection_uuid column values, depending on the filters
		 *
		 */

		async getCollectionUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['collection_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column collection_uuid in the database
		 *
		 @Column:   collection_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateCollectionUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ collection_uuid: value }, uuid, 'collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CollectionUuid
		
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		
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

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		

}

// End Class: CollectionsFirebaseCls