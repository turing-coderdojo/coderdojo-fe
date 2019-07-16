import React from 'react';
import { shallow } from 'enzyme';
import ConfirmAdmin from './ConfirmAdmin';

describe('ConfirmAdmin', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ConfirmAdmin />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
