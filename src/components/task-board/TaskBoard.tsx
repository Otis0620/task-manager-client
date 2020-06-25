import './TaskBoard.css';
import axios from 'axios';
import React, { Component } from 'react';
import { CreateTask } from './CreateTask';
import { SwimLane } from './SwimLane';
import { Task } from './Task';
import { TasksBoardStateI } from './interfaces';
import { swimLanes } from './data';

export class TaskBoard extends Component<{}, TasksBoardStateI> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isLoaded: false,
      swimLanes: [],
      tasks: [],
    };
    this.filterNumberOfTasksBySwimLane = this.filterNumberOfTasksBySwimLane.bind(this);
    this.isFullWidth = this.isFullWidth.bind(this);
  }

  async componentDidMount() {
    const swimLanes = await axios.get(`http://task-manager-web.test/api/swimlanes`);
    const tasks = await axios.get(`http://task-manager-web.test/api/tasks`);

    this.setState({
      isLoaded: true,
      swimLanes: [...swimLanes.data],
      tasks: [...tasks.data],
    });
  }

  filterNumberOfTasksBySwimLane() {
    const taskLengths = [];

    for (let swimlane of this.state.swimLanes) {
      taskLengths.push(
        this.state.tasks.filter((task) => {
          return task.swimlane === swimlane.title;
        }).length,
      );
    }

    return taskLengths;
  }

  isFullWidth() {
    const defaultTaskLength = 3;

    return Math.max(...this.filterNumberOfTasksBySwimLane()) <= defaultTaskLength;
  }

  render() {
    return this.state.isLoaded ? (
      <div className="task-board">
        {this.state.swimLanes.map(({ backgroundColor, title }, index) => (
          <SwimLane
            key={index}
            backgroundColor={backgroundColor}
            swimLaneTitle={title}
            isFullWidth={this.isFullWidth()}
          >
            {this.state.tasks.map(({ description, id, swimlane, title: taskTitle }, index) => {
              if (title === swimlane) {
                return (
                  <Task
                    key={index}
                    backgroundColor={backgroundColor}
                    description={description}
                    taskNumber={id}
                    taskTitle={taskTitle}
                  />
                );
              }
            })}

            <CreateTask backgroundColor={backgroundColor} swimLane={title} />
          </SwimLane>
        ))}
      </div>
    ) : (
      <span>Loading...</span>
    );
  }
}
