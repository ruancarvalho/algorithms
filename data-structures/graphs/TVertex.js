/**
 * Represents a Vertex to store vertices of a graph.
 * 
 * This code is intended for educational purposes only.
 * 
 * @author ruancarvalho
 */
class TVertex {
  constructor(_id) {
    this.id = _id;
    this.wasVisited = false;
  }

  toString() {
    return this.id;
  }
}
