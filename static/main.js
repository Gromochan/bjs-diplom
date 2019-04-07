class Profile {
    constructor(user, password) {
        this.username = user,
            this.password = password
    }
    authorization(username, password) {
        console.log(`Hello, ${username}. You are ${username}, right?`)
        if (this.username === username && this.password === password) {
            console.log(`Yes, you are ${username}`)
            return true
        }
        return false
    }
}
let user = new Profile("Vasya", "1234")
user.authorization("Vasya", "1234")
console.log(user);
