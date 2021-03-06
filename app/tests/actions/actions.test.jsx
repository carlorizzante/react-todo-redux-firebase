var expect = require("expect");
var moment = require("moment");
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import firebase, {firebaseRef} from "firebaseAPI";
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
    const store = createMockStore({}); // Create an empty store
    const text = "Something to do";

    store.dispatch(actions.startAddTodo(text)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: "ADD_TODO"
      });
      expect(actions[0].todo).toInclude({
        text: text
      });
      done();
    }).catch(done);
  });

  it("should generate update todo action", () => {
    var action = {
      type: "UPDATE_TODO",
      id: 11,
      updates: {
        completed: true,
        compleatedAt: moment().unix()
      }
    }
    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);

    var action = {
      type: "UPDATE_TODO",
      id: 11,
      updates: {
        completed: false
      }
    }
    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });

  describe("Tests with Firebase todos", () => {
    // All tests here expect Firebase to have some todo data to work with
    var testTodoRef;

    beforeEach((done) => {
      testTodoRef = firebaseRef.child("test").push();

      testTodoRef.set({
        text: "Testing",
        completed: false,
        createdAt: 1000
      }).then(() => done());
    });

    afterEach((done) => {
      firebaseRef.child("test").remove().then(() => done());
    });

    it("should toggle todo and dispatch UPDATE_TODO action", (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, !testTodoRef.completed);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: "UPDATE_TODO",
          id: testTodoRef.key,
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });
  });
});
