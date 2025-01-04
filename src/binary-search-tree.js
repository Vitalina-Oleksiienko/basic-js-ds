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
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this._root) {
      this._root = newNode;
    } else {
      this._insertNode(this._root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this._searchNode(this._root, data) !== null;
  }

  _searchNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      return this._searchNode(node.left, data);
    } else if (data > node.data) {
      return this._searchNode(node.right, data);
    } else {
      return node;
    }
  }

  find(data) {
    return this._searchNode(this._root, data);
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        const minRight = this._findMinNode(node.right);
        node.data = minRight.data;
        node.right = this._removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this._root) return null;
    return this._findMinNode(this._root).data;
  }

  _findMinNode(node) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }

  max() {
    if (!this._root) return null;

    let node = this._root;
    while (node && node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};