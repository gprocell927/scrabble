import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Application from '../lib/components/app'

it('renders as a <div>', () => {
  const wrapper = shallow(<Application />);
  assert.deepEqual(wrapper.type(), 'div');
});

it('will set inputValue to whatever word is in the input field', () => {
  const wrapper = mount(<Application />);
  wrapper.find('.inputField').simulate('change',
    { target:
      { value: 'Hello' },
    });
  assert.equal(wrapper.state().inputValue, 'Hello');
});
