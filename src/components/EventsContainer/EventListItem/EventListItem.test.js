import React from 'react';
import EventListItem from './EventListItem';
import { shallow } from 'enzyme';

describe('EventListItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< EventListItem /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})