const {Schema, model} = require('mongoose');

const ListSchema = new Schema({
    id: String,
    name: String
});

module.exports = model("ListModel", ListSchema);