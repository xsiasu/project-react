// file: src/App.js
import React, { Component } from 'react';
import PhoneForm from './component/PhoneForm';
import PhoneInfoList from './component/PhoneInfoList'

class App extends Component {
  id =2
  state = {
    information: [
      {
        id:0,
        name:'kimsohui',
        phone:'01029067834'
      },
      {
        id:1,
        name:'kimhoyoung',
        phone:'01085397834'
      }
    ],
    keyword:''
  }  

  //검색할 함수 생성
  handleChange = (e) => {
    this.setState({
      keyword:e.target.value
    })
  }
  //데이터 추가
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information : information.concat({
        id:this.id++, ...data
      })
    })
  }
  //데이터 제거
  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({

      //해당 아이디를 제회한 배열을 filtering 한다.
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information : information.map(
        info => id === info.id
          ? {...info, ...data}//if true 기존의 값과 전달받은 data 을 덮어씀//ㅅ갿
          :info //if fase 기존의 데이터값을 유지
      )
    })
  }
  render() {
    const {information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm 
          onCreate={this.handleCreate}
        />
        <p>
          <input 
            placeholder="검색할 이름을 입력하세요"
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        //handleRemove 함수를 phoneinfolist 에 전달한다.
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
