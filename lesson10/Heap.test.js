const Heap = require('./Heap');

describe('Heap tests', () => {

    it('Sould test push', () => {
        const heap = new Heap();
        heap.push(100);
        expect(heap.data[0]).toEqual(100);
        heap.push(50);
        expect(heap.data).toEqual([50,100]);
        heap.push(51);
        expect(heap.data).toEqual([50,100, 51]);
        heap.push(1);
        expect(heap.data).toEqual([1, 50, 51, 100]);
    });

    it('Sould test peak', () => {
        const heap = new Heap();
        heap.push(100);
        expect(heap.peak()).toEqual(100);
        heap.push(50);
        expect(heap.peak()).toEqual(50);
        heap.push(51);
        expect(heap.peak()).toEqual(50);
        heap.push(1);
        expect(heap.peak()).toEqual(1);
    });

    it('Sould test pop', () => {
        const heap = new Heap();
        heap.push(50);
        heap.push(100);
        heap.push(1);
        heap.push(51);
        expect(heap.pop()).toEqual(1);
        expect(heap.pop()).toEqual(50);
        expect(heap.pop()).toEqual(51);
        expect(heap.pop()).toEqual(100);
        expect(heap.pop()).toBeFalsy();
    });

    it('Should test build heap', () => {
        const heap = new Heap([100, 1000, 1, 50, 5000]);
        expect(heap.data).toEqual([1, 50, 100, 1000, 5000]);
    });
});