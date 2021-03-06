export class TimeStamp {
	constructor() {
		this.time = "";
	}
	setTimeStamp = (min, hour, day, month, year) => {
		let time = this;

		let currentMin = new Date().getMinutes();
		let currentHour = new Date().getHours();
		let currentDay = new Date().getDate();
		let currentMonth = new Date().getMonth() + 1;
		let currentYear = new Date().getFullYear();

		let elapsedMinute = currentMin - min;
		let elapsedHour = currentHour - hour;
		let elapsedDay = currentDay - day;
		let elapsedMonth = currentMonth - month;
		let elapsedYear = currentYear - year;

		if (
			currentMin === min &&
			currentHour === hour &&
			currentDay === day &&
			currentMonth === month &&
			currentYear === year
		) {
			return (time = "Just now");
		}

		// min and hour
		if (currentMin < min) {
			elapsedMinute += 60;
			elapsedHour -= 1;
		}

		if (currentHour < hour) {
			elapsedHour += 24;
			elapsedDay -= 1;
		}

		if (currentDay < day) {
			elapsedDay += 30;
			elapsedMonth -= 1;
		}

		if (currentMonth < month) {
			elapsedMonth += 12;
			elapsedYear -= 1;
		}

		if (elapsedYear !== 0) {
			if (elapsedYear === 1) {
				return (time = elapsedYear + " yr ago");
			}
			return (time = elapsedYear + " yrs ago");
		} else if (elapsedMonth !== 0) {
			if (elapsedMonth === 1) {
				return (time = elapsedMonth + " month ago");
			}
			return (time = elapsedMonth + " months ago");
		} else if (elapsedDay !== 0) {
			if (elapsedDay === 1) {
				return (time = elapsedDay + " day ago");
			}
			return (time = elapsedDay + " days ago");
		} else if (elapsedHour !== 0) {
			if (elapsedHour === 1) {
				return (time = elapsedHour + " hr ago");
			}
			return (time = elapsedHour + " hrs ago");
		} else if (elapsedMinute !== 0) {
			if (elapsedMinute === 1) {
				return (time = elapsedMinute + " min ago");
			}
			return (time = elapsedMinute + " mins ago");
		}

		return time;
	};
}

export default new TimeStamp();
