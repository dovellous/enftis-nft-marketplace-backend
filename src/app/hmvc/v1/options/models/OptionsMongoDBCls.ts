import { Schema, model } from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";
import { MongoDBCollectionCls } from "../../../../../modules/base/MongoDBCollectionCls";

export class OptionsMongoDBCls extends MongoDBCollectionCls {

  // Options model object
  private OptionsMongoDBModel: any;

  // Options schema object
  private optionsSchema: any;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this keyword
    super();

    // Init model name
    this.modelName = 'Options';

    // Define the Interface
    interface IOptions {
      	_id : string;
		fid : string;
		option_created_at : string;
		option_datatype : string;
		option_id : number;
		option_slug : string;
		option_updated_at : string;
		option_uuid : string;
		option_value : string;
	
    }

    // Init options schema
    this.optionsSchema = new Schema<IOptions>({
      	_id: {
         type: String,
         required: false,
         trim: true
		},
		fid: {
         type: String,
         required: false,
         trim: true
		},
		option_created_at: {
         type: String,
         required: false,
         trim: true
		},
		option_datatype: {
         type: String,
         required: false,
         trim: true
		},
		option_id: {
         type: Number,
         required: false,
         trim: true
		},
		option_slug: {
         type: String,
         required: false,
         trim: true
		},
		option_updated_at: {
         type: String,
         required: false,
         trim: true
		},
		option_uuid: {
         type: String,
         required: false,
         trim: true
		},
		option_value: {
         type: String,
         required: false,
         trim: true
		},
	
    }, {
      timestamps: true
    });

    // Define options auto increment key

    this.optionsSchema.plugin(autoIncrement, { model: this.modelName, field: '_id' });

    this.OptionsMongoDBModel = model<IOptions>(this.modelName, this.optionsSchema);

    // Create a change stream cursor that listens for changes to the collection
    this.OptionsMongoDBModel.watch();


    // Explicitly create the collection before using it
    // so the collection is capped.
    this.OptionsMongoDBModel.createCollection();

    this.setupModel(this.OptionsMongoDBModel);

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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'option_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		
		// Begin column OptionCreatedAt

		/*
		 * Retrieves the value of the column option_created_at from the database
		 *
		 @Column:   option_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the option_created_at column values
		 *
		 */

		async getOptionCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['option_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column option_created_at from the database base on the filters specified
		 *
		 @Column:   option_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string option_created_at column values, depending on the filters
		 *
		 */

		async getOptionCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['option_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column option_created_at in the database
		 *
		 @Column:   option_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateOptionCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ option_created_at: value }, uuid, 'option_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column OptionCreatedAt
		
		// Begin column OptionDatatype

		/*
		 * Retrieves the value of the column option_datatype from the database
		 *
		 @Column:   option_datatype
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the option_datatype column values
		 *
		 */

		async getOptionDatatype(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['option_datatype']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column option_datatype from the database base on the filters specified
		 *
		 @Column:   option_datatype
		 @Required: false
		 @Type:     string
		 @Return:   string option_datatype column values, depending on the filters
		 *
		 */

		async getOptionDatatypeWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['option_datatype'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column option_datatype in the database
		 *
		 @Column:   option_datatype
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateOptionDatatype(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ option_datatype: value }, uuid, 'option_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column OptionDatatype
		
		// Begin column OptionId

		/*
		 * Retrieves the value of the column option_id from the database
		 *
		 @Column:   option_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the option_id column values
		 *
		 */

		async getOptionId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['option_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column option_id from the database base on the filters specified
		 *
		 @Column:   option_id
		 @Required: false
		 @Type:     number
		 @Return:   number option_id column values, depending on the filters
		 *
		 */

		async getOptionIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['option_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column option_id in the database
		 *
		 @Column:   option_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateOptionId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ option_id: value }, uuid, 'option_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column OptionId
		
		// Begin column OptionSlug

		/*
		 * Retrieves the value of the column option_slug from the database
		 *
		 @Column:   option_slug
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the option_slug column values
		 *
		 */

		async getOptionSlug(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['option_slug']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column option_slug from the database base on the filters specified
		 *
		 @Column:   option_slug
		 @Required: false
		 @Type:     string
		 @Return:   string option_slug column values, depending on the filters
		 *
		 */

		async getOptionSlugWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['option_slug'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column option_slug in the database
		 *
		 @Column:   option_slug
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateOptionSlug(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ option_slug: value }, uuid, 'option_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column OptionSlug
		
		// Begin column OptionUpdatedAt

		/*
		 * Retrieves the value of the column option_updated_at from the database
		 *
		 @Column:   option_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the option_updated_at column values
		 *
		 */

		async getOptionUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['option_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column option_updated_at from the database base on the filters specified
		 *
		 @Column:   option_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string option_updated_at column values, depending on the filters
		 *
		 */

		async getOptionUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['option_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column option_updated_at in the database
		 *
		 @Column:   option_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateOptionUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ option_updated_at: value }, uuid, 'option_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column OptionUpdatedAt
		
		// Begin column OptionUuid

		/*
		 * Retrieves the value of the column option_uuid from the database
		 *
		 @Column:   option_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the option_uuid column values
		 *
		 */

		async getOptionUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['option_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column option_uuid from the database base on the filters specified
		 *
		 @Column:   option_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string option_uuid column values, depending on the filters
		 *
		 */

		async getOptionUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['option_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column option_uuid in the database
		 *
		 @Column:   option_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateOptionUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ option_uuid: value }, uuid, 'option_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column OptionUuid
		
		// Begin column OptionValue

		/*
		 * Retrieves the value of the column option_value from the database
		 *
		 @Column:   option_value
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the option_value column values
		 *
		 */

		async getOptionValue(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['option_value']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column option_value from the database base on the filters specified
		 *
		 @Column:   option_value
		 @Required: false
		 @Type:     string
		 @Return:   string option_value column values, depending on the filters
		 *
		 */

		async getOptionValueWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['option_value'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column option_value in the database
		 *
		 @Column:   option_value
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateOptionValue(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ option_value: value }, uuid, 'option_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column OptionValue
		

}

// End Class: OptionsMongoDBCls