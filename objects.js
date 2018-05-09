var playlist = {bobDylan: 'tangledUpInBlue'};

function updatePlaylist(obj, artistName, songTitle) {

  return Object.assign({}, obj, { [artistName]: songTitle })
}
