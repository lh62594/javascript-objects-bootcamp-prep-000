var playlist = {
  beyonce: "halo",
  avril: "sk8ter boi"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
