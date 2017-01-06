$(document).ready(function() {

/*** requests to get the pictures for the albums***/
//https://davidwalsh.name/write-javascript-promises <--- check this out to use promises when making the below requests instead
$.getJSON('https://api.spotify.com/v1/artists/1Dvfqq39HxvCJ3GvfeIFuT/albums?album_type=album', function(serverResponse) {
	let albums = serverResponse.items;
	let albumImages = albums.filter(album => album.name === "Once More 'Round The Sun");
	
	albumImages.map(function(image, position){
		console.log(image);
		if(position === 0)
		$('.image1').attr('src', image.images[position].url);
	});
});

$.getJSON('https://api.spotify.com/v1/artists/4KXp3xtaz1wWXnu5u34eVX/albums?album_type=album', function(serverResponse) {
	let albums = serverResponse.items;
	let albumImages = albums.filter(album => album.name === 'Då Som Nu För Alltid');
    albumImages.map(function(image, position){
		console.log(image);
		if(position === 0)
		$('.image2').attr('src', image.images[position].url);
	});
});

    $.getJSON('https://api.spotify.com/v1/artists/4LEiUm1SRbFMgfqnQTwUbQ/albums?album_type=album', function(serverResponse) {
        let albums = serverResponse.items;
        let albumImages = albums.filter(album => album.name === '22, A Million');
        albumImages.map(function(image, position){
            console.log(image);
            if(position === 0)
                $('.image3').attr('src', image.images[position].url);
        });
    });

    $.getJSON('https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums?album_type=album', function(serverResponse) {
        let albums = serverResponse.items;
        let albumImages = albums.filter(album => album.name === 'A Head Full Of Dreams');
        albumImages.map(function(image, position){
            console.log(image);
            if(position === 0)
                $('.image4').attr('src', image.images[position].url);
        });
    });

/***ajax calls for the newsfeed***/

$.getJSON('http://api.music-story.com/oauth/request_token?oauth_consumer_key=98406b6d4b0d2a0cc773242f8af2a5bc824918e9&oauth_signature=22e242342f9e47e1b10d67a8298713c3f62a8bf9', function (data) {
    console.log(data);
})



});




