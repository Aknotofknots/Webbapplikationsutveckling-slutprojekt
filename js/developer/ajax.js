$(document).ready(function () {

    /**
     * @author Christian Alsen,
     * @mail christianahlsen@gmail.com
     */


    /**
     * @description
     * To make every first character of a word an uppercase one for
     * the news searchbar input value. The Webhose API search will not
     * work if let's say, you input Alicia keys. "keys" have to be
     * "Keys".
     *
     * @param artistName{string}
     * @returns {string}
     *
     * @credits to the author of the answer in this link: http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
     */
    function toTitleCase(artistName) {
        return artistName.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    /**
     * @description
     * Removes some unwanted text at the end of the biography text on
     * the back of the artist photo.
     *
     * @param bio{string}
     * @returns {string}
     */
    function replaceText(bio) {
        let textStartPosition = bio.search('<');
        let textToReplace = bio.substring(textStartPosition);
        let bioText = bio.replace(textToReplace, '');

        return bioText;
    }

    /**
     * @description
     * Requests to the Spotify API. Gets pictures for albums and tracks for artists.
     */

    let spotifyAPI = {

        showAlbumPicture1: function () {
            return $.getJSON('https://api.spotify.com/v1/artists/4LEiUm1SRbFMgfqnQTwUbQ/albums?album_type=album')
                .then(function (serverResponse) {
                    return serverResponse;
                });
        },

        showAlbumPicture2: function () {
            return $.getJSON('https://api.spotify.com/v1/artists/4KXp3xtaz1wWXnu5u34eVX/albums?album_type=album')
                .then(function (serverResponse) {
                    return serverResponse;
                });
        },

        showAlbumPicture3: function () {
            return $.getJSON('https://api.spotify.com/v1/artists/1Dvfqq39HxvCJ3GvfeIFuT/albums?album_type=album')
                .then(function (serverResponse) {
                    return serverResponse;
                });
        },

        showAlbumPicture4: function () {
            return $.getJSON('https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums?album_type=album')
                .then(function (serverResponse) {
                    return serverResponse;
                });
        },

        fetchTracks: function (albumId, callback) {
            $.ajax({
                url: 'https://api.spotify.com/v1/albums/' + albumId,
                success: function (response) {
                    callback(response);
                },
                error: function () {
                    $('#results').html(`<div class="col-xs-10 col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3 col-xs-offset-1">
                    <p>Something went wrong, couldn't fetch the artists albums</p></div>`);
                }
            });
        },

        searchAlbums: function (query) {
            $.ajax({
                url: 'https://api.spotify.com/v1/search',
                data: {
                    q: query,
                    type: 'album'
                },

                beforeSend: function () {
                    $('#spotifyloading-icon').show();
                },

                success: function (response) {
                    if (response.albums.items.length !== 0) {
                        $('#spotifyloading-icon').hide();
                        $('.spotifyalbum-container').show();
                        resultsPlaceholder.innerHTML = template(response);

                    }
                    else {
                        $('#spotifyloading-icon').hide();
                        $('.spotifyalbum-container').show();
                        $('#results').html(`<div class="col-xs-10 col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3 col-xs-offset-1">
                    <p>Something went wrong, couldn't find the artist you were looking for</p></div>`);
                    }
                },
                error: function () {
                    $('#spotifyloading-icon').hide();
                    $('#results').html(`<div class="col-xs-10 col-sm-6 col-md-6 col-md-offset-3 col-sm-offset-3 col-xs-offset-1">
                    <p>Something went wrong, couldn't find the artist you were looking for</p></div>`);
                }
            });
        }
    };


    /**
     * @description
     * Requests to the Last FM API to get pictures and biography for artists.
     */
    let lastfmAPI = {

        showBiography: function (searchBarValue) {
            return $.getJSON(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${searchBarValue}&autocorrect=1&api_key=6d50439832c2f70e2315b0fa85ea24f0&format=json`)
                .then(function (serverResponse) {
                    return serverResponse;
                });
        },

        showPicture: function (searchBarValue) {
            return $.getJSON(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${searchBarValue}&autocorrect&api_key=6d50439832c2f70e2315b0fa85ea24f0&format=json`)
                .then(function (serverResponse) {
                    return serverResponse;
                })

        }
    };


    /**
     * @description
     * Process the request responses from Spotify to get the images for the slider
     * at the top of the page.
     */
    spotifyAPI.showAlbumPicture1().done(function (serverResponse) {
        let albums = serverResponse.items;
        let albumImages = albums.filter(album => album.name === '22, A Million');
        albumImages.map(function (image, position) {
            if (position === 0)
                $('.image1').attr('src', image.images[position].url);
        });
    })
        .fail(function () {
            $('.image1').attr('alt', 'Bon Iver - 22, A Million')
        });


    spotifyAPI.showAlbumPicture2().done(function (serverResponse) {
        let albums = serverResponse.items;
        let albumImages = albums.filter(album => album.name === 'Då Som Nu För Alltid');
        albumImages.map(function (image, position) {
            if (position === 0)
                $('.image2').attr('src', image.images[position].url);
        });
    })
        .fail(function () {
            $('.image2').attr('alt', 'Kent - Då Som Nu För Alltid');
        });

    spotifyAPI.showAlbumPicture3().done(function (serverResponse) {
        let albums = serverResponse.items;
        let albumImages = albums.filter(album => album.name === "Once More 'Round The Sun");
        albumImages.map(function (image, position) {
            if (position === 0)
                $('.image3').attr('src', image.images[position].url);
        });
    })
        .fail(function () {
            $('.image3').attr('alt', "Mastodon - Once More 'Round The Sun");
        });

    spotifyAPI.showAlbumPicture4().done(function (serverResponse) {
        let albums = serverResponse.items;
        let albumImages = albums.filter(album => album.name === 'A Head Full Of Dreams');
        albumImages.map(function (image, position) {
            if (position === 0)
                $('.image4').attr('src', image.images[position].url);
        });
    })
        .fail(function () {
            $('.image4').attr('alt', 'Coldplay - A Head Full Of Dreams');
        });


    /**
     *  Declare neccesary variables for the spotify albums request and Find handlebars template and compile it.
     */
    let templateSource = document.getElementById('results-template').innerHTML,
        template = Handlebars.compile(templateSource),
        resultsPlaceholder = document.getElementById('results'),
        playingCssClass = 'playing',
        audioObject = null;

    /**
     * @description
     * Event handlers for the Spotify Api to get the artists tracks and albums
     *
     * @credits to js fiddle author at https://jsfiddle.net/JMPerez/0u0v7e1b/
     */
    resultsPlaceholder.addEventListener('click', function (e) {
        let target = e.target;
        if (target !== null && target.classList.contains('img-responsive')) {
            if (target.classList.contains(playingCssClass)) {
                audioObject.pause();
            } else {
                if (audioObject) {
                    audioObject.pause();
                }
                spotifyAPI.fetchTracks(target.getAttribute('data-album-id'), function (data) {
                    audioObject = new Audio(data.tracks.items[0].preview_url);
                    audioObject.play();
                    target.classList.add(playingCssClass);
                    audioObject.addEventListener('ended', function () {
                        target.classList.remove(playingCssClass);
                    });
                    audioObject.addEventListener('pause', function () {
                        target.classList.remove(playingCssClass);
                    });
                });
            }
        }
    });

    document.getElementById('search-form').addEventListener('submit', function (e) {
        e.preventDefault();
        spotifyAPI.searchAlbums(document.getElementById('query').value);
    }, false);


    /**
     * @description
     * Process the request response from the Last FM api to show the biography for the
     * artist when the button on the back of the news photo is pressed.
     */

    $('#getbio').on('click', function () {

        let searchBarValue = $('#searchbar').val();

        lastfmAPI.showBiography(searchBarValue).done(function (serverResponse) {
            let images = serverResponse.artist.image;
            images.filter((image, index) => {
                if (index === 2) {
                    let bio = serverResponse.artist.bio.summary;
                    let bioText = replaceText(bio);
                    $('#biotext').text(bioText);
                }
            });
        })
            .fail(function () {
                $('.back').text("Couldn't fetch biography");
            });
    });


    /**
     * @description
     * Process the request response from the Last FM Api to show a picture
     * of the artist in the news post when the user clicks the button
     */

    $('#searchbar-button').on('click', function (event) {

        event.preventDefault();
        $('#biotext').text("");
        let searchBarValue = $('#searchbar').val();

        lastfmAPI.showPicture(searchBarValue).done(function (serverResponse) {
            let images = serverResponse.artist.image;
            images.filter((image, index) => {
                if (index === 2) {
                    let url = image['#text'];
                    $('.front').attr('src', url);
                }
            });
        })
            .fail(function () {
                $('front').attr('alt', "Something went wrong, can't fetch image");
            });

        /**
         *@description
         * Request to the Webhose Api to get and show a random news post for the artist
         * the user searched for.
         */
        let request = $.ajax({
            url: `https://webhose.io/search?token=511ca5da-b174-4484-8fe6-99a4aa8531ad&format=json&q=%22${searchBarValue}%22%20language%3A(english)%20site_category%3Aentertainment%20(site_type%3Anews%20OR%20site_type%3Ablogs)&sort=relevancy&ts=1481895227308`,
            dataType: 'json',
            beforeSend: function () {
                $('#loading-icon').show();
                $('.newspost-container').hide();
                $('#spotify-form-container').hide();
                $('#listentospotify').hide();
                $('.spotifyalbum-container').hide();

            },
            complete: function () {
                $('#loading-icon').hide();
            },
            success: function (serverResponse) {
                $('.newspost-container').fadeIn(2500);
                $('#spotify-form-container').fadeIn(3000);
                $('#listentospotify').show();

                let posts = serverResponse.posts;
                let text = [];
                let title = [];
                let url = [];
                let index = 0;
                let randomPost;
                let containsArtistName = false;
                let container = toTitleCase(searchBarValue);

                posts.filter(function (post) {
                    containsArtistName = !!post.title.match(container);
                    if (containsArtistName) {
                        title[index] = post.title;
                        text[index] = post.text;
                        url[index] = post.url;
                        index++;
                    }
                });
                randomPost = Math.floor(Math.random() * title.length);

                $('.panel-body span').text(text[randomPost]);
                $('.newspost-header a').text(title[randomPost]).attr('href', url[randomPost]).attr('target', '_blank');
                $('.newstext').text(`${container} news`);
            },

            error: function () {
                $('#newscolumn-container').html(`<p>Something went wrong, can't fetch the news</p>`);
                $('.newspost-container').show();
            }
        });
    });


});












