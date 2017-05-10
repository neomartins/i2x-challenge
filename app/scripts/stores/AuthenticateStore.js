import Store from './Store';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

class AuthenticateStore extends Store {
	constructor(){
		super();
		this.user = undefined;
    }

	getUser(){
		return this.user;
	}

	setUser(user){
		this.user = user;
	}

}

let AuthenticateStoreInstance = new AuthenticateStore();

export default AuthenticateStoreInstance;