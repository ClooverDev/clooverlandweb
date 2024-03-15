const  bar_amount = 50;

const colors = [
	"red",
	"#ff9305",
	"yellow",
	"#85dc28",
	"lime",
]

const bar = "pc_bar";
const percentage = "pc_text"

document.getElementById(bar).addEventListener('click', updateBar);

function updateBar() {
	document.getElementById(bar).style.width = bar_amount+"%";
	document.getElementById(percentage).innerHTML = bar_amount+"%";
	
	if (bar_amount <= 25) {
		document.getElementById(bar).style.backgroundColor = colors[0];
		document.getElementById(percentage).style.color = colors[0];
		
	} else if (bar_amount > 25 && bar_amount <= 49) {
		document.getElementById(bar).style.backgroundColor = colors[1];
		document.getElementById(percentage).style.color = colors[1];
		
	} else if (bar_amount > 49 && bar_amount <= 74) {
		document.getElementById(bar).style.backgroundColor = colors[2];
		document.getElementById(percentage).style.color = colors[2];
		
	} else if (bar_amount > 74 && bar_amount <= 99) {
		document.getElementById(bar).style.backgroundColor = colors[3];
		document.getElementById(percentage).style.color = colors[3];
		
	} else if (bar_amount == 100) {
		document.getElementById(bar).style.backgroundColor = "lime";
		document.getElementById(percentage).style.color = colors[4];
	}
}

updateBar();
