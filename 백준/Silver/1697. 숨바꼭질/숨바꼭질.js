const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");


const [n, k] = input[0].split(" ").map(Number);

const MAX = 100001;
const visited = Array(MAX).fill(false);
const queue = [[n, 0]];

visited[n] = true;

while (queue.length > 0) {
  const [current, time] = queue.shift();

  if (current === k) {
    console.log(time);
    break;
  }

  for (const next of [current - 1, current + 1, current * 2]) {
    if (next >= 0 && next < MAX && !visited[next]) {
      visited[next] = true;
      queue.push([next, time + 1]);
    }
  }
}
