import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { FirebaseCollectionCls } from "../../../../../modules/base/FirebaseCollectionCls";
 
class ____MODEL_ALL_CAMEL_CASE____ObjCls {//____PROPERTIES____ 
  constructor(//____COLLECTION_CONSTRUCTOR_ARGS____
  ) {//____COLLECTION_CONSTRUCTOR_VAR_ASSIGNMENT____
  }
  
  toString() {
    return `//____COLLECTION_CONSTRUCTOR_VAR_TO_STRING____`;
  }
}

// Firestore data converter
const ____MODEL_CAMEL_CASE____Converter = {
  toFirestore: (____MODEL_CAMEL_CASE____Data: ____MODEL_ALL_CAMEL_CASE____ObjCls): DocumentData => {
    return {//____DATA____
    };
  },
  fromFirestore: (
    snapshot:  QueryDocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data: any = snapshot.data(options);
    return new ____MODEL_ALL_CAMEL_CASE____ObjCls(//____COLLECTION_DATA_VARS____
    );
  }
};

// Begin Class: ____MODEL_ALL_CAMEL_CASE____FirebaseCls

export class ____MODEL_ALL_CAMEL_CASE____FirebaseCls extends FirebaseCollectionCls {

  // Collection name for the model : ____MODEL_ALL_CAMEL_CASE____
  private collectionName: string;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this
    super();

    // Init collection name
    this.collectionName = '____MODEL_ALL_CAMEL_CASE____';

    // Init model name
    this.modelName = this.collectionName;

    this.setupCollection(this.modelName, ____MODEL_CAMEL_CASE____Converter);

  }

  //____COL_DEF____

}

// End Class: ____MODEL_ALL_CAMEL_CASE____FirebaseCls