import React from "react";
import * as imageService from "../ImageServices";
import GalleryMap from "./GalleryMap";

class Gallery extends React.Component {
  state = {
    images: []
  };

  componentDidMount() {
    imageService
      .getAllImages()
      .then(this.getImagesSuccess)
      .catch(this.getImagesError);
  }

  getImagesSuccess = res => {
    console.log(res);
    this.setState({
      images: res
    });
  };

  getImagesError = error => {
    console.log(error);
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ textAlign: "center" }}>important lilly pictures</div>
        <GalleryMap images={this.state.images} />
      </React.Fragment>
    );
  }
}

export default Gallery;
