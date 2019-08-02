'use strict';

const parentApiPath = 'api';

module.exports = ( router ) => {

  // API controllers/routing
  router.use( `/${parentApiPath}`, require( './controllers' )( router ));

  // catchall api route
  router.use( `/${parentApiPath}/*`, ( req, res ) => {
    res.sendStatus( 404 )
  });

  return router;
}
