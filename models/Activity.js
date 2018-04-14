const mongoose = require("mongoose");
const { Schema } = mongoose;
const AddressSchema = require("./Address");

const activitySchema = new Schema({
  _creater: { type: Schema.Types.ObjectId, ref: "User" },
  price: { type: Number, default: 0 },
  picList: [AddressSchema],
  dateCreate: Date,
  timeStart: Date,
  timeEnd: Date,
  title: String,
  location: String,
  description: String
});
//A new collection named users
mongoose.model("activities", activitySchema);
