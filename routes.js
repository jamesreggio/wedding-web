const router = require('next-routes')();

module.exports = router.add('home', '/').add('rsvp', '/rsvp', 'home');
