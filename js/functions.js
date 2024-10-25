function printMessage(msg){
	let div = document.createElement('div');
	div.innerText = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerText = '';
}