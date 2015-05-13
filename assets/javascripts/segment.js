$('#logIn').click(function(event) {
    var userNameValue = $('#email').val();
    analytics.track('Logged In', {
    username: userNameValue
  });
});