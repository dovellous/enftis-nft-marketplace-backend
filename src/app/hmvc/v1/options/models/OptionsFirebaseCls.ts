import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class OptionsObjCls {

	fid: string;
	option_created_at: string;
	option_datatype: string;
	option_id: number;
	option_slug: string;
	option_updated_at: string;
	option_uuid: string;
	option_value: string;
 
  constructor(
	_fid: string, 
	_option_created_at: string, 
	_option_datatype: string, 
	_option_id: number, 
	_option_slug: string, 
	_option_updated_at: string, 
	_option_uuid: string, 
	_option_value: string
  ) {
	this.fid = _fid;
	this.option_created_at = _option_created_at;
	this.option_datatype = _option_datatype;
	this.option_id = _option_id;
	this.option_slug = _option_slug;
	this.option_updated_at = _option_updated_at;
	this.option_uuid = _option_uuid;
	this.option_value = _option_value;
  }
  
  toString() {
    return `
		fid='${this.fid}'; 
		option_created_at='${this.option_created_at}'; 
		option_datatype='${this.option_datatype}'; 
		option_id='${this.option_id}'; 
		option_slug='${this.option_slug}'; 
		option_updated_at='${this.option_updated_at}'; 
		option_uuid='${this.option_uuid}'; 
		option_value='${this.option_value}'; `;
  }
}

// Firestore data converter
const optionsConverter = {
  toFirestore: (optionsData: OptionsObjCls): DocumentData => {
    return {
		fid: optionsData.fid,
		option_created_at: optionsData.option_created_at,
		option_datatype: optionsData.option_datatype,
		option_id: optionsData.option_id,
		option_slug: optionsData.option_slug,
		option_updated_at: optionsData.option_updated_at,
		option_uuid: optionsData.option_uuid,
		option_value: optionsData.option_value,
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new OptionsObjCls(
		data.fid, 
		data.option_created_at, 
		data.option_datatype, 
		data.option_id, 
		data.option_slug, 
		data.option_updated_at, 
		data.option_uuid, 
		data.option_value
    );
  }
};

// Begin Class: OptionsFirebaseCls

export class OptionsFirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : Options
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = 'Options';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, optionsConverter);

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

// End Class: OptionsFirebaseCls