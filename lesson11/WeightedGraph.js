class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if (!this.adjacencyList[name]) {
            this.adjacencyList[name] = []
        }
        return this;
    }

    addEdge(start, end, weight) {
        // connect two nodes
        if (this.adjacencyList[start] && this.adjacencyList[end]) {
            this.adjacencyList[start].push({ vertex: end, weight });
            this.adjacencyList[end].push({ vertex: start, weight });
        }
        return this;
    }

    // O(|n|)
    removeEdge(start, end) {
        if (this.adjacencyList[start] && this.adjacencyList[end]) {
            this.adjacencyList[start] = this.adjacencyList[start].filter((el) => el.vertex !== end);
            this.adjacencyList[end] = this.adjacencyList[end].filter(el=> el.vertex !== start);
        }
        return this;
    }

    removeVertex(name) {
        // remove node with all its connections
        for (const el of this.adjacencyList[name]) {
            this.removeEdge(name, el.vertex)
        }
        delete this.adjacencyList[name];
        
        return this;
    }

    breadthFirstSearch(start = 'A') {
        // iterative algo using a queue

        // 1. create result, queue arrays
        // 2. put start in queue
        // 3. while queue has elements
        //     4. shift element, push to result
        //     4. iterate children current element -> push into queue

        const queue = [start];
        const result = [];
        const visited = { [start]: true };
        while(queue.length) {
            const first = queue.shift();
            result.push(first);
            this.adjacencyList[first].forEach(el => {
                if(!visited[el.vertex]) {
                    queue.push(el.vertex);
                    visited[el.vertex] = true;
                }
            });
        }

        return result;
    }

    depthFirstSearch(start) {
        // recursiv algo

        // 1. visited
        // 2. result

        const visited = {}, result = [];

        // define traverse function
        const traverse = node => {
        //    1. check if not visited
        //    2. set visited
        //    3. add to result
        //    4. recursive traverse call for evry child
            if(!visited[node]) {
                visited[node] = true;
                this.adjacencyList[node].forEach(el => {
                    traverse(el.vertex);
                })
                result.push(node);
            }
        } 

        // call traverse on the start

        traverse(start);

        return result

    }

    arePointsConnected(start, end) {
        // check that there is a way from point A to point B
        return this.depthFirstSearch(start).includes(end);
    }
}

module.exports = WeightedGraph;