const albumTracks = document.getElementById("albumTracks");

let albumID = "4PznnWq19AwatCG4lsyb5I"


//FETCH ALBUM
fetch("https://api.spotify.com/v1/albums/" + albumID, { 
	method: "GET",
	headers: headersList

	}).then(function(response) {
		return response.json();

	}).then(function(data) {

		data.tracks.items.map(obj => {
			albumTracks.innerHTML += "<p>" + obj.name + " - track number: " + obj.track_number + "</p><br><br>"
		}
	);
})