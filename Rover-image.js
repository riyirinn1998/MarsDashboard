<!--   Rover image API   -->


        var endpoint = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=';
        var api_key = 'F9t29gnyj1ihsdObA7VYKNRFynfJtcsCh6Ud8frp';
      // Yilin's api key = 'F9t29gnyj1ihsdObA7VYKNRFynfJtcsCh6Ud8frp'
        var url = endpoint + api_key ;
        console.log('Fetching weather data from -' + url);

        $.getJSON(url, processResult);

        function processResult(data) {
          console.log(data);
          
          $('#rover1').append('<img src="' + data['photos'][777]['img_src'] + '" alt="Mars Rover Image1">' )
          $('#rover-info1').append('<p>Earth Date: ' + data['photos'][777]['earth_date'] + '</p>')
          $('#rover-info1').append('<p>Camera Name: ' + data['photos'][777]['camera']['full_name'] +'</p>')
          $('#rover-info1').append('<p>Rover Name: ' + data['photos'][777]['rover']['name'] +'</p>')
          
          $('#rover2').append('<img src="' + data['photos'][130]['img_src'] + '" alt="Mars Rover Image2">' )
          $('#rover-info2').append('<p>Earth Date: ' + data['photos'][130]['earth_date'] + '</p>')
          $('#rover-info2').append('<p>Camera Name: ' + data['photos'][130]['camera']['full_name'] +'</p>')
          $('#rover-info2').append('<p>Rover Name: ' + data['photos'][130]['rover']['name'] +'</p>')
          
          $('#rover3').append('<img src="' + data['photos'][333]['img_src'] + '" alt="Mars Rover Image3">' )
          $('#rover-info3').append('<p>Earth Date: ' + data['photos'][333]['earth_date'] + '</p>')
          $('#rover-info3').append('<p>Camera Name: ' + data['photos'][333]['camera']['full_name'] +'</p>')
          $('#rover-info3').append('<p>Rover Name: ' + data['photos'][333]['rover']['name'] +'</p>')
          
          $('#rover4').append('<img src="' + data['photos'][555]['img_src'] + '" alt="Mars Rover Image4">' )
          $('#rover-info4').append('<p>Earth Date: ' + data['photos'][555]['earth_date'] + '</p>')
          $('#rover-info4').append('<p>Camera Name: ' + data['photos'][555]['camera']['full_name'] +'</p>')
          $('#rover-info4').append('<p>Rover Name: ' + data['photos'][555]['rover']['name'] +'</p>')
          
          $('#rover5').append('<img src="' + data['photos'][666]['img_src'] + '" alt="Mars Rover Image5">' )
          $('#rover-info5').append('<p>Earth Date: ' + data['photos'][666]['earth_date'] + '</p>')
          $('#rover-info5').append('<p>Camera Name: ' + data['photos'][666]['camera']['full_name'] +'</p>')
          $('#rover-info5').append('<p>Rover Name: ' + data['photos'][666]['rover']['name'] +'</p>')
          
          
          }
<!--  end of Rover image API   -->
