const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = new Schema({
  storeAddress: String,
  links: { type: Number, default: 1 },
  _creater: { type: Schema.Types.ObjectId, ref: "User" },
  secret: { type: Boolean, default: true },
  price: { type: Number, default: 0 },
  timeCreate: Date,
  title: String,
  location: String,
  description: String
});
//A new collection named users
mongoose.model("address", addressSchema);
