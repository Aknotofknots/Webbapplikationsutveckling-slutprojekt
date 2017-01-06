// initiate the tooltip
$('[data-toggle="tooltip"]').tooltip();

$("footer a[href='#totop']").on('click', function (event) {
    // if the href isn't empty
    if(this.hash !== ""){

        // prevent default anchor click behaviour
        event.preventDefault();

        // store the hash i.e reads the part of the href value starting with #
        let hash = this.hash;

        $('body').animate({
            scrollTop: $(hash).offset().top
        }, 400, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

    }  /*End if*/
});