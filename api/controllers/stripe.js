'use strict';

const stripe = require( '../../lib/stripe' )

module.exports = ( router ) => {

  router.get( '/stripe/subscription/test', ( req, res ) => {
    res.status( 200 ).json({ message: 'it worked' })
  })

  // update payment info from stripe checkout webhook
  router.post( '/stripe/subscription/update', ( req, res ) => {

    let subscription = req.user.paymentInfo.subscription

    stripe.subscriptions.retrieve( subscription )
    .then( sub => {
      stripe.subscriptions.update( subscription, {
        cancel_at_period_end: false,
        items: [
          {
            id: sub.items.data[ 0 ].id,
            plan: req.body.newPlanId,
          }
        ]
      })
      .then(() => {
        req.user.paymentInfo.plan = req.body.newPlanId

        models.User.updateOne({
          _id: req.user._id
        },
          { paymentInfo: req.user.paymentInfo }
        )
        res.status( 200 ).json({
          message: 'Succesfully updated your plan!',
          user: req.user
        })
      })
      .catch(() => {
        res.status( 500 ).json({
          message: 'We had trouble updating your plan, please try again later'
        })
      })
    })
    .catch( error => {
      res.status( 404 ).json({
        message: 'We had trouble updating your plan, please try again later',
        type: error.type
      })
    })
  })

  return router;
}
