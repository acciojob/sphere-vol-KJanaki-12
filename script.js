function volume_sphere() {
	if (event) event.preventDefault();
    //Write your code here
	 const radius = parseFloat(document.getElementById("radius").value);

  // Validate input (non-negative and numeric)
  if (isNaN(radius) || radius < 0) {
    document.getElementById("volume").value = "NaN";
    return;
  }

  // Calculate volume using formula: (4/3) * π * r³
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display result rounded to 4 decimal places
  document.getElementById("volume").value = volume.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
