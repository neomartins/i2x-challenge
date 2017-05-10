import React from 'react';
import BaseComponent from './BaseComponent';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { translate } from 'react-i18next';
import * as AuthenticationAction from '../actions/AuthenticationAction';
import { Router,  Route,  useRouterHistory } from 'react-router';
import AuthenticateStore from '../stores/AuthenticateStore';
import Paper from 'material-ui/Paper';
import CircularProgress  from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import * as LoadingPageAction from '../actions/LoadingPageAction';

class Login extends BaseComponent{

  constructor(props) {
    super(props);
    this.state = {disabled: false, error: false, username: '', password: ''};
    this._bind('handleChangeUser', 'handleChangePassword', 'login');
  }

  getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
  }

  componentWillReceiveProps(nextProps){
    let self = this;
  }

  handleChangeUser(event) {
       this.setState({
          username: event.target.value
        });
    }

  handleChangePassword(event) {
       this.setState({
          password: event.target.value
        });
    }    

    login(){
      let self = this;
      let username = this.state.username;
      let password = this.state.password;
      this.setState({disabled: true});
      if(username !== '' && password !== ''){
        AuthenticationAction.login(username, password, function(data){
          console.log('data');
            if(data !== undefined && data.token !== undefined ){
              console.log('user ok');
             AuthenticateStore.setUser(data.token);
              const { location } = self.props;
                self.props.history.push('/');
                self.setState({disabled: false});
            }else{
              AuthenticateStore.setUser(undefined)
              console.log('user falied');
              self.setState({error: true, disabled: false});
            }
        });
      }
    }



  render(){
    const { t } = this.props;

   let messageError = this.state.error ? (<h3>{t('label.login.invalid')}</h3>) : '';
   let buttonOrProgress = !this.state.disabled ? <RaisedButton label="Login" primary={true} onTouchTap={this.login} disabled={this.state.disabled} style={{marginTop: 32}}/> : <CircularProgress />;
   
    return <div>      
            <div>
            <Paper zDepth={1} rounded={true} circle={false} style={{width:'500px',margin:'auto', marginTop:'60px', textAlign:'center', padding: 30}}>
              <form>
                  <TextField ref="login" floatingLabelText={t('label.login.user')} onChange={this.handleChangeUser}/><br/>
                  <TextField ref="password" floatingLabelText={t('label.login.password')} type="password" onChange={this.handleChangePassword}/><br/>
                  {buttonOrProgress}
                  {messageError}
              </form>
            </Paper>
            </div>
        </div>;
  }
}

export default translate()(Login);

  Login.childContextTypes = {
        muiTheme: React.PropTypes.object.isRequired,
    };