let isDOBOpen = false;
let dateOfBirth;

let settingContentEl = document.getElementById("settingContent");
let settingIconEl = document.getElementById("settingIcon");
const initialText = document.getElementById("initialText");
const finalText = document.getElementById("afterDobButton");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const toggleDateOFbirthSelector = () => {
  if (isDOBOpen) {
    settingContentEl.classList.add("hide");
  } else {
    settingContentEl.classList.remove("hide");
  }
  isDOBOpen = !isDOBOpen;
};

const updateAge = () => {
  const currentDate = new Date();
  const dateDiff = currentDate - dateOfBirth;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;

  yearEl.innerHTML = year;
  monthEl.innerHTML = month;
  dayEl.innerHTML = day;
  hourEl.innerHTML = hour;
  minuteEl.innerHTML = minute;
  secondEl.innerHTML = second;
};

const setDOBHandler = () => {
  const dateString = dobInputEl.value;
  dateOfBirth = dateString ? new Date(dateString) : null;

  if (dateOfBirth) {
    initialText.classList.add("hide");
    finalText.classList.remove("hide");
    setInterval(() => updateAge(), 1000);
  } else {
    finalText.classList.add("hide");
    initialText.classList.remove("hide");
  }
};
setDOBHandler();

settingIconEl.addEventListener("click", toggleDateOFbirthSelector);
dobButtonEl.addEventListener("click", setDOBHandler);
