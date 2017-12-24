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
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider';
import People from 'material-ui-icons/People';


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
    maxWidth: 290,height: 301,
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
    width: 16,
    height: 16,marginTop:3,marginTop:7,
  },

  flexGrow: {
    flex: '1 1 auto',
  },
});

class Article extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
<Grid container direction="column" style={{backgroundColor:"#e6ecf0"}}>
                <Grid>
    <Grid item style={{marginTop:0}}>
        <Card className={classes.card} >
      <Grid container direction="column">
<Grid item style={{paddingTop:20,marginLeft:20}}>
    <Typography type="body2" style={{fontSize:"17px",fontWeight:600}}                                              >
                 Related articles<span style={{fontWeight:300,fontSize:"10px",color:"#FF0000",marginLeft:70}}                                             >
          <a href=""> . View all</a></span>

         </Typography>
 </Grid></Grid>
    

  <Grid item xs={12}>
    <Grid container>
        <Grid>
      <Grid container direction="column">
<Grid item style={{paddingTop:0,marginLeft:20,marginTop:20}}>
    <Typography type="body1" style={{fontWeight:600,fontSize:"14px",fontFamily: "Segoe UI,Arial,sansserif"}}>
            <a href="">No Aadhaar for jewellery buy of 50,000 or more</a>
          </Typography>
          <Typography type="caption" style={{fontFamily: "Segoe UI,Arial,sansserif"}}>
            The Centre has decided to withdrew an August 23 notification that brought dealers in p
          </Typography>

</Grid>
</Grid>
</Grid>   
      
  <Grid container direction="row" style={{paddingBottom:20,marginTop:5}}>
        <Grid item xs={8}>
          <Grid container direction="row" style={{marginLeft:15}}>
          <Grid>
          <Typography type="body1">
              <Avatar className={classes.avatar}>K</Avatar>
           </Typography>
         </Grid>
             <Grid>
              <Typography type="body1" style={{fontSize:"13px",marginTop:5,fontFamily: "Segoe UI,Arial,sansserif"}}>
               <a href=""> Oneindia.com</a></Typography>
          </Grid></Grid></Grid>
         <Grid item xs={4}>
              <Typography type="caption" style={{fontFamily: "Segoe UI,Arial,sansserif"}}>
               <a href="">Dec 20,2017</a></Typography>
          </Grid></Grid>
</Grid></Grid>
 <Divider light />

  <Grid item xs={12}>
    <Grid container>
        <Grid>
      <Grid container direction="column">
<Grid item style={{paddingTop:10,marginLeft:20,marginTop:20}}>
    <Typography type="body1" style={{fontWeight:600,fontSize:"14px",fontFamily: "Segoe UI,Arial,sansserif"}}>
            <a href="">No proposal to make Aadhaar linkage mandatory for property deals</a>
          </Typography>
          <Typography type="caption" style={{fontFamily: "Segoe UI,Arial,sansserif"}}>
            At present, there is no proposal to make Aadhaar linkage mandatory in property…
          </Typography>

</Grid>
</Grid>
</Grid>   
      
  <Grid container direction="row" style={{paddingBottom:20,marginTop:5}}>
        <Grid item xs={8}>
          <Grid container direction="row" style={{marginLeft:15}}>
          <Grid>
          <Typography type="body1">
              <Avatar className={classes.avatar}>K</Avatar>
           </Typography>
         </Grid>
             <Grid>
              <Typography type="body1" style={{fontSize:"13px",marginTop:5,fontFamily: "Segoe UI,Arial,sansserif"}}>
               <a href="">Oneindia.com</a></Typography>
          </Grid></Grid></Grid>
         <Grid item xs={4}>
              <Typography type="caption" style={{fontFamily: "Segoe UI,Arial,sansserif"}}>
               <a href="">Dec 20,2017</a></Typography>
          </Grid></Grid>
</Grid></Grid>


      </Card>
</Grid></Grid>
</Grid>
    );
  }
}

Article.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);

