import React, {Component} from 'react';

class ScrollBox extends Component {

    scrollToBottom = () => {
        //스크롤의 크기 와 클라이언트의 크기 
        const {scrollHeight, clientHeight} = this.box;
        //스크롤 바의 위치를 스크롤 영역에서 뷰 영역을 뺀 만큼 이동
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render(){
        const style = {
            border : "1px soild black",
            height : "300px",
            width  : "300px",
            overflow : "auto",
            position : "relative"
        }
        const innerStyle = {
            width : "100%",
            height : "650px",
            background : "linear-gradient(white,black)",
        } 
        return(
            <div style={style} ref={ref => {this.box = ref}}>
                <div style={innerStyle}></div>
            </div>
        )
    }    
}

export default ScrollBox