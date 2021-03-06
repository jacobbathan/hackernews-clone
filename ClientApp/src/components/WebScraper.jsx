import React from "react";
import WebScraperMap from "./WebScraperMap";
import * as webscrapeService from "../WebScraperService";

class WebScraper extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    webscrapeService
      .getWebScrape()
      .then(this.webScrapeSuccess)
      .catch(this.webScrapeError);
  }

  webScrapeSuccess = res => {
    this.setState({
      posts: res
    });
  };

  webScrapeError = error => {
    console.log(error);
  };

  render() {
    return (
      <React.Fragment>
        <WebScraperMap posts={this.state.posts} />
        <button onClick={this.scrapeTheWeb}>scrape the thing</button>
      </React.Fragment>
    );
  }
}

export default WebScraper;
