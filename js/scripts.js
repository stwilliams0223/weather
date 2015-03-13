
//Hide Content
$('.stuff').hide();

// click button, capture zip field
$('#getZip').click(function() {
  
  // stop default, <form> from submitting data
  event.preventDefault();
  
  // get and store data
  var zip = $('#zip').val();
  console.log(zip); 

  //Show Content
  $('.stuff').show();  
  // Get Weather
  $.simpleWeather({
    
    location: zip, 
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // get weather OK? 
      console.log(weather);

         // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      // Get & store state
      var state = weather.region;
      // Get & store thumbnail
      var thumb = weather.image;

      var text = weather.text;

      var high = weather.high;

      var low = weather.low;




      $('.temp').text(temp);
      $('.city').text(city);
      $('.state').text(state);
      $('.text').text(text);
      $('.high').text('High: '+high);
      $('.low').text('Low: '+low);
      $('.thumb img').attr('src', thumb);
    
    },  



    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // clear zip
  $('#getWeather').val('');
  
});
