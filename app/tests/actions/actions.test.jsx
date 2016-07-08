var expect = require("expect");
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

var actions = require("actions");

var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: 123,
        text: "Something to do",
        completed: false,
        createdAt: 1000
      }
    }
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it("should generate add todos object", () => {
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

  it("should create todo and dispatch ADD_TODO", (done) => {
    const _store = createMockStore({}); // Create an empty store
    const _text = "Something to do";

    _store.dispatch(actions.startAddTodo(_text)).then(() => {
      const _actions = _store.getActions();
      expect(_actions[0]).toInclude({
        type: "ADD_TODO"
      });
      expect(_actions[0].todo).toInclude({
        text: _text
      });
      done();
    }).catch(done);
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
