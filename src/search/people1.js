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
import Button from 'material-ui/Button'
import MoreVertIcon from 'material-ui-icons/MoreVert';


const primary = red[500];// #F44336 
const styles = theme => ({
  card: {
    maxWidth: 290
,height: 289,
  },
  followButton:{
        color: "#F44336 ",
        padding: 0,
        minHeight: "27px",
        width: "89px",
        border: "2px solid",
        borderRadius: "20px",
        textTransform:"none",
        fontSize:"13px",
        fontWeight: "8100px"
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

class People1 extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
<Grid container direction="column" style={{backgroundColor:"#e6ecf0"}}>
                <Grid>
    <Grid item>
        <Card className={classes.card} >
         <CardMedia
            className={classes.media}
            image="https://lh3.googleusercontent.com/-uuiMcQcUYq4/WQiz80CaI2I/AAAAAAAAEuk/iCwJM7DOxSwJFejEvEBad6TKdAElwSfDQCEwYBhgL/w140-h139-p/DSC_0972.JPG"
          />
<Grid item xs={12}>
    <Grid container>
        <Grid>
      <Grid container direction="row">
<Grid item xs={6}style={{paddingTop:0,marginLeft:20}}>
    <Avatar
        className={classNames(classes.avatar)}
        alt="Karthik"
        src="https://lh3.googleusercontent.com/-uuiMcQcUYq4/WQiz80CaI2I/AAAAAAAAEuk/iCwJM7DOxSwJFejEvEBad6TKdAElwSfDQCEwYBhgL/w140-h139-p/DSC_0972.JPG"/> 
</Grid>
<Grid item xs={3} style={{marginTop:20}}>
                                          <Button color="primary" className={classes.followButton}>
                                              Follow
                                          </Button>
</Grid>
<Grid item xs={1} style={{marginTop:10,marginLeft:15}}>
  <IconButton>
                <MoreVertIcon />
              </IconButton>
</Grid>
</Grid>
</Grid>  </Grid>       
  <Grid item style={{marginTop:10,marginLeft:15}}>
<Grid container direction="column">
<Grid item style={{paddingBottom:0}}>
 <Typography type="body2" style={{fontWeight:600,fontSize:"18px"}}                                              >
               <a href="">  Aadhar Malik</a>

         </Typography>
   </Grid>
   <Grid item style={{paddingTop:0}}>
  <Typography type="caption" style={{fontWeight:200,fontSize:"14px",color:"#9E9E9E"}}>
       <a href=""> @Aadhar_guy</a></Typography>
           </Grid></Grid>
              </Grid>
</Grid>
     <Grid item xs={11}>
          <Typography style={{paddingTop:5,marginLeft:15,fontSize:"13px"}}>              
                 Actor/musician/comic. @SnGComedyIN Fb- Aadar, Insta- @TheAadarGuy Snap- @mynameisaadar Bookings: savinay@oml.in
        </Typography></Grid>
          </Card>
</Grid></Grid></Grid>
    );
  }
}

People1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(People1);