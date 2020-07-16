const { LinkedList } = require('./LinkedList');

describe('Linked list tests', () => {

    it('should test push', () => {
        const list = new LinkedList();
        list.push(1)
            .push(2)
            .push(3);

        expect(list.length).toEqual(3);
        expect(list.toArray()).toEqual([1,2,3]);
        list.push(100)
        expect(list.length).toEqual(4);
        expect(list.toArray()).toEqual([1,2,3,100]);
    });

    it('should test unshift', () => {
        const list = new LinkedList();
        list.push(1)
            .push(2)
            .push(3);

        expect(list.toArray()).toEqual([1,2,3]);

        list.unshift(0);
        expect(list.length).toEqual(4);
        expect(list.toArray()).toEqual([0,1,2,3]);

        list.unshift(-1);
        expect(list.length).toEqual(5);
        expect(list.toArray()).toEqual([-1, 0,1,2,3]);

    });

    it('should test insert', () => {
        const list = new LinkedList();
        list.push(1)
            .push(2)
            .push(3);

        expect(list.toArray()).toEqual([1,2,3]);

        list.insert(10, 2);
        expect(list.length).toEqual(4);
        expect(list.toArray()).toEqual([1,2,10, 3]);

        list.insert(10, 0);
        expect(list.length).toEqual(5);
        expect(list.toArray()).toEqual([10, 1,2,10, 3]);

        list.insert(1000, 5);
        expect(list.length).toEqual(6);
        expect(list.toArray()).toEqual([10, 1,2,10, 3, 1000]);
        expect(()=>{list.insert(1000, 50)}).toThrow();
    });


    it('should test remove', () => {
        const list = new LinkedList();
        list.push(1)
            .push(2)
            .push(3);

        expect(list.toArray()).toEqual([1,2,3]);
        expect(list.length).toEqual(3);
        list.remove(1);
        expect(list.toArray()).toEqual([1,3]);
        expect(list.length).toEqual(2);

        list.remove(0);
        expect(list.toArray()).toEqual([3]);
        expect(list.length).toEqual(1);

        list.push(4);
        list.remove(1);
        expect(list.toArray()).toEqual([3]);
        expect(list.length).toEqual(1);

        list.remove(0);
        expect(list.toArray()).toEqual([]);
        expect(list.length).toEqual(0);
        expect(list.head).toEqual(null);
        expect(list.tail).toEqual(null);

    });

    it('should test reverse', () => {
        const list = new LinkedList();
        list.push(1)
            .push(2)
            .push(3)
            .push(4);

        expect(list.toArray()).toEqual([1,2,3,4]);
        expect(list.length).toEqual(4);    

        list.reverse();
        console.log('reversed', [...list])

        expect(list.toArray()).toEqual([4, 3, 2, 1]);
        expect(list.length).toEqual(4);    
        expect(list.head.data).toEqual(4);    
        expect(list.tail.data).toEqual(1);    
    })



})