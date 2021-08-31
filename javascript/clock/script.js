const weekText = document.getElementById("weekText");
const timeText = document.getElementById("timeText");
const dateText = document.getElementById("dateText");
const timeToEnd = document.getElementById("timeToEnd");
const container = document.getElementById("container");
const unsplash = document.getElementById("unsplash");

const currentdate = new Date(); 

let collectionID = 1053828

/*
TODO
Fixa länk till unsplash bilden
console.log(background)

Settings: CollectionId osv.

*/
//Fetch Background
function background(){
	let backgroundImg = "https://source.unsplash.com/collection/" + collectionID + "/" + screen.width + "x" + screen.height
	container.style.backgroundImage = 'url("' + backgroundImg + '")';
	unsplash.href = backgroundImg
}


//Klocka
function reloadTime(){
	const currentdate = new Date(); 

	let second = (currentdate.getSeconds().toString().length == 1) 
		? "0" + currentdate.getSeconds() 
		: currentdate.getSeconds();

	let minute = (currentdate.getMinutes().toString().length == 1) 
		? "0" + currentdate.getMinutes() 
		: currentdate.getMinutes()

	let hour = (currentdate.getHours().toString().length == 1) 
		? "0" + currentdate.getHours() 
		: currentdate.getHours()


	let time = hour + ":"  
                + minute + ":" 
                + second;
	
    document.title = time;
    timeText.innerHTML = time;

	setInterval(reloadTime, 1000);
}

//Vecka
function week() {

	const startyear = new Date(currentdate.getFullYear(), 0, 0);
	const diff = currentdate - startyear;
	date
	const oneWeek = 1000 * 60 * 60 * 24 * 7;
	const week = Math.floor(diff / oneWeek);

	weekText.innerHTML = "Vecka " + parseInt(week + 1);
}

//Datum
function date() {
	const days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
	const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];


    let date = days[currentdate.getDay()].toLowerCase() + " " 
				+ currentdate.getDate() + " "
				+ months[currentdate.getMonth()].toLowerCase();

	dateText.innerHTML = date;
}


//PageOnLoad Functions
reloadTime();
background();
week();
date();