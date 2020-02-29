class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, [])
        } else {
            throw 'Already Exist!'
        }
    }
    
    addEdge(vertex, node) {
        if (this.adjList.has(vertex)){
            if (this.adjList.has(node)) {
                let arr = this.adjList.get(vertex)
            }
        }
    }

    // print(){}

}

let graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

console.log(graph.adjList);
