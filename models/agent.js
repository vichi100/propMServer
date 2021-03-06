const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const agentSchema = new Schema({
  user_type: String, // employee or agent
  id: String,
  expo_token: String,
  name: String,
  company_name: String,
  mobile: String,
  address: String,
  city: String,
  access_rights: String,
  employees: [],
  create_date_time: {
    type: Date
  },
  update_date_time: {
    type: Date
  }
});

module.exports = mongoose.model("Agent", agentSchema);

// employees=[
//   { employee_id: String, employee_name: String, employee_mobile: String, access_rights:String}
// ]
