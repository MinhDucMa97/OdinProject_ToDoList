import { dateValidation } from "./validation";

export default class Task {
	constructor(
		title,
		description,
		dueDate,
		priority,
		notes,
		checkList,
		taskIndex
	) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.notes = notes;
		this.checkList = checkList;
		this.taskIndex = taskIndex;
		this.completed = false;
	}

	set title(newTitle) {
		if (typeof newTitle === "string" && newTitle.length > 0) {
			this._title = newTitle;
		} else {
			console.error("Title must be filled");
		}
	}

	set description(newDescription) {
		if (typeof newDescription === "string") {
			this._description = newDescription;
		}
	}

	set dueDate(newDate) {
		if (typeof newDate === "string") {
			if (dateValidation(newDate)) {
				//This will use date-fn to formatt the input date and then perform setting for the date property of the object.
			}
		}
	}
}
