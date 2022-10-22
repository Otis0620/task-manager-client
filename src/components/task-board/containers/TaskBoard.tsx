/* eslint-disable array-callback-return */
/* eslint-disable multiline-ternary */
import './TaskBoard.scss';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import CreateTask from './CreateTask';
import { DispatchI, GlobalStateI, TasksBoardPropsI } from '../interfaces';
import { getSwimLanesData } from '../../../actions/swim-lanes';
import { getTaskData } from '../../../actions/tasks';
import { SwimLane } from '../SwimLane';
import { Task } from '../Task';

class TaskBoard extends Component<TasksBoardPropsI, {}> {
  componentDidMount() {
    this.props.getSwimLanesData();
    this.props.getTaskData();
  }

  render() {
    return !this.props.isLoading || !this.props.hasErrored ? (
      <div className="task-board">
        {this.props.swimLanes.map(({ backgroundColor, title }, index) => (
          <SwimLane key={index} backgroundColor={backgroundColor} swimLaneTitle={title}>
            {this.props.tasks.map(({ description, id, swimlane, title: taskTitle }, index) => {
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
      <div>
        <span>Loading...</span>
      </div>
    );
  }
}

const mapStateToProps = ({ swimLanes, hasErrored, isLoading, tasks }: GlobalStateI) => {
  return {
    swimLanes,
    hasErrored,
    isLoading,
    tasks,
  };
};

const mapDispatchToProps = (dispatch: Function): DispatchI => ({
  getSwimLanesData: () => dispatch(getSwimLanesData()),
  getTaskData: () => dispatch(getTaskData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);
