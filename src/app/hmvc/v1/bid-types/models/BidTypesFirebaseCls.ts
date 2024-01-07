import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class BidTypesObjCls {

	bid_type: string;
	bid_type_description: string;
	bid_type_id: number;
	fid: string;
 
  constructor(
	_bid_type: string, 
	_bid_type_description: string, 
	_bid_type_id: number, 
	_fid: string
  ) {
	this.bid_type = _bid_type;
	this.bid_type_description = _bid_type_description;
	this.bid_type_id = _bid_type_id;
	this.fid = _fid;
  }
  
  toString() {
    return `
		bid_type='${this.bid_type}'; 
		bid_type_description='${this.bid_type_description}'; 
		bid_type_id='${this.bid_type_id}'; 
		fid='${this.fid}'; `;
  }
}

// Firestore data converter
const bidTypesConverter = {
  toFirestore: (bidTypesData: BidTypesObjCls): DocumentData => {
    return {
		bid_type: bidTypesData.bid_type,
		bid_type_description: bidTypesData.bid_type_description,
		bid_type_id: bidTypesData.bid_type_id,
		fid: bidTypesData.fid,
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new BidTypesObjCls(
		data.bid_type, 
		data.bid_type_description, 
		data.bid_type_id, 
		data.fid
    );
  }
};

// Begin Class: BidTypesFirebaseCls

export class BidTypesFirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : BidTypes
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = 'BidTypes';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, bidTypesConverter);

  }

  
		// Begin column BidType

		/*
		 * Retrieves the value of the column bid_type from the database
		 *
		 @Column:   bid_type
		 @Required: true
		 @Type:     string
		 @Return:   string value, probably all records with only the bid_type column values
		 *
		 */

		async getBidType(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bid_type']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bid_type from the database base on the filters specified
		 *
		 @Column:   bid_type
		 @Required: true
		 @Type:     string
		 @Return:   string bid_type column values, depending on the filters
		 *
		 */

		async getBidTypeWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bid_type'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bid_type in the database
		 *
		 @Column:   bid_type
		 @Required: true
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateBidType(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_type: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidType
		
		// Begin column BidTypeDescription

		/*
		 * Retrieves the value of the column bid_type_description from the database
		 *
		 @Column:   bid_type_description
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the bid_type_description column values
		 *
		 */

		async getBidTypeDescription(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bid_type_description']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bid_type_description from the database base on the filters specified
		 *
		 @Column:   bid_type_description
		 @Required: false
		 @Type:     string
		 @Return:   string bid_type_description column values, depending on the filters
		 *
		 */

		async getBidTypeDescriptionWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bid_type_description'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bid_type_description in the database
		 *
		 @Column:   bid_type_description
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateBidTypeDescription(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_type_description: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidTypeDescription
		
		// Begin column BidTypeId

		/*
		 * Retrieves the value of the column bid_type_id from the database
		 *
		 @Column:   bid_type_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bid_type_id column values
		 *
		 */

		async getBidTypeId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bid_type_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bid_type_id from the database base on the filters specified
		 *
		 @Column:   bid_type_id
		 @Required: false
		 @Type:     number
		 @Return:   number bid_type_id column values, depending on the filters
		 *
		 */

		async getBidTypeIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bid_type_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bid_type_id in the database
		 *
		 @Column:   bid_type_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBidTypeId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_type_id: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidTypeId
		
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

// End Class: BidTypesFirebaseCls