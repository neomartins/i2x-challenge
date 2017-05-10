import Store from './Store';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

class LoadingPageStore extends Store {
	constructor(){
		super();
		this.loading = false;
	}

	getLoading(){
		return this.loading;
	}

	setLoading(loading){
		this.loading = loading;
	}

}

let LoadingPageStoreInstance = new LoadingPageStore();

LoadingPageStore.dispatcheToken = AppDispatcher.register(
	action =>{
		switch(action.type){
			case (ActionTypes.LOADING):
			if(action.data != undefined){
				LoadingPageStoreInstance.setLoading(action.data);
			}
			LoadingPageStoreInstance.emitChange();
			break;
			default:
			break;
		}
	}
	);

export default LoadingPageStoreInstance;