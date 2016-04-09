const mongoose = require('mongoose');

// Schema defines how chat messages will be stored in MongoDB
const ChatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  message_body: {
    type: String,
    required: true
  }
},
{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('Chat', ChatSchema);
