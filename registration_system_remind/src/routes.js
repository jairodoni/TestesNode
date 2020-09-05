const { Router } = require('express');
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');
const RecoverPassword = require('./controllers/RecoverPassword');
const AssignmentController = require('./controllers/AssignmentController');

const routes = Router();

//Cadastro e Login
routes.post('/auth', AuthController.store);
routes.post('/register', UserController.store);
routes.post('/forgot_password', RecoverPassword.create);
routes.post('/reset_password', RecoverPassword.store);

//Catastro de Lembretes
routes.get('/assignments', AssignmentController.index);
routes.get('/assignments/:assignmentId', AssignmentController.show);
routes.post('/assignments', AssignmentController.store);
routes.put('/assignments/:assignmentId', AssignmentController.update);
routes.delete('/assignments/:assignmentId', AssignmentController.destroy);

module.exports = routes;