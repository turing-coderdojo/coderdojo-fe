import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { addUser } from '../../actions';

describe('Header', () => {
  let wrapper;
  const mockUser = {
    username: 'ehk',
    role: 0
  };
  const mockResetUser = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Header user={mockUser} resetUser={mockResetUser} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should match snapshot if there is no user', () => {
    wrapper.setProps({ user: {} });
    expect(wrapper).toMatchSnapshot();
  });

  it('should resetUser on logout click', () => {
    wrapper.find('.logout').simulate('click');
    expect(mockResetUser).toHaveBeenCalledTimes(1);
  });

  describe('mapStateToProps', () => {
    const mockReduxState = {
      user: {
        username: 'nimsum',
        name: 'nim',
        role: '3'
      }
    };

    it('should map state to props', () => {
      const result = mapStateToProps(mockReduxState);
      expect(result).toEqual(mockReduxState);
    });
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    const expectedAction = addUser({});

    it('should map dispatch to props', () => {
      mappedDispatch.resetUser();
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
