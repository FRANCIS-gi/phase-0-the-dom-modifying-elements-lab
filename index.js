// Write your code here!
const element = document.createElement("div"); 
document.body.append(element);
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);
li.textContent = "Hi there!";

console.log(li.textContent);

element = document.getElementById("main");
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;
ul = document.getElementsByTagName("ul")[0];
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);
