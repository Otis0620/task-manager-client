import './Task.scss';
import React, { FC } from 'react';
import { TaskPropsI } from './interfaces';

export const Task: FC<TaskPropsI> = ({ backgroundColor, description, taskNumber, taskTitle }) => (
  <div className="task">
    <div className="task-header" style={{ backgroundColor: backgroundColor }}>
      <p>{taskNumber}</p>

      <p>{taskTitle}</p>
    </div>

    <div>
      <p>{description}</p>
    </div>
  </div>
);
