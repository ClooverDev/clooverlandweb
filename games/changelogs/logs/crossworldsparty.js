const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const changelogs = document.querySelectorAll(".clog");

const UPDATES = [
	document.getElementById("update_240224"),
	document.getElementById("update_010324"),
]

var updated = false;

if (updated == false) {
	UPDATES[1].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "V1.1.1: PATCHES";
		date = "01.03.2024";
		desc = 	(
			"> Illusion Gifts 100% now is only given on starting the game" + "<br>" +
			"> Lowered the time to soft-reset from 10s to 5s" + "<br>" +
			"> Stamina is now consumed when walking instead of being consumed while idle on Super Platform Mini" + "<br>" +
			"> Fixed the trophies showing wrong achievements and detecting the wrong achievements" + "<br>" +
			"> Fixed the Illusion Gifts 100%'s icon not showing on the list" + "<br>" +
			"> Fixed locked achievements still counting the description's unlocked characters amount to update the background size" + "<br>" +
			"> Fixed the visual problem on the last level of RBPG Mini" + "<br>" +
			"> Fixed a bug where you would get to the start of the level you were in even without checkpoints"
		)
		
		document.getElementById("c-title_modal").innerHTML = title;
		document.getElementById("c-title_modal_date").innerHTML = date;
		document.getElementById("c-desc_modal").innerHTML = desc;
		
		updated = true;
	}
	
	UPDATES[0].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "V1.1.0: SEPARATION UPDATE";
		date = "24.02.2024";
		desc = 	(
			"> Separation has been concluded" + "<br>" +
			"> Replaced all texts with Pixeloid Sans" + "<br>" +
			"> Updated Credits" + "<br>" +
			"> Optimized game ALOT!!" + "<br>" +
			"> New Achievement: Platform Master" + "<br>" +
			"> Replaced the BATH's Hatty Shovel Collision & Sprite" + "<br>" +
			"> Fixed alot of the achievements" + "<br>" +
			"> Fixed the achievemnt UI" + "<br>" +
			"> Fixed the Trophy Room" + "<br>" +
			"> Fixed a bunch of other stuff"
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