var $ = require("jquery");
var uuid = require("node-uuid"); // TEMP

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    } else {
      // throw new Error("TodoAPI.setTodos method requires an array.");
      return;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem("todos");
    var todos = [];

    if (JSON.parse(stringTodos) === null) {
      console.log("Hello there, no todos saved, let's make some new ones.");
      return [
        {
          id: uuid(),
          text: "This is your first todo. Let's make some more!",
          completed: false
        }
      ]
    }

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      // throw new Error("Failed to parse json data from localStorage into an array.")
    }

    return $.isArray(todos) ? todos : [];

    // if ($.isArray(todos)) {
    //   return todos;
    // } else {
    //   throw new Error("TodoAPI.getTodos failed to receive an array.");
    // }

    return;
  }
}
