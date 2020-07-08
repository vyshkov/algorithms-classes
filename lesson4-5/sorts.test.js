const { bubbleSort, selectionSort, insertionSort, quickSort, mergeSort } = require('./sorts');

describe('Sorts testing', () => {

    function checkSorting(sortFn) {
        expect(sortFn([3, 2, 100])).toEqual([2, 3, 100]);
        expect(sortFn([])).toEqual([]);
        expect(sortFn([1])).toEqual([1]);
        expect(sortFn([100, 1000, -100, -100, 1, 2, 3])).toEqual([
            -100,
            -100,
            1,
            2,
            3,
            100,
            1000,
        ]);
    }


    it('should test selectionSort', () => checkSorting(selectionSort));
    it('should test insertionSort', () => checkSorting(insertionSort));
    it('should test bubbleSort', () => checkSorting(bubbleSort));
    it('should test quickSort', () => checkSorting(quickSort));
    it('should test mergeSort', () => checkSorting(mergeSort));

});
