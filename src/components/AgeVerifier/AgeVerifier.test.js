import React from 'react';
import { shallow } from 'enzyme';
import { AgeVerifier } from './AgeVerifier';

describe('AgeVerifier', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AgeVerifier />);
  });
  
  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      birthdate: '',
      success: false
    });
  });
});
