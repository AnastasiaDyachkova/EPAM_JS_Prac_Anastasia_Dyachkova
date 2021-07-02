
console.log("Hello");
let status = document.getElementById('status');
let voislist = document.getElementById('vois-list');
let micro = document.getElementById('micro');
let stream = document.getElementById('stream');


function colorChange(){
    voislist.style.color = "#130b03";
    micro.style.color = "#130b03";
    stream.style.color = "#130b03";
}

let listText = "Active: all voices";
let microText = "Active: speaker-mode";
let streamText = "Active: stream";

function switching(text,variable){
    status.innerText = text;
    colorChange();
    variable.style.color = "#FF8800";
}

voislist.addEventListener('click', () => switching(listText,voislist));
micro.addEventListener('click',() => switching(microText,micro));
stream.addEventListener ('click',() => switching(streamText,stream));
