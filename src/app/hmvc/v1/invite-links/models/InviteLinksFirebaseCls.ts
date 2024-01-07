import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class InviteLinksObjCls {

	fid: string;
	link: string;
	link_created_at: string;
	link_expires: string;
	link_id: number;
	link_updated_at: string;
	link_uuid: string;
	user_id: number;
 
  constructor(
	_fid: string, 
	_link: string, 
	_link_created_at: string, 
	_link_expires: string, 
	_link_id: number, 
	_link_updated_at: string, 
	_link_uuid: string, 
	_user_id: number
  ) {
	this.fid = _fid;
	this.link = _link;
	this.link_created_at = _link_created_at;
	this.link_expires = _link_expires;
	this.link_id = _link_id;
	this.link_updated_at = _link_updated_at;
	this.link_uuid = _link_uuid;
	this.user_id = _user_id;
  }
  
  toString() {
    return `
		fid='${this.fid}'; 
		link='${this.link}'; 
		link_created_at='${this.link_created_at}'; 
		link_expires='${this.link_expires}'; 
		link_id='${this.link_id}'; 
		link_updated_at='${this.link_updated_at}'; 
		link_uuid='${this.link_uuid}'; 
		user_id='${this.user_id}'; `;
  }
}

// Firestore data converter
const inviteLinksConverter = {
  toFirestore: (inviteLinksData: InviteLinksObjCls): DocumentData => {
    return {
		fid: inviteLinksData.fid,
		link: inviteLinksData.link,
		link_created_at: inviteLinksData.link_created_at,
		link_expires: inviteLinksData.link_expires,
		link_id: inviteLinksData.link_id,
		link_updated_at: inviteLinksData.link_updated_at,
		link_uuid: inviteLinksData.link_uuid,
		user_id: inviteLinksData.user_id,
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new InviteLinksObjCls(
		data.fid, 
		data.link, 
		data.link_created_at, 
		data.link_expires, 
		data.link_id, 
		data.link_updated_at, 
		data.link_uuid, 
		data.user_id
    );
  }
};

// Begin Class: InviteLinksFirebaseCls

export class InviteLinksFirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : InviteLinks
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = 'InviteLinks';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, inviteLinksConverter);

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

// End Class: InviteLinksFirebaseCls