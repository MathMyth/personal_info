function sendMail() {
    var link = "mailto:dixit291198@gmail.com"
             + "?cc=mathmyth20@gmail.com"
             + "&subject=" + encodeURIComponent("New Message From Your Customer!")
             + "&body=" + encodeURIComponent(document.getElementById('id1').value)
    ;
    
    window.location.href = link;
}