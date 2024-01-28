// Function to update the counter
function updateCounter(counterId, counterValue) {
    const textElement = document.getElementById(counterId);
    if (textElement) {
        textElement.textContent = counterValue < 10 ? `0${counterValue}` : counterValue;
    }
}

// Animation function (count down from 95 hours)
function animateCounters() {
    let heure = 95;
    let minute = 0;
    let seconde = 0;

    const counterInterval = setInterval(() => {
        if (heure === 0 && minute === 0 && seconde === 0) {
            clearInterval(counterInterval); // Stop the animation when it reaches 0 hours
        }
        updateCounter('heure', heure);
        updateCounter('minute', minute);
        updateCounter('seconde', seconde);

        if (seconde === 0) {
            if (minute === 0) {
                if (heure > 0) {
                    heure--;
                    minute = 59;
                }
            } else {
                minute--;
            }
            seconde = 59;
        } else {
            seconde--;
        }
    }, 1000); // Update every second
}

// Start the animation
animateCounters();



function getToLogin(){
    document.querySelector('body').addEventListener('click', () => {
        // location.href = 'login.html'
        login = document.createElement('img')
        login.setAttribute("src", "../assets/login.png")
        login.setAttribute("id", "login-img")
        document.body.innerHTML = ""
        document.body.appendChild(login)
    })
}getToLogin()