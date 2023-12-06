let user = "Fasil"; //Change the value to add your name
let time = document.getElementById("time");
let date = document.getElementById("date");
let greeting = document.getElementById("greeting");
let body = document.querySelector("body");
let title = document.querySelector("title");

setInterval(() => {
  updateDate();
}, 1000);

//function to update date and time
const updateDate = () => {
  let Day = new Date();
  let hour = ("0" + Day.getHours()).slice(-2);
  let minute = ("0" + Day.getMinutes()).slice(-2);
  let second = ("0" + Day.getSeconds()).slice(-2);
  let day = ("0" + Day.getDate()).slice(-2);
  let month = ("0" + Number(Day.getMonth() + 1)).slice(-2);
  let year = Day.getFullYear();

  time.innerText = `${hour}:${minute}:${second}`;
  date.innerText = `${day}/${month}/${year}`;
  if ((hour >= 0) & (hour < 5)) {
    greeting.innerText = "Good Night " + user;
    body.classList.add("night");
    title.innerText = "Good Night";
  } else if ((hour >= 5) & (hour < 12)) {
    greeting.innerText = "Good Morning " + user;
    body.classList.add("morning");
    title.innerText = "Good Morning";
  } else if ((hour >= 12) & (hour < 18)) {
    greeting.innerText = "Good Afternoon " + user;
    body.classList.add("afternoon");
    title.innerText = "Good Afternoon";
  } else if (hour >= 18) {
    greeting.innerText = "Good Evening " + user;
    body.classList.add("evening");
    title.innerText = "Good Everning";
  }
};
