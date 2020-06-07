import PQ from './lib/PQ';

export default function (queue?: Array<PQElement>) {
  const pq = new PQ(queue);
  return pq;
}
