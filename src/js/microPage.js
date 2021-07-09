const { io } = require("socket.io-client");
let play = document.getElementById('play');
let end = document.getElementById('stop');
let micro = document.getElementById('micro');
let mediaRec;

function record(){
    play.style.display = 'none';
    end.style.display = 'block';
    const socket = io.connect('https://voicy-speaker.herokuapp.com/');
    socket.on('connect', function() {
        console.log("Подключено через микрофон");
    });

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
micro.addEventListener('click', function(){
    end.style.display = 'none';
    play.style.display = 'block';
});
