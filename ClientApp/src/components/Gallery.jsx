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
    return <GalleryMap images={this.state.images} />;
  }
}

export default Gallery;
