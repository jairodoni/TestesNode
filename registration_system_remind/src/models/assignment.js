const mongoose = require('../database');

const AssignmentSchema = new mongoose.Schema({
  status:{
    type: Boolean,
    require: false,
  },
  description:{
    type: String,
    require: true,
  },
  dateActivity:{
    type: Date,
    require: false,
  },
  dayWeek:[{
    type: Number,
    require: true,
  }],
  repeat:{
    type: Boolean,
    require: false,
  },
  user:{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User',
  require: true,
  },
  createdAt: {
    type:Date,
    default: Date.now,
  },
});

const Assignment = mongoose.model("Assignment", AssignmentSchema);

module.exports = Assignment;