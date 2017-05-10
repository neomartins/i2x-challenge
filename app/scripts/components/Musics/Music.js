import React from 'react';
import BaseComponent from '../BaseComponent';
import { translate } from 'react-i18next';
import Divider from 'material-ui/Divider';
import ReactAudioPlayer from 'react-audio-player';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';

const style = {
  width: 800,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};



class Music extends BaseComponent {
    constructor(props){
        super(props);
        this._bind();
        this.state = {results : []};
    }

    componentWillReceiveProps(nextProps){
         let self = this;
         if(nextProps.result != undefined){
             self.setState({results : nextProps.result})
         }
    }

    

    render(){
    const { t } = this.props;
        if(this.state.results.length > 0){
              return  <div style={{left: '20%', position: 'absolute'}}>   
                          {this.state.results.map((result, index) =>
                            <Paper zDepth={4} style={style}> 
                               {t('label.music.rating')}
                              <div style={{fontSize: 26}}>
                               <StarRatingComponent 
                                  name="rate2" 
                                  editing={false}
                                  starCount={5}
                                  value={result.rating} />
                              </div>  
                               <div>
                               {t('label.music.date')}
                               {moment(result.created, 'YYYY-MM-DDTHH:mm:ss.SSSSZ').format('YYYY/MM/DD HH:mm:ss').toString()}
                              </div>
                              <ReactAudioPlayer src={result.url} />
                              <Divider />
                              <div>
                                {result.final_script}
                              </div>
                              <Divider />
                            </Paper>
                            )
                          }
                         
                     </div>
              
           }else{
            return <div/>
           }
		    }
}
export default translate()(Music);