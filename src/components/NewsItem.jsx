import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title, description,imageUrl,url} = this.props;
    return (
      <div className='my-3'>
    <div className="card" style={{width: '18rem'}}>
  <img src={imageUrl} className="card-img-top" alt="..." height={"200px"} width={"200px"} />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} target="_blank" className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>

      </div>
    )
  }
}
