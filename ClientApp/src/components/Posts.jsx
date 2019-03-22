import React from "react";
import * as services from "../AxiosServices";
import PostsMap from "./PostsMap";
import { connect } from "react-redux";

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
    this.props.getAllPostsRedux(results.dataResponse);
  };

  getAllPostsError = error => {
    console.log(error);
  };

  render() {
    return (
      <React.Fragment>
        <PostsMap />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPostsRedux: value => dispatch({ type: "getAllPosts", value: value })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Posts);
