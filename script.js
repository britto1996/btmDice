const images = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

function player() {
  const random = Math.floor(Math.random() * images.length);
  const human = document.querySelector(".img1");
  const bot = document.querySelector(".img2");
  const randomNumber = Math.floor(Math.random() * images.length);
  const randomImagesHuman = images[randomNumber];
  const randomImagesBot = images[random];
  human.src = randomImagesHuman;
  bot.src = randomImagesBot;
  if (randomNumber > random) {
    document.getElementById("result").textContent = `Player1 wins 🐱‍🏍`;
  }
  if (random > randomNumber) {
    document.getElementById("result").textContent = `Player2 wins 🐱‍🏍`;
  }
  if (randomNumber == random) {
    document.getElementById("result").textContent = `Match ties 🐱`;
  }
}
