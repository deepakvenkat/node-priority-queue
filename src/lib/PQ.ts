import { balanceQueue } from './balanceQueue';

class PQ {
  queue: Array<PQElement>

  constructor (queue?: Array<PQElement>) {
    if(queue && queue !== null) {
      this.queue = queue;
    } else {
      this.queue = [];
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

  getMinPriority(): PQElement | null {
    if (this.queue.length > 0) {
      return this.queue[this.queue.length - 1];
    } else {
      return null;
    }
  }

  getQueue(): Array<PQElement> {
    return this.queue;
  }
}
