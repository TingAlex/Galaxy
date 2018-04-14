const mongoose = require("mongoose");
const { Schema } = mongoose;

//category: acticity or picture
//**********************
//_target: could use dynamic insert *ref* collection name when populate!!
//form: payment or refund
const cashflowSchema = new Schema({
  _inser: { type: Schema.Types.ObjectId, ref: "User" },
  _outer: { type: Schema.Types.ObjectId, ref: "User" },
  money: { type: Number, default: 0 },
  time: Date,
  category: String,
  form: String,
  _target: { type: Schema.Types.ObjectId }
});
//A new collection named users
mongoose.model("cashflow", cashflowSchema);
