const App = require("./App")

App.createUser("gio@gmail.com", "Gio Negri")
App.createUser("rafaela@gmail.com", "Rafa Barbie")
App.createUser("jady@gmail.com", "Jady Negri")

App.deposit("gio@gmail.com", 100)

App.transfer ("gio@gmail.com", "rafaela@gmail.com", 20)


App.changeLoanFee(10)
App.takeLoan("jady@gmail.com", 2000, 24)

console.log(App.findUser("gio@gmail.com"))
console.log(App.findUser("gio@gmail.com").account)
console.log(App.findUser("rafaela@gmail.com"))
console.log(App.findUser("rafaela@gmail.com").account)
console.log(App.findUser("jady@gmail.com"))
console.log(App.findUser("jady@gmail.com").account)
console.log(App.findUser("jady@gmail.com").account.loans[0].installments)