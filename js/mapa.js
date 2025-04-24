const markers = document.querySelectorAll('.marker');
const infoBox = document.getElementById('info-box');
const infoText = document.getElementById('info-text');

markers.forEach(marker => {
    marker.addEventListener('mouseover', () => {
        const location = marker.getAttribute('data-location');
        infoText.textContent = location;
        infoBox.style.display = 'block';
        infoBox.style.top = marker.style.top;
        infoBox.style.left = `calc(${marker.style.left} + 30px)`;
    });

    marker.addEventListener('mouseout', () => {
        infoBox.style.display = 'none';
    });
});