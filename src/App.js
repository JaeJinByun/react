//import EventPractice from './EventPractice';
//import ValidationSample from './ValidataionSample';
import React,{Component} from 'react';
import ScrollBox from './ScrollBox';
import './App.css';

class App extends Component{
  
  render(){
    return(
        //<EventPractice />
        //<ValidationSample />
        <>
        <ScrollBox ref = {(ref) => this.scrollBox = ref}/>
        <button onClick={(e) => {this.scrollBox.scrollToBottom()}}>스크롤 이동</button>
        </>
    );
  }
}
export default App;
