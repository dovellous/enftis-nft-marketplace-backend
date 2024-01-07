import { Schema, model } from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";
import { MongoDBCollectionCls } from "../../../../../modules/base/MongoDBCollectionCls";

export class CollectionsMongoDBCls extends MongoDBCollectionCls {

  // Collections model object
  private CollectionsMongoDBModel: any;

  // Collections schema object
  private collectionsSchema: any;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this keyword
    super();

    // Init model name
    this.modelName = 'Collections';

    // Define the Interface
    interface ICollections {
      	_id : string;
		category_id : number;
		collection_banner : string;
		collection_created_at : string;
		collection_description : string;
		collection_id : number;
		collection_name : string;
		collection_thumbnail : string;
		collection_updated_at : string;
		collection_uuid : string;
		fid : string;
		user_id : number;
	
    }

    // Init collections schema
    this.collectionsSchema = new Schema<ICollections>({
      	_id: {
         type: String,
         required: false,
         trim: true
		},
		category_id: {
         type: Number,
         required: false,
         trim: true
		},
		collection_banner: {
         type: String,
         required: false,
         trim: true
		},
		collection_created_at: {
         type: String,
         required: false,
         trim: true
		},
		collection_description: {
         type: String,
         required: false,
         trim: true
		},
		collection_id: {
         type: Number,
         required: false,
         trim: true
		},
		collection_name: {
         type: String,
         required: false,
         trim: true
		},
		collection_thumbnail: {
         type: String,
         required: false,
         trim: true
		},
		collection_updated_at: {
         type: String,
         required: false,
         trim: true
		},
		collection_uuid: {
         type: String,
         required: false,
         trim: true
		},
		fid: {
         type: String,
         required: false,
         trim: true
		},
		user_id: {
         type: Number,
         required: false,
         trim: true
		},
	
    }, {
      timestamps: true
    });

    // Define collections auto increment key

    this.collectionsSchema.plugin(autoIncrement, { model: this.modelName, field: '_id' });

    this.CollectionsMongoDBModel = model<ICollections>(this.modelName, this.collectionsSchema);

    // Create a change stream cursor that listens for changes to the collection
    this.CollectionsMongoDBModel.watch();


    // Explicitly create the collection before using it
    // so the collection is capped.
    this.CollectionsMongoDBModel.createCollection();

    this.setupModel(this.CollectionsMongoDBModel);

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

// End Class: CollectionsMongoDBCls