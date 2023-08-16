document.getElementById('make-purple').addEventListener('click',
function makePurple(){
    document.body.style.backgroundColor='purple'
});

function onclickStatus(){
    const handleStatus=document.getElementById('handler-status');
    handleStatus.innerText='This is not default Text'
}

function anotherButton(){
    document.getElementById('handler-status').innerText='This is another default Text';
}
//Event Listener Button

document.getElementById('event-button').addEventListener('click',function event(){
    const eventHandler=document.getElementById('handler-status');
    eventHandler.innerText='This is event listener Button'
})

//input field
document.getElementById('update').addEventListener('click',function update(){
    const inputField=document.getElementById('input-value');
    const inputText=inputField.value;

    const p=document.getElementById('input-text');
    p.innerText=inputText;

    inputField.value='';
})