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
				object_index = oi + 1

				Main.innerHTML += "<div class='trackBox'>" + 

					"<p class='track_oi'>" + object_index + "</p>" +

					"<img class='icon' src='" + obj.track.album.images[2].url +"'>" + 

					"<p class='track_name'>" + obj.track.name + "</p>" + 

					"<p class='album_creator'>" + obj.track.album.artists[0].name + "</p>" + 

					"</div>"

			})
		});
}