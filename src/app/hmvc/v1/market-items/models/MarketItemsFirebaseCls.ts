import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class MarketItemsObjCls {

	auction_item_id: number;
	category_id: number;
	chain_id: number;
	fid: string;
	is_archived: boolean;
	is_auction: boolean;
	is_listed: boolean;
	is_sold: boolean;
	likes_count: number;
	market_item_created_at: string;
	market_item_featured: boolean;
	market_item_id: number;
	market_item_tags: string;
	market_item_updated_at: string;
	market_item_uuid: string;
	market_item_verified: boolean;
	on_chain: boolean;
	platform_fee_paid: number;
	supports_royalties: boolean;
	token_contract_address: string;
	token_creator: string;
	token_currency: string;
	token_id: number;
	token_index_id: number;
	token_interface_id: string;
	token_owner: string;
	token_price: number;
	token_seller: string;
	user_id: number;
	views_count: number;
 
  constructor(
	_auction_item_id: number, 
	_category_id: number, 
	_chain_id: number, 
	_fid: string, 
	_is_archived: boolean, 
	_is_auction: boolean, 
	_is_listed: boolean, 
	_is_sold: boolean, 
	_likes_count: number, 
	_market_item_created_at: string, 
	_market_item_featured: boolean, 
	_market_item_id: number, 
	_market_item_tags: string, 
	_market_item_updated_at: string, 
	_market_item_uuid: string, 
	_market_item_verified: boolean, 
	_on_chain: boolean, 
	_platform_fee_paid: number, 
	_supports_royalties: boolean, 
	_token_contract_address: string, 
	_token_creator: string, 
	_token_currency: string, 
	_token_id: number, 
	_token_index_id: number, 
	_token_interface_id: string, 
	_token_owner: string, 
	_token_price: number, 
	_token_seller: string, 
	_user_id: number, 
	_views_count: number
  ) {
	this.auction_item_id = _auction_item_id;
	this.category_id = _category_id;
	this.chain_id = _chain_id;
	this.fid = _fid;
	this.is_archived = _is_archived;
	this.is_auction = _is_auction;
	this.is_listed = _is_listed;
	this.is_sold = _is_sold;
	this.likes_count = _likes_count;
	this.market_item_created_at = _market_item_created_at;
	this.market_item_featured = _market_item_featured;
	this.market_item_id = _market_item_id;
	this.market_item_tags = _market_item_tags;
	this.market_item_updated_at = _market_item_updated_at;
	this.market_item_uuid = _market_item_uuid;
	this.market_item_verified = _market_item_verified;
	this.on_chain = _on_chain;
	this.platform_fee_paid = _platform_fee_paid;
	this.supports_royalties = _supports_royalties;
	this.token_contract_address = _token_contract_address;
	this.token_creator = _token_creator;
	this.token_currency = _token_currency;
	this.token_id = _token_id;
	this.token_index_id = _token_index_id;
	this.token_interface_id = _token_interface_id;
	this.token_owner = _token_owner;
	this.token_price = _token_price;
	this.token_seller = _token_seller;
	this.user_id = _user_id;
	this.views_count = _views_count;
  }
  
  toString() {
    return `
		auction_item_id='${this.auction_item_id}'; 
		category_id='${this.category_id}'; 
		chain_id='${this.chain_id}'; 
		fid='${this.fid}'; 
		is_archived='${this.is_archived}'; 
		is_auction='${this.is_auction}'; 
		is_listed='${this.is_listed}'; 
		is_sold='${this.is_sold}'; 
		likes_count='${this.likes_count}'; 
		market_item_created_at='${this.market_item_created_at}'; 
		market_item_featured='${this.market_item_featured}'; 
		market_item_id='${this.market_item_id}'; 
		market_item_tags='${this.market_item_tags}'; 
		market_item_updated_at='${this.market_item_updated_at}'; 
		market_item_uuid='${this.market_item_uuid}'; 
		market_item_verified='${this.market_item_verified}'; 
		on_chain='${this.on_chain}'; 
		platform_fee_paid='${this.platform_fee_paid}'; 
		supports_royalties='${this.supports_royalties}'; 
		token_contract_address='${this.token_contract_address}'; 
		token_creator='${this.token_creator}'; 
		token_currency='${this.token_currency}'; 
		token_id='${this.token_id}'; 
		token_index_id='${this.token_index_id}'; 
		token_interface_id='${this.token_interface_id}'; 
		token_owner='${this.token_owner}'; 
		token_price='${this.token_price}'; 
		token_seller='${this.token_seller}'; 
		user_id='${this.user_id}'; 
		views_count='${this.views_count}'; `;
  }
}

// Firestore data converter
const marketItemsConverter = {
  toFirestore: (marketItemsData: MarketItemsObjCls): DocumentData => {
    return {
		auction_item_id: marketItemsData.auction_item_id,
		category_id: marketItemsData.category_id,
		chain_id: marketItemsData.chain_id,
		fid: marketItemsData.fid,
		is_archived: marketItemsData.is_archived,
		is_auction: marketItemsData.is_auction,
		is_listed: marketItemsData.is_listed,
		is_sold: marketItemsData.is_sold,
		likes_count: marketItemsData.likes_count,
		market_item_created_at: marketItemsData.market_item_created_at,
		market_item_featured: marketItemsData.market_item_featured,
		market_item_id: marketItemsData.market_item_id,
		market_item_tags: marketItemsData.market_item_tags,
		market_item_updated_at: marketItemsData.market_item_updated_at,
		market_item_uuid: marketItemsData.market_item_uuid,
		market_item_verified: marketItemsData.market_item_verified,
		on_chain: marketItemsData.on_chain,
		platform_fee_paid: marketItemsData.platform_fee_paid,
		supports_royalties: marketItemsData.supports_royalties,
		token_contract_address: marketItemsData.token_contract_address,
		token_creator: marketItemsData.token_creator,
		token_currency: marketItemsData.token_currency,
		token_id: marketItemsData.token_id,
		token_index_id: marketItemsData.token_index_id,
		token_interface_id: marketItemsData.token_interface_id,
		token_owner: marketItemsData.token_owner,
		token_price: marketItemsData.token_price,
		token_seller: marketItemsData.token_seller,
		user_id: marketItemsData.user_id,
		views_count: marketItemsData.views_count,
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new MarketItemsObjCls(
		data.auction_item_id, 
		data.category_id, 
		data.chain_id, 
		data.fid, 
		data.is_archived, 
		data.is_auction, 
		data.is_listed, 
		data.is_sold, 
		data.likes_count, 
		data.market_item_created_at, 
		data.market_item_featured, 
		data.market_item_id, 
		data.market_item_tags, 
		data.market_item_updated_at, 
		data.market_item_uuid, 
		data.market_item_verified, 
		data.on_chain, 
		data.platform_fee_paid, 
		data.supports_royalties, 
		data.token_contract_address, 
		data.token_creator, 
		data.token_currency, 
		data.token_id, 
		data.token_index_id, 
		data.token_interface_id, 
		data.token_owner, 
		data.token_price, 
		data.token_seller, 
		data.user_id, 
		data.views_count
    );
  }
};

// Begin Class: MarketItemsFirebaseCls

export class MarketItemsFirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : MarketItems
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = 'MarketItems';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, marketItemsConverter);

  }

  
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

		        const result: any = this.updateMatchingRows({ auction_item_id: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuctionItemId
		
		// Begin column CategoryId

		/*
		 * Retrieves the value of the column category_id from the database
		 *
		 @Column:   category_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the category_id column values
		 *
		 */

		async getCategoryId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['category_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column category_id from the database base on the filters specified
		 *
		 @Column:   category_id
		 @Required: false
		 @Type:     number
		 @Return:   number category_id column values, depending on the filters
		 *
		 */

		async getCategoryIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['category_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column category_id in the database
		 *
		 @Column:   category_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateCategoryId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ category_id: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CategoryId
		
		// Begin column ChainId

		/*
		 * Retrieves the value of the column chain_id from the database
		 *
		 @Column:   chain_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the chain_id column values
		 *
		 */

		async getChainId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['chain_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column chain_id from the database base on the filters specified
		 *
		 @Column:   chain_id
		 @Required: false
		 @Type:     number
		 @Return:   number chain_id column values, depending on the filters
		 *
		 */

		async getChainIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['chain_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column chain_id in the database
		 *
		 @Column:   chain_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateChainId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ chain_id: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column ChainId
		
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		
		// Begin column IsArchived

		/*
		 * Retrieves the value of the column is_archived from the database
		 *
		 @Column:   is_archived
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the is_archived column values
		 *
		 */

		async getIsArchived(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['is_archived']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column is_archived from the database base on the filters specified
		 *
		 @Column:   is_archived
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean is_archived column values, depending on the filters
		 *
		 */

		async getIsArchivedWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['is_archived'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column is_archived in the database
		 *
		 @Column:   is_archived
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateIsArchived(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ is_archived: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column IsArchived
		
		// Begin column IsAuction

		/*
		 * Retrieves the value of the column is_auction from the database
		 *
		 @Column:   is_auction
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the is_auction column values
		 *
		 */

		async getIsAuction(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['is_auction']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column is_auction from the database base on the filters specified
		 *
		 @Column:   is_auction
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean is_auction column values, depending on the filters
		 *
		 */

		async getIsAuctionWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['is_auction'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column is_auction in the database
		 *
		 @Column:   is_auction
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateIsAuction(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ is_auction: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column IsAuction
		
		// Begin column IsListed

		/*
		 * Retrieves the value of the column is_listed from the database
		 *
		 @Column:   is_listed
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the is_listed column values
		 *
		 */

		async getIsListed(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['is_listed']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column is_listed from the database base on the filters specified
		 *
		 @Column:   is_listed
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean is_listed column values, depending on the filters
		 *
		 */

		async getIsListedWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['is_listed'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column is_listed in the database
		 *
		 @Column:   is_listed
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateIsListed(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ is_listed: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column IsListed
		
		// Begin column IsSold

		/*
		 * Retrieves the value of the column is_sold from the database
		 *
		 @Column:   is_sold
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the is_sold column values
		 *
		 */

		async getIsSold(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['is_sold']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column is_sold from the database base on the filters specified
		 *
		 @Column:   is_sold
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean is_sold column values, depending on the filters
		 *
		 */

		async getIsSoldWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['is_sold'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column is_sold in the database
		 *
		 @Column:   is_sold
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateIsSold(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ is_sold: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column IsSold
		
		// Begin column LikesCount

		/*
		 * Retrieves the value of the column likes_count from the database
		 *
		 @Column:   likes_count
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the likes_count column values
		 *
		 */

		async getLikesCount(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['likes_count']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column likes_count from the database base on the filters specified
		 *
		 @Column:   likes_count
		 @Required: false
		 @Type:     number
		 @Return:   number likes_count column values, depending on the filters
		 *
		 */

		async getLikesCountWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['likes_count'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column likes_count in the database
		 *
		 @Column:   likes_count
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateLikesCount(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ likes_count: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LikesCount
		
		// Begin column MarketItemCreatedAt

		/*
		 * Retrieves the value of the column market_item_created_at from the database
		 *
		 @Column:   market_item_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the market_item_created_at column values
		 *
		 */

		async getMarketItemCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['market_item_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column market_item_created_at from the database base on the filters specified
		 *
		 @Column:   market_item_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string market_item_created_at column values, depending on the filters
		 *
		 */

		async getMarketItemCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['market_item_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column market_item_created_at in the database
		 *
		 @Column:   market_item_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateMarketItemCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ market_item_created_at: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MarketItemCreatedAt
		
		// Begin column MarketItemFeatured

		/*
		 * Retrieves the value of the column market_item_featured from the database
		 *
		 @Column:   market_item_featured
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the market_item_featured column values
		 *
		 */

		async getMarketItemFeatured(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['market_item_featured']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column market_item_featured from the database base on the filters specified
		 *
		 @Column:   market_item_featured
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean market_item_featured column values, depending on the filters
		 *
		 */

		async getMarketItemFeaturedWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['market_item_featured'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column market_item_featured in the database
		 *
		 @Column:   market_item_featured
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateMarketItemFeatured(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ market_item_featured: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MarketItemFeatured
		
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

		        const result: any = this.updateMatchingRows({ market_item_id: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MarketItemId
		
		// Begin column MarketItemTags

		/*
		 * Retrieves the value of the column market_item_tags from the database
		 *
		 @Column:   market_item_tags
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the market_item_tags column values
		 *
		 */

		async getMarketItemTags(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['market_item_tags']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column market_item_tags from the database base on the filters specified
		 *
		 @Column:   market_item_tags
		 @Required: false
		 @Type:     string
		 @Return:   string market_item_tags column values, depending on the filters
		 *
		 */

		async getMarketItemTagsWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['market_item_tags'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column market_item_tags in the database
		 *
		 @Column:   market_item_tags
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateMarketItemTags(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ market_item_tags: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MarketItemTags
		
		// Begin column MarketItemUpdatedAt

		/*
		 * Retrieves the value of the column market_item_updated_at from the database
		 *
		 @Column:   market_item_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the market_item_updated_at column values
		 *
		 */

		async getMarketItemUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['market_item_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column market_item_updated_at from the database base on the filters specified
		 *
		 @Column:   market_item_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string market_item_updated_at column values, depending on the filters
		 *
		 */

		async getMarketItemUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['market_item_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column market_item_updated_at in the database
		 *
		 @Column:   market_item_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateMarketItemUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ market_item_updated_at: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MarketItemUpdatedAt
		
		// Begin column MarketItemUuid

		/*
		 * Retrieves the value of the column market_item_uuid from the database
		 *
		 @Column:   market_item_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the market_item_uuid column values
		 *
		 */

		async getMarketItemUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['market_item_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column market_item_uuid from the database base on the filters specified
		 *
		 @Column:   market_item_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string market_item_uuid column values, depending on the filters
		 *
		 */

		async getMarketItemUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['market_item_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column market_item_uuid in the database
		 *
		 @Column:   market_item_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateMarketItemUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ market_item_uuid: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MarketItemUuid
		
		// Begin column MarketItemVerified

		/*
		 * Retrieves the value of the column market_item_verified from the database
		 *
		 @Column:   market_item_verified
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the market_item_verified column values
		 *
		 */

		async getMarketItemVerified(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['market_item_verified']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column market_item_verified from the database base on the filters specified
		 *
		 @Column:   market_item_verified
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean market_item_verified column values, depending on the filters
		 *
		 */

		async getMarketItemVerifiedWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['market_item_verified'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column market_item_verified in the database
		 *
		 @Column:   market_item_verified
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateMarketItemVerified(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ market_item_verified: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MarketItemVerified
		
		// Begin column OnChain

		/*
		 * Retrieves the value of the column on_chain from the database
		 *
		 @Column:   on_chain
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the on_chain column values
		 *
		 */

		async getOnChain(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['on_chain']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column on_chain from the database base on the filters specified
		 *
		 @Column:   on_chain
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean on_chain column values, depending on the filters
		 *
		 */

		async getOnChainWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['on_chain'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column on_chain in the database
		 *
		 @Column:   on_chain
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateOnChain(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ on_chain: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column OnChain
		
		// Begin column PlatformFeePaid

		/*
		 * Retrieves the value of the column platform_fee_paid from the database
		 *
		 @Column:   platform_fee_paid
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the platform_fee_paid column values
		 *
		 */

		async getPlatformFeePaid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['platform_fee_paid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column platform_fee_paid from the database base on the filters specified
		 *
		 @Column:   platform_fee_paid
		 @Required: false
		 @Type:     number
		 @Return:   number platform_fee_paid column values, depending on the filters
		 *
		 */

		async getPlatformFeePaidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['platform_fee_paid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column platform_fee_paid in the database
		 *
		 @Column:   platform_fee_paid
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updatePlatformFeePaid(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ platform_fee_paid: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column PlatformFeePaid
		
		// Begin column SupportsRoyalties

		/*
		 * Retrieves the value of the column supports_royalties from the database
		 *
		 @Column:   supports_royalties
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the supports_royalties column values
		 *
		 */

		async getSupportsRoyalties(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['supports_royalties']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column supports_royalties from the database base on the filters specified
		 *
		 @Column:   supports_royalties
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean supports_royalties column values, depending on the filters
		 *
		 */

		async getSupportsRoyaltiesWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['supports_royalties'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column supports_royalties in the database
		 *
		 @Column:   supports_royalties
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateSupportsRoyalties(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ supports_royalties: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column SupportsRoyalties
		
		// Begin column TokenContractAddress

		/*
		 * Retrieves the value of the column token_contract_address from the database
		 *
		 @Column:   token_contract_address
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the token_contract_address column values
		 *
		 */

		async getTokenContractAddress(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['token_contract_address']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column token_contract_address from the database base on the filters specified
		 *
		 @Column:   token_contract_address
		 @Required: false
		 @Type:     string
		 @Return:   string token_contract_address column values, depending on the filters
		 *
		 */

		async getTokenContractAddressWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['token_contract_address'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column token_contract_address in the database
		 *
		 @Column:   token_contract_address
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateTokenContractAddress(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ token_contract_address: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column TokenContractAddress
		
		// Begin column TokenCreator

		/*
		 * Retrieves the value of the column token_creator from the database
		 *
		 @Column:   token_creator
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the token_creator column values
		 *
		 */

		async getTokenCreator(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['token_creator']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column token_creator from the database base on the filters specified
		 *
		 @Column:   token_creator
		 @Required: false
		 @Type:     string
		 @Return:   string token_creator column values, depending on the filters
		 *
		 */

		async getTokenCreatorWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['token_creator'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column token_creator in the database
		 *
		 @Column:   token_creator
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateTokenCreator(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ token_creator: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column TokenCreator
		
		// Begin column TokenCurrency

		/*
		 * Retrieves the value of the column token_currency from the database
		 *
		 @Column:   token_currency
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the token_currency column values
		 *
		 */

		async getTokenCurrency(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['token_currency']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column token_currency from the database base on the filters specified
		 *
		 @Column:   token_currency
		 @Required: false
		 @Type:     string
		 @Return:   string token_currency column values, depending on the filters
		 *
		 */

		async getTokenCurrencyWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['token_currency'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column token_currency in the database
		 *
		 @Column:   token_currency
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateTokenCurrency(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ token_currency: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column TokenCurrency
		
		// Begin column TokenId

		/*
		 * Retrieves the value of the column token_id from the database
		 *
		 @Column:   token_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the token_id column values
		 *
		 */

		async getTokenId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['token_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column token_id from the database base on the filters specified
		 *
		 @Column:   token_id
		 @Required: false
		 @Type:     number
		 @Return:   number token_id column values, depending on the filters
		 *
		 */

		async getTokenIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['token_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column token_id in the database
		 *
		 @Column:   token_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateTokenId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ token_id: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column TokenId
		
		// Begin column TokenIndexId

		/*
		 * Retrieves the value of the column token_index_id from the database
		 *
		 @Column:   token_index_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the token_index_id column values
		 *
		 */

		async getTokenIndexId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['token_index_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column token_index_id from the database base on the filters specified
		 *
		 @Column:   token_index_id
		 @Required: false
		 @Type:     number
		 @Return:   number token_index_id column values, depending on the filters
		 *
		 */

		async getTokenIndexIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['token_index_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column token_index_id in the database
		 *
		 @Column:   token_index_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateTokenIndexId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ token_index_id: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column TokenIndexId
		
		// Begin column TokenInterfaceId

		/*
		 * Retrieves the value of the column token_interface_id from the database
		 *
		 @Column:   token_interface_id
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the token_interface_id column values
		 *
		 */

		async getTokenInterfaceId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['token_interface_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column token_interface_id from the database base on the filters specified
		 *
		 @Column:   token_interface_id
		 @Required: false
		 @Type:     string
		 @Return:   string token_interface_id column values, depending on the filters
		 *
		 */

		async getTokenInterfaceIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['token_interface_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column token_interface_id in the database
		 *
		 @Column:   token_interface_id
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateTokenInterfaceId(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ token_interface_id: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column TokenInterfaceId
		
		// Begin column TokenOwner

		/*
		 * Retrieves the value of the column token_owner from the database
		 *
		 @Column:   token_owner
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the token_owner column values
		 *
		 */

		async getTokenOwner(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['token_owner']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column token_owner from the database base on the filters specified
		 *
		 @Column:   token_owner
		 @Required: false
		 @Type:     string
		 @Return:   string token_owner column values, depending on the filters
		 *
		 */

		async getTokenOwnerWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['token_owner'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column token_owner in the database
		 *
		 @Column:   token_owner
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateTokenOwner(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ token_owner: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column TokenOwner
		
		// Begin column TokenPrice

		/*
		 * Retrieves the value of the column token_price from the database
		 *
		 @Column:   token_price
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the token_price column values
		 *
		 */

		async getTokenPrice(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['token_price']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column token_price from the database base on the filters specified
		 *
		 @Column:   token_price
		 @Required: false
		 @Type:     number
		 @Return:   number token_price column values, depending on the filters
		 *
		 */

		async getTokenPriceWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['token_price'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column token_price in the database
		 *
		 @Column:   token_price
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateTokenPrice(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ token_price: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column TokenPrice
		
		// Begin column TokenSeller

		/*
		 * Retrieves the value of the column token_seller from the database
		 *
		 @Column:   token_seller
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the token_seller column values
		 *
		 */

		async getTokenSeller(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['token_seller']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column token_seller from the database base on the filters specified
		 *
		 @Column:   token_seller
		 @Required: false
		 @Type:     string
		 @Return:   string token_seller column values, depending on the filters
		 *
		 */

		async getTokenSellerWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['token_seller'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column token_seller in the database
		 *
		 @Column:   token_seller
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateTokenSeller(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ token_seller: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column TokenSeller
		
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

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		
		// Begin column ViewsCount

		/*
		 * Retrieves the value of the column views_count from the database
		 *
		 @Column:   views_count
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the views_count column values
		 *
		 */

		async getViewsCount(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['views_count']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column views_count from the database base on the filters specified
		 *
		 @Column:   views_count
		 @Required: false
		 @Type:     number
		 @Return:   number views_count column values, depending on the filters
		 *
		 */

		async getViewsCountWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['views_count'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column views_count in the database
		 *
		 @Column:   views_count
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateViewsCount(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ views_count: value }, uuid, 'market_item_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column ViewsCount
		

}

// End Class: MarketItemsFirebaseCls