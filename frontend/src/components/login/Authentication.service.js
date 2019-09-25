
export default class AuthenticationService {
    constructor() {
        this.url = "http://localhost:3001/api";
    }

    login(email, password) {
        return fetch(`${this.url}/login`, {
            headers: {
                "Content-Type": "application/json",
                "email": email,
                "password": password
            }
        })
        .then(res => {
            return res.json();
        });
    }

    signup(userBody) {
        console.log("SENDING!", userBody);
        return fetch(`${this.url}/login`, {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userBody),
            method: "POST"
        }).then(res => {
           return res.json();
        });
    }
}