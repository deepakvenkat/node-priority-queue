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
  while(parentNode.priority > childNode.priority) {
    tempQueue[childPosition] = parentNode;
    tempQueue[parentPosition] = childNode;
    childPosition = parentPosition;
    parentPosition = getParentPosition(childPosition);
    childNode = tempQueue[childPosition];
    parentNode = tempQueue[parentPosition];
  }
  return tempQueue;
};
