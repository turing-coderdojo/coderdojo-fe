import React from 'react';
import { mount } from 'enzyme';
import { EventsContainer } from './EventsContainer';

describe('EventsContainer', () => {
  let wrapper;
  const mockError = '';
  const mockMatch = {
    params: {
      id: 1
    }
  };

  beforeEach(() => {
    wrapper = mount(<EventsContainer match={mockMatch} isLoading={false} error={mockError} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
