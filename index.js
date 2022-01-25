const input = document.querySelector(".input");

const addBtn = document.querySelector(".to-btn");

const create = document.querySelector(".create");



addBtn.addEventListener("click", addToList);



function addToList() {

  
  const para = document.createElement("p");

  para.classList.add("red");

  
  para.textContent = input.value;

  document.body.appendChild(para);

  

}


