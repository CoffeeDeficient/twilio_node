# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client



# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACCOUNT_SID'
auth_token = 'AUTH_TOKEN'
client = Client(account_sid, auth_token)

#PLACE A CALL
# call = client.calls.create(
#                         url='https://handler.twilio.com/twiml/EHb54ac450119cc5c8adcab5cb21c6498b',
#                         to='+1XXXXXXXXXX',
#                         from_='+1XXXXXXXXXX'
#                     )
#
# print(call.sid)

#SEND AN SMS
# message = client.messages.create(
#                               from_='+1XXXXXXXXXX',
#                               body='Test SMS from Twilio!  Woot!',
#                               to='+1XXXXXXXXXX'
#                           )
#
# print(message.sid)

#SEND AN MMS
# message = client.messages.create(
#                               from_='+1XXXXXXXXXX',
#                               body='Test MMS from Twilio!  Woot!',
#                               to='+1XXXXXXXXXX',
#                               media_url='https://demo.twilio.com/owl.png'
#                           )
#
# print(message.sid)

print("SMS/MMS Log:")
print("--------------------")
for sms in client.messages.list():
    #print(sms.type_)
    print(sms.media)
    type = "SMS" if sms.media == 'null' else "MMS"
    print(sms.date_created.strftime("%Y-%m-%d %H:%M:%S") + " :: (" + type + ") " + sms.from_ + " --> " + sms.to)
print("\nCall Log:")
print("--------------------")
for call in client.calls.list():
    print(call.date_created.strftime("%Y-%m-%d %H:%M:%S") + " :: " + call.from_ + " --> " + call.to)
