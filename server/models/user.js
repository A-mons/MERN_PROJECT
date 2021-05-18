import mongoose from 'mongoose';

////////////////Creating User Schema Model////////////////

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    passsword: { type: String, required: true },
    id: { type : String}
});

const User = mongoose.model('User', userSchema);
export default User;