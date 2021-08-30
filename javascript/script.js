const weekText = document.getElementById("weekText");
const timeText = document.getElementById("timeText");
const dateText = document.getElementById("dateText");
const timeToEnd = document.getElementById("timeToEnd");

let now = new Date();

//VECKA / 
let startyear = new Date(now.getFullYear(), 0, 0);
let diff = now - startyear;
let oneWeek = 1000 * 60 * 60 * 24 * 7;
let week = Math.floor(diff / oneWeek);
let offset = 1

weekText.innerHTML = week + 1;


function reloadTime(){
    var currentdate = new Date(); 

    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear()  
    var time = currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    console.log(datetime)

    document.title = time;
    if(currentdate.getHours() >= 15){

        timeToEnd.innerHTML = "Skolan har slutat!"
    } else{
        console.log(typeof currentdate.getDate())
        timeToEnd.innerHTML = "Skolan slutar om:" + eval(15-currentdate.getHours() )

    }
    dateText.innerHTML = datetime
    timeText.innerHTML = time;
}

setInterval(() => {
    reloadTime();
}, 1000);


//FUNCTIONS
reloadTime();