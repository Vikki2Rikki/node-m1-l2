const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
    case "getById":
      const oneBook = await books.getById(id);
      return console.log(oneBook);
    case "add":
      const newBook = await books.add({ title, author });
      return console.log(newBook);
    case "updateById":
      const updateBook = await books.updateById(id, { title, author });
      return console.log(updateBook);
    case "deleteById":
      const deleteBook = await books.deleteById(id);
      return console.log(deleteBook);
  }
};

//invokeAction({ action: "read" });
//invokeAction({ action: "getById", id: "Op8ApLTY0-Vn2cR0vDIwG" });
//invokeAction({ action: "add", title: "My Fair Lady", author: "Bernard Shaw" });
// invokeAction({
//   action: "updateById",
//   id: "Q6_QB4yKlTbzAIRz1wJfM",
//   title: "Pigmileon",
//   author: "Bernard Shaw",
// });
invokeAction({
  action: "deleteById",
  id: "Q6_QB4yKlTbzAIRz1wJfM",
});
