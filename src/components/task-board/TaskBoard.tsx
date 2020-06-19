import './TaskBoard.css';
import React from 'react';
import Draggable from 'react-draggable';
import { SwimLane } from './SwimLane';
import { Task } from './Task';
import { CreateTask } from './CreateTask';
import { swimLanes, tasks } from './data';

export const TaskBoard = () => {
  return (
    <div className="task-board">
      {swimLanes.map(({ title, backgroundColor }, index) => (
        <SwimLane key={index} title={title} backgroundColor={backgroundColor}>
          {tasks.map(({ taskNumber, title }, index) => (
            <Task
              key={index}
              backgroundColor={backgroundColor}
              taskNumber={taskNumber}
              title={title}
            />
          ))}
          <CreateTask backgroundColor={backgroundColor} />
        </SwimLane>
      ))}
    </div>
  );
};
