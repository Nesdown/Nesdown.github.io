/**
  *This piece of code adds delete buttons to the list of tasks
*/

function closeBtns() {
  //initialize an array of tasks
  //by class name
  let myNodeList = document.getElementsByTagName('li');

  //here we add close buttons to the tasks
  for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement('span'),
    txt = document.createTextNode('\u00D7');

    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
  }


/**
  *This code adds functionality
  *to the close buttons
*/

  let close = document.getElementsByClassName("close");
  for(let i = 0; i < close.length; i++) {
  //when the button is clicked, we add parent div
  //to the task title and make css display.style none
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//Initial launch
closeBtns();


/**
  *This code allows to mark
  *tasks as completed
*/
function checkEvent() {
  //Here we get an amount of tasks to check
  let tasks = document.querySelector('ul');

  //set event listener to find out if the element was toggled
  tasks.addEventListener('click', function(event) {
    if(event.target.tagName === 'li') {
      event.target.classList.toggle('checked');
    }
  }, false)
}


/**
  *The function is responsible for adding
  *new tasks to the list
*/

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("enterTask").value;
  let tempNode = document.createTextNode(inputValue);

  li.appendChild(tempNode);

  inputValue === "" ?
    alert("You have not entered the task!") :
    document.getElementById("newTask").appendChild(li);

  closeBtns();
}
