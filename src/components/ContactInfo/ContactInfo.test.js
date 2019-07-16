import React from 'react';
import { shallow } from 'enzyme';
import ContactInfo from './ContactInfo';

describe('ContactInfo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ContactInfo />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
