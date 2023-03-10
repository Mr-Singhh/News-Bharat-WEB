import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description, imagrUrl,newsUrl,author,date,source}= this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{borderRadius:"10px"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" 
        style={{left:'90%',zIndex:'1',borderRadius:"10px"}} >{source}
    <span className="visually-hidden">unread messages</span>
  </span>
  <img style={{borderTopLeftRadius:"10px", borderTopRightRadius:"10px"}} src={!imagrUrl?"https://media.istockphoto.com/vectors/breaking-news-background-vector-id1264074047?k=20&m=1264074047&s=612x612&w=0&h=uMWPkMBKIIx3NdCbvGkfOY0oYXULdpU_-1ggACLAx7A=" :imagrUrl}
   className="card-img-top" alt="..."  />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text text-danger"><small className="text-info">By : {author?author:'unknown'}</small></p>
    <p className="card-text text-danger" style={{marginTop:"-7%"}}><small className="text-info"> On : {new Date(date).toGMTString()}</small></p>
    <a rel='norefeerror' href={newsUrl} target='_blank' className="btn bt-sm btn-primry">read more</a>
    </div>
  </div>
</div>
    )
  }
}

export default NewsItem