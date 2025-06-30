// HEADER \\
const GET_HOME = $('.BTN-HOME')
const GET_ARCADE = $('.BTN-ARCADE')
const GET_ABOUT = $('.BTN-ABOUT')

const HOSTNAME = window.location.hostname
const DOMAIN = 'clooverlandstudios.com'

function HEADER_REDIR_TO(__LINK) {
    if (HOSTNAME == DOMAIN) {
        if (__LINK == 'index') {
            window.open(DOMAIN, '_self')
        } else {
            window.open(LINK, '_self')
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