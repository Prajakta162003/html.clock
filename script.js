//12hrs=360deg          //60min=30             //60min=360deg        //60sec=360deg
//1hrs=360/12=30        //1min=30/60=1/2       //1min=360/60=6deg    //1sec=360/60
//h hrs=30h+m/2         //m mins=(1/2)m        //m min=6m            //s sec=6s
 

let hr= document.getElementById('hour');
let min= document.getElementById('min');
let sec= document.getElementById('sec');


function displayTime() {
    let date = new Date();
    //Getting hour,min,sec from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform =`rotate(${hRotation}deg)`;
    min.style.transform =`rotate(${mRotation}deg)`;
    sec.style.transform =`rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);