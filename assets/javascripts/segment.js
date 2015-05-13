$('#logIn').click(function(event) {
    var userNameValue = $('#email').val();
    analytics.track('Identify', {
    username: userNameValue
  });
});