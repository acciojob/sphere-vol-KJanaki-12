const radius = document.getElementById("radius");
const volume = document.getElementById("volume");

function volume_sphere() {
    //Write your code here
	let r = parseInt(radius.value);
	
	let v = 1.33*3.42*r*r*r;
	volume.value = v;
	// alert(v)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
