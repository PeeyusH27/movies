import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex',padding:'0.5', backgroundColor:'#000000'}}>
                <Link to="/" style={{textDecoration:'none', color:'#ffffff'}}><h1 style={{margin:'1rem',marginLeft:'1rem'}}>Movies App</h1></Link>
                <Link to="/favourites" style={{textDecoration:'none'}}><h2 style={{margin:'1rem',marginTop:'1.5rem', color:'#ffffff'}}>Favourites</h2></Link>
                
                
            </div>
        )
    }
}
