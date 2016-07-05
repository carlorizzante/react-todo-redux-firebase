var expect = require("expect");
var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

// var TodoSearch = require("TodoSearch");
import {TodoSearch} from "TodoSearch";

describe("TodoSearch", () => {
  it("should exist", () => {
    expect(TodoSearch).toExist();
  });

  // it("should call onSearch with entered input text", () => {
  //   var spy = expect.createSpy();
  //   var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
  //   var _text = "abc";
  //   todoSearch.refs.searchText.value = _text;
  //   TestUtils.Simulate.change(todoSearch.refs.searchText);
  //   expect(spy).toHaveBeenCalledWith(false, _text);
  // });
  it("should dispatch setSearchText on input change", () => {
    var _text = "abc";
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: _text
    }
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    todoSearch.refs.searchText.value = _text;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(action);
  });

  // it("should call onSearch with proper checked value", () => {
  //   var spy = expect.createSpy();
  //   var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
  //   var _text = "";
  //   todoSearch.refs.searchText.value = _text;
  //   todoSearch.refs.showCompleted.checked = true;
  //   TestUtils.Simulate.change(todoSearch.refs.showCompleted);
  //   expect(spy).toHaveBeenCalledWith(true, _text);
  // });
  it("should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked", () => {
    var _text = "";
    var action = {
      type: "TOGGLE_SHOW_COMPLETED"
    }
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    todoSearch.refs.searchText.value = _text;
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
