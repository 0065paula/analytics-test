$('#logIn').click(function(event) {
    analytics.track('Identify', {
    username: $('#email').val()
  });
});