import { createStore } from "redux";

function reducer(store, action) {
  if (!store) {
    return {
      posts: []
    };
  }

  if (action.type === "getAllPosts") {
    return {
      posts: action.value
    };
  }
}
const reduxStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default reduxStore;
