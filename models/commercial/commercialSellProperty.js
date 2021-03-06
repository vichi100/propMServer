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
    building_type: String,
    ideal_for: [],
    parking_type: String,
    property_age: String,
    power_backup: String,
    property_size: String
  },

  rent_details: {
    expected_rent: String,
    expected_deposit: String,
    available_from: String,
    preferred_tenants: String,
    non_veg_allowed: String
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
  "commercial_sell_property_details",
  propertySchema
);
