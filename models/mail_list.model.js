const mongoose = require('mongoose');

var mail_listSchema = new mongoose.Schema({
  //name: {
  //  type: String,
  //  required: true
  //},
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


const MailList = mongoose.model('MailList', mail_listSchema);

module.exports = MailList;
