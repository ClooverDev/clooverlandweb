const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const changelogs = document.querySelectorAll(".log");

const WEBSITE_LOGS = [
	document.getElementById("DOMAINDAY"),
	document.getElementById("GITHUBANDOVERHAUL"),
	document.getElementById("PAGES"),
	document.getElementById("CHANGELOGS"),
]

var updated = false;

if (updated == false) {
	WEBSITE_LOGS[3].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "CHANGELOGS";
		date = "29.02.2024";
		desc = 	(
			"> Replaced 'PLAY HERE!' buttons with 'CHANGELOGS'" + "<br>" +
			"> Created a changelog page for each game (except Super Platform Original)" + "<br>" +
			"> Games's play links are now placed on the images (hover the image and click to access the download page)" + "<br>" +
			"> Games's play links are now replaced with the play.tophatgames.net sub-domain" + "<br>" +
			"> You can now click the logo to go back to the home page" + "<br>" +
			"> Added social links to the footer"
		)
		
		document.getElementById("title_modal").innerHTML = title;
		document.getElementById("title_modal_date").innerHTML = date;
		document.getElementById("desc_modal").innerHTML = desc;
		
		updated = true;
	}
	
	WEBSITE_LOGS[2].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "PAGES (4/4)";
		date = "27.02.2024";
		desc = 	(
			"Before 4 PM (1/4)" + "<br>" +
			"> Created each page's code as templates" + "<br>" +
			"> Finished FanArt Exhibition" + "<br>" +
			"> Replaced redirect in the introduction text" + "<br>" +
			"> Made an auto-link updater" + "<br><br>" +
			"After 4 PM (4/4)" + "<br>" +
			"> Finished 'Games' page" + "<br>" +
			"> Finished 'FanArt Exhibition' page" + "<br>" +
			"> Finished 'Damiao's Arts' page" + "<br>" +
			"> Finished 'Forums' page (not 100% actually)" + "<br>"
		)
		
		document.getElementById("title_modal").innerHTML = title;
		document.getElementById("title_modal_date").innerHTML = date;
		document.getElementById("desc_modal").innerHTML = desc;
		
		updated = true;
	}
	
	WEBSITE_LOGS[1].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "GITHUB & OVERHAUL";
		date = "26.02.2024";
		desc = 	(
		"> Moved from Google Sites to GitHub" + "<br>" +
		"> Complete overhaul since I need to code from the start" + "<br>" +
		"> Website is now hosted on GitHub but accessible through the domain" + "<br>" +
		"> Fresh new code"
		)
		
		document.getElementById("title_modal").innerHTML = title;
		document.getElementById("title_modal_date").innerHTML = date;
		document.getElementById("desc_modal").innerHTML = desc;
		
		updated = true;
	}
	
	WEBSITE_LOGS[0].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
	
		title = "DOMAIN DAY";
		date = "23.02.2024";
		desc = 	(
			"> Connected the website to a domain" + "<br>" +
			"> Created support and business email for contact" + "<br>"
		)
		
		document.getElementById("title_modal").innerHTML = title;
		document.getElementById("title_modal_date").innerHTML = date;
		document.getElementById("desc_modal").innerHTML = desc;
		
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
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
	closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
	const modal = button.closest('.modal')
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