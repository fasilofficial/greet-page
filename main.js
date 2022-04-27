let user = "Fasil";  //Change the value to add your name
let time = document.getElementById("time");
let greeting = document.getElementById("greeting");
let body = document.querySelector("body");
let title = document.querySelector("title");
setInterval(() => {
    let Day = new Date();
    let hour = ("0" + Day.getHours()).slice(-2);
    let minute = ("0" + Day.getMinutes()).slice(-2);
    let second = ("0" + Day.getSeconds()).slice(-2);
    time.innerText = `${hour}:${minute}:${second}`;
    if (hour >= 0 & hour < 5) {
        greeting.innerText = "Good Night " + user;
        body.classList.add("night");
        title.innerText = "Good Night";
    } else if (hour >= 5 & hour < 12) {
        greeting.innerText = "Good Morning " + user;
        body.classList.add("morning");
        title.innerText = "Good Morning";
    } else if (hour >= 12 & hour < 6) {
        greeting.innerText = "Good Afternoon " + user;
        body.classList.add("afternoon");
        title.innerText = "Good Afternoon";
    } else if (hour >= 6) {
        greeting.innerText = "Good Evening " + user;
        body.classList.add("evening");
        title.innerText = "Good Everning";
    }
}, 1000)