const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// dev/stdin
const N = parseInt(input[0]);
const grid = [];
for (let i = 1; i <= N; i++) {
  grid.push(input[i].split("").map(Number));
}

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const visited = Array.from({ length: N }, () => Array(N).fill(false));

function bfs(x, y) {
  let cnt = 1;
  const queue = [[x, y]];
  visited[x][y] = true;

  while (queue.length > 0) {
    const [cx, cy] = queue.shift();
    for (const [dx, dy] of directions) {
      const nx = cx + dx;
      const ny = cy + dy;
      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        grid[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        cnt++;
      }
    }
  }

  return cnt;
}

const result = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (grid[i][j] === 1 && !visited[i][j]) {
      const count = bfs(i, j);
      result.push(count);
    }
  }
}

result.sort((a, b) => a - b);

console.log(result.length);
result.forEach((count) => console.log(count));
