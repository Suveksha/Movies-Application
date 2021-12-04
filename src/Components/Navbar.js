import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex', padding:'1'}}>
                <Link to='/' style={{textDecoration:'none'}}><h1>MoviesHD+</h1></Link>
                <Link to='/Favourites'style={{textDecoration:'none'}}><h2 style={{marginLeft:'2 rem', color:'yellow', marginTop:'2 rem'}}>Favourites</h2></Link>
            </div>
        )
    }
}
