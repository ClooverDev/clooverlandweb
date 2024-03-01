const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const changelogs = document.querySelectorAll(".clog");

const UPDATES = [
	document.getElementById("update_020124"),
	document.getElementById("update_030124"),
]

var updated = false;

if (updated == false) {
	UPDATES[1].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "V1.1.1 - PATCHES & CHANGES";
		date = "03.01.2024";
		desc = 	(
			"> New logo once you acquire the 'Devil's Fate' achievement on the menu" + "<br><br>" +
			"> The game's ico (the game's icon that shows on the window and on the taskbar) now changes during christmas automatically" + "<br><br>" +
			"> The Final Test's Devil's Fate's jumpscare now plays the correct audio and the animation got a few changes" + "<br><br>" +
			"> 'The Backrooms' achievement now takes 1.5 minutes instead of 2 minutes" + "<br><br>" +
			"> 'The Backrooms' achievement has been added to the achievements screen" + "<br><br>" +
			"> New achievement: 'Jack be Like'" + "<br><br>" +
			"> Made some changes to the Menu" + "<br><br>" +
			"> Fixed the christmas present still appearing on Devil's Fate cutscene"
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
		
		title = "V1.1 - UPDATE 1";
		date = "02.01.2024";
		desc = 	(
			"> The Backrooms achievement is now achievable" + "<br><br>" +
			"> New Eventual Achievement: Happy New Year! (Only avaliable between Jan 1st and Jan 10th every year)" + "<br><br>" +
			"> Updated the Christmas Event to only occurs during Christmas (Between Dec 20th and Dec 31th every year)" + "<br><br>" +
			"> 'Present Hunting' is now a singular achievement, meaning it'll be avaliable yearly during Christmas" + "<br><br>" +
			"> 'The Backrooms' achievement access now shows the counting properly" + "<br><br>" +
			"> You can now reset your data by holding the 'Z' key during loading" + "<br><br>" +
			"> Fixed some known bugs"
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