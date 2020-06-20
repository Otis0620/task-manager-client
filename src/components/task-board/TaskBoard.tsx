import './TaskBoard.css';
import React, { Component } from 'react';
import { CreateTask } from './CreateTask';
import { SwimLane } from './SwimLane';
import { swimLanes } from './data';
import { Task } from './Task';
import { TasksBoardStateI } from './interfaces';

export class TaskBoard extends Component<{}, TasksBoardStateI> {
  constructor(props: any) {
    super(props);

    this.state = {
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(task: { taskNumber: string; taskTitle: string; swimLane: string }) {
    this.setState({ tasks: [...this.state.tasks, task] });
  }

  render() {
    return (
      <div className="task-board">
        {swimLanes.map(({ swimLaneTitle, backgroundColor }, index) => (
          <SwimLane key={index} swimLaneTitle={swimLaneTitle} backgroundColor={backgroundColor}>
            {this.state.tasks.map(({ taskNumber, taskTitle, swimLane }, index) => {
              if (swimLaneTitle === swimLane) {
                return (
                  <Task
                    key={index}
                    backgroundColor={backgroundColor}
                    taskNumber={taskNumber}
                    taskTitle={taskTitle}
                  />
                );
              }
            })}
            <CreateTask
              backgroundColor={backgroundColor}
              addTask={this.addTask}
              swimLane={swimLaneTitle}
            />
          </SwimLane>
        ))}
      </div>
    );
  }
}
