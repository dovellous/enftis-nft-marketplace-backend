import { DbResult, DbResultErr, SupabaseTableCls } from "../../../../../modules/base";

export class AuctionTypesSupabaseCls extends SupabaseTableCls {

  // Table name  for this model : ____TBL_NAME____
  private databaseTable: string = 'tbl_auction_types';

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Initialize the the table name for this class
    this.tableName = this.databaseTable;

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

// End Class: AuctionTypesSupabaseCls