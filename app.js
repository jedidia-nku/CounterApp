var timer;
var tele = document.getElementById("timer");
(()=>{
    var count = 0;
    timer = setInterval(()=>{
        tele.textContent = '00:'+ count;
        count++;
    }, 1000)//each one second
})()

function pause(){
    clearInterval(timer);
} 