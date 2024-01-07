import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class EngagementObjCls {

	engagement_claimed_off_days: number;
	engagement_consecutive_days: number;
	engagement_created_at: string;
	engagement_id: number;
	engagement_off_days: number;
	engagement_updated_at: string;
	engagement_uuid: string;
	fid: string;
	user_id: number;
 
  constructor(
	_engagement_claimed_off_days: number, 
	_engagement_consecutive_days: number, 
	_engagement_created_at: string, 
	_engagement_id: number, 
	_engagement_off_days: number, 
	_engagement_updated_at: string, 
	_engagement_uuid: string, 
	_fid: string, 
	_user_id: number
  ) {
	this.engagement_claimed_off_days = _engagement_claimed_off_days;
	this.engagement_consecutive_days = _engagement_consecutive_days;
	this.engagement_created_at = _engagement_created_at;
	this.engagement_id = _engagement_id;
	this.engagement_off_days = _engagement_off_days;
	this.engagement_updated_at = _engagement_updated_at;
	this.engagement_uuid = _engagement_uuid;
	this.fid = _fid;
	this.user_id = _user_id;
  }
  
  toString() {
    return `
		engagement_claimed_off_days='${this.engagement_claimed_off_days}'; 
		engagement_consecutive_days='${this.engagement_consecutive_days}'; 
		engagement_created_at='${this.engagement_created_at}'; 
		engagement_id='${this.engagement_id}'; 
		engagement_off_days='${this.engagement_off_days}'; 
		engagement_updated_at='${this.engagement_updated_at}'; 
		engagement_uuid='${this.engagement_uuid}'; 
		fid='${this.fid}'; 
		user_id='${this.user_id}'; `;
  }
}

// Firestore data converter
const engagementConverter = {
  toFirestore: (engagementData: EngagementObjCls): DocumentData => {
    return {
		engagement_claimed_off_days: engagementData.engagement_claimed_off_days,
		engagement_consecutive_days: engagementData.engagement_consecutive_days,
		engagement_created_at: engagementData.engagement_created_at,
		engagement_id: engagementData.engagement_id,
		engagement_off_days: engagementData.engagement_off_days,
		engagement_updated_at: engagementData.engagement_updated_at,
		engagement_uuid: engagementData.engagement_uuid,
		fid: engagementData.fid,
		user_id: engagementData.user_id,
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new EngagementObjCls(
		data.engagement_claimed_off_days, 
		data.engagement_consecutive_days, 
		data.engagement_created_at, 
		data.engagement_id, 
		data.engagement_off_days, 
		data.engagement_updated_at, 
		data.engagement_uuid, 
		data.fid, 
		data.user_id
    );
  }
};

// Begin Class: EngagementFirebaseCls

export class EngagementFirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : Engagement
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = 'Engagement';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, engagementConverter);

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

// End Class: EngagementFirebaseCls