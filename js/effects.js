let xhr = new XMLHttpRequest();
let method = 'GET';
let url = 'https://api.spotify.com/v1/browse/new-releases';


function onReady(data, success) {
	if(this.readyState === 4 && this.status === 200)
	{
		//do the neccessary things here
		let response = JSON.parse(data);
		console.log(data);
	}
	else 
	{
		// inform the user why it isn't working 
	}
}

xhr.onreadystatechange = onReady;

xhr.open(method,url,true);
xhr.send();

