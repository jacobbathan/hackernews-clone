import React from "react";
import * as services from "../AxiosServices";
import { connect } from "react-redux";

class PostForm extends React.Component {
  state = {
    title: "",
    url: "",
    body: "",
    createdBy: ""
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  submitPost = async () => {
    const payload = {
      ...this.state
    };

    await this.props.formPostPayload(payload);
    this.insertPost();
  };

  insertPost = () => {
    services
      .insertPost(this.props.formData)
      .then(this.submitPostSuccess)
      .catch(this.submitPostError);
  };

  submitPostSuccess = result => {
    console.log(result);
    this.props.history.push("/item/" + result.item);
  };

  submitPostError = error => {
    console.log(error);
  };

  goBack = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <td>
        <tr style={{ height: "5px" }} />
        <form method="post" action="/r">
          <table border="0">
            <tbody>
              <tr>
                <td>title</td>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    size="50"
                    onChange={this.handleChange}
                  />
                  <span style={{ marginLeft: "10px" }} />
                </td>
              </tr>
              <tr>
                <td>url</td>
                <td>
                  <input
                    type="text"
                    name="url"
                    value={this.state.url}
                    size="50"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td />
              </tr>
              <tr>
                <td>text</td>
                <td>
                  <textarea
                    name="body"
                    rows="4"
                    cols="50"
                    value={this.state.body}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>author</td>
                <td>
                  <input
                    type="text"
                    name="createdBy"
                    value={this.state.createdBy}
                    size="50"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <button type="button" onClick={this.submitPost}>
                    submit
                  </button>
                  <button type="button" onClick={this.goBack}>
                    go back
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </td>
    );
  }
}

const mapStateToProps = state => {
  return {
    formData: state.postFormData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formPostPayload: value =>
      dispatch({ type: "setInsertPayload", value: value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
