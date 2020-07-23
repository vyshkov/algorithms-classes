const Stack = require('./Stack');

describe('Stack tests', () => {
    it('should test push', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.length).toEqual(3);
        expect([...stack]).toEqual([1,2,3])
    });

    it('should test pop', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).toEqual(3);
        expect(stack.length).toEqual(2);

        console.log('stack', [...stack])

        expect(stack.pop()).toEqual(2);
        expect(stack.length).toEqual(1);

        expect(stack.pop()).toEqual(1);
        expect(stack.length).toEqual(0);

        expect(stack.pop()).toEqual(undefined);
        expect(stack.length).toEqual(0);
    });
});