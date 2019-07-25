import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import * as actions from '../../actions';

jest.mock('../../actions');

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App setUser={actions.addUser}/>);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mdtp', () => {
    it('should dispatch setUser', () => {
      const mockUser = {
        id: 1,
        username: 'tiff',
        password: 'password'
      };
      const action = actions.addUser(mockUser);
      const mockDispatch = jest.fn();
      
      mapDispatchToProps(mockDispatch).setUser();

      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });
});
