const mongoose = require("mongoose")

const FaqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

const faqs = mongoose.model("faq", FaqSchema)
module.exports = faqs;