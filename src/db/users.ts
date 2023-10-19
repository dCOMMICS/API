import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
   username: { type: String, required: true},
    authenication:{
        password: { type: String, required: true,  select: false},
        salt: { type: String, selected: false},
        sessionToken: { type: String, select: false}, 
    },
});

export const UserModel = mongoose.model('User', UserSchema);
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email: email});
