const PRELOAD_IMAGES = [
    "https://images.clooverlandstudios.com/bgs/main.png",
    "https://images.clooverlandstudios.com/bgs/arcade.png",
    "https://images.clooverlandstudios.com/logos/logo_main.png",
]

function PRELOAD(preloadArray) {
    $.each(preloadArray, function(index, imageUrl) {
        var img = new Image();

        img.src = imageUrl;

        $(img).on('load', function() {
            console.log("Image preloaded: " + imageUrl);
        }).on('error', function() {
            console.error("Error preloading image: " + imageUrl);
        });
    });
}

PRELOAD(PRELOAD_IMAGES)