import React, { Component } from 'react';

import './results.css'

class Results extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store;
  }

  votesAngularInPercent() {
    if (this.store.getState().angular) {
      return (this.store.getState().angular / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100
    } else {
      return 0
    }
  }

  votesReactInPercent() {
    if (this.store.getState().react) {
      return (this.store.getState().react / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100
    } else {
      return 0
    }
  }

  votesVuejsInPercent() {
    if (this.store.getState().vuejs) {
      return (this.store.getState().vuejs / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100
    } else {
      return 0
    }
  }

  votesAngularInPercentStyle() {
    return {
      width: this.votesAngularInPercent() + '%'
    }
  }

  votesReactInPercentStyle() {
    return {
      width: this.votesReactInPercent() + '%'
    }
  }

  votesVuejsInPercentStyle() {
    return {
      width: this.votesVuejsInPercent() + '%'
    }
  }

  render() {
    return (
      <div className="results-container">
        <h6 className="angular-label">Angular: {this.votesAngularInPercent().toFixed(2) + '%'}</h6>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-danger" style={this.votesAngularInPercentStyle()}>
          </div>
        </div>
        <h6 className="angular-label">React: {this.votesReactInPercent().toFixed(2) + '%'}</h6>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-info" style={this.votesReactInPercentStyle()}>
          </div>
        </div>
        <h6 className="angular-label">Vue.js: {this.votesVuejsInPercent().toFixed(2) + '%'}</h6>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-success" style={this.votesVuejsInPercentStyle()}>
          </div>
        </div>
      </div>
    )
  }
}
export default Results;
