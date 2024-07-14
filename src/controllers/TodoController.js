import Task from "../modules/todo";

export function updateTask() {}
export function createTask(newTask, selectedProject) {
  const taskObject = new Task(newTask);
  selectedProject.addTask(taskObject);
  UpdateProjectInDOM(selectedProject);
}
