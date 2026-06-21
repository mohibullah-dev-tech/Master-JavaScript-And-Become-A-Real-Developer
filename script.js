//DOM manipulation 
// let abcd=document.getElementById("abcd");
// console.log(abcd);
// let h1= document.querySelector("h1");
// h1.innerText = "mohibullah";

// attribute manipulation:
// let img= document.querySelector("img")

// img.setAttribute("src","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAABAgUGB//EADsQAAICAQIEAwQHBgYDAAAAAAECAAMRBCEFEjF");

// let a = document.querySelector("a");
// a.getAttribute("href");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   alert("Button Clicked!");
// });

// let p = document.querySelector("p");
// p.addEventListener("click",function (){
//     p.style.color="green";
// });

// let inp = document.querySelector("input")
// inp.addEventListener("input",function(del){
//     if (del.data !==null){
//         console.log(del.data);
//     };
// });

let sel= document.querySelector("select");
let device=document.querySelector("#device");

// sel.addEventListener("change",function(dets){
//     // console.log(dets.target.value);
//     // device.textContent="Device selected"
//     device.textContent =`${dets.target.value} Device selected `;


// });

// let inp= document.querySelector("input");
// let span= document.querySelector("span");

// inp.addEventListener("input",function (){
//     // span.textContent=inp.value.length;
//     let left = 20 - inp.value.length;
//     span.textContent  = left;

//     if (left< 0){
//         span.style.color ="red";
//     }
//     else{
//         span.style.color ="black";
//     }
// });

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const message = document.getElementById("message");

let time = 25 * 60; // 25 minutes
let intervalId = null;

// display update function
function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  timerDisplay.textContent =
    `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}

// start timer
startBtn.addEventListener("click", () => {

  if(intervalId) return;

  intervalId = setInterval(() => {

    time--;

    updateTimer();

    if(time <= 0){

      clearInterval(intervalId);

      intervalId = null;

      message.textContent = "Study Session Completed!";

      // clear message after 5 sec
      setTimeout(() => {
        message.textContent = "";
      },5000);

    }

  },1000);

});

// pause timer
pauseBtn.addEventListener("click", () => {

  clearInterval(intervalId);

  intervalId = null;

});

// reset timer
resetBtn.addEventListener("click", () => {

  clearInterval(intervalId);

  intervalId = null;

  time = 25 * 60;

  updateTimer();

  message.textContent = "";

});

updateTimer();
