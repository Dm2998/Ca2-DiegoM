//  about me section

$(document).ready(function () {
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // Class for the popup style
        image: {
            verticalFit: true, // Ensure image fits vertically
        },
        zoom: {
            enabled: true,
            duration: 300, // Zoom-in duration
        },
    });
});
