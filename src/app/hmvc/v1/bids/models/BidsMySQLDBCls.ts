import { MySQLTableCls } from "../../../../../modules/base/MySQLTableCls";

export class BidsMySQLDBCls extends MySQLTableCls {

    // Table name for this model : Bids
    private databaseTable: string = 'tbl_bids';

    // Setup initial variables in the constructor
    constructor() {

        // Call the base class contructor first before using this
        super();

        // Initialize the the table name for this class
        this.tableName = this.databaseTable;

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

		        const result: any = this.updateMatchingRows({ auction_item_id: value }, uuid, 'bid_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuctionItemId
		
		// Begin column BidAmount

		/*
		 * Retrieves the value of the column bid_amount from the database
		 *
		 @Column:   bid_amount
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bid_amount column values
		 *
		 */

		async getBidAmount(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bid_amount']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bid_amount from the database base on the filters specified
		 *
		 @Column:   bid_amount
		 @Required: false
		 @Type:     number
		 @Return:   number bid_amount column values, depending on the filters
		 *
		 */

		async getBidAmountWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bid_amount'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bid_amount in the database
		 *
		 @Column:   bid_amount
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBidAmount(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_amount: value }, uuid, 'bid_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidAmount
		
		// Begin column BidCreatedAt

		/*
		 * Retrieves the value of the column bid_created_at from the database
		 *
		 @Column:   bid_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the bid_created_at column values
		 *
		 */

		async getBidCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bid_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bid_created_at from the database base on the filters specified
		 *
		 @Column:   bid_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string bid_created_at column values, depending on the filters
		 *
		 */

		async getBidCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bid_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bid_created_at in the database
		 *
		 @Column:   bid_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateBidCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_created_at: value }, uuid, 'bid_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidCreatedAt
		
		// Begin column BidId

		/*
		 * Retrieves the value of the column bid_id from the database
		 *
		 @Column:   bid_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bid_id column values
		 *
		 */

		async getBidId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bid_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bid_id from the database base on the filters specified
		 *
		 @Column:   bid_id
		 @Required: false
		 @Type:     number
		 @Return:   number bid_id column values, depending on the filters
		 *
		 */

		async getBidIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bid_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bid_id in the database
		 *
		 @Column:   bid_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBidId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_id: value }, uuid, 'bid_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidId
		
		// Begin column BidStatus

		/*
		 * Retrieves the value of the column bid_status from the database
		 *
		 @Column:   bid_status
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bid_status column values
		 *
		 */

		async getBidStatus(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bid_status']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bid_status from the database base on the filters specified
		 *
		 @Column:   bid_status
		 @Required: false
		 @Type:     number
		 @Return:   number bid_status column values, depending on the filters
		 *
		 */

		async getBidStatusWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bid_status'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bid_status in the database
		 *
		 @Column:   bid_status
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBidStatus(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_status: value }, uuid, 'bid_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidStatus
		
		// Begin column BidType

		/*
		 * Retrieves the value of the column bid_type from the database
		 *
		 @Column:   bid_type
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bid_type column values
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
		 @Required: false
		 @Type:     number
		 @Return:   number bid_type column values, depending on the filters
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
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBidType(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_type: value }, uuid, 'bid_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidType
		
		// Begin column BidUpdatedAt

		/*
		 * Retrieves the value of the column bid_updated_at from the database
		 *
		 @Column:   bid_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the bid_updated_at column values
		 *
		 */

		async getBidUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bid_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bid_updated_at from the database base on the filters specified
		 *
		 @Column:   bid_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string bid_updated_at column values, depending on the filters
		 *
		 */

		async getBidUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bid_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bid_updated_at in the database
		 *
		 @Column:   bid_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateBidUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_updated_at: value }, uuid, 'bid_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidUpdatedAt
		
		// Begin column BidUuid

		/*
		 * Retrieves the value of the column bid_uuid from the database
		 *
		 @Column:   bid_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the bid_uuid column values
		 *
		 */

		async getBidUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bid_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bid_uuid from the database base on the filters specified
		 *
		 @Column:   bid_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string bid_uuid column values, depending on the filters
		 *
		 */

		async getBidUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bid_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bid_uuid in the database
		 *
		 @Column:   bid_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateBidUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_uuid: value }, uuid, 'bid_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidUuid
		
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'bid_uuid');

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

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'bid_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		

}

// End Class: BidsMySQLDBCls