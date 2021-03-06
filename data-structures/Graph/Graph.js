import Vertex from './Vertex.js';
import Queue from './Queue.js';

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

    depthFirstTraversal(start, callback, visitedVertices=[start]){
        start.edges.forEach(edge => {
            callback(start);
            const neighbor = edge[0].end;    
            if(!visitedVertices.includes(neighbor)){
                visitedVertices.push(neighbor);
                depthFirstTraversal(neighbor, callback, visitedVertices);
            }
        })
    }

    breadthFirstTraversal(start){
        const visitedVertices = [start];
        const visitQueue = new Queue();
        visitQueue.enqueue(start);
        while(!visitQueue.isEmpty()){
            const current = visitQueue.dequeue();
            console.log(current.data);
            current.edges.forEach(edge => {
                const neighbor = edge.end;
                if(!visitedVertices.includes[neighbor]){
                    visitedVertices.push(neighbor);
                    visitedQueue.enqueue(neighbor);
                }
            })
        }
    };

    print() {
        const vertexList = this.vertices || [];
        vertexList.forEach(vertex => vertex.print());
    }
}