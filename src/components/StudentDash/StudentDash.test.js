import React from 'react';
import { shallow } from 'enzyme';
import { StudentDash, mapStateToProps } from './StudentDash';



describe('StudentDash', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StudentDash />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should MSTP', () => {
    const state = {
      error: ''
    };

    const { error } = mapStateToProps(state);

    expect(error).toEqual(state.error);
  });
  it('should MSTP with user', () => {
    const state = {
      user: {
        id: 1,
        username: 'ehk9000'
      }
    };

    const { username } = mapStateToProps(state);

    expect(username).toEqual(state.username);
  });
  it('should MSTP with isFetching', () => {
    const state = {
      isFetching: true
    };

    const { isFetching } = mapStateToProps(state);

    expect(isFetching).toEqual(state.isFetching);
  });
});
