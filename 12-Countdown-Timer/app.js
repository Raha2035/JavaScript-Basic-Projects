const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 8, 9, 12, 30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekDay = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const temp = hour >= 12 && hour <= 24 ? "pm" : "am";

giveaway.textContent = `giveaway ends on ${weekDay}, ${date} ${month} ${year} ${hour}:${minute}${temp}`;

// future time in ms
const futureTime = futureDate.getTime();

const getRemaindingTime = () => {
  // today
  const today = new Date().getTime();

  // remain Time
  const remainTime = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1day = 24hr

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  // calculate all values
  let days = Math.floor(remainTime / oneDay);
  let hours = Math.floor((remainTime % oneDay) / oneHour);
  let minutes = Math.floor((remainTime % oneHour) / oneMinute);
  let seconds = Math.floor((remainTime % oneMinute) / oneSecond);

  // set values array
  const values = [days, hours, minutes, seconds];

  // format items
  const format = (item) => {
    item = item < 10 ? `0${item}` : item;
    return item;
  };

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (remainTime < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
};

// countDown
const countDown = setInterval(getRemaindingTime, 1000);

//set initial values
getRemaindingTime();
