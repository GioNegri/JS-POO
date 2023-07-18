const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Titulo do post", "Lorem ipsum dolor sis...")

post.addComment("Giovanne","Muito bom!")
post.addComment("Rafaela","Incrível!")

console.log(john)
console.log(post)
