/*** Module dependencies.*/
var mongoose = require('mongoose');
/*** users Schema*/
var columnsConfig = new mongoose.Schema({
    fieldName: {type: String},
    columnName: {type: String},
    seqNo: {type: Number},
    disabled: {
        type: Boolean,
        default: true
    },
    isVisible: {
        type: Boolean,
        default: true
    },
    isHidden: {
        type: Boolean,
        default: false
    }
});
var totalConfig = new mongoose.Schema({
    fieldName: {type: String},
    columnName: {type: String},
    seqNo: {type: Number},
    disabled: {
        type: Boolean,
        default: true
    },
    isVisible: {
        type: Boolean,
        default: true
    },
});
var DBschema = new mongoose.Schema({
    columnsConfig: [columnsConfig],
    totalConfig: [totalConfig],
    landscape: {type: Boolean,
        default: false},
    portrait: {type: Boolean,
        default: true},
    formatNo: {type: String},
    cmp: {type: Boolean, //-Combine Model and Part No
        default: false},
    cmmpd: {type: Boolean, //-Combine two row mfg, model, part, description
        default: false},
    signature: {type: Boolean, //-shows and hides sales rep signature
        default: false},
    estimateName: {type: Boolean, //-Include Estimate Name
        default: false},    
    dollarSign: {type: Boolean, //-shows and hides $ sign
        default: false},
    showShipping: {type: Boolean, //-shows and hides shipping line items
        default: true},
    estimateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estimate'
    }
},
{
    timestamps: true
}
);
module.exports = mongoose.model('estimateConfig', DBschema);
