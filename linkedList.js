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
    let newNode = {
      value: value,
      next: null
    };

    if (!head) {
      head = newNode;
      tail = newNode;
      return newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }

  function remove(index) {
    if (!get(index)) {
      return false;
    } else if (index === 0) {
      head = get(index + 1);
    } else if (get(index) === tail) {
      tail = get(index - 1);
      tail.next = null;
    } else {
      get(index - 1).next = get(index + 1);
    }
  }

  function get(index) {
    let currentNode = head;

    if (index < 0) {
      return false;
    }
    for (let i = 0; i < index; i++) {
      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        return false;
      }
    }
    return currentNode;
  }

  function insert(value, index) {
    let newNode = {
      value: value,
      next: null
    };

    if (get(index - 1) === tail) {
      add(newNode);
    } else if (!get(index)) {
      return false;
    } else if (index === 0) {
      newNode.next = head;
      head = newNode;
    } else {
      newNode.next = get(index);
      get(index - 1).next = newNode;
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
