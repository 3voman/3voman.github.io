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
});