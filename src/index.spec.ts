// tslint:disable:no-expression-statement
import test from 'ava';
import priorityQueue from './index';

test('insert works', t => {
  const testQueue1 = priorityQueue([]);
  testQueue1.insertElement({ priority: 1});
  t.deepEqual(testQueue1.getQueue(), [{ priority: 1}]);
});

test('init with a q works', t => {
  const input = [{
    priority: 4,
  }, {
    priority: 3,
  }, {
    priority: 5,
  }, {
    priority: 6,
  }, {
    priority: 1,
  }, {
    priority: 15,
  }];
  const testQueue1 = priorityQueue(input);
  t.deepEqual(testQueue1.getMaxPriority(), { priority: 15});
});

test('adding element rebalances the q', t => {
  const input = [{
    priority: 4,
  }, {
    priority: 3,
  }, {
    priority: 5,
  }, {
    priority: 6,
  }];
  const testQueue1 = priorityQueue(input);
  testQueue1.insertElement({ priority: 15 });
  testQueue1.insertElement({ priority: 7 });
  t.deepEqual(testQueue1.getMaxPriority(), { priority: 15});
});
