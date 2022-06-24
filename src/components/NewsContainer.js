import React, { Component } from "react";
import News from "./News";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import Pagenotfound from "./Pagenotfound";
import InfiniteScroll from "react-infinite-scroll-component";
var axios = require("axios").default;

export class NewsContainer extends Component {
  static defaultProps = {
    country: "in",
    totalResults: 0,
    category: "sports",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalarticles: 0,
      topic: "",
      end: false,
      final_page: 0,
      oops: false,
    };
  }
  set = async (val) => {
    const arr = val.target.value.split(" ");
    let s = arr.toString().replaceAll(",", " ");
    this.setState({
      topic: s,
      page: 1,
      final_page: 0,
    });
  };

  reset = async () => {
    this.setState({
      end: false,
      articles: [],
      page: 1,
    });
    this.update_news_search_bar();
  };

  update_news = async () => {
    console.log(this.state.page);
    this.props.setProgress(25);
    var options = {
      method: "GET",
      url: "https://api.newscatcherapi.com/v2/search",
      params: {
        q: "news",
        lang: "en",
        sort_by: "relevancy",
        topic: `${this.props.category}`,
        page: `${this.state.page}`,
      },
      headers: {
        "x-api-key": "3RRhvqjLYNlxosQp8A0IIJKZTkVZ1UksRLEOafUza_U",
      },
    };
    this.props.setProgress(75);
    axios
      .request(options)
      .then((response) => {
        const posts = response.data.articles;
        console.log(response);
        this.props.setProgress(75);
        if (response.data.total_hits === 0 && this.state.articles.length == 0) {
          // oops we didnt find what you searched
          this.setState({
            oops: true,
            page: 1,
          });
        } else if (response.data.total_hits === 0) {
          this.setState({
            page: 1,
            end: true,
          });
        } else if (
          this.state.page === this.state.final_page &&
          this.state.page !== 1
        ) {
          this.setState({
            articles: this.state.articles.concat(posts),
            end: false,
          });
        } else {
          this.setState({
            articles: this.state.articles.concat(posts),
            page: this.state.page + 1,
            oops: false,
            final_page: response.data.total_pages,
          });
        }
        this.props.setProgress(100);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  update_news_search_bar = async () => {
    console.log(this.state.page);
    this.props.setProgress(25);
    // console.log(this.state.topic);
    var options = {
      method: "GET",
      url: "https://api.newscatcherapi.com/v2/search",
      params: {
        q: `${this.state.topic}`,
        lang: "en",
        sort_by: "relevancy",
        page: `${this.state.page}`,
      },
      headers: {
        "x-api-key": "3RRhvqjLYNlxosQp8A0IIJKZTkVZ1UksRLEOafUza_U",
      },
    };
    this.props.setProgress(50);

    axios
      .request(options)
      .then((response) => {
        const posts = response.data.articles;
        console.log(response);
        this.props.setProgress(75);
        if (response.data.total_hits === 0 && this.state.articles.length == 0) {
          // oops we didnt find what you searched
          this.setState({
            oops: true,
            page: 1,
            end: true,
          });
        } else if (response.data.total_hits === 0) {
          this.setState({
            page: 1,
            end: true,
          });
        } else if (
          this.state.page === this.state.final_page &&
          this.state.page !== 1
        ) {
          this.setState({
            articles: this.state.articles.concat(posts),
            end: true,
          });
        } else {
          this.setState({
            articles: this.state.articles.concat(posts),
            oops: false,
            page: this.state.page + 1,
            final_page: response.data.total_pages,
          });
        }
        this.props.setProgress(100);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  async componentDidMount() {
    this.update_news();
  }
  fetchData = () => {
    if (this.state.topic === "") this.update_news();
    else this.update_news_search_bar();
  };

  render() {
    return (
      <>
        <div className="container">
          {/* SEARCH BAR */}
          <div className="searchBar d-flex justify-content-center">
            <div className="my-4 mx-4 search-bar ">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control rounded BAR"
                  placeholder="Search for topics,location"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={this.set}
                />
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={this.reset}
                >
                  search
                </button>
              </div>
            </div>
          </div>

          {/* infinte scroll */}
          <Pagenotfound error404={this.state.oops} mode={this.props.mode}/>
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={!this.state.end}
            loader={<Spinner />}
            // endMessage={

            // }
          >
            <div className="row" id="row">
              {this.state.articles.map((element, pos) => {
                return (
                  element.media && (
                    <div
                      className="col-md-6 col-lg-4 col-xl-3 col-sm-12 my-4 cards"
                      key={pos}
                    >
                      <News
                        mode={this.props.mode}
                        title={
                          element.title
                            ? element.title.split(" ").slice(0, 10)
                            : "hello"
                        }
                        explaination={
                          element.summary
                            ? element.summary.slice(0, 90)
                            : "description"
                        }
                        imageurl={element.media}
                        author={element.author}
                        time={element.published_date}
                        name={element.clean_url}
                        readmore={element.link}
                      />
                    </div>
                  )
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default NewsContainer;
