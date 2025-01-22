function startSprinkleEffect() {
  const sprinkleContainer = document.querySelector('.sprinkle-container');
  const sprinkleInterval = setInterval(() => {
    // sprinkle
    const sprinkle = document.createElement('div');
    sprinkle.classList.add('sprinkle');

    // Randomize 
    sprinkle.style.left = `${Math.random() * 100}vw`;
     sprinkle.style.top = `${Math.random() * -100}px`;
    sprinkle.style.animationDelay = `${Math.random() * 1}s`; // Delay before sprinkle starts falling
    sprinkle.style.backgroundColor = getRandomColor();


    sprinkleContainer.appendChild(sprinkle);

    // Remove sprinkle 
    setTimeout(() => sprinkle.remove(), 20000);
  }, 100); 

  // 3 seconds
  setTimeout(() => clearInterval(sprinkleInterval), 10000);
}

function getRandomColor() {
  const colors = ['#FFC0CB', '#FFD700', '#FF69B4', '#A8D5BA', '#F4B860'];
  return colors[Math.floor(Math.random() * colors.length)];
}
