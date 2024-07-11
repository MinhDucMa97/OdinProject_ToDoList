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
}
