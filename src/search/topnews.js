import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar';


const styles = {
  card: {
    maxWidth: 590,height: 422,
  },
  style: {
    maxWidth: 590,height: 42,
  },

  media: {
    height: 300,
    maxWidth: 590,
  },
  avatar: {
    width: 16,
    height: 16,marginTop:5,
  },
};

class Topnews extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
  return (
    <div>
     <Grid container direction="column" style={{backgroundColor:"#e6ecf0",marginTop:5}}>
                <Grid>
  <Grid container direction="row" className={classes.style}>
      <Grid item xs={10}>
       <Typography type="body1" style={{fontWeight:600,fontSize:"15px",marginLeft:10,paddingBottom:0}}>
               Top news
          </Typography>
 </Grid> 
  <Grid item xs={2}>
       <Typography type="body1" style={{fontWeight:300,fontSize:"12px",marginLeft:40,marginTop:5}}>
               <a href="">    View all</a>  
          </Typography>
 </Grid> 

</Grid>  
    <Grid item>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
      image="https://pbs.twimg.com/card_img/943194248156889089/p5zLP1S2?format=jpg&name=800x419"
 title="aadhar"
        />
        <CardContent>
          <Typography type="body2" style={{fontWeight:600,fontSize:"16px"}}>
            <a href="">J&K: Aadhar enrolment crosses one crore mark</a>
          </Typography>
          <Typography component="p">
            Aadhaar enrolment in Jammu and Kashmir has crossed one crore mark against a total population of 1.25 crore as per 2011 census and cards of 97 lakh residents have been…
          </Typography>
        </CardContent>

        <Grid container direction="row">
        <Grid item xs={10}>
          <Grid container direction="row" style={{marginLeft:15}}>
          <Grid>
          <Typography type="body1">
              <Avatar className={classes.avatar}>K</Avatar>
           </Typography>
         </Grid>
             <Grid>
              <Typography type="body1" style={{fontSize:"13px",marginTop:5}}>
               <a href="">Oneindia.com</a></Typography>
          </Grid></Grid></Grid>
         <Grid item xs={2}>
              <Typography type="caption">
               <a href="">Dec 20,2017</a></Typography>
          </Grid></Grid>
      
      </Card>
      </Grid></Grid></Grid>
     
     <Grid container direction="column" alignItems="center" style={{backgroundColor:"#f5f8fa",marginTop:20,paddingBottom:30}} className={classes.style}>
                <Grid item xs={12}>
             <Typography type="body1" style={{paddingTop:5}}>
                   <a href="">114 new results</a>
           </Typography>
         </Grid></Grid>
    </div>
  );
}
}
Topnews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Topnews);

