import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ContactForm />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
