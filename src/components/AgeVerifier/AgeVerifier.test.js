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

  beforeEach(() => {
    wrapper = shallow(
      <AgeVerifier
        setError={mockSetError}
        error=""
        loading={false}
      />
    );
  });
  
  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      birthdate: '',
      success: false
    });
  });
});
