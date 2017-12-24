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
import Favorite from 'material-ui-icons/Favorite';
import Reply from 'material-ui-icons/Reply';
import Mail from 'material-ui-icons/Mail';
import Repeat from 'material-ui-icons/Repeat';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  card: {
    maxWidth: 590,
    maxHeight: 'auto',
  },
  media: {
    height: 400,
    maxWidth: 520,
    borderRadius: 5,
    marginLeft: 70,
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

class Feed extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
<Grid container direction="column" style={{backgroundColor:"#e6ecf0",marginTop:30}}>
                <Grid>
    <Grid item>
        <Card className={classes.card} >
<Grid item xs={12}>
    <Grid container>
        <Grid>
      <Grid container direction="column">
<Grid item style={{paddingTop:20,marginLeft:20}} xs={2}>
    <Avatar
        className={classNames(classes.avatar)}
        alt="Karthik"
        src="https://lh3.googleusercontent.com/-uuiMcQcUYq4/WQiz80CaI2I/AAAAAAAAEuk/iCwJM7DOxSwJFejEvEBad6TKdAElwSfDQCEwYBhgL/w140-h139-p/DSC_0972.JPG"/> 
</Grid>
</Grid>
</Grid>         
  <Grid item style={{marginTop:10}} xs={9}>
<Grid container direction="row">
<Grid item style={{paddingBottom:0}}>
 <Typography type="body2" style={{fontWeight:600}}                                              >
               <a href="">Karthik</a>
   <span style={{fontSize:"13px",color:"grey",fontWeight:600}} > @Karthik_119 . 3h</span>

         </Typography>
   </Grid>
   </Grid>
              </Grid>
<Grid item xs={1}>
<IconButton>
              <ExpandMoreIcon />
            </IconButton>
</Grid>
</Grid></Grid>
                   

 
        <Grid item style={{paddingTop:0}}>
      <Grid container direction="column">
<Grid item style={{paddingBottom:0,marginLeft:65}}>
            <Typography type="body1" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
       </Grid>
<Grid container direction="column">
<Grid item style={{paddingBottom:0,marginLeft:30,fontSize:"12px"}}>
<CardActions disableActionSpacing>
<Grid container justify="flex-start">
         <Grid item xs={2} style={{paddingBottom:0,marginLeft:30}}>
            <IconButton className={classes.button} aria-label="Delete">
        <Reply/>
<span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">7</span>
      </IconButton>
</Grid>
<Grid item xs={2}>
<IconButton className={classes.button} aria-label="Delete">
        <Repeat />
<span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">25</span>

      </IconButton>
</Grid>
<Grid item xs={2}>
<IconButton className={classes.button} aria-label="Delete">
        <Favorite />
<span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">456</span>
      </IconButton>
</Grid>
<Grid item xs={2}>
<IconButton className={classes.button} aria-label="Delete">
        <Mail />
      </IconButton>
</Grid>

</Grid>
          </CardActions>
</Grid>
</Grid>         
 </Grid>
 </Grid>
        </Card>
</Grid></Grid>

<Grid>
<Grid item style={{paddingTop:18}}>
        <Card className={classes.card} >
<Grid item xs={12}>
    <Grid container>
        <Grid>
      <Grid container direction="column">
<Grid item style={{paddingTop:20,marginLeft:20}} xs={2}>
    <Avatar
        className={classNames(classes.avatar)}
        alt="Karthik"
        src="https://lh3.googleusercontent.com/-uuiMcQcUYq4/WQiz80CaI2I/AAAAAAAAEuk/iCwJM7DOxSwJFejEvEBad6TKdAElwSfDQCEwYBhgL/w140-h139-p/DSC_0972.JPG"/> 
</Grid>
</Grid>
</Grid>         
  <Grid item style={{marginTop:10}} xs={9}>
<Grid container direction="row">
<Grid item style={{paddingBottom:0}}>
 <Typography type="body2" style={{fontWeight:600}}                                              className="tweetStats">
               <a href="">  Karthik</a>
 <span style={{fontSize:"13px",color:"grey",fontWeight:600}} > @Karthik_119 . 3h</span>
         </Typography>
   </Grid>
   </Grid>
     </Grid>
<Grid item xs={1}>
<IconButton>
              <ExpandMoreIcon />
            </IconButton>
</Grid>
</Grid></Grid>
                   

         <Grid item style={{paddingTop:0}}>
      <Grid container direction="column">
<Grid item style={{paddingBottom:0,marginLeft:65}}>
            <Typography type="body1" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
       </Grid>
<Grid container direction="column">
<Grid item style={{paddingBottom:0,marginLeft:30,fontSize:"12px"}}>
<CardActions disableActionSpacing>
<Grid container justify="flex-start">
         <Grid item xs={2} style={{paddingBottom:0,marginLeft:30}}>
            <IconButton className={classes.button} aria-label="Delete">
        <Reply/>
<span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">7</span>
      </IconButton>
</Grid>
<Grid item xs={2}>
<IconButton className={classes.button} aria-label="Delete">
        <Repeat />
<span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">25</span>

      </IconButton>
</Grid>
<Grid item xs={2}>
<IconButton className={classes.button} aria-label="Delete">
        <Favorite />
<span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">456</span>
      </IconButton>
</Grid>
<Grid item xs={2}>
<IconButton className={classes.button} aria-label="Delete">
        <Mail />
      </IconButton>
</Grid>

</Grid>
          </CardActions>
</Grid>
</Grid>         
 </Grid>
</Grid>
        </Card>
</Grid></Grid>


<Grid>
<Grid item style={{paddingTop:18}}>
        <Card className={classes.card} >
<Grid item xs={12}>
    <Grid container>
        <Grid>
      <Grid container direction="column">
<Grid item style={{paddingTop:20,marginLeft:20}} xs={2}>
    <Avatar
        className={classNames(classes.avatar)}
        alt="Karthik"
        src="https://lh3.googleusercontent.com/-uuiMcQcUYq4/WQiz80CaI2I/AAAAAAAAEuk/iCwJM7DOxSwJFejEvEBad6TKdAElwSfDQCEwYBhgL/w140-h139-p/DSC_0972.JPG"/> 
</Grid>
</Grid>
</Grid>         
  <Grid item style={{marginTop:10}} xs={9}>
<Grid container direction="row">
<Grid item style={{paddingBottom:0}}>
 <Typography type="body2" style={{fontWeight:600}}                                              className="tweetStats">
               <a href="">  Karthik</a>
 <span style={{fontSize:"13px",color:"grey",fontWeight:600}} > @Karthik_119 . 3h</span>
         </Typography>
   </Grid>
</Grid>
              </Grid>
<Grid item xs={1}>
<IconButton>
              <ExpandMoreIcon />
            </IconButton>
</Grid>

</Grid></Grid>
                   

         <Grid item style={{paddingTop:0}}>
      <Grid container direction="column">
<Grid item style={{paddingBottom:0,marginLeft:65}}>
            <Typography type="body1">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
       </Grid>
<Grid container direction="column">
<Grid item style={{paddingBottom:0,marginLeft:30,fontSize:"12px"}}>
<CardActions disableActionSpacing>
<Grid container justify="flex-start">
         <Grid item xs={2} style={{paddingBottom:0,marginLeft:30}}>
            <IconButton className={classes.button} aria-label="Reply">
        <Reply/>
<span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">7</span>
      </IconButton>
</Grid>
<Grid item xs={2}>
<IconButton className={classes.button} aria-label="Retweet">
        <Repeat />
<span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">25</span>

      </IconButton>
</Grid>
<Grid item xs={2}>
<IconButton className={classes.button} aria-label="Like">
        <Favorite />
<span style={{fontSize:"12px",color:"grey",fontWeight:600}} className="cardAction">456</span>
      </IconButton>
</Grid>
<Grid item xs={2}>
<IconButton className={classes.button} aria-label="Message">
        <Mail />
      </IconButton>
</Grid>

</Grid>
          </CardActions>
</Grid>
</Grid>         
 </Grid>
</Grid>
        </Card>
</Grid></Grid>


</Grid>
    );
  }
}

Feed.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Feed);
