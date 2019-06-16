const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn')
const messageOut = document.querySelector('#messageOut')

sendBtn.addEventListener('click',sendMsg);

function sendMsg () {
   var textin  = messageIn.value
   console.log('textin',textin)
    if(textin === '') {
        alert('please enter a value');
    } else {
    messageOut.innerHTML = textin;
    }
}

