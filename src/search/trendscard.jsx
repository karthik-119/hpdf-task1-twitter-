import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import Grid from 'material-ui/Grid'
import Tooltip from 'material-ui/Tooltip'
import classNames from 'classnames';
import './mystyle.css';



const styles = theme => ({
  card: {
    maxWidth: 290,height: 483,
  },
  media: {
    height: 95,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    width: 60,
    height: 60,
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class Trend extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
<Grid container direction="column" style={{backgroundColor:"#e6ecf0"}}>
                <Grid>
    <Grid item style={{marginTop:27}}>
        <Card className={classes.card} >
         <Grid item xs={10}>
    <Grid container>
        <Grid>
      <Grid container direction="column">
<Grid item style={{paddingTop:20,marginLeft:20}}>
    <Typography type="body2" style={{fontSize:"18px",fontWeight:600}}                                              className="tweetStats">
                 Trends for you.
         </Typography>

</Grid>
</Grid>
</Grid> 
        <Grid item style={{marginTop:11}}>
<Grid container direction="column">
<Grid item style={{paddingBottom:0}}>
 <Typography type="body2" style={{fontWeight:600,fontSize:"12px"}}                                              className="tweetStats">
          <a href="">Change</a>
         </Typography>
        </Grid>
   </Grid>
              </Grid>
</Grid></Grid>
                   

 <Grid item xs={12}>
    <Grid container justify="flex-start">
        <Grid item style={{marginLeft:10}}>
      <Grid container direction="column">
<Grid item style={{paddingBottom:0,marginLeft:5}}>
        <Typography type="body2" style={{fontWeight:600,fontSize:"14px"}}                                                      className="tweetStats">
                   <a href=""> #AgnyaathawasiTeaser</a>
          </Typography>
       </Grid>
<Grid item style={{paddingTop:0}}>
   <Typography type="subheading" align="left" style={{fontWeight:50,fontSize:"12px",marginLeft:15}}>
               96K Tweets</Typography>
</Grid>

<Grid item style={{paddingBottom:0,marginLeft:5}}>
        <Typography type="body2" style={{fontWeight:600,fontSize:"14px"}}                                                      className="tweetStats">
                   <a href=""> #PuneTimesFashionWeek</a>
          </Typography>
       </Grid>
<Grid item style={{paddingTop:0}}>
   <Typography type="subheading" align="left" style={{fontWeight:50,fontSize:"12px",marginLeft:15}}>
               3,465 Tweets</Typography>
</Grid>

<Grid item style={{paddingBottom:0,marginLeft:5}}>
        <Typography type="body2" style={{fontWeight:600,fontSize:"14px"}}                                                      className="tweetStats">
                   <a href=""> #MiaMichealsOnDID6</a>
          </Typography>
       </Grid>
<Grid item style={{paddingTop:0}}>
   <Typography type="subheading" align="left" style={{fontWeight:50,fontSize:"12px",marginLeft:15}}>
               56K Tweets</Typography>
</Grid>


<Grid item style={{paddingBottom:0,marginLeft:5}}>
        <Typography type="body2" style={{fontWeight:600,fontSize:"14px"}}                                                      className="tweetStats">
                   <a href=""> #QUARTERFINALTITAN</a>
          </Typography>
       </Grid>
<Grid item style={{paddingTop:0}}>
   <Typography type="subheading" align="left" style={{fontWeight:50,fontSize:"12px",marginLeft:15}}>
               5,252 Tweets</Typography>
</Grid>

<Grid item style={{paddingBottom:0,marginLeft:5}}>
        <Typography type="body2" style={{fontWeight:600,fontSize:"14px"}}                                                      className="tweetStats">
                   <a href=""> #IcanYouCanWorkHard</a>
          </Typography>
       </Grid>
<Grid item style={{paddingTop:0}}>
   <Typography type="subheading" align="left" style={{fontWeight:50,fontSize:"12px",marginLeft:15}}>
               2,562 Tweets</Typography>
</Grid>

<Grid item style={{paddingBottom:0,marginLeft:5}}>
        <Typography type="body2" style={{fontWeight:600,fontSize:"14px"}}                                                      className="tweetStats">
                   <a href=""> #MostLikedGangInTeaser</a>
          </Typography>
       </Grid>
<Grid item style={{paddingTop:0}}>
   <Typography type="subheading" align="left" style={{fontWeight:50,fontSize:"12px",marginLeft:15}}>
               90K Tweets</Typography>
</Grid>

</Grid>
</Grid>         
</Grid>    </Grid>     </Card>
<Grid>
<Typography type="caption" style={{fontWeight:300,paddingTop: 15,paddingLeft: 15,paddingRight: 10,paddingBottom: 15}}                                              className="tweetStats">
   <span style={{fontSize:"10px",color:"grey",fontWeight:300}} > ©2017 Twitter</span>

      &nbsp; <a href="">About</a>
    &nbsp; <a href="">Help Center</a>
    &nbsp; <a href="">Terms</a>
    &nbsp; <a href="">Privacy policy</a>
    &nbsp; <a href="">Cookies</a>
    &nbsp; <a href="">Ads info</a>
         </Typography>
</Grid>

</Grid></Grid></Grid>
    );
  }
}

Trend.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Trend);
