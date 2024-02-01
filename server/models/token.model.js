const mongoose = require("mongoose");

const { APP_EMAIL_EXPIRE } = require("../utils/environments");

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  expireTime: {
    type: Number,
    default: Date.now() + Number(APP_EMAIL_EXPIRE),
  },
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
