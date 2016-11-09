import { assert } from 'chai';
import scoreWord from '../lib/helpers/score-word.js';

describe('scoreWord', () => {
  it('should be a function', () => {
    assert.isFunction(scoreWord);
  });
});
