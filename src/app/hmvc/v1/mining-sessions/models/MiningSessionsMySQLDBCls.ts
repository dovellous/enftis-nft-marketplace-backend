import { MySQLTableCls } from "../../../../../modules/base/MySQLTableCls";

export class MiningSessionsMySQLDBCls extends MySQLTableCls {

    // Table name for this model : MiningSessions
    private databaseTable: string = 'tbl_mining_sessions';

    // Setup initial variables in the constructor
    constructor() {

        // Call the base class contructor first before using this
        super();

        // Initialize the the table name for this class
        this.tableName = this.databaseTable;

    }

    
		// Begin column ClientId

		/*
		 * Retrieves the value of the column client_id from the database
		 *
		 @Column:   client_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the client_id column values
		 *
		 */

		async getClientId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['client_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column client_id from the database base on the filters specified
		 *
		 @Column:   client_id
		 @Required: false
		 @Type:     number
		 @Return:   number client_id column values, depending on the filters
		 *
		 */

		async getClientIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['client_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column client_id in the database
		 *
		 @Column:   client_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateClientId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ client_id: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column ClientId
		
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		
		// Begin column MiningBaseRate

		/*
		 * Retrieves the value of the column mining_base_rate from the database
		 *
		 @Column:   mining_base_rate
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the mining_base_rate column values
		 *
		 */

		async getMiningBaseRate(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['mining_base_rate']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column mining_base_rate from the database base on the filters specified
		 *
		 @Column:   mining_base_rate
		 @Required: false
		 @Type:     number
		 @Return:   number mining_base_rate column values, depending on the filters
		 *
		 */

		async getMiningBaseRateWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['mining_base_rate'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column mining_base_rate in the database
		 *
		 @Column:   mining_base_rate
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateMiningBaseRate(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ mining_base_rate: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MiningBaseRate
		
		// Begin column MiningBooster

		/*
		 * Retrieves the value of the column mining_booster from the database
		 *
		 @Column:   mining_booster
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the mining_booster column values
		 *
		 */

		async getMiningBooster(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['mining_booster']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column mining_booster from the database base on the filters specified
		 *
		 @Column:   mining_booster
		 @Required: false
		 @Type:     number
		 @Return:   number mining_booster column values, depending on the filters
		 *
		 */

		async getMiningBoosterWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['mining_booster'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column mining_booster in the database
		 *
		 @Column:   mining_booster
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateMiningBooster(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ mining_booster: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MiningBooster
		
		// Begin column MiningChainId

		/*
		 * Retrieves the value of the column mining_chain_id from the database
		 *
		 @Column:   mining_chain_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the mining_chain_id column values
		 *
		 */

		async getMiningChainId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['mining_chain_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column mining_chain_id from the database base on the filters specified
		 *
		 @Column:   mining_chain_id
		 @Required: false
		 @Type:     number
		 @Return:   number mining_chain_id column values, depending on the filters
		 *
		 */

		async getMiningChainIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['mining_chain_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column mining_chain_id in the database
		 *
		 @Column:   mining_chain_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateMiningChainId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ mining_chain_id: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MiningChainId
		
		// Begin column MiningClaimHash

		/*
		 * Retrieves the value of the column mining_claim_hash from the database
		 *
		 @Column:   mining_claim_hash
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the mining_claim_hash column values
		 *
		 */

		async getMiningClaimHash(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['mining_claim_hash']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column mining_claim_hash from the database base on the filters specified
		 *
		 @Column:   mining_claim_hash
		 @Required: false
		 @Type:     string
		 @Return:   string mining_claim_hash column values, depending on the filters
		 *
		 */

		async getMiningClaimHashWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['mining_claim_hash'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column mining_claim_hash in the database
		 *
		 @Column:   mining_claim_hash
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateMiningClaimHash(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ mining_claim_hash: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MiningClaimHash
		
		// Begin column MiningClaimed

		/*
		 * Retrieves the value of the column mining_claimed from the database
		 *
		 @Column:   mining_claimed
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the mining_claimed column values
		 *
		 */

		async getMiningClaimed(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['mining_claimed']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column mining_claimed from the database base on the filters specified
		 *
		 @Column:   mining_claimed
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean mining_claimed column values, depending on the filters
		 *
		 */

		async getMiningClaimedWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['mining_claimed'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column mining_claimed in the database
		 *
		 @Column:   mining_claimed
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateMiningClaimed(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ mining_claimed: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MiningClaimed
		
		// Begin column MiningEndedAt

		/*
		 * Retrieves the value of the column mining_ended_at from the database
		 *
		 @Column:   mining_ended_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the mining_ended_at column values
		 *
		 */

		async getMiningEndedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['mining_ended_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column mining_ended_at from the database base on the filters specified
		 *
		 @Column:   mining_ended_at
		 @Required: false
		 @Type:     string
		 @Return:   string mining_ended_at column values, depending on the filters
		 *
		 */

		async getMiningEndedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['mining_ended_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column mining_ended_at in the database
		 *
		 @Column:   mining_ended_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateMiningEndedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ mining_ended_at: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MiningEndedAt
		
		// Begin column MiningId

		/*
		 * Retrieves the value of the column mining_id from the database
		 *
		 @Column:   mining_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the mining_id column values
		 *
		 */

		async getMiningId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['mining_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column mining_id from the database base on the filters specified
		 *
		 @Column:   mining_id
		 @Required: false
		 @Type:     number
		 @Return:   number mining_id column values, depending on the filters
		 *
		 */

		async getMiningIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['mining_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column mining_id in the database
		 *
		 @Column:   mining_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateMiningId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ mining_id: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MiningId
		
		// Begin column MiningRate

		/*
		 * Retrieves the value of the column mining_rate from the database
		 *
		 @Column:   mining_rate
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the mining_rate column values
		 *
		 */

		async getMiningRate(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['mining_rate']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column mining_rate from the database base on the filters specified
		 *
		 @Column:   mining_rate
		 @Required: false
		 @Type:     number
		 @Return:   number mining_rate column values, depending on the filters
		 *
		 */

		async getMiningRateWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['mining_rate'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column mining_rate in the database
		 *
		 @Column:   mining_rate
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateMiningRate(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ mining_rate: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MiningRate
		
		// Begin column MiningStartedAt

		/*
		 * Retrieves the value of the column mining_started_at from the database
		 *
		 @Column:   mining_started_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the mining_started_at column values
		 *
		 */

		async getMiningStartedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['mining_started_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column mining_started_at from the database base on the filters specified
		 *
		 @Column:   mining_started_at
		 @Required: false
		 @Type:     string
		 @Return:   string mining_started_at column values, depending on the filters
		 *
		 */

		async getMiningStartedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['mining_started_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column mining_started_at in the database
		 *
		 @Column:   mining_started_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateMiningStartedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ mining_started_at: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MiningStartedAt
		
		// Begin column MiningUuid

		/*
		 * Retrieves the value of the column mining_uuid from the database
		 *
		 @Column:   mining_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the mining_uuid column values
		 *
		 */

		async getMiningUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['mining_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column mining_uuid from the database base on the filters specified
		 *
		 @Column:   mining_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string mining_uuid column values, depending on the filters
		 *
		 */

		async getMiningUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['mining_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column mining_uuid in the database
		 *
		 @Column:   mining_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateMiningUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ mining_uuid: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MiningUuid
		
		// Begin column MiningWalletAddress

		/*
		 * Retrieves the value of the column mining_wallet_address from the database
		 *
		 @Column:   mining_wallet_address
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the mining_wallet_address column values
		 *
		 */

		async getMiningWalletAddress(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['mining_wallet_address']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column mining_wallet_address from the database base on the filters specified
		 *
		 @Column:   mining_wallet_address
		 @Required: false
		 @Type:     string
		 @Return:   string mining_wallet_address column values, depending on the filters
		 *
		 */

		async getMiningWalletAddressWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['mining_wallet_address'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column mining_wallet_address in the database
		 *
		 @Column:   mining_wallet_address
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateMiningWalletAddress(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ mining_wallet_address: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column MiningWalletAddress
		
		// Begin column SessionId

		/*
		 * Retrieves the value of the column session_id from the database
		 *
		 @Column:   session_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the session_id column values
		 *
		 */

		async getSessionId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['session_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column session_id from the database base on the filters specified
		 *
		 @Column:   session_id
		 @Required: false
		 @Type:     number
		 @Return:   number session_id column values, depending on the filters
		 *
		 */

		async getSessionIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['session_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column session_id in the database
		 *
		 @Column:   session_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateSessionId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ session_id: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column SessionId
		
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

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'mining_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		

}

// End Class: MiningSessionsMySQLDBCls