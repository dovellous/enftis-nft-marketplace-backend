import { DbResult, DbResultErr, SupabaseTableCls } from "../../../../../modules/base";

export class CategoriesSupabaseCls extends SupabaseTableCls {

  // Table name  for this model : ____TBL_NAME____
  private databaseTable: string = 'tbl_categories';

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Initialize the the table name for this class
    this.tableName = this.databaseTable;

  }

  
		// Begin column CategoryCreatedAt

		/*
		 * Retrieves the value of the column category_created_at from the database
		 *
		 @Column:   category_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the category_created_at column values
		 *
		 */

		async getCategoryCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['category_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column category_created_at from the database base on the filters specified
		 *
		 @Column:   category_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string category_created_at column values, depending on the filters
		 *
		 */

		async getCategoryCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['category_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column category_created_at in the database
		 *
		 @Column:   category_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateCategoryCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ category_created_at: value }, uuid, 'category_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CategoryCreatedAt
		
		// Begin column CategoryIcon

		/*
		 * Retrieves the value of the column category_icon from the database
		 *
		 @Column:   category_icon
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the category_icon column values
		 *
		 */

		async getCategoryIcon(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['category_icon']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column category_icon from the database base on the filters specified
		 *
		 @Column:   category_icon
		 @Required: false
		 @Type:     string
		 @Return:   string category_icon column values, depending on the filters
		 *
		 */

		async getCategoryIconWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['category_icon'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column category_icon in the database
		 *
		 @Column:   category_icon
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateCategoryIcon(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ category_icon: value }, uuid, 'category_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CategoryIcon
		
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

		        const result: any = this.updateMatchingRows({ category_id: value }, uuid, 'category_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CategoryId
		
		// Begin column CategoryIsActive

		/*
		 * Retrieves the value of the column category_is_active from the database
		 *
		 @Column:   category_is_active
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the category_is_active column values
		 *
		 */

		async getCategoryIsActive(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['category_is_active']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column category_is_active from the database base on the filters specified
		 *
		 @Column:   category_is_active
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean category_is_active column values, depending on the filters
		 *
		 */

		async getCategoryIsActiveWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['category_is_active'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column category_is_active in the database
		 *
		 @Column:   category_is_active
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateCategoryIsActive(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ category_is_active: value }, uuid, 'category_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CategoryIsActive
		
		// Begin column CategoryName

		/*
		 * Retrieves the value of the column category_name from the database
		 *
		 @Column:   category_name
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the category_name column values
		 *
		 */

		async getCategoryName(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['category_name']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column category_name from the database base on the filters specified
		 *
		 @Column:   category_name
		 @Required: false
		 @Type:     string
		 @Return:   string category_name column values, depending on the filters
		 *
		 */

		async getCategoryNameWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['category_name'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column category_name in the database
		 *
		 @Column:   category_name
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateCategoryName(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ category_name: value }, uuid, 'category_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CategoryName
		
		// Begin column CategoryParentId

		/*
		 * Retrieves the value of the column category_parent_id from the database
		 *
		 @Column:   category_parent_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the category_parent_id column values
		 *
		 */

		async getCategoryParentId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['category_parent_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column category_parent_id from the database base on the filters specified
		 *
		 @Column:   category_parent_id
		 @Required: false
		 @Type:     number
		 @Return:   number category_parent_id column values, depending on the filters
		 *
		 */

		async getCategoryParentIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['category_parent_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column category_parent_id in the database
		 *
		 @Column:   category_parent_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateCategoryParentId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ category_parent_id: value }, uuid, 'category_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CategoryParentId
		
		// Begin column CategorySlug

		/*
		 * Retrieves the value of the column category_slug from the database
		 *
		 @Column:   category_slug
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the category_slug column values
		 *
		 */

		async getCategorySlug(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['category_slug']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column category_slug from the database base on the filters specified
		 *
		 @Column:   category_slug
		 @Required: false
		 @Type:     string
		 @Return:   string category_slug column values, depending on the filters
		 *
		 */

		async getCategorySlugWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['category_slug'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column category_slug in the database
		 *
		 @Column:   category_slug
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateCategorySlug(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ category_slug: value }, uuid, 'category_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CategorySlug
		
		// Begin column CategoryUpdatedAt

		/*
		 * Retrieves the value of the column category_updated_at from the database
		 *
		 @Column:   category_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the category_updated_at column values
		 *
		 */

		async getCategoryUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['category_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column category_updated_at from the database base on the filters specified
		 *
		 @Column:   category_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string category_updated_at column values, depending on the filters
		 *
		 */

		async getCategoryUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['category_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column category_updated_at in the database
		 *
		 @Column:   category_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateCategoryUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ category_updated_at: value }, uuid, 'category_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CategoryUpdatedAt
		
		// Begin column CategoryUuid

		/*
		 * Retrieves the value of the column category_uuid from the database
		 *
		 @Column:   category_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the category_uuid column values
		 *
		 */

		async getCategoryUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['category_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column category_uuid from the database base on the filters specified
		 *
		 @Column:   category_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string category_uuid column values, depending on the filters
		 *
		 */

		async getCategoryUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['category_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column category_uuid in the database
		 *
		 @Column:   category_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateCategoryUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ category_uuid: value }, uuid, 'category_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column CategoryUuid
		
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'category_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		

}

// End Class: CategoriesSupabaseCls