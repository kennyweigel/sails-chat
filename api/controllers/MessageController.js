/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	index: function(req, res) {
    res.view();
  },

  new: function(req, res) {
    var content = req.param('content');
    
    console.log('message : new');

    if (content) {
      console.log('new content')
      Message.create({'content': content}, function(err, message) {
        console.log(message);
        Message.publishCreate({id: message.id, content: message.content });
      });
    }
  },

  listen: function(req, res) {
    console.log('message : listen');
    Message.watch(req);
  }

};

