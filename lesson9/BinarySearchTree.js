class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // Add new Node with {value}
    // Time complexity = O(n), avg time complexity O(log n)
    add(value, node = this.root) {
        //...
        if(!this.root) {
            this.root = new Node(value);
            return this;
        }

        if(value < node.value) {
            if(node.left) {
                return this.add(value, node.left)
            } else {
                node.left = new Node(value)
            }
        } else {
            if(node.right) {
                return this.add(value, node.right)
            } else {
                node.right = new Node(value)
            }
        }

        return this;
    }
 
    // Find Node with {value}
    // Time complexity = O(n), avg time complexity O(log n)
    find(value) {
        //...
        let node = this.root;

        while(node !== null) {
            if(node.value === value) {
                return node;
            } else if(value > node.value) {
                node = node.right;
            } else if(value < node.value) {
                node = node.left;
            }
        }
        return null;
    }
 
    // Check if Node with {value} exists
    // Time complexity = O(n), avg time complexity O(log n)
    contains(value) {
        //...
        return !!this.find(value);
    }

    // Time complexity = O(n) 
    depthTraverseRecursive(node = this.root, res = []) {
        // DFS
        if (node) {
            this.depthTraverseRecursive(node.left, res);
            this.depthTraverseRecursive(node.right, res);
            res.push(node.value);
        }

        return res;
    }

    // Time complexity = O(n) 
    depthTraverseIterative() {
        // DFS
        const result = [];
        const stack = [];

        if(!this.root) return result;

        stack.push(this.root);
        while(stack.length) {
            const topNode = stack.pop();
            if(topNode.left) {
                stack.push(topNode.left);
            }
            if(topNode.right) {
                stack.push(topNode.right);
            }
            result.push(topNode.value);
        }

        return result.reverse();
    }
 
    // BFS is not a recursive algorithms
    // Time complexity = O(n) 
    breadthTraverse() {
        // BFS
        const result = [];
        const queue = [];

        if(!this.root) return result;

        queue.push(this.root);
        while(queue.length) {
            const firstNode = queue.pop();
            if(firstNode.left) {
                queue.unshift(firstNode.left);
            }
            if(firstNode.right) {
                queue.unshift(firstNode.right);
            }
            result.push(firstNode.value);
        }

        return result;
    }
 
    /*

         2
        / \
       1   100
            \
             1000



    */
   // Time complexity = O(n) 
    height(node = this.root) {
        if (!node) {
            return -1;
        }

        return Math.max(
            this.height(node.left),
            this.height(node.right)
        ) + 1;
    }

    // Time complexity = O(n) 
    isBalanced2() {

        let balanced = true;

        function height2(node = this.root) {
            if(!balanced) return -1
            if (!node) {
                return -1;
            }

            const left = height2(node.left);
            const right = height2(node.right);

            if (Math.abs(left - right) > 1) {
                balanced = false;
            }
    
            return Math.max(
                left, right
            ) + 1;
        }


        height2(this.root);
        return balanced;
    }
 
    //  determine if it is height-balanced.
    // Time complexity = O(n ^ 2) 
    isBalanced() {
        // Balanced - a binary tree in which the left and right subtrees of every node differ in height by no more than 1
        /*

        100
        / \
     -100  200
      /  \   \
   -1000  0   300
              \
            1000


        */

        if (!this.root) {
            return true;
        }

        const st = [this.root];
        while(st.length) {
            const curr = st.pop();

            if (Math.abs(this.height(curr.left) - this.height(curr.right)) > 1) {
                return false;
            }

            if(curr.left) st.push(curr.left);
            if(curr.right) st.push(curr.right);
        }

        return true;
    }

    *[Symbol.iterator]() {
        const values = this.depthTraverseIterative();
        for(const val of values) {
            yield val
        }
    }
}

module.exports = BinarySearchTree;
