$(document).ready(function(){
  $("#makeRecord").change(function(){
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'YOUR API KEY HERE',
        'message': {
          'from_email': 'proust@dont.have',
          'to': [
              {
                'email': 'derevjagint@gmail.com',
                'name': 'johny English',
                'type': 'to'
              },
              {
                'email': 'RECIPIENT_NO_2@EMAIL.HERE',
                'name': 'ANOTHER RECIPIENT NAME (OPTIONAL)',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Antony Johnso!',
          'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
        }
      }
     }).done(function(response) {
       alert(response);
     });
  });
});