const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() =>{
    var day = new Date();
    var hh = day.getHours()*30;
    var mm = day.getMinutes()*6;
    var ss = day.getSeconds()*6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    let hur = document.querySelector("#hur");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
    let apm = document.querySelector("#apm");

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var ap= "AM";

    if (h>12){
        ap="PM";
    }

    if(h>=12){
        h=h-12;
    }


    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;


    hur.innerHTML = h + ":";
    minutes.innerHTML = m+":";
    seconds.innerHTML = s+" ";
    apm.innerHTML = ap;

});
