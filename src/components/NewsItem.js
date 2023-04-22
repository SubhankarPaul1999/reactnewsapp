import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl, author, date, sources} = this.props;
    return (
      <div className='my-3' style={{position: 'relative'}}>
        <div style={{display: 'block',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    margin:'0px 0px'
   
   

      }}>
        <span className="badge rounded-pill text-bg-danger" >{sources}</span>
        </div>
        <div className="card" > 
          <img src={imageUrl? imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTygP6m-PDp1DbZKCyiqQAOVxAOor5FcoqJ6C0uGZfM-cqrnnTkiI_7YZM_Tcr166-EXDs&usqp=CAU"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}  </h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            <p className="card-text"><small className=" text-danger">By {author? author: "Unknown"} on {date}</small></p>
          </div>
        </div>
      </div>
      
    )
  }
}

export default NewsItem
