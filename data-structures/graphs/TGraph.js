/**
 * Defines a Graph structure with adjacency lists, containing a 
 * set of vertices and a set of edges.
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
   * Initializes the graph structure with two lists: the vertices
   * and the edges.
   */
  constructor() {
    // the vertices list
    this.vertices = [];
    
    // verticesCount could be removed, by using vertices.length
    this.verticesCount = 0;
    
    // the adjacent list
    this.edges = [];

    // NOTE: edgesCount could be removed, by using edges.length
    this.edgesCount = 0;
  }

  /**
   * Creates a new edge connecting two vertices.
   * @param {*} vertexA - the initial vertex
   * @param {*} vertexB - the final vertex
   */
  addEdge(vertexA, vertexB) {
    const indexA = this.vertices.indexOf(vertexA);
    const indexB = this.vertices.indexOf(vertexB);

    // checks if both indexes are valid
    if ((indexA > -1) && (indexB > -1)) {
      this.edges[indexA].push(indexB);
      this.edges[indexB].push(indexA);
      this.edgesCount++;

      return this.edgesCount;
    }
    else {
      return -1;
    }
  }

  /**
   * Creates a new vertex, in the graph, and its edges slot in the set.
   * @param {*} v  
   */
  addVertex(v) {
    this.vertices.push(v);
    this.verticesCount = this.vertices.length;
    this.edges[this.verticesCount - 1] = [];
  }
}


