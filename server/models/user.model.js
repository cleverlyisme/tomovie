const mongoose = require("mongoose");

const { UserRoles } = require("../utils/constants");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please add your full name"],
    },
    email: {
      type: String,
      required: [true, "Please add your email"],
      match: [/.+\@.+\..+/, "Invalid email address"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please add your password"],
      minLength: [6, "Password must be at least 6 characters"],
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      enum: Object.values(UserRoles),
      default: UserRoles.User,
    },
    likedMovies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
