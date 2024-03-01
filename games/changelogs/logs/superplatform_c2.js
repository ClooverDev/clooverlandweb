const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const changelogs = document.querySelectorAll(".clog");

const UPDATES = [
	document.getElementById("update_210523"),
	document.getElementById("update_210523_2"),
	document.getElementById("update_220523"),
	document.getElementById("update_240523"),
	document.getElementById("update_250523"),
	document.getElementById("update_270523"),
]

var updated = false;

if (updated == false) {
	UPDATES[0].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "V1.4.0: Half-Changes";
		date = "21.05.2023";
		desc = 	(
			"> Fixed Credits for Cheesy Moon" + "<br>" +
			"> Changed Unworth's achievement background" + "<br>" +
			"> New Beast's sprite for the agreement endings" + "<br>" +
			"> Fixed agreement dialogues" + "<br>" +
			"> Added the old menu's noob on menu" + "<br>" +
			"> Some small details in achievments area" + "<br>" +
			"> Fixed jump not disabling on Faker and TrollFace" + "<br>" +
			"> Changed Beast's sprite on pursuit after Burning House - The Beast now has teeth (lol)"
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
		
		title = "V2.0.0: Other Half";
		date = "21.05.2023";
		desc = 	(
			"<span style='color:gold'>> Speedrun timer</span>" + "<br><span style='color:gray'>" +
			"&nbsp*>The timer starts when you press play for the first time and ends when you get the true ending, everytime you leave it'll update the saved timer from last session. To reset the timer completely you can just reset the data, if the timer glitches out due to a old build, just reset data as well." + "<span><br><span style='color:lightgray'>" +
			"> Changed the agreement ending & agreement options" + "<br>" +
			"> Fixed the beast not appearing post pursuit (close to the exit)" + "<br>" +
			"> Added the achievements icons around the achievements area"
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
		
		title = "V2.1.0: Sherlock Update & Changes";
		date = "22.05.2023";
		desc = 	(
			"> Fixed the Burned Ending not triggering" + "<br>" +
			"> Added sherlock achievement + secret"  + "<br>" +
			"> Added the Last Time in the menu"  + "<br>" +
			"> Removed the noob buddy"  + "<br>" +
			"> Made some sprite-changing shit"
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
		
		title = "V2.1.1: Hotfixes";
		date = "24.05.2023";
		desc = 	(
			"<span style='color:gold'>>Best Time & Fixed Last Time not updating</span>" + "<br><span style='color:gray'>" +
			"&nbsp*>When you get the True Ending it'll first compare the Last Minute that has saved to see if it's higher than current run's minute, then if it is will update the best time, and later as well save the new minute as the last minute" + "<span><br><span style='color:lightgray'>" +
			"> Fixed the Connection Terminated video ending early" + "<br>" +
			"> Made some cool icons" + "<br>" +
			"> Adjusted the doors which was floating a little"
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
		
		title = "V2.3.0: Hotifxes";
		date = "25.05.2023";
		desc = 	(
			"> Fixed Best Time only updating on the second time you get" + "<br>" +
			"> Player and Beast (in pursuit) are now faster" + "<br>" +
			"> Agreement's start dialogue can now be skipped by pressing space or A button in xbox controller" + "<br>" +
			"> Increased the Master Speedrunner achievement's time requirement to 16 minutes instead of 15 minutes"
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
		
		title = "V3.0.0: Final Update";
		date = "27.05.2023";
		desc = 	(
			"> New achievement: ??? (hint, check out The Void)" + "<br>" +
			"<span style='color:gold'>> Changed completely how True Ending works" + "</span><br><span style='color:gray'>" +
			"&nbsp*>Check out inside the files for instructions" + "</span><br>" +
			"> Changed when the Timer starts and ends" + "<br>" +
			"<span style='color:gold'>> 'Fixed' the Best Time not being able to be updated from seconds" + "</span><br><span style='color:gray'>" +
			"&nbsp*> Basically if you beat your time by seconds it wouldn't update since it was only detecting your last minute on your previous run." + "</span><br>" +
			"> Lucky-Based achievements (Pedro, Unfortunate Occurence, Nanico and LAZOR/Shoop Da Whoop) are no longer required for the speedrun timer."
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