import PriorityQueue from "../data-structures/PriorityQueue.js";

export const dijkstras = (graph, startingVertex) => {
  const distances = {};
  const previous = {};
  const queue = new PriorityQueue();
  queue.add({ vertex: startingVertex, priority: 0 });

  graph.vertices.forEach((vertex) => {
    distances[vertex.data] = Infinity;
    previous[vertex.data] = null;
  });

  distances[startingVertex.data] = 0;
  while (!queue.isEmpty()) {
    const { vertex } = queue.popMin();

    vertex.edges.forEach((edge) => {
      const alternate = edge.weight + distances[vertex.data];
      const neighborValue = edge.end.data;

      if (alternate < distances[neighborValue]) {
        distances[neighborValue] = alternate;
        previous[neighborValue] = vertex;
        queue.add({ vertex: edge.end, priority: distances[neighborValue] });
      }
    });
  }
  return { distances, previous };
};

export const shortestPathBetween = (graph, startingVertex, targetVertex) => {
  const { distances, previous } = dijkstras(graph, startingVertex);
  const distance = distances[targetVertex.data];
  const path = [];
  let vertex = targetVertex;
  while (vertex) {
    path.unshift(vertex);
    vertex = previous[vertex.data];
  }
  return { distance, path };
};
