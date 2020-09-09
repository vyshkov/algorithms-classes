const WeightedGraph = require('../lesson11/WeightedGraph');
const PriorityQueue = require('../lesson10/PriorityQueue');

class DijkstraWeightedGraph extends WeightedGraph {

            /*  
        
            A -- 100 -- B -- 1 -- C
             \        /
              1     3
               \  /
                D
         
        */

    // Define a methed with two arguments: from, to
    shortestPath(from, to) {
        // Define variables which will hold: table of distances, table of previous nodes, and priority queue of next nodes
        const distances = {};
        const prevNodes = {};
        const q = new PriorityQueue();

        // Init prev map with null, and distance map with Infinity except start node (shoud have 0). Add all adjacency nodes  from node to priority queue
        Object.keys(this.adjacencyList).forEach((name) => {
            if (name !== from) {
                distances[name] = Infinity;
                q.enqueue(name, Infinity);
            } else {
                distances[name] = 0;
                q.enqueue(name, 0);
            }
            prevNodes[name] = null;
        });

        while (q.size() !== 0) {
            //Pop items from the queue while length > 0
            const node = q.dequeue();
            this.adjacencyList[node].forEach(edgeNode => {

                //Calculate distance using table + weight
                const candidate = distances[node] + edgeNode.weight;

                //If candidate distance is smaller then table record - override it and enqueue all neighbours of current node
                if(distances[edgeNode.vertex] > candidate) {
                    distances[edgeNode.vertex] = candidate;
                    prevNodes[edgeNode.vertex] = node;
                    q.enqueue(edgeNode.vertex, candidate);
                }
            })
        }

        // After the the queue is empty - calculate the path using  table of distances and table of previous nodes
        let currentNode = to;
        const res = [to];
        while(currentNode !== null) {
            const prev = prevNodes[currentNode];
            if (prev !== null) {
                res.push(prev);
            }
            currentNode = prev
        }

       return res.reverse();
    }
}


module.exports = DijkstraWeightedGraph;