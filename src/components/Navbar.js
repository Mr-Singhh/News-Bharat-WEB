import React, { Component } from 'react'
import {
  Link
  } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link style={{color:"green", marginRight:"10"}} className="navbar-brand" to="/"><h1>𝕹𝖊𝖜𝖘 𝕭𝖍𝖆𝖗𝖆𝖙</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item"> <Link className="nav-link" to="/">Home</Link></li>
           <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link> </li>
           <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
           <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link></li>
           <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link></li>
           <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link></li>  
           <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link></li>
           {/* <li><Link to="/spinner">Users </Link></li> */}
      </ul>
      
    </div>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item"> <Link className="" to="/business"></Link> <img style={{width:"70px"}} src="https://www.freeiconspng.com/thumbs/login-icon/login-icon-png-27.png" alt="" /> </li>
    </ul>
  </div>
</nav>
    )
  }
}

export default Navbar