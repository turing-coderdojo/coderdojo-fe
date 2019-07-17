import React from 'react';
import { shallow } from 'enzyme';
import GuardianDetailsForm from './GuardianDetailsForm';

describe('GuardianDetailsForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GuardianDetailsForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
