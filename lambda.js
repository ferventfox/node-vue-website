'use strict';

// check for node environment, if none, assume dev
if( !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ) {
  // require .env configuration
  require( 'dotenv' ).config();
}

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below, then redeploy (`npm run package-deploy`)
const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/svg+xml',
  'image/x-icon',
  'image/vnd.microsoft.icon',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml'
]


const awsServerlessExpress = require( 'aws-serverless-express' )
const mongoose = require( 'mongoose' );

let db     = null;
let models = null;


exports.handler = async ( event, context ) => {

  //prevent timeout from waiting event loop
  context.callbackWaitsForEmptyEventLoop = false;

  if( db == null ) {
    db = await mongoose.createConnection( process.env.MONGO_URI , {
      useNewUrlParser:  true,
      useCreateIndex:   true,
      useFindAndModify: false,
      bufferCommands:   false,
      bufferMaxEntries: 0
    })
  }
  if( models == null ) models = require( './db/schemas' )( db )

  const server  = require( './server' )( models )
  const app     = awsServerlessExpress.createServer( server, null, binaryMimeTypes )

  return awsServerlessExpress.proxy( app, event, context, 'PROMISE' ).promise

}
