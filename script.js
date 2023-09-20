
$(document).ready(function(){
    $("button").click(function(){
    let city=$(".search-bar").val();
    if(city.length != 0 )
        {
            $.ajax({
            url:"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=9f23b56e8dcad8299bf4e5a2a3fc932b",
            type: "GET",
            dataType: "jsonp",
            beforeSend:function(){
                $("#loading_item").html("Loading data please wait....")
            },
            success:function(data){
            console.log(data);
                $("#loading_item").html(" ")
        if( data.weather[0].main == "Clear"){
                $("#body") .css({ "background-image": "url('images/clear.jpg')",     "background-repeat": "no-repeat"  });
        } else if(data.weather[0].main == "Clouds"){
                $("#body") .css({ "background-image": "url('images/clouds.png')"," margin": "0%","background-repeat": "no-repeat"  });
        } else if(data.weather[0].main == "Haze" || data.weather[0].main == "Mist" || data.weather[0].main == "Fog"){
                $("#body") .css({ "background-image": "url('images/mist.jpg')"," margin": "0%", "background-repeat": "no-repeat" });
        } else if(data.weather[0].main == "Rain"){
                $("#body") .css({ "background-image": "url('images/rainy.jpg')"," margin": "0%", "background-repeat": "no-repeat"  });
        }  else if(data.weather[0].main == "Sunny"){
                $("#body") .css({ "background-image": "url('images/sunny.jpg')"," margin": "0%", "background-repeat": "no-repeat"  });
        } else if(data.weather[0].main == "Snow"){
                $("#body") .css({ "background-image": "url('images/snow.jpg')"," margin": "0%", "background-repeat": "no-repeat"  });
        }else if(data.weather[0].main == "Drizzle"){
                $("#body") .css({ "background-image": "url('images/drizzle.jpg')"," margin": "0%", "background-repeat": "no-repeat"  });
        }else if(data.weather[0].main == "Thunderstorm"){
                $("#body") .css({ "background-image": "url('images/thunderstrom.jpg')"," margin": "0%", "background-repeat": "no-repeat"  });
        }else{
                $("#body") .css({ "background-image": "url('images/bg.jpg')"," margin": "0%", "background-repeat": "no-repeat"  });
        }
        $("#body").html(
`
<section id="weather_div">
   <div id="weather_detail">
        <div class="location-deatils">
           <div class="location">${data.name}, ${data.sys.country}</div>
        </div>
        <div class="weather-status">
           <div class="temp" >${Math.round(data.main.temp)}&deg;C </div>
           <div class="weather" > ${data.weather[0].main}   </div>
           <div class="min-max">${Math.floor(data.main.temp_min)}&deg;C (min) / ${Math.ceil(data.main.temp_max)}&deg;C (max) </div>
        </div>
        <hr>
        <div class="day-details">
        <div class="basic">Feels like ${data.main.feels_like}&deg;C | Humidity ${data.main.humidity}%  <br> Pressure ${data.main.pressure} mb | Wind ${data.wind.speed} KMPH</div>
        </div>
  </div>
</section>
        `)
            },
        error: function() {
                $("#loading_item").html(" ")
                $("#First_page").remove();
                $("#error").html('Please provide valid city or country name.....');
                $("#error").css("padding-top","50px");   
            }
            })
    
   } else {
                $("#loading_item").html(" ")
                $("#First_page").remove();
                $("#error").html('Empty Input, Please enter any city.......!!!!');
                $("#error").css("padding-top","50px");         
        }
    })
});
