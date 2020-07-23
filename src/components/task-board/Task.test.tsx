import React from 'react';
import { shallow } from 'enzyme';
import { Task } from './Task';

test('Task', () => {
  const wrapper = shallow(
    <Task backgroundColor="red" taskNumber={1} description="..." taskTitle="Fake Title" />,
  );

  expect(wrapper).toMatchSnapshot();
});
