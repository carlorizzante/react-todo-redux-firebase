var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var TodoItem = require("TodoItem");

describe("TodoItem", () => {
  it("should exist", () => {
    expect(TodoItem).toExist();
  });

  it("should call onToggle prop with id on click", () => {
    var spy = expect.createSpy();
    var _id = 11;
    var todoData = {
      id: _id,
      text: "Some text",
      completed: true
    };
    var todoItem = TestUtils.renderIntoDocument(<TodoItem {...todoData} onToggle={spy} />);
    var $el = $(ReactDOM.findDOMNode(todoItem));
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(_id);
  });
});
