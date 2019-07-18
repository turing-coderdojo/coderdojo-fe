import React from 'react';
import { shallow } from 'enzyme';
import ChildPreview from './ChildPreview';

describe('ChildPreview', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChildPreview />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
