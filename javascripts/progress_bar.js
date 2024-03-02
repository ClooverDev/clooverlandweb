const  bar_amount = 0;
const colors = [
	"red",
	"#ff9305",
	"yellow",
	"#85dc28",
	"lime",
]

document.getElementById("cool_bar").addEventListener('click', updateBar);

function updateBar() {
	document.getElementById("text").innerHTML = bar_amount+"%";
	document.getElementById("cool_bar").style.width = bar_amount+"%";
	
	if (bar_amount <= 25) {
		document.getElementById("cool_bar").style.backgroundColor = colors[0];
		document.getElementById("text").style.color = colors[0];
	} else if (bar_amount > 25 && bar_amount <= 49) {
		document.getElementById("cool_bar").style.backgroundColor = colors[1];
		document.getElementById("text").style.color = colors[1];
	} else if (bar_amount > 49 && bar_amount <= 74) {
		document.getElementById("cool_bar").style.backgroundColor = colors[2];
		document.getElementById("text").style.color = colors[2];
	} else if (bar_amount > 74 && bar_amount <= 99) {
		document.getElementById("cool_bar").style.backgroundColor = colors[3];
		document.getElementById("text").style.color = colors[3];
	} else if (bar_amount == 100) {
		document.getElementById("cool_bar").style.backgroundColor = "lime";
		document.getElementById("text").style.color = colors[4];
	}
}

updateBar();
