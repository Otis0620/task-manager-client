import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';

test('Register', () => {
  const component = shallow(<Register />);

  expect(component).toMatchSnapshot();
});
