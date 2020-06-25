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
    this.filterTasksBySwimLane = this.filterTasksBySwimLane.bind(this);
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

  filterTasksBySwimLane(swimlane: string) {
    return this.state.tasks.filter((task) => {
      return task.swimlane === swimlane;
    });
  }

  isFullWidth(swimlane: string) {
    const defaultTaskLength = 3;

    return this.filterTasksBySwimLane(swimlane).length < defaultTaskLength;
  }

  render() {
    return this.state.isLoaded ? (
      <div className="task-board">
        {this.state.swimLanes.map(({ title, backgroundColor }, index) => (
          <SwimLane
            key={index}
            backgroundColor={backgroundColor}
            swimLaneTitle={title}
            isFullWidth={this.isFullWidth(title)}
          >
            {this.state.tasks.map(({ swimlane, description, id, title: taskTitle }, index) => {
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
