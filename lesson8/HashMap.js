function hashCode(str) {
    let hash = 0;
    for(let i = 0; i < str.length; i++) {
        hash = (hash * 23) % 534534534534 + str.charCodeAt(i);
    }

    return hash;
}


class HashMap {
    constructor(buckets = 2) {
        // [], [], [], [],
        this.buckets = buckets;
        this.data = Array.from({ length: this.buckets }, () => []);
    }
 
    set(key, value) {
       const index = this.getIndex(key);
       this.data[index] = this.data[index]
            .filter(item => item.key !== key)
       this.data[index].push({
           key,
           value
       });
    }
 
    // O(n), approx time complexity = O(1)
    get(key) {
        const index = this.getIndex(key);
        const result = this.data[index].find(item => item.key === key);
        return result ? result.value : null;
    }
 
    // Object.keys()
    keys() {
        return this.data
            .reduce((acc, bucket) => acc.concat(bucket.map(el => el.key)), []);
    }

    // O(1)
    contains(key) {
        const index = this.getIndex(key);
        return this.data[index].some(entry => entry.key === key);
    }

    delete(key) {
        const index = this.getIndex(key);
        this.data[index] = this.data[index].filter(el => el.key !== key);
    }

    getIndex(key) {
        const hash = hashCode(key);
        const index = Math.abs(hash % this.buckets);
        return index;
    }

    *[Symbol.iterator]() {
        for(const bucket of this.data) {
            for(const entry of bucket) {
                yield entry;
            }
        }
    }
}


//...map , of

module.exports = HashMap;