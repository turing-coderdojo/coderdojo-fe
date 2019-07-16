import React from 'react';
import { shallow } from 'enzyme';
import EventListItem from './EventListItem';

describe('EventListItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EventListItem />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
