var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var {Todo} = require("Todo");

describe("Todo", () => {
  it("should exist", () => {
    expect(Todo).toExist();
  });

  // it("should call onToggle prop with id on click", () => {
  //   var _id = 11;
  //   var todoData = {
  //     id: _id,
  //     text: "Some text",
  //     completed: true
  //   };
  //   var spy = expect.createSpy();
  //   var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
  //   var $el = $(ReactDOM.findDOMNode(todo));
  //   TestUtils.Simulate.click($el[0]);
  //   expect(spy).toHaveBeenCalledWith(_id);
  // });
  //
  it("should dispatch TOGGLE_TODO action on click", () => {
    var _id = 11;
    var todoData = {
      id: _id,
      text: "Some text",
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith({
      type: "TOGGLE_TODO",
      id: todoData.id
    });
  });
});
