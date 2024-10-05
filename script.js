function addTask(){
    var inputBox = document.getElementById("mj-inputBox");
    var listContainer = document.getElementById("mj-list-container");
    if(inputBox.value === ''){
        alert("Plz write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let button = document.createElement("button");
        button.innerHTML = "X";
        li.appendChild(button);
        button.addEventListener('click',function removeParent(){
            listContainer.removeChild(li);
        });
        inputBox.addEventListener("keypress",function(Event){
            if(Event.key === 'Enter'){
                listContainer.appendChild(li).click;
            }
        });
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}