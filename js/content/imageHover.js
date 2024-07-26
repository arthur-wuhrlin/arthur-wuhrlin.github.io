document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-container img');

  images.forEach(image => {
    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const rotateY = percentX * 5; // Adjust the multiplier to increase/decrease rotation
        const rotateX = -percentY * 5; // Adjust the multiplier to increase/decrease rotation

        image.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'rotateY(0) rotateX(0)';
    });
  });
});