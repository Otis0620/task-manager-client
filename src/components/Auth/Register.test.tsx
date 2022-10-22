import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';

test('Register', () => {
  const wrapper = shallow(<Register />);

  expect(wrapper).toMatchSnapshot();
});
