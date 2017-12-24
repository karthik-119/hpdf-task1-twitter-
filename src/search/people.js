import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar';
import People1 from './people1';
import People2 from './people2';


const styles = {
  card: {
    maxWidth: 590,height: 422,
  },
  style: {
    maxWidth: 590,height: 42,marginTop:0,
  },

  media: {
    height: 300,
    maxWidth: 590,
  },
  avatar: {
    width: 20,
    height: 20,marginTop:3,
  },
};

class People extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
  return (
    <div>
     <Grid container direction="column" style={{backgroundColor:"#e6ecf0",marginTop:20}}>
                <Grid>
  <Grid container direction="row" className={classes.style}>
      <Grid item xs={10}>
       <Typography type="body1" style={{fontWeight:600,fontSize:"15px",marginLeft:10,paddingBottom:0}}>
               People
          </Typography>
 </Grid> 
  <Grid item xs={2}>
       <Typography type="body1" style={{fontWeight:300,fontSize:"12px",marginLeft:40,marginTop:5}}>
               <a href="">    View all</a>  
          </Typography>
 </Grid> 

</Grid>  
    <Grid container justify="center" style={{backgroundColor:"#e6ecf0",marginTop:10,marginLeft:0}}>
   <Grid item xs={12}>
                <Grid container direction="row">
                    <Grid item xs={6}>
                     <People1/>
                  </Grid>
                  <Grid item xs={6}>
                      <People2/>
                   </Grid>
</Grid></Grid></Grid></Grid></Grid>
     
         </div>
  );
}
}
People.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(People);

