window.addEventListener("load", function(){

$(document).ready(function(){
    $(".darkicon1").click(function(){
        $("body").toggleClass("dark-mode");
    if($("body").hasClass("dark-mode")){
        localStorage.setItem("theme", "aqbnela")
        $(".darkicon1").attr("name", "sunny");
    }else{
        localStorage.setItem("theme", "aqcxela")
        $(".darkicon1").attr("name", "moon"); 
    }
  });
    if(localStorage.getItem("theme")== "aqcxela"){
        $("body").attr("class", "light")
    }else{
        $("body").attr("class", "dark-mode")
        $(".darkicon1").attr("name", "sunny");
    }

})

$(document).ready(function(){
 $("#profile_pic").click(function(){
    $("#accControl").toggle("display", "block")
})})

});

