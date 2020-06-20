import { CreateTaskPropsI, CreateTaskStateI } from './interfaces';

export const swimLanes = [
  {
    swimLaneTitle: 'Backlog',
    backgroundColor: '#33A97C',
  },
  {
    swimLaneTitle: 'Todo',
    backgroundColor: '#5B8CF4',
  },
  {
    swimLaneTitle: 'In-Progress',
    backgroundColor: '#FF9523',
  },
  {
    swimLaneTitle: 'Complete',
    backgroundColor: '#FFCC00',
  },
];

export const tasks = [
  {
    taskNumber: '1',
    taskTitle: 'Hello World sdfdsfsdf sdfsdf sdflds sdflk',
    swimLane: 'Backlog',
  },
  {
    taskNumber: '2',
    taskTitle: 'Hello World sfsdfsdf',
    swimLane: 'In-Progress',
  },
];
