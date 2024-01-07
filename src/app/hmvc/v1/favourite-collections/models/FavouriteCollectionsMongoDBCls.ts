import { Schema, model } from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";
import { MongoDBCollectionCls } from "../../../../../modules/base/MongoDBCollectionCls";

export class FavouriteCollectionsMongoDBCls extends MongoDBCollectionCls {

  // FavouriteCollections model object
  private FavouriteCollectionsMongoDBModel: any;

  // FavouriteCollections schema object
  private favouriteCollectionsSchema: any;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this keyword
    super();

    // Init model name
    this.modelName = 'FavouriteCollections';

    // Define the Interface
    interface IFavouriteCollections {
      	_id : string;
		collection_id : number;
		favourite_collection_created_at : string;
		favourite_collection_id : number;
		favourite_collection_updated_at : string;
		favourite_collection_uuid : string;
		fid : string;
		user_id : number;
	
    }

    // Init favouriteCollections schema
    this.favouriteCollectionsSchema = new Schema<IFavouriteCollections>({
      	_id: {
         type: String,
         required: false,
         trim: true
		},
		collection_id: {
         type: Number,
         required: false,
         trim: true
		},
		favourite_collection_created_at: {
         type: String,
         required: false,
         trim: true
		},
		favourite_collection_id: {
         type: Number,
         required: false,
         trim: true
		},
		favourite_collection_updated_at: {
         type: String,
         required: false,
         trim: true
		},
		favourite_collection_uuid: {
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

    // Define favouriteCollections auto increment key

    this.favouriteCollectionsSchema.plugin(autoIncrement, { model: this.modelName, field: '_id' });

    this.FavouriteCollectionsMongoDBModel = model<IFavouriteCollections>(this.modelName, this.favouriteCollectionsSchema);

    // Create a change stream cursor that listens for changes to the collection
    this.FavouriteCollectionsMongoDBModel.watch();


    // Explicitly create the collection before using it
    // so the collection is capped.
    this.FavouriteCollectionsMongoDBModel.createCollection();

    this.setupModel(this.FavouriteCollectionsMongoDBModel);

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

		        const result: any = this.updateMatchingRows({ collection_id: value }, uuid, 'favourite_collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CollectionId
		
		// Begin column FavouriteCollectionCreatedAt

		/*
		 * Retrieves the value of the column favourite_collection_created_at from the database
		 *
		 @Column:   favourite_collection_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the favourite_collection_created_at column values
		 *
		 */

		async getFavouriteCollectionCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['favourite_collection_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column favourite_collection_created_at from the database base on the filters specified
		 *
		 @Column:   favourite_collection_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string favourite_collection_created_at column values, depending on the filters
		 *
		 */

		async getFavouriteCollectionCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['favourite_collection_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column favourite_collection_created_at in the database
		 *
		 @Column:   favourite_collection_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateFavouriteCollectionCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ favourite_collection_created_at: value }, uuid, 'favourite_collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column FavouriteCollectionCreatedAt
		
		// Begin column FavouriteCollectionId

		/*
		 * Retrieves the value of the column favourite_collection_id from the database
		 *
		 @Column:   favourite_collection_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the favourite_collection_id column values
		 *
		 */

		async getFavouriteCollectionId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['favourite_collection_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column favourite_collection_id from the database base on the filters specified
		 *
		 @Column:   favourite_collection_id
		 @Required: false
		 @Type:     number
		 @Return:   number favourite_collection_id column values, depending on the filters
		 *
		 */

		async getFavouriteCollectionIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['favourite_collection_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column favourite_collection_id in the database
		 *
		 @Column:   favourite_collection_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateFavouriteCollectionId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ favourite_collection_id: value }, uuid, 'favourite_collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column FavouriteCollectionId
		
		// Begin column FavouriteCollectionUpdatedAt

		/*
		 * Retrieves the value of the column favourite_collection_updated_at from the database
		 *
		 @Column:   favourite_collection_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the favourite_collection_updated_at column values
		 *
		 */

		async getFavouriteCollectionUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['favourite_collection_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column favourite_collection_updated_at from the database base on the filters specified
		 *
		 @Column:   favourite_collection_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string favourite_collection_updated_at column values, depending on the filters
		 *
		 */

		async getFavouriteCollectionUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['favourite_collection_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column favourite_collection_updated_at in the database
		 *
		 @Column:   favourite_collection_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateFavouriteCollectionUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ favourite_collection_updated_at: value }, uuid, 'favourite_collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column FavouriteCollectionUpdatedAt
		
		// Begin column FavouriteCollectionUuid

		/*
		 * Retrieves the value of the column favourite_collection_uuid from the database
		 *
		 @Column:   favourite_collection_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the favourite_collection_uuid column values
		 *
		 */

		async getFavouriteCollectionUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['favourite_collection_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column favourite_collection_uuid from the database base on the filters specified
		 *
		 @Column:   favourite_collection_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string favourite_collection_uuid column values, depending on the filters
		 *
		 */

		async getFavouriteCollectionUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['favourite_collection_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column favourite_collection_uuid in the database
		 *
		 @Column:   favourite_collection_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateFavouriteCollectionUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ favourite_collection_uuid: value }, uuid, 'favourite_collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column FavouriteCollectionUuid
		
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'favourite_collection_uuid');

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

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'favourite_collection_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		

}

// End Class: FavouriteCollectionsMongoDBCls