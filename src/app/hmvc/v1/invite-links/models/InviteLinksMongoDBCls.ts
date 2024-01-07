import { Schema, model } from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";
import { MongoDBCollectionCls } from "../../../../../modules/base/MongoDBCollectionCls";

export class InviteLinksMongoDBCls extends MongoDBCollectionCls {

  // InviteLinks model object
  private InviteLinksMongoDBModel: any;

  // InviteLinks schema object
  private inviteLinksSchema: any;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this keyword
    super();

    // Init model name
    this.modelName = 'InviteLinks';

    // Define the Interface
    interface IInviteLinks {
      	_id : string;
		fid : string;
		link : string;
		link_created_at : string;
		link_expires : string;
		link_id : number;
		link_updated_at : string;
		link_uuid : string;
		user_id : number;
	
    }

    // Init inviteLinks schema
    this.inviteLinksSchema = new Schema<IInviteLinks>({
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
		link: {
         type: String,
         required: false,
         trim: true
		},
		link_created_at: {
         type: String,
         required: false,
         trim: true
		},
		link_expires: {
         type: String,
         required: false,
         trim: true
		},
		link_id: {
         type: Number,
         required: false,
         trim: true
		},
		link_updated_at: {
         type: String,
         required: false,
         trim: true
		},
		link_uuid: {
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

    // Define inviteLinks auto increment key

    this.inviteLinksSchema.plugin(autoIncrement, { model: this.modelName, field: '_id' });

    this.InviteLinksMongoDBModel = model<IInviteLinks>(this.modelName, this.inviteLinksSchema);

    // Create a change stream cursor that listens for changes to the collection
    this.InviteLinksMongoDBModel.watch();


    // Explicitly create the collection before using it
    // so the collection is capped.
    this.InviteLinksMongoDBModel.createCollection();

    this.setupModel(this.InviteLinksMongoDBModel);

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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'link_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		
		// Begin column Link

		/*
		 * Retrieves the value of the column link from the database
		 *
		 @Column:   link
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the link column values
		 *
		 */

		async getLink(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['link']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column link from the database base on the filters specified
		 *
		 @Column:   link
		 @Required: false
		 @Type:     string
		 @Return:   string link column values, depending on the filters
		 *
		 */

		async getLinkWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['link'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column link in the database
		 *
		 @Column:   link
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateLink(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ link: value }, uuid, 'link_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Link
		
		// Begin column LinkCreatedAt

		/*
		 * Retrieves the value of the column link_created_at from the database
		 *
		 @Column:   link_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the link_created_at column values
		 *
		 */

		async getLinkCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['link_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column link_created_at from the database base on the filters specified
		 *
		 @Column:   link_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string link_created_at column values, depending on the filters
		 *
		 */

		async getLinkCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['link_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column link_created_at in the database
		 *
		 @Column:   link_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateLinkCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ link_created_at: value }, uuid, 'link_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LinkCreatedAt
		
		// Begin column LinkExpires

		/*
		 * Retrieves the value of the column link_expires from the database
		 *
		 @Column:   link_expires
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the link_expires column values
		 *
		 */

		async getLinkExpires(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['link_expires']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column link_expires from the database base on the filters specified
		 *
		 @Column:   link_expires
		 @Required: false
		 @Type:     string
		 @Return:   string link_expires column values, depending on the filters
		 *
		 */

		async getLinkExpiresWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['link_expires'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column link_expires in the database
		 *
		 @Column:   link_expires
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateLinkExpires(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ link_expires: value }, uuid, 'link_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LinkExpires
		
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

		        const result: any = this.updateMatchingRows({ link_id: value }, uuid, 'link_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LinkId
		
		// Begin column LinkUpdatedAt

		/*
		 * Retrieves the value of the column link_updated_at from the database
		 *
		 @Column:   link_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the link_updated_at column values
		 *
		 */

		async getLinkUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['link_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column link_updated_at from the database base on the filters specified
		 *
		 @Column:   link_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string link_updated_at column values, depending on the filters
		 *
		 */

		async getLinkUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['link_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column link_updated_at in the database
		 *
		 @Column:   link_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateLinkUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ link_updated_at: value }, uuid, 'link_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LinkUpdatedAt
		
		// Begin column LinkUuid

		/*
		 * Retrieves the value of the column link_uuid from the database
		 *
		 @Column:   link_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the link_uuid column values
		 *
		 */

		async getLinkUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['link_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column link_uuid from the database base on the filters specified
		 *
		 @Column:   link_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string link_uuid column values, depending on the filters
		 *
		 */

		async getLinkUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['link_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column link_uuid in the database
		 *
		 @Column:   link_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateLinkUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ link_uuid: value }, uuid, 'link_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LinkUuid
		
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

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'link_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		

}

// End Class: InviteLinksMongoDBCls