class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string) {}

  toggleDone() {
    this.done = !this.done;
  }
}

class ToDo {
  toDoList: Task[] = [];
  constructor() {}

  addNewItem(description: string, priority: string) {
    this.toDoList.push(new Task(description, priority));
  }
}
