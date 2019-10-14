import React, { Component } from 'react';
import { connect } from 'react-redux'

function App(props) {
    return(
    <div>
      <h1>Counter App</h1>
      <h2>{props.counter}</h2>
      <button onClick={() => props.add() } id='add'>+</button>
      <button onClick={() => props.subtract() } id='subtract'>-</button>
    </div>
    )
  }

  //can also take in ownProps
  const mapStateToProps = (state) => ({
    counter: state.counter
  })

  const mapDispatchToProps = (dispatch) => ({
    add: () => dispatch({type: 'ADD'}),
    subtract: () => dispatch({type: 'SUBTRACT'})
  })

export default connect(mapStateToProps, mapDispatchToProps)(App);
