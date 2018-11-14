var playlist = {
  beyonce: "halo",
  avril lavigne: "sk8ter boi"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
