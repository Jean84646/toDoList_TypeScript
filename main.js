var Task = /** @class */ (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.toggleDone = function () {
        this.done = !this.done;
    };
    return Task;
}());
var ToDo = /** @class */ (function () {
    function ToDo() {
        this.toDoList = [];
    }
    ToDo.prototype.addNewItem = function (description, priority) {
        this.toDoList.push(new Task(description, priority));
    };
    return ToDo;
}());

function showList() {
  $("#result-output").text("");
  myList.toDoList.forEach(function(item){
    $("#result-output").append(`<li class="clickable">${item.description}, ${item.priority}, Done = ${item.done}</li>`);
    $(".clickable").last().click(function(){
      item.toggleDone();
      showList(myList);
    })
  })
}

let myList = new ToDo();

$(document).ready(function(){
  $("#toDo-form").submit(function(event){
    event.preventDefault();
    let description = $("#description").val();
    let priority = $("#priority").val();

    myList.addNewItem(description, priority);

    showList(myList);
  })
})
