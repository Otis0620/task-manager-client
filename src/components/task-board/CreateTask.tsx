import './CreateTask.scss';
import React, { FC, useState } from 'react';
import { CreateTaskPropsI } from './interfaces';

export const CreateTask: FC<CreateTaskPropsI> = ({ backgroundColor }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className={`${expand ? 'expand' : 'collapse'} task`}>
      <div
        className="task-header"
        style={{
          backgroundColor: backgroundColor,
          height: '15px',
        }}
      ></div>
      <div>
        <i onClick={() => setExpand(!expand)} className="create-task-icon fa fa-plus"></i>
      </div>
    </div>
  );
};
