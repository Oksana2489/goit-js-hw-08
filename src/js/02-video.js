// const video = document.querySelector('#vimeo-player');
import Player from '@vimeo/player';
// const SAVED_TIME = "0"
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(event) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(event.seconds)
  );
  console.log(event.seconds);
}
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
