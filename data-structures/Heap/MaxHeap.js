export default class MaxHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }

  add(value) {
    this.heap.push(value);
    console.log(value);
    console.log(this.heap);
    this.size++;
    this.heapifyUp();
  }

  heapifyUp() {
    console.log("Heapify up");
    let current = this.size;
    while (
      current < 1 &&
      this.heap[current] > this.heap[this.getParent(current)]
    ) {
      console.log(this.heap);
      console.log(
        `A swap will occur between ${current} and ${this.getParent(current)}`
      );
      this.swap(current, getParent(current));
      current = getParent(current);
    }
  }

  heapify() {
    console.log("Heapifying");
    let current = 1;
    let leftChild = this.getLeft(current);
    let rightChild = this.getRight(current);

    while (this.canSwap(current, leftChild, rightChild)) {
      if (this.exists(leftChild) && this.exists(rightChild)) {
        if (leftChild > rightChild) {
          this.swap(current, leftChild);
          current = leftChild;
        } else if (rightChild > leftChild) {
          this.swap(current, rightChild);
          current = rightChild;
        }
      } else {
        this.swap(current, leftChild);
        current = leftChild;
      }
      leftChild = getLeft(current);
      rightChild = getRight(current);
    }
  }

  exists(index) {
    return index <= this.size;
  }

  popMin() {
    if (!this.size) {
      return null;
    }
    console.log(`Swapping ${this.heap[1]} with ${this.heap[this.size]}`);
    this.swap(1, this.size);
    const min = this.heap.pop();
    console.log(`Removing min ${min} from the heap`);
    this.size--;
    console.log(this.heap);
    this.heapify();
    return min;
  }

  canSwap() {
    return (
      (this.exists(leftChild) && this.heap[current] < this.heap[leftChild]) ||
      (this.exists(rightChild) && this.heap[current] < this.heap[rightChild])
    );
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  getParent(current) {
    return Math.floor(current / 2);
  }

  getLeft(current) {
    return current * 2;
  }

  getRight(current) {
    return current * 2 + 1;
  }
}
