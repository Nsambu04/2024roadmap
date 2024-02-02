// create variables for the body and switch to change the background
const toggleSwitch = document.getElementById('toggleSwitch');
const body = document.body;

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.style.background = '#e8cb26';
    } else {
        body.style.background = '#0C2D57'; // Change it back to the initial color
    }
});
