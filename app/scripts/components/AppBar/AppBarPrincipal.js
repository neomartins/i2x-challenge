import React from 'react';
import BaseComponent from '../BaseComponent';
import AppBar from 'material-ui/AppBar';
import AppBarMiddle from './AppBarMiddle';
import { translate } from 'react-i18next';
import FlatButton from 'material-ui/FlatButton';


class AppBarPrincipal extends BaseComponent{

	constructor(props) {
		super(props);
	}


	render(){
		const {t} = this.props;
		return <div>			
					<AppBar title={<AppBarMiddle renderComponents={this.props.renderComponents}/>} showMenuIconButton={false} className="appBar"/>
				</div>;
	}
}

export default translate()(AppBarPrincipal);