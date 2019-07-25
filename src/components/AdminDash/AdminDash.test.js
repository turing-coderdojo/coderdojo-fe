import React from 'react';
import { shallow } from 'enzyme';
import { AdminDash, mapStateToProps } from './AdminDash';

describe('AdminDash', () => {
  let wrapper;
  const mockUser = {
    id: 2,
    username: 'admin1',
    name: 'Admin One',
    role: 2
  };

  beforeEach(() => {
    wrapper = shallow(<AdminDash user={mockUser} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should redirect if there is no user/invalid role', () => {
    wrapper = shallow(<AdminDash />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot if loading', () => {
    wrapper = shallow(<AdminDash user={mockUser} isLoading />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if errored', () => {
    const mockError = 'Failed to get admin data';
    wrapper = shallow(<AdminDash user={mockUser} isLoading={false} error={mockError} />);
    expect(wrapper).toMatchSnapshot();
  });


  describe('mapStateToProps', () => {
    const mockState = {
      user: mockUser,
      isFetching: false,
      error: ''
    };
    const expected = {
      isLoading: false,
      error: '',
      user: mockUser
    };
    it('should map state to props with correct values', () => {
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
  });
});
