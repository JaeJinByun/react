import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

    constructor(props) {
        //상위 클래스의 생성자를 호출해서 상위 클래스의 인스턴스를 생성 
        super(props);
        this.state = {
            number : 100
        }
    }
    
    static defaultProps = {
        name : "나비", 
    }
    
    static propTypes = {
        name : PropTypes.string,
        year : PropTypes.number
    }

    render(){
        return(
            <div>
                 <p onMouseEnter={() => {
                    this.setState({
                        number:this.state.number + 1
                    })
                 }} onMouseLeave={() =>{
                    this.setState({
                        number : this.state.number + 1
                    })
                 }} onMou>숫자 : {this.state.number}</p>
                 <button onClick={() => {
                    this.setState({
                        number:this.state.number + 1
                    })
                 }}>증가</button>
                 <button onClick={()=> {
                    this.setState({
                        number:this.state.number - 1
                    })
                 }}>감소</button>
            </div>
        )
    }
}

export default MyComponent;