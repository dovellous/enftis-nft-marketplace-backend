import { Schema, model } from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";
import { MongoDBCollectionCls } from "../../../../../modules/base/MongoDBCollectionCls";

export class InviteUsersMongoDBCls extends MongoDBCollectionCls {

  // InviteUsers model object
  private InviteUsersMongoDBModel: any;

  // InviteUsers schema object
  private inviteUsersSchema: any;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this keyword
    super();

    // Init model name
    this.modelName = 'InviteUsers';

    // Define the Interface
    interface IInviteUsers {
      	_id : string;
		fid : string;
		invite_created_at : string;
		invite_from : number;
		invite_id : number;
		invite_reward : number;
		invite_to : number;
		invite_updated_at : string;
		invite_uuid : string;
		link_id : number;
	
    }

    // Init inviteUsers schema
    this.inviteUsersSchema = new Schema<IInviteUsers>({
      	_id: {
         type: String,
         required: false,
         trim: true
		},
		fid: {
         type: String,
         required: false,
         trim: true
		},
		invite_created_at: {
         type: String,
         required: false,
         trim: true
		},
		invite_from: {
         type: Number,
         required: false,
         trim: true
		},
		invite_id: {
         type: Number,
         required: false,
         trim: true
		},
		invite_reward: {
         type: Number,
         required: false,
         trim: true
		},
		invite_to: {
         type: Number,
         required: false,
         trim: true
		},
		invite_updated_at: {
         type: String,
         required: false,
         trim: true
		},
		invite_uuid: {
         type: String,
         required: false,
         trim: true
		},
		link_id: {
         type: Number,
         required: false,
         trim: true
		},
	
    }, {
      timestamps: true
    });

    // Define inviteUsers auto increment key

    this.inviteUsersSchema.plugin(autoIncrement, { model: this.modelName, field: '_id' });

    this.InviteUsersMongoDBModel = model<IInviteUsers>(this.modelName, this.inviteUsersSchema);

    // Create a change stream cursor that listens for changes to the collection
    this.InviteUsersMongoDBModel.watch();


    // Explicitly create the collection before using it
    // so the collection is capped.
    this.InviteUsersMongoDBModel.createCollection();

    this.setupModel(this.InviteUsersMongoDBModel);

  }

  
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'invite_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		
		// Begin column InviteCreatedAt

		/*
		 * Retrieves the value of the column invite_created_at from the database
		 *
		 @Column:   invite_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the invite_created_at column values
		 *
		 */

		async getInviteCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['invite_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column invite_created_at from the database base on the filters specified
		 *
		 @Column:   invite_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string invite_created_at column values, depending on the filters
		 *
		 */

		async getInviteCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['invite_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column invite_created_at in the database
		 *
		 @Column:   invite_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateInviteCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ invite_created_at: value }, uuid, 'invite_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column InviteCreatedAt
		
		// Begin column InviteFrom

		/*
		 * Retrieves the value of the column invite_from from the database
		 *
		 @Column:   invite_from
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the invite_from column values
		 *
		 */

		async getInviteFrom(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['invite_from']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column invite_from from the database base on the filters specified
		 *
		 @Column:   invite_from
		 @Required: false
		 @Type:     number
		 @Return:   number invite_from column values, depending on the filters
		 *
		 */

		async getInviteFromWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['invite_from'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column invite_from in the database
		 *
		 @Column:   invite_from
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateInviteFrom(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ invite_from: value }, uuid, 'invite_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column InviteFrom
		
		// Begin column InviteId

		/*
		 * Retrieves the value of the column invite_id from the database
		 *
		 @Column:   invite_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the invite_id column values
		 *
		 */

		async getInviteId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['invite_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column invite_id from the database base on the filters specified
		 *
		 @Column:   invite_id
		 @Required: false
		 @Type:     number
		 @Return:   number invite_id column values, depending on the filters
		 *
		 */

		async getInviteIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['invite_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column invite_id in the database
		 *
		 @Column:   invite_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateInviteId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ invite_id: value }, uuid, 'invite_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column InviteId
		
		// Begin column InviteReward

		/*
		 * Retrieves the value of the column invite_reward from the database
		 *
		 @Column:   invite_reward
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the invite_reward column values
		 *
		 */

		async getInviteReward(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['invite_reward']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column invite_reward from the database base on the filters specified
		 *
		 @Column:   invite_reward
		 @Required: false
		 @Type:     number
		 @Return:   number invite_reward column values, depending on the filters
		 *
		 */

		async getInviteRewardWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['invite_reward'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column invite_reward in the database
		 *
		 @Column:   invite_reward
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateInviteReward(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ invite_reward: value }, uuid, 'invite_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column InviteReward
		
		// Begin column InviteTo

		/*
		 * Retrieves the value of the column invite_to from the database
		 *
		 @Column:   invite_to
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the invite_to column values
		 *
		 */

		async getInviteTo(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['invite_to']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column invite_to from the database base on the filters specified
		 *
		 @Column:   invite_to
		 @Required: false
		 @Type:     number
		 @Return:   number invite_to column values, depending on the filters
		 *
		 */

		async getInviteToWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['invite_to'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column invite_to in the database
		 *
		 @Column:   invite_to
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateInviteTo(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ invite_to: value }, uuid, 'invite_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column InviteTo
		
		// Begin column InviteUpdatedAt

		/*
		 * Retrieves the value of the column invite_updated_at from the database
		 *
		 @Column:   invite_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the invite_updated_at column values
		 *
		 */

		async getInviteUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['invite_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column invite_updated_at from the database base on the filters specified
		 *
		 @Column:   invite_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string invite_updated_at column values, depending on the filters
		 *
		 */

		async getInviteUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['invite_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column invite_updated_at in the database
		 *
		 @Column:   invite_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateInviteUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ invite_updated_at: value }, uuid, 'invite_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column InviteUpdatedAt
		
		// Begin column InviteUuid

		/*
		 * Retrieves the value of the column invite_uuid from the database
		 *
		 @Column:   invite_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the invite_uuid column values
		 *
		 */

		async getInviteUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['invite_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column invite_uuid from the database base on the filters specified
		 *
		 @Column:   invite_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string invite_uuid column values, depending on the filters
		 *
		 */

		async getInviteUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['invite_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column invite_uuid in the database
		 *
		 @Column:   invite_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateInviteUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ invite_uuid: value }, uuid, 'invite_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column InviteUuid
		
		// Begin column LinkId

		/*
		 * Retrieves the value of the column link_id from the database
		 *
		 @Column:   link_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the link_id column values
		 *
		 */

		async getLinkId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['link_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column link_id from the database base on the filters specified
		 *
		 @Column:   link_id
		 @Required: false
		 @Type:     number
		 @Return:   number link_id column values, depending on the filters
		 *
		 */

		async getLinkIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['link_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column link_id in the database
		 *
		 @Column:   link_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateLinkId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ link_id: value }, uuid, 'invite_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LinkId
		

}

// End Class: InviteUsersMongoDBCls