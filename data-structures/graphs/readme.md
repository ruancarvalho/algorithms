# Graph Data Structure with JavaScript

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


Graphs can represent transportation systems, maps, human interactions, 
telecommunication networks, the internet, polygons, code, electronic 
circuits, roads, etc.

The real information about a graph is stored in the edges, since the 
edges describe the structure of a graph.

## Types of Graphs

