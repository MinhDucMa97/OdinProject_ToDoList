import _ from "lodash";
import "./style.css";
import Task from "./modules/todo";

const task = new Task(
	"My Task",
	"This is a description",
	"2024-07-10",
	"High",
	"Some notes",
	"checkList",
	1
);

task.dueDate = "2024-07-15";
