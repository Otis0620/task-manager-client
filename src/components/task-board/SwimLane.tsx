import './SwimLane.css';
import React, { FC } from 'react';
import { SwimLanePropsI } from './interfaces';

export const SwimLane: FC<SwimLanePropsI> = ({ backgroundColor, swimLaneTitle, children }) => (
  <div className={`swimLane`}>
    <div className="swimLane-title" style={{ backgroundColor: backgroundColor }}>
      <p>{swimLaneTitle}</p>
    </div>

    {children}
  </div>
);
