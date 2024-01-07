import { DbResult, DbResultErr, SupabaseTableCls } from "../../../../../modules/base";

export class NftLogsSupabaseCls extends SupabaseTableCls {

  // Table name  for this model : ____TBL_NAME____
  private databaseTable: string = 'tbl_nft_logs';

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Initialize the the table name for this class
    this.tableName = this.databaseTable;

  }

  
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'log_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		
		// Begin column LogAmount

		/*
		 * Retrieves the value of the column log_amount from the database
		 *
		 @Column:   log_amount
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the log_amount column values
		 *
		 */

		async getLogAmount(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['log_amount']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column log_amount from the database base on the filters specified
		 *
		 @Column:   log_amount
		 @Required: false
		 @Type:     number
		 @Return:   number log_amount column values, depending on the filters
		 *
		 */

		async getLogAmountWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['log_amount'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column log_amount in the database
		 *
		 @Column:   log_amount
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateLogAmount(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ log_amount: value }, uuid, 'log_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LogAmount
		
		// Begin column LogChainId

		/*
		 * Retrieves the value of the column log_chain_id from the database
		 *
		 @Column:   log_chain_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the log_chain_id column values
		 *
		 */

		async getLogChainId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['log_chain_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column log_chain_id from the database base on the filters specified
		 *
		 @Column:   log_chain_id
		 @Required: false
		 @Type:     number
		 @Return:   number log_chain_id column values, depending on the filters
		 *
		 */

		async getLogChainIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['log_chain_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column log_chain_id in the database
		 *
		 @Column:   log_chain_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateLogChainId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ log_chain_id: value }, uuid, 'log_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LogChainId
		
		// Begin column LogData

		/*
		 * Retrieves the value of the column log_data from the database
		 *
		 @Column:   log_data
		 @Required: false
		 @Type:     any
		 @Return:   any value, probably all records with only the log_data column values
		 *
		 */

		async getLogData(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['log_data']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column log_data from the database base on the filters specified
		 *
		 @Column:   log_data
		 @Required: false
		 @Type:     any
		 @Return:   any log_data column values, depending on the filters
		 *
		 */

		async getLogDataWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['log_data'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column log_data in the database
		 *
		 @Column:   log_data
		 @Required: false
		 @Type:     any
		 @Return:   Updated data
		 *
		 */

		async updateLogData(value:any, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ log_data: value }, uuid, 'log_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LogData
		
		// Begin column LogFrom

		/*
		 * Retrieves the value of the column log_from from the database
		 *
		 @Column:   log_from
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the log_from column values
		 *
		 */

		async getLogFrom(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['log_from']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column log_from from the database base on the filters specified
		 *
		 @Column:   log_from
		 @Required: false
		 @Type:     string
		 @Return:   string log_from column values, depending on the filters
		 *
		 */

		async getLogFromWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['log_from'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column log_from in the database
		 *
		 @Column:   log_from
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateLogFrom(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ log_from: value }, uuid, 'log_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LogFrom
		
		// Begin column LogId

		/*
		 * Retrieves the value of the column log_id from the database
		 *
		 @Column:   log_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the log_id column values
		 *
		 */

		async getLogId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['log_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column log_id from the database base on the filters specified
		 *
		 @Column:   log_id
		 @Required: false
		 @Type:     number
		 @Return:   number log_id column values, depending on the filters
		 *
		 */

		async getLogIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['log_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column log_id in the database
		 *
		 @Column:   log_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateLogId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ log_id: value }, uuid, 'log_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LogId
		
		// Begin column LogNftCreatedAt

		/*
		 * Retrieves the value of the column log_nft_created_at from the database
		 *
		 @Column:   log_nft_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the log_nft_created_at column values
		 *
		 */

		async getLogNftCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['log_nft_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column log_nft_created_at from the database base on the filters specified
		 *
		 @Column:   log_nft_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string log_nft_created_at column values, depending on the filters
		 *
		 */

		async getLogNftCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['log_nft_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column log_nft_created_at in the database
		 *
		 @Column:   log_nft_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateLogNftCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ log_nft_created_at: value }, uuid, 'log_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LogNftCreatedAt
		
		// Begin column LogTo

		/*
		 * Retrieves the value of the column log_to from the database
		 *
		 @Column:   log_to
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the log_to column values
		 *
		 */

		async getLogTo(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['log_to']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column log_to from the database base on the filters specified
		 *
		 @Column:   log_to
		 @Required: false
		 @Type:     string
		 @Return:   string log_to column values, depending on the filters
		 *
		 */

		async getLogToWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['log_to'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column log_to in the database
		 *
		 @Column:   log_to
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateLogTo(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ log_to: value }, uuid, 'log_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LogTo
		
		// Begin column LogTxnHash

		/*
		 * Retrieves the value of the column log_txn_hash from the database
		 *
		 @Column:   log_txn_hash
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the log_txn_hash column values
		 *
		 */

		async getLogTxnHash(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['log_txn_hash']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column log_txn_hash from the database base on the filters specified
		 *
		 @Column:   log_txn_hash
		 @Required: false
		 @Type:     string
		 @Return:   string log_txn_hash column values, depending on the filters
		 *
		 */

		async getLogTxnHashWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['log_txn_hash'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column log_txn_hash in the database
		 *
		 @Column:   log_txn_hash
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateLogTxnHash(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ log_txn_hash: value }, uuid, 'log_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LogTxnHash
		
		// Begin column LogType

		/*
		 * Retrieves the value of the column log_type from the database
		 *
		 @Column:   log_type
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the log_type column values
		 *
		 */

		async getLogType(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['log_type']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column log_type from the database base on the filters specified
		 *
		 @Column:   log_type
		 @Required: false
		 @Type:     string
		 @Return:   string log_type column values, depending on the filters
		 *
		 */

		async getLogTypeWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['log_type'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column log_type in the database
		 *
		 @Column:   log_type
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateLogType(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ log_type: value }, uuid, 'log_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LogType
		
		// Begin column LogUuid

		/*
		 * Retrieves the value of the column log_uuid from the database
		 *
		 @Column:   log_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the log_uuid column values
		 *
		 */

		async getLogUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['log_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column log_uuid from the database base on the filters specified
		 *
		 @Column:   log_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string log_uuid column values, depending on the filters
		 *
		 */

		async getLogUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['log_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column log_uuid in the database
		 *
		 @Column:   log_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateLogUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ log_uuid: value }, uuid, 'log_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LogUuid
		
		// Begin column NftId

		/*
		 * Retrieves the value of the column nft_id from the database
		 *
		 @Column:   nft_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_id column values
		 *
		 */

		async getNftId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_id from the database base on the filters specified
		 *
		 @Column:   nft_id
		 @Required: false
		 @Type:     number
		 @Return:   number nft_id column values, depending on the filters
		 *
		 */

		async getNftIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_id in the database
		 *
		 @Column:   nft_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_id: value }, uuid, 'log_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftId
		
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

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'log_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		

}

// End Class: NftLogsSupabaseCls