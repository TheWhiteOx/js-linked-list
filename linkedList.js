/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  let head = null,
      tail = null,
      size = 0

	const getHead = function() {
	 return head
	}

	const getTail = function() {
	 return tail
	}

	const add = function(value) {
  	let newTail = _createNode(value);

    if (!head) {
        head = newTail;
    }

    if (tail) {
        tail.next = newTail;
    }

    tail = newTail;

    return newTail
	}

	const get = function(n) {
    let node = head || false;
    let counter = 0;

    while (counter < n) {
      counter = counter + 1;
      node = node.next || false;
    }
    return node
	}

	const remove = function(n) {

    let nodeToRemove = head || false;
    let nodeAfter = nodeToRemove.next;
    let nodeBefore = head
    let count = 0;

    if (n === 0) {
      nodeToRemove = head;
      head = nodeToRemove.next;
      return nodeToRemove
    }

    while (count < n) {
      nodeBefore = nodeToRemove;
      nodeToRemove = nodeToRemove.next
      count = count + 1;
    }

    nodeBefore.next = nodeToRemove.next;

    return nodeToRemove
	}

	const insert = function(value, n) {

	}

	function _createNode(value) {
		return {
			value: value,
			next: null
		}
	}

	return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };
}