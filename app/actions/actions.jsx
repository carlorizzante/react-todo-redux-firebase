import moment from "moment";

import firebase, {firebaseRef} from "firebaseAPI";

export var setSearchText = (searchText) => {
  return {
    type: "SET_SEARCH_TEXT",
    searchText: searchText
  }
}

export var toggleShowCompleted = () => {
  return {
    type: "TOGGLE_SHOW_COMPLETED"
  }
}

// export var addTodo = (text) => {
//   return {
//     type: "ADD_TODO",
//     text: text
//   }
// }
export var addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    todo: todo
  }
}

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    }
    var todoRef = firebaseRef.child("todos").push(todo);
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  }
}

export var addTodos = (todos) => {
  return {
    type: "ADD_TODOS",
    todos: todos
  }
}

export var updateTodo = (id, updates) => {
  return {
    type: "UPDATE_TODO",
    id: id,
    updates: updates
  }
}

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child("todos/" + id);
    var updates = {
      completed: completed,
      completedAt: completed ? moment().unix() : null
    }
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  }
}
