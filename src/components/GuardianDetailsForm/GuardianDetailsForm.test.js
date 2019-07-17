import React from 'react';
import { shallow } from 'enzyme';
import GuardianDetailsForm from './GuardianDetailsForm';

describe('GuardianDetailsForm', () => {
  let wrapper;
  const mockHandleSubmit = jest.fn();
  const mockHandleChange = jest.fn();
  const mockInputChange = {
    target: {
      name: 'email',
      value: 'nim@sum.com'
    }
  }

  beforeEach(() => {
    wrapper = shallow(
      <GuardianDetailsForm
        handleSubmit={mockHandleSubmit}
        handleChange={mockHandleChange}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should send name and value to handleChange props on input change', () => {
    wrapper.find('input#email-input').simulate('change', mockInputChange);
    const { name, value } = mockInputChange.target;
    expect(mockHandleChange).toHaveBeenCalledWith(name, value);
  });

  it('should invoke handleSubmit prop on form submit', () => {
    wrapper.find('form.GuardianDetailsForm').simulate('submit');
    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
  });
});
