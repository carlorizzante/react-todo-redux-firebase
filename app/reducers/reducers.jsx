var uuid = require("node-uuid");
var moment = require("moment");

export var searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return action.searchText
      break;

    default:
      return state;
  }
}

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_COMPLETED":
      return !state;
      break;

    default:
      return state;
  }
}

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state, {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }];
      break;

    // add case for TOGGLE_TODO, completed equal to opposite value and update CompletedAt
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
            todo.completed = !todo.completed;
            todo.completedAt = todo.completed ? moment().unix() : undefined;
        }
        return todo;
      });
      break;

    case "ADD_TODOS":
      // return [
      //   ...state,
      //   action.todos
      // ];
      return state.concat(action.todos);
      break;

    // case "TOGGLE_TODO_ANDREW":
    //   return state.map((todo) => {
    //     if (todo.id === action.id) {
    //       var _completed = !todo.completed;
    //       return {
    //         ...todo,
    //         completed: _completed,
    //         completedAt: _completed ? moment().unix() : undefined
    //       }
    //     }
    //   });
    //   break;

    default:
      return state;
  }
}
