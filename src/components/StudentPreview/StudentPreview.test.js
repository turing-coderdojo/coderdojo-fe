import React from 'react';
import { shallow } from 'enzyme';
import StudentPreview from './StudentPreview';

describe('StudentPreview', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StudentPreview />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
