const HashMap = require('./HashMap');

describe('HashMap tests', () => {

    it('should test set/get', () => {
        const test = new HashMap();
        test.set('black', '#000');
        test.set('white', '#fff');
        test.set('red', '#f00');
        test.set('blue', '#00f');
        test.set('green', '#0f0');

        expect(test.get('black')).toEqual('#000');
        expect(test.get('white')).toEqual('#fff');
        expect(test.get('red')).toEqual('#f00');
        expect(test.get('blue')).toEqual('#00f');
        expect(test.get('green')).toEqual('#0f0');

        console.log(test.data)
    });

    it('should test contains', () => {
        const test = new HashMap();
        test.set('black', '#000');
        test.set('white', '#fff');
    
        expect(test.contains('black')).toBeTruthy();
        expect(test.contains('grey')).toBeFalsy();
    });

    it('should test delete', () => {
        const test = new HashMap();
        test.set('black', '#000');
        test.set('white', '#fff');
    
        expect(test.contains('black')).toBeTruthy();
        test.delete('black');
        expect(test.contains('black')).toBeFalsy();
    });

    it('should test keys', () => {
        const test = new HashMap();
        test.set('black', '#000');
        test.set('white', '#fff');
        test.set('red', '#f00');
        test.set('blue', '#00f');
        test.set('green', '#0f0');

    
        const keys = test.keys(); 
        expect(keys.indexOf('black') >= 0).toBeTruthy();
        expect(keys.indexOf('white') >= 0).toBeTruthy();
        expect(keys.indexOf('red') >= 0).toBeTruthy();

        console.log([...test]);
    });
});