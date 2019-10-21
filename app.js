setInterval(() => {
    var date=new Date();
var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();
var format=date.getHours()<12 ? "am":"pm";
document.getElementById("clock").innerHTML=`${h}:${m}:${s} ${format}`;
}, 1000);