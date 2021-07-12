const status = document.getElementById('status');
const voiceList = document.getElementById('voiceList');
const micro = document.getElementById('micro');
const stream = document.getElementById('stream');
const play = document.getElementById('play');
const end = document.getElementById('stop');
const list = document.getElementById('list');

function colorChange(){
    voiceList.classList.remove("active-tab");
    micro.classList.remove("active-tab");
    stream.classList.remove("active-tab");
}

let listText = "Active: all voices";
let microText = "Active: speaker-mode";
let streamText = "Active: stream";

function switching(text,variable){
    status.innerText = text;
    colorChange();
    variable.classList.add("active-tab");
    play.style.display = 'none';
    end.style.display = 'none';
    list.innerHTML = "";
}

voiceList.addEventListener('click', () => switching(listText,voiceList));
micro.addEventListener('click',() => switching(microText,micro));
stream.addEventListener ('click',() => switching(streamText,stream));
