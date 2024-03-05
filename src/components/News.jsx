import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,

    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=8d67aa3079d944ca9931b564a5e9852e&page=1&pagesize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles.filter((e) => {
        return e.urlToImage !== null;
      }),
      totalResults: parsedData.totalResults
    });
  }
  handleNext = async ()=>{
    if(Math.ceil(this.state.totalResults/20)<this.state.page){
       
    }
    else{
      let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=8d67aa3079d944ca9931b564a5e9852e&page=${this.state.page}&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
  
    this.setState({
      articles: parsedData.articles.filter((e) => {
        return e.urlToImage !== null;
      }),
      page: this.state.page+1 ,
    });
    }

  
  }
  handlePrev = async ()=>{
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=process.env.REACT_APP_API_KEY&page=1&pagesize=20`;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);

  this.setState({
    articles: parsedData.articles.filter((e) => {
      return e.urlToImage !== null;
    }),
  });
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((e) => {
            return (
              <div className="col-md-4" key={e.url}>
                {" "}
                <NewsItem
                  title={
                    e.title
                      ? e.title.length >= 40
                        ? e.title.slice(0, 40) + "..."
                        : e.title
                      : ""
                  }
                  description={
                    e.description ? e.description.slice(0, 100) + "..." : ""
                  }
                  imageUrl={e.urlToImage}
                  url={e.url}
                />
             
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
                  <button className="btn btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
                  <button className="btn btn-dark" onClick={this.handleNext}  > Next &rarr;</button>
                </div>
      </div>
    );
  }
}
