function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

if (isMobile()) {
	console.log("user is on mobile!");
	if (window.location.hostname  == "www.tophatgames.net" || window.location.hostname  == "tophatgames.net") {
		window.location.replace("https://m.tophatgames.net");
	}
} else {
	console.log("user is on desktop!");
	if (window.location.hostname  == "m.tophatgames.net") {
		window.location.replace("https://tophatgames.net");
	}
}

if (window.location.href == "https://tophatgames.net/index") {
	window.top.location.replace("https://tophatgames.net");
	
} else if (window.location.href == "https://tophatgames.net/games.html") {
	window.top.location.replace("https://tophatgames.net/games");
	
} else if (window.location.href == "https://tophatgames.net/fanarts-exhibition.html") {
	window.top.location.replace("https://tophatgames.net/fanarts-exhibition");
	
} else if (window.location.href == "https://tophatgames.net/damiaos-arts.html") {
	window.top.location.replace("https://tophatgames.net/damiaos-arts");
	
} else if (window.location.href == "https://tophatgames.net/forums.html") {
	window.top.location.replace("https://tophatgames.net/forums");
	
} else if (window.location.href == "https://tophatgames.net/index.html") {
	window.top.location.replace("https://tophatgames.net");
	
}  else if (window.location.href == "https://tophatgames.net/games/changelogs/friendshiptest.html") {
	window.top.location.replace("https://tophatgames.net/games/changelogs/friendshiptest");
	
} else if (window.location.href == "https://tophatgames.net/games/changelogs/poweroutage.html") {
	window.top.location.replace("https://tophatgames.net/games/changelogs/poweroutage");
	
} else if (window.location.href == "https://tophatgames.net/games/changelogs/lightsout.html") {
	window.top.location.replace("https://tophatgames.net/games/changelogs/lightsout");
	
} else if (window.location.href == "https://tophatgames.net/games/changelogs/superplatform_c2.html") {
	window.top.location.replace("https://tophatgames.net/games/changelogs/superplatform_c2");
	
}  else if (window.location.href == "https://tophatgames.net/games/changelogs/superplatform_org.html") {
	window.top.location.replace("https://tophatgames.net/games/changelogs/superplatform_org");
	
}  else if (window.location.href == "https://tophatgames.net/games/changelogs/crossworldsparty.html") {
	window.top.location.replace("https://tophatgames.net/games/changelogs/crossworldsparty");
}

const footer_text = "<span style='font-size: 16px'><a href='https://twitter.com/tophatgamesofc'><span style='color:#c7f2ff'>Twitter/X</span></a> | <a href='https://youtube.com/@tophatgamesofc'><span style='color:#ffc7c7'>YouTube</span></a> | <a href='https://discord.com/invite/7YhtNaN95R'><span style='color: #c7c9ff'>Discord Server</span></a><br><span style='color:gold'>support:</span> support@tophatgames.net<br><span style='color:gold'>business:</span> business@tophatgames.net<br><br>© TopHat Games, 2021-2024</span>";		
document.getElementById("__footer").innerHTML = footer_text;

let home = document.getElementsByClassName("__NAV_logo");
let game = document.getElementsByClassName("__NAV_game");
let fanarts = document.getElementsByClassName("__NAV_fanarts");
let damiao = document.getElementsByClassName("__NAV_damiao");
let forums = document.getElementsByClassName("__NAV_forums");

const dir_test = "";
const dir_public = "https://tophatgames.net/"

const current_dir = dir_public;

const sub_sub_directories = [
	(current_dir+"games/changelogs/crossworldsparty.html"),
	(current_dir+"games/changelogs/poweroutage.html"),
	(current_dir+"games/changelogs/friendshiptest.html"),
	(current_dir+"games/changelogs/lightsout.html"),
	(current_dir+"games/changelogs/superplatform_c2.html"),
	(current_dir+"games/changelogs/superplatform_org.html"),
	
	(current_dir+"games/changelogs/crossworldsparty"),
	(current_dir+"games/changelogs/poweroutage"),
	(current_dir+"games/changelogs/friendshiptest"),
	(current_dir+"games/changelogs/lightsout"),
	(current_dir+"games/changelogs/superplatform_c2"),
	(current_dir+"games/changelogs/superplatform_org"),
]

const sub_directories = [
]

let current_page_is_a_sub = false;
let cp_sub_type = 0;

function checkCurrentPage() {
	for (let i = 0; i < sub_directories.length; i++) {
		if (window.location == sub_directories[i]) {
			current_page_is_a_sub = true;
			cp_sub_type = 0;
		}
	}
	
	for (let i = 0; i < sub_sub_directories.length; i++) {
		if (window.location == sub_sub_directories[i]) {
			current_page_is_a_sub = true;
			cp_sub_type = 1;
		}
	}
	
	// 0 = Sub (move to previous folder once)
	// 1 = Sub Sub (move to previous folder twice)
}

function moveToPage(__URL) {
	checkCurrentPage();
	
	const is_sub = current_page_is_a_sub;
	const sub_type = cp_sub_type;
	
	if (is_sub) {
		if (sub_type == 0) {
			window.location = "../"+__URL;
		} else if (sub_type == 1) {
			window.location = "../../"+__URL;
		}
	} else {
		window.location = __URL;
	}
}

function moveTo__home() {
	moveToPage("index.html");
}

function moveTo__game() {
	moveToPage("games.html");
}


function moveTo__fanarts() {
	moveToPage("fanarts-exhibition.html");
}


function moveTo__damiao() {
	moveToPage("damiaos-arts.html");
}

function moveTo__forums() {
	moveToPage("forums.html");
}


for (var i = 0; i < home.length; i++) {
    home[i].addEventListener('click', moveTo__home, false);
}

for (var i = 0; i < game.length; i++) {
    game[i].addEventListener('click', moveTo__game, false);
}

for (var i = 0; i < fanarts.length; i++) {
    fanarts[i].addEventListener('click', moveTo__fanarts, false);
}

for (var i = 0; i < damiao.length; i++) {
    damiao[i].addEventListener('click', moveTo__damiao, false);
}

for (var i = 0; i < forums.length; i++) {
    forums[i].addEventListener('click', moveTo__forums, false);
}

function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}
