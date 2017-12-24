import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';
import Trend from './trendscard';
import Feed from './Feed';
import Grid from 'material-ui/Grid'
import Details from './details';
import Follow from './follow';
import End from './Endcard';
import Tweet from './tweet';


class App extends Component {
  render() {
    return (
     <div className="pos">
       <Grid container justify="center" spacing={24}
              style={{backgroundColor:"#e6ecf0"}} wrap="wrap">
             <Grid item xs={12}>
                <Nav/>
             </Grid>
            <Grid item xs={10}>
                <Grid container spacing={24}>
                    <Grid item xs={3} style={{marginTop:0,paddingLeft:40,backgroundColor:"#e6ecf0"}}> 
                    <Details/>
                     <Trend/>                  
                    </Grid>
                    <Grid item xs={5.9}>    
                       <Tweet/><Feed/></Grid>
                    <Grid item xs={3}style={{marginTop:0}}>
                       <Follow/>    
                        <End/>                   
                      </Grid>
   
            </Grid>
            </Grid>
        </Grid>
</div>
    );
  }
}

export default App;
