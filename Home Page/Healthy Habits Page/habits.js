let waterTotal = 0;
function addWater() {
    let waterInput = document.getElementById("water-input").value;
    waterTotal += parseInt(waterInput) || 0;
    document.getElementById("water-total").innerText = waterTotal;
}


function trackWater() {
    let waterInput = document.getElementById("water-input").value;
    let result = document.getElementById("water-result");
    if (waterInput >= 15.5) {
        result.innerHTML = "Great job! You have met the recommended intake.";
    } else if (waterInput >= 11.5) {
        result.innerHTML = "Great job! You have met the recommended intake.";
    } else {
        result.innerHTML = "Keep drinking water! Stay hydrated.";
    }
}

const breathingText = document.getElementById("breathing-text");
let isInhaling = true;

function updateBreathingText() {
    if (isInhaling) {
        breathingText.innerText = "Inhale...";
    } else {
        breathingText.innerText = "Exhale...";
    }
    isInhaling = !isInhaling;
}

setInterval(updateBreathingText, 5000); // Change text every 5 seconds


function calculateSleep() {
    let sleepTime = document.getElementById("sleep-time").value;
    let result = document.getElementById("sleep-result");
    
    if (!sleepTime) {
        result.innerHTML = "Please enter a valid sleep time.";
        return;
    }
    
    let sleepDate = new Date();
    let [hours, minutes] = sleepTime.split(":").map(Number);
    sleepDate.setHours(hours, minutes, 0);
    
    let recommendedTimes = {
        "Children (9-12 hrs)": [9, 12],
        "Teens (8-10 hrs)": [8, 10],
        "Adults (7-9 hrs)": [7, 9]
    };
    
    let wakeTimes = Object.entries(recommendedTimes).map(([ageGroup, range]) => {
        let minWake = new Date(sleepDate.getTime() + range[0] * 60 * 60000);
        let maxWake = new Date(sleepDate.getTime() + range[1] * 60 * 60000);
        return `${ageGroup}: ${minWake.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${maxWake.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    });
    
    result.innerHTML = "Recommended wake-up times:<br>" + wakeTimes.join("<br>");
}

document.addEventListener("DOMContentLoaded", function () {
    let goToTopBtn = document.getElementById("goToTopBtn");

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 100) {
            goToTopBtn.style.display = "block";
        } else {
            goToTopBtn.style.display = "none";
        }
    };

    goToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
