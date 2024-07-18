import { stringInputValidation, numberInputValidation } from "./validation";

export default class project {
	constructor(title, projectIndex) {
		this.title = title;
		this.projectIndex = projectIndex;
		this.taskArray = [];
	}

	set title(newTitle) {
		if (stringInputValidation(newTitle)) {
			this._title = newTitle;
		}
	}

	set projectIndex(newProjectIndex) {
		if (numberInputValidation(newProjectIndex)) {
			this._projectIndex = newProjectIndex;
		}
	}

	get title() {
		return this._title;
	}

	get projectIndex() {
		return this._projectIndex;
	}

	addTask(task) {
		this._taskArray.push(task);
	}

	removeTask(taskTitleToRemove) {
		for (let i = 0; i < this._taskArray.length; i++) {
			if (this._taskArray[i].title === taskTitleToRemove) {
				this._taskArray.splice(i, 1);
				return;
			}
		}
		console.error("Unable to find matching task to remove");
	}

	getTask() {
		return this._taskArray;
	}
}
