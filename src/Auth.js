class Auth {
	constructor() {
		this.authenticated = false;
	}

	login(callBack) {
		this.authenticated = true;
		callBack();
		console.log("Authenticated", this.authenticated);
	}

	logout(callBack) {
		this.authenticated = false;
		callBack();
	}

	setNotAuthenticated = () => {
		this.authenticated = false;
	};
	setAuthenticated = () => {
		this.authenticated = true;
	};

	isAuthenticated() {
		return this.authenticated;
	}
}

export default new Auth();
