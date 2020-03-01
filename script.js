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
		}while(q.length && q[3] != this.stop);
		current = q.pop()
		console.log(current);
		let arr = this.adjecencyMatrix2D.get(current);	
		console.log(arr)

	}

	iterativeDeepeningSearch(){
		console.log("------------------------ITERAIVE-DEEPNING-SEARCH---------------------");
		let visited = this.createVisitedObject();  
		this.idsRecuring(this.start, visited);
	}

	idsRecuring(initialNode, visited){
		if(initialNode){
			visited[initialNode] = true;  
			console.log(initialNode);
		
			let arr = this.adjecencyMatrix2D.get(initialNode);
		
			console.log(arr);
			

			for(let elem of arr){
				if(!visited[elem.node]){
				this.idsRecuring(elem.node, visited);
				}	  
			}
		}
	}

	greedyBestFirstSearch(){
		console.log("------------------------GREEDY-FIRST-FIRST-SEARCH---------------------");
		
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
		}while(q.length && q[3] != this.stop);
		current = q.pop()
		console.log(current);
		let arr = this.adjecencyMatrix2D.get(current);	
		console.log(arr)

	}

	uniformCostSearch(){
		console.log("------------------------UNIFORM-COST-SEARCH---------------------");
		let visited = this.createVisitedObject();  
		this.ucsRecuring(this.start, visited);
	}

	ucsRecuring(initialNode, visited){
		if(initialNode){
			visited[initialNode] = true;  
			console.log(initialNode);
		
			let arr = this.adjecencyMatrix2D.get(initialNode);
		
			console.log(arr);
			

			for(let elem of arr){
				if(!visited[elem.node]){
				this.idsRecuring(elem.node, visited);
				}	  
			}
		}
	}

}

var cy = cytoscape({
	container: document.getElementById('cy'),
	elements: [
		{ data: { id: 'a' } },
  { data: { id: 'b' } },
  { data: { id: 'c' } },
  { data: { id: 'd' } },
  { data: { id: 'e' } },
  { data: { id: 'f' } },
  // edges
  {
    data: {
      id: 'ab',
      source: 'a',
      target: 'b'
    }
  },
  {
    data: {
      id: 'cd',
      source: 'c',
      target: 'd'
    }
  },
  {
    data: {
      id: 'ef',
      source: 'e',
      target: 'f'
    }
  },
  {
    data: {
      id: 'ac',
      source: 'a',
      target: 'c'
    }
  },
  {
    data: {
      id: 'be',
      source: 'b',
      target: 'e'
    }
  }
	],
	style: [
		{
			selector: 'node',
			style: {
				shape: 'circle',
				'background-color': 'black',
				label: 'data(id)'
			}
		}
	]
});

let graphObjectPresent = new Graph()
graphObjectPresent.addVertexNodeOfGraphs('Arad')
graphObjectPresent.addVertexNodeOfGraphs('Zerind')
graphObjectPresent.addVertexNodeOfGraphs('Oradea')
graphObjectPresent.addVertexNodeOfGraphs('Sibiu')
graphObjectPresent.addVertexNodeOfGraphs('Timisoara')
graphObjectPresent.addVertexNodeOfGraphs('Lugoj')
graphObjectPresent.addVertexNodeOfGraphs('Mehadia')
graphObjectPresent.addVertexNodeOfGraphs('Drobeta')
graphObjectPresent.addVertexNodeOfGraphs('Craiova')
graphObjectPresent.addVertexNodeOfGraphs('Rimnicu Vilcea')
graphObjectPresent.addVertexNodeOfGraphs('Pitesti')
graphObjectPresent.addVertexNodeOfGraphs('Fagaras')
graphObjectPresent.addVertexNodeOfGraphs('Bucharest')
graphObjectPresent.addVertexNodeOfGraphs('Giurgiu')
// graphObjectPresent.addVertexNodeOfGraphs('Lugoj')

var g = graphObjectPresent.adjecencyMatrix2D

for(var i = 0; i < graphObjectPresent.adjecencyMatrix2D.size; i++)
cy.add({
	data: { id: g.pop }
})

// console.log(graphObjectPresent.adjecencyMatrix2D);

graphObjectPresent.addEdge('Arad', 'Zerind', 75)
graphObjectPresent.addEdge('Arad', 'Sibiu', 140)
graphObjectPresent.addEdge('Arad', 'Timisoara', 118)
graphObjectPresent.addEdge('Zerind', 'Oradea', 71)
graphObjectPresent.addEdge('Sibiu', 'Fagaras', 99)
graphObjectPresent.addEdge('Sibiu', 'Rimnicu Vilcea', 80)
graphObjectPresent.addEdge('Oradea', 'Sibiu', 151)
graphObjectPresent.addEdge('Timisoara', 'Lugoj', 111)
graphObjectPresent.addEdge('Lugoj', 'Mehadia', 70)
graphObjectPresent.addEdge('Mehadia', 'Drobeta', 75)
graphObjectPresent.addEdge('Drobeta', 'Craiova', 120)
graphObjectPresent.addEdge('Craiova', 'Rimnicu Vilcea', 146)
graphObjectPresent.addEdge('Rimnicu Vilcea', 'Pitesti', 97)
graphObjectPresent.addEdge('Pitesti', 'Craiova', 138)
graphObjectPresent.addEdge('Pitesti', 'Bucharest', 101)
graphObjectPresent.addEdge('Fagaras', 'Bucharest', 211)
graphObjectPresent.addEdge('Bucharest', 'Giurgiu',90)

graphObjectPresent.addEdge('Zerind', 'Arad', 75)
graphObjectPresent.addEdge('Sibiu', 'Arad', 140)
graphObjectPresent.addEdge('Timisoara', 'Arad', 118)
graphObjectPresent.addEdge('Oradea', 'Zerind', 71)
graphObjectPresent.addEdge('Fagaras', 'Sibiu', 99)
graphObjectPresent.addEdge('Rimnicu Vilcea', 'Sibiu', 80)
graphObjectPresent.addEdge('Sibiu', 'Oradea', 151)
graphObjectPresent.addEdge('Lugoj', 'Timisoara', 111)
graphObjectPresent.addEdge('Mehadia', 'Lugoj', 70)
graphObjectPresent.addEdge('Drobeta', 'Mehadia',75)
graphObjectPresent.addEdge('Craiova', 'Drobeta', 120)
graphObjectPresent.addEdge('Rimnicu Vilcea', 'Craiova', 146)
graphObjectPresent.addEdge('Pitesti', 'Rimnicu Vilcea',97)
graphObjectPresent.addEdge('Craiova', 'Pitesti',138)
graphObjectPresent.addEdge('Bucharest', 'Pitesti', 101)
graphObjectPresent.addEdge('Bucharest', 'Fagaras', 211)
graphObjectPresent.addEdge('Giurgiu', 'Bucharest',90)

// graphObjectPresent.addEdge('C', 'B')

graphObjectPresent.printGraph()

graphObjectPresent.breathFirstSearch()

graphObjectPresent.uniformCostSearch()

graphObjectPresent.greedyBestFirstSearch()

graphObjectPresent.iterativeDeepeningSearch()

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