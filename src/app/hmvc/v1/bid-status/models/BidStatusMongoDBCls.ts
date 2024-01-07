import { Schema, model } from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";
import { MongoDBCollectionCls } from "../../../../../modules/base/MongoDBCollectionCls";

export class BidStatusMongoDBCls extends MongoDBCollectionCls {

  // BidStatus model object
  private BidStatusMongoDBModel: any;

  // BidStatus schema object
  private bidStatusSchema: any;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this keyword
    super();

    // Init model name
    this.modelName = 'BidStatus';

    // Define the Interface
    interface IBidStatus {
      	_id : string;
		bid_status_id : number;
		bid_status_name? : string;
		fid : string;
	
    }

    // Init bidStatus schema
    this.bidStatusSchema = new Schema<IBidStatus>({
      	_id: {
         type: String,
         required: false,
         trim: true
		},
		bid_status_id: {
         type: Number,
         required: false,
         trim: true
		},
		bid_status_name: {
         type: String,
         required: true,
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

    // Define bidStatus auto increment key

    this.bidStatusSchema.plugin(autoIncrement, { model: this.modelName, field: '_id' });

    this.BidStatusMongoDBModel = model<IBidStatus>(this.modelName, this.bidStatusSchema);

    // Create a change stream cursor that listens for changes to the collection
    this.BidStatusMongoDBModel.watch();


    // Explicitly create the collection before using it
    // so the collection is capped.
    this.BidStatusMongoDBModel.createCollection();

    this.setupModel(this.BidStatusMongoDBModel);

  }

  
		// Begin column BidStatusId

		/*
		 * Retrieves the value of the column bid_status_id from the database
		 *
		 @Column:   bid_status_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bid_status_id column values
		 *
		 */

		async getBidStatusId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bid_status_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bid_status_id from the database base on the filters specified
		 *
		 @Column:   bid_status_id
		 @Required: false
		 @Type:     number
		 @Return:   number bid_status_id column values, depending on the filters
		 *
		 */

		async getBidStatusIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bid_status_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bid_status_id in the database
		 *
		 @Column:   bid_status_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBidStatusId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_status_id: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidStatusId
		
		// Begin column BidStatusName

		/*
		 * Retrieves the value of the column bid_status_name from the database
		 *
		 @Column:   bid_status_name
		 @Required: true
		 @Type:     string
		 @Return:   string value, probably all records with only the bid_status_name column values
		 *
		 */

		async getBidStatusName(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bid_status_name']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bid_status_name from the database base on the filters specified
		 *
		 @Column:   bid_status_name
		 @Required: true
		 @Type:     string
		 @Return:   string bid_status_name column values, depending on the filters
		 *
		 */

		async getBidStatusNameWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bid_status_name'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bid_status_name in the database
		 *
		 @Column:   bid_status_name
		 @Required: true
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateBidStatusName(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_status_name: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidStatusName
		
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

// End Class: BidStatusMongoDBCls