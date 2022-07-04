
const mysql = require("mysql");
const crypto = require("crypto");

const userSchema = new mysql.Schema(
  {
    username: {
      type: String,
      trim: true,
      requried: true,
      max: 32,
      unique: true,
      index: true,
      lowercase: true,
    },

    name: {
      type: String,
      trim: true,
      requried: true,
      max: 32,
    },

    email: {
      type: String,
      trim: true,
      requried: true,
      unique: true,
      lowercase: true,
    },

    profile: {
      type: String,
      requried: true,
    },

    hashed_password: {
      type: String,
      requried: true,
    },

    salt: String,

    about: {
      type: String,
    },

    role: {
      type: Number,
      trim: true,
    },

    photo: {
      data: Buffer,
      contentType: String,
    },

    resetPaswordLink: {
      data: String,
      default: "",
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mysql.model("User", userSchema);