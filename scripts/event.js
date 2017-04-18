  
$(document).ready(function(){
  /*$("li a#gps").bind("tap",
            function (event) {
                if (navigator.geolocation) {
                   navigator.geolocation.getCurrentPosition(success, error);
                    
     }
    else{
    alert("Your browser does not support Geolocation!");
    } 
    });
     function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
   
    alert(longitude);
    var jsondata= "https://free-api.heweather.com/v5/weather?city="+longitude+","+latitude+"&key=a67b7d003fd941bea73be66211fce6e5";
    $.getJSON(jsondata, function(data) {
               var stringdata=JSON.stringify(data); 
               document.getElementById("text").innerText=stringdata;
              
            });
};

  function error() {
    alert("无法获取您的位置");
  }; */
  ///////很奇怪，初始化和定位的西安有bug，但是搜索的就没问题
  var jsondata= "https://free-api.heweather.com/v5/weather?city=西安&key=a67b7d003fd941bea73be66211fce6e5";
  $.getJSON(jsondata, function(data) {
               var stringdata=JSON.stringify(data);
               //alert(stringdata); 
              // document.getElementById("text").innerText=stringdata;
               var newjson=JSON.parse(stringdata);
               var source="https://cdn.heweather.com/cond_icon/"+newjson.HeWeather5[0].now.cond.code+".png";
              
               document.getElementsByTagName("img")[0].setAttribute("src",source);
               document.getElementById("cityname").innerText=newjson.HeWeather5[0].basic.city;
               document.getElementById("temp").innerText=newjson.HeWeather5[0].now.cond.txt;
               document.getElementById("status").innerText=newjson.HeWeather5[0].now.tmp;
               document.getElementById("winddir").innerText=newjson.HeWeather5[0].now.wind.dir;
               document.getElementById("windgrade").innerText=newjson.HeWeather5[0].now.wind.sc;
               document.getElementById("qual").innerText=newjson.HeWeather5[0].aqi.city.qlty;
               document.getElementById("min").innerText=newjson.HeWeather5[0].daily_forecast[0].tmp.min;
               document.getElementById("max").innerText=newjson.HeWeather5[0].daily_forecast[0].tmp.max;
            });

 
 
 
 //////////////一个伪造的定位，嘿嘿
  $("li a#gps").bind("tap",function(event){
   var input="西安";
  
  if(input!=null){
  
  var jsondata= "https://free-api.heweather.com/v5/weather?city="+input.replace("\"","")+"&key=a67b7d003fd941bea73be66211fce6e5";
  $.getJSON(jsondata, function(data) {
               var stringdata=JSON.stringify(data); 
              // document.getElementById("text").innerText=stringdata;
               var newjson=JSON.parse(stringdata);
               var source="https://cdn.heweather.com/cond_icon/"+newjson.HeWeather5[0].now.cond.code+".png";
              
               document.getElementsByTagName("img")[0].setAttribute("src",source);
               document.getElementById("cityname").innerText=newjson.HeWeather5[0].basic.city;
               document.getElementById("temp").innerText=newjson.HeWeather5[0].now.cond.txt;
               document.getElementById("status").innerText=newjson.HeWeather5[0].now.tmp;
               document.getElementById("winddir").innerText=newjson.HeWeather5[0].now.wind.dir;
               document.getElementById("windgrade").innerText=newjson.HeWeather5[0].now.wind.sc;
               document.getElementById("qual").innerText=newjson.HeWeather5[0].aqi.city.qlty;
               document.getElementById("min").innerText=newjson.HeWeather5[0].daily_forecast[0].tmp.min;
               document.getElementById("max").innerText=newjson.HeWeather5[0].daily_forecast[0].tmp.max;
            });
   }
});
 

  


  $("label").bind("tap",function(event){
   var input=document.getElementById("search").value;
  
  if(input!=null){
  
  var jsondata= "https://free-api.heweather.com/v5/weather?city="+input.replace("\"","")+"&key=a67b7d003fd941bea73be66211fce6e5";
  $.getJSON(jsondata, function(data) {
               var stringdata=JSON.stringify(data); 
              // document.getElementById("text").innerText=stringdata;
               var newjson=JSON.parse(stringdata);
               var source="https://cdn.heweather.com/cond_icon/"+newjson.HeWeather5[0].now.cond.code+".png";
              
               document.getElementsByTagName("img")[1].setAttribute("src",source); 
               document.getElementById("cityname2").innerText=newjson.HeWeather5[0].basic.city;
               document.getElementById("temp2").innerText=newjson.HeWeather5[0].now.cond.txt;
               document.getElementById("status2").innerText=newjson.HeWeather5[0].now.tmp;
               document.getElementById("winddir2").innerText="今日风向:"+newjson.HeWeather5[0].now.wind.dir;
               document.getElementById("windgrade2").innerText="今日风速:"+newjson.HeWeather5[0].now.wind.sc;
               document.getElementById("qual2").innerText="今日空气质量:"+newjson.HeWeather5[0].aqi.city.qlty;
               document.getElementById("min2").innerText="今日最低温度:"+newjson.HeWeather5[0].daily_forecast[0].tmp.min;
               document.getElementById("max2").innerText="今日最高温度:"+newjson.HeWeather5[0].daily_forecast[0].tmp.max; 
            });
   }
   if(input==""){
      alert("请输入城市：");
   } 
  });   
        
});