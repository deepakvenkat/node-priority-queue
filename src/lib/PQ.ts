import { balanceQueue, deleteAndRebalance } from './balanceQueue';

// TODO: What to do about duplicates?
class PQ {
  queue: Array<PQElement>

  constructor (queue?: Array<PQElement>) {
    this.queue = [];
    if(queue && queue !== null) {
      queue.forEach(this.insertElement, this);
    }
  }

  insertElement(element: PQElement): void {
    this.queue.push(element);
    this.queue = balanceQueue(this.queue);
  }

  // deleteElementById(id: string): void {
  //
  // }
  //
  // deleteElementByPriority(priority: number): void {
  //
  // }

  getMaxPriority(): PQElement {
    return this.queue[0];
  }

  getMaxPriorityAndRemove(): PQElement {
    const maxPriority: PQElement = this.queue[0];
    this.queue = deleteAndRebalance(this.queue);
    return maxPriority;
  }

  getQueue(): Array<PQElement> {
    return this.queue;
  }
}

export default PQ;
