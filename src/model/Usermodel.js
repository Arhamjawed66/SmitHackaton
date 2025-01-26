import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    
    },
    provider: {
        type: String,
        },
    role: {
        type: String,
        default: 'user'
    },
    register_date: {
        type: Date,
        default: Date.now
    }

});
export const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);