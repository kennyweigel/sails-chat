$(function() {

  $('button').click(function() {
    console.log('submit click');
    io.socket.post('/message/new', {content: $('input').val()}, function(data) {
      console.log('submit: ' + data);
    });
  });

  io.socket.get('/message/listen');

  io.socket.on('message', function(data) {
    console.log(data);
    $('.messages').append('<div>' + data.data.content + '</div>');
  });

});