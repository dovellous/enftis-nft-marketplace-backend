import { MySQLTableCls } from "../../../../../modules/base/MySQLTableCls";

export class AuthorsMySQLDBCls extends MySQLTableCls {

    // Table name for this model : Authors
    private databaseTable: string = 'tbl_authors';

    // Setup initial variables in the constructor
    constructor() {

        // Call the base class contructor first before using this
        super();

        // Initialize the the table name for this class
        this.tableName = this.databaseTable;

    }

    
		// Begin column AuthorCreatedAt

		/*
		 * Retrieves the value of the column author_created_at from the database
		 *
		 @Column:   author_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the author_created_at column values
		 *
		 */

		async getAuthorCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['author_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column author_created_at from the database base on the filters specified
		 *
		 @Column:   author_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string author_created_at column values, depending on the filters
		 *
		 */

		async getAuthorCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['author_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column author_created_at in the database
		 *
		 @Column:   author_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateAuthorCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ author_created_at: value }, uuid, 'author_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuthorCreatedAt
		
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

		        const result: any = this.updateMatchingRows({ author_id: value }, uuid, 'author_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuthorId
		
		// Begin column AuthorIsActive

		/*
		 * Retrieves the value of the column author_is_active from the database
		 *
		 @Column:   author_is_active
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the author_is_active column values
		 *
		 */

		async getAuthorIsActive(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['author_is_active']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column author_is_active from the database base on the filters specified
		 *
		 @Column:   author_is_active
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean author_is_active column values, depending on the filters
		 *
		 */

		async getAuthorIsActiveWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['author_is_active'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column author_is_active in the database
		 *
		 @Column:   author_is_active
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateAuthorIsActive(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ author_is_active: value }, uuid, 'author_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuthorIsActive
		
		// Begin column AuthorIsVerified

		/*
		 * Retrieves the value of the column author_is_verified from the database
		 *
		 @Column:   author_is_verified
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the author_is_verified column values
		 *
		 */

		async getAuthorIsVerified(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['author_is_verified']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column author_is_verified from the database base on the filters specified
		 *
		 @Column:   author_is_verified
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean author_is_verified column values, depending on the filters
		 *
		 */

		async getAuthorIsVerifiedWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['author_is_verified'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column author_is_verified in the database
		 *
		 @Column:   author_is_verified
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateAuthorIsVerified(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ author_is_verified: value }, uuid, 'author_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuthorIsVerified
		
		// Begin column AuthorRating

		/*
		 * Retrieves the value of the column author_rating from the database
		 *
		 @Column:   author_rating
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the author_rating column values
		 *
		 */

		async getAuthorRating(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['author_rating']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column author_rating from the database base on the filters specified
		 *
		 @Column:   author_rating
		 @Required: false
		 @Type:     number
		 @Return:   number author_rating column values, depending on the filters
		 *
		 */

		async getAuthorRatingWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['author_rating'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column author_rating in the database
		 *
		 @Column:   author_rating
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateAuthorRating(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ author_rating: value }, uuid, 'author_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuthorRating
		
		// Begin column AuthorSoldItems

		/*
		 * Retrieves the value of the column author_sold_items from the database
		 *
		 @Column:   author_sold_items
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the author_sold_items column values
		 *
		 */

		async getAuthorSoldItems(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['author_sold_items']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column author_sold_items from the database base on the filters specified
		 *
		 @Column:   author_sold_items
		 @Required: false
		 @Type:     number
		 @Return:   number author_sold_items column values, depending on the filters
		 *
		 */

		async getAuthorSoldItemsWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['author_sold_items'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column author_sold_items in the database
		 *
		 @Column:   author_sold_items
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateAuthorSoldItems(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ author_sold_items: value }, uuid, 'author_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuthorSoldItems
		
		// Begin column AuthorSoldValue

		/*
		 * Retrieves the value of the column author_sold_value from the database
		 *
		 @Column:   author_sold_value
		 @Required: false
		 @Type:     any
		 @Return:   any value, probably all records with only the author_sold_value column values
		 *
		 */

		async getAuthorSoldValue(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['author_sold_value']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column author_sold_value from the database base on the filters specified
		 *
		 @Column:   author_sold_value
		 @Required: false
		 @Type:     any
		 @Return:   any author_sold_value column values, depending on the filters
		 *
		 */

		async getAuthorSoldValueWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['author_sold_value'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column author_sold_value in the database
		 *
		 @Column:   author_sold_value
		 @Required: false
		 @Type:     any
		 @Return:   Updated data
		 *
		 */

		async updateAuthorSoldValue(value:any, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ author_sold_value: value }, uuid, 'author_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuthorSoldValue
		
		// Begin column AuthorUpdatedAt

		/*
		 * Retrieves the value of the column author_updated_at from the database
		 *
		 @Column:   author_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the author_updated_at column values
		 *
		 */

		async getAuthorUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['author_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column author_updated_at from the database base on the filters specified
		 *
		 @Column:   author_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string author_updated_at column values, depending on the filters
		 *
		 */

		async getAuthorUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['author_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column author_updated_at in the database
		 *
		 @Column:   author_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateAuthorUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ author_updated_at: value }, uuid, 'author_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuthorUpdatedAt
		
		// Begin column AuthorUuid

		/*
		 * Retrieves the value of the column author_uuid from the database
		 *
		 @Column:   author_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the author_uuid column values
		 *
		 */

		async getAuthorUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['author_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column author_uuid from the database base on the filters specified
		 *
		 @Column:   author_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string author_uuid column values, depending on the filters
		 *
		 */

		async getAuthorUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['author_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column author_uuid in the database
		 *
		 @Column:   author_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateAuthorUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ author_uuid: value }, uuid, 'author_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column AuthorUuid
		
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

		        const result: any = this.updateMatchingRows({ category_id: value }, uuid, 'author_uuid');

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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'author_uuid');

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

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'author_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		

}

// End Class: AuthorsMySQLDBCls