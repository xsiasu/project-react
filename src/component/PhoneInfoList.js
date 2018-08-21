// file : src/component/PhoneInfoList.js
import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data : [],
    onRemove: () => console.warn('onRemove is not defiend'),
    onUpdate: () => console.warn('onUpdate is not defiend')
  }
  //앱이 렌더링 될때 마다 PhoneInfoList을 렌더링 하는데 자원을 아끼기 위해 사용
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    console.log('render PhoneInfoList');
    const {data, onRemove, onUpdate} = this.props;
    const list = data.map(
      info => (
        <PhoneInfo 
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