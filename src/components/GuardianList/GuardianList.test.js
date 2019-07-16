import React from 'react';
import { shallow } from 'enzyme';
import GuardianList from './GuardianList';

describe('GuardianList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GuardianList />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
