import Edge from './Edge.js';
import Vertex from './Vertex.js';

export default class Graph {
    constructor(isWeighted=false, isDirected=false){
        this.vertices = [];
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
    }

    addVertex(data) {
        const newVertex = new Vertex(data);
        this.vertices.push(newVertex);

        return newVertex;
    }

    removeVertex(vertex){
        this.vertices = this.vertices.filter(v => v !== vertex);
    }

    addEdge(vertexOne, vertexTwo){
        if(vertexOne instanceof Vertex && vertexTwo instanceof Vertex){
            vertexOne.addEdge(vertexTwo);
            if(this.isDirected===false){
                vertexTwo.addEdge(vertexOne);
            }
        } else {
            throw new Error("TypeError: both parameters must be vertices.");
        }
    }

    removeEdge(vertexOne, vertexTwo){
        if(vertexOne instanceof Vertex && vertexTwo instanceof Vertex){
            vertexOne.removeEdge(vertexTwo);
            if(this.isDirected==false){
                vertexTwo.removeEdge(vertexOne)
            }
            vertexTwo.removeEdge(vertexOne);
        } else {
            throw new Error("TypeError: both parameters must be vertices.");
        }
    }

    print() {
        const vertexList = this.vertices || [];
        vertexList.forEach(vertex => vertex.print());
    }
}