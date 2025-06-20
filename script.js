const button = document.getElementById('mysteryButton');
const message = document.getElementById('resultMessage');
const clickSound = document.getElementById('clickSound');

let clickCount = 0;

const gradients = [
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  "linear-gradient(135deg, #fddb92, #d1fdff)",
  "linear-gradient(135deg, #89f7fe, #66a6ff)",
  "linear-gradient(135deg, #f6d365, #fda085)"
];

const messages = [
  "Uh oh... 😳",
  "Nice click 👍",
  "Why would you do that?",
  "Try again...",
  "You're being watched 👁️",
  "Hmm. Nothing happened. Or did it?",
  "That's illegal 💀",
  "Your vibe just shifted"
];

button.addEventListener('click', () => {
  clickCount++;

  // Play sound
  clickSound.play();

  // Change background gradient randomly
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style.background = randomGradient;

  // Show random message or milestone message
  if (clickCount === 10) {
    message.textContent = "You unlocked a secret mood!";
  } else {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMsg;
  }

  // Shake animation
  button.classList.add('shake');
  setTimeout(() => button.classList.remove('shake'), 500);

  // Move button randomly inside viewport boundaries
  const padding = 100; // so button doesn't go off screen
  const maxX = window.innerWidth - padding;
  const maxY = window.innerHeight - padding;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
});
