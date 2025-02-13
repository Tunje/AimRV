let retryTimeout;
let colorInterval;

function changeBackgroundColor() {
    const element = document.querySelector('.dynamic-background');
    if (!element) {
        retryTimeout = setTimeout(changeBackgroundColor, 100); // Retry if element is not found
        return; // Exit if the element is not found
    }

    clearTimeout(retryTimeout);

    const colors = ['#4A6E9D', '#6B8E23', '#A0522D', '#B0B0B0'];
    let index = 0;

    clearInterval(colorInterval); // Clear any existing interval

    colorInterval = setInterval(() => {
        element.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length; // Cycle through colors

        // No need for unlocking logic if you want continuous cycling
    }, 5000); // Change color every 5 seconds
}

// Call the function to start the timer
changeBackgroundColor();