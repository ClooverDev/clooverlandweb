// MAIN \\

// HEADER \\
const GET_HOME = $('.BTN-HOME')
const GET_ARCADE = $('.BTN-ARCADE')
const GET_ABOUT = $('.BTN-ABOUT')
const GET_TRANS = $('.BTN-TRANS')

const HOSTNAME = window.location.hostname
const DOMAIN = 'clooverlandstudios.com'

function DEBUGF(TXT) { console.log(TXT) }

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

var is_translated = false;

if (localStorage.getItem("translate") !== null) {
    is_translated = localStorage.getItem("translate");
}

const STORE_DEFAULT_ABOUT = {
    'STORED-TITLE' : $("#ABOUT-TITLE").html(),
    'STORED-INFO' : $('#ABOUT-INFO').html(),
    'STORED-CLOVEROK' : $("#CLOVEROK-TXT").html(),
    'STORED-CONTACT' : $("#CONTACT-INFO").html()
}

function TRANSLATE_PAGE(current_page_id) {
    DEBUGF('TRANSLATING...')

    const get_elements_global = {
        'HOME-BTN' : $(".BTN-HOME"),
        'ARCADE-BTN' : $(".BTN-ARCADE"),
        'ABOUT-BTN' : $(".BTN-ABOUT"),
        'FOOTER-MAIN' : $("#FOOTER-MAINTEXT"),
        'FOOTER-SOCIAL-DISCORD' : $("#FOOTER-SM-DISCORD"),
    }

    const btn_img = $(".trans-img")
    
    is_translated=!is_translated;   

    DEBUGF("IS TRANSLATED?: "+is_translated)

    function translate_global() {
        if (is_translated) {
            get_elements_global['HOME-BTN'].html("INICIO");
            get_elements_global['ARCADE-BTN'].html("FLIPERAMA");
            get_elements_global['ABOUT-BTN'].html("SOBRE");
            get_elements_global['FOOTER-MAIN'].html("Fazendo jogos por entretenimento desde 2021.");
            get_elements_global['FOOTER-SOCIAL-DISCORD'].html("SERVER DO DISCORD");
            $("html").attr("lang", "pt-BR");

            btn_img.removeClass("trans-inactive");
            btn_img.addClass("trans-active");

        } else {
            
            get_elements_global['HOME-BTN'].html("HOME");
            get_elements_global['ARCADE-BTN'].html("ARCADE");
            get_elements_global['ABOUT-BTN'].html("ABOUT");
            get_elements_global['FOOTER-MAIN'].html("Doing games for entertainment since 2021.");
            get_elements_global['FOOTER-SOCIAL-DISCORD'].html("DISCORD SERVER");
            $("html").attr("lang", "en-US");

            btn_img.addClass("trans-inactive");
            btn_img.removeClass("trans-active");
        }
    }

    if (current_page_id=="HOME") {
       const get_elements = {
            'TEXT-1' : $("#MAINCONTAINER-TEXT-1"),
            'TEXT-2' : $("#MAINCONTAINER-TEXT-2"),
            'NEWS-TITLE' : $("#NEWS-TEXT-TITLE"),
            'NEWS-DESC' : $("#NEWS-TEXT-DESC"),
            'TEXT-2-MOBILE' : $("#MAINCONTAINER-TEXT-2-MOBILE"),
       }

        if (is_translated) {
            translate_global();
            get_elements['TEXT-1'].html("VÁ PARA OS JOGOS DIRETAMENTE");
            get_elements['TEXT-2'].html("OU LEIA AS NOTÍCIAS RECENTES");
            get_elements['NEWS-TITLE'].html("NOTÍCIAS");
            get_elements['NEWS-DESC'].html("Notícias dos últimos 8 meses.");
            get_elements['TEXT-2-MOBILE'].html("LEIA AS NOTÍCIAS RECENTES");

        } else {
            translate_global();
            get_elements['TEXT-1'].html("GO TO GAMES DIRECTLY");
            get_elements['TEXT-2'].html("OR CHECK OUT RECENT NEWS");
            get_elements['NEWS-TITLE'].html("NEWS");
            get_elements['NEWS-DESC'].html("News from the past 8 months.");
            get_elements['TEXT-2-MOBILE'].html("CHECK OUT RECENT NEWS");
        }

    } else if (current_page_id=='ARCADE') {
        if (is_translated) {
            translate_global();
            document.title = 'Clooverland Studios - Fliperama'
        } else {
            translate_global();
            document.title = 'Clooverland Studios - Arcade'
        }

    } else if (current_page_id=='ABOUT') {
        const get_elements = {
            'TITLE' : $("#ABOUT-TITLE"),
            'INFO' : $('#ABOUT-INFO'),
            'CLOVEROK' : $("#CLOVEROK-TXT"),
            'CONTACT' : $("#CONTACT-INFO"),
        }

        if (is_translated) {
            translate_global();
            get_elements['TITLE'].html('O que é o "Clooverland Studios"?')
            get_elements['INFO'].html('Clooverland Studios é um grupo que eu comecei a mais de 4 anos atrás com o objetivo em mente de mostrar meus projetos, projetos que eu uso para expressar minha criatividade e amor em certos gêneros, com o objetivo de melhorar in cada projeto, divulgar ideias e mostrar meu amor por esses gêneros que eu cresci com. Esse grupo é sobre jogos que eu fiz no passado e ainda irei fazer no futuro, com gêneros como Plataforma, Terror e alguns outros gêneros que eu tento fazer. <br> Eu comecei esse grupo com o nome de TopHat Games, depois se chamando Clooverland Studios em 2024 por causa da renomeação que eu escolhi por causa do fato de que eu parei de usar "Cartolas" como um ícone principal para o grupo, especificamente o fato de que eu encontrei vários grupos com o mesmo nome, eu encontrei um nome único para o grupo. <br><br> Eu espero que você consiga encontrar qualquer jogo que você goste, ajude este grupo a crescer e conseguir ser mais reconhecido!.')
            get_elements['CLOVEROK'].html("<-- Este é Cloverok, nosso mascote baseado no meu gato chamado Sherlock.")
            get_elements['CONTACT'].html("Para contato você pode ir através do nosso servidor do Discord ou mandar um e-mail para <a href='mailto:support@clooverlandstudios.com' style='text-decoration: none;'> <span id='TEXT-MAILTO' style='text-decoration: underline; color: gold;'> support@clooverlandstudios.com </span> </a>")

        } else {
            translate_global();
            get_elements['TITLE'].html(STORE_DEFAULT_ABOUT['STORED-TITLE'])
            get_elements['INFO'].html(STORE_DEFAULT_ABOUT['STORED-INFO'])
            get_elements['CLOVEROK'].html(STORE_DEFAULT_ABOUT['STORED-CLOVEROK'])
            get_elements['CONTACT'].html(STORE_DEFAULT_ABOUT['STORED-CONTACT'])

        }
    }

    localStorage.setItem("translate", is_translated);
}

GET_TRANS.click(function(){
    TRANSLATE_PAGE(CURRENT_PAGE);
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
    let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;

    // RETURN FALSE = IS ON DESKTOP
    // RETURN TRUE = IS ON MOBILE
}

if (!is_mobile()) {
    $(".mobile-version").remove()
} else {
    $(".desktop-version").remove()
}