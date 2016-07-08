var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var {AddTodo} = require("AddTodo");
import * as actions from "actions";

describe("AddTodo", () => {
  it("should exist", () => {
    expect(AddTodo).toExist();
  });

  // it("should call onAddTodo if valid text entered", () => {
  //   var spy = expect.createSpy();
  //   var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
  //   var $el = $(ReactDOM.findDOMNode(addTodo));
  //   var _text = "Some generic todo text";
  //   addTodo.refs.todoText.value = _text;
  //   TestUtils.Simulate.submit($el.find("form")[0]);
  //   expect(spy).toHaveBeenCalledWith(_text);
  // });
  it("should dispact ADD_TODO when valid todo text entered", () => {
    var _text = "Some generic todo text";
    var action = actions.startAddTodo(_text);
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = _text;
    TestUtils.Simulate.submit($el.find("form")[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });

  // it("should not call onAddTodo if invalid text entered", () => {
  //   var spy = expect.createSpy();
  //   var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
  //   var $el = $(ReactDOM.findDOMNode(addTodo));
  //   addTodo.refs.todoText.value = "";
  //   TestUtils.Simulate.submit($el.find("form")[0]);
  //   expect(spy).toNotHaveBeenCalled();
  // });
  it("should not dispatch ADD_TODO  when invalid todo text entered", () => {
    var _text = "";
    // var action = {
    //   type: "ADD_TODO",
    //   text: _text
    // }
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = _text;
    TestUtils.Simulate.submit($el.find("form")[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
