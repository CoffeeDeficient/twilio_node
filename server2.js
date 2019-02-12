const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

// Create a route that will handle Twilio webhook requests, sent as an
// HTTP POST to /voice in our application
app.post('/voice', (request, response) => {
  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();
  twiml.say({ voice: 'alice' }, 'You call was received.  Things are working as expected!  This is cause for celebration');

  // Render the response as XML in reply to the webhook request
  response.type('text/xml');
  response.send(twiml.toString());
});

app.post('/outbound', (request, response) => {
  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();
  twiml.say({ voice: 'alice' }, 'This is an outbound call.  I expect the answering party to hear this message.');

  // Render the response as XML in reply to the webhook request
  response.type('text/xml');
  response.send(twiml.toString());
});

app.post('/outboundpin', (request, response) => {
  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();
  twiml.play({
	  digits: 'wwwwww987654321'
  });
  twiml.say({ voice: 'alice' }, 'This is an outbound call with pin.  I expect the answering party to hear this message.');

  // Render the response as XML in reply to the webhook request
  response.type('text/xml');
  response.send(twiml.toString());
});
app.post('/sms', (req, res) => {
	  const twiml = new MessagingResponse();

	  twiml.message('This is the ship that made teh kessel run in 12 parsecs?');

	  res.writeHead(200, {'Content-Type': 'text/xml'});
	  res.end(twiml.toString());
});


// Create an HTTP server and listen for requests on port 3000
app.listen(3000);
