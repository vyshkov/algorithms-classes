const Queue = require('./Queue');

describe('Queue tests', () => {
    it('should test enqueue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.length).toEqual(3);
        expect([...queue]).toEqual([1,2,3])
    });

    it('should test dequeue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue()).toEqual(1);
        expect(queue.length).toEqual(2);

        console.log('queue', [...queue])

        expect(queue.dequeue()).toEqual(2);
        expect(queue.length).toEqual(1);

        expect(queue.dequeue()).toEqual(3);
        expect(queue.length).toEqual(0);

        expect(queue.dequeue()).toEqual(undefined);
        expect(queue.length).toEqual(0);
    });
});