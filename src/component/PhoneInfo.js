// file: src/component/PhoneInfo.js
import React, {Component} from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name:'이름',
      phone:'010-000-0000',
      id:0
    }
  }

  state = {
    //초기 설정
    editing:false,
    name:'',
    phone:''
  }

  handleRemove = () => {

    const {info, onRemove} = this.state;
    onRemove(info.id);

  }

  handleToggleEdit = () => {
    const {editing} =this.state;
    this.setStage({editing : !editing});
  }

  handleChange = () => {
    const {name, value} = e.target;
    this.setStage({
      [name]:value
    })
  }

  render() {
    const style = {
      border : '1px solid black',
      padding: '8px',
      margin: '8px'
    }

    const {
      name, phone, id
    } = this.props.info;

    return (
      <div style = {style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
      </div>
      );
  }
}

export default PhoneInfo;