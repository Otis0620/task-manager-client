import { CreateTaskPropsI, CreateTaskStateI } from './interfaces';

export const swimLanes = [
  {
    id: 1,
    title: 'Backlog',
    backgroundColor: '#33A97C',
  },
  {
    title: 'Todo',
    backgroundColor: '#5B8CF4',
  },
  {
    title: 'In-Progress',
    backgroundColor: '#FF9523',
  },
  {
    title: 'Complete',
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
