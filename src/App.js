import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { changeColor } from './actions/quoteActions'
import QuoteBox from './component/quoteBox'
import { CSSTransitionGroup } from 'react-transition-group'

class App extends Component {

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.props.color || 'white'}}>
        <QuoteBox />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  color: state.changeColor.color
})


App.propTypes = {
  color: PropTypes.string.isRequired
};

export default connect(mapStateToProps, null)(App);

