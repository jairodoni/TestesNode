const express = require('express');
const authMiddleware = require('../middlewares/auth')

const Assignment = require('../models/assignment');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const assignments = await Assignment.find().populate('user');

    return res.send({ assignments });
  } catch (error) {
    return res.status(400).send({ error: 'Erro loading assignments' });
  }
});

router.get('/:assignmentId', async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.assignmentId).populate('user');

    return res.send({ assignment });
  } catch (error) {
    return res.status(400).send({ error: 'Erro loading assignment' });
  }
});

router.post('/', async (req, res) =>  {
  try {
    const status = false;
    const repeat = false;
    // let date = new Date();
    // const day = new  Array[1,2,3,4,5,6,7];
    // dayWeek = day[date.getDay()];
    
    const { title, description, dateActivity } = req.body;
    const assignment = await Assignment.create({ title, status, description, dateActivity, repeat, user: req.userId});

    await assignment.save();

    return res.send({ assignment });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: 'Error creating new assignment' });
  }
});

router.put('/:assignmentId', async (req, res) => {
  try {
    const { title, status, description, repeat, dateActivity } = req.body;

    const assignment = await Assignment.findByIdAndUpdate(req.params.assignmentId,{ 
      title,
      status,
      description,
      repeat,
      dateActivity,
    },  { new: true });

    await assignment.save();

    return res.send({ assignment });
  } catch (err) {
    return res.status(400).send({ error: 'Error updating assignment' });
  }
});

router.delete('/:assignmentId', async (req, res) => {
  try {
    await Assignment.findByIdAndRemove(req.params.assignmentId);
    
    return res.send();
  } catch (err) {
    return res.status(400).send({ error: 'Erro deleting assignment' });
  }
});



module.exports = app => app.use('/assignments', router);
