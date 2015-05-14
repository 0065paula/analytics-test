$('#logIn').click(function(event) {
    var userNameValue = $('#email').val();
    analytics.track('Logged In', {
    username: userNameValue
  });
    function IDGenerator() {
   
     this.length = 8;
     this.timestamp = +new Date;
     
     var _getRandomInt = function( min, max ) {
      return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
     }
     
     this.generate = function() {
       var ts = this.timestamp.toString();
       var parts = ts.split( "" ).reverse();
       var id = "";
       
       for( var i = 0; i < this.length; ++i ) {
        var index = _getRandomInt( 0, parts.length - 1 );
        id += parts[index];  
       }
       
       return id;
     }
   }
    var UID = IDGenerator();
    analytics.track('identify', {
      userID: UID,
      traits: {
        username: userNameValue
      }
    })
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