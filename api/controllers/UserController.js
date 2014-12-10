/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  login: function(req, res) {
    console.log('user:login');
    res.view({error: null});
  },

  authenticate: function(req,res) {
    console.log('user:authenticate');
    var name = req.param('name'),
      password = req.param('password');

    console.log('name: ' + name + ' password: ' + password);

    if (req.method == 'POST' && name && password) {
      User.findOne({name: name, password: password}, function(err, user) {
        if (user) {
          req.session.authenticated = true;
          res.redirect('/message/index');
        } else {
          res.view('user/login', {error: 'incorrect username and password'});
        }
      });
    } else {
      res.redirect('/user/login');
    }
  }
};

