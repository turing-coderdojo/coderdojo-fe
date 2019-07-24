import React from 'react';
import { shallow } from 'enzyme';
import StudentPreview from './StudentPreview';

describe('StudentPreview', () => {
  let student;
  let wrapper;

  beforeEach(() => {
    student = {
      name: 'Jude Bacher',
      username: 'judebacher',
      id: 1
    };
    wrapper = shallow(
      <StudentPreview student={student} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
