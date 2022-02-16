const addTo = document.querySelector(".addto");


const newItem = document.createElement("div")
newItem.setAttribute("class", "newItem");

const secDiv = document.createElement("div");

secDiv.setAttribute("class", "secDiv")

newItem.appendChild(secDiv);

addTo.appendChild(newItem);



const addBtn = document.querySelector(".to-btn");

const input = document.querySelector(".input")

addBtn.addEventListener("click", ()=> {
  
  if(input.value==="") {
    return alert("Please enter a item")
  }
  const para = document.createElement("p");

  const inlineBlock = document.createElement("span");

  para.setAttribute("class", "red");
  
  para.textContent = input.value;
  
  secDiv.appendChild(para);

  inlineBlock.setAttribute("class", "blue")

  secDiv.appendChild(inlineBlock);
  
  
  input.value = "";

  const testButton = document.createElement("button");

  testButton.setAttribute("class", "testingBtn");
  

  para.appendChild(testButton)

  testButton.addEventListener("click", ()=> {
    para.parentNode.removeChild(para);
  })


});

