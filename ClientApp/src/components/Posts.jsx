import React from "react";
import * as services from "../AxiosServices";
import PostsMap from "./PostsMap";

class Posts extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    services
      .getAllPosts()
      .then(this.getAllPostsSuccess)
      .catch(this.getAllPostsError);
  }

  getAllPostsSuccess = results => {
    console.log(results);
    this.setState({
      posts: results
    });
  };

  getAllPostsError = error => {
    console.log(error);
  };

  render() {
    return (
      <React.Fragment>
        <PostsMap posts={this.state.posts} />
      </React.Fragment>
    );
  }
}

export default Posts;
