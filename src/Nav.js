import React , {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Tabs, { Tab } from 'material-ui/Tabs';
import {red} from 'material-ui/colors';
import TextField from 'material-ui/TextField';
import classnames from 'classnames';
import Typography from 'material-ui/Typography';
import {Redirect} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
 


const styles={
    tweetButton:{
        backgroundColor: "#FF0000",
        color:"#ffffff",
        padding: 0,
        minHeight: "33px",
        minWidth:"73px",
        border: "1px solid",
        borderRadius: 50,
        textTransform:"none",
        fontSize:"14px",
        marginTop:4,
        fontWeight:600,
    },
searchBar: {
    backgroundColor: "#f5f8fa",
    borderRadius: "41px",
    border: "1px solid #e6ecf0",
    minHeight:"25px",
    minWidth:"210px",
},
input: {
    backgroundColor: "#f5f8fa",
    border: "1px solid #f5f8fa",
    borderRadius: "21px",
    minHeight:"25px",
    minWidth:"180px",
},

avatar: {
    width: 32,
    height: 32,marginTop:4,
  },
   root:{
     backgroundColor:"#e6ecf0",
     maxWidth: "auto",
     flexGrow: 1,
    },
};
const primary = red[500]; // #F44336
class Nav extends Component{
    constructor(props){
        super(props);
        this.state ={
            value: 0,
            searchString:'',
            redirect:false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchIt = this.searchIt.bind(this);
    }
    searchIt = (event)=>{
        let code = event.keyCode || event.which;
        if(code===13){
            // console.log(this.state.searchString);
            this.setState({redirect:true})
        }
    };
    state = {
    value: 0,
       };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    updateInputVal(evt){
        this.setState({
            searchString:evt.target.value
        })
    }
    render(){
               if(this.state.redirect){
            return <Redirect push to={{
                pathname:"/Search",
                state:{string:this.state.searchString}
            }}/>;
        }

                const classes = this.props.classes;
                 const { value } = this.state;
        return(
            <div className= "pos">
                <AppBar position="static" style={{backgroundColor:"#ffffff"}}>
                    <Grid container direction="row" spacing={0}>
<Grid item xs={1}>
</Grid>
     <Grid item style={{marginLeft:40}}>
       <Tabs value={this.state.value} style={{color:primary}} indicatorColor={primary} fullWidth={false} onChange={this.handleChange}>
<Tab 
label="Home" style={{minWidth:0,textDecoration:"none",fontWeight:600,fontFamily:'calibri'}}>
</Tab>
<Tab 
label="Moments" style={{minWidth:0,textDecoration:"none",fontWeight:600,fontFamily:'calibri'}}>
</Tab>
 <Tab label="Notifications" style={{minWidth:0,fontWeight:600,fontFamily:'calibri'}} />  <Tab label="Messages" style={{minWidth:0,fontWeight:600,fontFamily:'calibri'}} />
      </Tabs>
</Grid>

  <Grid item  xs={2} style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:50}}>


                            <i className="fa fa-twitter" style={{color:"#1da1f2",fontSize:"22px"}}/>

 </Grid> 
<Grid item  xs={2} style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:70}}>
<form className={classes.searchBar}>
      <input type="text" placeholder=" Search Twitter"             className={classes.input} spellCheck="false" autoComplete="false" contentEditable="false" onKeyPress={this.searchIt} onChange={evt=>this.updateInputVal(evt)}/>
     <span 
style={{color:"grey",backgroundColor: "#f5f8fa"
}} className="fa fa-search" aria-hidden="true">
</span>
</form>
</Grid> 
 <Grid item  xs={1} style={{marginTop:5,marginBottom:5,marginLeft:0}}>
<Grid container direction="row">
<Grid item>
    <Avatar   style={styles.avatar}                            
src="https://lh3.googleusercontent.com/-uuiMcQcUYq4/WQiz80CaI2I/AAAAAAAAEuk/iCwJM7DOxSwJFejEvEBad6TKdAElwSfDQCEwYBhgL/w140-h139-p/DSC_0972.JPG"
          size={25}>
 </Avatar> 
</Grid>
<Grid item>    
<Button  color="primary" className={classes.tweetButton}>
                                Tweet
                            </Button>
                        </Grid></Grid>
                    </Grid></Grid>
                </AppBar>


            </div>
        )
    }
}

export default withStyles(styles)(Nav)
