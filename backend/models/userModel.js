const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: String,
    email: String,
    password: String,
    contact: String,
})

module.exports = model('userCollection', mySchema);
