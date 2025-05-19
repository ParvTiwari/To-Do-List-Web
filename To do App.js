let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let task = inp.value.trim(); // trim to remove extra whitespace
    if (task !== "") {
        if(btn.innerText === "Add Task"){
            let li = document.createElement("li");
            li.innerText = inp.value;
    
            let delBtn = document.createElement("button");
            delBtn.innerText = "Delete";
            delBtn.classList.add("delete");
    
            li.appendChild(delBtn);
            ul.appendChild(li);
            console.log("Task added successfully");
            inp.value = "";
        }
        else{
            currentTask.childNodes[0].textContent = task + " "; // update text before delete button
            btn.innerText = "Add Task";
            currentTask = null;
            console.log("Task updated successfully");
        }
    }
    else{
        console.log("Not a valid task");
    }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//         console.log("Task Deleted successfully");
//     });
// }

ul.addEventListener("click", function(event){
    console.dir(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        // console.log(listItem);
        listItem.remove();
        console.log("Task Deleted successfully");
    }
});
ul.addEventListener("dblclick", function(event){
    if(event.target.nodeName == "LI"){
        inp.value = event.target.firstChild.textContent.trim();
        currentTask = event.target;
        btn.innerText = "Update Task";
        console.dir(event.target)
        console.log("Task Updated Successfully");
    }
});