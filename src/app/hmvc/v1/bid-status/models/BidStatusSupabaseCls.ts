import { DbResult, DbResultErr, SupabaseTableCls } from "../../../../../modules/base";

export class BidStatusSupabaseCls extends SupabaseTableCls {

  // Table name  for this model : ____TBL_NAME____
  private databaseTable: string = 'tbl_bid_status';

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Initialize the the table name for this class
    this.tableName = this.databaseTable;

  }

  
		// Begin column BidStatusId

		/*
		 * Retrieves the value of the column bid_status_id from the database
		 *
		 @Column:   bid_status_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bid_status_id column values
		 *
		 */

		async getBidStatusId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bid_status_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bid_status_id from the database base on the filters specified
		 *
		 @Column:   bid_status_id
		 @Required: false
		 @Type:     number
		 @Return:   number bid_status_id column values, depending on the filters
		 *
		 */

		async getBidStatusIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bid_status_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bid_status_id in the database
		 *
		 @Column:   bid_status_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBidStatusId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_status_id: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidStatusId
		
		// Begin column BidStatusName

		/*
		 * Retrieves the value of the column bid_status_name from the database
		 *
		 @Column:   bid_status_name
		 @Required: true
		 @Type:     string
		 @Return:   string value, probably all records with only the bid_status_name column values
		 *
		 */

		async getBidStatusName(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bid_status_name']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bid_status_name from the database base on the filters specified
		 *
		 @Column:   bid_status_name
		 @Required: true
		 @Type:     string
		 @Return:   string bid_status_name column values, depending on the filters
		 *
		 */

		async getBidStatusNameWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bid_status_name'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bid_status_name in the database
		 *
		 @Column:   bid_status_name
		 @Required: true
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateBidStatusName(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bid_status_name: value }, uuid, '____uuiKey____');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BidStatusName
		
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

// End Class: BidStatusSupabaseCls