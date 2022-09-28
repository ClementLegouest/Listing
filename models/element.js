const {Schema, model} = require('mongoose');

const ElementSchema = new Schema({
    id: String,
    name: String,
    list: {
        type: Schema.Types.ObjectId,
        ref: "ListModel"
    }
});

module.exports = model("ElementModel", ElementSchema);