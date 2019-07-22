import React from 'react';
import { shallow } from 'enzyme';
import { ChildForm } from './ChildForm';

describe('ChildForm', () => {
  let wrapper;
  let setError;

  beforeEach(() => {
    setError = jest.fn();
    wrapper = shallow(
      <ChildForm 
        setError={setError}
        error={''}
        loading={false}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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
    const student = {
      name: 'Jude Bacher',
      username: 'jude',
      password: 'password',
      birthdate: '01/23/18'
    }

    it.skip('should create a student in the db', async () => {
      const result = await requests.createStudent(student);
    });
  });
  
  describe('checkAllFields', () => {
    it.skip('should set an error if a field is empty', () => {
      wrapper.setState({
        name: '',
        username: 'judebacher',
        password: 'password',
        password: 'password',
        dob: '1/23/18'
      });

      wrapper.instance().checkAllFields();

      expect(wrapper.setError).toHaveBeenCalledWith('All fields must be filled.');
    });
  });

  describe('checkPasswords', () => {
    it.skip('should set an error if the passwords do not match', () => {
      wrapper.setState({
        name: 'Jude Bacher',
        username: 'judebacher',
        password: 'password',
        password: 'passwordd',
        dob: '1/23/18'
      });

      wrapper.instance().checkPasswords();

      expect(wrapper.setError).toHaveBeenCalledWith('Passwords must match.');
    });
  });

  describe('mapStateToProps', () => {

  });

  describe('mapDispatchToProps', () => {

  });
});
