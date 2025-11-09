const container = document.getElementById("stars-container");

for (let i = 0; i < 40; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 4}s`;
  container.appendChild(star);
}

const title = document.querySelector("h1");
const status = document.querySelector(".status");
let hue = 0;

setInterval(() => {
  hue = (hue + 1) % 360;
  const glow = `0 0 15px hsl(${hue}, 80%, 70%)`;
  title.style.textShadow = glow;
  status.style.textShadow = glow;
}, 60);
