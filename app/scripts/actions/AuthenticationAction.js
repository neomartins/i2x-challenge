import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import * as Ajax from '../utils/WebAPIUtilsAjax';


export function getAuth(token,func){
	return Ajax.fetchUtilGetAuth('GET','ai/recording/list/', {token, token}, func);
}

export function login(email, password, func){
	return Ajax.fetchUtil('POST','core/login/', {email: email,password: password}, func);	
}



