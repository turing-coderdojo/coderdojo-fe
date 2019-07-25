import React from 'react';
import { shallow } from 'enzyme';
import { Family, mapStateToProps, mapDispatchToProps } from './Family';
import * as actions from '../../actions';

jest.mock('../../actions');

describe('Family', () => {
  let mockUser;
  let wrapper;

  beforeEach(() => {
    mockUser = { 
      id: 1,
      username: 'tiff',
      role: 1
    };
    wrapper = shallow(<Family user={mockUser} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if the user is not an admin', () => {
    mockUser = {
      id: 2,
      username: 'jude',
      role: 0
    };

    expect(wrapper).toMatchSnapshot();
  });

  describe('mstp', () => {
    let state;

    beforeEach(() => {
      state = {
        user: { id: 1 },
        isFetching: false,
        students: []
      };
    });

    it('should map user from state to props', () => {
      const { user } = mapStateToProps(state);

      expect(user).toEqual(state.user);
    });

    it('should map loading from state to props', () => {
      const { loading } = mapStateToProps(state);

      expect(loading).toEqual(state.isFetching);
    });

    it('should map students from state to props', () => {
      const { students } = mapStateToProps(state);

      expect(students).toEqual(state.students);
    });
  });

  describe('mdtp', () => {
    let mockDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('should dispatch addStudents', () => {
      const students = [{ id: 1, username: 'tiff' }];
      const action = actions.addStudents(students);

      mapDispatchToProps(mockDispatch).addStudents();

      expect(mockDispatch).toHaveBeenCalledWith(mockDispatch(action));
    });
  });
});
