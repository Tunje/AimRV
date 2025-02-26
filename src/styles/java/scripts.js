document.addEventListener("DOMContentLoaded", function () {
    let retryTimeout;
    let imageInterval;

    function changeBackgroundImage() {
        const element = document.querySelector('.dynamic-background');
        if (!element) {
            retryTimeout = setTimeout(changeBackgroundImage, 100);
            return;
        }

        clearTimeout(retryTimeout);

        const images = [
            "/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg",
            "/AimRV/images/EE-AIMChallenge24-Uhamn-0171-high.jpg",
            "/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_113.jpg",
            "/AimRV/images/EE-AIMChallenge24-Uhamn-0171-high.jpg"
        ];
        let index = 0;

        clearInterval(imageInterval);

        imageInterval = setInterval(() => {
            // Fade out the current background image
            element.style.transition = "opacity 1s ease-in-out"; // Smooth transition for opacity
            element.style.opacity = 0;

            // After fade-out finishes, change the image and fade-in the new one
            setTimeout(() => {
                element.style.backgroundImage = `url(${images[index]})`;
                element.style.opacity = 1; // Fade-in the new image
            }, 1000); // Match the fade-out duration with this timeout

            // Move to the next image
            index = (index + 1) % images.length;
        }, 5000); // Change background every 5 seconds
    }

    changeBackgroundImage();
});
