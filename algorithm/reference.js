//순열
function getPermutation(k, arr) {
  const results = [];
  if (k === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const permutations = getPermutation(k - 1, rest);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
}

//조합
function getCombination(k, arr) {
  const results = [];
  if (k === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index) => {
    const rest = arr.slice(index + 1);
    const combinations = getCombination(k - 1, rest);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });

  return results;
}

//병합정렬
function mergeSort(array) {
  if (array.length < 2) return array;

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

//bfs
function bfs(start, graph, visited) {
  const result = []; //출력을 원하면
  const queue = [start];
  visited[start] = true;

  let point = 0;
  while (queue.length > point) {
    const end = queue.length;
    while (end > point) {
      const now = queue[point++];
      result.push(now); //출력을 원하면
      graph[now].forEach((next) => {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      });
    }
  }

  return result; //출력을 원하면
}

//dfs
function dfs(start, graph, visited) {
  visited[start] = true;

  graph[start].forEach((next) => {
    if (!visited[next]) {
      visited[next] = true;
      dfs(next, graph, visited);
      visited[next] = false;
    }
  });
}

//최소 힙
class MinHeap {
  constructor() {
    this.node = [];
  }

  add(num) {
    this.node.push(num);
    this.bottomUp();
  }

  bottomUp(index = this.node.length - 1) {
    //자기 자신만 있을 경우 종료
    if (index < 1) return;
    else {
      const childNode = this.node[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.node[parentIndex];
      //부모가 더 작을 경우 바로 종료
      if (parentNode <= childNode) return;
      //   if (parentNode > childNode) return; //최대힙
      else {
        //그렇지 않으면 자리 바꾸기
        this.node[index] = parentNode;
        this.node[parentIndex] = childNode;
        this.bottomUp(parentIndex); //재귀함수 써서 반복
      }
    }
  }

  delete() {
    const min = this.node[0];

    if (this.node.length === 1) {
      //노드가 하나밖에없으면 삭제 후 리턴
      this.node.pop();
      return min;
    } else {
      this.node[0] = this.node.pop(); //맨 마지막 값 루트로 올리기
      this.topDown(); //삭제 되더라도 최소값을 루트로 올려야되기에 실행
      return min;
    }
  }
  topDown(index = 0) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    const length = this.node.length;
    let minimumIndex = index;
    if (!this.node[leftChildIndex] && !this.node[rightChildIndex]) return; //자식이 없을 경우
    if (!this.node[rightChildIndex]) {
      //왼쪽 자식만 있을 경우
      //   if (this.node[leftChildIndex] > this.node[minimumIndex]) { //최대힙
      if (this.node[leftChildIndex] < this.node[minimumIndex]) {
        minimumIndex = leftChildIndex;
      }
    }
    //둘다 있지만 둘 중 더 작은값을 찾아 바꾸는 경우
    // if (this.node[leftChildIndex] < this.node[rightChildIndex]) { //최대힙

    if (this.node[leftChildIndex] > this.node[rightChildIndex]) {
      //오른자식이 더 작을 때
      if (
        rightChildIndex <= length &&
        this.node[rightChildIndex] < this.node[minimumIndex]
      ) {
        //   if (
        //     rightChildIndex <= length &&
        //     this.node[rightChildIndex] > this.node[minimumIndex]
        //   ) {
        //     // 최대힙
        minimumIndex = rightChildIndex;
      }
    } else {
      //왼자식이 더 작을 때
      if (
        leftChildIndex <= length &&
        this.node[leftChildIndex] < this.node[minimumIndex]
      ) {
        //   if (
        //     leftChildIndex <= length &&
        //     this.node[leftChildIndex] > this.node[minimumIndex]
        //   ) {    //최대힙

        minimumIndex = leftChildIndex;
      }
    }

    if (minimumIndex !== index) {
      //인덱스값 바꾸기
      const tmp = this.node[minimumIndex];
      this.node[minimumIndex] = this.node[index];
      this.node[index] = tmp;
      this.topDown(minimumIndex);
    }
  }
}
//최소 힙 실행
// const heap = new MinHeap();
// heap.add(50);
// heap.add(4);
// heap.add(1);
// heap.add(90);
// heap.add(4);
// heap.add(5);
// heap.add(8865);
// heap.delete();
// heap.delete();
// heap.delete();
// heap.delete();
// console.log(heap);

//최대 힙
class MaxHeap {
  constructor() {
    this.node = [];
  }

  add(num) {
    this.node.push(num);
    this.bottomUp();
  }

  bottomUp(index = this.node.length - 1) {
    //자기 자신만 있을 경우 종료
    if (index < 1) return;
    else {
      const childNode = this.node[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.node[parentIndex];
      //부모가 더 클 경우 바로 종료
      if (parentNode > childNode) return;
      else {
        //그렇지 않으면 자리 바꾸기
        this.node[index] = parentNode;
        this.node[parentIndex] = childNode;
        this.bottomUp(parentIndex); //재귀함수 써서 반복
      }
    }
  }

  delete() {
    const min = this.node[0];

    if (this.node.length === 1) {
      //노드가 하나밖에없으면 삭제 후 리턴
      this.node.pop();
      return min;
    } else {
      this.node[0] = this.node.pop(); //맨 마지막 값 루트로 올리기
      this.topDown(); //삭제 되더라도 최소값을 루트로 올려야되기에 실행
      return min;
    }
  }
  topDown(index = 0) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    const length = this.node.length;
    let minimumIndex = index;
    if (!this.node[leftChildIndex] && !this.node[rightChildIndex]) return; //자식이 없을 경우
    if (!this.node[rightChildIndex]) {
      //왼쪽 자식만 있을 경우
      if (this.node[leftChildIndex] > this.node[minimumIndex]) {
        minimumIndex = leftChildIndex;
      }
    }
    //둘다 있지만 둘 중 더 작은값을 찾아 바꾸는 경우
    if (this.node[leftChildIndex] < this.node[rightChildIndex]) {
      //오른자식이 더 클 때
      if (
        rightChildIndex <= length &&
        this.node[rightChildIndex] > this.node[minimumIndex]
      ) {
        minimumIndex = rightChildIndex;
      }
    } else {
      //왼자식이 더 클 때
      if (
        leftChildIndex <= length &&
        this.node[leftChildIndex] > this.node[minimumIndex]
      ) {
        minimumIndex = leftChildIndex;
      }
    }

    if (minimumIndex !== index) {
      //인덱스값 바꾸기
      const tmp = this.node[minimumIndex];
      this.node[minimumIndex] = this.node[index];
      this.node[index] = tmp;
      this.topDown(minimumIndex);
    }
  }
}
