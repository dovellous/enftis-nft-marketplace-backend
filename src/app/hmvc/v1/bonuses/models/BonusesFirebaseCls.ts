import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class BonusesObjCls {

	bonus_created_at: string;
	bonus_fb: number;
	bonus_id: number;
	bonus_ig: number;
	bonus_in: number;
	bonus_md: number;
	bonus_tg: number;
	bonus_tt: number;
	bonus_updated_at: string;
	bonus_uuid: string;
	bonus_wa: number;
	bonus_x: number;
	bonus_yt: number;
	fid: string;
	user_id: number;
	verify_email: number;
	verify_id: number;
	verify_phone: number;
	verify_residence: number;
 
  constructor(
	_bonus_created_at: string, 
	_bonus_fb: number, 
	_bonus_id: number, 
	_bonus_ig: number, 
	_bonus_in: number, 
	_bonus_md: number, 
	_bonus_tg: number, 
	_bonus_tt: number, 
	_bonus_updated_at: string, 
	_bonus_uuid: string, 
	_bonus_wa: number, 
	_bonus_x: number, 
	_bonus_yt: number, 
	_fid: string, 
	_user_id: number, 
	_verify_email: number, 
	_verify_id: number, 
	_verify_phone: number, 
	_verify_residence: number
  ) {
	this.bonus_created_at = _bonus_created_at;
	this.bonus_fb = _bonus_fb;
	this.bonus_id = _bonus_id;
	this.bonus_ig = _bonus_ig;
	this.bonus_in = _bonus_in;
	this.bonus_md = _bonus_md;
	this.bonus_tg = _bonus_tg;
	this.bonus_tt = _bonus_tt;
	this.bonus_updated_at = _bonus_updated_at;
	this.bonus_uuid = _bonus_uuid;
	this.bonus_wa = _bonus_wa;
	this.bonus_x = _bonus_x;
	this.bonus_yt = _bonus_yt;
	this.fid = _fid;
	this.user_id = _user_id;
	this.verify_email = _verify_email;
	this.verify_id = _verify_id;
	this.verify_phone = _verify_phone;
	this.verify_residence = _verify_residence;
  }
  
  toString() {
    return `
		bonus_created_at='${this.bonus_created_at}'; 
		bonus_fb='${this.bonus_fb}'; 
		bonus_id='${this.bonus_id}'; 
		bonus_ig='${this.bonus_ig}'; 
		bonus_in='${this.bonus_in}'; 
		bonus_md='${this.bonus_md}'; 
		bonus_tg='${this.bonus_tg}'; 
		bonus_tt='${this.bonus_tt}'; 
		bonus_updated_at='${this.bonus_updated_at}'; 
		bonus_uuid='${this.bonus_uuid}'; 
		bonus_wa='${this.bonus_wa}'; 
		bonus_x='${this.bonus_x}'; 
		bonus_yt='${this.bonus_yt}'; 
		fid='${this.fid}'; 
		user_id='${this.user_id}'; 
		verify_email='${this.verify_email}'; 
		verify_id='${this.verify_id}'; 
		verify_phone='${this.verify_phone}'; 
		verify_residence='${this.verify_residence}'; `;
  }
}

// Firestore data converter
const bonusesConverter = {
  toFirestore: (bonusesData: BonusesObjCls): DocumentData => {
    return {
		bonus_created_at: bonusesData.bonus_created_at,
		bonus_fb: bonusesData.bonus_fb,
		bonus_id: bonusesData.bonus_id,
		bonus_ig: bonusesData.bonus_ig,
		bonus_in: bonusesData.bonus_in,
		bonus_md: bonusesData.bonus_md,
		bonus_tg: bonusesData.bonus_tg,
		bonus_tt: bonusesData.bonus_tt,
		bonus_updated_at: bonusesData.bonus_updated_at,
		bonus_uuid: bonusesData.bonus_uuid,
		bonus_wa: bonusesData.bonus_wa,
		bonus_x: bonusesData.bonus_x,
		bonus_yt: bonusesData.bonus_yt,
		fid: bonusesData.fid,
		user_id: bonusesData.user_id,
		verify_email: bonusesData.verify_email,
		verify_id: bonusesData.verify_id,
		verify_phone: bonusesData.verify_phone,
		verify_residence: bonusesData.verify_residence,
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new BonusesObjCls(
		data.bonus_created_at, 
		data.bonus_fb, 
		data.bonus_id, 
		data.bonus_ig, 
		data.bonus_in, 
		data.bonus_md, 
		data.bonus_tg, 
		data.bonus_tt, 
		data.bonus_updated_at, 
		data.bonus_uuid, 
		data.bonus_wa, 
		data.bonus_x, 
		data.bonus_yt, 
		data.fid, 
		data.user_id, 
		data.verify_email, 
		data.verify_id, 
		data.verify_phone, 
		data.verify_residence
    );
  }
};

// Begin Class: BonusesFirebaseCls

export class BonusesFirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : Bonuses
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = 'Bonuses';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, bonusesConverter);

  }

  
		// Begin column BonusCreatedAt

		/*
		 * Retrieves the value of the column bonus_created_at from the database
		 *
		 @Column:   bonus_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the bonus_created_at column values
		 *
		 */

		async getBonusCreatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bonus_created_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bonus_created_at from the database base on the filters specified
		 *
		 @Column:   bonus_created_at
		 @Required: false
		 @Type:     string
		 @Return:   string bonus_created_at column values, depending on the filters
		 *
		 */

		async getBonusCreatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bonus_created_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bonus_created_at in the database
		 *
		 @Column:   bonus_created_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateBonusCreatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bonus_created_at: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BonusCreatedAt
		
		// Begin column BonusFb

		/*
		 * Retrieves the value of the column bonus_fb from the database
		 *
		 @Column:   bonus_fb
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bonus_fb column values
		 *
		 */

		async getBonusFb(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bonus_fb']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bonus_fb from the database base on the filters specified
		 *
		 @Column:   bonus_fb
		 @Required: false
		 @Type:     number
		 @Return:   number bonus_fb column values, depending on the filters
		 *
		 */

		async getBonusFbWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bonus_fb'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bonus_fb in the database
		 *
		 @Column:   bonus_fb
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBonusFb(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bonus_fb: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BonusFb
		
		// Begin column BonusId

		/*
		 * Retrieves the value of the column bonus_id from the database
		 *
		 @Column:   bonus_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bonus_id column values
		 *
		 */

		async getBonusId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bonus_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bonus_id from the database base on the filters specified
		 *
		 @Column:   bonus_id
		 @Required: false
		 @Type:     number
		 @Return:   number bonus_id column values, depending on the filters
		 *
		 */

		async getBonusIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bonus_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bonus_id in the database
		 *
		 @Column:   bonus_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBonusId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bonus_id: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BonusId
		
		// Begin column BonusIg

		/*
		 * Retrieves the value of the column bonus_ig from the database
		 *
		 @Column:   bonus_ig
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bonus_ig column values
		 *
		 */

		async getBonusIg(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bonus_ig']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bonus_ig from the database base on the filters specified
		 *
		 @Column:   bonus_ig
		 @Required: false
		 @Type:     number
		 @Return:   number bonus_ig column values, depending on the filters
		 *
		 */

		async getBonusIgWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bonus_ig'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bonus_ig in the database
		 *
		 @Column:   bonus_ig
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBonusIg(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bonus_ig: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BonusIg
		
		// Begin column BonusIn

		/*
		 * Retrieves the value of the column bonus_in from the database
		 *
		 @Column:   bonus_in
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bonus_in column values
		 *
		 */

		async getBonusIn(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bonus_in']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bonus_in from the database base on the filters specified
		 *
		 @Column:   bonus_in
		 @Required: false
		 @Type:     number
		 @Return:   number bonus_in column values, depending on the filters
		 *
		 */

		async getBonusInWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bonus_in'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bonus_in in the database
		 *
		 @Column:   bonus_in
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBonusIn(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bonus_in: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BonusIn
		
		// Begin column BonusMd

		/*
		 * Retrieves the value of the column bonus_md from the database
		 *
		 @Column:   bonus_md
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bonus_md column values
		 *
		 */

		async getBonusMd(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bonus_md']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bonus_md from the database base on the filters specified
		 *
		 @Column:   bonus_md
		 @Required: false
		 @Type:     number
		 @Return:   number bonus_md column values, depending on the filters
		 *
		 */

		async getBonusMdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bonus_md'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bonus_md in the database
		 *
		 @Column:   bonus_md
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBonusMd(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bonus_md: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BonusMd
		
		// Begin column BonusTg

		/*
		 * Retrieves the value of the column bonus_tg from the database
		 *
		 @Column:   bonus_tg
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bonus_tg column values
		 *
		 */

		async getBonusTg(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bonus_tg']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bonus_tg from the database base on the filters specified
		 *
		 @Column:   bonus_tg
		 @Required: false
		 @Type:     number
		 @Return:   number bonus_tg column values, depending on the filters
		 *
		 */

		async getBonusTgWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bonus_tg'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bonus_tg in the database
		 *
		 @Column:   bonus_tg
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBonusTg(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bonus_tg: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BonusTg
		
		// Begin column BonusTt

		/*
		 * Retrieves the value of the column bonus_tt from the database
		 *
		 @Column:   bonus_tt
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bonus_tt column values
		 *
		 */

		async getBonusTt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bonus_tt']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bonus_tt from the database base on the filters specified
		 *
		 @Column:   bonus_tt
		 @Required: false
		 @Type:     number
		 @Return:   number bonus_tt column values, depending on the filters
		 *
		 */

		async getBonusTtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bonus_tt'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bonus_tt in the database
		 *
		 @Column:   bonus_tt
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBonusTt(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bonus_tt: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BonusTt
		
		// Begin column BonusUpdatedAt

		/*
		 * Retrieves the value of the column bonus_updated_at from the database
		 *
		 @Column:   bonus_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the bonus_updated_at column values
		 *
		 */

		async getBonusUpdatedAt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bonus_updated_at']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bonus_updated_at from the database base on the filters specified
		 *
		 @Column:   bonus_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   string bonus_updated_at column values, depending on the filters
		 *
		 */

		async getBonusUpdatedAtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bonus_updated_at'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bonus_updated_at in the database
		 *
		 @Column:   bonus_updated_at
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateBonusUpdatedAt(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bonus_updated_at: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BonusUpdatedAt
		
		// Begin column BonusUuid

		/*
		 * Retrieves the value of the column bonus_uuid from the database
		 *
		 @Column:   bonus_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string value, probably all records with only the bonus_uuid column values
		 *
		 */

		async getBonusUuid(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bonus_uuid']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bonus_uuid from the database base on the filters specified
		 *
		 @Column:   bonus_uuid
		 @Required: false
		 @Type:     string
		 @Return:   string bonus_uuid column values, depending on the filters
		 *
		 */

		async getBonusUuidWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bonus_uuid'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bonus_uuid in the database
		 *
		 @Column:   bonus_uuid
		 @Required: false
		 @Type:     string
		 @Return:   Updated data
		 *
		 */

		async updateBonusUuid(value:string, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bonus_uuid: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BonusUuid
		
		// Begin column BonusWa

		/*
		 * Retrieves the value of the column bonus_wa from the database
		 *
		 @Column:   bonus_wa
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bonus_wa column values
		 *
		 */

		async getBonusWa(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bonus_wa']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bonus_wa from the database base on the filters specified
		 *
		 @Column:   bonus_wa
		 @Required: false
		 @Type:     number
		 @Return:   number bonus_wa column values, depending on the filters
		 *
		 */

		async getBonusWaWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bonus_wa'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bonus_wa in the database
		 *
		 @Column:   bonus_wa
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBonusWa(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bonus_wa: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BonusWa
		
		// Begin column BonusX

		/*
		 * Retrieves the value of the column bonus_x from the database
		 *
		 @Column:   bonus_x
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bonus_x column values
		 *
		 */

		async getBonusX(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bonus_x']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bonus_x from the database base on the filters specified
		 *
		 @Column:   bonus_x
		 @Required: false
		 @Type:     number
		 @Return:   number bonus_x column values, depending on the filters
		 *
		 */

		async getBonusXWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bonus_x'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bonus_x in the database
		 *
		 @Column:   bonus_x
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBonusX(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bonus_x: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BonusX
		
		// Begin column BonusYt

		/*
		 * Retrieves the value of the column bonus_yt from the database
		 *
		 @Column:   bonus_yt
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the bonus_yt column values
		 *
		 */

		async getBonusYt(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['bonus_yt']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column bonus_yt from the database base on the filters specified
		 *
		 @Column:   bonus_yt
		 @Required: false
		 @Type:     number
		 @Return:   number bonus_yt column values, depending on the filters
		 *
		 */

		async getBonusYtWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['bonus_yt'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column bonus_yt in the database
		 *
		 @Column:   bonus_yt
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateBonusYt(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ bonus_yt: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column BonusYt
		
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

		        const result: any = this.updateMatchingRows({ fid: value }, uuid, 'bonus_uuid');

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

		        const result: any = this.updateMatchingRows({ user_id: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column UserId
		
		// Begin column VerifyEmail

		/*
		 * Retrieves the value of the column verify_email from the database
		 *
		 @Column:   verify_email
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the verify_email column values
		 *
		 */

		async getVerifyEmail(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['verify_email']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column verify_email from the database base on the filters specified
		 *
		 @Column:   verify_email
		 @Required: false
		 @Type:     number
		 @Return:   number verify_email column values, depending on the filters
		 *
		 */

		async getVerifyEmailWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['verify_email'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column verify_email in the database
		 *
		 @Column:   verify_email
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateVerifyEmail(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ verify_email: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column VerifyEmail
		
		// Begin column VerifyId

		/*
		 * Retrieves the value of the column verify_id from the database
		 *
		 @Column:   verify_id
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the verify_id column values
		 *
		 */

		async getVerifyId(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['verify_id']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column verify_id from the database base on the filters specified
		 *
		 @Column:   verify_id
		 @Required: false
		 @Type:     number
		 @Return:   number verify_id column values, depending on the filters
		 *
		 */

		async getVerifyIdWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['verify_id'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column verify_id in the database
		 *
		 @Column:   verify_id
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateVerifyId(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ verify_id: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column VerifyId
		
		// Begin column VerifyPhone

		/*
		 * Retrieves the value of the column verify_phone from the database
		 *
		 @Column:   verify_phone
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the verify_phone column values
		 *
		 */

		async getVerifyPhone(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['verify_phone']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column verify_phone from the database base on the filters specified
		 *
		 @Column:   verify_phone
		 @Required: false
		 @Type:     number
		 @Return:   number verify_phone column values, depending on the filters
		 *
		 */

		async getVerifyPhoneWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['verify_phone'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column verify_phone in the database
		 *
		 @Column:   verify_phone
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateVerifyPhone(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ verify_phone: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column VerifyPhone
		
		// Begin column VerifyResidence

		/*
		 * Retrieves the value of the column verify_residence from the database
		 *
		 @Column:   verify_residence
		 @Required: false
		 @Type:     number
		 @Return:   number value, probably all records with only the verify_residence column values
		 *
		 */

		async getVerifyResidence(): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumns(['verify_residence']);
				
		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Retrieves the value of the column verify_residence from the database base on the filters specified
		 *
		 @Column:   verify_residence
		 @Required: false
		 @Type:     number
		 @Return:   number verify_residence column values, depending on the filters
		 *
		 */

		async getVerifyResidenceWithFilters(filters: any): Promise<any> {

		    try {

		        const result: any = this.readSpecificColumnsWithFiltering(['verify_residence'], filters);

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		/*
		 * Updates the value of the column verify_residence in the database
		 *
		 @Column:   verify_residence
		 @Required: false
		 @Type:     number
		 @Return:   Updated data
		 *
		 */

		async updateVerifyResidence(value:number, uuid: string): Promise<any> {

		    try {

		        const result: any = this.updateMatchingRows({ verify_residence: value }, uuid, 'bonus_uuid');

		        Promise.resolve(result);

		    } catch (error: any ) {

		        Promise.reject(error);

		    }

		}

		// End column VerifyResidence
		

}

// End Class: BonusesFirebaseCls