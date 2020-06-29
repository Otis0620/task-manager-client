import './TaskBoard.css';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import CreateTask from '../CreateTask';
import { DispatchI, GlobalStateI, TasksBoardPropsI } from '../interfaces';
import { getSwimLanesData } from '../../../actions/swim-lanes';
import { getTaskData } from '../../../actions/tasks';
import { SwimLane } from '../SwimLane';
import { Task } from '../Task';

class TaskBoard extends Component<TasksBoardPropsI, {}> {
  componentDidMount() {
    this.props.getSwimLanesData(`http://task-manager-web.test/api/swimlanes`);
    this.props.getTaskData(`http://task-manager-web.test/api/tasks`);
  }

  render() {
    return !this.props.isLoading ? (
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
      <span>Loading...</span>
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
  getSwimLanesData: (url: string) => dispatch(getSwimLanesData(url)),
  getTaskData: (url: string) => dispatch(getTaskData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);
