const mongoose = require("mongoose");
const { Schema } = mongoose;
const AddressSchema = require("./Address");

const pictureSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  picList: [AddressSchema]
});
//A new collection named users
mongoose.model("pictures", pictureSchema);
