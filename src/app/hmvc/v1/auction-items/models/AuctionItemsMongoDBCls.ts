import { Schema, model } from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";
import { MongoDBCollectionCls } from "../../../../../modules/base/MongoDBCollectionCls";

export class AuctionItemsMongoDBCls extends MongoDBCollectionCls {

  // AuctionItems model object
  private AuctionItemsMongoDBModel: any;

  // AuctionItems schema object
  private auctionItemsSchema: any;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this keyword
    super();

    // Init model name
    this.modelName = 'AuctionItems';

    // Define the Interface
    interface IAuctionItems {
      	_id : string;
		auction_item_created_at : string;
		auction_item_expires : string;
		auction_item_highest_amount : number;
		auction_item_id : number;
		auction_item_ighest_bidder : string;
		auction_item_lowest_amount : number;
		auction_item_updated_at : string;
		auction_type_id : number;
		fid : string;
		market_item_id : number;
	
    }

    // Init auctionItems schema
    this.auctionItemsSchema = new Schema<IAuctionItems>({
      	_id: {
         type: String,
         required: false,
         trim: true
		},
		auction_item_created_at: {
         type: String,
         required: false,
         trim: true
		},
		auction_item_expires: {
         type: String,
         required: false,
         trim: true
		},
		auction_item_highest_amount: {
         type: Number,
         required: false,
         trim: true
		},
		auction_item_id: {
         type: Number,
         required: false,
         trim: true
		},
		auction_item_ighest_bidder: {
         type: String,
         required: false,
         trim: true
		},
		auction_item_lowest_amount: {
         type: Number,
         required: false,
         trim: true
		},
		auction_item_updated_at: {
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
		market_item_id: {
         type: Number,
         required: false,
         trim: true
		},
	
    }, {
      timestamps: true
    });

    // Define auctionItems auto increment key

    this.auctionItemsSchema.plugin(autoIncrement, { model: this.modelName, field: '_id' });

    this.AuctionItemsMongoDBModel = model<IAuctionItems>(this.modelName, this.auctionItemsSchema);

    // Create a change stream cursor that listens for changes to the collection
    this.AuctionItemsMongoDBModel.watch();


    // Explicitly create the collection before using it
    // so the collection is capped.
    this.AuctionItemsMongoDBModel.createCollection();

    this.setupModel(this.AuctionItemsMongoDBModel);

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

// End Class: AuctionItemsMongoDBCls