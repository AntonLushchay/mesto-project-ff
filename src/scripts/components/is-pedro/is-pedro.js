// Easter egg: Pedro
import audioFile from '../../../audio/pedro.mp3';

const audio = new Audio(audioFile);

export function playAudio() {
	audio.play();
}

export function pauseAudio() {
	audio.pause();
	audio.currentTime = 0;
}
