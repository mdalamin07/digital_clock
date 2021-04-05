function digital_clock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var secounds = date.getSeconds();
    var formet = "AM"

    if(hours == 0){
        hours = 12;
    };
    if(hours >= 12){
        formet = "PM"
    };
    if(hours > 12){
        hours = hours - 12;
    };

    minutes = minutes < 10 ? "0" + minutes : minutes;
    secounds = secounds < 10 ? "0" + secounds : secounds;


    var final_time =hours + ":" + minutes + ":" + secounds + " " + formet;

    $(".time").text(final_time);
}

setInterval(digital_clock,1000);