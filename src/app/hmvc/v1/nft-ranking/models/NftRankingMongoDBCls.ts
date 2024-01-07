import { Schema, model } from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";
import { MongoDBCollectionCls } from "../../../../../modules/base/MongoDBCollectionCls";

export class NftRankingMongoDBCls extends MongoDBCollectionCls {

  // NftRanking model object
  private NftRankingMongoDBModel: any;

  // NftRanking schema object
  private nftRankingSchema: any;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this keyword
    super();

    // Init model name
    this.modelName = 'NftRanking';

    // Define the Interface
    interface INftRanking {
      	_id : string;
		author_id : number;
		collection_id : number;
		fid : string;
		nft_id : number;
		nft_rank : number;
		nft_ranking_created_at : string;
		nft_ranking_d14d : number;
		nft_ranking_d21d : number;
		nft_ranking_d24hr : number;
		nft_ranking_d28 : number;
		nft_ranking_d7d : number;
		nft_ranking_floor_price : number;
		nft_ranking_id : number;
		nft_ranking_items : number;
		nft_ranking_owners : number;
		nft_ranking_updated_at : number;
		nft_ranking_uuid : string;
		nft_ranking_volume : number;
	
    }

    // Init nftRanking schema
    this.nftRankingSchema = new Schema<INftRanking>({
      	_id: {
         type: String,
         required: false,
         trim: true
		},
		author_id: {
         type: Number,
         required: false,
         trim: true
		},
		collection_id: {
         type: Number,
         required: false,
         trim: true
		},
		fid: {
         type: String,
         required: false,
         trim: true
		},
		nft_id: {
         type: Number,
         required: false,
         trim: true
		},
		nft_rank: {
         type: Number,
         required: false,
         trim: true
		},
		nft_ranking_created_at: {
         type: String,
         required: false,
         trim: true
		},
		nft_ranking_d14d: {
         type: Number,
         required: false,
         trim: true
		},
		nft_ranking_d21d: {
         type: Number,
         required: false,
         trim: true
		},
		nft_ranking_d24hr: {
         type: Number,
         required: false,
         trim: true
		},
		nft_ranking_d28: {
         type: Number,
         required: false,
         trim: true
		},
		nft_ranking_d7d: {
         type: Number,
         required: false,
         trim: true
		},
		nft_ranking_floor_price: {
         type: Number,
         required: false,
         trim: true
		},
		nft_ranking_id: {
         type: Number,
         required: false,
         trim: true
		},
		nft_ranking_items: {
         type: Number,
         required: false,
         trim: true
		},
		nft_ranking_owners: {
         type: Number,
         required: false,
         trim: true
		},
		nft_ranking_updated_at: {
         type: Number,
         required: false,
         trim: true
		},
		nft_ranking_uuid: {
         type: String,
         required: false,
         trim: true
		},
		nft_ranking_volume: {
         type: Number,
         required: false,
         trim: true
		},
	
    }, {
      timestamps: true
    });

    // Define nftRanking auto increment key

    this.nftRankingSchema.plugin(autoIncrement, { model: this.modelName, field: '_id' });

    this.NftRankingMongoDBModel = model<INftRanking>(this.modelName, this.nftRankingSchema);

    // Create a change stream cursor that listens for changes to the collection
    this.NftRankingMongoDBModel.watch();


    // Explicitly create the collection before using it
    // so the collection is capped.
    this.NftRankingMongoDBModel.createCollection();

    this.setupModel(this.NftRankingMongoDBModel);

  }

  
		// Begin column AuthorId

		/*
		 * Retrieves the value of the column author_id from the database
		 *
		 @Column:   author_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the author_id column values
		 *
		 */

		async getAuthorId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['author_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column author_id from the database base on the filters specified
		 *
		 @Column:   author_id
		 @Required: false
		 @Type:     number
		 @Return:   number author_id column values, depending on the filters
		 *
		 */

		async getAuthorIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['author_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column author_id in the database
		 *
		 @Column:   author_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateAuthorId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ author_id: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuthorId
		
		// Begin column CollectionId

		/*
		 * Retrieves the value of the column collection_id from the database
		 *
		 @Column:   collection_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the collection_id column values
		 *
		 */

		async getCollectionId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['collection_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column collection_id from the database base on the filters specified
		 *
		 @Column:   collection_id
		 @Required: false
		 @Type:     number
		 @Return:   number collection_id column values, depending on the filters
		 *
		 */

		async getCollectionIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['collection_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column collection_id in the database
		 *
		 @Column:   collection_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateCollectionId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ collection_id: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CollectionId
		
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		
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

		        const result: any = this.updateMatchingRows({ nft_id: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftId
		
		// Begin column NftRank

		/*
		 * Retrieves the value of the column nft_rank from the database
		 *
		 @Column:   nft_rank
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_rank column values
		 *
		 */

		async getNftRank(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_rank']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_rank from the database base on the filters specified
		 *
		 @Column:   nft_rank
		 @Required: false
		 @Type:     number
		 @Return:   number nft_rank column values, depending on the filters
		 *
		 */

		async getNftRankWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_rank'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_rank in the database
		 *
		 @Column:   nft_rank
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftRank(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_rank: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRank
		
		// Begin column NftRankingCreatedAt

		/*
		 * Retrieves the value of the column nft_ranking_created_at from the database
		 *
		 @Column:   nft_ranking_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_ranking_created_at column values
		 *
		 */

		async getNftRankingCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ranking_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ranking_created_at from the database base on the filters specified
		 *
		 @Column:   nft_ranking_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string nft_ranking_created_at column values, depending on the filters
		 *
		 */

		async getNftRankingCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ranking_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ranking_created_at in the database
		 *
		 @Column:   nft_ranking_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftRankingCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ranking_created_at: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRankingCreatedAt
		
		// Begin column NftRankingD14d

		/*
		 * Retrieves the value of the column nft_ranking_d14d from the database
		 *
		 @Column:   nft_ranking_d14d
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_ranking_d14d column values
		 *
		 */

		async getNftRankingD14d(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ranking_d14d']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ranking_d14d from the database base on the filters specified
		 *
		 @Column:   nft_ranking_d14d
		 @Required: false
		 @Type:     number
		 @Return:   number nft_ranking_d14d column values, depending on the filters
		 *
		 */

		async getNftRankingD14dWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ranking_d14d'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ranking_d14d in the database
		 *
		 @Column:   nft_ranking_d14d
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftRankingD14d(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ranking_d14d: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRankingD14d
		
		// Begin column NftRankingD21d

		/*
		 * Retrieves the value of the column nft_ranking_d21d from the database
		 *
		 @Column:   nft_ranking_d21d
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_ranking_d21d column values
		 *
		 */

		async getNftRankingD21d(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ranking_d21d']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ranking_d21d from the database base on the filters specified
		 *
		 @Column:   nft_ranking_d21d
		 @Required: false
		 @Type:     number
		 @Return:   number nft_ranking_d21d column values, depending on the filters
		 *
		 */

		async getNftRankingD21dWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ranking_d21d'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ranking_d21d in the database
		 *
		 @Column:   nft_ranking_d21d
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftRankingD21d(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ranking_d21d: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRankingD21d
		
		// Begin column NftRankingD24hr

		/*
		 * Retrieves the value of the column nft_ranking_d24hr from the database
		 *
		 @Column:   nft_ranking_d24hr
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_ranking_d24hr column values
		 *
		 */

		async getNftRankingD24hr(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ranking_d24hr']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ranking_d24hr from the database base on the filters specified
		 *
		 @Column:   nft_ranking_d24hr
		 @Required: false
		 @Type:     number
		 @Return:   number nft_ranking_d24hr column values, depending on the filters
		 *
		 */

		async getNftRankingD24hrWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ranking_d24hr'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ranking_d24hr in the database
		 *
		 @Column:   nft_ranking_d24hr
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftRankingD24hr(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ranking_d24hr: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRankingD24hr
		
		// Begin column NftRankingD28

		/*
		 * Retrieves the value of the column nft_ranking_d28 from the database
		 *
		 @Column:   nft_ranking_d28
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_ranking_d28 column values
		 *
		 */

		async getNftRankingD28(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ranking_d28']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ranking_d28 from the database base on the filters specified
		 *
		 @Column:   nft_ranking_d28
		 @Required: false
		 @Type:     number
		 @Return:   number nft_ranking_d28 column values, depending on the filters
		 *
		 */

		async getNftRankingD28WithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ranking_d28'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ranking_d28 in the database
		 *
		 @Column:   nft_ranking_d28
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftRankingD28(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ranking_d28: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRankingD28
		
		// Begin column NftRankingD7d

		/*
		 * Retrieves the value of the column nft_ranking_d7d from the database
		 *
		 @Column:   nft_ranking_d7d
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_ranking_d7d column values
		 *
		 */

		async getNftRankingD7d(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ranking_d7d']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ranking_d7d from the database base on the filters specified
		 *
		 @Column:   nft_ranking_d7d
		 @Required: false
		 @Type:     number
		 @Return:   number nft_ranking_d7d column values, depending on the filters
		 *
		 */

		async getNftRankingD7dWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ranking_d7d'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ranking_d7d in the database
		 *
		 @Column:   nft_ranking_d7d
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftRankingD7d(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ranking_d7d: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRankingD7d
		
		// Begin column NftRankingFloorPrice

		/*
		 * Retrieves the value of the column nft_ranking_floor_price from the database
		 *
		 @Column:   nft_ranking_floor_price
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_ranking_floor_price column values
		 *
		 */

		async getNftRankingFloorPrice(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ranking_floor_price']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ranking_floor_price from the database base on the filters specified
		 *
		 @Column:   nft_ranking_floor_price
		 @Required: false
		 @Type:     number
		 @Return:   number nft_ranking_floor_price column values, depending on the filters
		 *
		 */

		async getNftRankingFloorPriceWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ranking_floor_price'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ranking_floor_price in the database
		 *
		 @Column:   nft_ranking_floor_price
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftRankingFloorPrice(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ranking_floor_price: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRankingFloorPrice
		
		// Begin column NftRankingId

		/*
		 * Retrieves the value of the column nft_ranking_id from the database
		 *
		 @Column:   nft_ranking_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_ranking_id column values
		 *
		 */

		async getNftRankingId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ranking_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ranking_id from the database base on the filters specified
		 *
		 @Column:   nft_ranking_id
		 @Required: false
		 @Type:     number
		 @Return:   number nft_ranking_id column values, depending on the filters
		 *
		 */

		async getNftRankingIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ranking_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ranking_id in the database
		 *
		 @Column:   nft_ranking_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftRankingId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ranking_id: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRankingId
		
		// Begin column NftRankingItems

		/*
		 * Retrieves the value of the column nft_ranking_items from the database
		 *
		 @Column:   nft_ranking_items
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_ranking_items column values
		 *
		 */

		async getNftRankingItems(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ranking_items']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ranking_items from the database base on the filters specified
		 *
		 @Column:   nft_ranking_items
		 @Required: false
		 @Type:     number
		 @Return:   number nft_ranking_items column values, depending on the filters
		 *
		 */

		async getNftRankingItemsWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ranking_items'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ranking_items in the database
		 *
		 @Column:   nft_ranking_items
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftRankingItems(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ranking_items: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRankingItems
		
		// Begin column NftRankingOwners

		/*
		 * Retrieves the value of the column nft_ranking_owners from the database
		 *
		 @Column:   nft_ranking_owners
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_ranking_owners column values
		 *
		 */

		async getNftRankingOwners(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ranking_owners']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ranking_owners from the database base on the filters specified
		 *
		 @Column:   nft_ranking_owners
		 @Required: false
		 @Type:     number
		 @Return:   number nft_ranking_owners column values, depending on the filters
		 *
		 */

		async getNftRankingOwnersWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ranking_owners'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ranking_owners in the database
		 *
		 @Column:   nft_ranking_owners
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftRankingOwners(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ranking_owners: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRankingOwners
		
		// Begin column NftRankingUpdatedAt

		/*
		 * Retrieves the value of the column nft_ranking_updated_at from the database
		 *
		 @Column:   nft_ranking_updated_at
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_ranking_updated_at column values
		 *
		 */

		async getNftRankingUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ranking_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ranking_updated_at from the database base on the filters specified
		 *
		 @Column:   nft_ranking_updated_at
		 @Required: false
		 @Type:     number
		 @Return:   number nft_ranking_updated_at column values, depending on the filters
		 *
		 */

		async getNftRankingUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ranking_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ranking_updated_at in the database
		 *
		 @Column:   nft_ranking_updated_at
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftRankingUpdatedAt(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ranking_updated_at: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRankingUpdatedAt
		
		// Begin column NftRankingUuid

		/*
		 * Retrieves the value of the column nft_ranking_uuid from the database
		 *
		 @Column:   nft_ranking_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the nft_ranking_uuid column values
		 *
		 */

		async getNftRankingUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ranking_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ranking_uuid from the database base on the filters specified
		 *
		 @Column:   nft_ranking_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string nft_ranking_uuid column values, depending on the filters
		 *
		 */

		async getNftRankingUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ranking_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ranking_uuid in the database
		 *
		 @Column:   nft_ranking_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateNftRankingUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ranking_uuid: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRankingUuid
		
		// Begin column NftRankingVolume

		/*
		 * Retrieves the value of the column nft_ranking_volume from the database
		 *
		 @Column:   nft_ranking_volume
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the nft_ranking_volume column values
		 *
		 */

		async getNftRankingVolume(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['nft_ranking_volume']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column nft_ranking_volume from the database base on the filters specified
		 *
		 @Column:   nft_ranking_volume
		 @Required: false
		 @Type:     number
		 @Return:   number nft_ranking_volume column values, depending on the filters
		 *
		 */

		async getNftRankingVolumeWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['nft_ranking_volume'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column nft_ranking_volume in the database
		 *
		 @Column:   nft_ranking_volume
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateNftRankingVolume(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ nft_ranking_volume: value }, uuid, 'nft_ranking_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column NftRankingVolume
		

}

// End Class: NftRankingMongoDBCls