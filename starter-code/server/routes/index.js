const express       = require('express');
const journalRoutes = require('./api/journal-entries');
const router        = express.Router();

router.use('/api', journalRoutes);



// /* GET login page. */
// router.route('/')
//  get((req, res, next) => {
//        if (req.user){

//         res.render('index');
//         } else {

//         res.redirect('/login');
//         }
//       })

// router.get('/login', ensureLoggedOut("/mytrips"), (req, res, next) => {
//         res.render('login');
// })


module.exports = router;
