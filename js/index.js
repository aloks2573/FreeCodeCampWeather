$(document).ready(function()
                 {
  var long;
  var lat;
 if (navigator.geolocation) {
   
navigator.geolocation.getCurrentPosition(function(position) 
                                         {
  long=position.coords.longitude;
  lat=position.coords.latitude;

  var api= 'http://openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=b6907d289e10d714a6e88b30761fae22'; 
    
    $.getJSON(api, function(data)
            { 
    var weatherType=data.weather[0].description;
     var cTemp=data.main.temp;
      var fTemp;
      var KTemp;
      var tempSwap=true;
    var windSpeed=data.wind.speed;
    var cityName=data.name;
      fTemp=((cTemp*1.8)+32).toFixed(2);
      kelvin=(cTemp-273.15).toFixed(2);
    $("#city").html(cityName);
      $("#weatherType").html(weatherType);
      $("#fTemp").html(fTemp+" &#8457");
      $("#fTemp").click(function()
                        {
         if(tempSwap===false)
      {
        $("#fTemp").html(cTemp+" &#8451");
        tempSwap=true;
      }
                        else
        {
          $("#fTemp").html(fTemp + " &#8457");
          tempSwap=false;
        }
        
      });
      
      windSpeed=(2.237*(windSpeed)).toFixed(1);
      $("#wind").html(windSpeed +" mph");
      
      
      if(cTemp>20)
        {
          $('body').css('background-image','url(http://hdwallpapersbackgrounds.us/backgrounds-image/wallpapers-hd-4s-1920x1080/hd-wallpapers-desktop-53503gwks-4s-1920x1080.jpg)');
        }
      else if(cTemp<20 && cTemp>10)
        {
          $('body').css('background-image','url(https://wallpaperscraft.com/image/clouds_heavy_storm_lightning_bad_weather_road_asphalt_lamps_55492_1920x1080.jpg)');
        }
      else
        {
         $('body').css('backgroud-image','url(https://wallpaperscraft.com/image/winter_fog_trees_dullness_cold_naked_60839_1920x1080.jpg)');
        }
  }); 
}); 
 }
});