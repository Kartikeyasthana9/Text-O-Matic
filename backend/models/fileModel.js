const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    title: String,
    user: {type : Types.ObjectId, ref : 'userCollection'},
    uploadedAt: Date
})

module.exports = model('filesCollection', mySchema);
