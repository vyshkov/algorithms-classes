const DijkstraWeightedGraph = require('./Dijkstra');

describe('Testing Dijkstra algorithm', () => {
    it('shoud test shortest path', () => {
        const weightedGraph = new DijkstraWeightedGraph();
 
        /*  
        
            A -- 100 -- B -- 1 -- C
             \        /
              1     3
               \  /
                D
         
        */
         
         
        weightedGraph
            .addVertex('A')
            .addVertex('B')
            .addVertex('C')
            .addVertex('D')
            .addEdge('A', 'B', 100)
            .addEdge('B', 'C', 1)
            .addEdge('A', 'D', 1)
            .addEdge('D', 'B', 3);
         
        expect(weightedGraph.shortestPath('A', 'C')).toEqual(['A', 'D', 'B', 'C']); // [A, D, B, C]
    });


    it('shoud test shortest path', () => {
        const weightedGraph = new DijkstraWeightedGraph();
 
        /*    --------4---------
             /                   \
            A -- 100 -- B -- 1 -- C
             \        /
              1     3
               \  /
                D
         
        */
         
         
        weightedGraph
            .addVertex('A')
            .addVertex('B')
            .addVertex('C')
            .addVertex('D')
            .addEdge('A', 'B', 100)
            .addEdge('B', 'C', 1)
            .addEdge('A', 'D', 1)
            .addEdge('D', 'B', 3)
            .addEdge('A', 'C', 4);
         
        expect(weightedGraph.shortestPath('A', 'C')).toEqual(['A', 'C']); // [A, D, B, C]
    });
});