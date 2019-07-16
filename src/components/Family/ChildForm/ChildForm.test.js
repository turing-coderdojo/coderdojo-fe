import React from 'react';
import { shallow } from 'enzyme';
import ChildForm from './ChildForm';

describe('ChildForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChildForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
