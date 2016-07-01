var expect = require("expect");

var TodoAPI = require("TodoAPI");

describe("TodoAPI", () => {

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should exist", () => {
    expect(TodoAPI).toExist();
  });

  describe("setTodos", () => {
    it("should set valid todos array", () => {
      var todos = [
        {
          id: 11,
          text: "something",
          completed: false
        }
      ];
      TodoAPI.setTodos(todos);
      var actual = JSON.parse(localStorage.getItem("todos"));
      expect(actual).toEqual(todos);
    });

    it("should not set invalid data (todos is not an array)", () => {
      var badTodos = {string: "some string"};
      TodoAPI.setTodos(badTodos);
      var actual = JSON.parse(localStorage.getItem("todos"));
      expect(actual).toBe(null);
    });
  });

  describe("getTodos", () => {
    it("should return empty array for bad localStorage data", () => {
      localStorage.setItem("todos", JSON.stringify({nothing: null}));
      var actual = TodoAPI.getTodos("todos");
      expect(actual).toEqual([]);
    });

    it("should return valid todos for good localStorage data", () => {
      var todos = [
        {
          id: 11,
          text: "something",
          completed: false
        }
      ];
      localStorage.setItem("todos", JSON.stringify(todos));
      var actual = TodoAPI.getTodos();
      expect(actual).toEqual(todos);
    });
  });

  describe("filterTodos", () => {
    var todos = [];
    beforeEach(() => {
      todos = [
        {
          id: 1,
          text: "Some text",
          completed: true
        },
        {
          id: 2,
          text: "More text",
          completed: false
        },
        {
          id: 3,
          text: "More some",
          completed: true
        }
      ];
    });

    it("it should return all items if showCompleted is checked", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "");
      // expect(actual).toEqual(filteredTodos); // fails
      expect(filteredTodos.length).toBe(3);
    });

    it("it should return only not completed item if showCompleted is unchecked", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, "");
      // expect(actual).toEqual(filteredTodos); // fails
      expect(filteredTodos.length).toBe(1);
    });

    it("should sort not completed items first", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "");
      // expect(filteredTodos[0].id).toBe(2);
      expect(filteredTodos[0].completed).toBe(false);
    });

    it("should filter item by searchText", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "some");
      expect(filteredTodos.length).toBe(2);
    });

    it("should return all todos if searchText empty", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "");
      expect(filteredTodos.length).toBe(3);
    });
  });

});
