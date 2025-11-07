
function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }

  return hashCode;
} 

class HashMap {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
    _hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.keyMap.length;
  }
    set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
        this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    }

    remove(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
            this.keyMap[index].splice(i, 1);
            return true;
        }
        }
    }
    return false;
  }

  length(key){
    const index = this._hash(key);
    if (this.keyMap[index]) {
        return this.keyMap[index].length;
    }
    return 0;
  }

    get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1];
        }
        }   
    }
 
    return undefined;
  }
    keys() {
    const keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
            keysArray.push(this.keyMap[i][j][0]);
        }
        }
    }
    return keysArray;
  }
    values() {
    const valuesArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
            valuesArray.push(this.keyMap[i][j][1]);
        }
        }
    }
    return valuesArray;
    }
}

// Example usage:
const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test.get('carrot')); 
console.log(test.keys());

console.log(test.values());
console.log(test.length('apple'));
console.log(test.remove('banana'));
console.log(test.get('banana')); 
console.log(test.length('banana'));
console.log(test.keys());
console.log(test.values());
