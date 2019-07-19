import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';

describe('Header', () => {
  let wrapper;
  const mockUser = {
    username: 'ehk',
    role: 0
  };

  beforeEach(() => {
    wrapper = shallow(<Header user={mockUser} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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

  
});
