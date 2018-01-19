let clock = document.getElementById('clock')
let bg = document.getElementById('background')
let dM = document.getElementById('dayMonth')

let m = ['January', 'Febuary', 'March', 'April', 'May', 'June','July','August','September','October', 'November', 'December'];
let weekD = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday'];

function time(){
	let d = new Date()
	let hour = d.getHours()
	let min = d.getMinutes()
	let sec = d.getSeconds()
	let day = d.getDay()
	let date = d.getDate()
	let month = d.getMonth()
	let year = d.getFullYear()
	let y = year;
	
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
	let string = weekD[day] + "," + " " + date + " " + m[month] + " " + year;
	
	bg.style.background = color;
	clock.innerHTML = hour+":"+min+":"+sec;
	dM.innerHTML = string;

	setInterval(time, 1000)
}


time();






