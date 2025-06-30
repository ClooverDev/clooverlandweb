// HEADER \\
const GET_HOME = $('.BTN-HOME')
const GET_ARCADE = $('.BTN-ARCADE')
const GET_ABOUT = $('.BTN-ABOUT')

const HOSTNAME = window.location.hostname
const DOMAIN = 'clooverlandstudios.com'

function HEADER_REDIR_TO(__LINK) {
    if (HOSTNAME == DOMAIN) {
        if (__LINK == 'index') {
            window.open("https://"+DOMAIN, '_self')
        } else {
            window.open('https://'+DOMAIN+"/"+__LINK, '_self')
        }
    } else {
        window.open(__LINK+'.html', '_self')
    }
}

GET_HOME.click(function(){
    HEADER_REDIR_TO('index')
})

GET_ARCADE.click(function(){
    HEADER_REDIR_TO('arcade')
})

GET_ABOUT.click(function(){
    HEADER_REDIR_TO('about')
})

// SOCIAL MEDIAS \\
const DEF_SOCIAL = '.SM-BTN-'
const GET_SOCIAL_MEDIAS = {
    'YOUTUBE' : [$(DEF_SOCIAL+"YOUTUBE"), "https://youtube.com/@clooverlandstudios"],
    'TWITTER-X' : [$(DEF_SOCIAL+"TWITTER"), "https://x.com/clooverland"],
    'DISCORD' : [$(DEF_SOCIAL+"DISCORD"), "https://discord.com/invite/7YhtNaN95R"],
}

function OPEN_SOCIAL(LINK) {
    window.open(LINK, '_blank')
}

GET_SOCIAL_MEDIAS['YOUTUBE'][0].click(function(){
    OPEN_SOCIAL(GET_SOCIAL_MEDIAS['YOUTUBE'][1])
})

GET_SOCIAL_MEDIAS['TWITTER-X'][0].click(function(){
    OPEN_SOCIAL(GET_SOCIAL_MEDIAS['TWITTER-X'][1])
})

GET_SOCIAL_MEDIAS['DISCORD'][0].click(function(){
    OPEN_SOCIAL(GET_SOCIAL_MEDIAS['DISCORD'][1])
})

function is_mobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /android|ipad|playbook|silk/i.test(userAgent);

    // RETURN FALSE = IS ON DESKTOP
    // RETURN TRUE = IS ON MOBILE
}

if (!is_mobile()) {
    $(".mobile-version").remove()
} else {
    $(".desktop-version").remove()
}