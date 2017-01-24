$(function () {

    /**
     *@author Christian Ahlsén
     *
     *@mail christianahlsen@gmail.com
     */


    /**
     * @description
     * initiate the Boostrap 3 tooltip
     */
    $('[data-toggle="tooltip"]').tooltip();

    /**
     * @description
     * animate the scrollbar
     */
    $(".mainnav li a[href='#tonews'],footer a[href='#totop']").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            let hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top
            }, 400, function () {
                window.location.hash = hash;
            });
        }
        /*End if*/
    });

    /**
     * @description
     * animation to flip the photos of the newspost.
     */
    $('.flip').flip({
        trigger: 'hover',
        axis: 'y'
    });

});