const addTo = document.querySelector(".addto");


const newItem = document.createElement("div")


addTo.appendChild(newItem);



const addBtn = document.querySelector(".to-btn");

const input = document.querySelector(".input")

addBtn.addEventListener("click", testing);

function testing() {


  const para = document.createElement("p");
  para.setAttribute("class", "red");
  
  para.textContent = input.value;
  
  newItem.appendChild(para);
  
  
  input.value = "";


}