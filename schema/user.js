import { Schema } from "mongoose";

export const UserSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    payz:{
        type: String,
        required: true
    },
    balance:{
        default: 250,
        type: Number,
    }
});
