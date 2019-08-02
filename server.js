'use strict';

const express = require( 'express' )
const cors = require( 'cors' )
const body = require( 'body-parser' )
// const db   = require( './db' )
const app  = express()

// for aws lambda
const compression   = require( 'compression' );
const awsMiddleware = require( 'aws-serverless-express/middleware' );

module.exports = () => {
  app.use( compression());
  app.use( awsMiddleware.eventContext());

  // allow cross origin resource sharing
  app.use( cors());

  // parse request body
  app.use( body.json({
    verify: ( req, res, buf ) => req.rawBody = buf.toString()
  }));
  app.use( body.urlencoded({ extended: false }));

  // servic static assets
  app.use( express.static( 'dist' ));

  // API routes
  app.use(( req, res, next ) => {
    // require('./lib/middleware')( req, res, next );
    next()
  })
  // api routes
  app.all( '/*', require( './api' )( express.Router() ));

  return app;
}
