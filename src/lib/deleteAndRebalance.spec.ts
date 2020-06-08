// tslint:disable:no-expression-statement
import test from 'ava';
import { deleteAndRebalance } from './balanceQueue';

test('empty input', t => {
  t.is(true, true);
});

test('delete max priority', (t) => {
  const queue = [{
    priority: 15,
  }, {
    priority: 5,
  }, {
    priority: 6,
  }, {
    priority: 3,
  }, {
    priority: 1,
  }, {
    priority: 4,
  }];
  const expected = [{
    priority: 6,
  }, {
    priority: 5,
  }, {
    priority: 4,
  }, {
    priority: 3,
  }, {
    priority: 1,
  }];
  t.deepEqual(deleteAndRebalance(queue), expected);
});
