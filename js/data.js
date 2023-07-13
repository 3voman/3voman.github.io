window.addEventListener("load", function(){

    var headerconstruction = 
        '<div class="headercontent">'+
        '<div class="header-leftsection">'+
            '<div class="logospace">'+
                '<img src="#" alt="">'+
                '<a href="/index.html">Logo</a>'+
            '</div>'+
            '<div class="menul">'+
                '<ul>'+
                    '<li>'+
                        '<a href="/index.html" class="selected">Home</a>'+
                        '<div class="marker"></div>'+
                    '</li>'+
                    '<li>'+
                        '<a href="/index.html" class="selected">About</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="/index.html" class="selected">Contact</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="/Stranger-Chat/Chat/" class="selected">Chat</a>'+
                    '</li>'+
                    '<li>'+
                        '<a href="/User-Profile/" class="selected">User Profile</a>'+
                    '</li>'+
                '</ul>'+
            '</div>'+
        '</div>'+
        '<div class="header-rightsection">'+
            '<div class="row-2">'+
                '<div class="header-prof-pic" id="profile-group">'+
                    '<img src="/images/me.jpg" id="profile_pic" class="header-prof-picture" >'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'
    
    document.getElementById("headerspace").innerHTML = headerconstruction;

})