import './CreateTask.scss';
import React, { Component } from 'react';
import { CreateTaskPropsI, CreateTaskStateI } from './interfaces';

export class CreateTask extends Component<CreateTaskPropsI, CreateTaskStateI> {
  constructor(props: CreateTaskPropsI) {
    super(props);

    this.state = {
      isExpanded: false,
      taskTitle: '',
    };

    this.addTask = this.addTask.bind(this);
    this.cancelTask = this.cancelTask.bind(this);
    this.setIsExpanded = this.setIsExpanded.bind(this);
    this.setTaskTitle = this.setTaskTitle.bind(this);
  }

  addTask() {
    this.resetTaskTitle();
    this.setIsExpanded(false);
  }
  cancelTask() {
    this.setIsExpanded(false);
    this.resetTaskTitle();
  }

  resetTaskTitle() {
    this.setState({ taskTitle: '' });
  }

  setIsExpanded(isExpanded: boolean) {
    this.setState({ isExpanded });
  }

  setTaskTitle(taskTitle: string) {
    this.setState({ taskTitle });
  }

  render() {
    return (
      <div className="task" style={{}}>
        <div
          className="task-header"
          style={{
            backgroundColor: this.props.backgroundColor,
            height: '15px',
          }}
        ></div>
        <div>
          <i
            onClick={() => this.setIsExpanded(true)}
            className={`${this.state.isExpanded ? 'hide' : ''} create-task-icon fa fa-plus`}
          ></i>
          <div className={`${this.state.isExpanded ? 'show' : 'hide'} create-task`}>
            <input
              className="create-task-input"
              ref={(input) => input?.focus()}
              onChange={(event) => this.setTaskTitle(event.target.value)}
              value={this.state.taskTitle}
            />

            <i className="create-task-icon fa fa-check" onClick={this.addTask}></i>

            <i
              className="create-task-icon fa fa-times"
              style={{ color: 'red', paddingRight: '5px' }}
              onClick={this.cancelTask}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}
