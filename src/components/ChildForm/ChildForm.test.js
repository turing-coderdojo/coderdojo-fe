import React from 'react';
import { shallow } from 'enzyme';
import { ChildForm } from './ChildForm';

describe('ChildForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ChildForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on change of any input field', () => {
    const mockEvent = {
      target: {
        value: 'abc',
        name: 'name'
      }
    };

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('name')).toEqual('abc');
  });

  it('should prevent default on submit', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };

    wrapper.instance().handleSubmit(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
