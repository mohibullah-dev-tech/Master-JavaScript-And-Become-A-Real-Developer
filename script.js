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

let inp = document.querySelector("input")
inp.addEventListener("input",function(del){
    if (del.data !==null){
        console.log(del.data);
    };
});