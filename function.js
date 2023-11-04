function clock() {
    var hour = new Date().getHours();
    
    var min = new Date().getMinutes().toString().padStart(2,'0');
    
    var sec = new Date().getSeconds().toString().padStart(2,'0');
    
    var date = new Date().getDate();
    var month = new Date().getMonth();

    var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var months = monthName[month];
    var year = new Date().getFullYear();
    var hours ="";

    if (hour >= 13){
        hours = hour - 12;
    }
    else{
        hours = hour
    }
    document.getElementById("h1").innerHTML = hours.toString().padStart(2,'0');
    document.getElementById("m2").innerHTML = min;
    document.getElementById("s3").innerHTML = sec;
    
    if (hour >= 12) {
        document.getElementById("s4").innerHTML = "PM";
    }  else {
        document.getElementById("s4").innerHTML = "AM";
    }


    document.getElementById("calender1").innerHTML = date;
    document.getElementById("calender2").innerHTML = months;
    document.getElementById("calender3").innerHTML = year;

    
    
}
setInterval(clock, 1000);