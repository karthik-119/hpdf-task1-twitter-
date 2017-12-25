import React, { Component } from 'react';
import Media from 'react-media'
import logo from './logo.svg';
import Nav from './search/Nav';
import './App.css';
import Trend from './search/trendscard';
import Feed from './search/Feed';
import Grid from 'material-ui/Grid'
import Filter from './search/filter';
import Related from './search/related';
import Follow from './search/follow';
import Topnews from './search/topnews';
import People from './search/people';
import Nav1 from './search/nav1';




class Search extends Component {
  render() {
    return (
      <div class="pos">
  <Media query="(max-width: 1400px)" render={() => (
               <marquee> This app is best viewed in 1920 * 1280 resolution</marquee>)}>
</Media>
        <Nav/>
         <Nav1/>
       <Grid container justify="center" spacing={24} style={{backgroundColor:"#e6ecf0",marginTop:2,maxWidth:"1531px",height:"1400px"}}>
            <Grid item xs={10}>
                <Grid container spacing={24}>
                    <Grid item xs={3} style={{marginTop:20,paddingLeft:40}}>                    
                    <Filter/><Related/><Follow/>
                     <Trend/>                  
                    </Grid>
                    <Grid item xs={5.8}>    
                       <Topnews/><People/><Feed/></Grid>
                    
                </Grid>
            </Grid>
        </Grid>

      </div>
    );
  }
}

export default Search;
