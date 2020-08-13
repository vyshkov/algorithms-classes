const BinarySearchTree = require('./BinarySearchTree');
//https://prod.liveshare.vsengsaas.visualstudio.com/join?605F830BDE3D7A53C838FA1C4A2B5746694E
describe('BinarySearchTree tests', () => {

    it('should test add', () => {
        const test = new BinarySearchTree();
        test.add(100)
            .add(200)
            .add(0)
            .add(50)
            .add(-100)

        //        100
        //      /    \
        //     0     200
        //   /  \
        // -100 50

        expect(test.root.value).toEqual(100);
        expect(test.root.right.value).toEqual(200);
        expect(test.root.left.value).toEqual(0);
        expect(test.root.left.left.value).toEqual(-100);
        expect(test.root.left.right.value).toEqual(50);
    });

    it('should test find', () => {
        const test = new BinarySearchTree();
        test.add(100)
            .add(200)
            .add(0)
            .add(50)
            .add(-100)
            .add(1000)

        //        100
        //      /    \
        //     0     200
        //   /  \     \
        // -100 50     1000

        expect(test.find(0).value).toEqual(0);
        expect(test.find(200).value).toEqual(200);
        expect(test.find(200).right.value).toEqual(1000);
        expect(test.find(234)).toEqual(null);
    });

    it('should test depthTraverseRecursive', () => {
        const test = new BinarySearchTree();
        test.add(100)
            .add(200)
            .add(0)
            .add(50)
            .add(-100)
            .add(1000)
        expect(test.depthTraverseRecursive()).toEqual([-100, 50, 0, 1000, 200, 100]);
    });

    it('should test depthTraverseIterative', () => {
        const test = new BinarySearchTree();
        test.add(100)
            .add(200)
            .add(0)
            .add(50)
            .add(-100)
            .add(1000)
        expect(test.depthTraverseIterative()).toEqual([-100, 50, 0, 1000, 200, 100]);
    });

    it('should test breadthTraverse', () => {
        const test = new BinarySearchTree();
        test.add(100)
            .add(200)
            .add(0)
            .add(50)
            .add(-100)
            .add(1000)
        expect(test.breadthTraverse()).toEqual([100, 0, 200, -100, 50, 1000]);
    });

    it('should test height', () => {
        const test = new BinarySearchTree();

        //        100
        //      /    \
        //     0     200
        //   /  \     \
        // -100 50     1000

        test.add(100)
            .add(200)
            .add(0)
            .add(50)
            .add(-100)
            .add(1000)
        expect(test.height()).toEqual(2);


        //        100
        //      /    \
        //     0     200
        //   /  \     \
        // -100 50     1000
        //               \
        //               10000
 
        test.add(100000);
        expect(test.height()).toEqual(3);
    });

    it('should test isBalanced', () => {
        const test = new BinarySearchTree();
        test.add(100)
            .add(200)
            .add(0)
            .add(50)
            .add(-100)
            .add(1000)
        expect(test.isBalanced()).toBeTruthy();
        expect(test.isBalanced2()).toBeTruthy();

        test.add(10000);
        expect(test.isBalanced()).toBeFalsy();
        expect(test.isBalanced2()).toBeFalsy();
    });


});