import React from 'react';
import BaseComponent from '../BaseComponent';
import FlatButton from 'material-ui/FlatButton';
import { translate } from 'react-i18next';
import AuthenticateStore from '../../stores/AuthenticateStore';


class AppBarMiddle extends BaseComponent{
	constructor(props) {
		super(props);
        this._bind('renderLogout');
		this.state = {};
	}

    renderLogout(){
    	AuthenticateStore.setUser(undefined);
		this.props.renderComponents();
    }


	
	render() {
    	const { t } = this.props;

		return <div>
				{t('label.project.title')}
				<div style={{float:'right'}}>
				<FlatButton label={t('label.appBar.logout')} onTouchTap={this.renderLogout}/>
				</div>
			   </div>;
	}
}
export default translate()(AppBarMiddle);