const weekText = document.getElementById("weekText");
const timeText = document.getElementById("timeText");
const dateText = document.getElementById("dateText");
const timeToEnd = document.getElementById("timeToEnd");
const container = document.getElementById("container")


document.getElementById("dropdown").addEventListener("change", () => {
	setCookie("collection", dropdown.value,30);
	fetchBackground();
	console.log(getCookie("collection"))
})

// dropdown.value = "Change";

const currentdate = new Date(); 



/*
TODO
Fixa länk till unsplash bilden
console.log(background)

Settings: CollectionId osv.

*/

//Fetch Background
function fetchBackground(){
	background = "https://source.unsplash.com/collection/" + getCookie("collection") + "/" + screen.width + "x" + screen.height
	// background = "https://source.unsplash.com/" + screen.width + "x" + screen.height
	console.log(background)
	container.style.backgroundImage = 'url("' + background + '")';
}

// //Cookie COllection ID
// document.getElementById("colID").addEventListener("change", () => {
// 	setCookie("collection",colID.value,30);
// 	background();
// });

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
	console.log("1")
    document.title = time;
    timeText.innerHTML = time;
	
}
setInterval(reloadTime, 1000);

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
fetchBackground();
week();
date();