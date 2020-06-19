import './Task.scss';
import React, { FC } from 'react';
import { TaskPropsI } from './interfaces';

export const Task: FC<TaskPropsI> = ({ backgroundColor, taskNumber, title, children }) => (
  <div className="task">
    <div
      className="task-header"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <p>{taskNumber}</p>
      <p>{title}</p>
    </div>
    <div>
      <p>sed</p>
    </div>
  </div>
);
