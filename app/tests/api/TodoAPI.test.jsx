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

});
