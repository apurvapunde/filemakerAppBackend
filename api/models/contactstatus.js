/*** Module dependencies.*/
var mongoose = require('mongoose');
/*** ContactStatus Schema*/
var DBschema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    statusName: {
        type: String
    },
    deleted: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});
module.exports = mongoose.model('ContactStatus', DBschema);
