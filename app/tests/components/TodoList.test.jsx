var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var TodoList = require("TodoList");
var TodoItem = require("TodoItem");

describe("TodoList", () => {
  it("should exist", () => {
    expect(TodoList).toExist();
  });

  it("should render no TodoItem component for empty list", () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);
    expect(todosComponents.length).toBe(todos.length);
  });

  it("should render one TodoItem component for each todo item", () => {
    var todos = [
      {
        id: 1,
        text: "some"
      },
      {
        id: 2,
        text: "text"
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);
    expect(todosComponents.length).toBe(todos.length);
  });
});
