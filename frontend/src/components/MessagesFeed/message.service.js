
export default class MessageService {
    constructor() {
        this.url = "http://localhost:3001/api";
    }

    getMessages() {
        return fetch(`${this.url}/messages`, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": sessionStorage.getItem("token")
            },
            method: "GET"
        }).then(res => {
            return res.json();
        });
    }

    addMessage(text) {
        return fetch(`${this.url}/messages`, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": sessionStorage.getItem("token")
            },
            body: JSON.stringify({ text: text }),
            method: "POST"
        }).then(res => {
            return res.json();
        });
    }

    deleteMessage(id) {
        return fetch(`${this.url}/messages/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": sessionStorage.getItem("token")
            },
            method: "DELETE"
        }).then(res => {
            return res.json();
        });
    }

    addReply(text, mid) {
        return fetch(`${this.url}/reply/add`, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": sessionStorage.getItem("token")
            },
            body: JSON.stringify({ text: text, mID: mid }),
            method: "POST"
        }).then(res => {
            return res.json();
        });
    }

    getReplies(id) {
        return fetch(`${this.url}/reply/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": sessionStorage.getItem("token")
            },
            method: "GET"
        }).then(res => {
            return res.json();
        });
    }

    editMessage(text, id) {
        return fetch(`${this.url}/messages`, {
            headers: {
                "Content-Type": "application/json",
                "x-access-token": sessionStorage.getItem("token")
            },
            body: JSON.stringify({
                id: id,
                updates: {
                    text: text
                }
            }),
            method: "PUT"
        }).then(res => {
            return res.json();
        });
    }
}