import React from 'react';
import { shallow } from 'enzyme';
import { SwimLane } from './SwimLane';

test('SwimLane', () => {
  const wrapper = shallow(<SwimLane backgroundColor="red" swimLaneTitle="Backlog" />);

  expect(wrapper).toMatchSnapshot();
});
