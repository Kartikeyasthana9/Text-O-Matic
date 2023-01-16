const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: String,
    email: String,
    password: String,
    contact: String,
    avatar : String,
    isAdmin: {type : Boolean, default: false}
})

module.exports = model('userCollection', mySchema);
