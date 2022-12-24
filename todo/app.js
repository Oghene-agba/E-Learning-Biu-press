//form
let form = document.querySelector("#form");  
let msg = document.querySelector("#msg"); 
let textInput = document.querySelector("#textInput"); 
let dateInput = document.querySelector("#dateInput"); 
let tasks = document.querySelector("#tasks");
let textarea = document.querySelector("#textarea");
let add = document.querySelector("#add"); 


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    formValidation();
})

let formValidation = () => {
    if (textInput.value === "") {
        console.log("failure")
        msg.innerHTML = "Task cannot be blank";
    }else{
        console.log("success")
        msg.innerHTML = "";

        acceptData();

        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        (()=>{
            add.setAttribute("data-bs-dismiss", "");
        })();
    }
}

//localstorage
let data = [];

let acceptData = () => {

    data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value
    })

    
    localStorage.setItem("data", JSON.stringify(data));

    console.log(data);
    createTasks();
}

let createTasks = () => {
    tasks.innerHTML = "";

    data.map((x,y) => {
        return ( tasks.innerHTML += `
        <div id=${y}>
        <span class="title">${x.text}</span>
        <span class="date">${x.date}</span>
        <p class="">${x.description}</p>
        <span class="options">
            <img data-bs-toggle="modal" data-bs-target="#form" onclick="editTask(this)" src="pen-to-square-solid.svg" alt="edit" id="">
            <img onclick="deleteTask(this);createTasks()"  src="trash-solid.svg" alt="trash" id="">
        </span>
        </div>
            `);
    })
   
    
    reserForm();
}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
}
let editTask = (e) => {
   let selectedTask = e.parentElement.parentElement;

   textInput.value = selectedTask.children[0].innerHTML;
   dateInput.value = selectedTask.children[1].innerHTML;
   textarea.value = selectedTask.children[2].innerHTML;

   deleteTask(e)
}

let reserForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}

(()=>{
    data = JSON.parse(localStorage.getItem("data")) || [];
    createTasks();
    console.log(data)
})();