const next = require('next');
const express = require('express');
const routes = require('./routes');

const immutableOptions = {
  maxAge: Infinity,
  immutable: true,
};

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});

app.prepare().then(() =>
  express()
    .disable('x-powered-by')
    .use(express.static('root'))
    .use('/static', express.static('static', immutableOptions))
    .use(routes.getRequestHandler(app))
    .listen(process.env.PORT || 3000),
);
