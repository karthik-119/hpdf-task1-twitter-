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
import './style.css';


const styles = theme => ({
  card: {
    maxWidth: 290
,height: 213,
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

class Details extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
<Grid container direction="column" style={{backgroundColor:"#ffffff"}}>
                <Grid>
    <Grid item>
        <Card className={classes.card} >
         <CardMedia
            className={classes.media}
            image="https://lh3.googleusercontent.com/-uuiMcQcUYq4/WQiz80CaI2I/AAAAAAAAEuk/iCwJM7DOxSwJFejEvEBad6TKdAElwSfDQCEwYBhgL/w140-h139-p/DSC_0972.JPG"
            title="Contemplative Reptile"
          />
<Grid item xs={10}>
    <Grid container>
        <Grid>
      <Grid container direction="column">
<Grid item style={{paddingTop:0,marginLeft:20}}>
    <Avatar
        className={classNames(classes.avatar)}
        alt="Karthik"
        src="https://lh3.googleusercontent.com/-uuiMcQcUYq4/WQiz80CaI2I/AAAAAAAAEuk/iCwJM7DOxSwJFejEvEBad6TKdAElwSfDQCEwYBhgL/w140-h139-p/DSC_0972.JPG"/> 
</Grid>
</Grid>
</Grid>         
  <Grid item style={{marginTop:10}}>
<Grid container direction="column">
<Grid item style={{paddingBottom:0}}>
 <Typography type="body2" style={{fontWeight:600}}                                              className="tweetStats">
               <a href="">  Karthik</a>

         </Typography>
   </Grid>
   <Grid item style={{paddingTop:0}}>
  <Typography type="body2" style={{fontWeight:200,fontSize:"14px",color:"#9E9E9E"}}>
        @Karthik_119</Typography>
           </Grid></Grid>
              </Grid>
</Grid></Grid>
                   

 <Grid item xs={12}>
    <Grid container style={{marginLeft:7}}>
        <Grid item style={{marginTop:0}}>
      <Grid container direction="column">
<Grid item style={{paddingBottom:0}}>
        <Typography type="body2" style={{fontWeight:400}}                                                   >
                   <a href="">  Tweets</a>
          </Typography>
       </Grid>
<Grid item style={{paddingTop:0}}>
   <Typography type="body1" style={{fontWeight:600,fontSize:"20px",color:"#F44336",marginLeft:5}}>
               12</Typography>
</Grid>
</Grid>
</Grid>         
  <Grid item style={{marginTop:0}}>
<Grid container direction="column">
<Grid item style={{paddingBottom:0,marginLeft:8}}>
 <Typography type="body2" style={{fontWeight:400}}                                              >
             <a href="">    Following</a>
         </Typography>
   </Grid>
   <Grid item style={{paddingTop:0,marginLeft:8}}>
  <Typography type="body1" style={{fontWeight:600,fontSize:"20px",color:"#F44336"}}>
        100</Typography>
           </Grid></Grid>
              </Grid>
  <Grid item style={{marginTop:0}}>
   <Grid container direction="column">
<Grid item style={{paddingBottom:0}}>
 <Typography type="body2" style={{fontWeight:400,marginLeft:15}}                                         >
             <a href="">  Followers</a>
</Typography>
            </Grid>
<Grid item style={{paddingTop:0,marginLeft:19}}>
 <Typography type="body1" style={{fontWeight:600,fontSize:"20px",color:"#F44336",marginLeft:0}}>9
        </Typography>
        </Grid>
       </Grid>
        </Grid></Grid></Grid>
         </Card>
</Grid></Grid></Grid>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Details);