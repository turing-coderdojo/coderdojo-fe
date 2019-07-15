import React from 'react';
import ConfirmAdmin from './ConfirmAdmin';
import { shallow } from 'enzyme';

describe('ConfirmAdmin', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< ConfirmAdmin /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})