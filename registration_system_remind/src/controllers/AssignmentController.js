const express = require('express');
const authMiddleware = require('../middlewares/auth')
const Assignment = require('../models/assignment');

const router = express.Router();

router.use(authMiddleware);
module.exports = {
  async index(req, res){
    try {
      const assignments = await Assignment.find().populate('user');

      return res.send({ assignments });
    } catch (error) {
      return res.status(400).send({ error: 'Erro loading assignments' });
    }
  },

  async show(req, res){
    try {
      const assignment = await Assignment.findById(req.params.assignmentId).populate('user');

      return res.send({ assignment });
    } catch (error) {
      return res.status(400).send({ error: 'Erro loading assignment' });
    }
  },

  async store(req, res){
    try {
      const status = false;
      const repeat = false;
      const { description, dateActivity } = req.body;
      
      const assignment = await Assignment.create({ status, description, dateActivity, repeat, user: req.userId});

      await assignment.save();

      return res.send({ assignment });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: 'Error creating new assignment' });
    }
  },

  async update(req, res){
    try {
      const { description, status, repeat, dateActivity } = req.body;

      const assignment = await Assignment.findByIdAndUpdate(req.params.assignmentId,{ 
        description,
        status,
        repeat, 
        dateActivity,
      },  { new: true });

      await assignment.save();

      return res.send({ assignment });
    } catch (err) {
      return res.status(400).send({ error: 'Error updating assignment' });
    }
  },

  async destroy(req, res){
    try {
      await Assignment.findByIdAndRemove(req.params.assignmentId);
      
      return res.send();
    } catch (err) {
      return res.status(400).send({ error: 'Erro deleting assignment' });
    }
  }
};



