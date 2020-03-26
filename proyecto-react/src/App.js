import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//function Hello (props) {
//    return <h2>{props.title}</h2>
//}

class Hello extends Component{
    render(){
        return <h2>{this.props.title}</h2>
    }
}

class Text extends Component{
    render(){
        return(
        <div>
            <p>{this.props.Text}</p>
            <p>{this.props.number}</p>
            <p>{this.props.boolean}</p>
        </div>
        )
         
    }
}

function App() {
    return (
        <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <Hello title= "Hello from props"/>
        <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React 
        </a>
        </header> <
        /div>
    );
}

export default App;