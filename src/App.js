import React, { Component } from 'react';
import './app.css';
import { connect } from 'react-redux';

import  { Graph, generatorID, listing}  from './Graph'
import Grid from './components/grid/Grid'
import Command from './components/command/Command'


class App extends Component {

  constructor(props) {
      super(props);
      this.Random = this.Random.bind(this);
      this.CleanField = this.CleanField.bind(this);
      this.StopGame = this.StopGame.bind(this);
      this.StartGame = this.StartGame.bind(this);
      this.Revive = this.Revive.bind(this);
      this.interval = null;
      this.state = {
          active: false,
          x: 20,
          y: 20,
          graph: new Graph(20, 20)
      }
  }

  Revive (e) {
          this.props.ADD(e.target.id)
  }

  Random () {
      this.props.Random(this.state.graph.random(this.state.columns, this.state.rows));
  }

  CleanField() {
     this.props.CLEAN();
  }

  StopGame() {
      this.setState({active: false});
      clearInterval(this.interval)
  }

  StartGame() {
      this.setState({active: true});
      this.interval = setInterval(() => {
          this.props.LIFECYCLE(this.state.graph.checkLifeCycle(this.props.MyState, this.state.allID))

      }, 300)

  }


  componentWillMount() {
      this.setState({
          rows: listing(this.state.y),
          columns: listing(this.state.y),
          allID: generatorID(this.state.y, this.state.x)
      })
  }

  render() {
    return (
      <div className="App">
        <Command  random={this.Random} cleanField={this.CleanField} stopGame={this.StopGame} startGame={this.StartGame}/>
        <Grid state={this.state} revive={this.Revive} bying={this.props.MyState}/>
      </div>
    );
  }
}

export default connect(
    state => ({
        MyState: state.being
    }),
    dispatch => ({
        Random: (randomSet) => {
            dispatch({ type: "RANDOM_BEING", payload: randomSet })
        },
        ADD: (be) => {
            dispatch({ type: "ADD_BEING", payload: be})
        },
        CLEAN: () => {
            dispatch({ type: "CLEAN"})
        },
        LIFECYCLE: (LifeArr) => {
            dispatch({type: "LIFE_CYCLE", payload: LifeArr})
        }
    })
)(App);




