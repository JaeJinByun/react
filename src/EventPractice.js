import React, {Component} from "react";

class EventPractice extends Component {

    randomNum = String(Math.floor(Math.random()*100 +1))
    score = 0

    state = {
        name : '',
        message : ''
    }
    changeNum = (e) => {
        this.randomNum = String(Math.floor(Math.random()*100 +1))
    }

    handleClick = (e) => {
        alert(this.state.name + ":" +this.state.message)
    }


    //input들의 값이 변경될 때 호출될 함수 
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleKeyPress = (e) => {
        if(e.key === "Enter") {
            if(e.target.value === this.randomNum) {
                this.changeNum()

                e.target.value = ''

                this.score++ 

                console.log(this.randomNum)
            }
            else{
                console.log("틀림")
            }
        }
    }

    render() {
        return(
            <>
                <input type="text" name="name" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>

                <input type="text" name="message" value={this.randomNum}></input>

                <button onClick={this.handleClick}>확인</button>
                <div>{this.state.name}</div>
                <div>{this.state.message}</div>
            </>
        )
    }
}

export default EventPractice;