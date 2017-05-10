import React from 'react';
import BaseComponent from '../BaseComponent';
import LoadingPageStore from '../../stores/LoadingPageStore'
import CircularProgress from 'material-ui/CircularProgress';
import { translate } from 'react-i18next';


class LoadingPage extends BaseComponent {

	constructor(props){
		super(props);
		this._bind('onChange');
		this.state = {loading:false,};
	}


	componentDidMount(){
    	LoadingPageStore.addChangeListener(this.onChange);
	}

	componentWillUnmount(){
	    LoadingPageStore.removeChangeListener(this.onChange);
	}

	onChange(){
	   	this.setState({loading: LoadingPageStore.getLoading()});	
	}


	render(){
		if(this.state.loading){
			return (<div className="loadingPage">
						<CircularProgress size={50}/>
					</div>)
		}
		return <div/>
	}
}

export default translate()(LoadingPage);