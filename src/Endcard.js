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
import Divider from 'material-ui/Divider';
import ArrowDropUp from 'material-ui-icons/ArrowDropUp';

const styles = theme => ({
  card: {
    maxWidth: 290
,height: 153,
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

class End extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
<div class="end">
<Grid container direction="column" style={{backgroundColor:"#e6ecf0"}} alignItems='space-around' spacing= '16'>
                <Grid>
    <Grid item>
        <Card className={classes.card} >
  <Grid item xs={12} style={{paddingTop:0,marginTop: 20}} >       
<Typography type="caption" style={{fontWeight:400,paddingTop: 15,paddingLeft: 15,paddingRight: 10,paddingBottom: 15}}                                              className="end">
   <span style={{fontSize:"13px",color:"grey",fontWeight:300}} > ©2017 Twitter</span>

      &nbsp; <a href="">About</a>
    &nbsp; <a href="">Help Center</a>
    &nbsp; <a href="">Terms</a>
    &nbsp; <a href="">Privacy policy</a>
    &nbsp; <a href="">Cookies</a>
    &nbsp; <a href="">Ads info</a>
    &nbsp; <a href="">Brand</a>
    &nbsp; <a href="">Blog</a>
    &nbsp; <a href="">Status</a>
    &nbsp; <a href="">Apps</a>
    &nbsp; <a href="">Jobs</a>
    &nbsp; <a href="">Marketing</a>
    &nbsp; <a href="">Businesses</a>
    &nbsp; <a href="">Developers</a>
         </Typography>
</Grid>
 <Divider/>

<Grid item style={{marginTop:10}}>
<Grid container direction="row">
<Grid item xs={1} style={{marginTop: 5,marginLeft:10}}>
<ArrowDropUp/>
</Grid>
<Grid item xs={9} style={{paddingTop:0,marginTop: 5}} >
<Typography type="caption" style={{fontWeight:600,paddingTop: 15,paddingLeft: 0,paddingRight: 10,paddingBottom: 15}}                                              className="tweetStats">
&nbsp; <a href="">Advertise with Twitter</a>
</Typography></Grid></Grid></Grid>
         </Card>
</Grid></Grid></Grid>
</div>
    );
  }
}

End.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(End);