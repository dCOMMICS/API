import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
   username: { type: 'string, required: true},
    email: { type: 'string, required: true ,},
    authenication:{
        password: { type: 'string, required: true   select: false},
        salt: { type: 'string, selected: false},
        sessionToken: { type: 'string, select: false}, 
    }
});