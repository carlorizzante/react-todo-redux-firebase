var expect = require("expect");
var df = require("deep-freeze-strict");

var reducers = require("reducers");

describe("Reducers", () => {
  describe("searchTextReducer", () => {
    it("should set searchText", () => {
      var action = {
        type: "SET_SEARCH_TEXT",
        searchText: "abc"
      }
      var res = reducers.searchTextReducer(df(""), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe("showCompletedReducer", () => {
    it("should toggle showCompleted", () => {
      var action = {
        type: "TOGGLE_SHOW_COMPLETED"
      }
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe("todosReducer", () => {
    it("should add new todo", () => {
      var action = {
        type: "ADD_TODO",
        text: "Something new to do"
      }
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toBe(1);
      expect(res[0].text).toBe(action.text);
    });

    it("should add new todos to existing todos", () => {
      var initial_todos = [{
        id: 1,
        text: "Hello",
        compleated: false,
        createdAt: 100,
        completedAt: undefined
      }, {
        id: 2,
        text: "World",
        compleated: true,
        createdAt: 200,
        completedAt: 300
      }];
      var new_todos = [{
        id: 3,
        text: "Hello",
        compleated: false,
        createdAt: 100,
        completedAt: undefined
      }, {
        id: 4,
        text: "World",
        compleated: true,
        createdAt: 200,
        completedAt: 300
      }];
      var action = {
        type: "ADD_TODOS",
        todos: new_todos
      }
      // console.log(initial_todos);
      var res = reducers.todosReducer(df(initial_todos), df(action));
      // console.log(res);
      expect(res.length).toBe(4);
      expect(res[2].id).toBe(3);
    });

    // define todo array with realistic todo item
    // generate action
    // call reducer and assert completed flipped
    it("should toggle todo, flip completed and update completedAt", () => {
      var action = {
        type: "TOGGLE_TODO",
        id: 1
      }
      var todos = [{
        id: 1,
        text: "Hello",
        completed: false,
        createdAt: 12345,
        completedAt: undefined
      }, {
        id: 2,
        text: "World",
        completed: false,
        createdAt: 67890,
        completedAt: undefined
      }];

      var res = reducers.todosReducer(todos, df(action));
      expect(res.length).toBe(2);
      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toNotBe(undefined);
      expect(res[1].completed).toBe(false);
      expect(res[1].completedAt).toBe(undefined);

      var res = reducers.todosReducer(todos, df(action));
      expect(res[0].completed).toBe(false);
      expect(res[0].completedAt).toBe(undefined);
    });
  });
});
