var input = document.getElementById("input");
var button = document.getElementById("button");
var ol = document.querySelector("ol");

function dustbin(li) {
    var i = document.createElement("i");
    i.classList.add("btn");
    i.classList.add("fa");
    i.classList.add("fa-trash-o");
    li.appendChild(i);
    i.addEventListener("click", deleteli)
}


function addTask() {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        li.classList.add("list-group-item")
        ol.appendChild(li);
        input.value = "";
        dustbin(li);
    }
}


function keypress(parameter) {
    if (parameter.which == 13) {
        addTask();
    }
}


function deleteli(event) {

    event.target.parentElement.remove();
}

function search() {
   var li =document.getElementsByTagName("li");
   var searchbar=document.getElementById("searchbar");
   for (i=0;i<li.length;i++){
    if (li[i].textContent === searchbar.value){
        console.log(i);
    }
   }

}

function searchenter(parameter) {
    if (parameter.which == 13) {
        search();
    }
}

searchbar.addEventListener("keypress", searchenter)
input.addEventListener("keypress", keypress)
button.addEventListener("click", addTask)



