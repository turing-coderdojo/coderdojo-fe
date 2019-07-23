import React from 'react';
import { shallow } from 'enzyme';
import { ChildForm, mapStateToProps, mapDispatchToProps } from './ChildForm';
import * as actions from '../../actions';
import requests from '../../utils/requests/requests';

jest.mock('../../actions');
jest.mock('../../utils/requests/requests');

describe('ChildForm', () => {
  let wrapper;
  const mockSetError = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <ChildForm 
        setError={mockSetError}
        error=""
        loading={false}
      />
    );
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      name: '',
      username: '',
      password: '',
      password2: '',
      dob: '',
      success: false
    });
  });

  describe('handleChange', () => {
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
  });

  describe('handleSubmit', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };

    it('should prevent default on submit', () => {
      wrapper.instance().handleSubmit(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
  });

  describe('registerStudent', () => {
    it('should create a student in the db', async () => {
      wrapper.setState({
        name: 'Jude Bacher',
        username: 'jude',
        password: 'password',
        dob: '01/23/18'
      });

      await wrapper.instance().registerStudent();

      expect(requests.createStudent).toHaveBeenCalled();
    });
  });
  
  describe('checkAllFields', () => {
    it('should set an error if a field is empty', () => {
      wrapper.setState({
        name: '',
        username: 'judebacher',
        password: 'password',
        password2: 'password',
        dob: '1/23/18'
      });

      const error = wrapper.instance().checkAllFields();

      expect(mockSetError).toHaveBeenCalledWith('All fields must be filled.');

      expect(error).toEqual(true);
    });

    it('should return false if there is no error', () => {
      wrapper.setState({
        name: 'Jude Bacher',
        username: 'judebacher',
        password: 'password',
        password2: 'password',
        dob: '1/23/18'
      });

      const error = wrapper.instance().checkAllFields();

      expect(error).toEqual(false);
    });
  });

  describe('checkPasswords', () => {
    it('should set an error if the passwords do not match', () => {
      wrapper.setState({
        name: 'Jude Bacher',
        username: 'judebacher',
        password: 'password',
        password2: 'cats',
        dob: '1/23/18'
      });

      const error = wrapper.instance().checkPasswords();

      expect(mockSetError).toHaveBeenCalledWith('Passwords must match.');

      expect(error).toEqual(true);
    });

    it('should return false if the passwords do match', () => {
      wrapper.setState({
        name: 'Jude Bacher',
        username: 'judebacher',
        password: 'password',
        password2: 'password',
        dob: '1/23/18'
      });

      const error = wrapper.instance().checkPasswords();

      expect(error).toEqual(false);
    });
  });

  describe('mapStateToProps', () => {
    const state = {
      error: '',
      loading: false
    };
    
    const { error } = mapStateToProps(state);

    expect(error).toEqual(state.error);
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with setError', () => {
      const error = 'There was an error';
      const action = actions.setError(error);
      const dispatch = jest.fn();
      
      mapDispatchToProps(dispatch).setError(error);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
