var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var configureStore = require("configureStore");
var TodoApp = require("TodoApp");
// var TodoList = require("TodoList");
import TodoList from "TodoList";

describe("TodoApp", () => {
  it("should exist", () => {
    expect(TodoApp).toExist();
  });

  it("should render TodoList", () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
    expect(todoList.length).toBe(1);
  });

  // it("should add todo to the todos state on handleAddTodo", () => {
  //   var _text = "Run thousands miles";
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
  //   todoApp.setState({todos: []});
  //   todoApp.handleAddTodo(_text);
  //   // console.log(todoApp.state.todos[0].id);
  //   expect(todoApp.state.todos[0].text).toBe(_text);
  //   // expect createdAt prop to be a number
  //   expect(todoApp.state.todos[0].createdAt).toBeA("number");
  // });

  // it("should toggle completed value when handleToggle called", () => {
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
  //   var todoData = {
  //     id: 11,
  //     text: "Some task",
  //     completed: false,
  //     createdAt: 0,
  //     completedAt: undefined
  //   };
  //
  //   todoApp.setState({
  //     todos: [todoData]
  //   });

  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //
  //   todoApp.handleToggle(todoData.id);
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   // expect completedAt prop to be a number
  //   expect(todoApp.state.todos[0].completedAt).toBeA("number");
  // });

  // it("test that completedAt gets removed when uncheck completed prop", () => {
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
  //   var todoData = {
  //     id: 11,
  //     text: "Some task",
  //     completed: true,
  //     createdAt: 0,
  //     completedAt: 1000
  //   };
  //
  //   todoApp.setState({
  //     todos: [todoData]
  //   });
  //
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //
  //   todoApp.handleToggle(todoData.id);
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   // expect completedAt prop to be a number
  //   expect(todoApp.state.todos[0].completedAt).toNotExist();
  // });
});
