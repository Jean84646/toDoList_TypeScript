class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string) {}

  markDone() {
    this.done = true;
  }
}

class ToDo {
  toDoList: Task[] = [];
  constructor() {}

  addNewItem(description: string, priority: string) {
    this.toDoList.push(new Task(description, priority));
  }
}
