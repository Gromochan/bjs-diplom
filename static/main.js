class Profile {
    constructor(user, password) {
        this.username = user,
            this.password = password
        this.wallet = {}
    }
    authorization(username, password) {
        console.log(`Hello, ${username}. You are ${username}, right?`)
        if (this.username === username && this.password === password) {
            console.log(`Yes, you are ${username}`)
            return true
        }
        return false
    }
    addCurrency(amount, currency) {
        this.wallet[currency] = (this.wallet[currency] || 0) + amount
        return console.log(this.wallet)
    }
    convert(amount, currency, coin) {
        if (this.wallet[currency] > amount) {

        }
    }
}
let user = new Profile("Vasya", "1234")
user.authorization("Vasya", "1234")
user.addCurrency(1000, "Euro");
user.addCurrency(1000, "Euro");
user.addCurrency(10000, "Dollar");
user.addCurrency(5000, "Dollar")
