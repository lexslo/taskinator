var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    //stop the browser from default refresh when form is submitted
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // create objecyt to store data
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    }
    // pass object to createTaskEl function as an argument
    createTaskEl(taskDataObj);
}

var createTaskEl = function (taskDataObj) {

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    // div to hold task info and add to task item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    // update list item with new input
    listItemEl.appendChild(taskInfoEl);
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

}  

formEl.addEventListener("submit", taskFormHandler);