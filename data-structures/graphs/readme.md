# Data Structures - Graph in JavaScript

A Graph consists of a set of vertices V, with a set of edges E, which are 
pairs of vertices.

```
// vertices set
V = [v0, v1, v2, v3, v4, ..., vN];

// edges set
E = [
  [v2],
  [v2],
  [v0, v1, v3, v4],
  [v2],
  [v2],
  ...,
  []
];
```
The pair E[0][0], for example, represents a connection between vertex 'v0' 
with vertex 'v2'.


Graphs can be used for: 
* transportation systems
* Maps
* Social Networks
* telecommunication networks
* the internet
* polygons
* code
* electronic circuits
* roads
* Garbage Collection
* Web Crawling  
* Model Checking
* Puzzle and Games

The real information about a graph is stored in the edges, since the 
edges describe the structure of a graph.

## Types of Graphs

## Example of Usage

```js
const graph = new TGraph();
```

```json
graph: {
  vertices: Array(0), 
  verticesCount: 0, 
  edges: Array(0), 
  edgesCount: 0
}
```

```js
let pointA = new TVertex('A');
let pointB = new TVertex('B');
let pointC = new TVertex('C');

graph.addVertex(pointA);
graph.addVertex(pointB);
graph.addVertex(pointC);

graph.addEdge(pointA, pointB);
graph.addEdge(pointB, pointC);
graph.addEdge(pointC, pointA);
```

