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
