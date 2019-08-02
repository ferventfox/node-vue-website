'use strict';

module.exports = ( router ) => {

  router.use( '/stripe', require( './stripe' )( router ));

  return router
}
