const WeightedGraph = require('./WeightedGraph');

describe('WeightedGraph tests', () => {

    it('WeightedGraph add vertex', () => {
        const graph = new WeightedGraph();
        graph.addVertex("A");
        expect(graph.adjacencyList).toEqual({ A: [] });
        graph.addVertex("B");
        expect(graph.adjacencyList).toEqual({ A: [], B: [] });
        graph.addVertex("C");
        expect(graph.adjacencyList).toEqual({ A: [], B: [], C: [] });
    });

    it('WeightedGraph add edge', () => {

        /* Graph:
            A
         1 / \ 3
          B - C
            2
        */

        const graph = new WeightedGraph();
        graph
            .addVertex("A")
            .addVertex("B")
            .addVertex("C")
            .addEdge("A", "B", 1)
            .addEdge("B", "C", 2)
            .addEdge("A", "C", 3);

        expect(graph.adjacencyList.A).toEqual([{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 3 }]);
        expect(graph.adjacencyList.B).toEqual([{ vertex: 'A', weight: 1 }, { vertex: 'C', weight: 2 }]);
        expect(graph.adjacencyList.C).toEqual([{ vertex: 'B', weight: 2 }, { vertex: 'A', weight: 3 }]);

    });

    it('WeightedGraph remove edge', () => {


        /* Graph:
            A
         1 / \ 3
          B - C
            2
        */

        const graph = new WeightedGraph();
        graph
            .addVertex("A")
            .addVertex("B")
            .addVertex("C")
            .addEdge("A", "B", 1)
            .addEdge("B", "C", 2)
            .addEdge("A", "C", 3);

        graph.removeEdge('A', 'B');

        expect(graph.adjacencyList.A).toEqual([{ vertex: 'C', weight: 3 }]);
        expect(graph.adjacencyList.B).toEqual([{ vertex: 'C', weight: 2 }]);
        expect(graph.adjacencyList.C).toEqual([{ vertex: 'B', weight: 2 }, { vertex: 'A', weight: 3 }]);

    });

    it('WeightedGraph remove vertex', () => {


        /* Graph:
            A
         1 / \ 3
          B - C
            2
        */

        const graph = new WeightedGraph();
        graph
            .addVertex("A")
            .addVertex("B")
            .addVertex("C")
            .addEdge("A", "B", 1)
            .addEdge("B", "C", 2)
            .addEdge("A", "C", 3);

        graph.removeVertex('A');

          /* Graph:
  
          B - C
            2
        */

        expect(graph.adjacencyList.A).toEqual(undefined);
        expect(graph.adjacencyList.B).toEqual([{ vertex: 'C', weight: 2 }]);
        expect(graph.adjacencyList.C).toEqual([{ vertex: 'B', weight: 2 }]);

    });

    it('WeightedGraph BFS', () => {

        /* Graph:
            A
           / \ 
          B - C
          |   |
          D - K
              |
              F
        */

        const graph = new WeightedGraph();
        graph
            .addVertex("A")
            .addVertex("B")
            .addVertex("C")
            .addVertex("D")
            .addVertex("K")
            .addVertex("F")
            .addEdge("A", "B", 1)
            .addEdge("B", "C", 2)
            .addEdge("A", "C", 3)
            .addEdge("B", "D", 1)
            .addEdge("C", "K", 1)
            .addEdge("D", "K", 1)
            .addEdge("F", "K", 1);

        expect(graph.breadthFirstSearch('A')).toEqual(['A', 'B', 'C', 'D', 'K', 'F']);
    });

    it('WeightedGraph DFS', () => {

        /* Graph:
            A
           / \ 
          B - C
          |   |
          D - K
              |
              F
        */

        const graph = new WeightedGraph();
        graph
            .addVertex("A")
            .addVertex("B")
            .addVertex("C")
            .addVertex("D")
            .addVertex("K")
            .addVertex("F")
            .addEdge("A", "B", 1)
            .addEdge("B", "C", 2)
            .addEdge("A", "C", 3)
            .addEdge("B", "D", 1)
            .addEdge("C", "K", 1)
            .addEdge("D", "K", 1)
            .addEdge("F", "K", 1);

        expect(graph.depthFirstSearch('A')).toEqual(['D', 'F', 'K', 'C', 'B', 'A']);
    });

    it('WeightedGraph check hasPath', () => {

        /* Graph:
            A
           / \ 
          B - C
          |   |
          D - K
              
              F
        */

        const graph = new WeightedGraph();
        graph
            .addVertex("A")
            .addVertex("B")
            .addVertex("C")
            .addVertex("D")
            .addVertex("K")
            .addVertex("F")
            .addEdge("A", "B", 1)
            .addEdge("B", "C", 2)
            .addEdge("A", "C", 3)
            .addEdge("B", "D", 1)
            .addEdge("C", "K", 1)
            .addEdge("D", "K", 1)
          

        expect(graph.arePointsConnected('A', 'K')).toBeTruthy();
        expect(graph.arePointsConnected('A', 'F')).toBeFalsy();
    });
});