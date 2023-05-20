let showVectors = false;
document.getElementById("gradientVectors").addEventListener('change', function () {
    console.log("Checkbox changed"); // Log when the checkbox is changed
    showVectors = this.checked;
});