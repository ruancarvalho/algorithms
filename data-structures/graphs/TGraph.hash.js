/**
 * Defines a Graph structure using a hashset to store vertices and 
 * their edges.
 * 
 * This Graph is Undirected. For the directed version, take a 
 * look at the TDigraph.js file.
 * 
 * This code is intended for educational purposes only.
 * 
 * @author ruancarvalho
 */
class TGraph {
  /**
  * Initializes the graph structure with a hashset, where keys are contains 
  * vertices and hash's values contains the vertex's edges list.
  */
  constructor() {
    this.vertices = new Map();
    this.verticesCount = 0;
    this.edgesCount = 0;
  }

  /**
   * Creates a new edge connecting two vertices.
   * @param {*} vA - the initial vertex
   * @param {*} vB - the final vertex
   */
  addEdge(iniVertex, endVertex) {
    this.vertices.get(iniVertex).push(endVertex);
    this.vertices.get(endVertex).push(iniVertex); 

    this.edgesCount++;
  }

  /**
   * Creates a new vertex, in the graph, and its edges slot in the set.
   * @param {*} v  
   */
  addVertex(vertex) {
    this.vertices.set(vertex, []);
    this.verticesCount++;
  }

  display() {

    const vertices = this.vertices.keys();

    for (const vertex of vertices) {
      let edges = this.vertices.get(vertex)
      let edgesText = "";
      
      for (const edge of edges){
        edgesText += edge + " ";
      }
      console.log(vertex + " => " + edgesText);
    }
  }

  /**
   * This will be implemented at TGraph.bfs.js
   */
  breadthFirst() { return null; }

  /**
   * This will be implemented at TGraph.dfs.js
   */
  depthFirst() { return null; }
}


