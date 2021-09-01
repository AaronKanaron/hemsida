const Main = document.getElementById("main");

async function loadPlaylist(playlistID){

	fetch("https:/api.spotify.com/v1/playlists/" + playlistID, { 
		method: "GET",
		headers: auth

		}).then(response => {
			return response.json();

		}).then(data => {
			document.documentElement.style.setProperty('--image', "url(" + data.images[0].url + ")");

			Main.innerHTML += "<div class='cover' style='background-image: url(" +
				data.images[0].url + ");'></div>"

			Main.innerHTML += "<h1>" + data.name + "</h1>"

			data.tracks.items.map((obj, oi) => {

				Main.innerHTML += "<p>"+ 
					obj.track.name + 
					" - track number: "
					+ oi + "</p>"

				Main.innerHTML += "<img class='icon' src='" + 
					obj.track.album.images[2].url +
					"'>"
			})
		});
}