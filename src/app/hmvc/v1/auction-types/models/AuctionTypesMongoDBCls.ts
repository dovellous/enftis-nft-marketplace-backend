import { Schema, model } from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";
import { MongoDBCollectionCls } from "../../../../../modules/base/MongoDBCollectionCls";

export class AuctionTypesMongoDBCls extends MongoDBCollectionCls {

  // AuctionTypes model object
  private AuctionTypesMongoDBModel: any;

  // AuctionTypes schema object
  private auctionTypesSchema: any;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this keyword
    super();

    // Init model name
    this.modelName = 'AuctionTypes';

    // Define the Interface
    interface IAuctionTypes {
      	_id : string;
		auction_type? : string;
		auction_type_description : string;
		auction_type_id : number;
		fid : string;
	
    }

    // Init auctionTypes schema
    this.auctionTypesSchema = new Schema<IAuctionTypes>({
      	_id: {
         type: String,
         required: false,
         trim: true
		},
		auction_type: {
         type: String,
         required: true,
         trim: true
		},
		auction_type_description: {
         type: String,
         required: false,
         trim: true
		},
		auction_type_id: {
         type: Number,
         required: false,
         trim: true
		},
		fid: {
         type: String,
         required: false,
         trim: true
		},
	
    }, {
      timestamps: true
    });

    // Define auctionTypes auto increment key

    this.auctionTypesSchema.plugin(autoIncrement, { model: this.modelName, field: '_id' });

    this.AuctionTypesMongoDBModel = model<IAuctionTypes>(this.modelName, this.auctionTypesSchema);

    // Create a change stream cursor that listens for changes to the collection
    this.AuctionTypesMongoDBModel.watch();


    // Explicitly create the collection before using it
    // so the collection is capped.
    this.AuctionTypesMongoDBModel.createCollection();

    this.setupModel(this.AuctionTypesMongoDBModel);

  }

  
		// Begin column AuctionType

		/*
		 * Retrieves the value of the column auction_type from the database
		 *
		 @Column:   auction_type
		 @Required: true
		 @Type:     string
		 @Return:   string value, probably all records with only the auction_type column values
		 *
		 */

		async getAuctionType(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['auction_type']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column auction_type from the database base on the filters specified
		 *
		 @Column:   auction_type
		 @Required: true
		 @Type:     string
		 @Return:   string auction_type column values, depending on the filters
		 *
		 */

		async getAuctionTypeWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['auction_type'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column auction_type in the database
		 *
		 @Column:   auction_type
		 @Required: true
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateAuctionType(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ auction_type: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuctionType
		
		// Begin column AuctionTypeDescription

		/*
		 * Retrieves the value of the column auction_type_description from the database
		 *
		 @Column:   auction_type_description
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the auction_type_description column values
		 *
		 */

		async getAuctionTypeDescription(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['auction_type_description']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column auction_type_description from the database base on the filters specified
		 *
		 @Column:   auction_type_description
		 @Required: false
		 @Type:     string
		 @Return:   string auction_type_description column values, depending on the filters
		 *
		 */

		async getAuctionTypeDescriptionWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['auction_type_description'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column auction_type_description in the database
		 *
		 @Column:   auction_type_description
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateAuctionTypeDescription(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ auction_type_description: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuctionTypeDescription
		
		// Begin column AuctionTypeId

		/*
		 * Retrieves the value of the column auction_type_id from the database
		 *
		 @Column:   auction_type_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the auction_type_id column values
		 *
		 */

		async getAuctionTypeId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['auction_type_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column auction_type_id from the database base on the filters specified
		 *
		 @Column:   auction_type_id
		 @Required: false
		 @Type:     number
		 @Return:   number auction_type_id column values, depending on the filters
		 *
		 */

		async getAuctionTypeIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['auction_type_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column auction_type_id in the database
		 *
		 @Column:   auction_type_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateAuctionTypeId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ auction_type_id: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuctionTypeId
		
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		

}

// End Class: AuctionTypesMongoDBCls