import './scss/index.scss'

let status = document.getElementById('status');
let voislist = document.getElementById('vois-list');
let micro = document.getElementById('micro');
let stream = document.getElementById('stream');

function colorChange(){
    voislist.classList.remove("active-tab");
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
}

voislist.addEventListener('click', () => switching(listText,voislist));
micro.addEventListener('click',() => switching(microText,micro));
stream.addEventListener ('click',() => switching(streamText,stream));
