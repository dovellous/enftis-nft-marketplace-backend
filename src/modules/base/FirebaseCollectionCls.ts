import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, getDocs, getFirestore, updateDoc, where } from "firebase/firestore";
import { FirebaseConfig } from "./FirebaseConfig";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { Snippets } from "../../utils/Snippets";

export class FirebaseCollectionCls {

  firebaseApp: any;

  firebaseFirestoreDB: any

  modelName: string = '';

  docRef: any;

  constructor() {

    // TODO: Replace the following with your app's Firebase project configuration
    // See: https://support.google.com/firebase/answer/7015592
    const firebaseConfig = FirebaseConfig;

    // Initialize Firebase
    this.firebaseApp = initializeApp(firebaseConfig);


    // Initialize Cloud Firestore and get a reference to the service
    this.firebaseFirestoreDB = getFirestore(this.firebaseApp);

  }

  // Set up the collection by initiqliing the doc ref
  setupCollection(collectionName: string, converter: any) {

    this.modelName = collectionName;

    this.docRef = doc(collection(this.firebaseFirestoreDB, collectionName, ''));//.withConverter(converter);
    
    return this.docRef;

  }

  
  //____API_GET_DOCS____
  async apiGet(filter: any): Promise<any> {

    return this.readWithFiltering(filter);

  }

  //____API_PUT_DOCS____
  async apiPut(uuid: string, payload: any): Promise<any> {

    return this.updateMatchingRows(payload, 'uuid', uuid);

  }

  //____API_PATCH_DOCS____
  async apiPatch(uuid: string, payload: any): Promise<any> {

    return this.updateMatchingRows(payload, 'uuid', uuid);

  }

  //____API_DELETE_DOCS____
  async apiDelete(uuid: string): Promise<any> {

    return this.deleteMatchingRows('uuid', uuid);

  }

  //____API_TRACE_DOCS____
  async apiTrace(uuid: string, payload: any): Promise<any> {

    return this.updateMatchingRows(payload, 'uuid', uuid);

  }


  async readAllRows(): Promise<any> {

    try {

      const _docRef: any = await this.docRef.find();

      Promise.resolve(_docRef);

    } catch (error: any) {

      Promise.reject(error);

    }

  }


  async readSpecificColumns(specifiedColumns: any, columnName?: string, columnValue?: any): Promise<any> {

    try {

      const filter: any = Snippets.objects.getWhereClause(columnName, columnValue);
      const _docRef: any = await this.docRef.findOne({ filter });

      Promise.resolve(_docRef);

    } catch (error: any) {

      Promise.reject(error);

    }

  }


  async readWithFiltering(filter: any): Promise<any> {

    try {

      const _docRef: any = await this.docRef.findOne(filter);

      Promise.resolve(_docRef);

    } catch (error: any) {

      Promise.reject(error);

    }

  }

  async readSpecificColumnsWithFiltering(specifiedColumns:any, columnName?: string, columnValue?: any): Promise<any> {

    try {

      const filter: any = Snippets.objects.getWhereClause(columnName, columnValue);
      const _docRef: any = await this.docRef.findOne(filter);

      Promise.resolve(_docRef);

    } catch (error: any) {

      Promise.reject(error);

    }

  }


  async readForeignTables(localArray: string[], foreignArray: any): Promise<any> {

    try {

      const _docRef: any = await addDoc(collection(this.docRef, this.modelName), foreignArray);

      Promise.resolve(_docRef);

    } catch (error: any) {

      Promise.reject(error);

    }

  }


  async exe(localArray: string[], foreignArray: any, filters: any): Promise<any> {

    try {

      let query = await this.docRef.find();
      query = this.withFiltering(query, filters);
      const querySnapshot = await getDocs(query);

      const result: Array<any> = [];

      querySnapshot.forEach((doc: any) => {
        const payload: any = doc.data();
        if (!payload.hasOwnProperty('id')) {
          payload.id = doc.id;
        }
        result.push(payload);
      });

      Promise.resolve(result);

    } catch (error: any) {

      Promise.reject(error);

    }

  }


  async withPagination(): Promise<any> {
    return new Promise(() => { });
  }

  /*
  Filtering
  Supabase provides a wide range of filters.
  */


  withFiltering(query: any, filters: any): any {

    // Filters
    if ('eq' in filters) { query = query(this.docRef, where(filters.eq.column, "==", filters.eq.value)); } //'Equal to'
    if ('gt' in filters) { query = query(this.docRef, where(filters.gt.column, ">", filters.gt.value)); } //'Greater than'
    if ('is' in filters) { query = query(this.docRef, where(filters.is.column, "==", filters.is.value)); } //'value'
    if ('in' in filters) { query = query(this.docRef, where(filters.in.column, "in", filters.in.value)); } //'array_column', ['Array', 'Values']
    if ('cs' in filters) { query = query(this.docRef, where(filters.cs.column, "array-contains", filters.cs.value)); } //'array_column', ['Array', 'Values']
    if ('cd' in filters) { query = query(this.docRef, where(filters.cd.column, "array-contains-any", filters.cd.value)); } //'array_column', ['Array', 'Values']
    if ('lt' in filters) { query = query(this.docRef, where(filters.lt.column, "<", filters.lt.value)); } //'Less than'
    if ('gte' in filters) { query = query(this.docRef, where(filters.gte.column, ">=", filters.gte.value)); } //'Greater than or equal to'
    if ('lte' in filters) { query = query(this.docRef, where(filters.lte.column, "<=", filters.lte.value)); } //'Less than or equal to'
    if ('neq' in filters) { query = query(this.docRef, where(filters.neq.column, "!=", filters.neq.value)); } //'Not equal to'
    if ('like' in filters) { query = query(this.docRef, where(filters.like.column, "==", filters.like.value)); } //'%CaseSensitive%'
    if ('ilike' in filters) { query = query(this.docRef, where(filters.ilike.column, "==", filters.ilike.value)); } //'%CaseInsensitive%'
    if ('filter' in filters) { query = query(this.docRef, filters.filter); }
    if ('not-in' in filters) { query = query(this.docRef, where(filters.in.column, "not-in", filters.not_in.value)); } //'array_column', ['Array', 'Values']
    
    return query;

  }

  /*
  Insert rows
  insert lets you insert into your tables. You can also insert in bulk and do UPSERT.
  
  insert will also return the replaced values for UPSERT.
  */


  async insertARow(insertPayload: any): Promise<any> {

    try {

      const _docRef: any = await addDoc(collection(this.docRef, this.modelName), insertPayload);

      Promise.resolve(_docRef.id);

    } catch (error: any) {

      Promise.reject(error);

    }

  }

  async insertManyRows(batchData: any): Promise<any> {

    try {

      const _docRef: any = await addDoc(collection(this.docRef, this.modelName), batchData);

      Promise.resolve(_docRef.id);

    } catch (error: any) {

      Promise.reject(error);

    }

  }

  async upsertMatchingRows(upsertPayload: any, columnValue?: any, columnName?: string): Promise<any> {

    try {

      const _docRef: any = await updateDoc(doc(this.firebaseFirestoreDB, this.modelName, columnValue), upsertPayload);

      Promise.resolve(_docRef.id);

    } catch (error: any) {

      Promise.reject(error);

    }

  }

  /*
  Update rows
  update lets you update rows. update will match all rows by default. You can update specific rows using horizontal filters, e.g. eq, lt, and is.
  
  update will also return the replaced values for UPDATE.
  */


  async updateMatchingRows(updatePayload: any, columnValue: any, columnName?: string): Promise<any> {

    try {

      const _docRef: any = await updateDoc(doc(this.firebaseFirestoreDB, this.modelName, columnValue), updatePayload);

      Promise.resolve(_docRef.id);

    } catch (error: any) {

      Promise.reject(error);

    }

  }

  /*
  Delete rows
  delete lets you delete rows. delete will match all rows by default, so remember to specify your filters!
  */

  async deleteMatchingRows(columnValue: any, columnName?: string): Promise<any> {

    try {

      const _docRef: any = await deleteDoc(doc(this.firebaseFirestoreDB, this.modelName, columnValue));

      Promise.resolve(_docRef.id);

    } catch (error: any) {

      Promise.reject(error);

    }

  }

  /*
  Subscribe to changes
  Supabase provides realtime functionality and broadcasts database changes to authorized users depending on Row Level Security (RLS) policies.
  */


  async subscribeToAllEvents(callbackFunction: any): Promise<any> {

    try {

      const observer = this.firebaseFirestoreDB.collection(this.modelName)
        .onSnapshot((querySnapshot: any) => {
          querySnapshot.docChanges().forEach((payload: any) => {

            typeof callbackFunction === 'function' && callbackFunction(payload.type, payload.doc.data());

          });
        });

      Promise.resolve(observer);

    } catch (error: any) {

      Promise.reject(error);

    }

  }

  async subscribeToInserts(callbackFunction: any): Promise<any> {

    try {

      const observer = this.firebaseFirestoreDB.collection(this.modelName)
        .onSnapshot((querySnapshot: any) => {
          querySnapshot.docChanges().forEach((payload: any) => {

            payload.type === 'added' && typeof callbackFunction === 'function' && callbackFunction(payload.doc.data());

          });
        });

      Promise.resolve(observer);

    } catch (error: any) {

      Promise.reject(error);

    }


  }

  async subscribeToUpdates(callbackFunction: any): Promise<any> {

    try {

      const observer = onSnapshot(this.docRef, (querySnapshot: any) => {

        querySnapshot.docs.map((doc: any) => {
          
          console.log(">>> DOC", doc);

          querySnapshot.type === 'modified' && typeof callbackFunction === 'function' && callbackFunction(doc);

          });
        });


      Promise.resolve(observer);

    } catch (error: any) {

      Promise.reject(error);

    }

  }

  async subscribeToDeletes(callbackFunction: any): Promise<any> {

    try {

      const observer = onSnapshot(this.docRef, (querySnapshot: any) => {
          querySnapshot.docChanges().forEach((payload: any) => {

            payload.type === 'removed' && typeof callbackFunction === 'function' && callbackFunction(payload.doc.data());

          });
        });

      Promise.resolve(observer);

    } catch (error: any) {

      Promise.reject(error);

    }

  }

  async subscribeToSpecificRows(filter: any, callbackFunction: any): Promise<any> {

    try {

      const observer = this.firebaseFirestoreDB.collection(this.modelName).where(filter.columnName, filter.columnOperator, filter.columnValue)
        .onSnapshot((querySnapshot: any) => {
          querySnapshot.docChanges().forEach((payload: any) => {

            typeof callbackFunction === 'function' && callbackFunction(payload.type, payload.doc.data());

          });
        });

      Promise.resolve(observer);

    } catch (error: any) {

      Promise.reject(error);

    }

  }

}

