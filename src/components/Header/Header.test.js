import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps } from './Header';

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
});
