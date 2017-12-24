import React , {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Tabs, { Tab } from 'material-ui/Tabs';
import {red} from 'material-ui/colors';
import Home from 'material-ui-icons/Home';
import Notifications from 'material-ui-icons/Notifications';
import Mail from 'material-ui-icons/Mail';
import TextField from 'material-ui/TextField';
import classnames from 'classnames';
import Typography from 'material-ui/Typography';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import IconButton from 'material-ui/IconButton';

const styles={
    tweetButton:{
        backgroundColor: "#F44336",
        color:"#ffffff",
        padding: 0,
        minHeight: "38px",
        border: "1px solid",
        borderRadius: 40,
        textTransform:"none",
        fontSize:"14px",
        fontWeight:600,
        height:20,
    },
searchBar: {
    borderRadius: 50,
    border:"1 px solid",
   
},
avatar: {
    width: 32,
    height: 32,
  },

};
const primary = red[500]; // #F44336
class Nav1 extends Component{
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
    handleChange = (event, value) => {
        this.setState({ value });
    };
    updateInputVal(evt){
        this.setState({
            searchString:evt.target.value
        })
    }
    render(){
                const classes = this.props.classes;
        return(
            <div>
                <AppBar position="static" style={{backgroundColor:"#ffffff",marginTop:7}}>
                    <Grid container direction="row" spacing={0}>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={9}>
                            <Tabs value={this.state.value} style={{color:primary,marginLeft:35}} indicatorColor={primary} fullWidth={false} onChange={this.handleChange}>
<Tab 
label="Top" style={{minWidth:0,textDecoration:"none",fontWeight:600,fontFamily:'calibri'}}>
</Tab>
<Tab 
label="Latest" style={{minWidth:0,textDecoration:"none",fontWeight:600,fontFamily:'calibri'}}>
</Tab>

                                <Tab label="People" style={{minWidth:0,fontWeight:600,fontFamily:'calibri'}} />
                                <Tab label="Messages" style={{minWidth:0,fontWeight:600,fontFamily:'calibri'}} />
<Tab label="Photos" style={{minWidth:0,fontWeight:600,fontFamily:'calibri'}} />
<Tab label="Videos" style={{minWidth:0,fontWeight:600,fontFamily:'calibri'}} />
<Tab label="News" style={{minWidth:0,fontWeight:600,fontFamily:'calibri'}} />
<Tab label="Broadcast" style={{minWidth:0,fontWeight:600,fontFamily:'calibri'}} />
                            </Tabs>
                        </Grid>
        <Grid item xs={1}>
            <IconButton>
                <MoreVertIcon />
              </IconButton>
         </Grid>                
   <Grid item>    

                        </Grid></Grid>
                                    </AppBar>
</div>
        )
    }
}

export default withStyles(styles)(Nav1)