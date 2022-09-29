const {Schema, model} = require('mongoose');

const ElementSchema = new Schema({
    name: String,
    list: {
        type: Schema.Types.ObjectId,
        ref: "ListModel"
    }
});

module.exports = model("Element", ElementSchema);