import { balanceQueue } from './balanceQueue';

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

  getQueue(): Array<PQElement> {
    return this.queue;
  }
}

export default PQ;
