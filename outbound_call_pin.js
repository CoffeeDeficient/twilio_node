const accountSid = 'ACCOUNT_SID';
const authToken = 'AUTH_TOKEN';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
	      url: 'http://91e30fc6.ngrok.io/outboundpin',
	      method: 'post',
	               to: '+1XXXXXXXXXX',
	               from: '+1XXXXXXXXXX'
	             })
      .then(call => console.log(call.sid))
      .done();
