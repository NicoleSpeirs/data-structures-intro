//Create a hash table that allows a sales associate to enter a customer's name, address,and phone number into the system
//and look up customers using their phone numbers.

var hash = (key, max) => {
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % max;
};

class HashTable {
  constructor() {
    this.storage = [];
    this.storageLimit = 15;
  }

  print() {
    console.log(this.storage);
  }

  add(key, value) {
    const {storage, storageLimit} = this;
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  }

  find(key) {
    const {storage, storageLimit} = this;
    var index = hash(key, storageLimit);
    if(storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  }

}

let ht = new HashTable();
ht.print();
// console.log(hash("name", 4));
ht.add("123-456-7890", ["Richard", "123 main st", "123-456-7890"]);
ht.add("0987-765-4321", ["Zoe", "888 dog st","0987-765-4321"]);
ht.print();
console.log(ht.find("0987-765-4321"));
// {
//   "718-123-4567": {
//     "name": "Richard Macias",
//     "address": "123 main st",
//     "phone": "718-123-4567"
//   }
// }

