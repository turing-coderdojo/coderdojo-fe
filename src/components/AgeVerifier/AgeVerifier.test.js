import React from 'react';
import { shallow } from 'enzyme';
import { AgeVerifier } from './AgeVerifier';

describe('AgeVerifier', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AgeVerifier />);
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});