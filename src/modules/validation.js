export function stringInputValidation(stringToValidate) {
	return (
		typeof stringToValidate === "string" && stringInputValidation.length > 0
	);
}

export function numberInputValidation(numToValidate) {
	return typeof numToValidate === "number";
}

function isValidDay(dayToValidate) {
	const dayInt = parseInt(dayToValidate, 10);
	return 1 < dayInt < 31;
}

function isValidMonth(monthToValidate) {
	const monthInt = parseInt(monthToValidate, 10);
	return 1 < monthInt < 12;
}

function isValidYear(yearToValidate) {
	const yearInt = parseInt(yearToValidate, 10);
	return 1000 < yearInt < 3000;
}

export function dateValidation(dateToValidate) {
	const dateObj = new Date(dateToValidate);
	if (
		isValidDay(dateObj.getDay()) &&
		isValidMonth(dateObj.getMonth() + 1) &&
		isValidYear(dateObj.getFullYear())
	) {
		return true;
	} else {
		console.error("Day, month, and year only accept valid value");
		return false;
	}
}
