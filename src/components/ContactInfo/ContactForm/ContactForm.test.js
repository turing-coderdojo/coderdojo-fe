import React from 'react';
import ContactForm from './ContactForm';
import { shallow } from 'enzyme';

describe('ContactForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(< ContactForm /> )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})