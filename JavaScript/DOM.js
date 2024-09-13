/*const container = document.querySelector("#container");
console.dir(container.firstElementChild);

const control = document.querySelector(".control");
console.dir(control.previousElementSibling);

const div = document.createElement("div");
div.style.cssText = "color: red; background : green;";
div.setAttribute("id", "theDiv");
div.getAttribute("id");
div.classList.add("div-1");
div.textContent = "This is Thapelo";*/

const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Greetings! This is Thapelo's page.";
container.appendChild(content);
const para1 =  document.createElement("p");
para1.classList.add("para1");
para1.textContent = "Creating paragraph via JavaScript code.";
para1.style.cssText = "color: red";
container.appendChild(para1);
const header3 = document.createElement("h3");
header3.classList.add("header3");
header3.textContent = "HEY, I'm Header 3 in blue clothes.";
header3.style.cssText = "color: blue";
container.appendChild(header3);

const secDiv = document.createElement("div");
secDiv.classList.add("secDiv");
secDiv.style.cssText = "border: 2px solid black; background: pink";
const header1 = document.createElement("h1");
header1.classList.add("header1");
header1.textContent = "Another div here";
const para2 = document.createElement("p");
para2.classList.add("para2");
para2.textContent = "ME TOO!";
secDiv.appendChild(header1);
secDiv.appendChild(para2);
container.appendChild(secDiv);

// Button features
const btn = document.querySelector("#btn");
btn.addEventListener("click",function (e){e.target.style.background = "blue"});

function message(){
    alert("Fede just did it...");
}

let btn1 = document.createElement("button");
btn1.classList.add("btn1");
btn1.textContent = "Press Me";
container.appendChild(btn1);

btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => message());

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "Hope You Enjoy Your Ride.";
sect.appendChild(para);

const text = document.createTextNode("- get ready to explore the world of devs");
const linkpara = document.querySelector("p");
linkpara.appendChild(text);
sect.appendChild(linkpara);
linkpara.remove();