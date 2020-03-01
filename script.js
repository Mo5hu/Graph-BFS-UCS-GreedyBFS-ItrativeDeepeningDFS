class Graph {
	constructor() {
		this.adjecencyMatrix2D = new Map();
		this.start = "Arad"
		this.stop = "Bucharest"
	}

	addVertexNodeOfGraphs(vertexStartNode) {
		if (!this.adjecencyMatrix2D.has(vertexStartNode)) {
			this.adjecencyMatrix2D.set(vertexStartNode, [])
		} else {
			throw 'Already Exist!'
		}
	}
	
    addEdge(vertex, node) {
        if (this.adjList.has(vertex)){
            if (this.adjList.has(node)) {
                let arr = this.adjList.get(vertex)
                if (!arr.includes(node)) {
                    arr.push(node)
                } else {
                    throw "Node Already Exists"
                }
            } else {
                throw "Can't add non-existing vertex -> '${node}'"
            }
        } else {
            throw "You should add '${vertex}' first"
        }
    }

    print(){
        for (let [key, value] of this.adjList) {
            console.log(key, value);
        }
    }

}

let graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

// console.log(graph.adjList);

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

graph.print()