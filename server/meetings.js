const meetingsRouter = require('express').Router();

module.exports = meetingsRouter;

const { 
  addToDatabase,
  getAllFromDatabase,
  deleteAllFromDatabase,
  createMeeting
} = require('./db');


meetingsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
  const addedMeeting = addToDatabase('meetings', createMeeting());
  res.status(201).send(addedMeeting);
});

meetingsRouter.delete('/', (req, res, next) => {
  deleteAllFromDatabase('minions');
  res.status(204).send();
})