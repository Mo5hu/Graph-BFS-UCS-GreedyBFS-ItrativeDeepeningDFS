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

graph.addEdge('A', 'B')
graph.addEdge('A', 'D')
graph.addEdge('A', 'F')
graph.addEdge('B', 'E')
graph.addEdge('B', 'C')
graph.addEdge('C', 'F')
graph.addEdge('D', 'E')
graph.addEdge('E', 'B')
graph.addEdge('F', 'B')
graph.addEdge('C', 'B')
