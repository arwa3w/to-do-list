let inputTask = document.getElementById("inputTask");
let btnCreate = document.getElementById("btnCreate");
let allTasks = document.getElementById("allTasks");
let noTasks = document.getElementById("noTasks");
let numOfTasks = document.getElementById("numOfTasks");
let deleteAllTasks = document.getElementById("deleteAllTasks");
let hNoTasks = document.getElementById("hNoTasks");


let checkMessage = () =>
{
    if(allTasks.childElementCount == 0)
    {
        noTasks.classList.remove("none");
    }
    else
    {
        noTasks.classList.add("none");
    }
}

let getNumOfTask = () =>
{
    numOfTasks.innerText = allTasks.childElementCount;
}


let addTask = () =>
{
    let taskValue = inputTask.value;
    noTasks.classList.add("none");
    if(taskValue == "")
    {
        hNoTasks.classList.remove("none")
    }
    else
    {
        allTasks.innerHTML += 
        `<div class="alert alert-primary fs-2 bg-info task">
            ${taskValue}
            <i class="fa-solid fa-trash trash"></i>
        </div>`
        
        inputTask.value = "";
        getNumOfTask();
        checkMessage();
    }
}
btnCreate.addEventListener("click" , addTask);

document.addEventListener("click" , function(event)
{
    if(event.target.classList.contains("trash"))
    {
        event.target.parentElement.remove();
    }
    checkMessage();
    getNumOfTask();
})

document.addEventListener("click" , function(event)
{
    if(event.target.classList.contains("task"))
    {
        event.target.classList.add("checked");
    }
})

let deleteAll = () =>
{
    if(confirm("Are You Sure, You Delete All"))
    {
        allTasks.innerHTML = "";
    }
}
deleteAllTasks.addEventListener("click" , deleteAll);