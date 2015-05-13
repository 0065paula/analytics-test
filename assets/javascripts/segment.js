$('#logIn').click(function(event) {
    var userNameValue = $('#email').val();
    analytics.track('Logged In', {
    username: userNameValue
  });
});

$('#createProject').click(function(event) {
    analytics.track('Create Project');
});