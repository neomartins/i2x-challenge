import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import * as Ajax from '../utils/WebAPIUtilsAjax';
import LoadingPageStore from '../stores/LoadingPageStore';

export function loading(show){
	if (AppDispatcher.isDispatching()) {
			LoadingPageStore.setLoading(show);	
			LoadingPageStore.emitChange();
		} else {
			AppDispatcher.dispatch({
	        	type: ActionTypes.LOADING,
	        	data: show
	    	});
		}
	 
}

