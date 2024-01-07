import {Schema, Types, model} from 'mongoose';
import {autoIncrement} from 'mongoose-plugin-autoinc';
const modelName: string = 'User';

interface IUser {
    _id?: Schema.Types.ObjectId,
    firstName: String;
    lastName: String;
    username: String;
    emailAddress: String;
    emailAddressVerified: Boolean;
    password?: String;
    phoneNumber?: String;
    phoneNumberVerified?: Boolean;
    photoURL?: String;
    age?: Number;
    accessLevels?: Schema.Types.Mixed;
    organization?: Types.ObjectId;
    firebaseUserData?: Schema.Types.Mixed;
}

interface IFirebaseUser {
    uid: String;
    email: String;
    displayName: String;
    photoURL?: String;
    phoneNumber?: String;
}

interface IAccessLevels {
    defaultRole: String;
    roles: Types.Array<any>;
    permissions: Types.Array<any>;
}


const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: false,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
        trim: true
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        minlength: 8,
        maxlength: 16,
    },
    emailAddress: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true,
    },
    emailAddressVerified: {
        type: Boolean,
        required: false,
        default: false,
    },
    password: {
        type: String,
        trim: true,
        select: false,
        minlength: 8,
        required: false,
    },
    phoneNumber: {
        mobile: {
            type: String,
            trim: true,
            required: false,
        },
        work: {
            type: String,
            trim: true,
            required: false,
        },
    },
    phoneNumberVerified: {
        type: Boolean,
        required: false,
        default: false,
    },
    photoURL: {
        type: String,
        trim: true,
        required: false,
    },
    accessLevels: new Schema<IAccessLevels>({
        defaultRole: {
            type: String,
            enum: ['root', 'super-admin', 'tenant-admin', 'editor', 'moderator', 'observer', 'subscriber', 'guest'],
            default: 'subscriber',
            lowercase: true,
            trim: true,
            required: true,
        },
        roles: {
            type: Schema.Types.Mixed,
            default: 'subscriber',
            lowercase: true,
            trim: true,
            required: false,
        },
        permissions: {
            type: Schema.Types.Mixed,
            lowercase: true,
            trim: true,
            required: false,
        }
    }),
    organization: {
        type: Schema.Types.ObjectId,
        ref: 'Organization'
    },
    firebaseUserData: new Schema<IFirebaseUser>({

        uid: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        displayName: {
            type: String,
            required: true,
            trim: true
        },
        phoneNumber: {
            type: String,
            required: false,
            trim: true
        },
        photoURL: {
            type: String,
            required: false,
            trim: true
        },
    })
}, {
    timestamps: true
});

userSchema.plugin(autoIncrement, {model: modelName, field: 'userId'});

userSchema.pre('validate', () => {

});

userSchema.post('validate', () => {

});

userSchema.pre('save', () => {

});

userSchema.post('save', () => {

});

userSchema.post('find', (res: any) => {
    console.log('find() returned ' + JSON.stringify(res));
});

const UserModel = model<IUser>(modelName, userSchema);

// Explicitly create the collection before using it
// so the collection is capped.
UserModel.createCollection();

export {IFirebaseUser, IAccessLevels, UserModel, IUser};
