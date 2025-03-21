const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// dev/stdin
const [N, r, c] = input[0].split(" ").map(Number);

let res = 0;

function divide(n, x, y) {
  if (n === 0) return 0;

  // 사각형 전체 크기가 2^n-1 * 2^n-1 이므로
  const half = 2 ** (n - 1);
  const area = half * half;

  if (x < half && y < half) {
    // 1사분면
    divide(n - 1, x, y);
  } else if (x < half && y >= half) {
    // 2사분면
    res += area;
    divide(n - 1, x, y - half);
  } else if (x >= half && y < half) {
    // 3사분면
    res += 2 * area;
    divide(n - 1, x - half, y);
  } else {
    // 4사분면
    res += 3 * area;
    divide(n - 1, x - half, y - half);
  }
}

divide(N, r, c);
console.log(res);
