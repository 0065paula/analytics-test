$('#logIn').click(function(event) {
    var userNameValue = $('#email').val();
    analytics.track('Logged In', {
    username: userNameValue
  });
    $('#createProject').removeAttr('disabled');
});

$('#createProject').click(function(event) {
    analytics.track('Create Project');
    $('#invite').removeAttr('disabled');
    $('#sdk').removeAttr('disabled');
});

$('#invite').click(function(event) {
    analytics.track('Invite User');
});

$('#sdk').click(function(event) {
    analytics.track('Install SDK');
    $('#sendData').removeAttr('disabled');
});

$('#sendData').click(function(event) {
    analytics.track('Send Data');
});