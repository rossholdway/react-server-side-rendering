import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from "react-dom/server";
import StaticRouter from 'react-router-dom/StaticRouter';
import App from './app/app';

import template from './template';

const port = process.env.PORT || 3000;
const server = express();

server.use('/assets', express.static('assets'));

server.get('*', (req, res) => {
  const staticContext = {}

  const appString = renderToString(<StaticRouter location={req.url} context={staticContext}><App /></StaticRouter>);

  const html = template({
    body: appString,
    title: 'Page Title'
  });

  res.status(staticContext.statusCode || 200).send(html);
});

server.listen(port);

console.log(`Server running on port ${port}. Visit http://localhost:${port}`);
