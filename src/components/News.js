import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from "./Spinner"
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 6,
    catagory: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    catagory: PropTypes.string
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0

    }
    document.title = `${this.capitalizeFirstLetter(this.props.catagory)}-NewsMonkey`;
  }
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
    this.props.setProgress(100);
  }
  //this will be executed after the render method
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevclick = async () => {

    this.setState({
      page: this.state.page - 1
    })
    this.updateNews();


  }
  handleNextclick = async () => {

    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
      this.setState({
        page: this.state.page + 1
      })
      this.updateNews();

    }
  }

  fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({page: this.state.page+1})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat( parsedData.articles),
      totalResults: parsedData.totalResults
    })
    
  };

  render() {
    return (
      <>
        <h2 className='text-center' style={{margin: '35px 0px',marginTop: '90px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.catagory)} Headlines</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        
        <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.title ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={new Date(element.publishedAt).toUTCString()} sources={element.source.name} />
              </div>)
          })}

        </div>
        
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between" >
          <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevclick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-primary" onClick={this.handleNextclick}>Next &rarr;</button>
        </div> */}
      </>
      
    )
  }
}

export default News
