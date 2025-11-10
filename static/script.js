// 🎉 Select Elements
const btn = document.getElementById('celebrateBtn');
const music = document.getElementById('weddingMusic');
const heart = document.getElementById('heart');
const robot1 = document.getElementById('robot1');
const robot2 = document.getElementById('robot2');

// 💐 Start Celebration Button
btn.addEventListener('click', () => {
  // 🎵 Play Wedding Song
  music.play();

  // 🤖 Robots move closer together
  robot1.style.transform = 'translateX(100px)';
  robot2.style.transform = 'translateX(-100px)';

  // 💞 After moving, start dancing
  setTimeout(() => {
    robot1.style.animation = 'dance 1s infinite';
    robot2.style.animation = 'dance 1s infinite';
    heart.textContent = '💞';
    startCelebration();
  }, 2000);
});

// 🌈 Start Fireworks & Hearts
function startCelebration() {
  createFireworks();
  createHearts();
}

// 🎆 Fireworks Function
function createFireworks() {
  for (let i = 0; i < 20; i++) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    document.body.appendChild(spark);

    // Random position & color
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight / 1.5;
    const size = Math.random() * 8 + 4;
    const colors = ['#ff4d79', '#ffcc00', '#00ccff', '#66ff99', '#ff9966'];

    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;
    spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    spark.style.animation = 'spark 1.5s ease-out forwards';

    setTimeout(() => spark.remove(), 1500);
  }
}

// 💗 Floating Hearts Function
function createHearts() {
  for (let i = 0; i < 10; i++) {
    const floatingHeart = document.createElement('div');
    floatingHeart.classList.add('floating-heart');
    floatingHeart.textContent = '💗';
    document.body.appendChild(floatingHeart);

    const x = Math.random() * window.innerWidth;
    const delay = Math.random() * 2;
    floatingHeart.style.left = `${x}px`;
    floatingHeart.style.bottom = '0';
    floatingHeart.style.animationDelay = `${delay}s`;

    setTimeout(() => floatingHeart.remove(), 4000);
  }
}
