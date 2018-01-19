let clock = document.getElementById('clock')
let bg = document.getElementById('background')

function time(){
	let date = new Date()
	let hour = date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()
	

	if (hour <= 9){
		hour = '0'+hour;
	}
	if (min <= 9){
	    min = '0'+min;
	}
	if (sec <= 9){
		sec = '0'+sec;
	}

	let color = '#' + hour + min + sec;
	
	bg.style.background = color;
	clock.innerHTML = color.replace(/[\W_]/g, "");
	
	setInterval(time, 1000)
}

time();



