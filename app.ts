import TaskManager from './taskManager';

class Todo {
    taskManager: TaskManager;

    constructor() {
        this.taskManager = new TaskManager();
    }

    addTask(task: string): void {
        this.taskManager.addTask(task);
    }

    deleteTask(task: string): void {
        this.taskManager.deleteTask(task);
    }

    getTasks(): string[] {
        return this.taskManager.getTasks();
    }
}

export default Todo;
