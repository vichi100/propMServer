const mongoose = require("mongoose");
// var ObjectId = Schema.ObjectId;

const propertySchema = new mongoose.Schema({
  property_id: String,
  agent_id: String,
  property_type: String,
  property_for: String,
  property_status: String, // 0- close, 1- open
  owner_details: {
    name: String,
    mobile1: String,
    mobile2: String,
    address: String
  },
  property_address: {
    city: String,
    location_area: String,
    flat_number: String,
    building_name: String,
    landmark_or_street: String,
    pin: String
  },

  property_details: {
    house_type: String,
    bhk_type: String,
    washroom_numbers: String,
    furnishing_status: String,
    parking_type: String,
    parking_number: String,
    property_age: String,
    floor_number: String,
    total_floor: String,
    lift: String,
    property_size: String
  },

  sell_details: {
    expected_sell_price: String,
    maintenance_charge: String,
    available_from: String,
    negotiable: String
  },

  image_urls: [],
  create_date_time: {
    type: Date
  },
  update_date_time: {
    type: Date
  }
});

module.exports = mongoose.model(
  "residential_sell_property_details",
  propertySchema
);
