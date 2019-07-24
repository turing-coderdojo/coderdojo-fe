import React from 'react';
import { shallow } from 'enzyme';
import { AgeVerifier, mapStateToProps, mapDispatchToProps } from './AgeVerifier';
import * as actions from '../../actions';
import requests from '../../utils/requests/requests';

jest.mock('../../actions');
jest.mock('../../utils/requests/requests');

describe('AgeVerifier', () => {
  let wrapper;
  const mockSetError = jest.fn();
  const mockSubmitEvent = {
    preventDefault: jest.fn()
  };

  const mockStudent = {
    fullName: 'Finn',
    username: 'finn1',
    password: 'password'
  };

  beforeEach(() => {
    wrapper = shallow(
      <AgeVerifier
        setError={mockSetError}
        error=""
        loading={false}
        mockStudent={mockStudent}
      />
    );
  });
  
  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      birthdate: '',
      success: false
    });
  });

  it('should be able to handle submit', () => {
    wrapper.instance().handleSubmit(mockSubmitEvent);
    expect(mockSubmitEvent.preventDefault).toHaveBeenCalled();
  });

  it('should create ')
});
