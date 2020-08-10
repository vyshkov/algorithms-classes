const HashMap = require('./HashMap');

class HashSet {
    constructor() {
        this.map = new HashMap();
    }

    add(value) {
        this.map.set(value, true);
    }

    delete(value) {
        this.map.delete(value);
    }

    contains(value) {
        return this.map.contains(value)
    }

    values() {
        return this.map.keys();
    }
}

const set = new HashSet();
set.add('hey');
set.add('hey');

console.log(set.values());
console.log(set.contains('hey'));
set.delete('hey');
console.log(set.contains('hey'));