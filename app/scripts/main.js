import React from 'react';
import {render} from 'react-dom';
import { Router,  Route,  useRouterHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createHashHistory} from 'history';
import Login from './components/Login';
import Principal from './components/Principal'
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import AuthenticateStore from './stores/AuthenticateStore';
injectTapEventPlugin();

function requireAuth(nextState, replace){
	nextState.location.state =  {nextPathname: nextState.location.pathname, replace: replace};
	nextState.location.query['nextPathname'] = nextState.location.pathname;
	var url = '';
	if(AuthenticateStore.getUser() != undefined){
		return null;
	}
	if(AuthenticateStore.getUser() == undefined){
		url = '/login';
	}else{
		url = '/login';
	}	
	replace(nextState,url,nextState.location.query);
}

render(
	<I18nextProvider i18n={ i18n }>
	    <div>
		  <Router > 
		   <Route path="/login" component={Login} /> 
		   <Route path="/" component={Principal} onEnter={requireAuth} />
		  </Router>
		 </div>
	 </I18nextProvider>
  , document.getElementById('app'));

