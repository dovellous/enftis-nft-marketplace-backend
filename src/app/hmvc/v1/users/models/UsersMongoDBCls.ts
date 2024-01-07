import { Schema, model } from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";
import { MongoDBCollectionCls } from "../../../../../modules/base/MongoDBCollectionCls";

export class UsersMongoDBCls extends MongoDBCollectionCls {

  // Users model object
  private UsersMongoDBModel: any;

  // Users schema object
  private usersSchema: any;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this keyword
    super();

    // Init model name
    this.modelName = 'Users';

    // Define the Interface
    interface IUsers {
      	_id : string;
		email? : string;
		email_verified : boolean;
		fid : string;
		firebase_provider_data : any;
		first_name : string;
		last_name : string;
		organization_id : number;
		password : string;
		phone_number : string;
		phone_number_verified : string;
		photo_url : string;
		socket_id : string;
		supabase_provider : any;
		user_access_levels : any;
		user_country : string;
		user_created_at? : string;
		user_default_role : string;
		user_dob : string;
		user_gender : string;
		user_id : number;
		user_is_active : boolean;
		user_last_login : string;
		user_last_seen : string;
		user_updated_at : string;
		user_uuid : string;
		username : string;
	
    }

    // Init users schema
    this.usersSchema = new Schema<IUsers>({
      	_id: {
         type: String,
         required: false,
         trim: true
		},
		email: {
         type: String,
         required: true,
         trim: true
		},
		email_verified: {
         type: Boolean,
         required: false,
         trim: true
		},
		fid: {
         type: String,
         required: false,
         trim: true
		},
		firebase_provider_data: {
         type: Object,
         required: false,
         trim: true
		},
		first_name: {
         type: String,
         required: false,
         trim: true
		},
		last_name: {
         type: String,
         required: false,
         trim: true
		},
		organization_id: {
         type: Number,
         required: false,
         trim: true
		},
		password: {
         type: String,
         required: false,
         trim: true
		},
		phone_number: {
         type: String,
         required: false,
         trim: true
		},
		phone_number_verified: {
         type: String,
         required: false,
         trim: true
		},
		photo_url: {
         type: String,
         required: false,
         trim: true
		},
		socket_id: {
         type: String,
         required: false,
         trim: true
		},
		supabase_provider: {
         type: Object,
         required: false,
         trim: true
		},
		user_access_levels: {
         type: Object,
         required: false,
         trim: true
		},
		user_country: {
         type: String,
         required: false,
         trim: true
		},
		user_created_at: {
         type: String,
         required: true,
         trim: true
		},
		user_default_role: {
         type: String,
         required: false,
         trim: true
		},
		user_dob: {
         type: String,
         required: false,
         trim: true
		},
		user_gender: {
         type: String,
         required: false,
         trim: true
		},
		user_id: {
         type: Number,
         required: false,
         trim: true
		},
		user_is_active: {
         type: Boolean,
         required: false,
         trim: true
		},
		user_last_login: {
         type: String,
         required: false,
         trim: true
		},
		user_last_seen: {
         type: String,
         required: false,
         trim: true
		},
		user_updated_at: {
         type: String,
         required: false,
         trim: true
		},
		user_uuid: {
         type: String,
         required: false,
         trim: true
		},
		username: {
         type: String,
         required: false,
         trim: true
		},
	
    }, {
      timestamps: true
    });

    // Define users auto increment key

    this.usersSchema.plugin(autoIncrement, { model: this.modelName, field: '_id' });

    this.UsersMongoDBModel = model<IUsers>(this.modelName, this.usersSchema);

    // Create a change stream cursor that listens for changes to the collection
    this.UsersMongoDBModel.watch();


    // Explicitly create the collection before using it
    // so the collection is capped.
    this.UsersMongoDBModel.createCollection();

    this.setupModel(this.UsersMongoDBModel);

  }

  
		// Begin column Email

		/*
		 * Retrieves the value of the column email from the database
		 *
		 @Column:   email
		 @Required: true
		 @Type:     string
		 @Return:   string value, probably all records with only the email column values
		 *
		 */

		async getEmail(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['email']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column email from the database base on the filters specified
		 *
		 @Column:   email
		 @Required: true
		 @Type:     string
		 @Return:   string email column values, depending on the filters
		 *
		 */

		async getEmailWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['email'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column email in the database
		 *
		 @Column:   email
		 @Required: true
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateEmail(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ email: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Email
		
		// Begin column EmailVerified

		/*
		 * Retrieves the value of the column email_verified from the database
		 *
		 @Column:   email_verified
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the email_verified column values
		 *
		 */

		async getEmailVerified(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['email_verified']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column email_verified from the database base on the filters specified
		 *
		 @Column:   email_verified
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean email_verified column values, depending on the filters
		 *
		 */

		async getEmailVerifiedWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['email_verified'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column email_verified in the database
		 *
		 @Column:   email_verified
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateEmailVerified(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ email_verified: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column EmailVerified
		
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Fid
		
		// Begin column FirebaseProviderData

		/*
		 * Retrieves the value of the column firebase_provider_data from the database
		 *
		 @Column:   firebase_provider_data
		 @Required: false
		 @Type:     any
		 @Return:   any value, probably all records with only the firebase_provider_data column values
		 *
		 */

		async getFirebaseProviderData(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['firebase_provider_data']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column firebase_provider_data from the database base on the filters specified
		 *
		 @Column:   firebase_provider_data
		 @Required: false
		 @Type:     any
		 @Return:   any firebase_provider_data column values, depending on the filters
		 *
		 */

		async getFirebaseProviderDataWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['firebase_provider_data'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column firebase_provider_data in the database
		 *
		 @Column:   firebase_provider_data
		 @Required: false
		 @Type:     any
		 @Return:   Updated data
		 *
		 */

		async updateFirebaseProviderData(value:any, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ firebase_provider_data: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column FirebaseProviderData
		
		// Begin column FirstName

		/*
		 * Retrieves the value of the column first_name from the database
		 *
		 @Column:   first_name
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the first_name column values
		 *
		 */

		async getFirstName(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['first_name']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column first_name from the database base on the filters specified
		 *
		 @Column:   first_name
		 @Required: false
		 @Type:     string
		 @Return:   string first_name column values, depending on the filters
		 *
		 */

		async getFirstNameWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['first_name'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column first_name in the database
		 *
		 @Column:   first_name
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateFirstName(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ first_name: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column FirstName
		
		// Begin column LastName

		/*
		 * Retrieves the value of the column last_name from the database
		 *
		 @Column:   last_name
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the last_name column values
		 *
		 */

		async getLastName(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['last_name']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column last_name from the database base on the filters specified
		 *
		 @Column:   last_name
		 @Required: false
		 @Type:     string
		 @Return:   string last_name column values, depending on the filters
		 *
		 */

		async getLastNameWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['last_name'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column last_name in the database
		 *
		 @Column:   last_name
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateLastName(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ last_name: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column LastName
		
		// Begin column OrganizationId

		/*
		 * Retrieves the value of the column organization_id from the database
		 *
		 @Column:   organization_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the organization_id column values
		 *
		 */

		async getOrganizationId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['organization_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column organization_id from the database base on the filters specified
		 *
		 @Column:   organization_id
		 @Required: false
		 @Type:     number
		 @Return:   number organization_id column values, depending on the filters
		 *
		 */

		async getOrganizationIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['organization_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column organization_id in the database
		 *
		 @Column:   organization_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateOrganizationId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ organization_id: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column OrganizationId
		
		// Begin column Password

		/*
		 * Retrieves the value of the column password from the database
		 *
		 @Column:   password
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the password column values
		 *
		 */

		async getPassword(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['password']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column password from the database base on the filters specified
		 *
		 @Column:   password
		 @Required: false
		 @Type:     string
		 @Return:   string password column values, depending on the filters
		 *
		 */

		async getPasswordWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['password'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column password in the database
		 *
		 @Column:   password
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updatePassword(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ password: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Password
		
		// Begin column PhoneNumber

		/*
		 * Retrieves the value of the column phone_number from the database
		 *
		 @Column:   phone_number
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the phone_number column values
		 *
		 */

		async getPhoneNumber(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['phone_number']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column phone_number from the database base on the filters specified
		 *
		 @Column:   phone_number
		 @Required: false
		 @Type:     string
		 @Return:   string phone_number column values, depending on the filters
		 *
		 */

		async getPhoneNumberWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['phone_number'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column phone_number in the database
		 *
		 @Column:   phone_number
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updatePhoneNumber(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ phone_number: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column PhoneNumber
		
		// Begin column PhoneNumberVerified

		/*
		 * Retrieves the value of the column phone_number_verified from the database
		 *
		 @Column:   phone_number_verified
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the phone_number_verified column values
		 *
		 */

		async getPhoneNumberVerified(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['phone_number_verified']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column phone_number_verified from the database base on the filters specified
		 *
		 @Column:   phone_number_verified
		 @Required: false
		 @Type:     string
		 @Return:   string phone_number_verified column values, depending on the filters
		 *
		 */

		async getPhoneNumberVerifiedWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['phone_number_verified'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column phone_number_verified in the database
		 *
		 @Column:   phone_number_verified
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updatePhoneNumberVerified(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ phone_number_verified: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column PhoneNumberVerified
		
		// Begin column PhotoUrl

		/*
		 * Retrieves the value of the column photo_url from the database
		 *
		 @Column:   photo_url
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the photo_url column values
		 *
		 */

		async getPhotoUrl(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['photo_url']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column photo_url from the database base on the filters specified
		 *
		 @Column:   photo_url
		 @Required: false
		 @Type:     string
		 @Return:   string photo_url column values, depending on the filters
		 *
		 */

		async getPhotoUrlWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['photo_url'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column photo_url in the database
		 *
		 @Column:   photo_url
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updatePhotoUrl(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ photo_url: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column PhotoUrl
		
		// Begin column SocketId

		/*
		 * Retrieves the value of the column socket_id from the database
		 *
		 @Column:   socket_id
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the socket_id column values
		 *
		 */

		async getSocketId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['socket_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column socket_id from the database base on the filters specified
		 *
		 @Column:   socket_id
		 @Required: false
		 @Type:     string
		 @Return:   string socket_id column values, depending on the filters
		 *
		 */

		async getSocketIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['socket_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column socket_id in the database
		 *
		 @Column:   socket_id
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateSocketId(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ socket_id: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column SocketId
		
		// Begin column SupabaseProvider

		/*
		 * Retrieves the value of the column supabase_provider from the database
		 *
		 @Column:   supabase_provider
		 @Required: false
		 @Type:     any
		 @Return:   any value, probably all records with only the supabase_provider column values
		 *
		 */

		async getSupabaseProvider(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['supabase_provider']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column supabase_provider from the database base on the filters specified
		 *
		 @Column:   supabase_provider
		 @Required: false
		 @Type:     any
		 @Return:   any supabase_provider column values, depending on the filters
		 *
		 */

		async getSupabaseProviderWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['supabase_provider'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column supabase_provider in the database
		 *
		 @Column:   supabase_provider
		 @Required: false
		 @Type:     any
		 @Return:   Updated data
		 *
		 */

		async updateSupabaseProvider(value:any, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ supabase_provider: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column SupabaseProvider
		
		// Begin column UserAccessLevels

		/*
		 * Retrieves the value of the column user_access_levels from the database
		 *
		 @Column:   user_access_levels
		 @Required: false
		 @Type:     any
		 @Return:   any value, probably all records with only the user_access_levels column values
		 *
		 */

		async getUserAccessLevels(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_access_levels']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_access_levels from the database base on the filters specified
		 *
		 @Column:   user_access_levels
		 @Required: false
		 @Type:     any
		 @Return:   any user_access_levels column values, depending on the filters
		 *
		 */

		async getUserAccessLevelsWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_access_levels'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_access_levels in the database
		 *
		 @Column:   user_access_levels
		 @Required: false
		 @Type:     any
		 @Return:   Updated data
		 *
		 */

		async updateUserAccessLevels(value:any, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_access_levels: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserAccessLevels
		
		// Begin column UserCountry

		/*
		 * Retrieves the value of the column user_country from the database
		 *
		 @Column:   user_country
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the user_country column values
		 *
		 */

		async getUserCountry(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_country']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_country from the database base on the filters specified
		 *
		 @Column:   user_country
		 @Required: false
		 @Type:     string
		 @Return:   string user_country column values, depending on the filters
		 *
		 */

		async getUserCountryWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_country'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_country in the database
		 *
		 @Column:   user_country
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateUserCountry(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_country: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserCountry
		
		// Begin column UserCreatedAt

		/*
		 * Retrieves the value of the column user_created_at from the database
		 *
		 @Column:   user_created_at
		 @Required: true
		 @Type:     string
		 @Return:   string value, probably all records with only the user_created_at column values
		 *
		 */

		async getUserCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_created_at from the database base on the filters specified
		 *
		 @Column:   user_created_at
		 @Required: true
		 @Type:     string
		 @Return:   string user_created_at column values, depending on the filters
		 *
		 */

		async getUserCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_created_at in the database
		 *
		 @Column:   user_created_at
		 @Required: true
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateUserCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_created_at: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserCreatedAt
		
		// Begin column UserDefaultRole

		/*
		 * Retrieves the value of the column user_default_role from the database
		 *
		 @Column:   user_default_role
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the user_default_role column values
		 *
		 */

		async getUserDefaultRole(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_default_role']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_default_role from the database base on the filters specified
		 *
		 @Column:   user_default_role
		 @Required: false
		 @Type:     string
		 @Return:   string user_default_role column values, depending on the filters
		 *
		 */

		async getUserDefaultRoleWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_default_role'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_default_role in the database
		 *
		 @Column:   user_default_role
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateUserDefaultRole(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_default_role: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserDefaultRole
		
		// Begin column UserDob

		/*
		 * Retrieves the value of the column user_dob from the database
		 *
		 @Column:   user_dob
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the user_dob column values
		 *
		 */

		async getUserDob(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_dob']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_dob from the database base on the filters specified
		 *
		 @Column:   user_dob
		 @Required: false
		 @Type:     string
		 @Return:   string user_dob column values, depending on the filters
		 *
		 */

		async getUserDobWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_dob'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_dob in the database
		 *
		 @Column:   user_dob
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateUserDob(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_dob: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserDob
		
		// Begin column UserGender

		/*
		 * Retrieves the value of the column user_gender from the database
		 *
		 @Column:   user_gender
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the user_gender column values
		 *
		 */

		async getUserGender(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_gender']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_gender from the database base on the filters specified
		 *
		 @Column:   user_gender
		 @Required: false
		 @Type:     string
		 @Return:   string user_gender column values, depending on the filters
		 *
		 */

		async getUserGenderWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_gender'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_gender in the database
		 *
		 @Column:   user_gender
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateUserGender(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_gender: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserGender
		
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

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		
		// Begin column UserIsActive

		/*
		 * Retrieves the value of the column user_is_active from the database
		 *
		 @Column:   user_is_active
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean value, probably all records with only the user_is_active column values
		 *
		 */

		async getUserIsActive(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_is_active']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_is_active from the database base on the filters specified
		 *
		 @Column:   user_is_active
		 @Required: false
		 @Type:     boolean
		 @Return:   boolean user_is_active column values, depending on the filters
		 *
		 */

		async getUserIsActiveWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_is_active'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_is_active in the database
		 *
		 @Column:   user_is_active
		 @Required: false
		 @Type:     boolean
		 @Return:   Updated data
		 *
		 */

		async updateUserIsActive(value:boolean, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_is_active: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserIsActive
		
		// Begin column UserLastLogin

		/*
		 * Retrieves the value of the column user_last_login from the database
		 *
		 @Column:   user_last_login
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the user_last_login column values
		 *
		 */

		async getUserLastLogin(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_last_login']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_last_login from the database base on the filters specified
		 *
		 @Column:   user_last_login
		 @Required: false
		 @Type:     string
		 @Return:   string user_last_login column values, depending on the filters
		 *
		 */

		async getUserLastLoginWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_last_login'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_last_login in the database
		 *
		 @Column:   user_last_login
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateUserLastLogin(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_last_login: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserLastLogin
		
		// Begin column UserLastSeen

		/*
		 * Retrieves the value of the column user_last_seen from the database
		 *
		 @Column:   user_last_seen
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the user_last_seen column values
		 *
		 */

		async getUserLastSeen(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_last_seen']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_last_seen from the database base on the filters specified
		 *
		 @Column:   user_last_seen
		 @Required: false
		 @Type:     string
		 @Return:   string user_last_seen column values, depending on the filters
		 *
		 */

		async getUserLastSeenWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_last_seen'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_last_seen in the database
		 *
		 @Column:   user_last_seen
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateUserLastSeen(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_last_seen: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserLastSeen
		
		// Begin column UserUpdatedAt

		/*
		 * Retrieves the value of the column user_updated_at from the database
		 *
		 @Column:   user_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the user_updated_at column values
		 *
		 */

		async getUserUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_updated_at from the database base on the filters specified
		 *
		 @Column:   user_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string user_updated_at column values, depending on the filters
		 *
		 */

		async getUserUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_updated_at in the database
		 *
		 @Column:   user_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateUserUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_updated_at: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserUpdatedAt
		
		// Begin column UserUuid

		/*
		 * Retrieves the value of the column user_uuid from the database
		 *
		 @Column:   user_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the user_uuid column values
		 *
		 */

		async getUserUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['user_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column user_uuid from the database base on the filters specified
		 *
		 @Column:   user_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string user_uuid column values, depending on the filters
		 *
		 */

		async getUserUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['user_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column user_uuid in the database
		 *
		 @Column:   user_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateUserUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ user_uuid: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserUuid
		
		// Begin column Username

		/*
		 * Retrieves the value of the column username from the database
		 *
		 @Column:   username
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the username column values
		 *
		 */

		async getUsername(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['username']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column username from the database base on the filters specified
		 *
		 @Column:   username
		 @Required: false
		 @Type:     string
		 @Return:   string username column values, depending on the filters
		 *
		 */

		async getUsernameWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['username'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column username in the database
		 *
		 @Column:   username
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateUsername(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ username: value }, uuid, 'user_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column Username
		

}

// End Class: UsersMongoDBCls