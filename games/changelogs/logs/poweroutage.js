const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const changelogs = document.querySelectorAll(".clog");

const UPDATES = [
	document.getElementById("update_131023"),
]

var updated = false;

if (updated == false) {
	UPDATES[0].onclick = function() {
		var title = "";
		var date = "";
		var desc = "";
		
		title = "[DEMO] HOTFIXES & CHANGES";
		date = "13.10.2023";
		desc = 	(
			"<span style='font-size:70%;'>" +
			"> Fixed random fps drop in Level 4" + "<br><br>" +
			"> Replaced Bedroom's background so it'll lag less" + "<br><br>" +
			"> Added some collectibles that wasn't added earlier" + "<br><br>" +
			"> Opened Challenges" + "<br><br>" +
			"> Challenges now has one collectible hidden within the challenge" + "<br><br>" +
			"> Made some changes to Level 10" + "<br><br>" +
			"> Blocked Normal & Hard mode until you beat Easy Mode" + "<br><br>" +
			"> Challenges require the Easy Mode to be beaten" + "<br><br>" +
			"> Disabled 'Resizable Screen' and 'Allow Fullscreen Switching' and now the Window Mode is avaliable in settings" + "<br><br>" +
			"> Screen Scaling is now Full Scale instead of 'Keep aspect ratio'" + "<br><br>" +
			"> New Warning screen when it's the first time playing (important warning for epileptic people, otherwise the society will kill me if I didn't)" + "<br><br>" +
			"> Medals have been moved to Difficulties screen" + "<br><br>" +
			"> New 'Reward Blocked' icon when you activate Developer Secret" + "<br><br>" +
			"> You can now close Settings and go to the Bedroom on the Controller (you just can't change any setting on the controller, nor select a challenge, for now)" + "<br><br>" +
			"> New Pause Screen (saves last player position, is resetted everytime you die or go to the next level, pauses the timer)" + "<br><br>" +
			"> The pause screen can be opened in the levels with either Enter or P, if you have Enter selected as the Interact Key, you'll only be able to open the Pause Screen with P, otherwise you can open with both." + "<br><br>" +
			"> Disabled achievements rewards and other stuff when activating Developer Secret" + "<br><br>" +
			"> Difficulties Changer's lid (the lid of the machine you use to change difficulties) has fixed itself when fixing the Fullscreen problem, before it wouldn't finish the animation and cause an unsatisfying view lmao" +
			"</span>"
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