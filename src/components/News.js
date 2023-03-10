import React, { Component } from 'react'
import  Spinner  from './Spinner'
import NewsItem from './NewsItem'
// import PropTypes from 'prop-types'

export class News extends Component {

 static defaultProps = {
  country: 'in',
  pageSize: 4,
  category: 'general',

 }

 capitalize=(string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1)
 }

//  static PropTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string 
//  }  

    constructor(props){
        super(props)
        this.state = {
           articles : [],
           loading : false,
           page: 1
        }
        document.title = `${this.capitalize(this.props.category)}->News Bharat`
    }

    async updateNews(){
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=32526e0d15ef41339473d7bb34347ab6&page=${this.state.page}&pageSize=${this.props.pageSize}`        
        let data = await fetch (url)
        let newdata = await data.json()
        this.setState({
            articles: newdata.articles,
            totalResults: newdata.totalResults,
            loading: false
        })
    }

 
    async componentDidMount(){
      this.updateNews()
    }

    handlePrevClick= async ()=>{
      this.setState({
        page: this.state.page -1})
        this.updateNews()
    }

    handleNextClick= async ()=>{
      if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {
      }
      else {
      this.setState({
        page: this.state.page +1})
        this.updateNews()
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 style={{color:"green"}} className="text-center">𝕹𝖊𝖜𝖘 𝕭𝖍𝖆𝖗𝖆𝖙 - <span style={{fontWeight:"light",fontSize:"30px"}}> {this.capitalize(this.props.category)} </span></h1>

        {this.state.loading && <Spinner/>}

        <div className="d-flex justify-content-between">
       <button type="button" disabled={this.state.page<=1} className="btn btn-secondary" onClick={this.handlePrevClick}>&larr;Previous</button>
       <button type="button"  className="btn btn-secondary" onClick={this.handleNextClick}>Next&rarr;</button>
       </div>
       
            <div className="row">
                {!this.state.loading && this.state.articles.map((el)=>{
                    return <div className='col-md-3' key={el.url}>
                    <NewsItem title={el.title?el.title.slice(0,40):""} 
                    description={el.description?el.description.slice(0,80):""} 
                    imagrUrl= {el.urlToImage} newsUrl= {el.url} 
                    author={el.author} date={el.publishedAt} source={el.source.name}/>
                    </div>
                }
              )
           } 
       </div>   
  </div>
    )
  }
}

export default News