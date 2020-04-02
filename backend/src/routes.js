const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;


/**
 * Metodos HTTP:
 * 
 * GET:     Buscar ima info do backend
 * POST:    Criar uma info do backend
 * PUT:     Alterar uma info do backend
 * DELETE:  Deletar uma info do bakkend
 */

 /**
  * Tipos de parametros:
  * 
  * Query Paramans: Parametros nomeados enviado na rota após "?" (Filtros, paginação)
  *                 Pode colocar "&" pra testar varias coisas juntas
  * Route Paramans: Parametros utilizados para indentificar recursos
  * Request Body  : Corpo da requisição, utilizado para criar e alterar recursos
  * 
  */