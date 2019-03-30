import React from "react";
import * as imageServices from "../ImageServices";

class FileUpload extends React.Component {
  state = {
    files: []
  };

  fileRef = React.createRef();

  uploadImage = file => {
    imageServices
      .uploadImage(file)
      .then(this.uploadImageSuccess)
      .catch(this.uploadImageError);
  };

  uploadImageSuccess = res => {
    console.log(res);
    this.props.history.push("/gallery");
  };

  uploadImageError = error => {
    console.log(error);
  };

  handleChange = evt => {
    const file = evt.target.files;
    this.uploadImage(file);
  };

  render() {
    return (
      <div>
        <label htmlFor="uploadImage">Upload an Image:</label>
        <input
          id="primaryImage"
          type="file"
          name="primaryImage"
          value={this.state.primaryImage}
          onChange={this.handleChange}
        />
        <br />
      </div>
    );
  }
}

export default FileUpload;
