var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

// var TodoList = require("TodoList");
// var Todo = require("Todo");
import {configure} from "configureStore";
import ConnectedTodoList, {TodoList} from "TodoList";
import ConnectedTodo, {Todo} from "Todo";

describe("TodoList", () => {
  it("should exist", () => {
    expect(TodoList).toExist();
  });

  it("should render no Todo component for empty list", () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todosComponents.length).toBe(todos.length);
  });

  it("should render one Todo component for each todo item", () => {
    var todos = [
      {
        id: 1,
        text: "some",
        completed: false,
        createdAt: 500,
        completedAt: undefined
      },
      {
        id: 2,
        text: "text",
        completed: false,
        createdAt: 1000,
        completedAt: undefined
      }
    ];
    var store = configure({
      todos: todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    )
    // var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
    expect(todosComponents.length).toBe(todos.length);
  });

  it("should render one empty message if no todos", () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find(".message").length).toBe(1);
  });
});
