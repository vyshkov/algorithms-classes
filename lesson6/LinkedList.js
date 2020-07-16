class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    } 
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // O(1)
    push(data) {
       const node = new Node(data); // 1

       if (!this.head)  { //1
           this.head = this.tail = node; //1
       } else {
           this.tail.next = node; // 1
           this.tail = node; // 1
       }

       this.length++;

       return this;
    }

    unshift(data) {
        this.head = new Node(data, this.head);
        this.length++;
        
        return this;
    }


    // 1,2,3
    // 100, i = 1
    // => 1, 100, 2, 3
    insert(data, index) {
        if (index < 0 || index > this.length) {
            throw new Error('Out of range');
        }

        if (index === 0) {
            return this.unshift(data);
        }

        if (index === this.length) {
           return this.push(data);
        }

        let i = 0;
        let curentNode = this.head;
        
        while (i < index - 1) {
            curentNode = curentNode.next;
            i++;
        }

        curentNode.next = new Node(data, curentNode.next);
        this.length++;

        return this;
        // 1,2, x, 3,4,5,6,7
    }

    // 1, 2, 3, 4, 5, idx = 2 
    // 1, 2, x, 4, 5
    remove(index) {
        if (!this.length) {
            throw new Error('List is empty');
        }
        
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            
            if (this.length === 0) {
                this.tail = null;
            }

            return this;
        }

        let i = 0;
        let curentNode = this.head;
        
        while (i < index - 1) {
            curentNode = curentNode.next;
            i++;
        }

        if (curentNode.next) {
            curentNode.next = curentNode.next.next;
        } else {
            curentNode.next = null;
            this.tail = null
        }

        this.length--;
        
        return this;
    }

    reverse() {
        let currentNode = this.head;
        let prevNode = null;

        while (currentNode) {
            const temp = currentNode.next;
           
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = temp;
        }
        [this.tail, this.head] = [this.head, this.tail];
        return this;
    }

    // *[Symbol.iterator]() {
    //     let currentNode = this.head;
        
    //     while(currentNode) {
    //         yield currentNode.data;
    //         currentNode = currentNode.next;
    //     }
    // }

    [Symbol.iterator]() {
        let currentNode = this.head;
        
        return {
            next: function() {
                if (!currentNode) {
                    return { done: true }
                }

                const value = currentNode.data;
                currentNode = currentNode.next;

                return { value, done: false }
            }
        }
    }

    hasCycle() {
        let currentNode = this.head;
        let fastNode = this.head;

        while(fastNode && fastNode.next && fastNode.next.next) {
            currentNode = currentNode.next;
            fastNode = fastNode.next.next;
            if (currentNode === fastNode) {
                return true
            }
        }

        return false;
    }

    // 1, 2, 3, 4, 5 => n = 2,  3, 4, 5, 1, 2
    rotate(n) {
        
        let iteration = n % this.length;
        if (iteration === 0) {
            return this;
        }

        this.tail.next = this.head;

        let currentNode = this.head;
        let prev = null
        for(let i = 0; i < iteration; i++) {
            prev = currentNode;
            currentNode = currentNode.next;
        }

        this.head = currentNode;

        this.tail = prev;
        this.tail.next = null;

        return this;
    }

    // [1,2,3]
    toArray() {
        return [...this];
    }
}


const list = new LinkedList();

list.push(1).push(2).push(3).push(4).push(5).push(6).push(7)

// 1,2,3,4,5,6,7

// 2,3,4,5,6,7,1
// 3,4,5,6,7,1,2
// 4,5,6,7,1,2,3

console.log([ ...list.rotate(11212121213)]);


module.exports = {
    LinkedList,
}