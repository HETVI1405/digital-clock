function updateClock() {
    var now = new Date();
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()
    var tarik =now.getDate()
    var month =now.getMonth()
    var year =now.getFullYear()
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = days[now.getDay()];

    $('#clock').text(hours + " "+':'+ " "+ + minutes  + " "+':' + " "+ seconds );
    $('#date_time').text(tarik + " "+ '/'+ " " + month + " "+ '/'+ " " + year );
    $('#day').text(day)
}
setInterval(updateClock, 1000);
updateClock(); 
  

