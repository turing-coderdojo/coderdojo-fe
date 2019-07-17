import React from 'react';
import { shallow } from 'enzyme';
import GuardianCard from './GuardianCard';

describe('GuardianCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GuardianCard />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
