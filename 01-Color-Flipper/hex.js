const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const backGroundColor = getRandomColor();
  document.body.style.backgroundColor = backGroundColor;
  color.textContent = backGroundColor;
});

const getRandomColor = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  return hexColor;
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
