const next = require('next');
const express = require('express');
const routes = require('./routes');

const immutableOptions = {
  maxAge: Infinity,
  immutable: true,
};

const app = next({dev: process.env.NODE_ENV !== 'production'});

app.prepare().then(() =>
  express()
    .disable('x-powered-by')
    .use(express.static('root'))
    .use('/static', express.static('static', immutableOptions))
    .use(routes.getRequestHandler(app))
    .listen(3000),
);
