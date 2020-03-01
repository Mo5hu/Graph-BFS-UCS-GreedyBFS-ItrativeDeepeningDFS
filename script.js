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
	
	addEdge(vertexStartNode, node, weight) {
		if (this.adjecencyMatrix2D.has(vertexStartNode)){
			if (this.adjecencyMatrix2D.has(node)) {
				let arr = this.adjecencyMatrix2D.get(vertexStartNode)
				if (!arr.includes(node)) {
					arr.push({
						node, 
						weight
					})
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

	printGraph(){
		for (let [key, value] of this.adjecencyMatrix2D) {
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