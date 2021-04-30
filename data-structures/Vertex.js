import Edge from './Edge.js';

export default class Vertex {
    constructor(data){
        this.data = data;
        this.edges = [];
    }

    addEdge(vertex, weight){
        if(vertex instanceof Vertex){
            this.edges.push(new Edge(this, vertex, weight));
        }
    }

    removeEdge(vertex){
        this.edges = this.edges.filter(edges => edges.end !== vertex);
    }

    print(){
        const edgeList = this.edges.map(edge => edge.weight !== null 
        ? `${edge.end.data} (${edge.end.weight})`: edge.end.data ) || [];

        const output = `${this.data} --> ${edgeList.join(', ')}`
        console.log(output);
    }

}