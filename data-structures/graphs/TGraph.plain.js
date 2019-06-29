function TGraph() {
  this.vertices = [];
  this.verticesCount = 0;

  this.edges = [];
  this.edgesCount = 0;
}

TGraph.prototype.addEdge = function(vA, vB) {

  const indexA = this.vertices.indexOf(vA);
  const indexB = this.vertices.indexOf(vB);

  if ((indexA > -1) && (indexB > -1)) {
    this.edges[indexA].push(indexB);
    this.edges[indexB].push(indexA);
    
    this.edgesCount++;
    return this.edgesCount;
  } else {
    return -1;
  }  
}

TGraph.prototype.addVertex = function(v) {
  this.vertices.push(v);
  this.verticesCount = this.vertices.length;
  
  this.edges[this.verticesCount - 1] = [];
}