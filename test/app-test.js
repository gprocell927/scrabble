import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Application from '../lib/components/app'

it('renders as a <div>', () => {
  const wrapper = shallow(<Application />);
  assert.deepEqual(wrapper.type(), 'div');
});

it('has a function called "scoreWord()"', () => {

})
