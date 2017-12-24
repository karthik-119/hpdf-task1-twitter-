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
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider';
import People from 'material-ui-icons/People';
import 'font-awesome/css/font-awesome.min.css'


const primary = red[500];// #F44336 
const styles = theme => ({
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
  card: {
    maxWidth: 290,height: 307,
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
    width: 48,
    height: 48,
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class Follow extends React.Component {
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
          <Grid container direction="column">
<Grid item style={{paddingTop:20,marginLeft:20}}>
    <Typography type="body2" style={{fontSize:"17px",fontWeight:600}}                                              className="tweetStats">
                 Who to follow
            <span style={{fontSize:"12px"}}>
          <a href=""> . Refresh</a><a href=""> . View all</a></span>
         </Typography>
        </Grid>
   </Grid>

    

  <Grid item xs={12}>
    <Grid container>
        <Grid>
      <Grid container direction="row">
<Grid item xs={2}style={{paddingTop:0,marginLeft:20,marginTop:18}}>
    <Avatar
        className={classNames(classes.avatar)}
        alt="Karthik"
        src="https://lh3.googleusercontent.com/-uuiMcQcUYq4/WQiz80CaI2I/AAAAAAAAEuk/iCwJM7DOxSwJFejEvEBad6TKdAElwSfDQCEwYBhgL/w140-h139-p/DSC_0972.JPG"/> 
</Grid>
</Grid>
</Grid>   
      
  <Grid item style={{marginTop:0}}>
<Grid container direction="column">
<Grid item style={{paddingBottom:15}}>
 <Typography type="body2" style={{fontWeight:600}}                                              className="tweetStats">
               <a href="">Karthik</a>
   <span style={{fontSize:"13px",color:"grey",fontWeight:600}} >   @Karthik_119</span>
<span className="fa fa-close" aria-hidden="true" style={{fontSize:"10px",marginLeft:50,fontWeight:200,color:"grey"}}></span>
         </Typography>

                                          <Button color="primary" className={classes.followButton}>
                                              Follow
                                          </Button>


   </Grid>
   </Grid>
              </Grid>
</Grid></Grid>
 <Divider light />

  <Grid item xs={12}>
    <Grid container>
        <Grid>
      <Grid container direction="column">
<Grid item style={{paddingTop:10,marginLeft:20,marginTop:20}}>
    <Avatar
        className={classNames(classes.avatar)}
        alt="Karthik"
        src="https://lh3.googleusercontent.com/-uuiMcQcUYq4/WQiz80CaI2I/AAAAAAAAEuk/iCwJM7DOxSwJFejEvEBad6TKdAElwSfDQCEwYBhgL/w140-h139-p/DSC_0972.JPG"/> 
</Grid>
</Grid>
</Grid>   
      
  <Grid item style={{marginTop:10}}>
<Grid container direction="row">
<Grid item style={{paddingBottom:15}}>
 <Typography type="body2" style={{fontWeight:600}}                                              className="tweetStats">
               <a href="">Karthik</a>
   <span style={{fontSize:"13px",color:"grey",fontWeight:600}} >   @Karthik_119</span>
<span className="fa fa-close" aria-hidden="true" style={{fontSize:"10px",marginLeft:50,fontWeight:200,color:"grey"}}></span>
         </Typography>

                                          <Button color="primary" className={classes.followButton}>
                                              Follow
                                          </Button>


   </Grid>
   </Grid>
              </Grid>
</Grid></Grid>
<Divider light />

  <Grid item xs={12}>
    <Grid container>
        <Grid>
      <Grid container direction="column">
<Grid item style={{paddingTop:10,marginLeft:20,marginTop:20}}>
    <Avatar
        className={classNames(classes.avatar)}
        alt="Karthik"
        src="https://lh3.googleusercontent.com/-uuiMcQcUYq4/WQiz80CaI2I/AAAAAAAAEuk/iCwJM7DOxSwJFejEvEBad6TKdAElwSfDQCEwYBhgL/w140-h139-p/DSC_0972.JPG"/> 
</Grid>
</Grid>
</Grid>   
      
  <Grid item style={{marginTop:10}}>
<Grid container direction="row">
<Grid item style={{paddingBottom:15}}>
 <Typography type="body2" style={{fontWeight:600}}                                              className="tweetStats">
               <a href="">Karthik</a>
   <span style={{fontSize:"13px",color:"grey",fontWeight:600}} >   @Karthik_119</span>
<span className="fa fa-close" aria-hidden="true" style={{fontSize:"10px",marginLeft:50,fontWeight:200,color:"grey"}}></span>
         </Typography>

                                          <Button color="primary" className={classes.followButton}>
                                              Follow
                                          </Button>


   </Grid>
   </Grid>
              </Grid>
</Grid></Grid>
<Divider light />


  <Grid item style={{marginTop:10}}>
<Grid container direction="row">
<Grid item xs={1} style={{marginTop: 5,marginLeft:10}}>
<People/>
</Grid>
<Grid item xs={9} style={{paddingTop:0,marginTop: 5}} >
<Typography type="caption" style={{fontWeight:600,paddingTop: 15,paddingLeft: 0,paddingRight: 10,paddingBottom: 15}}                                              className="tweetStats">
 <a href="">Find people you know</a>
</Typography></Grid>

 </Grid></Grid>
      </Card>
</Grid></Grid>
</Grid>
    );
  }
}

Follow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Follow);


