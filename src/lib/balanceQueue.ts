const getParentPosition = (childPosition: number): number => {
  return (Math.floor((childPosition - 1)/2));
};

export function balanceQueue(queue: Array<PQElement>): Array<PQElement> {
  let tempQueue: Array<PQElement> = [];
  if (queue.length < 2) {
    return queue;
  }
  tempQueue = queue;
  const qLength: number = queue.length;
  let childPosition: number = qLength - 1;
  let childNode: PQElement = tempQueue[childPosition];
  let parentPosition: number = getParentPosition(childPosition);
  let parentNode: PQElement = tempQueue[parentPosition];

  while((parentNode && childNode) && parentNode.priority < childNode.priority) {
    tempQueue[childPosition] = parentNode;
    tempQueue[parentPosition] = childNode;
    childPosition = parentPosition;
    parentPosition = getParentPosition(childPosition);
    childNode = tempQueue[childPosition];
    parentNode = tempQueue[parentPosition];
  }
  return tempQueue;
};

const getRightChildPos = (n: number) => ((2 * n) + 2);
const getLeftChildPos = (n: number) => ((2 * n) + 1);

export function deleteAndRebalance(queue: Array<PQElement>): Array <PQElement> {
  if (queue.length === 0) {
    return queue;
  }
  let tempQueue: Array<PQElement> = queue;
  let root = tempQueue.pop();
  if (!root) {
    return tempQueue;
  }
  let leafPos = 0;
  tempQueue[leafPos] = root;
  if (tempQueue.length < 2) {
    return tempQueue;
  }
  let rightChildPos = 2;
  let leftChildPos = 1;
  let rightChild = tempQueue[rightChildPos] || { proiority: -Infinity };
  let leftChild = tempQueue[leftChildPos] || { proiority: -Infinity };
  while ((rightChild.priority > root.priority || leftChild.priority > root.priority))  {
    if (rightChild.priority > leftChild.priority) {
      tempQueue[leafPos] = rightChild;
      tempQueue[rightChildPos] = root;
      leafPos = rightChildPos;
      rightChildPos = getRightChildPos(leafPos);
      leftChildPos = getLeftChildPos(leafPos);
      rightChild = tempQueue[rightChildPos] || { proiority: -Infinity };
      leftChild = tempQueue[leftChildPos] || { proiority: -Infinity };
      root = tempQueue[leafPos];
    } else {
      tempQueue[leafPos] = leftChild;
      tempQueue[leftChildPos] = root;
      leafPos = leftChildPos;
      rightChildPos = getRightChildPos(leafPos);
      leftChildPos = getLeftChildPos(leafPos);
      rightChild = tempQueue[rightChildPos] || { proiority: -Infinity };
      leftChild = tempQueue[leftChildPos] || { proiority: -Infinity };
      root = tempQueue[leafPos];
    }
  }
  return tempQueue;
}
