const accountSid = 'ACCOUNT_SID';
const authToken = 'AUTH_TOKEN';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
	               to: '+1XXXXXXXXXX',
	               from: '+1XXXXXXXXXX',
	      	       body: 'This is an outbound SMS'
	             })
      .then(message => console.log(message.sid))
      .done();
