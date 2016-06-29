var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

var TodoSearch = require("TodoSearch");

describe("TodoSearch", () => {
  it("should exist", () => {
    expect(TodoSearch).toExist();
  });

  it("should call onSearch with entered input text", () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    var _text = "abc";
    todoSearch.refs.searchText.value = _text;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false, _text);
  });

  it("should call onSearch with proper checked value", () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    var _text = "";
    todoSearch.refs.searchText.value = _text;
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(true, _text);
  });
});
