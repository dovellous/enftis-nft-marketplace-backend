import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class AuctionItemsObjCls {

	auction_item_created_at: string;
	auction_item_expires: string;
	auction_item_highest_amount: number;
	auction_item_id: number;
	auction_item_ighest_bidder: string;
	auction_item_lowest_amount: number;
	auction_item_updated_at: string;
	auction_type_id: number;
	fid: string;
	market_item_id: number;
 
  constructor(
	_auction_item_created_at: string, 
	_auction_item_expires: string, 
	_auction_item_highest_amount: number, 
	_auction_item_id: number, 
	_auction_item_ighest_bidder: string, 
	_auction_item_lowest_amount: number, 
	_auction_item_updated_at: string, 
	_auction_type_id: number, 
	_fid: string, 
	_market_item_id: number
  ) {
	this.auction_item_created_at = _auction_item_created_at;
	this.auction_item_expires = _auction_item_expires;
	this.auction_item_highest_amount = _auction_item_highest_amount;
	this.auction_item_id = _auction_item_id;
	this.auction_item_ighest_bidder = _auction_item_ighest_bidder;
	this.auction_item_lowest_amount = _auction_item_lowest_amount;
	this.auction_item_updated_at = _auction_item_updated_at;
	this.auction_type_id = _auction_type_id;
	this.fid = _fid;
	this.market_item_id = _market_item_id;
  }
  
  toString() {
    return `
		auction_item_created_at='${this.auction_item_created_at}'; 
		auction_item_expires='${this.auction_item_expires}'; 
		auction_item_highest_amount='${this.auction_item_highest_amount}'; 
		auction_item_id='${this.auction_item_id}'; 
		auction_item_ighest_bidder='${this.auction_item_ighest_bidder}'; 
		auction_item_lowest_amount='${this.auction_item_lowest_amount}'; 
		auction_item_updated_at='${this.auction_item_updated_at}'; 
		auction_type_id='${this.auction_type_id}'; 
		fid='${this.fid}'; 
		market_item_id='${this.market_item_id}'; `;
  }
}

// Firestore data converter
const auctionItemsConverter = {
  toFirestore: (auctionItemsData: AuctionItemsObjCls): DocumentData => {
    return {
		auction_item_created_at: auctionItemsData.auction_item_created_at,
		auction_item_expires: auctionItemsData.auction_item_expires,
		auction_item_highest_amount: auctionItemsData.auction_item_highest_amount,
		auction_item_id: auctionItemsData.auction_item_id,
		auction_item_ighest_bidder: auctionItemsData.auction_item_ighest_bidder,
		auction_item_lowest_amount: auctionItemsData.auction_item_lowest_amount,
		auction_item_updated_at: auctionItemsData.auction_item_updated_at,
		auction_type_id: auctionItemsData.auction_type_id,
		fid: auctionItemsData.fid,
		market_item_id: auctionItemsData.market_item_id,
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new AuctionItemsObjCls(
		data.auction_item_created_at, 
		data.auction_item_expires, 
		data.auction_item_highest_amount, 
		data.auction_item_id, 
		data.auction_item_ighest_bidder, 
		data.auction_item_lowest_amount, 
		data.auction_item_updated_at, 
		data.auction_type_id, 
		data.fid, 
		data.market_item_id
    );
  }
};

// Begin Class: AuctionItemsFirebaseCls

export class AuctionItemsFirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : AuctionItems
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = 'AuctionItems';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, auctionItemsConverter);

  }

  
		// Begin column AuctionItemCreatedAt

		/*
		 * Retrieves the value of the column auction_item_created_at from the database
		 *
		 @Column:   auction_item_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the auction_item_created_at column values
		 *
		 */

		async getAuctionItemCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['auction_item_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column auction_item_created_at from the database base on the filters specified
		 *
		 @Column:   auction_item_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string auction_item_created_at column values, depending on the filters
		 *
		 */

		async getAuctionItemCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['auction_item_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column auction_item_created_at in the database
		 *
		 @Column:   auction_item_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateAuctionItemCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ auction_item_created_at: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuctionItemCreatedAt
		
		// Begin column AuctionItemExpires

		/*
		 * Retrieves the value of the column auction_item_expires from the database
		 *
		 @Column:   auction_item_expires
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the auction_item_expires column values
		 *
		 */

		async getAuctionItemExpires(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['auction_item_expires']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column auction_item_expires from the database base on the filters specified
		 *
		 @Column:   auction_item_expires
		 @Required: false
		 @Type:     string
		 @Return:   string auction_item_expires column values, depending on the filters
		 *
		 */

		async getAuctionItemExpiresWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['auction_item_expires'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column auction_item_expires in the database
		 *
		 @Column:   auction_item_expires
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateAuctionItemExpires(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ auction_item_expires: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuctionItemExpires
		
		// Begin column AuctionItemHighestAmount

		/*
		 * Retrieves the value of the column auction_item_highest_amount from the database
		 *
		 @Column:   auction_item_highest_amount
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the auction_item_highest_amount column values
		 *
		 */

		async getAuctionItemHighestAmount(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['auction_item_highest_amount']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column auction_item_highest_amount from the database base on the filters specified
		 *
		 @Column:   auction_item_highest_amount
		 @Required: false
		 @Type:     number
		 @Return:   number auction_item_highest_amount column values, depending on the filters
		 *
		 */

		async getAuctionItemHighestAmountWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['auction_item_highest_amount'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column auction_item_highest_amount in the database
		 *
		 @Column:   auction_item_highest_amount
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateAuctionItemHighestAmount(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ auction_item_highest_amount: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuctionItemHighestAmount
		
		// Begin column AuctionItemId

		/*
		 * Retrieves the value of the column auction_item_id from the database
		 *
		 @Column:   auction_item_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the auction_item_id column values
		 *
		 */

		async getAuctionItemId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['auction_item_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column auction_item_id from the database base on the filters specified
		 *
		 @Column:   auction_item_id
		 @Required: false
		 @Type:     number
		 @Return:   number auction_item_id column values, depending on the filters
		 *
		 */

		async getAuctionItemIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['auction_item_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column auction_item_id in the database
		 *
		 @Column:   auction_item_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateAuctionItemId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ auction_item_id: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuctionItemId
		
		// Begin column AuctionItemIghestBidder

		/*
		 * Retrieves the value of the column auction_item_ighest_bidder from the database
		 *
		 @Column:   auction_item_ighest_bidder
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the auction_item_ighest_bidder column values
		 *
		 */

		async getAuctionItemIghestBidder(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['auction_item_ighest_bidder']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column auction_item_ighest_bidder from the database base on the filters specified
		 *
		 @Column:   auction_item_ighest_bidder
		 @Required: false
		 @Type:     string
		 @Return:   string auction_item_ighest_bidder column values, depending on the filters
		 *
		 */

		async getAuctionItemIghestBidderWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['auction_item_ighest_bidder'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column auction_item_ighest_bidder in the database
		 *
		 @Column:   auction_item_ighest_bidder
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateAuctionItemIghestBidder(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ auction_item_ighest_bidder: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuctionItemIghestBidder
		
		// Begin column AuctionItemLowestAmount

		/*
		 * Retrieves the value of the column auction_item_lowest_amount from the database
		 *
		 @Column:   auction_item_lowest_amount
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the auction_item_lowest_amount column values
		 *
		 */

		async getAuctionItemLowestAmount(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['auction_item_lowest_amount']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column auction_item_lowest_amount from the database base on the filters specified
		 *
		 @Column:   auction_item_lowest_amount
		 @Required: false
		 @Type:     number
		 @Return:   number auction_item_lowest_amount column values, depending on the filters
		 *
		 */

		async getAuctionItemLowestAmountWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['auction_item_lowest_amount'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column auction_item_lowest_amount in the database
		 *
		 @Column:   auction_item_lowest_amount
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateAuctionItemLowestAmount(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ auction_item_lowest_amount: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuctionItemLowestAmount
		
		// Begin column AuctionItemUpdatedAt

		/*
		 * Retrieves the value of the column auction_item_updated_at from the database
		 *
		 @Column:   auction_item_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the auction_item_updated_at column values
		 *
		 */

		async getAuctionItemUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['auction_item_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column auction_item_updated_at from the database base on the filters specified
		 *
		 @Column:   auction_item_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string auction_item_updated_at column values, depending on the filters
		 *
		 */

		async getAuctionItemUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['auction_item_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column auction_item_updated_at in the database
		 *
		 @Column:   auction_item_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateAuctionItemUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ auction_item_updated_at: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuctionItemUpdatedAt
		
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
		
		// Begin column MarketItemId

		/*
		 * Retrieves the value of the column market_item_id from the database
		 *
		 @Column:   market_item_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the market_item_id column values
		 *
		 */

		async getMarketItemId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['market_item_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column market_item_id from the database base on the filters specified
		 *
		 @Column:   market_item_id
		 @Required: false
		 @Type:     number
		 @Return:   number market_item_id column values, depending on the filters
		 *
		 */

		async getMarketItemIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['market_item_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column market_item_id in the database
		 *
		 @Column:   market_item_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateMarketItemId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ market_item_id: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MarketItemId
		

}

// End Class: AuctionItemsFirebaseCls