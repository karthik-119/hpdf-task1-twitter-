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
import Photo from 'material-ui-icons/Photo';

const styles = theme => ({
  card: {
    maxWidth: 590
,height: 59,
 backgroundColor: "#FFEBEE"
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
    width: 32,
    height: 32,
  },
  flexGrow: {
    flex: '1 1 auto',
  },
tweetBar:{
        minHeight:"29px",
        display: "block",
        outline: 0,
        width: 495,
        height: 20,
        backgroundColor: "#ffffff",
        border: "none",
        borderRadius: "5px",
        fontSize: "15px",
        fontFamily:"sanserif",
        paddingTop: "20px",
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: "10px",
        transition: "border-color ease-in-out .15s, box-shadow ease-in-out .15s"
    },

});


class Tweet extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
 constructor(props){
        super(props);
        this.state={
            resize:"none",
            minHeight:"0px",
            tweetOptions:"none"
        };
        this.expandArea = this.expandArea.bind(this);
        this.shrinkArea = this.shrinkArea.bind(this);
    };
  shrinkArea(){
        this.setState({resize:"none",tweetOptions:"none",minHeight:"0px"})
    }
    expandArea(){
        this.setState({resize:"vertical",tweetOptions:"block",minHeight:"4em"})
    };


  render() {
    const { classes } = this.props;

    return (
<Grid container direction="column">
<Grid>
    <Grid item style={{marginTop:28}}>
        <Card className={classes.card} >
       <Grid item xs={12}>
<Grid container direction="row">
  <Grid item style={{paddingTop:15,marginLeft:30}}>
    <Avatar
        className={classNames(classes.avatar)}
        alt="Karthik"
        src="https://lh3.googleusercontent.com/-uuiMcQcUYq4/WQiz80CaI2I/AAAAAAAAEuk/iCwJM7DOxSwJFejEvEBad6TKdAElwSfDQCEwYBhgL/w140-h139-p/DSC_0972.JPG"/> </Grid>
<Grid style={{display:"flex",alignItems:"center"}}>
<textarea className={classes.tweetBar} placeholder="What's happening?" spellCheck="false" autoComplete="false"  style={{resize:this.state.resize,minHeight:this.state.minHeight}}                                    onFocus={this.expandArea} onBlur={this.shrinkArea}>

</textarea>
</Grid>
</Grid>      </Grid>

</Card>
</Grid></Grid>
</Grid> 
);
  }
}

Tweet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tweet);
       

