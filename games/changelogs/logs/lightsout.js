const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const changelogs = document.querySelectorAll(".clog");

const UPDATES = [
	document.getElementById("update_280623"),
	document.getElementById("update_290623"),
	document.getElementById("update_300623"),
	document.getElementById("update_010723"),
	document.getElementById("update_030723"),
	document.getElementById("update_040723"),
	document.getElementById("update_050723"),
]

var updated = false;

if (updated == false) {
	UPDATES[0].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "V1.2.0: LIGHT'S OUT X NONAME";
		date = "28.06.2023";
		desc = 	(
			"> New NoName levels hid within the Code Input (put NONAME there)" + "<br>" +
			"> 3 new codes" + "<br>" +
			"> 4 new achievements" + "<br>" +
			"> Fixed ERR0R Level being impossible to access" + "<br>" +
			"> F to Fullscreen (If you set to either be fullscreen or not, it'll be saved, so if you turn on, you'll go fullscreen mode when you open the game again)" + "<br>" +
			"> Level text on the corner"
		)
		
		document.getElementById("c-title_modal").innerHTML = title;
		document.getElementById("c-title_modal_date").innerHTML = date;
		document.getElementById("c-desc_modal").innerHTML = desc;
		
		updated = true;
	}
	
	UPDATES[1].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "V1.3.0: BIG REVAMP & SKINS";
		date = "29.06.2023";
		desc = 	(
			"> Big changes on Menu" + "<br>" +
			"> New skins & skins ui" + "<br>" +
			"> New achievements" + "<br>" +
			"> Bug fixes & balancement" + "<br>" +
			"> New Power On lever"
		)
		
		document.getElementById("c-title_modal").innerHTML = title;
		document.getElementById("c-title_modal_date").innerHTML = date;
		document.getElementById("c-desc_modal").innerHTML = desc;
		
		updated = true;
	}
	
	UPDATES[2].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "V1.4.0: PEDRO'S BIRTHDAY";
		date = "30.06.2023";
		desc = 	(
			"> Fixing the Skins Button not updating to the selected skin" + "<br>" +
			"> Added name titles to skins" + "<br>" +
			"> Fixed the achievements for the modes which required not using the lever" + "<br>" +
			"> Finished icons for the new achievements from V1.3.0" + "<br>" +
			"> Added the Pedro Birthday skin (a alternative version from Pedro skin)" + "<br>" +
			"> Added the Pedro Birthday code" + "<br>" +
			"> Added sounds to selecting a new skin" + "<br>" +
			"> Made the skins change direction (since the player is just a souless cube, it didn't change directions)" + "<br>" +
			"> New 101% Platinum achievement"
		)
		
		document.getElementById("c-title_modal").innerHTML = title;
		document.getElementById("c-title_modal_date").innerHTML = date;
		document.getElementById("c-desc_modal").innerHTML = desc;
		
		updated = true;
	}
	
	UPDATES[3].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "V1.5.0: PRE-V2 / PRE-MEGA UPDATE";
		date = "01.07.2023";
		desc = 	(
			"> New Settings: Set Soft-Reset Type & Set Skipable Memorise (Can Skip Memorise?)" + "<br>" +
			"> New Skins: Sanes, Chara and NoName Demon" + "<br>" +
			"> New Achievements: Share It!, I'M DETERMINATED! & Fooled" + "<br>" +
			"> Added clickable socials on Menu" + "<br>" +
			"> Added a little delay before skipping intro" + "<br>" +
			"> Made so you can't select Play or Settings when entering a correct code (you could spam enter after putting a code, going to difficulties meter screen even after you put the code)" + "<br>" +
			"> (External) Updated the website's design and screenshots" + "<br>" +
			"> Lowered Player's speed by 0.10 (6.25 -> 6.15)" + "<br>" +
			"> Special Buttons now cannot be pressed anymore if pressed once (but can be pressed again if you switch Gamejolt accounts)" + "<br>" +
			"> Custom Mouse Cursor (the windows's cursor is now invisible in-game)" + "<br>" +
			"> Fixed 101% & other achievements" + "<br>" +
			"> Menu options can now be selected with mouse"
		)
		
		document.getElementById("c-title_modal").innerHTML = title;
		document.getElementById("c-title_modal_date").innerHTML = date;
		document.getElementById("c-desc_modal").innerHTML = desc;
		
		updated = true;
	}
	
	UPDATES[4].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "V1.6.0: IT'S SPEEDRUNNING TIME";
		date = "03.07.2023";
		desc = 	(
			"> New 'Speedrun Mode' in Settings" + "<br><span style='color:gray'>" +
			"&nbsp;*> Disables all achievements" + "<br>" +
			"&nbsp;*> Makes NoName Mode accessible on Menu" + "<br>" +
			"&nbsp;*> Your own username after selecting a mode" + "<br>" +
			"&nbsp;*> A timer in the middle and level times, which after each level, shows how long you took on it" + "<br>" +
			"&nbsp;*> You can change your username any time by pressing F1 and entering a new name on the screen again" + "<br>" +
			"&nbsp;*> Speedrun Mode can be disabled any time" + "<br>" +
			"&nbsp;*> Unique ending showing the leaderboard of the selected mode, with a unique music!</span>" + "<br>" +
			"> Menu music now continues on Settings and Difficulty Meter screens" + "<br>" +
			"> Small Changes on Light's Out screen"
		)
		
		document.getElementById("c-title_modal").innerHTML = title;
		document.getElementById("c-title_modal_date").innerHTML = date;
		document.getElementById("c-desc_modal").innerHTML = desc;
		
		updated = true;
	}
	
	UPDATES[5].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "V1.6.2: BIG PATCHES";
		date = "04.07.2023";
		desc = 	(
			"> (Change) Fullscreen mode does not work anymore on the following screens: Menu, Set Your Name (Speedrun Mode) and Difficulty Meter.)" + "<br>" +
			"> (Patch - V1.6.2) Leaderboard Name not showing & saving" + "<br>" +
			"> (Patch - V1.6.2) Leaderboard not working at all"
		)
		
		document.getElementById("c-title_modal").innerHTML = title;
		document.getElementById("c-title_modal_date").innerHTML = date;
		document.getElementById("c-desc_modal").innerHTML = desc;
		
		updated = true;
	}
	
	UPDATES[6].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "V1.7.0: PATCHES & CHANGES";
		date = "05.07.2023";
		desc = 	(
			"> (Patch) You couldn't start a run during Speedrun Mode (because it wouldn't go to the Set Your Name screen)" + "<br>" +
			"> (Change) Updated the Hard Mode's ending's music to the right one" + "<br>" +
			"> (New) New death screen for the SCP Demon from NoName Mode" + "<br>" +
			"> (New) New Patient achievement" + "<br>" +
			"> (Change) Added the text for Error Level which didn't have previously, even though it was intended to have one" + "<br>" +
			"> (Patch) Fixed lighting not turning off during Memorise in ERR0R Level" + "<br>" +
			"> (Change) Added a different amount of Light Up uses for ERR0R Level" + "<br>" +
			"> (Patch) 50 Sessions and Social Share achievements not counting in-game (but giving trophies only)"
		)
		
		document.getElementById("c-title_modal").innerHTML = title;
		document.getElementById("c-title_modal_date").innerHTML = date;
		document.getElementById("c-desc_modal").innerHTML = desc;
		
		updated = true;
	}
}



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
	const modal = document.querySelector(button.dataset.modalTarget)
	openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.c-modal.active')
  modals.forEach(modal => {
	closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
	const modal = button.closest('.c-modal')
	closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  updated = false;
}