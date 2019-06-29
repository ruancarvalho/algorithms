/**
 * Defines a Graph structure with adjacency lists, containing a 
 * set of vertices and a set of edges.
 * 
 * This Graph is Undirected. For the directed version, take a 
 * look at the TDigraph.js file.
 */
class TGraph {
  constructor() {
    this.vertices = [];
    this.verticesCount = 0;
    this.edges = [];
    this.edgesCount = 0;
  }

  /**
   * Creates a new edge connecting two vertices.
   * @param {*} vA - the initial vertex
   * @param {*} vB - the final vertex
   */
  addEdge(vA, vB) {
    const indexA = this.vertices.indexOf(vA);
    const indexB = this.vertices.indexOf(vB);

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


