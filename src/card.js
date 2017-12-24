import React, { Component } from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Tooltip from 'material-ui/Tooltip'
import Typography from 'material-ui/Typography'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Button from 'material-ui/Button'
const styles ={
};

class Cardone extends Component{
    render(){
        const classes = this.props.classes;
        return(
            <Grid container direction="column">
                 <Grid item style={{backgroundColor:"#ffffff"}}>
   <Grid container>
       <Grid item xs={4}>
          </Grid>
 <Grid item style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
   <Grid container direction="column">
     <Grid item>
     
    <Typography type="title">
    <a href="">Karthik</a>
     </Typography>
    </Grid>
  <Grid item style={{padding:0,paddingLeft:"8px"}}>  <Typography type="caption" style={{color:"#657786"}}>
   <a href="">@Karthik_119</a>
  </Typography>
   </Grid>
    </Grid>
   </Grid>
<Grid item xs={10}>
    <Grid container justify="center">
        <Grid item>
      <Grid container direction="column">
<Grid item style={{paddingBottom:0}}>
        <Typography type="body2" style={{fontWeight:600}}                                                      className="tweetStats">
                     Tweets
          </Typography>
       </Grid>
<Grid item style={{paddingTop:0}}>
   <Typography type="body1" style={{fontWeight:600,fontSize:"20px",color:"#1da1f2"}}>
               12</Typography>
</Grid>
</Grid>
</Grid>
  <Grid item>
<Grid container direction="column">
<Grid item style={{paddingBottom:0}}>
 <Typography type="body2" style={{fontWeight:600}}                                              className="tweetStats">
                 Following
         </Typography>
   </Grid>
   <Grid item style={{paddingTop:0}}>
  <Typography type="body1" style={{fontWeight:600,fontSize:"20px",color:"#1da1f2"}}>
        100</Typography>
           </Grid></Grid>
              </Grid>
  <Grid item>
   <Grid container direction="column">
<Grid item style={{paddingBottom:0}}>
 <Typography type="body2" style={{fontWeight:600}}                                            className="tweetStats">
               Followers</Typography>
            </Grid>
<Grid item style={{paddingTop:0}}>
 <Typography type="body1" style={{fontWeight:600,fontSize:"20px",color:"#1da1f2"}}>9
        </Typography>
        </Grid>
       </Grid>
        </Grid>
       </Grid>
       </Grid>
        </Grid>
</Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(Cardone)
