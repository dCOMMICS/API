import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
   username: { type: 'string, required: true},
    email: { type: 'string, required: true ,},
    authenication:{
        password: { type: 'string, required: true   select: false},
        salt: { type: 'string, selected: false},
        sessionToken: { type: 'string, select: false}, 
    },
});

export const UserModel = mongoose.model('User', UserSchema);
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email: email});
