import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class AuctionTypesObjCls {

	auction_type: string;
	auction_type_description: string;
	auction_type_id: number;
	fid: string;
 
  constructor(
	_auction_type: string, 
	_auction_type_description: string, 
	_auction_type_id: number, 
	_fid: string
  ) {
	this.auction_type = _auction_type;
	this.auction_type_description = _auction_type_description;
	this.auction_type_id = _auction_type_id;
	this.fid = _fid;
  }
  
  toString() {
    return `
		auction_type='${this.auction_type}'; 
		auction_type_description='${this.auction_type_description}'; 
		auction_type_id='${this.auction_type_id}'; 
		fid='${this.fid}'; `;
  }
}

// Firestore data converter
const auctionTypesConverter = {
  toFirestore: (auctionTypesData: AuctionTypesObjCls): DocumentData => {
    return {
		auction_type: auctionTypesData.auction_type,
		auction_type_description: auctionTypesData.auction_type_description,
		auction_type_id: auctionTypesData.auction_type_id,
		fid: auctionTypesData.fid,
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new AuctionTypesObjCls(
		data.auction_type, 
		data.auction_type_description, 
		data.auction_type_id, 
		data.fid
    );
  }
};

// Begin Class: AuctionTypesFirebaseCls

export class AuctionTypesFirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : AuctionTypes
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = 'AuctionTypes';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, auctionTypesConverter);

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

// End Class: AuctionTypesFirebaseCls