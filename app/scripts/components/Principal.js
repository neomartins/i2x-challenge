 import React from 'react';
import BaseComponent from './BaseComponent';
import AppBarPrincipal from './AppBar/AppBarPrincipal';
import TextField from 'material-ui/TextField';
import AppBarMiddle from './AppBar/AppBarMiddle';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AuthenticateStore from '../stores/AuthenticateStore';
import * as AuthenticationAction from '../actions/AuthenticationAction';
import Paper from 'material-ui/Paper';
import ReactList from 'react-list';
import Music from './Musics/Music';
import main from '../main';

import LoadingPage from './Commons/LoadingPage';


export default class Principal extends BaseComponent{

  constructor(props) {
    super(props);
    this._bind('renderResutItem', 'renderComponents',);
    this.state = {results: [], components: '',logout : false};
  }

  getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
  }

  componentDidMount(){
    let self = this;
     AuthenticationAction.getAuth(AuthenticateStore.getUser(), function(data){
          console.log('data');
            if(data !== undefined && data.length > 0 ){
              self.setState({results : data});
            }
        });
  }

  renderComponents(){
    this.props.history.push('/login');
  }

 renderResutItem(index){
      return  <Music result={this.state.results} />;
    }

  render(){
    if(this.state.logout){
      return <main/>
    }else{
      return <div>      
          <AppBarPrincipal renderComponents={this.renderComponents}/>
          <div className='contentDiv'>
            <div style={{paddingTop:'5px'}}>
              <Paper zDepth={3} >
                <div>
                  {this.renderResutItem()}
                </div>
              </Paper>
            </div>
          <div>
            <LoadingPage />
          </div>
          </div>
        </div>;
    }
    
  }
}

  Principal.childContextTypes = {
        muiTheme: React.PropTypes.object.isRequired,
    };