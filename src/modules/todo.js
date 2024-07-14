import { dateValidation } from "./validation";
import { format } from "date-fns";

export default class Task {
  constructor({ title, description, dueDate, priority, notes }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.taskCompleted = false;
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
        //This will use date-fn to format the input date and then perform setting for the date property of the object.
        const dateObj = new Date(newDate);
        const dateFormatted = format(dateObj, "MM/dd/yyyy");
        this._dueDate = dateFormatted;
      } else {
        console.error("Invalid date format");
      }
    } else {
      console.error("Due date must be a type string value");
    }
  }

  set priority(newPriority) {
    this._priority = newPriority;
  }

  set notes(newNotes) {
    if (typeof newNotes === "string") {
      this._notes = newNotes;
    }
  }

  set taskCompleted(isCompleted) {
    if (typeof isCompleted === "boolean") {
      this._taskCompleted = isCompleted;
    } else {
      console.error("Completed field must be a boolean value");
    }
  }

  //Getters
  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get dueDate() {
    return this._dueDate;
  }

  get priority() {
    return this._priority;
  }

  get notes() {
    return this._notes;
  }

  get taskIndex() {
    return this._taskIndex;
  }

  get taskCompleted() {
    return this._taskCompleted;
  }
}
