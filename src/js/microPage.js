const { io } = require("socket.io-client");
const play = document.getElementById('play');
const end = document.getElementById('stop');
const micro = document.getElementById('micro');
let mediaRec;

function record(){
    play.style.display = 'none';
    end.style.display = 'block';
    const socket = io.connect('https://voicy-speaker.herokuapp.com/');

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRec = mediaRecorder;
            mediaRecorder.start();

            const audioChunks = [];
            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);
            });

            mediaRecorder.addEventListener("stop", () => {
                socket.emit('audioMessage', audioChunks);
            });
        });

}

function pause(){
    end.style.display = 'none';
    play.style.display = 'block';
    mediaRec.stop();
}

play.addEventListener('click', record);
end.addEventListener('click', pause);
micro.addEventListener('click', () => {
    end.style.display = 'none';
    play.style.display = 'block';
});
