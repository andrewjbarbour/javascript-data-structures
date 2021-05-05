export const routeExists = (vertex1, vertex2) => {
    //Given two vertices on a directed graph, determines if a route exists between them
    return vertex1.edges.includes(vertex2) || vertex2.edges.includes(vertex2);
}