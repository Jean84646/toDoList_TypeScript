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
