/**
 * @fileOverview Basic binary tree for testing purposes.
 */
var zipper = require('../index').zipper;
var tree = require('../index').tree;

/* Binary
 ******************************************************************************/
var Binary = function(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
};

Binary.prototype.print = function() {
    return '{' + this.value + " " +
        (this.left ? this.left.print() : '{}')  + " "+
        (this.right ? this.right.print() : '{}') + '}';
};

Binary.construct = function(x, _, _, children) {
    return new Binary(x.value,
        children.left,
        children.right)
};


var walk = function(root, path) {
    path = path || [];
    return (root ?
        walk(root.right, walk(root.left, path.concat(root.value))) :
        path);
};

var binaryZipper = function(root) {
    return tree.treeZipper(
        function(x) {
            if (x.left && x.right)
                return ['left', 'right'];
            else if (x.left)
                return ['left'];
            else if (x.right)
                return ['right'];
            return [];
        },
        function(r, c) { return r[c]; },
        Binary.construct,
        root);
};

/* Export
 ******************************************************************************/
exports.Binary = Binary;
exports.walk = walk;
exports.zipper = binaryZipper;