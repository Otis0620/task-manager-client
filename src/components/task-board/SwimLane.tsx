import './SwimLane.css';
import React, { FC } from 'react';
import { SwimLanePropsI } from './interfaces';

export const SwimLane: FC<SwimLanePropsI> = ({
  backgroundColor,
  isFullWidth,
  swimLaneTitle,
  children,
}) => (
  <div className={`${isFullWidth ? 'full-width' : ''} swimLane`}>
    <div className="swimLane-title" style={{ backgroundColor: backgroundColor }}>
      <p>{swimLaneTitle}</p>
    </div>

    {children}
  </div>
);
