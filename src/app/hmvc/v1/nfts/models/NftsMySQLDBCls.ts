import { MySQLTableCls } from "../../../../../modules/base/MySQLTableCls";

export class NftsMySQLDBCls extends MySQLTableCls {

    // Table name for this model : Nfts
    private databaseTable: string = 'tbl_nfts';

    // Setup initial variables in the constructor
    constructor() {

        // Call the base class contructor first before using this
        super();

        // Initialize the the table name for this class
        this.tableName = this.databaseTable;

    }

    
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

		        const result: any = this.updateMatchingRows({ category_id: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CategoryId
		
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		
		// Begin column NftAddress

		/*
		 * Retrieves the value of the column nft_address from the database
		 *
		 @Column:   nft_address
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_address column values
		 *
		 */

		async getNftAddress(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_address']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_address from the database base on the filters specified
		 *
		 @Column:   nft_address
		 @Required: false
		 @Type:     string
		 @Return:   string nft_address column values, depending on the filters
		 *
		 */

		async getNftAddressWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_address'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_address in the database
		 *
		 @Column:   nft_address
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftAddress(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_address: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftAddress
		
		// Begin column NftAuctionMeta

		/*
		 * Retrieves the value of the column nft_auction_meta from the database
		 *
		 @Column:   nft_auction_meta
		 @Required: false
		 @Type:     any
		 @Return:   any value, probably all records with only the nft_auction_meta column values
		 *
		 */

		async getNftAuctionMeta(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_auction_meta']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_auction_meta from the database base on the filters specified
		 *
		 @Column:   nft_auction_meta
		 @Required: false
		 @Type:     any
		 @Return:   any nft_auction_meta column values, depending on the filters
		 *
		 */

		async getNftAuctionMetaWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_auction_meta'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_auction_meta in the database
		 *
		 @Column:   nft_auction_meta
		 @Required: false
		 @Type:     any
		 @Return:   Updated data
		 *
		 */

		async updateNftAuctionMeta(value:any, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_auction_meta: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftAuctionMeta
		
		// Begin column NftChains

		/*
		 * Retrieves the value of the column nft_chains from the database
		 *
		 @Column:   nft_chains
		 @Required: false
		 @Type:     any
		 @Return:   any value, probably all records with only the nft_chains column values
		 *
		 */

		async getNftChains(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_chains']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_chains from the database base on the filters specified
		 *
		 @Column:   nft_chains
		 @Required: false
		 @Type:     any
		 @Return:   any nft_chains column values, depending on the filters
		 *
		 */

		async getNftChainsWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_chains'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_chains in the database
		 *
		 @Column:   nft_chains
		 @Required: false
		 @Type:     any
		 @Return:   Updated data
		 *
		 */

		async updateNftChains(value:any, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_chains: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftChains
		
		// Begin column NftCollectionMeta

		/*
		 * Retrieves the value of the column nft_collection_meta from the database
		 *
		 @Column:   nft_collection_meta
		 @Required: false
		 @Type:     any
		 @Return:   any value, probably all records with only the nft_collection_meta column values
		 *
		 */

		async getNftCollectionMeta(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_collection_meta']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_collection_meta from the database base on the filters specified
		 *
		 @Column:   nft_collection_meta
		 @Required: false
		 @Type:     any
		 @Return:   any nft_collection_meta column values, depending on the filters
		 *
		 */

		async getNftCollectionMetaWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_collection_meta'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_collection_meta in the database
		 *
		 @Column:   nft_collection_meta
		 @Required: false
		 @Type:     any
		 @Return:   Updated data
		 *
		 */

		async updateNftCollectionMeta(value:any, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_collection_meta: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftCollectionMeta
		
		// Begin column NftCreatedAt

		/*
		 * Retrieves the value of the column nft_created_at from the database
		 *
		 @Column:   nft_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_created_at column values
		 *
		 */

		async getNftCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_created_at from the database base on the filters specified
		 *
		 @Column:   nft_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string nft_created_at column values, depending on the filters
		 *
		 */

		async getNftCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_created_at in the database
		 *
		 @Column:   nft_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_created_at: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftCreatedAt
		
		// Begin column NftDescription

		/*
		 * Retrieves the value of the column nft_description from the database
		 *
		 @Column:   nft_description
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_description column values
		 *
		 */

		async getNftDescription(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_description']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_description from the database base on the filters specified
		 *
		 @Column:   nft_description
		 @Required: false
		 @Type:     string
		 @Return:   string nft_description column values, depending on the filters
		 *
		 */

		async getNftDescriptionWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_description'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_description in the database
		 *
		 @Column:   nft_description
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftDescription(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_description: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftDescription
		
		// Begin column NftGallery

		/*
		 * Retrieves the value of the column nft_gallery from the database
		 *
		 @Column:   nft_gallery
		 @Required: false
		 @Type:     any
		 @Return:   any value, probably all records with only the nft_gallery column values
		 *
		 */

		async getNftGallery(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_gallery']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_gallery from the database base on the filters specified
		 *
		 @Column:   nft_gallery
		 @Required: false
		 @Type:     any
		 @Return:   any nft_gallery column values, depending on the filters
		 *
		 */

		async getNftGalleryWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_gallery'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_gallery in the database
		 *
		 @Column:   nft_gallery
		 @Required: false
		 @Type:     any
		 @Return:   Updated data
		 *
		 */

		async updateNftGallery(value:any, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_gallery: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftGallery
		
		// Begin column NftHash

		/*
		 * Retrieves the value of the column nft_hash from the database
		 *
		 @Column:   nft_hash
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_hash column values
		 *
		 */

		async getNftHash(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_hash']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_hash from the database base on the filters specified
		 *
		 @Column:   nft_hash
		 @Required: false
		 @Type:     string
		 @Return:   string nft_hash column values, depending on the filters
		 *
		 */

		async getNftHashWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_hash'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_hash in the database
		 *
		 @Column:   nft_hash
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftHash(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_hash: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftHash
		
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

		        const result: any = this.updateMatchingRows({ nft_id: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftId
		
		// Begin column NftInterfaceId

		/*
		 * Retrieves the value of the column nft_interface_id from the database
		 *
		 @Column:   nft_interface_id
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_interface_id column values
		 *
		 */

		async getNftInterfaceId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_interface_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_interface_id from the database base on the filters specified
		 *
		 @Column:   nft_interface_id
		 @Required: false
		 @Type:     string
		 @Return:   string nft_interface_id column values, depending on the filters
		 *
		 */

		async getNftInterfaceIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_interface_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_interface_id in the database
		 *
		 @Column:   nft_interface_id
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftInterfaceId(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_interface_id: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftInterfaceId
		
		// Begin column NftInterfaceType

		/*
		 * Retrieves the value of the column nft_interface_type from the database
		 *
		 @Column:   nft_interface_type
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_interface_type column values
		 *
		 */

		async getNftInterfaceType(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_interface_type']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_interface_type from the database base on the filters specified
		 *
		 @Column:   nft_interface_type
		 @Required: false
		 @Type:     string
		 @Return:   string nft_interface_type column values, depending on the filters
		 *
		 */

		async getNftInterfaceTypeWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_interface_type'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_interface_type in the database
		 *
		 @Column:   nft_interface_type
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftInterfaceType(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_interface_type: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftInterfaceType
		
		// Begin column NftIpfsId

		/*
		 * Retrieves the value of the column nft_ipfs_id from the database
		 *
		 @Column:   nft_ipfs_id
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_ipfs_id column values
		 *
		 */

		async getNftIpfsId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ipfs_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ipfs_id from the database base on the filters specified
		 *
		 @Column:   nft_ipfs_id
		 @Required: false
		 @Type:     string
		 @Return:   string nft_ipfs_id column values, depending on the filters
		 *
		 */

		async getNftIpfsIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ipfs_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ipfs_id in the database
		 *
		 @Column:   nft_ipfs_id
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftIpfsId(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ipfs_id: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftIpfsId
		
		// Begin column NftIsAuction

		/*
		 * Retrieves the value of the column nft_is_auction from the database
		 *
		 @Column:   nft_is_auction
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the nft_is_auction column values
		 *
		 */

		async getNftIsAuction(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_is_auction']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_is_auction from the database base on the filters specified
		 *
		 @Column:   nft_is_auction
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean nft_is_auction column values, depending on the filters
		 *
		 */

		async getNftIsAuctionWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_is_auction'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_is_auction in the database
		 *
		 @Column:   nft_is_auction
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateNftIsAuction(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_is_auction: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftIsAuction
		
		// Begin column NftLink

		/*
		 * Retrieves the value of the column nft_link from the database
		 *
		 @Column:   nft_link
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_link column values
		 *
		 */

		async getNftLink(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_link']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_link from the database base on the filters specified
		 *
		 @Column:   nft_link
		 @Required: false
		 @Type:     string
		 @Return:   string nft_link column values, depending on the filters
		 *
		 */

		async getNftLinkWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_link'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_link in the database
		 *
		 @Column:   nft_link
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftLink(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_link: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftLink
		
		// Begin column NftMeta

		/*
		 * Retrieves the value of the column nft_meta from the database
		 *
		 @Column:   nft_meta
		 @Required: false
		 @Type:     any
		 @Return:   any value, probably all records with only the nft_meta column values
		 *
		 */

		async getNftMeta(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_meta']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_meta from the database base on the filters specified
		 *
		 @Column:   nft_meta
		 @Required: false
		 @Type:     any
		 @Return:   any nft_meta column values, depending on the filters
		 *
		 */

		async getNftMetaWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_meta'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_meta in the database
		 *
		 @Column:   nft_meta
		 @Required: false
		 @Type:     any
		 @Return:   Updated data
		 *
		 */

		async updateNftMeta(value:any, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_meta: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftMeta
		
		// Begin column NftMinted

		/*
		 * Retrieves the value of the column nft_minted from the database
		 *
		 @Column:   nft_minted
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the nft_minted column values
		 *
		 */

		async getNftMinted(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_minted']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_minted from the database base on the filters specified
		 *
		 @Column:   nft_minted
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean nft_minted column values, depending on the filters
		 *
		 */

		async getNftMintedWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_minted'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_minted in the database
		 *
		 @Column:   nft_minted
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateNftMinted(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_minted: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftMinted
		
		// Begin column NftName

		/*
		 * Retrieves the value of the column nft_name from the database
		 *
		 @Column:   nft_name
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_name column values
		 *
		 */

		async getNftName(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_name']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_name from the database base on the filters specified
		 *
		 @Column:   nft_name
		 @Required: false
		 @Type:     string
		 @Return:   string nft_name column values, depending on the filters
		 *
		 */

		async getNftNameWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_name'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_name in the database
		 *
		 @Column:   nft_name
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftName(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_name: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftName
		
		// Begin column NftPreview

		/*
		 * Retrieves the value of the column nft_preview from the database
		 *
		 @Column:   nft_preview
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_preview column values
		 *
		 */

		async getNftPreview(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_preview']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_preview from the database base on the filters specified
		 *
		 @Column:   nft_preview
		 @Required: false
		 @Type:     string
		 @Return:   string nft_preview column values, depending on the filters
		 *
		 */

		async getNftPreviewWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_preview'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_preview in the database
		 *
		 @Column:   nft_preview
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftPreview(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_preview: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftPreview
		
		// Begin column NftPrice

		/*
		 * Retrieves the value of the column nft_price from the database
		 *
		 @Column:   nft_price
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_price column values
		 *
		 */

		async getNftPrice(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_price']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_price from the database base on the filters specified
		 *
		 @Column:   nft_price
		 @Required: false
		 @Type:     number
		 @Return:   number nft_price column values, depending on the filters
		 *
		 */

		async getNftPriceWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_price'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_price in the database
		 *
		 @Column:   nft_price
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftPrice(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_price: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftPrice
		
		// Begin column NftPricing

		/*
		 * Retrieves the value of the column nft_pricing from the database
		 *
		 @Column:   nft_pricing
		 @Required: false
		 @Type:     any
		 @Return:   any value, probably all records with only the nft_pricing column values
		 *
		 */

		async getNftPricing(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_pricing']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_pricing from the database base on the filters specified
		 *
		 @Column:   nft_pricing
		 @Required: false
		 @Type:     any
		 @Return:   any nft_pricing column values, depending on the filters
		 *
		 */

		async getNftPricingWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_pricing'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_pricing in the database
		 *
		 @Column:   nft_pricing
		 @Required: false
		 @Type:     any
		 @Return:   Updated data
		 *
		 */

		async updateNftPricing(value:any, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_pricing: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftPricing
		
		// Begin column NftProperties

		/*
		 * Retrieves the value of the column nft_properties from the database
		 *
		 @Column:   nft_properties
		 @Required: false
		 @Type:     any
		 @Return:   any value, probably all records with only the nft_properties column values
		 *
		 */

		async getNftProperties(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_properties']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_properties from the database base on the filters specified
		 *
		 @Column:   nft_properties
		 @Required: false
		 @Type:     any
		 @Return:   any nft_properties column values, depending on the filters
		 *
		 */

		async getNftPropertiesWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_properties'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_properties in the database
		 *
		 @Column:   nft_properties
		 @Required: false
		 @Type:     any
		 @Return:   Updated data
		 *
		 */

		async updateNftProperties(value:any, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_properties: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftProperties
		
		// Begin column NftRoyaltyAmount

		/*
		 * Retrieves the value of the column nft_royalty_amount from the database
		 *
		 @Column:   nft_royalty_amount
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_royalty_amount column values
		 *
		 */

		async getNftRoyaltyAmount(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_royalty_amount']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_royalty_amount from the database base on the filters specified
		 *
		 @Column:   nft_royalty_amount
		 @Required: false
		 @Type:     number
		 @Return:   number nft_royalty_amount column values, depending on the filters
		 *
		 */

		async getNftRoyaltyAmountWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_royalty_amount'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_royalty_amount in the database
		 *
		 @Column:   nft_royalty_amount
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftRoyaltyAmount(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_royalty_amount: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRoyaltyAmount
		
		// Begin column NftRoyaltyReceiver

		/*
		 * Retrieves the value of the column nft_royalty_receiver from the database
		 *
		 @Column:   nft_royalty_receiver
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_royalty_receiver column values
		 *
		 */

		async getNftRoyaltyReceiver(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_royalty_receiver']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_royalty_receiver from the database base on the filters specified
		 *
		 @Column:   nft_royalty_receiver
		 @Required: false
		 @Type:     string
		 @Return:   string nft_royalty_receiver column values, depending on the filters
		 *
		 */

		async getNftRoyaltyReceiverWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_royalty_receiver'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_royalty_receiver in the database
		 *
		 @Column:   nft_royalty_receiver
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftRoyaltyReceiver(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_royalty_receiver: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRoyaltyReceiver
		
		// Begin column NftSensitiveContent

		/*
		 * Retrieves the value of the column nft_sensitive_content from the database
		 *
		 @Column:   nft_sensitive_content
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the nft_sensitive_content column values
		 *
		 */

		async getNftSensitiveContent(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_sensitive_content']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_sensitive_content from the database base on the filters specified
		 *
		 @Column:   nft_sensitive_content
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean nft_sensitive_content column values, depending on the filters
		 *
		 */

		async getNftSensitiveContentWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_sensitive_content'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_sensitive_content in the database
		 *
		 @Column:   nft_sensitive_content
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateNftSensitiveContent(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_sensitive_content: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftSensitiveContent
		
		// Begin column NftSupply

		/*
		 * Retrieves the value of the column nft_supply from the database
		 *
		 @Column:   nft_supply
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_supply column values
		 *
		 */

		async getNftSupply(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_supply']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_supply from the database base on the filters specified
		 *
		 @Column:   nft_supply
		 @Required: false
		 @Type:     number
		 @Return:   number nft_supply column values, depending on the filters
		 *
		 */

		async getNftSupplyWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_supply'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_supply in the database
		 *
		 @Column:   nft_supply
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftSupply(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_supply: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftSupply
		
		// Begin column NftSupportRoyalties

		/*
		 * Retrieves the value of the column nft_support_royalties from the database
		 *
		 @Column:   nft_support_royalties
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the nft_support_royalties column values
		 *
		 */

		async getNftSupportRoyalties(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_support_royalties']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_support_royalties from the database base on the filters specified
		 *
		 @Column:   nft_support_royalties
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean nft_support_royalties column values, depending on the filters
		 *
		 */

		async getNftSupportRoyaltiesWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_support_royalties'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_support_royalties in the database
		 *
		 @Column:   nft_support_royalties
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateNftSupportRoyalties(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_support_royalties: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftSupportRoyalties
		
		// Begin column NftSymbol

		/*
		 * Retrieves the value of the column nft_symbol from the database
		 *
		 @Column:   nft_symbol
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_symbol column values
		 *
		 */

		async getNftSymbol(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_symbol']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_symbol from the database base on the filters specified
		 *
		 @Column:   nft_symbol
		 @Required: false
		 @Type:     string
		 @Return:   string nft_symbol column values, depending on the filters
		 *
		 */

		async getNftSymbolWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_symbol'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_symbol in the database
		 *
		 @Column:   nft_symbol
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftSymbol(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_symbol: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftSymbol
		
		// Begin column NftUnlockable

		/*
		 * Retrieves the value of the column nft_unlockable from the database
		 *
		 @Column:   nft_unlockable
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the nft_unlockable column values
		 *
		 */

		async getNftUnlockable(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_unlockable']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_unlockable from the database base on the filters specified
		 *
		 @Column:   nft_unlockable
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean nft_unlockable column values, depending on the filters
		 *
		 */

		async getNftUnlockableWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_unlockable'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_unlockable in the database
		 *
		 @Column:   nft_unlockable
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateNftUnlockable(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_unlockable: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftUnlockable
		
		// Begin column NftUpdatedAt

		/*
		 * Retrieves the value of the column nft_updated_at from the database
		 *
		 @Column:   nft_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_updated_at column values
		 *
		 */

		async getNftUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_updated_at from the database base on the filters specified
		 *
		 @Column:   nft_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string nft_updated_at column values, depending on the filters
		 *
		 */

		async getNftUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_updated_at in the database
		 *
		 @Column:   nft_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_updated_at: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftUpdatedAt
		
		// Begin column NftUuid

		/*
		 * Retrieves the value of the column nft_uuid from the database
		 *
		 @Column:   nft_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_uuid column values
		 *
		 */

		async getNftUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_uuid from the database base on the filters specified
		 *
		 @Column:   nft_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string nft_uuid column values, depending on the filters
		 *
		 */

		async getNftUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_uuid in the database
		 *
		 @Column:   nft_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_uuid: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftUuid
		
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

		        const result: any = this.updateMatchingRows({ token_creator: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column TokenCreator
		
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

		        const result: any = this.updateMatchingRows({ token_id: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column TokenId
		
		// Begin column TokenMinter

		/*
		 * Retrieves the value of the column token_minter from the database
		 *
		 @Column:   token_minter
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the token_minter column values
		 *
		 */

		async getTokenMinter(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['token_minter']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column token_minter from the database base on the filters specified
		 *
		 @Column:   token_minter
		 @Required: false
		 @Type:     string
		 @Return:   string token_minter column values, depending on the filters
		 *
		 */

		async getTokenMinterWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['token_minter'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column token_minter in the database
		 *
		 @Column:   token_minter
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateTokenMinter(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ token_minter: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column TokenMinter
		
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

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'nft_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		

}

// End Class: NftsMySQLDBCls