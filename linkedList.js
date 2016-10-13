/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
	let linkedList = {
		head: null,
		tail: null
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
        
	}

	linkedList.remove = function(n) {

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