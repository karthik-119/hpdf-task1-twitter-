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
    maxWidth: 290,height: 187,
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

class Related extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
<Grid container direction="column" style={{backgroundColor:"#e6ecf0"}}>
                <Grid>
    <Grid item style={{marginTop:25}}>
        <Card className={classes.card} >
         <Grid item xs={10}>
    <Grid container>
        <Grid>
      <Grid container direction="column">
<Grid item style={{paddingTop:10,marginLeft:20}}>
    <Typography type="body2" style={{fontSize:"18px",fontWeight:600}}                                              className="tweetStats">
                 Related searches
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
        <Typography type="body2" style={{fontWeight:600,fontSize:"13px"}}                                                      className="tweetStats">
                   <a href=""> Karnataka</a>
          </Typography>
       </Grid>

<Grid item style={{paddingBottom:0,marginLeft:5}}>
        <Typography type="body2" style={{fontWeight:600,fontSize:"13px"}}                                                      className="tweetStats">
                   <a href=""> Gujarat&Himachal</a>
          </Typography>
       </Grid>

<Grid item style={{paddingBottom:0,marginLeft:5}}>
        <Typography type="body2" style={{fontWeight:600,fontSize:"13px"}}                                                      className="tweetStats">
                   <a href=""> #rahulmailscam</a>
          </Typography>
       </Grid>


<Grid item style={{paddingBottom:0,marginLeft:5}}>
        <Typography type="body2" style={{fontWeight:600,fontSize:"13px"}}                                                      className="tweetStats">
                   <a href=""> pappu</a>
          </Typography>
       </Grid>
<Grid item style={{paddingBottom:0,marginLeft:5}}>
        <Typography type="body2" style={{fontWeight:600,fontSize:"13px"}}                                                      className="tweetStats">
                   <a href=""> nifty</a>
          </Typography>
       </Grid>


</Grid>
</Grid>         
</Grid>    </Grid>     </Card>
</Grid></Grid></Grid>
    );
  }
}

Related.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Related);
