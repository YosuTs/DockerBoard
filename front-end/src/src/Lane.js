import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Lane extends Component {

  render(){
    return(
      <div className="Lane flex-grow-1">Lane with tasks
        {this.props.tasks.map(task => <div>task with id {task.id}</div>)}
      </div>
    )
  }
}

export default Lane;
