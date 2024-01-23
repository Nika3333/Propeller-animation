// Variables
const currentNumWrapper = document.querySelector('.current-num')
const currentNum = document.querySelector('.number')
const rangeInput = document.querySelector('input')
const wings = document.querySelectorAll('.wing')
const propellerCenterCircle = document.querySelector('.propeller-center-circle')

// Functions 
    rangeInput.addEventListener('input', () => {
        let value = rangeInput.value;
        currentNum.textContent = value;

        if (document.body.clientWidth > 758) {
            currentNumWrapper.style.bottom = `${value}%`;
        } else {
            currentNumWrapper.style.left = `${value}%`;
        }

        const duration = 5000 / value * 10

        const rotationAnimation = [
            { rotate: "0deg" },
            { rotate: "360deg" },
        ];

        const rotationSpeed = {
            duration: duration,
            iterations: Infinity,
            easing: 'linear',
            fill: 'forwards',
        };

        wings.forEach(e => {
            e.animate(rotationAnimation, rotationSpeed);
        });

        propellerCenterCircle.animate(rotationAnimation, rotationSpeed);
    });
   
    
    

    