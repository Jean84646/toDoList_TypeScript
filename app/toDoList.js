var Task = /** @class */ (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
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



$(document).ready(function(){
  $("#toDo-form").submit(function(event){
    event.preventDefault();
    let description = $("#description").val();
    let priority = $("#priority").val();

    let myList = new ToDo();
    myList.addNewItem(description, priority);

    myList.toDoList.forEach(function(item){
      $("#result-output").append(`<li>${item.description}, ${item.priority}, Done = ${item.done}</li>`)
    })
  })
})
