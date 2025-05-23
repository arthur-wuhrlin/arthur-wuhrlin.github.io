import { useEffect } from 'react';

const useImageHover = (imageRef) => {
  useEffect(() => {
    const currentImage = imageRef.current;
    if (!currentImage) return;

    const handleMouseMove = (e) => {
      const rect = currentImage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      const rotateY = percentX * 10; // Adjusted multiplier
      const rotateX = -percentY * 10; // Adjusted multiplier

      currentImage.style.transition = 'transform 0.1s ease-out'; // Smooth transition
      currentImage.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };

    const handleMouseLeave = () => {
      currentImage.style.transition = 'transform 0.5s ease-out'; // Slower transition back
      currentImage.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
    };

    currentImage.addEventListener('mousemove', handleMouseMove);
    currentImage.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (currentImage) { // Check if currentImage exists before removing listeners
        currentImage.removeEventListener('mousemove', handleMouseMove);
        currentImage.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [imageRef]); // Re-run if imageRef changes
};

export default useImageHover;
