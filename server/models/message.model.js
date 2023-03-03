const mongoose = require("mongoose");

const Message = mongoose.model("Message", new mongoose.Schema({

    author: String,
    readers: String,
    text: String,

}))

module.exports = Message;
