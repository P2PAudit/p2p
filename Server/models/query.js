const mongoose = require("mongoose")

const QuerySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const querys = mongoose.model("query", QuerySchema)
module.exports = querys;