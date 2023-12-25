const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.search(this.rootNode, data) !== null;
  }

  search(node, data) {
    if (node === null || node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this.search(node.left, data);
    }

    return this.search(node.right, data);
  }
  find(data) {
  return this.search(this.rootNode, data);
}

remove(data) {
  this.rootNode = this.removeNode(this.rootNode, data);
  }
  min() {
  let currentNode = this.rootNode;
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }
  return currentNode.data;
}

max() {
  let currentNode = this.rootNode;
  while (currentNode.right !== null) {
    currentNode = currentNode.right;
  }
  return currentNode.data;
}


}

module.exports = {
  BinarySearchTree
};