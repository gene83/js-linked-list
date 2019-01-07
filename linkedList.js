/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(value) {
    const newNode = {
      value: value,
      next: null
    };

    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
    return newNode;
  }

  function remove(i) {
    if (get(i) === head) {
      head = head.next;
    } else if (get(i) === tail) {
      tail = get(i - 1);
      tail.next = null;
    } else if (get(i)) {
      get(i - 1).next = get(i + 1);
    } else {
      return false;
    }
  }

  function get(index) {
    let currentNode = head;

    if (index < 0) {
      return false;
    }

    for (let i = 0; i < index; i++) {
      if (currentNode.next !== null) {
        currentNode = currentNode.next;
      } else {
        return false;
      }
    }
    return currentNode;
  }

  function insert(value, i) {
    const newNode = {
      value: value,
      next: null
    };

    if (get(i - 1) === tail) {
      tail.next = newNode;
    } else if (get(i) === head) {
      newNode.next = head;
      head = newNode;
    } else if (get(i)) {
      newNode.next = get(i);
      get(i - 1).next = newNode;
    } else {
      return false;
    }
  }

  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert
  };
}
