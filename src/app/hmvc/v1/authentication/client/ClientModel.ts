import {Schema, model, Types} from 'mongoose';
import {autoIncrement} from 'mongoose-plugin-autoinc';

const modelName: string = 'Client';

interface IClient {
    _id?: Types.ObjectId
    clientDeviceId: String;
    clientDeviceName: String;
    clientDevicePubKey?: String;
    serverDevicePubKey?: String;
    clientDeviceUserAgent: String;
    clientId: String;
    clientSecret: String;
}

const clientSchema = new Schema<IClient>({
    clientDeviceId: {
        type: String,
        required: true,
        trim: true
    },
    clientDeviceName: {
        type: String,
        required: true,
        trim: true
    },
    clientDevicePubKey: {
        type: String,
        required: true,
        trim: true,
        select: false,
    },
    serverDevicePubKey: {
        type: String,
        required: false,
        trim: true,
        select: false,
    },
    clientDeviceUserAgent: {
        type: String,
        trim: true,
        required: true,
        min: 6,
        max: 16
    },
    clientId: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true,
    },
    clientSecret: {
        type: String,
        trim: true,
        select: false,
        minlength: 8,
        required: true,
    },
}, {
    timestamps: true
});

clientSchema.plugin(autoIncrement, {model: modelName, field: 'deviceId'});

clientSchema.pre('validate', () => {

});

clientSchema.post('validate', () => {

});

clientSchema.pre('save', () => {

});

clientSchema.post('save', () => {

});

clientSchema.post('find', (res: any) => {
    console.log('find() returned ' + JSON.stringify(res));
});

const ClientModel = model<IClient>(modelName, clientSchema);

// Explicitly create the collection before using it
// so the collection is capped.
ClientModel.createCollection();

export {ClientModel, IClient};
