// Create a hash table that allows a sales associate to enter a customer's name, address,and phone number into the system
// and look up customers using their phone numbers.

var hash = (key, max) => {
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % max; //
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
console.log(hash("name", 4));
ht.add("123-456-7890", ["Richard", "123 main st", "123-456-7890"]);
ht.add("0987-765-4321", ["Zoe", "888 dog st","0987-765-4321"]);
ht.print();
console.log(ht.find("0987-765-4321"));
{
  "718-123-4567": {
    "name": "Richard",
    "address": "123 main st",
    "phone": "718-123-4567"
  }
}

// Create a hash table that allows a store owner to track their store's inventory and quantity.

class Inventory {
  constructor(){
    this.storage = [];
    this.storageLimit = 50;
  }

  hash(key, max) {
    let hash = 0;
    for( var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }

  print(){
    console.log(this.storage)
  }

  add(key, value) {
    const {storage, storageLimit, hash} = this;
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
    const {storage, storageLimit, hash} = this;
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

let hashTable = new Inventory()
hashTable.add("chocolate", 12);
hashTable.add("honey", 20);
hashTable.add("ice tea", 3);
hashTable.print();

console.log(hashTable.find("chocolate"));
console.log(hashTable.find("ice tea"));

// 3. Create a hash table that allows digital copies of newspapers to be entered and searched by publisher and publication date.

var hash = (key, max) => {
  var hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % max; //
};

class Newspaper {
  constructor() {
    this.storage = [];
    this.storageLimit = 100;
  }

  print() {
    console.log(this.storage);
  }

  hash(key, max) {
    let hash = 0;
    for( var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }

  // add(article) {
  //   const { storage, storageLimit } = this;
  //   let key = article.publisher + article.date;
  //   var index = hash(key, storageLimit);
  //   if (storage[index] === undefined) {
  //     storage[index] = article;
  //   } else {
  //     while (storage[index] !== undefined) {
  //       index++;
  //   }
  //   storage[index] = article;
  // }

  add(key, value) {
    const { storage, storageLimit, hash } = this;
    var index = hash(key+value, storageLimit);
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

  // find(article) {
  //   const { storage, storageLimit } = this;
  //   let key = article.publisher + article.date;
  //   // let articleFound = [];
  //   var index = hash(key, storageLimit);
  //   if (storage[index] === undefined) {
  //     return "Sorry no articles were found.";
  //   } else {
  //     if (storage[index] === key) {
  //       return storage[index];
  //     }
  //   }
  // }

  find(key, value) {
    const { storage, storageLimit, hash } = this;
    var index = hash(key+value, storageLimit);
    if (storage[index] === undefined) {
      return "no publication found";
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
      return undefined;
    }
  }
}

let ht = new Newspaper();
ht.add("The New York Times", "04/21/2019");
ht.add("The Wall Street Journal", "08/14/2018");
ht.add("Chicago Tribune", "05/19/2019");
ht.add("Los Angeles Times", "05/22/2019");
let search1 = ht.find("The New York Times", "04/21/2019");
let search2 = ht.find("The Wall Street Journal", "08/14/2018");
let search3 = ht.find("New York Times", "04/07/2019");
let search4 = ht.find("Los Angeles Times", "05/22/2019");
console.log('search1: ', search1);
console.log('search2: ', search2);
console.log('search2: ', search3);
console.log('search2: ', search4);
ht.print();
