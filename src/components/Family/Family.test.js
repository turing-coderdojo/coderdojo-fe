import React from 'react';
import { shallow } from 'enzyme';
import { Family, mapStateToProps } from './Family';

describe('Family', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Family />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mstp', () => {
    let state;

    beforeEach(() => {
      state = {
        user: { id: 1 },
        isFetching: false
      }
    });

    it('should map user from state to props', () => {
      const { user } = mapStateToProps(state);

      expect(user).toEqual(state.user);
    });

    it('should map loading from state to props', () => {
      const { loading } = mapStateToProps(state);

      expect(loading).toEqual(state.isFetching);
    });
  });
});
