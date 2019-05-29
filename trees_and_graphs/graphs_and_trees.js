//Given a Binary Search Tree and a value, write a function that checks to see whether the value exists within the tree.
//Example: The value 10 exists in the tree. The value 23 does not exist in the tree.

//SET current data TO root node
// FUNCTION find()
// WHILE current.data !== data
//  IF data < current.data
//    current = current.left
// ELSE
//    current = current.right
// IF current = null
//    RETURN FALSE
// END FUNCTION

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  find(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  //Given a Binary Search Tree and two nodes, n1 and n2, write a function that finds the distance between the two nodes.

  //Example: The distance between the nodes 4 and 10 is 4. The distance between the nodes 8 and 10 is 1. The distance between the nodes 1 and 14 is 4.

  getCommonAncestor(n1, n2) {
    let current = this.root;
    while (current) {
      if (n1 < current.data && n2 < current.data) {
        current = current.left;
      } else if (n1 > current.data && n2 > current.data) {
        current = current.right;
      } else {
        return current;
      }
    }
  }

  // TODO: if number is not in the tree, it returns the max value
  // it should return null
  getDistance(node, n) {
    let current = node;
    let count = 0;

    while (current) {
      if (n === current.data) {
        break;
      }
      if (n < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      count++;
    }
    return count;
  }

  getDistanceBetween(n1, n2) {
    const commonAncestor = this.getCommonAncestor(n1, n2);
    const n1Dist = this.getDistance(commonAncestor, n1);
    const n2Dist = this.getDistance(commonAncestor, n2);
    return n1Dist + n2Dist;
  }
}

const bst = new BST();
bst.add(8);
bst.add(3);
bst.add(10);
bst.add(1);
bst.add(6);
bst.add(14);
bst.add(4);
bst.add(7);
bst.add(13);
// console.log(bst);
// console.log(bst.find(10));
// console.log(bst.find(5));
// console.log(bst.find(8));
// console.log(bst.getCommonAncestor(4,10));
//console.log(bst.getCommonAncestor(1,6));
// console.log(bst.getDistance(bst.root, 7)); // should return 3
console.log(bst.getDistanceBetween(8, 10));
console.log(bst.getDistanceBetween(4, 10));
console.log(bst.getDistanceBetween(1, 14));
