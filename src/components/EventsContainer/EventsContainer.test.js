import React from 'react';
import { shallow } from 'enzyme';
import { EventsContainer } from './EventsContainer';

describe('EventsContainer', () => {
  let wrapper;
  const mockError = '';

  beforeEach(() => {
    wrapper = shallow(<EventsContainer isLoading={false} error={mockError} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
