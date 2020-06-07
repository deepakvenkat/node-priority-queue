// tslint:disable:no-expression-statement
import test from 'ava';
import { balanceQueue } from './balanceQueue';

test('empty input', t => {
  t.deepEqual(balanceQueue([]), []);
});

test('1 element', t => {
  t.deepEqual(balanceQueue([{ priority: 4 }]), [{ priority: 4 }]);
});

test('multiple elements', t => {
  const input = [{
    priority: 6,
  }, {
    priority: 5,
  }, {
    priority: 4,
  }, {
    priority: 3,
  }, {
    priority: 1,
  }, {
    priority: 15,
  }];
  const actual = [{
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
  t.deepEqual(balanceQueue(input), actual);
});
