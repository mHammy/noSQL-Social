const { Schema, model } = require('mongoose');
const validator = require('mongoose-validator'); // To validate the email format

const UserSchema = new Schema({ 
});  // TODO: Add the rest of the fields

UserSchema.virtual('friendCount').get(function() {
}); // TODO: Add the virtual for friendCount

const User = model('User', UserSchema);

module.exports = User;