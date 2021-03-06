'use strict';

/* DB Model */
var mongoose = require('mongoose');
require('../api/models/user');
require('../api/models/activitiescontact');
require('../api/models/activitiesopportunitie');
require('../api/models/activitiesproject');
require('../api/models/activity');
require('../api/models/activitycategory');
require('../api/models/callactivity');
require('../api/models/company');
require('../api/models/company_user');
require('../api/models/companycontact');
require('../api/models/companycategory');
require('../api/models/contactaddress');
require('../api/models/contactdepartment');
require('../api/models/contactphone');
require('../api/models/contactgroup');
require('../api/models/groupcontact');
require('../api/models/contactindustry');
require('../api/models/contactinternet');
require('../api/models/contactlink');
require('../api/models/contactsource');
require('../api/models/contactstatus');
require('../api/models/contacttype');
require('../api/models/country');
require('../api/models/document');
require('../api/models/documentCategory');
require('../api/models/documentType');
require('../api/models/emailactivity');
require('../api/models/estimate');
require('../api/models/estimateitem');
require('../api/models/eventactivity');
require('../api/models/faxactivity');
require('../api/models/invoice');
require('../api/models/invoiceItem');
require('../api/models/itemCategory');
require('../api/models/items');
require('../api/models/itemType');
require('../api/models/letteractivity');
require('../api/models/linkremember');
require('../api/models/noteactivity');
require('../api/models/opportunity');
require('../api/models/order');
require('../api/models/orderitem');
require('../api/models/poitem');
require('../api/models/project');
require('../api/models/projectcategory');
require('../api/models/projectcost');
require('../api/models/projectdaily');
require('../api/models/projecttask');
require('../api/models/projectrole');
require('../api/models/projectItems');
require('../api/models/proposals');
require('../api/models/purchaseorder');
require('../api/models/role');
require('../api/models/taskactivity');
require('../api/models/timer');
require('../api/models/goal');
require('../api/models/tailgate');
require('../api/models/groupcontact');
require('../api/models/keyword');
require('../api/models/contactKeyword');
require('../api/models/email_template');
require('../api/models/expense');
require('../api/models/poAttachment');
require('../api/models/supplier');
require('../api/models/laborRate');
require('../api/models/dropboxField');
require('../api/models/orderType');
require('../api/models/estimateConfig');
require('../api/models/opportunityTag');
require('../api/models/attachmentFile');
require('../api/models/stage');
require('../api/models/orderContract');
require('../api/models/useractivity');
require('../api/models/proposalConfig');
require('../api/models/workLog');
require('../api/models/workLogAddOther');

var config = require('./config.js');
/* DB Connection*/

mongoose.connect(config.dbURL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection failed"));
db.once('open', function () {
    console.log("Hive database connected successfully!");
});
//mongoose.set('debug', true);

/* end DB */
