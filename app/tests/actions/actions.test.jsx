var expect = require("expect");

var actions = require("actions");

describe("Actions", () => {
  it("should generate search text action", () => {
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: "abc"
    }
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it("should generate toggle completed action", () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED"
    }
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it("should generate add todo action", () => {
    var action = {
      type: "ADD_TODO",
      text: "abc"
    }
    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it("should generate add todos action", () => {
    var todos = [{
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
    var action = {
      type: "ADD_TODOS",
      todos: todos
    }
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it("should generate toggle todo action", () => {
    var action = {
      type: "TOGGLE_TODO",
      id: 11
    }
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
