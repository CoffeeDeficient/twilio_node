const accountSid = 'ACCOUNT_SID';
const authToken = 'AUTH_TOKEN';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
	      url: 'http://e8ea6b64.ngrok.io/outbound',
	      method: 'post',
	               to: '+1XXXXXXXXXX',
	               from: '+1XXXXXXXXXX'
	             })
      .then(call => console.log(call.sid))
      .done();
