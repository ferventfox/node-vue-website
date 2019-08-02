'use strict'

// check for node environment, if none, assume dev
if( !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ) {
  // require .env configuration
  require( 'dotenv' ).config();
}

const cluster = require( 'cluster' );
const numCPUs = require( 'os' ).cpus().length;

// require( './db' )().then( models => {
  const server  = require( './server' )( );

  // configured number of cores to use
  let cores = process.env.CLUSTER;

  // boot app
  const listen = ( log ) => {
    return server.listen( process.env.PORT, () => {
      console.log( log );
    });
  }

  // require application
  if( !cores ) {
    listen( `Server listening on port ${ process.env.PORT }.` );
  }
  else {
    let clusterSize;

    if( cores.toLowerCase() === 'max' ) {
      clusterSize = numCPUs;
    }
    else {
      if( parseInt( cores ) ) {
        cores = parseInt( cores );
        clusterSize = ( cores > numCPUs ? numCPUs : cores );
      }
      else {
        clusterSize = 1;
      }
    }
    if( cluster.isMaster && clusterSize > 1 ) {
      for( let i = 0; i < clusterSize; i++ ) {
        cluster.fork();
      }
      console.log( `Master thread PID:${ process.pid }, starting clusters...` );
    }
    else {
      listen( `Worker thread PID:${ process.pid } started, port ${ process.env.PORT }`);
    }
  }

// })
