window.addEventListener("load", function(){

hidepass = () => {
    var passwordinput = document.getElementById("typepass");
    var hidepassicon = document.getElementById("eyeopen")

    if (passwordinput.type === "password"){
        passwordinput.type = "text"
        hidepassicon.setAttribute("name", "eye")

    }else{
        passwordinput.type = "password"
        hidepassicon.setAttribute("name", "eye-off")

    }
}

hideretypepass = () => {
    var passwordinput = document.getElementById("retypepass");
    var hidepassicon = document.getElementById("re-eyeopen")


    if (passwordinput.type === "password"){
        passwordinput.type = "text"
        hidepassicon.setAttribute("name", "eye")

    }else{
        passwordinput.type = "password"
        hidepassicon.setAttribute("name", "eye-off")

    }
}

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

});