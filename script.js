const todayDiv = document.getElementById("today")
const timeDiv = document.getElementById("time")

document.documentElement.addEventListener('touchstart',function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
},false);

function getTime(){
    let now = new Date();
    timeDiv.textContent = now;
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    const week = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
    let day = week[now.getDay()];
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    month = month < 10 ? `0${month}` : month
    date = date < 10 ? `0${date}` : date
    hour = hour < 10 ? `0${hour}` : hour
    minute = minute < 10 ? `0${minute}` : minute
    second = second < 10 ? `0${second}` : second

    todayDiv.textContent = `${year}-${month}-${date}-${day}`
    timeDiv.textContent = `${hour}:${minute}:${second}`
}

getTime()
setInterval(getTime, 1000)

var i = 1; 
function add_row(){
    var myTbody = document.getElementById('mytable');
    var row = myTbody.insertRow(myTbody.rows.length);
    var count = document.getElementById('count').value;
    var re = document.getElementById('re').value;
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    cell0.innerHTML = i;
    i++
    var result = Math.floor((Number(count) + Number(re)) * Number(1.25));
    var now = new Date(new Date().setMinutes(new Date().getMinutes() + result));
    let hour = now.getHours();
    let minute = now.getMinutes();
    hour = hour < 10 ? `0${hour}` : hour
    minute = minute < 10 ? `0${minute}` : minute
    var snow = new Date(now.setMinutes(now.getMinutes()-14));
    let shour = snow.getHours();
    let sminute = snow.getMinutes();
    

    cell1.innerHTML = count;
    cell2.innerHTML = re;
    cell3.innerHTML = hour + ":" + minute;
    cell4.innerHTML = shour + ":" + sminute;
    if(i % 2 == 0){
        cell5.innerHTML = "V"
    }

    var now1 = new Date(new Date().setMinutes(new Date().getMinutes()));//현재시간
    var now2 = new Date(new Date().setMinutes(new Date().getMinutes() + result));
    var nhour = now1.getHours();
    var year = now2.getFullYear();
    var month = now2.getMonth()+1;
    var day = now2.getDate();
    var hours = now2.getHours();
    var minutes = now2.getMinutes();

    var sttDt = year+"-"+month+"-"+day;
    sttDt = sttDt.split("-");
    var sttYear = sttDt[0];
    var sttMonth = sttDt[1];
    var sttDay = sttDt[2];
    var sttHours = 24;
    var sttMinutes = 07;
    var date1 = new Date(year, month, day, hours, minutes);
    var date2 = new Date(sttYear, sttMonth, sttDay, sttHours, sttMinutes);
    var elapsedMSec = date2.getTime() - date1.getTime(); 
    var elapsedMin = elapsedMSec / 1000 / 60;

    if(nhour < 16){
        var sttHours = 15;
        var sttMinutes = 22;
        var date1 = new Date(year, month, day, hours, minutes);
        var date2 = new Date(sttYear, sttMonth, sttDay, sttHours, sttMinutes);
        var elapsedMSec = date2.getTime() - date1.getTime(); 
        var elapsedMin = elapsedMSec / 1000 / 60;
        last = (elapsedMin / (9 - i + 1)) / 1.25;
                
        const element2 = document.getElementById('expect2');
        element2.innerHTML = "(주간) "+ i +"회차 수량: " + Math.round(last) +" 개";
    }
    else{
        var sttHours = 24;
        var sttMinutes = 07;
        var date1 = new Date(year, month, day, hours, minutes);
        var date2 = new Date(sttYear, sttMonth, sttDay, sttHours, sttMinutes);
        var elapsedMSec = date2.getTime() - date1.getTime(); 
        var elapsedMin = elapsedMSec / 1000 / 60;
        last = (elapsedMin / (9 - i + 1)) / 1.25;
        

        const element2 = document.getElementById('expect2');
        element2.innerHTML = "(야간) "+ i +"회차 수량: " + Math.round(last) +" 개";
    }

    document.getElementById("count").value = 35;
    document.getElementById("re").value = 0;
}

function delete_row(){
    var my_tbody = document.getElementById('mytable');
    if (my_tbody.rows.length < 1) return;
    my_tbody.deleteRow( my_tbody.rows.length-1 );
    i--
  }

function expect(){
    document.getElementById("expect").value = 30;

}