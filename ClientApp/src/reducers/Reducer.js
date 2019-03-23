import { createStore } from "redux";

function reducer(store, action) {
  if (!store) {
    return {
      posts: [],
      viewedPost: {
        id: 0,
        title: "",
        body: "",
        createdBy: "",
        dateCreated: "",
        url: "",
        score: 0
      },
      insertForm: {
        title: "",
        url: "",
        body: "",
        createdBy: ""
      }
    };
  }

  if (action.type === "getAllPosts") {
    return {
      ...store,
      posts: action.value
    };
  }

  if (action.type === "getViewedPost") {
    return {
      ...store,
      viewedPost: action.value
    };
  }
}
const reduxStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default reduxStore;
