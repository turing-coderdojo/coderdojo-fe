import React from 'react';
import { shallow } from 'enzyme';
import { Family } from './Family';

describe('Family', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Family />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
