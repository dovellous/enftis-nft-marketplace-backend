import { Schema, model } from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";
import { MongoDBCollectionCls } from "../../../../../modules/base/MongoDBCollectionCls";

export class ____MODEL_ALL_CAMEL_CASE____MongoDBCls extends MongoDBCollectionCls {

  // ____MODEL_ALL_CAMEL_CASE____ model object
  private ____MODEL_ALL_CAMEL_CASE____MongoDBModel: any;

  // ____MODEL_ALL_CAMEL_CASE____ schema object
  private ____MODEL_CAMEL_CASE____Schema: any;

  // Setup initial variables in the constructor
  constructor() {

    // Call the base class contructor first before using this keyword
    super();

    // Init model name
    this.modelName = '____MODEL_ALL_CAMEL_CASE____';

    // Define the Interface
    interface I____MODEL_ALL_CAMEL_CASE____ {
      //____INTERFACE____
    }

    // Init ____MODEL_CAMEL_CASE____ schema
    this.____MODEL_CAMEL_CASE____Schema = new Schema<I____MODEL_ALL_CAMEL_CASE____>({
      //____SCHEMA____
    }, {
      timestamps: true
    });

    // Define ____MODEL_CAMEL_CASE____ auto increment key

    this.____MODEL_CAMEL_CASE____Schema.plugin(autoIncrement, { model: this.modelName, field: '_id' });

    this.____MODEL_ALL_CAMEL_CASE____MongoDBModel = model<I____MODEL_ALL_CAMEL_CASE____>(this.modelName, this.____MODEL_CAMEL_CASE____Schema);

    // Create a change stream cursor that listens for changes to the collection
    this.____MODEL_ALL_CAMEL_CASE____MongoDBModel.watch();


    // Explicitly create the collection before using it
    // so the collection is capped.
    this.____MODEL_ALL_CAMEL_CASE____MongoDBModel.createCollection();

    this.setupModel(this.____MODEL_ALL_CAMEL_CASE____MongoDBModel);

  }

  //____COL_DEF____

}

// End Class: ____MODEL_ALL_CAMEL_CASE____MongoDBCls