export default class MinHeap{
    constructor(){
        this.heap = [null];
        this.size = 0;
    }

    add(value){
        this.heap.push(value);
        console.log(value);
        console.log(this.heap);
        this.size++;
        this.bubbleUp();
    }

    bubbleUp(){
        console.log('Bubble up');
        let current = this.size;
        while(current > 1 && this.heap[current] < this.heap[this.getParent(current)]){
            console.log(this.heap);
            console.log(`A swap will occur between ${current} and ${this.getParent(current)}`);
            this.swap(current, getParent(current));
            current = getParent(current);
        }
    }

    heapify(){
        let current = 1;
        let leftChild = this.getLeft(current);
        let rightChild = this.getRight(current);
        while(this.canSwap(current, leftChild, rightChild)){
            leftChild = this.getLeft(current);
            rightChild = this.getRight(current);
        }
    }

    exists(index){
        return index <= this.size;
    }

    popMin(){
        if(!this.size){
            return null;
        }
        console.log(`Swapping ${this.heap[1]} with ${this.heap[this.size]}`);
        this.swap(1, this.size);
        const min = this.heap.pop();
        console.log(`Removing min ${min} from the heap`);
        this.size--;
        console.log(this.heap);
        return min;
    }

    canSwap()

    swap(a, b){
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    getParent(current){
        return Math.floor(current / 2);
    }

    getLeft(current){
        return current * 2;
    }

    getRight(current){
        return current * 2 + 1;
    }
}