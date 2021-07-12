const voiceList = document.getElementById('voiceList');
const list = document.getElementById('list');

export const getList = async() => {
    list.innerHTML = "";
    const response = await fetch('https://voicy-speaker.herokuapp.com/voices');
    const data = await response.json();
    
    for (let i = data.length - 5; i < data.length; i++) {
        const audio = document.createElement('audio');
        audio.controls = true
        const audioBlob = new Blob([new Uint8Array(data[i].audioBlob[0].data).buffer]);
        const audioUrl = URL.createObjectURL(audioBlob);
        audio.src = audioUrl;
        const listValue = document.createElement('li');
        listValue.classList.add('listValue');
        listValue.appendChild(audio);
        list.appendChild(listValue);
    }
    
}

voiceList.addEventListener('click', getList);