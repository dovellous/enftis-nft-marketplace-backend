import { Schema, model } from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";
import { MongoDBCollectionCls } from "../../../../../modules/base/MongoDBCollectionCls";

export class EngagementMongoDBCls extends MongoDBCollectionCls {

  // Engagement model object
  private EngagementMongoDBModel: any;

  // Engagement schema object
  private engagementSchema: any;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this keyword
    super();

    // Init model name
    this.modelName = 'Engagement';

    // Define the Interface
    interface IEngagement {
      	_id : string;
		engagement_claimed_off_days : number;
		engagement_consecutive_days : number;
		engagement_created_at : string;
		engagement_id : number;
		engagement_off_days : number;
		engagement_updated_at : string;
		engagement_uuid : string;
		fid : string;
		user_id : number;
	
    }

    // Init engagement schema
    this.engagementSchema = new Schema<IEngagement>({
      	_id: {
         type: String,
         required: false,
         trim: true
		},
		engagement_claimed_off_days: {
         type: Number,
         required: false,
         trim: true
		},
		engagement_consecutive_days: {
         type: Number,
         required: false,
         trim: true
		},
		engagement_created_at: {
         type: String,
         required: false,
         trim: true
		},
		engagement_id: {
         type: Number,
         required: false,
         trim: true
		},
		engagement_off_days: {
         type: Number,
         required: false,
         trim: true
		},
		engagement_updated_at: {
         type: String,
         required: false,
         trim: true
		},
		engagement_uuid: {
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

    // Define engagement auto increment key

    this.engagementSchema.plugin(autoIncrement, { model: this.modelName, field: '_id' });

    this.EngagementMongoDBModel = model<IEngagement>(this.modelName, this.engagementSchema);

    // Create a change stream cursor that listens for changes to the collection
    this.EngagementMongoDBModel.watch();


    // Explicitly create the collection before using it
    // so the collection is capped.
    this.EngagementMongoDBModel.createCollection();

    this.setupModel(this.EngagementMongoDBModel);

  }

  
		// Begin column EngagementClaimedOffDays

		/*
		 * Retrieves the value of the column engagement_claimed_off_days from the database
		 *
		 @Column:   engagement_claimed_off_days
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the engagement_claimed_off_days column values
		 *
		 */

		async getEngagementClaimedOffDays(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['engagement_claimed_off_days']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column engagement_claimed_off_days from the database base on the filters specified
		 *
		 @Column:   engagement_claimed_off_days
		 @Required: false
		 @Type:     number
		 @Return:   number engagement_claimed_off_days column values, depending on the filters
		 *
		 */

		async getEngagementClaimedOffDaysWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['engagement_claimed_off_days'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column engagement_claimed_off_days in the database
		 *
		 @Column:   engagement_claimed_off_days
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateEngagementClaimedOffDays(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ engagement_claimed_off_days: value }, uuid, 'engagement_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column EngagementClaimedOffDays
		
		// Begin column EngagementConsecutiveDays

		/*
		 * Retrieves the value of the column engagement_consecutive_days from the database
		 *
		 @Column:   engagement_consecutive_days
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the engagement_consecutive_days column values
		 *
		 */

		async getEngagementConsecutiveDays(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['engagement_consecutive_days']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column engagement_consecutive_days from the database base on the filters specified
		 *
		 @Column:   engagement_consecutive_days
		 @Required: false
		 @Type:     number
		 @Return:   number engagement_consecutive_days column values, depending on the filters
		 *
		 */

		async getEngagementConsecutiveDaysWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['engagement_consecutive_days'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column engagement_consecutive_days in the database
		 *
		 @Column:   engagement_consecutive_days
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateEngagementConsecutiveDays(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ engagement_consecutive_days: value }, uuid, 'engagement_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column EngagementConsecutiveDays
		
		// Begin column EngagementCreatedAt

		/*
		 * Retrieves the value of the column engagement_created_at from the database
		 *
		 @Column:   engagement_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the engagement_created_at column values
		 *
		 */

		async getEngagementCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['engagement_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column engagement_created_at from the database base on the filters specified
		 *
		 @Column:   engagement_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string engagement_created_at column values, depending on the filters
		 *
		 */

		async getEngagementCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['engagement_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column engagement_created_at in the database
		 *
		 @Column:   engagement_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateEngagementCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ engagement_created_at: value }, uuid, 'engagement_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column EngagementCreatedAt
		
		// Begin column EngagementId

		/*
		 * Retrieves the value of the column engagement_id from the database
		 *
		 @Column:   engagement_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the engagement_id column values
		 *
		 */

		async getEngagementId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['engagement_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column engagement_id from the database base on the filters specified
		 *
		 @Column:   engagement_id
		 @Required: false
		 @Type:     number
		 @Return:   number engagement_id column values, depending on the filters
		 *
		 */

		async getEngagementIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['engagement_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column engagement_id in the database
		 *
		 @Column:   engagement_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateEngagementId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ engagement_id: value }, uuid, 'engagement_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column EngagementId
		
		// Begin column EngagementOffDays

		/*
		 * Retrieves the value of the column engagement_off_days from the database
		 *
		 @Column:   engagement_off_days
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the engagement_off_days column values
		 *
		 */

		async getEngagementOffDays(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['engagement_off_days']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column engagement_off_days from the database base on the filters specified
		 *
		 @Column:   engagement_off_days
		 @Required: false
		 @Type:     number
		 @Return:   number engagement_off_days column values, depending on the filters
		 *
		 */

		async getEngagementOffDaysWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['engagement_off_days'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column engagement_off_days in the database
		 *
		 @Column:   engagement_off_days
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateEngagementOffDays(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ engagement_off_days: value }, uuid, 'engagement_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column EngagementOffDays
		
		// Begin column EngagementUpdatedAt

		/*
		 * Retrieves the value of the column engagement_updated_at from the database
		 *
		 @Column:   engagement_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the engagement_updated_at column values
		 *
		 */

		async getEngagementUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['engagement_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column engagement_updated_at from the database base on the filters specified
		 *
		 @Column:   engagement_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string engagement_updated_at column values, depending on the filters
		 *
		 */

		async getEngagementUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['engagement_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column engagement_updated_at in the database
		 *
		 @Column:   engagement_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateEngagementUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ engagement_updated_at: value }, uuid, 'engagement_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column EngagementUpdatedAt
		
		// Begin column EngagementUuid

		/*
		 * Retrieves the value of the column engagement_uuid from the database
		 *
		 @Column:   engagement_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the engagement_uuid column values
		 *
		 */

		async getEngagementUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['engagement_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column engagement_uuid from the database base on the filters specified
		 *
		 @Column:   engagement_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string engagement_uuid column values, depending on the filters
		 *
		 */

		async getEngagementUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['engagement_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column engagement_uuid in the database
		 *
		 @Column:   engagement_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateEngagementUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ engagement_uuid: value }, uuid, 'engagement_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column EngagementUuid
		
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'engagement_uuid');

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

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'engagement_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		

}

// End Class: EngagementMongoDBCls