/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
	let linkedList = {
		head: null,
		tail: null,
    size: 0
	};

	linkedList.getHead = function() {
	 return linkedList.head
	}

	linkedList.getTail = function() {
	 return linkedList.tail
	}

	linkedList.add = function(value) {
  	let newTail = _createNode(value);

    if (!linkedList.head) {
        linkedList.head = newTail;
    }

    if (linkedList.tail) {
        linkedList.tail.next = newTail;
    }

    linkedList.tail = newTail;

    return newTail
	}

	linkedList.get = function(n) {
    let node = linkedList.head || false;
    let counter = 0;

    while (counter < n) {
      counter = counter + 1;
      node = node.next || false;
    }
    return node
	}

	linkedList.remove = function(n) {

    let nodeToRemove = linkedList.head || false;
    let nodeAfter = nodeToRemove.next;
    let nodeBefore = linkedList.head
    let count = 0;

    if (n === 0) {
      nodeToRemove = linkedList.head;
      linkedList.head = nodeToRemove.next;
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

	linkedList.insert = function(value, n) {

	}

	function _createNode(value) {
		return {
			value: value,
			next: null
		}
	}

	return linkedList;
}