// file : src/component/PhoneInfoList.js
import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    list : [],
    onRemove: () => console.warn('onRemove is not defiend'),
    onUpdate: () => console.warn('onUpdate is not defiend')
  }

  render() {
    const {data, onRemove} = this.props;
    const list = data.map(
      info => (<PhoneInfo 
        key={info.id} 
        info={info}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />)
    );
    return (
      <div>{list}</div>
    );
  }
}

export default PhoneInfoList;


