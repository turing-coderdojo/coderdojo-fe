import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { StudentDash, mapStateToProps } from './StudentDash';

describe('StudentDash', () => {
  let wrapper;
  let mounted;
  
  const mockedDate = new Date(2019, 7, 24);
  const originalDate = Date;

  global.Date = jest.fn(() => mockedDate);
  global.Date.setDate = originalDate.setDate;

  beforeEach(() => {
    wrapper = shallow(<StudentDash />);
    mounted = mount(
      <BrowserRouter>
        <StudentDash />
      </BrowserRouter>
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when mounted', () => {
    expect(mounted).toMatchSnapshot();
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
