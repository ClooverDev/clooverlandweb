const PRELOAD_IMAGES = [
    "https://images.clooverlandstudios.com/bgs/main.png",
    "https://images.clooverlandstudios.com/bgs/arcade.png",
    "https://images.clooverlandstudios.com/logos/logo_main.png",
]

$.each(PRELOAD_IMAGES, function(index, imageUrl) {
    var img = new Image();

    img.src = imageUrl;

    $(img).on('load', function() {
        console.log("Image preloaded: " + imageUrl);
    }).on('error', function() {
        console.error("Error preloading image: " + imageUrl);
    });
});