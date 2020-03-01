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

	createVisitedObject(){
		let arr = {};
		for(let key of this.adjecencyMatrix2D.keys()){
			arr[key] = false;
			
		}
		return arr;  
	}
	
	breathFirstSearch(){
		console.log("------------------------BREATH-FIRST-SEARCH---------------------");
		
		let visited = this.createVisitedObject();
		let q = [];
		let br = 0;
		visited[this.start] = true;
		q.push(this.start);
		// console.log(q);
		let current;
			
		do{
			current = q.pop()
			br++;
			// console.log(visited);
			
			console.log(q);
			console.log(current);
			let arr = this.adjecencyMatrix2D.get(current);	
			console.log(arr)

			for(let elem of arr){
				if(!visited[elem.node]){
					visited[elem.node] = true;
					q.unshift(elem.node);
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