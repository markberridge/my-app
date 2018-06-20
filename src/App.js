import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends Component {
    render() {
        return (
            <div id="main">
                <Header/>
                <Welcome name="Mark"/>
                <Footer/>
            </div>
        );
    }
}


class Token extends Component {
    render() {
        return (
            <div>
                <form name="access_token" action="#">
                    <label for="token">Token: </label>
                    <input type="text" name="token"/><br/>
                </form>
            </div>
        );
    }
}


const menu = ['One', 'Two', 'Three'];
const h1List = menu.map((h1) =>
    <li>{h1}</li>
);

class Header extends Component {

    render() {
        return (
            <div>
                <Token/>
                <ul>{h1List}</ul>
            </div>
        );
    }
}


class Welcome extends Component {
    render() {
        return (
            <h3>Hello, {this.props.name}</h3>
        );
    }
}


class Footer extends Component {
    render() {
        return (
            <div>This is a footer. <Clock /></div>
        );
    }
}


class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <span>{this.state.date.toLocaleTimeString()}</span>
        );
    }
}

export default App;
