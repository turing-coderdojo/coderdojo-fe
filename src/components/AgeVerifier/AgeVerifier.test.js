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
  const mockStudent = {
    fullName: 'Finn',
    username: 'finn1',
    password: 'password'
  };
  const mockedDate = new Date(2019, 7, 24);
  const originalDate = Date;
  
  global.Date = jest.fn(() => mockedDate);
  global.Date.setDate = originalDate.setDate;

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

  it('createstudent should add a student in the DB ', async () => {
    await wrapper.instance().createStudent();

    expect(requests.createStudent).toHaveBeenCalled();
  });

  it('signIn should sign in a student', async () => {
    await wrapper.instance().signIn();

    expect(requests.signIn).toHaveBeenCalled();
  });

  it('should create a student in the db ', async () => {
    wrapper.setState({
      birthdate: '08/17/19',
      successs: false
    });

    await wrapper.instance().createStudent();

    expect(requests.createStudent).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with setError', () => {
      const error = 'Something went wrong';
      const action = actions.setError(error);
      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).setError(error);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
    it('should call addUser with a student', () => {
      const action = actions.addUser(mockStudent);
      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).addUser(mockStudent);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
  describe('mapStateToProps', () => {
    it('should MSTP', () => {
      const state = {
        error: '',
        loading: false
      };

      const { error } = mapStateToProps(state);

      expect(error).toEqual(state.error);
    });
  }); 
});
