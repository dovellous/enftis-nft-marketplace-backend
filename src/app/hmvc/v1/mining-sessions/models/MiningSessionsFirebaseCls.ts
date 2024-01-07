import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class MiningSessionsObjCls {

	client_id: number;
	fid: string;
	mining_base_rate: number;
	mining_booster: number;
	mining_chain_id: number;
	mining_claim_hash: string;
	mining_claimed: boolean;
	mining_ended_at: string;
	mining_id: number;
	mining_rate: number;
	mining_started_at: string;
	mining_uuid: string;
	mining_wallet_address: string;
	session_id: number;
	user_id: number;
 
  constructor(
	_client_id: number, 
	_fid: string, 
	_mining_base_rate: number, 
	_mining_booster: number, 
	_mining_chain_id: number, 
	_mining_claim_hash: string, 
	_mining_claimed: boolean, 
	_mining_ended_at: string, 
	_mining_id: number, 
	_mining_rate: number, 
	_mining_started_at: string, 
	_mining_uuid: string, 
	_mining_wallet_address: string, 
	_session_id: number, 
	_user_id: number
  ) {
	this.client_id = _client_id;
	this.fid = _fid;
	this.mining_base_rate = _mining_base_rate;
	this.mining_booster = _mining_booster;
	this.mining_chain_id = _mining_chain_id;
	this.mining_claim_hash = _mining_claim_hash;
	this.mining_claimed = _mining_claimed;
	this.mining_ended_at = _mining_ended_at;
	this.mining_id = _mining_id;
	this.mining_rate = _mining_rate;
	this.mining_started_at = _mining_started_at;
	this.mining_uuid = _mining_uuid;
	this.mining_wallet_address = _mining_wallet_address;
	this.session_id = _session_id;
	this.user_id = _user_id;
  }
  
  toString() {
    return `
		client_id='${this.client_id}'; 
		fid='${this.fid}'; 
		mining_base_rate='${this.mining_base_rate}'; 
		mining_booster='${this.mining_booster}'; 
		mining_chain_id='${this.mining_chain_id}'; 
		mining_claim_hash='${this.mining_claim_hash}'; 
		mining_claimed='${this.mining_claimed}'; 
		mining_ended_at='${this.mining_ended_at}'; 
		mining_id='${this.mining_id}'; 
		mining_rate='${this.mining_rate}'; 
		mining_started_at='${this.mining_started_at}'; 
		mining_uuid='${this.mining_uuid}'; 
		mining_wallet_address='${this.mining_wallet_address}'; 
		session_id='${this.session_id}'; 
		user_id='${this.user_id}'; `;
  }
}

// Firestore data converter
const miningSessionsConverter = {
  toFirestore: (miningSessionsData: MiningSessionsObjCls): DocumentData => {
    return {
		client_id: miningSessionsData.client_id,
		fid: miningSessionsData.fid,
		mining_base_rate: miningSessionsData.mining_base_rate,
		mining_booster: miningSessionsData.mining_booster,
		mining_chain_id: miningSessionsData.mining_chain_id,
		mining_claim_hash: miningSessionsData.mining_claim_hash,
		mining_claimed: miningSessionsData.mining_claimed,
		mining_ended_at: miningSessionsData.mining_ended_at,
		mining_id: miningSessionsData.mining_id,
		mining_rate: miningSessionsData.mining_rate,
		mining_started_at: miningSessionsData.mining_started_at,
		mining_uuid: miningSessionsData.mining_uuid,
		mining_wallet_address: miningSessionsData.mining_wallet_address,
		session_id: miningSessionsData.session_id,
		user_id: miningSessionsData.user_id,
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new MiningSessionsObjCls(
		data.client_id, 
		data.fid, 
		data.mining_base_rate, 
		data.mining_booster, 
		data.mining_chain_id, 
		data.mining_claim_hash, 
		data.mining_claimed, 
		data.mining_ended_at, 
		data.mining_id, 
		data.mining_rate, 
		data.mining_started_at, 
		data.mining_uuid, 
		data.mining_wallet_address, 
		data.session_id, 
		data.user_id
    );
  }
};

// Begin Class: MiningSessionsFirebaseCls

export class MiningSessionsFirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : MiningSessions
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = 'MiningSessions';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, miningSessionsConverter);

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

// End Class: MiningSessionsFirebaseCls