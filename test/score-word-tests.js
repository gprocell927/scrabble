import { assert } from 'chai';
import scoreWord from '../lib/helpers/score-word.js';

describe('scoreWord', () => {
  it('should be a function', () => {
    assert.isFunction(scoreWord);
  });

  it('should return a value of 10 if passed the letter "z"', () => {
    const result = scoreWord('z');
    assert.equal(result, 10);
  });

  it('should be able to score a word', () => {
    const result = scoreWord('hello');
    assert.equal(result, 8);
  });

  it('should be able to format and score a word with whitespace attached to it', () => {
    const result = scoreWord('  mO ist   ');
    assert.equal(result, 7);
  });

  it('should return a score of 0 if given an empty string', () => {
    const result = scoreWord('');
    assert.equal(result, 0);
  });

  it('should return a score of 0 if given a non-string', () => {
    const result = scoreWord(null);
    assert.equal(result, 0);
  });

  it('should be able to multiply a score if given a multiplier', () => {
    const result = scoreWord('Hello', 2);
    assert.equal(result, 16);
  });
});
