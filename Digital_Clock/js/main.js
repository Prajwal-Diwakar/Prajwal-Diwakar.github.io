function showTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    // USE OF DATE FUNCTION.

    var session = "AM";
    if (hour == 0) {
        hour = 12; // To give the 12 hour format
    }
    if (hour > 12)      
    {
        hour = hour - 12; // it means 1pm that is 13
        session = "PM";
    }
    hour=(hour<10)?"0"+hour:hour;
    min=(min<10)?"0"+min:min;
    sec=(sec<10)?"0"+sec:sec;

    document.getElementById("digitalclock").innerHTML = hour + ":" + min + ":" + sec+"  "+ session;
    setTimeout(showTime, 1000);
}
showTime();