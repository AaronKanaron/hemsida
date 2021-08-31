const albumTracks = document.getElementById("albumTracks");
const playlistTracks = document.getElementById("playlistTracks");

let albumID = "4PznnWq19AwatCG4lsyb5I"
let playlistID = "37i9dQZF1DWV7EzJMK2FUI"

let headersList = {
	"Authorization": "Bearer BQDlAfquAOwPElufBqQU4C1CbeAempAEgk0NEYOuMAKiHCFztSd0uNM_HtbRWZnD5xADszPtnyd7p5QcgwBJ48x1OgQwNy-TkAUBka4XkwUePyJtNuTT7NDiVYezulbF6ar8Cl4tqJtIMbnSOGoFWgM6hXKyAV00swI"
}

//FETCH ALBUM
fetch("https://api.spotify.com/v1/albums/" + albumID, { 
	method: "GET",
	headers: headersList

	}).then(function(response) {
		return response.json();

	}).then(function(data) {

		data.tracks.items.map(obj => {
			albumTracks.innerHTML += obj.name + " - track number: " + obj.track_number + "<br><br>"
		}
	);
})

fetch("https://api.spotify.com/v1/playlists/" + playlistID, { 
	method: "GET",
	headers: headersList

	}).then(function(response) {
		return response.json();

	}).then(function(data) {

		playlistTracks.innerHTML = data.name + "<br>" + data.description + "<br><br>"
		data.tracks.items.map(obj => {
			playlistTracks.innerHTML += obj.track.name + " - track number: " + obj.track.track_number + "<br><br>"
		}
	)});