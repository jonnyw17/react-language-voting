import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions';
import './App.css';

// Components
import Nav from './components/Nav/Nav';
import Results from './components/Results/Results';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.store = this.props.store
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="jumbotron">
          <h2>What is your favorite front-end framework in 2018?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row flex-container">
            <div className="col-xs-offset-3 col-xs-2">
              <img src="angular_logo.png" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div>
            <div className="col-xs-2">
              <img src="react_logo.png" className="middle-logo" height="96" alt="Angular" onClick={this.handleVoteReact}></img>
            </div>
            <div className="col-xs-2">
              <img src="vuejs_logo.png" height="96" alt="Angular" onClick={this.handleVoteVuejs}></img>
            </div>
          </div>
          <hr />
          <Results store={this.store}/>
        </div>
      </div>
    );
  }
}

export default App;
