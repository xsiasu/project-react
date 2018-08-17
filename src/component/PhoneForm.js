import React, {Component} from 'react';

class PhoneForm extends Component {
  state = {
    name:'',
    phone:''
  }
  handleChange = (e) => {
    this.setState({
      //이벤트 입력값을 name 값을 통해서 가져온다
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    //페이지 리로딩 방지
    e.preventDefault();
    this.props.onCreate(this.state)
    // 상태 초기화
    this.setState({
      name:'',
      phone:''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />

        <input
          placeholder="phone number"
          value= {this.state.phone}
          onChange= {this.handleChange}
          name="phone"
        />
        <div>{this.state.name}{this.state.phone}</div>
        <button type="submit">reg</button>
      </form>

      )
  }
}

export default PhoneForm;