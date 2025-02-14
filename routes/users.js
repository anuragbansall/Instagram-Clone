const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI).then(() => console.log("MongoDB Connected..."));

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  picture: {
    type: String,
    default: "def.png",
  },
  contact: String,
  bio: String,
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "story",
    },
  ],
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
