// Imports
const routes = require('express').Router();
const contacts = require('../controllers/contacts')



// Define a route
routes.get('/', contacts.estherRoute);

routes.get('/michael', contacts.michaelRoute);

routes.get('/alana', contacts.alanaRoute);

module.exports = {
    routes
};