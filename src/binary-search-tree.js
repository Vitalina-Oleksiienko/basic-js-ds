const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
class BinarySearchTree {

  root() {
   throw new NotImplementedError('Not implemented');
  }

  add(data) {
   if (!this.root()) {
     this.root = new Node(data);
     return;
   }

   const node = this._add(data, this.root());

   if (node.data < this.root().data) {
     this.root = node;
   }
  }

  _add(data, node) {
   if (data < node.data) {
     if (!node.left) {
       node.left = new Node(data);
       return node.left;
     } else {
       return this._add(data, node.left);
     }
   } else {
     if (!node.right) {
       node.right = new Node(data);
       return node.right;
     } else {
       return this._add(data, node.right);
     }
   }
  }
  find(data) {
   const node = this._find(data, this.root());
   return node ? node : null;
  }

  _find(data, node) {
   if (node === null) {
     return null;
   }

   if (data === node.data) {
     return node;
   } else if (data < node.data) {
     return this._find(data, node.left);
   } else {
     return this._find(data, node.right);
   }
  }
  has(data) {
      return this._find(data, this.root()) !== null;
  }
   remove(data) {
      this.root = this._remove(data, this.root());
  }

  _remove(data, node) {
      if (node === null) {
          return null;
      }

      if (data < node.data) {
          node.left = this._remove(data, node.left);
      } else if (data > node.data) {
          node.right = this._remove(data, node.right);
      } else {
          if (node.left === null) {
              return node.right;
          } else if (node.right === null) {
              return node.left;
          } else {
              const successor = this._findMin(node.right);
              node.data = successor.data;
              node.right = this._remove(successor.data, node.right);
          }
      }

      return node;
  }

   min() {
      if (this.root === null) {
          return null;
      }
      return this._findMin(this.root());
  }

  _findMin(node) {
      while (node.left !== null) {
          node = node.left;
      }
      return node;
  }
  max() {
      if (this.root === null) {
          return null;
      }
      return this._findMax(this.root());
  }

  _findMax(node) {
      while (node.right !== null) {
          node = node.right;
      }
      return node;
  }

}




module.exports = {
  BinarySearchTree
};