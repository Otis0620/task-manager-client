import './CreateTask.scss';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { CreateTaskPropsI, CreateTaskStateI } from '../interfaces';
import { addTaskData } from '../../../actions/tasks';
import { SharedNewTaskT } from '../../../shared/types';

class CreateTask extends Component<CreateTaskPropsI, CreateTaskStateI> {
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

    const newTask = {
      title: this.state.taskTitle,
      description: 'new task...',
      swimlane: this.props.swimLane,
    };

    this.props.addTaskData('http://task-manager-web.test/api/tasks', newTask);
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
      <div className="task">
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

const mapDispatchToProps = (dispatch: Function) => ({
  addTaskData: (url: string, newTask: SharedNewTaskT) => dispatch(addTaskData(url, newTask)),
});

export default connect(null, mapDispatchToProps)(CreateTask);
