import { DbResult, DbResultErr, SupabaseTableCls } from "../../../../../modules/base";

export class BidTypesSupabaseCls extends SupabaseTableCls {

  // Table name  for this model : ____TBL_NAME____
  private databaseTable: string = 'tbl_bid_types';

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Initialize the the table name for this class
    this.tableName = this.databaseTable;

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

// End Class: BidTypesSupabaseCls