const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// dev/stdin

const [N, M] = input[0].split(" ").map(Number); // 유저 수, 친구 관계 수
// 이건 BFS 같아..
const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function bfs(start) {
  const visited = Array(N + 1).fill(false);
  const distance = Array(N + 1).fill(0);
  const queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
    const current = queue.shift();
    for (const neighbor of graph[current]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        distance[neighbor] = distance[current] + 1;
        queue.push(neighbor);
      }
    }
  }
  return distance.reduce((acc, cur) => acc + cur, 0);
}

let minSum = Infinity;
let answer = 0;

for (let i = 1; i <= N; i++) {
  const sum = bfs(i);
  if (sum < minSum) {
    minSum = sum;
    answer = i;
  }
}

console.log(answer);
