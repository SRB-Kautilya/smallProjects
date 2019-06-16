//Assigning const values
const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn')
const messageOut = document.querySelector('#messageOut')


// listenting to click event
sendBtn.addEventListener('click',sendMsg);

// when you click without text then it shows alert message or else it show the message you send
function sendMsg () {
   var textin  = messageIn.value
   console.log('textin',textin)
    if(textin === '') {
        alert('please enter a value');
    } else {
    messageOut.innerHTML = textin;
    }
}

