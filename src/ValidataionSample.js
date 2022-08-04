import React,{Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {

    //컴포넌트의 상태를 관리하기 위한 속성 생성
    state = { 
        password : '',
        clicked : false,
        validated : false
    }
    //이벤트 처리 함수
    //화살표 함수에서 매개변수가 1개인 경우에는 ()를 생략가능하다.  
    handleChange = e => {
        this.setState({
            password : e.target.value
        })
    }

    handleClick = e => {
        this.setState({
            clicked : true,
            validated : this.state.password === "0000"
        })
        //input 이라는 ref를 가진 DOM을 조작 
        this.input.focus();
    }

    render(){
        return(
            <div>
                <input ref = {ref => {this.input = ref} }  type="password" value={this.state.password} onChange={this.handleChange}
                className={this.state.clicked ? this.state.validated ? 'success' : 'failure' : ''}></input>
                <button onClick={this.handleClick}>검증</button>
            </div>
        )
    }
}

export default ValidationSample;
