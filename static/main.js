class Profile {
    constructor(user, password) {
        this.username = user,
            this.password = password
        this.authorization
    }
    authorization(username, password) {
        if (this.username === username && this.password === password) {
            return true
        }
        return false
    }
}
let user = new Profile("Vasya", "1234")
console.log(user);
