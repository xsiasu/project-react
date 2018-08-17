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
    //클릭하면 실행
    const {info, onRemove} = this.props;
    onRemove(info.id);

  }
  // true->false, false->true
  handleToggleEdit = () => {
    const {editing} =this.state;
    this.setState({editing : !editing});
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // editing 값이 변경되었을때 처리할 로직
    const {info, onUpdate} = this.props;
    if (!prevState.editing && this.state.editing) {
      this.setState({
        name: info.name,
        phone:info.phone
      })
    }

    if (prevState.editing && !this.state.editing) {
      // editing 값이 true -> false 로 전환될때
      onUpdate(info.id, {
        name:this.state.name,
        phone:this.state.phone
      })
    }
  }



  render() {
    const style = {
      border : '1px solid black',
      padding: '8px',
      margin: '8px'
    }


    //수정모드
    const {editing} = this.state;
    if (editing) {
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="이름"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="phone number"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>적용</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      );
    }

    // 일반모드
    const {
      name, phone, id
    } = this.props.info;

    return (
      <div style = {style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>수정</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
      );
  }
}

export default PhoneInfo;