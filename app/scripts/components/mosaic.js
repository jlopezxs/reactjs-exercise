import React from 'react';
import MosaicBlock from './mosaicBlock'

export default class Mosaic extends React.Component {

  render() {
    let items = this.props.items.data
    let keys = Object.keys(items)
    let renderItems = []

    {keys.map(function(key, i){
      let item = items[key]
      renderItems.push(<MosaicBlock obj={item} key={i}/>)
    })}

    return (
      <div>
        {renderItems}
      </div>
    )
  }
}
