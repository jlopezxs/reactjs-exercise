import React from 'react';
import MosaicItem from './mosaicItem'

export default class MosaicBlock extends React.Component {

  render() {
  	let title = '';
  	if(this.props.obj.title) title = this.props.obj.title

  	let mosaicItems = [];
  	if(this.props.obj.elements){
  		{this.props.obj.elements.map(function(obj, i){
  			mosaicItems.push(<MosaicItem obj={obj} key={i} />)
    	})}
  	}

    return (
    	<p> {title} </p>
    	if(mosaicItems.length > 0){
    		{mosaicItems}
    	}
		
    	
	);
  }
}
