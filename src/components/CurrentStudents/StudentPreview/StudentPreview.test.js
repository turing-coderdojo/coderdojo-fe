import React from 'react';
import StudentPreview from './StudentPreview';
import { shallow } from 'enzyme';

describe('StudentPreview', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< StudentPreview /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})