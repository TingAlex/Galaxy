const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  githubId: String,
  userName: String,
  userUrl:String,
  school: String,
  _headPic: { type: Schema.Types.ObjectId, ref: "Address" },
  _backPic: { type: Schema.Types.ObjectId, ref: "Address" },
  credits: { type: Number, default: 0 }
});
//A new collection named users
mongoose.model("users", userSchema);
